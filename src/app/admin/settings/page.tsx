import { getSettings } from '@/lib/queries'
import SettingsForm from '@/components/admin/SettingsForm'

export default async function SettingsPage() {
  const settings = await getSettings()

  return (
    <div style={{ maxWidth: 600 }}>
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
          Settings
        </h1>
        <p
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: 11,
            color: 'var(--text-muted)',
          }}
        >
          Social links and contact email shown on the landing page.
        </p>
      </div>

      <SettingsForm settings={settings} />
    </div>
  )
}
