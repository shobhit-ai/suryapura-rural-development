import { homeHero } from '../content/home'
import { useGsapHero } from '../hooks/useGsapHero'
import { Button } from './Button'

export function HeroBanner() {
  const heroRef = useGsapHero()

  return (
    <section ref={heroRef} className="hero" aria-label="मुख्य बैनर">
      <img
        className="hero__bg"
        src={homeHero.villageSrc}
        alt=""
        aria-hidden="true"
      />
      <div className="hero__veil" />
      <div className="container hero__inner">
        <div className="hero__copy">
          <h1>{homeHero.headline}</h1>
          <p>{homeHero.subcopy}</p>
          <Button to={homeHero.cta.to}>{homeHero.cta.label}</Button>
        </div>
        <div className="hero__portrait-wrap">
          <img
            className="hero__portrait"
            src={homeHero.ambassadorSrc}
            alt={`${homeHero.quote.author}, ${homeHero.quote.role}`}
          />
          <blockquote className="hero__quote">
            <p>“{homeHero.quote.text}”</p>
            <cite>
              {homeHero.quote.author}
              <span>{homeHero.quote.role}</span>
            </cite>
          </blockquote>
        </div>
      </div>
    </section>
  )
}
