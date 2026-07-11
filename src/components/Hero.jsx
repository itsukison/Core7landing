import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { TextPlugin } from 'gsap/TextPlugin'
import { AsciiEngine, SCENE_ORDER } from '../ascii/engine.js'

gsap.registerPlugin(useGSAP, TextPlugin)

export default function Hero({ copy }) {
  const mainRef = useRef(null)
  const taglineRef = useRef(null)
  const engineRef = useRef(null)
  const [idx, setIdx] = useState(0)

  useEffect(() => {
    const main = new AsciiEngine(mainRef.current, {
      fontSize: window.innerWidth < 640 ? 7 : 14,
      fps: 24,
      scene: SCENE_ORDER[0],
    })
    engineRef.current = main
    main.start()

    // Re-measure and rasterize once both the grid font (cell width) and the
    // display font are available
    if (document.fonts) {
      Promise.all([
        document.fonts.load('14px "IBM Plex Mono"'),
        document.fonts.load('700 100px "Space Grotesk"'),
      ]).then(() => main.refresh())
    }

    // Pause when the hero is off-screen
    const io = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) main.start()
      else main.stop()
    })
    io.observe(mainRef.current.parentElement)

    return () => {
      io.disconnect()
      main.destroy()
    }
  }, [])

  useEffect(() => {
    engineRef.current?.setScene(SCENE_ORDER[idx])
  }, [idx])

  // Type the tagline out character by character; with reduced motion the
  // React-rendered text is left untouched.
  useGSAP(
    () => {
      const mm = gsap.matchMedia()
      mm.add('(prefers-reduced-motion: no-preference)', () => {
        gsap.fromTo(
          taglineRef.current,
          { text: '' },
          {
            text: copy.tagline,
            duration: Math.min(2.4, copy.tagline.length * 0.05),
            ease: 'none',
            delay: 0.5,
          }
        )
      })
    },
    { dependencies: [copy.tagline] }
  )

  const cursorRef = useRef(null)

  const onPointerMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    engineRef.current?.spawnParticles(x, y)
    const cursor = cursorRef.current
    if (cursor) {
      cursor.style.transform = `translate(${x}px, ${y}px) translate(-50%, -50%)`
      cursor.style.opacity = '1'
    }
  }

  const onPointerLeave = () => {
    if (cursorRef.current) cursorRef.current.style.opacity = '0'
  }

  return (
    <header
      id="top"
      className="hero"
      onPointerMove={onPointerMove}
      onPointerLeave={onPointerLeave}
      onClick={() => setIdx((i) => (i + 1) % SCENE_ORDER.length)}
    >
      <pre ref={mainRef} className="hero-canvas" aria-hidden="true" />
      <span ref={cursorRef} className="hero-cursor" aria-hidden="true">
        CLICK
      </span>
      <h1 className="visually-hidden">{copy.hiddenTitle}</h1>
      <p className="hero-tagline" ref={taglineRef}>
        {copy.tagline}
      </p>
    </header>
  )
}
