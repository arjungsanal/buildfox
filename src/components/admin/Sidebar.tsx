'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { signOut } from '@/lib/actions'

const NAV = [
  { href: '/admin/projects', label: 'Projects' },
  { href: '/admin/settings', label: 'Settings' },
]

export default function Sidebar() {
  const pathname = usePathname()

  return (
    <aside
      style={{
        width: 220,
        minHeight: '100vh',
        borderRight: '1px solid var(--border)',
        background: 'var(--bg2)',
        display: 'flex',
        flexDirection: 'column',
        padding: '24px 0',
        flexShrink: 0,
      }}
    >
      {/* Logo */}
      <div style={{ padding: '0 20px 24px', borderBottom: '1px solid var(--border)' }}>
        <Link
          href="/"
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: 15,
            fontWeight: 700,
            letterSpacing: '-0.03em',
            color: 'var(--text)',
            textDecoration: 'none',
          }}
        >
          build<span style={{ color: 'var(--accent)' }}>fox</span>
        </Link>
        <div
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: 9,
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            color: 'var(--text-muted)',
            marginTop: 4,
          }}
        >
          Admin
        </div>
      </div>

      {/* Nav */}
      <nav style={{ flex: 1, padding: '16px 12px' }}>
        {NAV.map(item => {
          const active = pathname.startsWith(item.href)
          return (
            <Link
              key={item.href}
              href={item.href}
              style={{
                display: 'block',
                fontFamily: 'var(--font-mono)',
                fontSize: 12,
                fontWeight: active ? 600 : 400,
                letterSpacing: '0.04em',
                color: active ? 'var(--accent)' : 'var(--text-dim)',
                textDecoration: 'none',
                padding: '8px 12px',
                borderRadius: 8,
                background: active ? 'oklch(62% 0.18 50 / 0.08)' : 'transparent',
                border: active ? '1px solid oklch(62% 0.18 50 / 0.2)' : '1px solid transparent',
                marginBottom: 4,
                transition: 'color 0.2s, background 0.2s',
              }}
            >
              {item.label}
            </Link>
          )
        })}
      </nav>

      {/* Sign out */}
      <div style={{ padding: '16px 20px', borderTop: '1px solid var(--border)' }}>
        <form action={signOut}>
          <button
            type="submit"
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: 11,
              fontWeight: 500,
              letterSpacing: '0.06em',
              textTransform: 'uppercase',
              color: 'var(--text-muted)',
              background: 'transparent',
              border: 'none',
              cursor: 'pointer',
              transition: 'color 0.2s',
              padding: 0,
            }}
            onMouseEnter={e => (e.currentTarget.style.color = 'var(--accent)')}
            onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-muted)')}
          >
            Sign out →
          </button>
        </form>
      </div>
    </aside>
  )
}
