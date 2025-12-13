"use client"

import { useEffect, useRef } from "react"
import { Card } from "@/components/ui/card"
import { MessageSquare, Lightbulb, Code, Rocket } from "lucide-react"

const steps = [
  {
    icon: MessageSquare,
    number: "01",
    title: "Discovery",
    description: "We learn about your business, challenges, and goals to create the perfect solution.",
  },
  {
    icon: Lightbulb,
    number: "02",
    title: "Strategy",
    description: "Our team designs a comprehensive plan leveraging the best AI and CV technologies.",
  },
  {
    icon: Code,
    number: "03",
    title: "Development",
    description: "We build your application with clean code, best practices, and rigorous testing.",
  },
  {
    icon: Rocket,
    number: "04",
    title: "Launch",
    description: "Deploy your solution with ongoing support and optimization for peak performance.",
  },
]

export function ProcessSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const cardsRef = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return
      const rect = sectionRef.current.getBoundingClientRect()
      const scrollProgress = Math.max(0, Math.min(1, (window.innerHeight - rect.top) / window.innerHeight))

      cardsRef.current.forEach((card, index) => {
        if (!card) return
        const delay = index * 0.15
        const cardProgress = Math.max(0, Math.min(1, (scrollProgress - delay) / 0.5))
        card.style.opacity = cardProgress.toString()
        card.style.transform = `translateX(${(1 - cardProgress) * 100}px)`
      })
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll()
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <section id="process" ref={sectionRef} className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0a0a0a_1px,transparent_1px),linear-gradient(to_bottom,#0a0a0a_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
          <div className="inline-block px-4 py-2 rounded-full border border-primary/30 bg-primary/5 text-sm text-primary mb-4">
            Our Process
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-balance">
            From Concept to <span className="text-primary glow-text">Launch</span>
          </h2>
          <p className="text-lg text-muted-foreground text-balance">
            A proven methodology that delivers results on time and on budget.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <Card
              key={index}
              ref={(el) => {
                cardsRef.current[index] = el
              }}
              className="relative group bg-card/50 backdrop-blur border-border hover:border-primary/50 transition-all duration-500 p-6 space-y-4"
              style={{ opacity: 0 }}
            >
              <div className="absolute top-4 right-4 text-6xl font-bold text-primary/10 group-hover:text-primary/20 transition-colors">
                {step.number}
              </div>

              <div className="relative z-10 space-y-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <step.icon className="text-primary" size={24} />
                </div>

                <h3 className="text-xl font-semibold">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{step.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
