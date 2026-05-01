'use client'

import type { Settings } from '@/types'

interface Props {
  settings: Settings
}

export default function Footer({ settings }: Props) {
  return (
    <footer
      style={{
        borderTop: '1px solid var(--border)',
        padding: '28px 40px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: 14,
      }}
      className="site-footer"
    >
      <a
        href="/"
        style={{
          fontFamily: 'var(--font-mono)',
          fontSize: 13,
          fontWeight: 700,
          letterSpacing: '-0.03em',
          color: 'var(--text-muted)',
          textDecoration: 'none',
          transition: 'color 0.2s',
        }}
        onMouseEnter={e => (e.currentTarget.style.color = 'var(--accent)')}
        onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-muted)')}
      >
        build<span style={{ color: 'var(--accent)' }}>fox</span>
      </a>

      <span
        style={{
          fontFamily: 'var(--font-mono)',
          fontSize: 11,
          color: 'var(--text-muted)',
        }}
      >
        © 2026 buildfox. Kerala, India.
      </span>

      <ul
        style={{
          display: 'flex',
          gap: 20,
          listStyle: 'none',
          margin: 0,
          padding: 0,
        }}
      >
        {[
          { href: settings.github_url, label: 'GitHub' },
          { href: settings.twitter_url, label: 'X' },
          { href: settings.linkedin_url, label: 'In' },
        ].map(link => (
          <li key={link.label}>
            <a
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: 10,
                fontWeight: 600,
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                color: 'var(--text-muted)',
                textDecoration: 'none',
                transition: 'color 0.2s',
              }}
              onMouseEnter={e => (e.currentTarget.style.color = 'var(--accent)')}
              onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-muted)')}
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>

      <style>{`
        @media (max-width: 600px) {
          .site-footer { padding: 24px 20px !important; }
        }
      `}</style>
    </footer>
  )
}
