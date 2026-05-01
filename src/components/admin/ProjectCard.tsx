'use client'

import { useState } from 'react'
import Link from 'next/link'
import type { Project } from '@/types'
import { toggleProjectVisibility, deleteProject } from '@/lib/actions'

interface Props {
  project: Project
}

export default function ProjectCard({ project }: Props) {
  const [visible, setVisible] = useState(project.visible)
  const [deleting, setDeleting] = useState(false)

  async function handleToggle() {
    const next = !visible
    setVisible(next)
    await toggleProjectVisibility(project.id, next)
  }

  async function handleDelete() {
    if (!confirm(`Delete "${project.name}"? This cannot be undone.`)) return
    setDeleting(true)
    await deleteProject(project.id)
  }

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: 16,
        padding: '16px 20px',
        background: 'var(--bg2)',
        border: '1px solid var(--border)',
        borderRadius: 10,
        opacity: deleting ? 0.5 : 1,
        transition: 'border-color 0.2s, opacity 0.2s',
      }}
      onMouseEnter={e => (e.currentTarget.style.borderColor = 'var(--border-hi)')}
      onMouseLeave={e => (e.currentTarget.style.borderColor = 'var(--border)')}
    >
      {/* Order */}
      <div
        style={{
          fontFamily: 'var(--font-mono)',
          fontSize: 11,
          color: 'var(--text-muted)',
          width: 28,
          flexShrink: 0,
        }}
      >
        {project.number}
      </div>

      {/* Info */}
      <div style={{ flex: 1, minWidth: 0 }}>
        <div
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: 14,
            fontWeight: 600,
            color: 'var(--text)',
            marginBottom: 4,
          }}
        >
          {project.name}
        </div>
        <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap', alignItems: 'center' }}>
          <span
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: 9,
              fontWeight: 700,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              color: project.status === 'live' ? 'var(--green)' : 'var(--text-muted)',
              background: project.status === 'live' ? 'var(--green-bg)' : 'var(--bg3)',
              border: `1px solid ${project.status === 'live' ? 'var(--green-border)' : 'var(--border)'}`,
              borderRadius: 4,
              padding: '2px 6px',
            }}
          >
            {project.status.replace('_', ' ')}
          </span>
          {project.tags.map(tag => (
            <span
              key={tag}
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: 9,
                color: 'var(--text-muted)',
                background: 'var(--bg3)',
                border: '1px solid var(--border)',
                borderRadius: 4,
                padding: '2px 6px',
              }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Actions */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 10, flexShrink: 0 }}>
        {/* Visibility toggle */}
        <button
          onClick={handleToggle}
          title={visible ? 'Hide from landing page' : 'Show on landing page'}
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: 10,
            fontWeight: 600,
            letterSpacing: '0.06em',
            textTransform: 'uppercase',
            color: visible ? 'var(--green)' : 'var(--text-muted)',
            background: visible ? 'var(--green-bg)' : 'var(--bg3)',
            border: `1px solid ${visible ? 'var(--green-border)' : 'var(--border)'}`,
            borderRadius: 6,
            padding: '5px 10px',
            cursor: 'pointer',
            transition: 'all 0.2s',
          }}
        >
          {visible ? 'Visible' : 'Hidden'}
        </button>

        {/* Edit */}
        <Link
          href={`/admin/projects/${project.id}`}
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: 10,
            fontWeight: 600,
            letterSpacing: '0.06em',
            textTransform: 'uppercase',
            color: 'var(--text-dim)',
            background: 'var(--bg3)',
            border: '1px solid var(--border)',
            borderRadius: 6,
            padding: '5px 10px',
            cursor: 'pointer',
            textDecoration: 'none',
            transition: 'color 0.2s, border-color 0.2s',
          }}
          onMouseEnter={e => {
            e.currentTarget.style.color = 'var(--text)'
            e.currentTarget.style.borderColor = 'var(--border-hi)'
          }}
          onMouseLeave={e => {
            e.currentTarget.style.color = 'var(--text-dim)'
            e.currentTarget.style.borderColor = 'var(--border)'
          }}
        >
          Edit
        </Link>

        {/* Delete */}
        <button
          onClick={handleDelete}
          disabled={deleting}
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: 10,
            fontWeight: 600,
            letterSpacing: '0.06em',
            textTransform: 'uppercase',
            color: 'oklch(65% 0.2 20)',
            background: 'oklch(65% 0.2 20 / 0.08)',
            border: '1px solid oklch(65% 0.2 20 / 0.2)',
            borderRadius: 6,
            padding: '5px 10px',
            cursor: deleting ? 'not-allowed' : 'pointer',
            transition: 'all 0.2s',
          }}
          onMouseEnter={e => (e.currentTarget.style.background = 'oklch(65% 0.2 20 / 0.15)')}
          onMouseLeave={e => (e.currentTarget.style.background = 'oklch(65% 0.2 20 / 0.08)')}
        >
          Delete
        </button>
      </div>
    </div>
  )
}
