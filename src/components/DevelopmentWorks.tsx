import { Link } from 'react-router-dom'
import { works } from '../content/home'
import { useGsapRevealCards } from '../hooks/useGsapRevealCards'
import { Button } from './Button'

export function DevelopmentWorks() {
  const gridRef = useGsapRevealCards<HTMLDivElement>({
    y: 56,
    stagger: 0.12,
  })

  return (
    <section className="section" aria-labelledby="works-title">
      <div className="container">
        <div className="section-head">
          <h2 id="works-title">{works.title}</h2>
          <p>{works.subtitle}</p>
        </div>
        <div className="works" ref={gridRef}>
          {works.items.map((item) => (
            <Link
              key={item.title}
              to={item.to}
              className="work-card"
              data-gsap-card
            >
              <img src={item.image} alt="" />
              <div className="work-card__body">
                <h3>{item.title}</h3>
                <p>{item.meta}</p>
              </div>
            </Link>
          ))}
        </div>
        <div className="works-cta">
          <Button to={works.cta.to} variant="ghost">
            {works.cta.label}
          </Button>
        </div>
      </div>
    </section>
  )
}
