import { Link } from 'react-router-dom'
import { navLinks, site } from '../content/site'
import { Logo } from './Logo'

export function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__grid">
          <div>
            <div className="brand" style={{ marginBottom: '0.75rem' }}>
              <Logo size={40} />
              <span className="brand__text">
                <strong style={{ color: '#fff' }}>{site.name}</strong>
                <span style={{ color: 'rgba(255,255,255,0.7)' }}>
                  {site.location}
                </span>
              </span>
            </div>
            <p>{site.tagline}</p>
          </div>
          <div>
            <h3>त्वरित लिंक</h3>
            <ul className="footer__links">
              {navLinks.map((link) => (
                <li key={link.to}>
                  <Link to={link.to}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <p className="footer__note">{site.disclaimer}</p>
      </div>
    </footer>
  )
}
