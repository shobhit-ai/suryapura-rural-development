import { Link } from 'react-router-dom'
import { pillars } from '../content/home'
import { useGsapRevealCards } from '../hooks/useGsapRevealCards'
import { Icon } from './Icon'

const iconMap = {
  education: 'education',
  farmers: 'farmers',
  roads: 'roads',
  panchayat: 'panchayat',
} as const

export function Pillars() {
  const gridRef = useGsapRevealCards<HTMLDivElement>({
    y: 40,
    stagger: 0.1,
  })

  return (
    <section className="section section--muted" aria-labelledby="pillars-title">
      <div className="container">
        <div className="section-head">
          <h2 id="pillars-title">विकास के चार स्तंभ</h2>
          <p>शिक्षा, किसान, सड़क और पंचायत — सूर्यपुरा की प्राथमिकताएँ।</p>
        </div>
        <div className="pillars" ref={gridRef}>
          {pillars.map((pillar) => (
            <article key={pillar.id} className="pillar" data-gsap-card>
              <div className="pillar__icon">
                <Icon name={iconMap[pillar.id]} />
              </div>
              <h3>{pillar.title}</h3>
              <p>{pillar.description}</p>
              <Link className="link-more" to={pillar.to}>
                और जानें
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
