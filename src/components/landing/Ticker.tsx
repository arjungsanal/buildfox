'use client'

import { useRef } from 'react'

const ITEMS = [
  'Ship fast', 'Build in public', 'Kerala, India', 'Micro-SaaS',
  'Open Source', 'Solo builder', 'Real tools', 'UPI payments',
  'Status pages', 'Less is more', 'Honest software',
]

export default function Ticker() {
  const trackRef = useRef<HTMLDivElement>(null)

  const allItems = [...ITEMS, ...ITEMS]

  return (
    <div
      style={{
        overflow: 'hidden',
        borderTop: '1px solid var(--border)',
        borderBottom: '1px solid var(--border)',
        padding: '14px 0',
        background: 'var(--bg2)',
      }}
    >
      <div
        ref={trackRef}
        style={{
          display: 'flex',
          gap: 0,
          animation: 'tickerScroll 28s linear infinite',
          width: 'max-content',
        }}
        onMouseEnter={() => { if (trackRef.current) trackRef.current.style.animationPlayState = 'paused' }}
        onMouseLeave={() => { if (trackRef.current) trackRef.current.style.animationPlayState = 'running' }}
      >
        {allItems.map((item, i) => (
          <span
            key={i}
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: 11,
              fontWeight: 500,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              color: 'var(--text-muted)',
              padding: '0 28px',
              display: 'inline-flex',
              alignItems: 'center',
              gap: 28,
              whiteSpace: 'nowrap',
            }}
          >
            {item}
            <span style={{ color: 'var(--accent)', fontSize: 14, lineHeight: 1 }}>·</span>
          </span>
        ))}
      </div>
    </div>
  )
}
