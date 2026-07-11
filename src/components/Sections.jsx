import { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(useGSAP, ScrollTrigger)

const APP_STORE_URL =
  'https://apps.apple.com/jp/app/%E6%95%AC%E8%AA%9E%E3%83%9C%E3%82%BF%E3%83%B3-ai%E3%82%AD%E3%83%BC%E3%83%9C%E3%83%BC%E3%83%89/id6777901723'

export default function Sections({ copy }) {
  const rootRef = useRef(null)

  // Each block fades up once as it enters the viewport; skipped entirely
  // under reduced motion.
  useGSAP(
    () => {
      const mm = gsap.matchMedia()
      mm.add('(prefers-reduced-motion: no-preference)', () => {
        for (const el of rootRef.current.querySelectorAll('.section > *')) {
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
    { scope: rootRef }
  )

  return (
    <main ref={rootRef}>
      <section id="philosophy" className="section">
        <p className="section-label">{copy.philosophy.label}</p>
        <p>{copy.philosophy.paragraphs[0]}</p>
        <p className="statement">{copy.philosophy.paragraphs[1]}</p>
        <p>{copy.philosophy.paragraphs[2]}</p>
      </section>

      <section id="signal" className="section">
        <p className="section-label">{copy.signal.label}</p>
        <p>{copy.signal.intro}</p>
        <ul className="signal-list" aria-label={copy.signal.listLabel}>
          {copy.signal.qualities.map((quality) => (
            <li key={quality}>{quality}</li>
          ))}
        </ul>
        <p>{copy.signal.closing}</p>
      </section>

      <section id="product" className="section section-wide">
        <p className="section-label">{copy.product.label}</p>
        <p className="statement">{copy.product.statement}</p>
        <p>{copy.product.body}</p>
        <a
          className="product-shot"
          href={APP_STORE_URL}
          target="_blank"
          rel="noreferrer"
        >
          <img
            src="/keigobutton.png"
            alt={copy.product.imageAlt}
            loading="lazy"
          />
        </a>
        <ul className="stats" aria-label={copy.product.statsLabel}>
          {copy.product.stats.map(([num, key]) => (
            <li key={key}>
              <span className="stats-num">{num}</span>
              <span className="stats-key">{key}</span>
            </li>
          ))}
        </ul>
        <a className="store-link" href={APP_STORE_URL} target="_blank" rel="noreferrer">
          {copy.product.storeLink}
        </a>
      </section>
    </main>
  )
}
