"use client"

import { useState, useEffect, useCallback, useRef } from "react"
import useEmblaCarousel from "embla-carousel-react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"

interface PortfolioItem {
  id: number
  title: string
  description: string
  beforeImage: string
  afterImage: string
  features: string[]
}

const portfolioItems: PortfolioItem[] = [
  {
    id: 1,
    title: "Inventory Management System",
    description: "Legacy Windows app transformed into a modern AI-powered dashboard",
    beforeImage: "/portfolio/old_desktop_inventory_app.png",
    afterImage: "/portfolio/modern_ai_inventory_dashboard.png",
    features: ["AI Stock Predictions", "Real-time Analytics", "Cloud-based Access"]
  },
  {
    id: 2,
    title: "Customer Relationship Manager",
    description: "Outdated CRM modernized with intelligent chatbot integration",
    beforeImage: "/portfolio/old_desktop_crm_software.png",
    afterImage: "/portfolio/modern_crm_with_ai_chatbot.png",
    features: ["AI Chatbot Assistant", "Smart Lead Scoring", "Automated Workflows"]
  },
  {
    id: 3,
    title: "Image Management Platform",
    description: "Basic photo tool upgraded with computer vision capabilities",
    beforeImage: "/portfolio/old_photo_management_software.png",
    afterImage: "/portfolio/modern_ai_image_detection_app.png",
    features: ["Object Detection", "Auto Tagging", "Visual Search"]
  },
  {
    id: 4,
    title: "Logistics Tracking System",
    description: "Static tracking app rebuilt with live mapping and route AI",
    beforeImage: "/portfolio/old_logistics_desktop_app.png",
    afterImage: "/portfolio/modern_logistics_with_live_maps.png",
    features: ["Live GPS Tracking", "Route Optimization", "Real-time Updates"]
  }
]

function BeforeAfterReveal({ beforeImage, afterImage, autoAnimate }: { beforeImage: string; afterImage: string; autoAnimate: boolean }) {
  const [sliderPosition, setSliderPosition] = useState(50)
  const [isDragging, setIsDragging] = useState(false)
  const [isHovering, setIsHovering] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!autoAnimate || isDragging || isHovering) return

    const interval = setInterval(() => {
      setSliderPosition(prev => {
        const newPos = prev + 2
        if (newPos >= 85) return 15
        return newPos
      })
    }, 150)

    return () => clearInterval(interval)
  }, [autoAnimate, isDragging, isHovering])

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()
    const x = clientX - rect.left
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100))
    setSliderPosition(percentage)
  }, [])

  const handleMouseDown = () => setIsDragging(true)
  const handleMouseUp = () => setIsDragging(false)
  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging) handleMove(e.clientX)
  }
  const handleTouchMove = (e: React.TouchEvent) => {
    handleMove(e.touches[0].clientX)
  }

  useEffect(() => {
    const handleGlobalMouseUp = () => setIsDragging(false)
    window.addEventListener("mouseup", handleGlobalMouseUp)
    return () => window.removeEventListener("mouseup", handleGlobalMouseUp)
  }, [])

  return (
    <div
      ref={containerRef}
      className="relative w-full aspect-video overflow-hidden rounded-xl cursor-ew-resize select-none"
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      onTouchMove={handleTouchMove}
      onTouchStart={() => { setIsDragging(true); setIsHovering(true) }}
      onTouchEnd={() => { setIsDragging(false); setIsHovering(false) }}
    >
      <div className="absolute inset-0 pointer-events-none">
        <img
          src={afterImage}
          alt="After"
          className="w-full h-full object-cover"
          draggable={false}
        />
      </div>

      <div
        className="absolute inset-0 overflow-hidden pointer-events-none"
        style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
      >
        <img
          src={beforeImage}
          alt="Before"
          className="w-full h-full object-cover"
          draggable={false}
        />
      </div>

      <div
        className="absolute top-0 bottom-0 w-1 bg-cyan-400 shadow-[0_0_10px_rgba(0,255,255,0.5)] pointer-events-none"
        style={{ left: `${sliderPosition}%`, transform: "translateX(-50%)" }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-cyan-400 rounded-full flex items-center justify-center shadow-lg">
          <ChevronLeft className="w-4 h-4 text-black absolute -left-0.5" />
          <ChevronRight className="w-4 h-4 text-black absolute -right-0.5" />
        </div>
      </div>

      <div className="absolute top-3 left-3 bg-black/70 text-white text-xs px-2 py-1 rounded font-medium pointer-events-none">
        BEFORE
      </div>
      <div className="absolute top-3 right-3 bg-cyan-400/90 text-black text-xs px-2 py-1 rounded font-medium pointer-events-none">
        AFTER
      </div>
    </div>
  )
}

export function PortfolioCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, watchDrag: false })
  const [selectedIndex, setSelectedIndex] = useState(0)

  const scrollPrev = useCallback(() => {
    emblaApi?.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    emblaApi?.scrollNext()
  }, [emblaApi])

  const scrollTo = useCallback((index: number) => {
    emblaApi?.scrollTo(index)
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return
    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap())
    emblaApi.on("select", onSelect)
    return () => { emblaApi.off("select", onSelect) }
  }, [emblaApi])

  return (
    <section id="portfolio" className="relative py-24 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm font-medium mb-6">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            OUR PORTFOLIO
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Transformations That{" "}
            <span className="italic bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Speak Results
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            See how we've transformed outdated desktop applications into modern, AI-powered solutions that drive business growth.
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          <div className="overflow-hidden rounded-2xl" ref={emblaRef}>
            <div className="flex">
              {portfolioItems.map((item, index) => (
                <div key={item.id} className="flex-[0_0_100%] min-w-0 px-2">
                  <div className="bg-gray-900/50 backdrop-blur border border-gray-800 rounded-2xl p-6 md:p-8">
                    <BeforeAfterReveal
                      beforeImage={item.beforeImage}
                      afterImage={item.afterImage}
                      autoAnimate={selectedIndex === index}
                    />
                    
                    <div className="mt-6">
                      <h3 className="text-2xl font-bold text-white mb-2">{item.title}</h3>
                      <p className="text-gray-400 mb-4">{item.description}</p>
                      
                      <div className="flex flex-wrap gap-2">
                        {item.features.map((feature, i) => (
                          <span
                            key={i}
                            className="px-3 py-1 bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-sm rounded-full"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={scrollPrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 w-12 h-12 bg-gray-900/80 border border-gray-700 rounded-full flex items-center justify-center text-white hover:bg-cyan-500/20 hover:border-cyan-500/50 transition-all"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          
          <button
            onClick={scrollNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 w-12 h-12 bg-gray-900/80 border border-gray-700 rounded-full flex items-center justify-center text-white hover:bg-cyan-500/20 hover:border-cyan-500/50 transition-all"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        <div className="flex justify-center gap-2 mt-8">
          {portfolioItems.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollTo(index)}
              className={cn(
                "w-3 h-3 rounded-full transition-all",
                selectedIndex === index
                  ? "bg-cyan-400 w-8"
                  : "bg-gray-600 hover:bg-gray-500"
              )}
            />
          ))}
        </div>

        <p className="text-center text-gray-500 text-sm mt-4">
          Drag the slider to compare before and after
        </p>
      </div>
    </section>
  )
}
