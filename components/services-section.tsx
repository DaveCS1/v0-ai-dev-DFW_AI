"use client"

import { useEffect, useRef } from "react"
import { Card } from "@/components/ui/card"
import { Brain, Eye, Cpu, Layers, Workflow, Zap } from "lucide-react"

const services = [
  {
    icon: Brain,
    title: "AI Integration",
    description: "Seamlessly integrate machine learning and AI capabilities into your existing applications.",
  },
  {
    icon: Eye,
    title: "Computer Vision",
    description: "Advanced image recognition, object detection, and visual analysis solutions.",
  },
  {
    icon: Cpu,
    title: "Desktop Applications",
    description: "Build powerful, native desktop applications with modern frameworks and tools.",
  },
  {
    icon: Layers,
    title: "Web Applications",
    description: "Create responsive, scalable web applications optimized for performance.",
  },
  {
    icon: Workflow,
    title: "Process Automation",
    description: "Automate repetitive tasks and workflows with intelligent automation solutions.",
  },
  {
    icon: Zap,
    title: "Performance Optimization",
    description: "Optimize your applications for speed, efficiency, and resource utilization.",
  },
]

export function ServicesSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const cardsRef = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return
      const rect = sectionRef.current.getBoundingClientRect()
      const scrollProgress = Math.max(0, Math.min(1, (window.innerHeight - rect.top) / window.innerHeight))

      cardsRef.current.forEach((card, index) => {
        if (!card) return
        const delay = index * 0.1
        const cardProgress = Math.max(0, Math.min(1, (scrollProgress - delay) / 0.5))
        card.style.opacity = cardProgress.toString()
        card.style.transform = `translateY(${(1 - cardProgress) * 50}px)`
      })
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll()
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <section id="services" ref={sectionRef} className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-background to-background" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
          <div className="inline-block px-4 py-2 rounded-full border border-primary/30 bg-primary/5 text-sm text-primary mb-4">
            Our Services
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-balance">
            Cutting-Edge <span className="text-primary glow-text">Technology</span> Solutions
          </h2>
          <p className="text-lg text-muted-foreground text-balance">
            We deliver comprehensive software development services tailored to your business needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card
              key={index}
              ref={(el) => {
                cardsRef.current[index] = el
              }}
              className="relative group bg-card/50 backdrop-blur border-border hover:border-primary/50 transition-all duration-500 p-6 space-y-4 overflow-hidden"
              style={{ opacity: 0 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10 space-y-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="text-primary" size={24} />
                </div>

                <h3 className="text-xl font-semibold">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{service.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
