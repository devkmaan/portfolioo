import { AchievementsSection } from '@/components/achievements-section'
import { ContactSection } from '@/components/contact-section'
import { EducationSection } from '@/components/education-section'
import { ExperienceSection } from '@/components/experience-section'
import { Hero } from '@/components/hero'
import { ProjectsSection } from '@/components/projects-section'
import { SiteHeader } from '@/components/site-header'
import { SkillsSection } from '@/components/skills-section'

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <ExperienceSection />
        <EducationSection />
        <ProjectsSection />
        <SkillsSection />
        <AchievementsSection />
        <ContactSection />
      </main>
    </>
  )
}
