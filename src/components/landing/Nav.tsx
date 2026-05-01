'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import ThemeToggle from '@/components/ui/ThemeToggle'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const navStyle: React.CSSProperties = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 200,
    padding: scrolled ? '13px 40px' : '18px 40px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    background: scrolled
      ? 'color-mix(in oklch, var(--bg) 90%, transparent)'
      : 'color-mix(in oklch, var(--bg) 70%, transparent)',
    backdropFilter: scrolled ? 'blur(24px) saturate(1.6)' : 'blur(16px) saturate(1.3)',
    borderBottom: '1px solid var(--border)',
    transition: 'background 0.45s cubic-bezier(0.16,1,0.3,1), padding 0.3s',
  }

  return (
    <nav style={navStyle}>
      <Link
        href="/"
        style={{
          fontFamily: 'var(--font-mono)',
          fontSize: 15,
          fontWeight: 700,
          letterSpacing: '-0.03em',
          color: 'var(--text)',
          textDecoration: 'none',
          transition: 'color 0.2s',
          whiteSpace: 'nowrap',
        }}
        onMouseEnter={e => (e.currentTarget.style.color = 'var(--accent)')}
        onMouseLeave={e => (e.currentTarget.style.color = 'var(--text)')}
      >
        build<span style={{ color: 'var(--accent)' }}>fox</span>
      </Link>

      <div style={{ display: 'flex', alignItems: 'center', gap: 32 }}>
        <ul
          style={{
            display: 'flex',
            gap: 28,
            listStyle: 'none',
            margin: 0,
            padding: 0,
          }}
          className="nav-links-list"
        >
          {[
            { href: '#projects', label: 'Projects' },
            { href: '#contribute', label: 'Contribute' },
            { href: '#contact', label: 'Hire me' },
          ].map(link => (
            <li key={link.href}>
              <a
                href={link.href}
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: 11,
                  fontWeight: 500,
                  letterSpacing: '0.06em',
                  textTransform: 'uppercase',
                  color: 'var(--text-muted)',
                  textDecoration: 'none',
                  whiteSpace: 'nowrap',
                  transition: 'color 0.2s',
                }}
                onMouseEnter={e => (e.currentTarget.style.color = 'var(--text)')}
                onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-muted)')}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <ThemeToggle />
      </div>

      <style>{`
        @media (max-width: 600px) {
          .nav-links-list { display: none !important; }
        }
      `}</style>
    </nav>
  )
}
