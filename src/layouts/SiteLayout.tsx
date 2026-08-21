import { Outlet } from 'react-router-dom'
import { Footer } from '../components/Footer'
import { HeaderNav } from '../components/HeaderNav'
import { TopBar } from '../components/TopBar'

export function SiteLayout() {
  return (
    <div className="site-shell">
      <div className="site-chrome">
        <TopBar />
        <HeaderNav />
      </div>
      <main className="site-main">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
