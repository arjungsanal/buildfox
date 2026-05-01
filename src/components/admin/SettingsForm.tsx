'use client'

import { useState } from 'react'
import type { Settings } from '@/types'
import { updateSettings } from '@/lib/actions'

interface Props {
  settings: Settings
}

export default function SettingsForm({ settings }: Props) {
  const [values, setValues] = useState<Settings>(settings)
  const [saving, setSaving] = useState(false)
  const [saved, setSaved] = useState(false)

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setSaving(true)
    setSaved(false)
    await updateSettings(values as unknown as Record<string, string>)
    setSaving(false)
    setSaved(true)
    setTimeout(() => setSaved(false), 3000)
  }

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

  const fields: { key: keyof Settings; label: string; placeholder: string; type?: string }[] = [
    { key: 'email', label: 'Contact email', placeholder: 'hi@yourdomain.com', type: 'email' },
    { key: 'github_url', label: 'GitHub URL', placeholder: 'https://github.com/yourhandle' },
    { key: 'linkedin_url', label: 'LinkedIn URL', placeholder: 'https://linkedin.com/in/yourhandle' },
    { key: 'twitter_url', label: 'X / Twitter URL', placeholder: 'https://x.com/yourhandle' },
  ]

  return (
    <form
      onSubmit={handleSubmit}
      style={{ display: 'flex', flexDirection: 'column', gap: 20, maxWidth: 500 }}
    >
      {fields.map(field => (
        <div key={field.key}>
          <label style={labelStyle} htmlFor={field.key}>{field.label}</label>
          <input
            id={field.key}
            type={field.type ?? 'url'}
            value={values[field.key]}
            onChange={e => setValues(prev => ({ ...prev, [field.key]: e.target.value }))}
            placeholder={field.placeholder}
            required
            style={inputStyle}
            onFocus={e => (e.target.style.borderColor = 'var(--accent)')}
            onBlur={e => (e.target.style.borderColor = 'var(--border)')}
          />
        </div>
      ))}

      <div style={{ display: 'flex', alignItems: 'center', gap: 14, paddingTop: 8 }}>
        <button
          type="submit"
          disabled={saving}
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: 12,
            fontWeight: 600,
            letterSpacing: '0.05em',
            textTransform: 'uppercase',
            color: 'oklch(10% 0.01 30)',
            background: saving ? 'oklch(62% 0.18 50 / 0.6)' : 'var(--accent)',
            border: 'none',
            borderRadius: 8,
            padding: '12px 24px',
            cursor: saving ? 'not-allowed' : 'pointer',
            transition: 'filter 0.2s',
          }}
        >
          {saving ? 'Saving...' : 'Save settings'}
        </button>

        {saved && (
          <span
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: 11,
              color: 'var(--green)',
            }}
          >
            Saved!
          </span>
        )}
      </div>
    </form>
  )
}
