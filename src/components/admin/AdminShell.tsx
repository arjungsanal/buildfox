'use client'

import { usePathname } from 'next/navigation'
import Sidebar from './Sidebar'

export default function AdminShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const isLoginPage = pathname === '/admin/login'

  if (isLoginPage) {
    return <>{children}</>
  }

  return (
    <div
      style={{
        display: 'flex',
        minHeight: '100vh',
        background: 'var(--bg)',
      }}
    >
      <Sidebar />
      <main
        style={{
          flex: 1,
          padding: '32px 40px',
          minWidth: 0,
          overflowY: 'auto',
        }}
      >
        {children}
      </main>
    </div>
  )
}
