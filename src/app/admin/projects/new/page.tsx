import { createProject } from '@/lib/actions'
import ProjectForm from '@/components/admin/ProjectForm'

export default function NewProjectPage() {
  return (
    <div style={{ maxWidth: 700 }}>
      <div style={{ marginBottom: 32 }}>
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
          New project
        </h1>
        <p
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: 11,
            color: 'var(--text-muted)',
          }}
        >
          Add a new project to your landing page.
        </p>
      </div>

      <ProjectForm action={createProject} submitLabel="Create project" />
    </div>
  )
}
