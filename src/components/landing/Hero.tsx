'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'

const CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*'
const TARGET = 'Small tools. Real value. Shipped.'

export default function Hero() {
  const scrambleRef = useRef<HTMLParagraphElement>(null)

  useEffect(() => {
    let frame = 0
    let rafId: number

    function scramble() {
      const el = scrambleRef.current
      if (!el) return
      el.textContent = TARGET.split('').map((ch, i) => {
        if (ch === ' ') return ' '
        if (i < frame / 2) return ch
        return CHARS[Math.floor(Math.random() * CHARS.length)]
      }).join('')
      if (frame < TARGET.length * 2) {
        frame++
        rafId = requestAnimationFrame(scramble)
      } else {
        el.textContent = TARGET
      }
    }

    const timer = setTimeout(() => { rafId = requestAnimationFrame(scramble) }, 600)
    return () => { clearTimeout(timer); cancelAnimationFrame(rafId) }
  }, [])

  return (
    <section
      id="hero"
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        padding: '120px 24px 80px',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Animated grid */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage:
            'linear-gradient(var(--grid-line) 1px, transparent 1px), linear-gradient(90deg, var(--grid-line) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
          maskImage: 'radial-gradient(ellipse 80% 70% at 50% 50%, black 30%, transparent 100%)',
          WebkitMaskImage: 'radial-gradient(ellipse 80% 70% at 50% 50%, black 30%, transparent 100%)',
          animation: 'gridPulse 8s ease-in-out infinite',
          pointerEvents: 'none',
        }}
      />

      {/* Amber glow */}
      <div
        style={{
          position: 'absolute',
          width: 600,
          height: 400,
          top: '50%',
          left: '50%',
          background: 'radial-gradient(ellipse, var(--accent-glow) 0%, transparent 65%)',
          pointerEvents: 'none',
          animation: 'glowBreath 6s ease-in-out infinite',
        }}
      />

      {/* Content */}
      <div style={{ position: 'relative', zIndex: 2, maxWidth: 900 }}>
        {/* Badge */}
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 8,
            fontFamily: 'var(--font-mono)',
            fontSize: 10,
            fontWeight: 600,
            letterSpacing: '0.14em',
            textTransform: 'uppercase',
            color: 'var(--accent)',
            border: '1px solid oklch(62% 0.18 50 / 0.3)',
            background: 'oklch(62% 0.18 50 / 0.07)',
            borderRadius: 99,
            padding: '5px 14px',
            marginBottom: 36,
            whiteSpace: 'nowrap',
            opacity: 0,
            animation: 'fadeUp 0.6s ease forwards 0.1s',
          }}
        >
          <span
            style={{
              width: 5,
              height: 5,
              borderRadius: '50%',
              background: 'var(--accent)',
              display: 'inline-block',
              animation: 'blink 2s ease-in-out infinite',
            }}
          />
            A solo developer building focused tools for real problems.
        </div>

        {/* Title */}
        <h1
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: 'clamp(64px, 11vw, 130px)',
            fontWeight: 700,
            letterSpacing: '-0.05em',
            lineHeight: 0.9,
            color: 'var(--text)',
            marginBottom: 8,
            opacity: 0,
            animation: 'fadeUp 0.8s ease forwards 0.25s',
          }}
        >
          build<span style={{ color: 'var(--accent)' }}>fox</span>
        </h1>

        {/* Scramble tagline */}
        <p
          ref={scrambleRef}
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: 'clamp(13px, 2vw, 18px)',
            fontWeight: 400,
            letterSpacing: '0.02em',
            color: 'var(--text-dim)',
            marginBottom: 44,
            minHeight: '1.6em',
            opacity: 0,
            animation: 'fadeUp 0.7s ease forwards 0.5s',
          }}
        >
          {TARGET}
        </p>

        {/* CTAs */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 14,
            flexWrap: 'wrap',
            opacity: 0,
            animation: 'fadeUp 0.7s ease forwards 0.7s',
          }}
        >
          <a
            href="#projects"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
              fontFamily: 'var(--font-mono)',
              fontSize: 12,
              fontWeight: 600,
              letterSpacing: '0.05em',
              textTransform: 'uppercase',
              color: 'oklch(10% 0.01 30)',
              background: 'var(--accent)',
              border: 'none',
              borderRadius: 'var(--radius)',
              padding: '13px 26px',
              cursor: 'pointer',
              textDecoration: 'none',
              whiteSpace: 'nowrap',
              transition: 'transform 0.15s, box-shadow 0.2s, filter 0.2s',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.transform = 'translateY(-2px)'
              e.currentTarget.style.boxShadow = '0 8px 24px var(--accent-glow2)'
              e.currentTarget.style.filter = 'brightness(1.08)'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.transform = 'translateY(0)'
              e.currentTarget.style.boxShadow = 'none'
              e.currentTarget.style.filter = 'none'
            }}
          >
            View projects
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path d="M2 10L10 2M10 2H6M10 2v4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>

          <a
            href="#contact"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
              fontFamily: 'var(--font-mono)',
              fontSize: 12,
              fontWeight: 500,
              letterSpacing: '0.05em',
              textTransform: 'uppercase',
              color: 'var(--text-dim)',
              background: 'transparent',
              border: '1px solid var(--border)',
              borderRadius: 'var(--radius)',
              padding: '13px 26px',
              cursor: 'pointer',
              textDecoration: 'none',
              whiteSpace: 'nowrap',
              transition: 'border-color 0.2s, color 0.2s, transform 0.15s',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.borderColor = 'var(--border-hi)'
              e.currentTarget.style.color = 'var(--text)'
              e.currentTarget.style.transform = 'translateY(-2px)'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.borderColor = 'var(--border)'
              e.currentTarget.style.color = 'var(--text-dim)'
              e.currentTarget.style.transform = 'translateY(0)'
            }}
          >
            Hire me
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        style={{
          position: 'absolute',
          bottom: 36,
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 8,
          opacity: 0,
          animation: 'fadeIn 1s ease forwards 1.2s',
        }}
      >
        <div
          style={{
            width: 1,
            height: 40,
            background: 'linear-gradient(to bottom, var(--accent), transparent)',
            animation: 'scrollDrop 2s ease-in-out infinite',
          }}
        />
        <span
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: 9,
            letterSpacing: '0.14em',
            textTransform: 'uppercase',
            color: 'var(--text-muted)',
          }}
        >
          scroll
        </span>
      </div>
    </section>
  )
}
