/**
 * AsciiEngine — renders animated ASCII scenes into a <pre> element.
 *
 * Two scene styles, matching the reference designs:
 *  - "field" scenes: an offscreen canvas is rasterized (e.g. the wordmark)
 *    and per-cell brightness is mapped to a character ramp.
 *  - "band"  scenes: analytic 2D shapes (diamonds, martini glass) filled
 *    row-by-row with a fixed character sequence stretched across each row.
 *
 * Scene switches dissolve cell-by-cell rather than crossfading.
 */

const FIELD_EDGE_CHARS = ['~', '"', ';', ':', '*', "'"]
const FIELD_SPARSE_CHARS = ['.', ',', '-', '`']

// Deterministic pseudo-random per cell (stable across frames unless seeded by time)
function hash(x, y, s = 0) {
  const n = Math.sin(x * 127.1 + y * 311.7 + s * 74.7) * 43758.5453
  return n - Math.floor(n)
}

function clamp(v, lo, hi) {
  return v < lo ? lo : v > hi ? hi : v
}

// ---------------------------------------------------------------------------
// Scenes
// ---------------------------------------------------------------------------

export const SCENES = {
  wordmark: {
    type: 'field',
    text: 'Core7',
    font: (h) => `700 ${Math.round(h)}px "Space Grotesk", "Helvetica Neue", sans-serif`,
  },

  orb: {
    type: 'band',
    ramp: 'NNNN0000AAAA88886666999944445555222IIII333???!!!',
    // Returns [xLeft, xRight] in px for a given y (px, origin at grid center), or null.
    interval(y, W, H) {
      const r = Math.min(0.36 * H, 0.34 * W)
      if (Math.abs(y) >= r) return null
      const half = Math.sqrt(r * r - y * y)
      return [-half, half]
    },
  },

  glass: {
    type: 'band',
    ramp: '<<!!??33II22554449996688',
    interval(y, W, H) {
      const top = -0.36 * H
      const bowlEnd = -0.04 * H
      const stemEnd = 0.26 * H
      const baseEnd = 0.34 * H
      const bowlW = Math.min(0.28 * W, 0.55 * H)
      if (y >= top && y < bowlEnd) {
        const t = (y - top) / (bowlEnd - top)
        const half = bowlW * (1 - t) + 4
        return [-half, half]
      }
      if (y >= bowlEnd && y < stemEnd) return [-5, 5]
      if (y >= stemEnd && y < baseEnd) {
        const t = (y - stemEnd) / (baseEnd - stemEnd)
        const half = 10 + (bowlW * 0.55 - 10) * t
        return [-half, half]
      }
      return null
    },
  },
}

export const SCENE_ORDER = ['wordmark', 'orb', 'glass']

// ---------------------------------------------------------------------------
// Engine
// ---------------------------------------------------------------------------

export class AsciiEngine {
  constructor(node, opts = {}) {
    this.node = node
    this.fontSize = opts.fontSize ?? 14
    this.lineHeight = opts.lineHeight ?? 1.15
    this.fps = opts.fps ?? 24
    this.particlesEnabled = opts.particles ?? true
    this.shimmer = opts.shimmer ?? true

    this.sceneName = opts.scene ?? 'wordmark'
    this.prevSceneName = null
    this.dissolve = 1 // 0 → 1 while transitioning

    this.cols = 0
    this.rows = 0
    this.cw = 8
    this.ch = this.fontSize * this.lineHeight
    this.field = null // Float32Array of brightness for field scenes
    this.fieldFor = '' // cache key: `${scene}:${cols}x${rows}`
    this.particles = []
    this.raf = 0
    this.last = 0
    this.running = false

    const reduce = window.matchMedia?.('(prefers-reduced-motion: reduce)')
    this.staticMode = !!reduce?.matches

    // Keep the rendered glyph size in sync with the measurement grid
    node.style.fontSize = `${this.fontSize}px`
    node.style.lineHeight = String(this.lineHeight)

    this._measure()
    this._ro = new ResizeObserver(() => this._resize())
    this._ro.observe(node)
    this._resize()
  }

  _measure() {
    const canvas = document.createElement('canvas')
    const ctx = canvas.getContext('2d')
    ctx.font = `${this.fontSize}px "IBM Plex Mono", monospace`
    this.cw = ctx.measureText('M').width || this.fontSize * 0.6
    this.ch = this.fontSize * this.lineHeight
  }

  _resize() {
    const rect = this.node.getBoundingClientRect()
    const cols = Math.max(10, Math.floor(rect.width / this.cw))
    const rows = Math.max(6, Math.floor(rect.height / this.ch))
    if (cols === this.cols && rows === this.rows) return
    this.cols = cols
    this.rows = rows
    this.fieldFor = ''
    this._frame(performance.now())
  }

  /** Re-measure and re-rasterize after webfonts finish loading. */
  refresh() {
    // The initial _measure() may have used a fallback font, producing a wrong
    // cell width and an off-center grid — recompute both once fonts are in.
    this._measure()
    this.cols = 0
    this.rows = 0
    this.fieldFor = ''
    this._resize()
  }

  setScene(name, { instant = false } = {}) {
    if (name === this.sceneName) return
    this.prevSceneName = instant ? null : this.sceneName
    this.sceneName = name
    this.dissolve = instant ? 1 : 0
    this._frame(performance.now())
  }

  spawnParticles(px, py, count = 2) {
    if (!this.particlesEnabled || this.staticMode) return
    const chars = ".,:;*'~"
    for (let i = 0; i < count; i++) {
      if (this.particles.length > 140) this.particles.shift()
      this.particles.push({
        x: px / this.cw,
        y: py / this.ch,
        vx: (Math.random() - 0.5) * 6,
        vy: (Math.random() - 0.5) * 3 + 1.5,
        life: 1,
        char: chars[(Math.random() * chars.length) | 0],
      })
    }
  }

  start() {
    if (this.running) return
    this.running = true
    const loop = (t) => {
      this.raf = requestAnimationFrame(loop)
      if (t - this.last < 1000 / this.fps) return
      this.last = t
      this._frame(t)
    }
    this.raf = requestAnimationFrame(loop)
  }

  stop() {
    this.running = false
    cancelAnimationFrame(this.raf)
  }

  destroy() {
    this.stop()
    this._ro.disconnect()
  }

  // -- rasterization for field scenes --------------------------------------

  _ensureField(name) {
    const key = `${name}:${this.cols}x${this.rows}`
    if (this.fieldFor === key) return
    const scene = SCENES[name]
    const W = Math.round(this.cols * this.cw)
    const H = Math.round(this.rows * this.ch)
    const canvas = document.createElement('canvas')
    canvas.width = W
    canvas.height = H
    const ctx = canvas.getContext('2d', { willReadFrequently: true })
    ctx.fillStyle = '#000'
    ctx.fillRect(0, 0, W, H)
    ctx.fillStyle = '#fff'
    ctx.textAlign = 'center'
    ctx.textBaseline = 'middle'
    // Size the wordmark to fit both axes with margins
    let size = H * 0.62
    ctx.font = scene.font(size)
    const maxW = W * 0.86
    const w = ctx.measureText(scene.text).width
    if (w > maxW) {
      size *= maxW / w
      ctx.font = scene.font(size)
    }
    ctx.fillText(scene.text, W / 2, H * 0.52)

    const data = ctx.getImageData(0, 0, W, H).data
    const field = new Float32Array(this.cols * this.rows)
    for (let r = 0; r < this.rows; r++) {
      for (let c = 0; c < this.cols; c++) {
        // average a few samples inside the cell
        let sum = 0
        let n = 0
        const x0 = Math.floor(c * this.cw)
        const y0 = Math.floor(r * this.ch)
        for (let dy = 1; dy < this.ch; dy += 4) {
          for (let dx = 1; dx < this.cw; dx += 3) {
            const x = x0 + dx
            const y = y0 + dy
            if (x >= W || y >= H) continue
            sum += data[(y * W + x) * 4] / 255
            n++
          }
        }
        field[r * this.cols + c] = n ? sum / n : 0
      }
    }
    this.field = field
    this.fieldFor = key
  }

  // -- character resolution --------------------------------------------------

  _charAt(name, c, r, t) {
    const scene = SCENES[name]
    if (scene.type === 'field') {
      this._ensureField(name)
      const b = this.field[r * this.cols + c]
      const h = hash(c, r)
      // slow shimmer: a small share of cells re-roll their variant over time
      const s = this.shimmer && !this.staticMode ? Math.floor(t / 420) : 0
      const hs = hash(c, r, s)
      if (b > 0.7) {
        if (hs < 0.06) return ';'
        if (hs < 0.11) return ':'
        return '!'
      }
      if (b > 0.42) return FIELD_EDGE_CHARS[(hs * FIELD_EDGE_CHARS.length) | 0]
      if (b > 0.18) {
        if (h > 0.72) return ' '
        return FIELD_SPARSE_CHARS[(hs * FIELD_SPARSE_CHARS.length) | 0]
      }
      return ' '
    }
    // band scene
    const W = this.cols * this.cw
    const H = this.rows * this.ch
    const x = (c + 0.5) * this.cw - W / 2
    const y = (r + 0.5) * this.ch - H / 2
    const iv = scene.interval(y, W, H)
    if (!iv || x < iv[0] || x > iv[1]) return ' '
    const t01 = (x - iv[0]) / Math.max(1, iv[1] - iv[0])
    const idx = clamp(Math.floor(t01 * scene.ramp.length), 0, scene.ramp.length - 1)
    return scene.ramp[idx]
  }

  // -- frame -----------------------------------------------------------------

  _frame(t) {
    if (!this.cols) return
    if (this.dissolve < 1) this.dissolve = Math.min(1, this.dissolve + 0.07)
    else this.prevSceneName = null

    const out = new Array(this.rows)
    for (let r = 0; r < this.rows; r++) {
      let line = ''
      for (let c = 0; c < this.cols; c++) {
        let ch
        if (this.prevSceneName && hash(c, r, 9) > this.dissolve) {
          ch = this._charAt(this.prevSceneName, c, r, t)
        } else {
          ch = this._charAt(this.sceneName, c, r, t)
        }
        line += ch
      }
      out[r] = line
    }

    // particles overwrite grid cells
    if (this.particles.length) {
      const dt = 1 / this.fps
      this.particles = this.particles.filter((p) => {
        p.x += p.vx * dt
        p.y += p.vy * dt
        p.vy += 2.4 * dt
        p.life -= dt * 0.9
        if (p.life <= 0) return false
        const c = Math.round(p.x)
        const r = Math.round(p.y)
        if (r >= 0 && r < this.rows && c >= 0 && c < this.cols) {
          const row = out[r]
          out[r] = row.slice(0, c) + (p.life < 0.35 ? '.' : p.char) + row.slice(c + 1)
        }
        return true
      })
    }

    this.node.textContent = out.join('\n')
  }
}
