'use client'

import Link from 'next/link'

interface AdminLinkButtonProps {
  href: string
  children: React.ReactNode
}

export function AdminPrimaryLink({ href, children }: AdminLinkButtonProps) {
  return (
    <Link
      href={href}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: 6,
        fontFamily: 'var(--font-mono)',
        fontSize: 11,
        fontWeight: 600,
        letterSpacing: '0.05em',
        textTransform: 'uppercase',
        color: 'oklch(10% 0.01 30)',
        background: 'var(--accent)',
        border: 'none',
        borderRadius: 8,
        padding: '10px 18px',
        cursor: 'pointer',
        textDecoration: 'none',
        transition: 'filter 0.2s',
      }}
      onMouseEnter={e => (e.currentTarget.style.filter = 'brightness(1.08)')}
      onMouseLeave={e => (e.currentTarget.style.filter = 'none')}
    >
      {children}
    </Link>
  )
}
