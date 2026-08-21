import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import { NavLink, useLocation } from 'react-router-dom'
import { ctaApply, navLinks, site } from '../content/site'
import { Button } from './Button'
import { Logo } from './Logo'

export function HeaderNav() {
  const [open, setOpen] = useState(false)
  const location = useLocation()

  const close = () => setOpen(false)

  useEffect(() => {
    close()
  }, [location.pathname])

  useEffect(() => {
    if (!open) return

    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') close()
    }

    const onResize = () => {
      if (window.matchMedia('(min-width: 961px)').matches) close()
    }

    document.addEventListener('keydown', onKey)
    window.addEventListener('resize', onResize)
    document.body.style.overflow = 'hidden'

    return () => {
      document.removeEventListener('keydown', onKey)
      window.removeEventListener('resize', onResize)
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header className="header">
      <div className="container header__inner">
        <NavLink to="/" className="brand" onClick={close}>
          <Logo size={40} />
          <span className="brand__text">
            <strong>{site.shortName}</strong>
            <span>ग्राम विकास पोर्टल</span>
          </span>
        </NavLink>

        <nav className="nav" aria-label="मुख्य नेविगेशन">
          <button
            type="button"
            className={`nav__toggle${open ? ' is-open' : ''}`}
            aria-expanded={open}
            aria-controls="primary-nav"
            aria-label={open ? 'मेनू बंद करें' : 'मेनू खोलें'}
            onClick={() => setOpen((v) => !v)}
          >
            <span />
            <span />
            <span />
          </button>

          <div
            id="primary-nav"
            className={`nav__panel${open ? ' open' : ''}`}
          >
            <ul className="nav__links">
              {navLinks.map((link) => (
                <li key={link.to}>
                  <NavLink
                    to={link.to}
                    end={link.to === '/'}
                    className={({ isActive }) => (isActive ? 'active' : undefined)}
                    onClick={close}
                  >
                    {link.label}
                  </NavLink>
                </li>
              ))}
            </ul>
            <Button to={ctaApply.to} onClick={close}>
              {ctaApply.label}
            </Button>
          </div>

          <Button to={ctaApply.to} className="nav__cta-desktop">
            {ctaApply.label}
          </Button>
        </nav>
      </div>
      {open
        ? createPortal(
            <button
              type="button"
              className="nav__backdrop"
              aria-label="मेनू बंद करें"
              onClick={close}
            />,
            document.body,
          )
        : null}
    </header>
  )
}
