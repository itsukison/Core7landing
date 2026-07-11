import { useEffect, useState } from 'react'
import Nav from './components/Nav.jsx'
import Hero from './components/Hero.jsx'
import Sections from './components/Sections.jsx'
import LegalPage from './components/LegalPage.jsx'
import Footer from './components/Footer.jsx'
import { content } from './content.js'

function getRoute() {
  const match = window.location.hash.match(/^#\/([^#?]+)/)
  return match?.[1] ?? 'home'
}

export default function App() {
  const [language, setLanguage] = useState('en')
  const [route, setRoute] = useState(getRoute)
  const copy = content[language]
  const page = copy.legalPages.find((item) => item.id === route)

  useEffect(() => {
    document.documentElement.lang = copy.htmlLang
    document.title = page ? `${page.title} | ${copy.title}` : copy.title
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute('content', copy.description)
  }, [copy, page])

  useEffect(() => {
    const onHashChange = () => setRoute(getRoute())
    window.addEventListener('hashchange', onHashChange)
    return () => window.removeEventListener('hashchange', onHashChange)
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
        <LegalPage page={page} />
      ) : (
        <>
          <Hero copy={copy.hero} />
          <Sections copy={copy.sections} />
        </>
      )}
      <Footer copy={copy.footer} />
    </>
  )
}
