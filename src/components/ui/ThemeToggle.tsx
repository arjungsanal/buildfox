'use client'

import { useEffect, useState } from 'react'

export default function ThemeToggle() {
  const [theme, setTheme] = useState<'dark' | 'light'>('light')

  useEffect(() => {
    const saved = localStorage.getItem('bf-theme') as 'dark' | 'light' | null
    const system = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
    const resolved = saved ?? system
    setTheme(resolved)
    document.documentElement.setAttribute('data-theme', resolved)
  }, [])

  function toggle() {
    const next = theme === 'dark' ? 'light' : 'dark'
    setTheme(next)
    document.documentElement.setAttribute('data-theme', next)
    localStorage.setItem('bf-theme', next)
  }

  return (
    <button
      onClick={toggle}
      aria-label="Toggle theme"
      style={{
        width: 34,
        height: 34,
        borderRadius: '50%',
        border: '1px solid var(--border)',
        background: 'var(--bg2)',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'var(--text-dim)',
        transition: 'border-color 0.2s, color 0.2s',
        flexShrink: 0,
      }}
      onMouseEnter={e => {
        const el = e.currentTarget
        el.style.borderColor = 'var(--accent)'
        el.style.color = 'var(--accent)'
        el.style.transform = 'rotate(30deg)'
      }}
      onMouseLeave={e => {
        const el = e.currentTarget
        el.style.borderColor = 'var(--border)'
        el.style.color = 'var(--text-dim)'
        el.style.transform = 'rotate(0deg)'
      }}
    >
      {theme === 'dark' ? (
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
        </svg>
      ) : (
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="5"/>
          <line x1="12" y1="1" x2="12" y2="3"/>
          <line x1="12" y1="21" x2="12" y2="23"/>
          <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
          <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
          <line x1="1" y1="12" x2="3" y2="12"/>
          <line x1="21" y1="12" x2="23" y2="12"/>
          <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
          <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
        </svg>
      )}
    </button>
  )
}
