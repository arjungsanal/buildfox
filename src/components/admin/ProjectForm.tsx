'use client'

import { useRef } from 'react'
import type { Project } from '@/types'

interface Props {
  project?: Project
  action: (formData: FormData) => Promise<void>
  submitLabel: string
}

export default function ProjectForm({ project, action, submitLabel }: Props) {
  const formRef = useRef<HTMLFormElement>(null)

  const inputStyle: React.CSSProperties = {
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
  }

  const labelStyle: React.CSSProperties = {
    fontFamily: 'var(--font-mono)',
    fontSize: 10,
    fontWeight: 600,
    letterSpacing: '0.1em',
    textTransform: 'uppercase',
    color: 'var(--text-muted)',
    display: 'block',
    marginBottom: 6,
  }

  return (
    <form
      ref={formRef}
      action={action}
      style={{ display: 'flex', flexDirection: 'column', gap: 20, maxWidth: 600 }}
    >
      <div style={{ display: 'grid', gridTemplateColumns: '80px 1fr', gap: 16 }}>
        <div>
          <label style={labelStyle} htmlFor="number">Number</label>
          <input
            id="number"
            name="number"
            defaultValue={project?.number ?? ''}
            placeholder="01"
            required
            style={inputStyle}
            onFocus={e => (e.target.style.borderColor = 'var(--accent)')}
            onBlur={e => (e.target.style.borderColor = 'var(--border)')}
          />
        </div>
        <div>
          <label style={labelStyle} htmlFor="name">Name</label>
          <input
            id="name"
            name="name"
            defaultValue={project?.name ?? ''}
            placeholder="My Tool"
            required
            style={inputStyle}
            onFocus={e => (e.target.style.borderColor = 'var(--accent)')}
            onBlur={e => (e.target.style.borderColor = 'var(--border)')}
          />
        </div>
      </div>

      <div>
        <label style={labelStyle} htmlFor="description">Description</label>
        <textarea
          id="description"
          name="description"
          defaultValue={project?.description ?? ''}
          placeholder="What does this tool do?"
          required
          rows={3}
          style={{ ...inputStyle, resize: 'vertical' }}
          onFocus={e => (e.target.style.borderColor = 'var(--accent)')}
          onBlur={e => (e.target.style.borderColor = 'var(--border)')}
        />
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
        <div>
          <label style={labelStyle} htmlFor="status">Status</label>
          <select
            id="status"
            name="status"
            defaultValue={project?.status ?? 'coming_soon'}
            style={{ ...inputStyle, cursor: 'pointer' }}
          >
            <option value="coming_soon">Coming soon</option>
            <option value="live">Live</option>
            <option value="hidden">Hidden</option>
          </select>
        </div>
        <div>
          <label style={labelStyle} htmlFor="display_order">Order</label>
          <input
            id="display_order"
            name="display_order"
            type="number"
            defaultValue={project?.display_order ?? 99}
            min={1}
            style={inputStyle}
            onFocus={e => (e.target.style.borderColor = 'var(--accent)')}
            onBlur={e => (e.target.style.borderColor = 'var(--border)')}
          />
        </div>
      </div>

      <div>
        <label style={labelStyle} htmlFor="url">URL (optional)</label>
        <input
          id="url"
          name="url"
          type="url"
          defaultValue={project?.url ?? ''}
          placeholder="https://myproject.com"
          style={inputStyle}
          onFocus={e => (e.target.style.borderColor = 'var(--accent)')}
          onBlur={e => (e.target.style.borderColor = 'var(--border)')}
        />
      </div>

      <div>
        <label style={labelStyle} htmlFor="tags">Tags (comma-separated)</label>
        <input
          id="tags"
          name="tags"
          defaultValue={project?.tags.join(', ') ?? ''}
          placeholder="UPI, India, Freelancers"
          style={inputStyle}
          onFocus={e => (e.target.style.borderColor = 'var(--accent)')}
          onBlur={e => (e.target.style.borderColor = 'var(--border)')}
        />
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
        <input
          id="visible"
          name="visible"
          type="checkbox"
          defaultChecked={project?.visible ?? true}
          value="true"
          style={{ width: 16, height: 16, cursor: 'pointer', accentColor: 'var(--accent)' }}
          onChange={e => {
            const hiddenInput = formRef.current?.querySelector<HTMLInputElement>('input[name="visible"][type="hidden"]')
            if (hiddenInput) hiddenInput.value = e.target.checked ? 'true' : 'false'
          }}
        />
        <label
          htmlFor="visible"
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: 12,
            color: 'var(--text-dim)',
            cursor: 'pointer',
          }}
        >
          Visible on landing page
        </label>
      </div>

      <div style={{ display: 'flex', gap: 12, paddingTop: 8 }}>
        <button
          type="submit"
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: 12,
            fontWeight: 600,
            letterSpacing: '0.05em',
            textTransform: 'uppercase',
            color: 'oklch(10% 0.01 30)',
            background: 'var(--accent)',
            border: 'none',
            borderRadius: 8,
            padding: '12px 24px',
            cursor: 'pointer',
            transition: 'filter 0.2s',
          }}
          onMouseEnter={e => (e.currentTarget.style.filter = 'brightness(1.08)')}
          onMouseLeave={e => (e.currentTarget.style.filter = 'none')}
        >
          {submitLabel}
        </button>
        <a
          href="/admin/projects"
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: 12,
            fontWeight: 500,
            letterSpacing: '0.05em',
            textTransform: 'uppercase',
            color: 'var(--text-dim)',
            background: 'transparent',
            border: '1px solid var(--border)',
            borderRadius: 8,
            padding: '12px 24px',
            cursor: 'pointer',
            textDecoration: 'none',
            display: 'inline-flex',
            alignItems: 'center',
            transition: 'border-color 0.2s, color 0.2s',
          }}
          onMouseEnter={e => {
            e.currentTarget.style.borderColor = 'var(--border-hi)'
            e.currentTarget.style.color = 'var(--text)'
          }}
          onMouseLeave={e => {
            e.currentTarget.style.borderColor = 'var(--border)'
            e.currentTarget.style.color = 'var(--text-dim)'
          }}
        >
          Cancel
        </a>
      </div>
    </form>
  )
}
