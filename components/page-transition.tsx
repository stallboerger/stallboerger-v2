'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

export default function PageTransition() {
  const pathname = usePathname()

  useEffect(() => {
    if (typeof document === 'undefined') return
    const html = document.documentElement

    html.classList.add('is-changing')
    html.classList.add('is-animating')

    // small delay so initial state (opacity 0, translated) applies before animating in
    const startTimer = setTimeout(() => {
      html.classList.remove('is-animating')
    }, 20)

    const endTimer = setTimeout(() => {
      html.classList.remove('is-changing')
    }, 200)

    return () => {
      clearTimeout(startTimer)
      clearTimeout(endTimer)
      html.classList.remove('is-animating')
      html.classList.remove('is-changing')
    }
  }, [pathname])

  // optional: trigger fade-out immediately on internal link clicks for a smoother feel
  useEffect(() => {
    if (typeof document === 'undefined') return
    const onClick = (e: MouseEvent) => {
      if (e.defaultPrevented || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return
      const target = (e.target as HTMLElement | null)?.closest('a') as HTMLAnchorElement | null
      if (!target) return
      try {
        const url = new URL(target.href, window.location.href)
        const isSameOrigin = url.origin === window.location.origin
        const isHashChange = url.pathname === window.location.pathname && url.hash
        if (isSameOrigin && !isHashChange) {
          const html = document.documentElement
          html.classList.add('is-changing')
          html.classList.add('is-animating')
        }
      } catch {
        // ignore
      }
    }
    document.addEventListener('click', onClick, { capture: true })
    return () => document.removeEventListener('click', onClick, { capture: true } as any)
  }, [])

  return null
}


