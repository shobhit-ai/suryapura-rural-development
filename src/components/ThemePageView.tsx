import { Link } from 'react-router-dom'
import type { ThemePage } from '../content/pages'
import { Button } from './Button'
import { PageHero } from './PageHero'

type ThemePageViewProps = {
  page: ThemePage
}

export function ThemePageView({ page }: ThemePageViewProps) {
  return (
    <>
      <PageHero
        title={page.title}
        summary={page.summary}
        eyebrow={page.eyebrow}
        image={page.image}
      />
      <section className="page-body">
        <div className="container page-body__grid">
          <div>
            <p>{page.narrative}</p>
            <ul>
              {page.bullets.map((bullet) => (
                <li key={bullet}>{bullet}</li>
              ))}
            </ul>
            <Button to="/works" variant="ghost">
              {page.relatedLabel}
            </Button>
          </div>
          <aside className="page-aside">
            <img src={page.image} alt="" />
            <h3>{page.title} अभियान</h3>
            <p style={{ color: 'var(--color-text-muted)', marginBottom: '0.85rem' }}>
              मुख्य पृष्ठ पर विकास कार्यों और सामाजिक संदेशों की झलक देखें।
            </p>
            <Link className="link-more" to="/">
              होम पर जाएँ
            </Link>
          </aside>
        </div>
      </section>
    </>
  )
}
