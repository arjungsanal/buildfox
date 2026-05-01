import Link from 'next/link'
import { getAllProjects } from '@/lib/queries'
import ProjectCard from '@/components/admin/ProjectCard'
import { AdminPrimaryLink } from '@/components/admin/AdminButton'

export default async function ProjectsPage() {
  const projects = await getAllProjects()

  return (
    <div style={{ maxWidth: 800 }}>
      {/* Header */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom: 32,
        }}
      >
        <div>
          <h1
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: 20,
              fontWeight: 700,
              letterSpacing: '-0.03em',
              color: 'var(--text)',
              marginBottom: 4,
            }}
          >
            Projects
          </h1>
          <p
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: 11,
              color: 'var(--text-muted)',
            }}
          >
            {projects.length} project{projects.length !== 1 ? 's' : ''} total
          </p>
        </div>
        <AdminPrimaryLink href="/admin/projects/new">
          + New project
        </AdminPrimaryLink>
      </div>

      {/* Project list */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
        {projects.length === 0 ? (
          <div
            style={{
              padding: '48px 24px',
              textAlign: 'center',
              background: 'var(--bg2)',
              border: '1px solid var(--border)',
              borderRadius: 10,
            }}
          >
            <p
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: 13,
                color: 'var(--text-muted)',
                marginBottom: 16,
              }}
            >
              No projects yet.
            </p>
            <Link
              href="/admin/projects/new"
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: 11,
                color: 'var(--accent)',
                textDecoration: 'none',
              }}
            >
              Create your first project →
            </Link>
          </div>
        ) : (
          projects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))
        )}
      </div>
    </div>
  )
}
