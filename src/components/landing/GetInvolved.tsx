'use client'

import ScrollReveal from '@/components/ui/ScrollReveal'

interface Props {
  githubUrl: string
  email: string
}

export default function GetInvolved({ githubUrl, email }: Props) {
  return (
    <>
      <div style={{ height: 1, background: 'var(--border)' }} />
      <div
        id="contribute"
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
            Get Involved
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
            Get Involved
          </div>

          <ScrollReveal stagger className="involve-grid">
            {/* Contribute card */}
            <InvolveCard
              icon={
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
                </svg>
              }
              title="Contribute"
              description="Statuspage is open source. See a bug, have a feature idea, or want to improve docs — PRs are very welcome."
              linkHref={githubUrl}
              linkLabel="View on GitHub"
              external
            />

            {/* Drop an idea card */}
            <InvolveCard
              icon={
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
                </svg>
              }
              title="Drop an idea"
              description="Got a frustrating problem worth solving? A tool you wish existed? Tell me. The best things I build start with someone else's pain."
              linkHref={`mailto:${email}`}
              linkLabel="Share your idea"
            />
          </ScrollReveal>
        </div>
      </div>

      <style>{`
        .involve-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
        }
        @media (max-width: 560px) {
          .involve-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  )
}

function InvolveCard({
  icon, title, description, linkHref, linkLabel, external,
}: {
  icon: React.ReactNode
  title: string
  description: string
  linkHref: string
  linkLabel: string
  external?: boolean
}) {
  return (
    <div
      className="involve-card"
      style={{
        border: '1px solid var(--border)',
        borderRadius: 14,
        padding: 28,
        background: 'var(--bg2)',
        transition: 'border-color 0.25s, transform 0.2s',
      }}
      onMouseEnter={e => {
        const el = e.currentTarget
        el.style.borderColor = 'var(--border-hi)'
        el.style.transform = 'translateY(-2px)'
      }}
      onMouseLeave={e => {
        const el = e.currentTarget
        el.style.borderColor = 'var(--border)'
        el.style.transform = 'translateY(0)'
      }}
    >
      <div
        style={{
          width: 40,
          height: 40,
          borderRadius: 10,
          background: 'var(--bg3)',
          border: '1px solid var(--border)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'var(--accent)',
          marginBottom: 18,
        }}
      >
        {icon}
      </div>
      <div
        style={{
          fontFamily: 'var(--font-mono)',
          fontSize: 15,
          fontWeight: 700,
          letterSpacing: '-0.02em',
          color: 'var(--text)',
          marginBottom: 10,
        }}
      >
        {title}
      </div>
      <p
        style={{
          fontSize: 14,
          fontWeight: 300,
          color: 'var(--text-dim)',
          lineHeight: 1.65,
          marginBottom: 22,
        }}
      >
        {description}
      </p>
      <a
        href={linkHref}
        target={external ? '_blank' : undefined}
        rel={external ? 'noopener noreferrer' : undefined}
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: 5,
          fontFamily: 'var(--font-mono)',
          fontSize: 10,
          fontWeight: 700,
          letterSpacing: '0.08em',
          textTransform: 'uppercase',
          color: 'var(--accent)',
          textDecoration: 'none',
          transition: 'gap 0.2s',
        }}
        onMouseEnter={e => (e.currentTarget.style.gap = '9px')}
        onMouseLeave={e => (e.currentTarget.style.gap = '5px')}
      >
        {linkLabel}
        <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
          <path d="M1 9L9 1M9 1H5M9 1v4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </a>
    </div>
  )
}
