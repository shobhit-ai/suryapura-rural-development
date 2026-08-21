import { socialPosts } from '../content/home'
import { useGsapRevealCards } from '../hooks/useGsapRevealCards'
import { Logo } from './Logo'

export function SocialPosts() {
  const gridRef = useGsapRevealCards<HTMLDivElement>({
    y: 60,
    stagger: 0.18,
    duration: 0.8,
  })

  return (
    <section className="section section--muted" aria-labelledby="social-title">
      <div className="container">
        <div className="section-head">
          <h2 id="social-title">{socialPosts.title}</h2>
          <p>{socialPosts.subtitle}</p>
        </div>
        <div className="social-grid" ref={gridRef}>
          {socialPosts.items.map((post) => (
            <article key={post.title} className="social-post" data-gsap-card>
              <div className="social-post__brand">
                <Logo size={28} />
                <span>सूर्यपुरा ग्राम विकास</span>
              </div>
              <img src={post.image} alt="" />
              <div className="social-post__body">
                <h3>{post.title}</h3>
                <p>{post.caption}</p>
                <div className="social-post__meta">
                  <div>{post.url}</div>
                  <div>{post.hashtags}</div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
