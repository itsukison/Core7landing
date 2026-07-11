import { useRef } from 'react'
import { LANGUAGES } from '../content.js'

const SCRAMBLE = '<>!?;:*=#%'

function useScramble() {
  const timer = useRef(0)
  return (e) => {
    const el = e.currentTarget
    const original = el.dataset.text
    let frame = 0
    clearInterval(timer.current)
    timer.current = setInterval(() => {
      frame++
      const settled = Math.floor((frame / 12) * original.length)
      el.textContent = original
        .split('')
        .map((ch, i) =>
          ch === ' ' || i < settled ? ch : SCRAMBLE[(Math.random() * SCRAMBLE.length) | 0]
        )
        .join('')
      if (settled >= original.length) {
        clearInterval(timer.current)
        el.textContent = original
      }
    }, 34)
  }
}

function NavLink({ href, children, className }) {
  const scramble = useScramble()
  return (
    <a href={href} data-text={children} onMouseEnter={scramble} className={className}>
      {children}
    </a>
  )
}

function withLanguage(href, language) {
  if (language === 'en') return href

  const [path, hash = ''] = href.split('#')
  const separator = path.includes('?') ? '&' : '?'
  return `${path}${separator}lang=${language}${hash ? `#${hash}` : ''}`
}

export default function Nav({ copy, language, onLanguageChange }) {
  return (
    <nav className="nav" aria-label={copy.navLabel}>
      <a className="nav-logo" href={withLanguage('/#top', language)}>
        CORE7
      </a>
      <div className="nav-group nav-links">
        <NavLink href={withLanguage('/#philosophy', language)}>{copy.philosophy}</NavLink>
        <NavLink href={withLanguage('/#signal', language)}>{copy.signal}</NavLink>
      </div>
      <div className="nav-group nav-links">
        <NavLink href={withLanguage('/#product', language)}>{copy.product}</NavLink>
      </div>
      <div className="nav-group nav-right">
        <NavLink href={withLanguage('/#contact', language)} className="nav-link-desktop">{copy.contact}</NavLink>
        <div className="language-toggle" aria-label="Language">
          {Object.entries(LANGUAGES).map(([key, label]) => (
            <button
              key={key}
              type="button"
              className={key === language ? 'active' : undefined}
              aria-pressed={key === language}
              onClick={() => onLanguageChange(key)}
            >
              {label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  )
}
