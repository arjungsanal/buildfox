import { notFound } from 'next/navigation'
import { getProjectById } from '@/lib/queries'
import { updateProject } from '@/lib/actions'
import ProjectForm from '@/components/admin/ProjectForm'

interface Props {
  params: Promise<{ id: string }>
}

export default async function EditProjectPage({ params }: Props) {
  const { id } = await params
  const project = await getProjectById(id)

  if (!project) notFound()

  async function update(formData: FormData) {
    'use server'
    await updateProject(id, formData)
  }

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
          Edit project
        </h1>
        <p
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: 11,
            color: 'var(--text-muted)',
          }}
        >
          {project.name}
        </p>
      </div>

      <ProjectForm project={project} action={update} submitLabel="Save changes" />
    </div>
  )
}
