'use client'

import { useRef, useState, type MouseEvent } from 'react'
import type { Project } from '@/types'

interface Props {
  project: Project
}

export default function BentoCard({ project }: Props) {
  const cardRef = useRef<HTMLDivElement>(null)
  const [hovered, setHovered] = useState(false)

  function handleMouseMove(e: MouseEvent<HTMLDivElement>) {
    const card = cardRef.current
    if (!card) return
    const r = card.getBoundingClientRect()
    const mx = ((e.clientX - r.left) / r.width) * 100
    const my = ((e.clientY - r.top) / r.height) * 100
    card.style.setProperty('--mx', `${mx}%`)
    card.style.setProperty('--my', `${my}%`)
  }

  const isComingSoon = project.status === 'coming_soon'
  const isLive = project.status === 'live'

  return (
    <div
      ref={cardRef}
      className="bento-card"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: 'var(--bg2)',
        border: `1px solid ${hovered ? 'var(--border-hi)' : 'var(--border)'}`,
        borderRadius: 14,
        padding: 30,
        position: 'relative',
        overflow: 'hidden',
        transition: 'border-color 0.3s, transform 0.25s',
        transform: hovered ? 'translateY(-2px)' : 'translateY(0)',
        cursor: 'default',
      }}
    >
      {/* Mouse-tracking glow */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(circle at var(--mx, 50%) var(--my, 50%), var(--accent-glow) 0%, transparent 60%)',
          opacity: hovered ? 1 : 0,
          transition: 'opacity 0.4s',
          pointerEvents: 'none',
        }}
      />

      <div style={{ position: 'relative', zIndex: 1 }}>
        {/* Card number */}
        <div
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: 11,
            fontWeight: 500,
            color: 'var(--text-muted)',
            letterSpacing: '0.06em',
            marginBottom: 14,
          }}
        >
          {project.number}
        </div>

        {/* Status badge */}
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 5,
            fontFamily: 'var(--font-mono)',
            fontSize: 9,
            fontWeight: 700,
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            borderRadius: 5,
            padding: '3px 8px',
            marginBottom: 22,
            ...(isLive
              ? {
                  color: 'var(--green)',
                  background: 'var(--green-bg)',
                  border: '1px solid var(--green-border)',
                }
              : {
                  color: 'var(--text-muted)',
                  background: 'var(--bg3)',
                  border: '1px solid var(--border)',
                }),
          }}
        >
          <span
            style={{
              width: 5,
              height: 5,
              borderRadius: '50%',
              background: 'currentColor',
              display: 'inline-block',
              animation: 'blink 2s infinite',
            }}
          />
          {isComingSoon ? 'Coming soon' : isLive ? 'Live' : 'Hidden'}
        </div>

        {/* Name */}
        <div
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: 22,
            fontWeight: 700,
            letterSpacing: '-0.03em',
            color: 'var(--text)',
            marginBottom: 12,
          }}
        >
          {project.name}
        </div>

        {/* Description */}
        <p
          style={{
            fontSize: 14,
            fontWeight: 300,
            color: 'var(--text-dim)',
            lineHeight: 1.65,
            marginBottom: 28,
          }}
        >
          {project.description}
        </p>

        {/* Footer */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingTop: 18,
            borderTop: '1px solid var(--border)',
          }}
        >
          <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
            {project.tags.map(tag => (
              <span
                key={tag}
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: 9,
                  fontWeight: 600,
                  letterSpacing: '0.06em',
                  textTransform: 'uppercase',
                  color: 'var(--text-muted)',
                  background: 'var(--bg3)',
                  border: '1px solid var(--border)',
                  borderRadius: 4,
                  padding: '2px 7px',
                  whiteSpace: 'nowrap',
                }}
              >
                {tag}
              </span>
            ))}
          </div>

          <a
            href={isLive && project.url ? project.url : '#'}
            target={isLive && project.url ? '_blank' : undefined}
            rel={isLive && project.url ? 'noopener noreferrer' : undefined}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: hovered ? 8 : 5,
              fontFamily: 'var(--font-mono)',
              fontSize: 10,
              fontWeight: 700,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              color: hovered ? 'var(--accent)' : 'var(--text-muted)',
              textDecoration: 'none',
              transition: 'color 0.2s, gap 0.2s',
            }}
          >
            {isLive ? 'Visit' : 'Soon'}
            <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
              <path d="M1 9L9 1M9 1H5M9 1v4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>
      </div>
    </div>
  )
}
