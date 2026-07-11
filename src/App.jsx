import { useEffect, useState } from 'react'
import Nav from './components/Nav.jsx'
import Hero from './components/Hero.jsx'
import Sections from './components/Sections.jsx'
import LegalPage from './components/LegalPage.jsx'
import Footer from './components/Footer.jsx'
import { content } from './content.js'

const LANGUAGE_STORAGE_KEY = 'core7-language'

function getRoute() {
  return window.location.pathname
}

function getInitialLanguage() {
  const params = new URLSearchParams(window.location.search)
  const queryLanguage = params.get('lang')
  const storedLanguage = window.localStorage.getItem(LANGUAGE_STORAGE_KEY)

  if (content[queryLanguage]) return queryLanguage
  if (content[storedLanguage]) return storedLanguage
  if (navigator.language.startsWith('ja')) return 'ja'
  return 'en'
}

export default function App() {
  const [language, setLanguage] = useState(getInitialLanguage)
  const [route, setRoute] = useState(getRoute)
  const copy = content[language]
  const page = copy.footerPages.find((item) => item.path === route)

  useEffect(() => {
    document.documentElement.lang = copy.htmlLang
    document.title = page ? `${page.title} | ${copy.title}` : copy.title
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute('content', copy.description)
  }, [copy, page])

  useEffect(() => {
    window.localStorage.setItem(LANGUAGE_STORAGE_KEY, language)
  }, [language])

  useEffect(() => {
    const onLocationChange = () => setRoute(getRoute())
    window.addEventListener('popstate', onLocationChange)
    return () => window.removeEventListener('popstate', onLocationChange)
  }, [])

  useEffect(() => {
    window.requestAnimationFrame(() => {
      if (page) {
        window.scrollTo({ top: 0 })
        return
      }

      const hash = window.location.hash.slice(1)
      if (!hash || hash === 'top') {
        window.scrollTo({ top: 0 })
        return
      }

      document.getElementById(hash)?.scrollIntoView()
    })
  }, [route, page])

  return (
    <>
      <Nav
        copy={{ ...copy.nav, navLabel: copy.navLabel }}
        language={language}
        onLanguageChange={setLanguage}
      />
      {page ? (
        <LegalPage page={page} backLabel={copy.backLabel} language={language} />
      ) : (
        <>
          <Hero copy={copy.hero} />
          <Sections copy={copy.sections} />
        </>
      )}
      <Footer copy={copy.footer} language={language} />
    </>
  )
}
