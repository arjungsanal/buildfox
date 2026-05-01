'use client'

import { useEffect, useRef } from 'react'

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)
  const pos = useRef({ mx: 0, my: 0, rx: 0, ry: 0 })
  const rafRef = useRef<number>(0)

  useEffect(() => {
    const dot = dotRef.current
    const ring = ringRef.current
    if (!dot || !ring) return

    function onMove(e: MouseEvent) {
      pos.current.mx = e.clientX
      pos.current.my = e.clientY
      dot!.style.left = e.clientX + 'px'
      dot!.style.top = e.clientY + 'px'
      dot!.style.opacity = '1'
      ring!.style.opacity = '1'
    }

    function onLeave() {
      dot!.style.opacity = '0'
      ring!.style.opacity = '0'
    }

    function animRing() {
      const p = pos.current
      p.rx += (p.mx - p.rx) * 0.1
      p.ry += (p.my - p.ry) * 0.1
      ring!.style.left = p.rx + 'px'
      ring!.style.top = p.ry + 'px'
      rafRef.current = requestAnimationFrame(animRing)
    }

    function onEnterInteractive() {
      ring!.style.width = '48px'
      ring!.style.height = '48px'
      dot!.style.opacity = '0'
    }

    function onLeaveInteractive() {
      ring!.style.width = '30px'
      ring!.style.height = '30px'
      dot!.style.opacity = '1'
    }

    const interactiveSelector = 'a, button, .bento-card, .involve-card, .hire-option, .about-social-pill'

    function attachInteractive() {
      document.querySelectorAll<HTMLElement>(interactiveSelector).forEach(el => {
        el.addEventListener('mouseenter', onEnterInteractive)
        el.addEventListener('mouseleave', onLeaveInteractive)
      })
    }

    document.addEventListener('mousemove', onMove)
    document.addEventListener('mouseleave', onLeave)
    rafRef.current = requestAnimationFrame(animRing)
    attachInteractive()

    const observer = new MutationObserver(attachInteractive)
    observer.observe(document.body, { childList: true, subtree: true })

    return () => {
      document.removeEventListener('mousemove', onMove)
      document.removeEventListener('mouseleave', onLeave)
      cancelAnimationFrame(rafRef.current)
      observer.disconnect()
    }
  }, [])

  return (
    <>
      <div
        ref={dotRef}
        style={{
          position: 'fixed',
          width: 6,
          height: 6,
          borderRadius: '50%',
          background: 'var(--accent)',
          pointerEvents: 'none',
          zIndex: 9999,
          transform: 'translate(-50%,-50%)',
          opacity: 0,
          transition: 'width 0.2s, height 0.2s, opacity 0.3s',
        }}
      />
      <div
        ref={ringRef}
        style={{
          position: 'fixed',
          width: 30,
          height: 30,
          borderRadius: '50%',
          border: '1px solid oklch(62% 0.18 50 / 0.5)',
          pointerEvents: 'none',
          zIndex: 9998,
          transform: 'translate(-50%,-50%)',
          opacity: 0,
          transition: 'width 0.25s, height 0.25s, opacity 0.3s',
        }}
      />
    </>
  )
}
