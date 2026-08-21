import { DevelopmentWorks } from '../components/DevelopmentWorks'
import { HeroBanner } from '../components/HeroBanner'
import { Pillars } from '../components/Pillars'
import { SocialPosts } from '../components/SocialPosts'

export function HomePage() {
  return (
    <>
      <HeroBanner />
      <Pillars />
      <DevelopmentWorks />
      <SocialPosts />
    </>
  )
}
