"use client"

import { useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, Play } from "lucide-react"

export function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return
      const scrollY = window.scrollY
      const opacity = Math.max(0, 1 - scrollY / 800)
      const scale = Math.max(0.8, 1 - scrollY / 2000)
      sectionRef.current.style.opacity = opacity.toString()
      sectionRef.current.style.transform = `scale(${scale})`
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden transition-all duration-300"
    >
      <div className="absolute inset-0 animated-grid-bg opacity-30" />

      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(178,75,243,0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(178,75,243,0.1)_1px,transparent_1px)] bg-[size:80px_80px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_40%,transparent_100%)] animate-pulse" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto text-center space-y-8">
          <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full border border-cyan-500/30 bg-cyan-500/5 text-sm text-cyan-400 mb-4 backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
            </span>
            <span>AI & COMPUTER VISION SOFTWARE AGENCY</span>
          </div>

          <h1 className="text-6xl md:text-8xl font-bold leading-tight tracking-tight">
            <div className="text-white">BUILDING THE</div>
            <div className="gradient-text italic">FUTURE OF SOFTWARE</div>
          </h1>

          <p className="text-lg md:text-xl text-gray-400 text-balance max-w-3xl mx-auto leading-relaxed">
            We transform small and medium businesses with intelligent desktop and web applications powered by
            cutting-edge AI and computer vision technology.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6">
            <Button
              size="lg"
              className="bg-cyan-500 text-black hover:bg-cyan-400 font-semibold px-8 h-14 rounded-full shadow-[0_0_30px_rgba(0,212,255,0.3)] hover:shadow-[0_0_40px_rgba(0,212,255,0.5)] transition-all"
            >
              START YOUR PROJECT
              <ArrowRight className="ml-2" size={20} />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white/20 text-white hover:bg-white/5 bg-transparent h-14 px-8 rounded-full backdrop-blur-sm"
            >
              <Play className="mr-2" size={18} fill="white" />
              VIEW OUR WORK
            </Button>
          </div>

          <div className="pt-16 grid grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="space-y-2">
              <div className="text-5xl font-bold gradient-text">50+</div>
              <div className="text-sm text-gray-400 uppercase tracking-wider">Projects Delivered</div>
            </div>
            <div className="space-y-2">
              <div className="text-5xl font-bold gradient-text">99%</div>
              <div className="text-sm text-gray-400 uppercase tracking-wider">Client Satisfaction</div>
            </div>
            <div className="space-y-2">
              <div className="text-5xl font-bold gradient-text">24/7</div>
              <div className="text-sm text-gray-400 uppercase tracking-wider">Support Available</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
