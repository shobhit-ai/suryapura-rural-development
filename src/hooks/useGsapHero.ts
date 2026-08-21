import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { usePrefersReducedMotion } from './usePrefersReducedMotion'

export function useGsapHero() {
  const heroRef = useRef<HTMLElement>(null)
  const reducedMotion = usePrefersReducedMotion()

  useEffect(() => {
    const root = heroRef.current
    if (!root || reducedMotion) return

    const ctx = gsap.context(() => {
      const bg = root.querySelector('.hero__bg')
      const portrait = root.querySelector('.hero__portrait')
      const quote = root.querySelector('.hero__quote')
      const copyChildren = root.querySelectorAll(
        '.hero__copy h1, .hero__copy p, .hero__copy .btn',
      )

      gsap.set([bg, portrait, quote], { opacity: 0 })
      gsap.set(copyChildren, { opacity: 0, y: 28 })
      gsap.set(portrait, { y: 40, scale: 0.94 })
      gsap.set(quote, { y: 24 })
      gsap.set(bg, { scale: 1.08 })

      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })

      tl.to(bg, { opacity: 1, scale: 1, duration: 1.35 }, 0)
        .to(
          copyChildren,
          { opacity: 1, y: 0, duration: 0.75, stagger: 0.12 },
          0.25,
        )
        .to(
          portrait,
          { opacity: 1, y: 0, scale: 1, duration: 0.9 },
          0.35,
        )
        .to(quote, { opacity: 1, y: 0, duration: 0.7 }, 0.55)
    }, root)

    return () => ctx.revert()
  }, [reducedMotion])

  return heroRef
}
