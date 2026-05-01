import type { Project } from '@/types'
import BentoCard from './BentoCard'
import ScrollReveal from '@/components/ui/ScrollReveal'

interface Props {
  projects: Project[]
}

export default function ProjectsSection({ projects }: Props) {
  return (
    <>
      <div style={{ height: 1, background: 'var(--border)' }} />
      <div
        id="projects"
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
            Projects
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
            Projects
          </div>

          <ScrollReveal stagger className="bento-grid">
            {projects.length === 0 ? (
              <p style={{ color: 'var(--text-muted)', fontFamily: 'var(--font-mono)', fontSize: 13 }}>
                No projects yet.
              </p>
            ) : (
              projects.map(project => (
                <BentoCard key={project.id} project={project} />
              ))
            )}
          </ScrollReveal>
        </div>
      </div>

      <style>{`
        .bento-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
        }
        @media (max-width: 700px) {
          .page-section {
            grid-template-columns: 1fr !important;
            padding: 72px 20px !important;
          }
          .section-rail { display: none !important; }
          .section-heading-mobile { display: block !important; }
        }
        @media (max-width: 560px) {
          .bento-grid { grid-template-columns: 1fr !important; }
        }
        .section-heading-mobile { display: none; }
      `}</style>
    </>
  )
}
