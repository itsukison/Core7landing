import { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(useGSAP, ScrollTrigger)

function DetailList({ items }) {
  return (
    <dl className="detail-list">
      {items.map(([term, description]) => (
        <div className="detail-row" key={term}>
          <dt>{term}</dt>
          <dd>{description}</dd>
        </div>
      ))}
    </dl>
  )
}

export default function LegalPage({ page, backLabel, language }) {
  const rootRef = useRef(null)
  const backHref = language === 'en' ? '/' : `/?lang=${language}`

  // Same entrance as the landing sections: each block fades up once as it
  // enters the viewport; skipped entirely under reduced motion.
  useGSAP(
    () => {
      const mm = gsap.matchMedia()
      mm.add('(prefers-reduced-motion: no-preference)', () => {
        for (const el of rootRef.current.querySelectorAll('.legal-section > *')) {
          gsap.from(el, {
            opacity: 0,
            y: 14,
            duration: 0.7,
            ease: 'power2.out',
            scrollTrigger: { trigger: el, start: 'top 88%', once: true },
          })
        }
      })
    },
    { scope: rootRef, dependencies: [page.id], revertOnUpdate: true }
  )

  return (
    <main className="page-shell" ref={rootRef}>
      <section className="section legal-section">
        <p className="section-label">{page.label}</p>
        <h1 className="page-title">{page.title}</h1>
        <p className="statement">{page.statement}</p>
        {page.paragraphs?.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
        {page.items ? <DetailList items={page.items} /> : null}
        {page.contact ? (
          <div className="page-contact">
            <p>{page.contact.label}</p>
            <a href={page.contact.href}>{page.contact.text}</a>
          </div>
        ) : null}
        <a className="page-back" href={backHref}>
          {backLabel}
        </a>
      </section>
    </main>
  )
}
