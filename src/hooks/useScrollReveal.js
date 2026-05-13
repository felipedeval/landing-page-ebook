import { useEffect, useRef } from 'react'

export function useScrollReveal(options = {}) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible')
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.08, rootMargin: '0px 0px -32px 0px', ...options },
    )

    const targets = el.querySelectorAll('.reveal')
    targets.forEach(t => observer.observe(t))

    return () => observer.disconnect()
  }, [])

  return ref
}
