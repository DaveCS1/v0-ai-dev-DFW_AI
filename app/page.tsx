import { HeroSection } from "@/components/hero-section"
import { ServicesSection } from "@/components/services-section"
import { ExpertiseSection } from "@/components/expertise-section"
import { ProcessSection } from "@/components/process-section"
import { CTASection } from "@/components/cta-section"
import { ContactFormSection } from "@/components/contact-form-section"
import { EstimateBuilderWidget } from "@/components/estimate-builder-widget"
import { Header } from "@/components/header"
import { AnimatedBackground } from "@/components/animated-background"

export default function Home() {
  return (
    <main className="relative">
      <AnimatedBackground />
      <Header />
      <HeroSection />
      <ServicesSection />
      <ExpertiseSection />
      <ProcessSection />
      <CTASection />
      <ContactFormSection />
      <EstimateBuilderWidget />
    </main>
  )
}
