type PageHeroProps = {
  title: string
  summary: string
  eyebrow?: string
  image?: string
}

export function PageHero({ title, summary, eyebrow, image }: PageHeroProps) {
  return (
    <section className="page-hero" aria-label={title}>
      {image ? (
        <img className="page-hero__bg" src={image} alt="" aria-hidden="true" />
      ) : (
        <div
          className="page-hero__bg"
          style={{ background: 'var(--color-primary)' }}
        />
      )}
      <div className="page-hero__veil" />
      <div className="container page-hero__inner">
        {eyebrow ? <span className="page-hero__eyebrow">{eyebrow}</span> : null}
        <h1>{title}</h1>
        <p>{summary}</p>
      </div>
    </section>
  )
}
