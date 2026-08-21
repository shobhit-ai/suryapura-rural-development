import { site } from '../content/site'

export function TopBar() {
  return (
    <div className="topbar">
      <div className="container topbar__inner">
        <div className="topbar__meta">
          <span>{site.location}</span>
          <span>{site.phone}</span>
          <span>{site.email}</span>
        </div>
        <div className="topbar__social" aria-label="सोशल मीडिया">
          <a href="https://facebook.com" target="_blank" rel="noreferrer">
            Facebook
          </a>
          <a href="https://instagram.com" target="_blank" rel="noreferrer">
            Instagram
          </a>
          <a href="https://x.com" target="_blank" rel="noreferrer">
            X
          </a>
          <a href="https://youtube.com" target="_blank" rel="noreferrer">
            YouTube
          </a>
        </div>
      </div>
    </div>
  )
}
