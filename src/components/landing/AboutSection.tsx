'use client'

import ScrollReveal from '@/components/ui/ScrollReveal'
import type { Settings } from '@/types'

interface Props {
  settings: Settings
}

export default function AboutSection({ settings }: Props) {
  return (
    <>
      <div style={{ height: 1, background: 'var(--border)' }} />
      <div
        id="about"
        style={{
          display: 'grid',
          gridTemplateColumns: '160px 1fr',
          gap: 0,
          maxWidth: 1100,
          margin: '0 auto',
          padding: '100px 40px',
        }}
        className="page-section"
      >
        {/* Rail */}
        <div style={{ paddingTop: 4 }} className="section-rail">
          <div
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: 10,
              fontWeight: 600,
              letterSpacing: '0.16em',
              textTransform: 'uppercase',
              color: 'var(--accent)',
              position: 'sticky',
              top: 100,
              writingMode: 'vertical-lr',
              transform: 'rotate(180deg)',
              userSelect: 'none',
            }}
          >
            About
          </div>
        </div>

        {/* Body */}
        <div style={{ minWidth: 0 }}>
          <div
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: 11,
              fontWeight: 600,
              letterSpacing: '0.16em',
              textTransform: 'uppercase',
              color: 'var(--accent)',
              marginBottom: 48,
            }}
            className="section-heading-mobile"
          >
            About
          </div>

          <ScrollReveal>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 36 }}>

              {/* Statement */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: 10,
                    fontWeight: 600,
                    letterSpacing: '0.14em',
                    textTransform: 'uppercase',
                    color: 'var(--accent)',
                  }}
                >
                  Kerala, India
                </span>
                <p
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: 'clamp(16px, 2.2vw, 22px)',
                    fontWeight: 500,
                    letterSpacing: '-0.02em',
                    lineHeight: 1.5,
                    color: 'var(--text)',
                    borderLeft: '2px solid var(--accent)',
                    paddingLeft: 20,
                  }}
                >
                  I&apos;m a solo developer who builds things that actually work — no team, no investors, no noise. Just focused tools shipped with care.
                </p>
              </div>

              {/* Facts grid */}
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  gap: 1,
                  background: 'var(--border)',
                  borderRadius: 12,
                  overflow: 'hidden',
                }}
                className="facts-grid"
              >
                {[
                  {
                    label: 'What I believe',
                    val: 'Less software, better software. A tool that does one thing perfectly is worth ten that do many things badly.',
                  },
                  {
                    label: 'How I work',
                    val: 'In public. Repos open, decisions documented, failures included. No polished launch theatrics.',
                  },
                  {
                    label: "What I'm building",
                    val: 'Small, focused tools that solve real problems — built in public, shipped with care.',
                  },
                  {
                    label: 'Stack',
                    val: 'The right tool for the job. Boring technology where it counts, new where it matters.',
                  },
                ].map(fact => (
                  <div
                    key={fact.label}
                    style={{
                      background: 'var(--bg2)',
                      padding: '22px 24px',
                      transition: 'background 0.2s',
                    }}
                    onMouseEnter={e => (e.currentTarget.style.background = 'var(--bg3)')}
                    onMouseLeave={e => (e.currentTarget.style.background = 'var(--bg2)')}
                  >
                    <div
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: 9,
                        fontWeight: 700,
                        letterSpacing: '0.14em',
                        textTransform: 'uppercase',
                        color: 'var(--accent)',
                        marginBottom: 8,
                      }}
                    >
                      {fact.label}
                    </div>
                    <div
                      style={{
                        fontSize: 13,
                        fontWeight: 300,
                        color: 'var(--text-dim)',
                        lineHeight: 1.65,
                      }}
                    >
                      {fact.val}
                    </div>
                  </div>
                ))}
              </div>

              {/* Social pills */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                <SocialPill href={settings.github_url} external label="GitHub">
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
                  </svg>
                </SocialPill>
                <SocialPill href={settings.linkedin_url} external label="LinkedIn">
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                    <rect x="2" y="9" width="4" height="12"/>
                    <circle cx="4" cy="4" r="2"/>
                  </svg>
                </SocialPill>
                <SocialPill href={settings.twitter_url} external label="X / Twitter">
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4l16 16M4 20L20 4"/>
                  </svg>
                </SocialPill>
                <SocialPill href={`mailto:${settings.email}`} label={settings.email} accent>
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                    <polyline points="22,6 12,13 2,6"/>
                  </svg>
                </SocialPill>
              </div>

            </div>
          </ScrollReveal>
        </div>
      </div>

      <style>{`
        @media (max-width: 560px) {
          .facts-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  )
}

function SocialPill({
  href, label, children, external, accent,
}: {
  href: string
  label: string
  children: React.ReactNode
  external?: boolean
  accent?: boolean
}) {
  return (
    <a
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
      className="about-social-pill"
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: 7,
        fontFamily: 'var(--font-mono)',
        fontSize: 11,
        fontWeight: 500,
        color: accent ? 'var(--accent)' : 'var(--text-dim)',
        textDecoration: 'none',
        border: accent ? '1px solid oklch(62% 0.18 50 / 0.3)' : '1px solid var(--border)',
        borderRadius: 99,
        padding: '7px 14px',
        background: accent ? 'oklch(62% 0.18 50 / 0.07)' : 'var(--bg2)',
        whiteSpace: 'nowrap',
        transition: 'border-color 0.2s, color 0.2s, background 0.2s',
      }}
      onMouseEnter={e => {
        e.currentTarget.style.borderColor = accent ? 'var(--accent)' : 'var(--border-hi)'
        e.currentTarget.style.color = accent ? 'var(--accent)' : 'var(--text)'
        e.currentTarget.style.background = accent ? 'oklch(62% 0.18 50 / 0.12)' : 'var(--bg3)'
      }}
      onMouseLeave={e => {
        e.currentTarget.style.borderColor = accent ? 'oklch(62% 0.18 50 / 0.3)' : 'var(--border)'
        e.currentTarget.style.color = accent ? 'var(--accent)' : 'var(--text-dim)'
        e.currentTarget.style.background = accent ? 'oklch(62% 0.18 50 / 0.07)' : 'var(--bg2)'
      }}
    >
      {children}
      {label}
    </a>
  )
}
