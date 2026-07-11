import { useEffect, useRef } from 'react'

const SCRAMBLE = '<>!?;:*=#%'

export function useScrambleText() {
  const timer = useRef(0)

  useEffect(() => () => clearInterval(timer.current), [])

  return (e) => {
    const el = e.currentTarget
    const original = el.dataset.text || el.textContent || ''
    if (!original) return

    let frame = 0
    clearInterval(timer.current)
    el.style.minHeight = `${el.getBoundingClientRect().height}px`
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
        el.style.minHeight = ''
      }
    }, 34)
  }
}

export default function ScrambleText({
  as: Component = 'span',
  children,
  className,
  text,
  onFocus,
  onMouseEnter,
  ...props
}) {
  const scramble = useScrambleText()
  const original = text ?? (typeof children === 'string' || typeof children === 'number' ? String(children) : '')

  const handleMouseEnter = (e) => {
    scramble(e)
    onMouseEnter?.(e)
  }

  const handleFocus = (e) => {
    scramble(e)
    onFocus?.(e)
  }

  return (
    <Component
      {...props}
      className={className}
      data-text={original}
      onMouseEnter={handleMouseEnter}
      onFocus={handleFocus}
    >
      {children}
    </Component>
  )
}
