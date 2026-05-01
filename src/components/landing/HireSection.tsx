'use client'

import ScrollReveal from '@/components/ui/ScrollReveal'

interface Props {
  email: string
}

export default function HireSection({ email }: Props) {
  return (
    <>
      <div style={{ height: 1, background: 'var(--border)' }} />
      <div
        id="contact"
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
            Hire / Consult
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
            Hire / Consult
          </div>

          <ScrollReveal className="contact-layout">
            <div>
              <div
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: 'clamp(36px, 5vw, 52px)',
                  fontWeight: 700,
                  letterSpacing: '-0.04em',
                  lineHeight: 1,
                  color: 'var(--text)',
                  marginBottom: 16,
                }}
              >
                Work<br/>with <span style={{ color: 'var(--accent)' }}>me.</span>
              </div>
              <p
                style={{
                  fontSize: 15,
                  fontWeight: 300,
                  color: 'var(--text-dim)',
                  lineHeight: 1.7,
                }}
              >
                Need a focused tool built fast? Want a second pair of eyes on a product problem? Looking for a freelance dev who actually ships? I&apos;m available for select projects and consultations.
              </p>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
                {[
                  {
                    icon: (
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="2" y="7" width="20" height="14" rx="2"/>
                        <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/>
                      </svg>
                    ),
                    title: 'Freelance development',
                    desc: 'Full-stack web apps, micro-SaaS, APIs, and internal tools.',
                  },
                  {
                    icon: (
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="10"/>
                        <path d="M12 8v4l3 3"/>
                      </svg>
                    ),
                    title: 'Product consultation',
                    desc: 'Architecture review, product direction, or a 1-hour call to think through a problem together.',
                  },
                  {
                    icon: (
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="16 18 22 12 16 6"/>
                        <polyline points="8 6 2 12 8 18"/>
                      </svg>
                    ),
                    title: 'Open source collaboration',
                    desc: 'Partner on a project that benefits the developer community.',
                  },
                ].map(item => (
                  <div
                    key={item.title}
                    className="hire-option"
                    style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: 14,
                      padding: 16,
                      borderRadius: 10,
                      border: '1px solid var(--border)',
                      background: 'var(--bg2)',
                      transition: 'border-color 0.2s',
                    }}
                    onMouseEnter={e => (e.currentTarget.style.borderColor = 'var(--border-hi)')}
                    onMouseLeave={e => (e.currentTarget.style.borderColor = 'var(--border)')}
                  >
                    <div
                      style={{
                        width: 36,
                        height: 36,
                        borderRadius: 8,
                        flexShrink: 0,
                        background: 'var(--bg3)',
                        border: '1px solid var(--border)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'var(--accent)',
                      }}
                    >
                      {item.icon}
                    </div>
                    <div>
                      <div
                        style={{
                          fontFamily: 'var(--font-mono)',
                          fontSize: 13,
                          fontWeight: 600,
                          letterSpacing: '-0.01em',
                          color: 'var(--text)',
                          marginBottom: 4,
                        }}
                      >
                        {item.title}
                      </div>
                      <div
                        style={{
                          fontSize: 13,
                          fontWeight: 300,
                          color: 'var(--text-dim)',
                          lineHeight: 1.5,
                        }}
                      >
                        {item.desc}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <a
                href={`mailto:${email}`}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 10,
                  fontFamily: 'var(--font-mono)',
                  fontSize: 15,
                  fontWeight: 700,
                  letterSpacing: '-0.02em',
                  color: 'var(--accent)',
                  textDecoration: 'none',
                  borderBottom: '1px solid oklch(62% 0.18 50 / 0.3)',
                  paddingBottom: 4,
                  transition: 'border-color 0.2s, gap 0.2s',
                  alignSelf: 'flex-start',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = 'var(--accent)'
                  e.currentTarget.style.gap = '14px'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = 'oklch(62% 0.18 50 / 0.3)'
                  e.currentTarget.style.gap = '10px'
                }}
              >
                <span>{email}</span>
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M2 12L12 2M12 2H7M12 2v5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>

              <p
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: 10,
                  letterSpacing: '0.04em',
                  color: 'var(--text-muted)',
                }}
              >
                I reply within 24 hours. No agencies, no middlemen.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </div>

      <style>{`
        .contact-layout {
          display: grid;
          grid-template-columns: 1fr 1.5fr;
          gap: 64px;
          align-items: start;
        }
        @media (max-width: 640px) {
          .contact-layout { grid-template-columns: 1fr !important; gap: 36px !important; }
        }
      `}</style>
    </>
  )
}
