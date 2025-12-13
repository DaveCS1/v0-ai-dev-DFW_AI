"use client"

import { useEffect, useRef } from "react"
import { Monitor, Globe, Brain, Eye, Zap, Layers } from "lucide-react"

const services = [
  {
    title: "Desktop Applications",
    description:
      "Powerful, native desktop software tailored to your business workflows with seamless integration capabilities.",
    icon: Monitor,
    color: "cyan",
    borderColor: "border-cyan-500/50",
    glowColor: "shadow-cyan-500/50",
    iconBg: "bg-cyan-500/20",
    progressBar: "bg-gradient-to-r from-cyan-500 to-transparent",
  },
  {
    title: "Web Applications",
    description: "Scalable, responsive web platforms that deliver exceptional user experiences across all devices.",
    icon: Globe,
    color: "fuchsia",
    borderColor: "border-fuchsia-500/50",
    glowColor: "shadow-fuchsia-500/50",
    iconBg: "bg-fuchsia-500/20",
    progressBar: "bg-gradient-to-r from-fuchsia-500 to-transparent",
  },
  {
    title: "AI Integration",
    description:
      "Intelligent automation and machine learning solutions that transform your data into actionable insights.",
    icon: Brain,
    color: "emerald",
    borderColor: "border-emerald-500/50",
    glowColor: "shadow-emerald-500/50",
    iconBg: "bg-emerald-500/20",
    progressBar: "bg-gradient-to-r from-emerald-500 to-transparent",
  },
  {
    title: "Computer Vision",
    description: "Advanced image recognition, object detection, and visual analysis systems for your applications.",
    icon: Eye,
    color: "orange",
    borderColor: "border-orange-500/50",
    glowColor: "shadow-orange-500/50",
    iconBg: "bg-orange-500/20",
    progressBar: "bg-gradient-to-r from-orange-500 to-transparent",
  },
  {
    title: "Process Automation",
    description: "Streamline operations with intelligent automation that reduces manual work and increases efficiency.",
    icon: Zap,
    color: "fuchsia",
    borderColor: "border-fuchsia-500/50",
    glowColor: "shadow-fuchsia-500/50",
    iconBg: "bg-fuchsia-500/20",
    progressBar: "bg-gradient-to-r from-fuchsia-500 to-transparent",
  },
  {
    title: "Legacy Modernization",
    description: "Transform outdated systems into modern, AI-powered applications without disrupting your business.",
    icon: Layers,
    color: "blue",
    borderColor: "border-blue-500/50",
    glowColor: "shadow-blue-500/50",
    iconBg: "bg-blue-500/20",
    progressBar: "bg-gradient-to-r from-blue-500 to-transparent",
  },
]

export function ExpertiseSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const cardsRef = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return
      const rect = sectionRef.current.getBoundingClientRect()
      const isVisible = rect.top < window.innerHeight && rect.bottom > 0

      if (isVisible) {
        cardsRef.current.forEach((card, index) => {
          if (!card) return
          setTimeout(() => {
            card.style.opacity = "1"
            card.style.transform = "translateY(0)"
          }, index * 100)
        })
      }
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll()
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <section id="services" ref={sectionRef} className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 space-y-4">
          <div className="inline-block px-4 py-1.5 rounded-full border border-primary/30 text-primary text-sm font-semibold tracking-wider uppercase mb-4">
            What We Do
          </div>
          <h2 className="text-4xl md:text-6xl font-bold">
            Our{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 text-transparent bg-clip-text">
              Services
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Comprehensive software solutions designed to propel your business into the future
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <div
                key={index}
                ref={(el) => {
                  cardsRef.current[index] = el
                }}
                className={`group relative p-8 rounded-3xl bg-card/30 backdrop-blur-sm border ${service.borderColor} hover:${service.glowColor} hover:shadow-xl transition-all duration-500 opacity-0 translate-y-8 overflow-hidden`}
                style={{ transitionDelay: `${index * 50}ms` }}
              >
                {/* Background icon ghost */}
                <div className="absolute top-8 right-8 opacity-5 group-hover:opacity-10 transition-opacity duration-500">
                  <Icon className="w-32 h-32" />
                </div>

                <div
                  className={`relative w-16 h-16 rounded-2xl ${service.iconBg} border ${service.borderColor} flex items-center justify-center mb-6 group-hover:scale-110 group-hover:border-${service.color}-500 transition-all duration-300`}
                >
                  <Icon
                    className={`w-8 h-8 text-${service.color}-500 relative z-10 group-hover:scale-110 transition-transform duration-300`}
                  />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-foreground mb-3 relative z-10">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed relative z-10">{service.description}</p>

                <div className="absolute bottom-0 left-0 right-0 h-1 overflow-hidden rounded-b-3xl">
                  <div
                    className={`h-full ${service.progressBar} translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-700 ease-out`}
                  />
                </div>

                <div
                  className={`absolute inset-0 rounded-3xl bg-${service.color}-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`}
                />
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
