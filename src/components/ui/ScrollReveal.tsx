'use client'

import { useEffect, useRef, type ReactNode } from 'react'

interface Props {
  children: ReactNode
  stagger?: boolean
  className?: string
  style?: React.CSSProperties
}

export default function ScrollReveal({ children, stagger = false, className = '', style }: Props) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('in')
          obs.unobserve(el)
        }
      },
      { threshold: 0.1 }
    )

    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  const baseStyle: React.CSSProperties = stagger
    ? {}
    : {
        opacity: 0,
        transform: 'translateY(22px)',
        transition: 'opacity 0.7s ease, transform 0.7s ease',
      }

  return (
    <div
      ref={ref}
      className={`${stagger ? 'stagger-reveal' : 'reveal-anim'} ${className}`}
      style={{ ...baseStyle, ...style }}
    >
      {children}
    </div>
  )
}
