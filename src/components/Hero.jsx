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

    // Rasterize the wordmark only after the display font is available
    document.fonts?.load('700 100px "Space Grotesk"').then(() => main.refresh())

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

  const onPointerMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect()
    engineRef.current?.spawnParticles(e.clientX - rect.left, e.clientY - rect.top)
  }

  return (
    <header
      id="top"
      className="hero"
      onPointerMove={onPointerMove}
      onClick={() => setIdx((i) => (i + 1) % SCENE_ORDER.length)}
    >
      <pre ref={mainRef} className="hero-canvas" aria-hidden="true" />
      <h1 className="visually-hidden">{copy.hiddenTitle}</h1>
      <p className="hero-tagline" ref={taglineRef}>
        {copy.tagline}
      </p>
    </header>
  )
}
