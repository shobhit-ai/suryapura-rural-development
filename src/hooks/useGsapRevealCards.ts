import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { usePrefersReducedMotion } from './usePrefersReducedMotion'

gsap.registerPlugin(ScrollTrigger)

type RevealOptions = {
  y?: number
  stagger?: number
  duration?: number
  start?: string
}

export function useGsapRevealCards<T extends HTMLElement>(
  options: RevealOptions = {},
) {
  const containerRef = useRef<T>(null)
  const reducedMotion = usePrefersReducedMotion()
  const {
    y = 48,
    stagger = 0.12,
    duration = 0.7,
    start = 'top 85%',
  } = options

  useEffect(() => {
    const root = containerRef.current
    if (!root) return

    const cards = root.querySelectorAll<HTMLElement>('[data-gsap-card]')
    if (!cards.length) return

    if (reducedMotion) {
      gsap.set(cards, { clearProps: 'all' })
      return
    }

    const ctx = gsap.context(() => {
      gsap.fromTo(
        cards,
        { opacity: 0, y, scale: 0.96 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration,
          stagger,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: root,
            start,
            toggleActions: 'play none none none',
          },
        },
      )
    }, root)

    return () => ctx.revert()
  }, [reducedMotion, y, stagger, duration, start])

  return containerRef
}
