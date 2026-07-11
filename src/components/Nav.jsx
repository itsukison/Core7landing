import { LANGUAGES } from '../content.js'
import ScrambleText from './ScrambleText.jsx'

function NavLink({ href, children, className }) {
  return (
    <ScrambleText as="a" href={href} className={className}>
      {children}
    </ScrambleText>
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
