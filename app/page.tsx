import { NavHeader } from "@/components/nav-header"
import { HeroSection } from "@/components/hero-section"
import { StatsBar } from "@/components/stats-bar"
import { SkillsSection } from "@/components/skills-section"
import { MethodologySection } from "@/components/methodology-section"
import { ExperienceSection } from "@/components/experience-section"
import { ProjectsSection } from "@/components/projects-section"
import { CertificationsSection } from "@/components/certifications-section"
import { ContactFooter } from "@/components/contact-footer"

export default function Page() {
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-background">
      <NavHeader />
      <HeroSection />
      <StatsBar />
      <SkillsSection />
      <MethodologySection />
      <ExperienceSection />
      <ProjectsSection />
      <CertificationsSection />
      <ContactFooter />
    </main>
  )
}
