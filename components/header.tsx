"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, Cpu } from "lucide-react"

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-black/60 backdrop-blur-xl border-b border-cyan-500/20" : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto px-6 py-5 flex items-center justify-between">
        <div className="flex items-center gap-3 text-2xl font-bold">
          <div className="w-10 h-10 border-2 border-cyan-500 rounded-lg flex items-center justify-center">
            <Cpu className="text-cyan-500" size={20} />
          </div>
          <span className="text-cyan-400 tracking-tight">NEXUSAI</span>
        </div>

        <div className="hidden lg:flex items-center gap-8">
          <a
            href="#services"
            className="text-gray-300 hover:text-white transition-colors text-sm font-medium tracking-wide"
          >
            SERVICES
          </a>
          <a
            href="#benefits"
            className="text-gray-300 hover:text-white transition-colors text-sm font-medium tracking-wide"
          >
            BENEFITS
          </a>
          <a
            href="#portfolio"
            className="text-gray-300 hover:text-white transition-colors text-sm font-medium tracking-wide"
          >
            PORTFOLIO
          </a>
          <a
            href="#process"
            className="text-gray-300 hover:text-white transition-colors text-sm font-medium tracking-wide"
          >
            PROCESS
          </a>
          <a
            href="#pricing"
            className="text-gray-300 hover:text-white transition-colors text-sm font-medium tracking-wide"
          >
            PRICING
          </a>
          <Button className="bg-gradient-to-r from-cyan-500 to-blue-500 text-black hover:from-cyan-400 hover:to-blue-400 font-semibold px-6 rounded-full shadow-[0_0_20px_rgba(0,212,255,0.3)]">
            CONTACT
          </Button>
        </div>

        <button className="lg:hidden text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {mobileMenuOpen && (
        <div className="lg:hidden bg-black/95 backdrop-blur-xl border-b border-cyan-500/20">
          <div className="container mx-auto px-6 py-4 flex flex-col gap-4">
            <a
              href="#services"
              className="text-gray-300 hover:text-white transition-colors text-sm font-medium tracking-wide"
            >
              SERVICES
            </a>
            <a
              href="#benefits"
              className="text-gray-300 hover:text-white transition-colors text-sm font-medium tracking-wide"
            >
              BENEFITS
            </a>
            <a
              href="#portfolio"
              className="text-gray-300 hover:text-white transition-colors text-sm font-medium tracking-wide"
            >
              PORTFOLIO
            </a>
            <a
              href="#process"
              className="text-gray-300 hover:text-white transition-colors text-sm font-medium tracking-wide"
            >
              PROCESS
            </a>
            <a
              href="#pricing"
              className="text-gray-300 hover:text-white transition-colors text-sm font-medium tracking-wide"
            >
              PRICING
            </a>
            <Button className="bg-gradient-to-r from-cyan-500 to-blue-500 text-black hover:from-cyan-400 hover:to-blue-400 font-semibold rounded-full w-full">
              CONTACT
            </Button>
          </div>
        </div>
      )}
    </header>
  )
}
