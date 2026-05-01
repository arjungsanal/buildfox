import { getProjects, getSettings } from '@/lib/queries'
import Nav from '@/components/landing/Nav'
import Hero from '@/components/landing/Hero'
import Ticker from '@/components/landing/Ticker'
import ProjectsSection from '@/components/landing/ProjectsSection'
import GetInvolved from '@/components/landing/GetInvolved'
import HireSection from '@/components/landing/HireSection'
import AboutSection from '@/components/landing/AboutSection'
import Footer from '@/components/landing/Footer'
import CustomCursor from '@/components/ui/CustomCursor'

export const revalidate = 60

export default async function Home() {
  const [projects, settings] = await Promise.all([
    getProjects(),
    getSettings(),
  ])

  return (
    <>
      <CustomCursor />
      <Nav />
      <main>
        <Hero />
        <Ticker />
        <ProjectsSection projects={projects} />
        <GetInvolved githubUrl={settings.github_url} email={settings.email} />
        <HireSection email={settings.email} />
        <AboutSection settings={settings} />
      </main>
      <Footer settings={settings} />
    </>
  )
}
