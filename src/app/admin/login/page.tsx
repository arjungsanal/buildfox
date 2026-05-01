'use client'

import { useState } from 'react'
import { signIn, signInWithPassword } from '@/lib/actions'

type Mode = 'password' | 'magic'

export default function LoginPage() {
  const [mode, setMode] = useState<Mode>('password')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    setError('')
    try {
      if (mode === 'password') {
        await signInWithPassword(email, password)
      } else {
        await signIn(email)
        setSent(true)
      }
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : 'Something went wrong')
    } finally {
      setLoading(false)
    }
  }

  const inputStyle = {
    fontFamily: 'var(--font-mono)',
    fontSize: 13,
    color: 'var(--text)',
    background: 'var(--bg3)',
    border: '1px solid var(--border)',
    borderRadius: 8,
    padding: '10px 14px',
    outline: 'none',
    transition: 'border-color 0.2s',
    width: '100%',
    boxSizing: 'border-box' as const,
  }

  const labelStyle = {
    fontFamily: 'var(--font-mono)',
    fontSize: 10,
    fontWeight: 600,
    letterSpacing: '0.1em',
    textTransform: 'uppercase' as const,
    color: 'var(--text-muted)',
  }

  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'var(--bg)',
        padding: 24,
      }}
    >
      <div
        style={{
          width: '100%',
          maxWidth: 400,
          background: 'var(--bg2)',
          border: '1px solid var(--border)',
          borderRadius: 14,
          padding: 40,
        }}
      >
        <div
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: 20,
            fontWeight: 700,
            letterSpacing: '-0.03em',
            color: 'var(--text)',
            marginBottom: 8,
          }}
        >
          build<span style={{ color: 'var(--accent)' }}>fox</span> admin
        </div>
        <p
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: 12,
            color: 'var(--text-muted)',
            marginBottom: 28,
          }}
        >
          {mode === 'password' ? 'Sign in with your password.' : 'Receive a one-time magic link by email.'}
        </p>

        {/* Mode toggle */}
        <div
          style={{
            display: 'flex',
            gap: 4,
            background: 'var(--bg3)',
            border: '1px solid var(--border)',
            borderRadius: 8,
            padding: 4,
            marginBottom: 24,
          }}
        >
          {(['password', 'magic'] as Mode[]).map(m => (
            <button
              key={m}
              type="button"
              onClick={() => { setMode(m); setError(''); setSent(false) }}
              style={{
                flex: 1,
                fontFamily: 'var(--font-mono)',
                fontSize: 10,
                fontWeight: 600,
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                border: 'none',
                borderRadius: 6,
                padding: '7px 0',
                cursor: 'pointer',
                transition: 'background 0.15s, color 0.15s',
                background: mode === m ? 'var(--accent)' : 'transparent',
                color: mode === m ? 'oklch(10% 0.01 30)' : 'var(--text-muted)',
              }}
            >
              {m === 'password' ? 'Password' : 'Magic link'}
            </button>
          ))}
        </div>

        {sent ? (
          <div
            style={{
              padding: '16px',
              background: 'var(--green-bg)',
              border: '1px solid var(--green-border)',
              borderRadius: 8,
              fontFamily: 'var(--font-mono)',
              fontSize: 12,
              color: 'var(--green)',
            }}
          >
            Check your email — magic link sent!
          </div>
        ) : (
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
              <label htmlFor="email" style={labelStyle}>Email</label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                required
                placeholder="you@example.com"
                style={inputStyle}
                onFocus={e => (e.target.style.borderColor = 'var(--accent)')}
                onBlur={e => (e.target.style.borderColor = 'var(--border)')}
              />
            </div>

            {mode === 'password' && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                <label htmlFor="password" style={labelStyle}>Password</label>
                <input
                  id="password"
                  type="password"
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  required
                  placeholder="••••••••"
                  style={inputStyle}
                  onFocus={e => (e.target.style.borderColor = 'var(--accent)')}
                  onBlur={e => (e.target.style.borderColor = 'var(--border)')}
                />
              </div>
            )}

            {error && (
              <p style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: '#ef4444', margin: 0 }}>
                {error}
              </p>
            )}

            <button
              type="submit"
              disabled={loading}
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: 12,
                fontWeight: 600,
                letterSpacing: '0.05em',
                textTransform: 'uppercase',
                color: 'oklch(10% 0.01 30)',
                background: loading ? 'oklch(62% 0.18 50 / 0.6)' : 'var(--accent)',
                border: 'none',
                borderRadius: 8,
                padding: '12px 24px',
                cursor: loading ? 'not-allowed' : 'pointer',
                transition: 'filter 0.2s',
              }}
            >
              {loading
                ? 'Please wait...'
                : mode === 'password'
                  ? 'Sign in'
                  : 'Send magic link'}
            </button>
          </form>
        )}
      </div>
    </div>
  )
}
