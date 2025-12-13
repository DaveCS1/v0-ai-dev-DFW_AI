"use client"

import { useEffect, useRef, useState } from "react"

export function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [isPaused, setIsPaused] = useState(false)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas size
    const setCanvasSize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    setCanvasSize()
    window.addEventListener("resize", setCanvasSize)

    const handleScroll = () => {
      const scrollPosition = window.scrollY
      const heroHeight = window.innerHeight * 0.8 // Pause after 80% of viewport height
      setIsPaused(scrollPosition > heroHeight)
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll() // Check initial position

    // Grid lines
    const gridLines: Array<{ x: number; y: number; z: number; color: string }> = []
    const particleCount = 150

    // Initialize particles
    for (let i = 0; i < particleCount; i++) {
      gridLines.push({
        x: Math.random() * canvas.width - canvas.width / 2,
        y: Math.random() * canvas.height - canvas.height / 2,
        z: Math.random() * 2000,
        color: Math.random() > 0.5 ? "#00d4ff" : "#b24bf3",
      })
    }

    let animationId: number
    const animate = () => {
      ctx.fillStyle = "rgba(8, 8, 12, 0.1)"
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Draw and update particles
      gridLines.forEach((particle) => {
        if (!isPaused) {
          // Move particle towards camera
          particle.z -= 5

          // Reset particle when it goes past camera
          if (particle.z <= 0) {
            particle.z = 2000
            particle.x = Math.random() * canvas.width - canvas.width / 2
            particle.y = Math.random() * canvas.height - canvas.height / 2
          }
        }

        // Calculate 3D projection
        const scale = 1000 / particle.z
        const x2d = particle.x * scale + canvas.width / 2
        const y2d = particle.y * scale + canvas.height / 2
        const size = scale * 2

        // Only draw if in viewport
        if (x2d >= 0 && x2d <= canvas.width && y2d >= 0 && y2d <= canvas.height) {
          ctx.beginPath()
          ctx.fillStyle = particle.color
          ctx.shadowBlur = 10
          ctx.shadowColor = particle.color
          ctx.arc(x2d, y2d, size, 0, Math.PI * 2)
          ctx.fill()
          ctx.shadowBlur = 0
        }
      })

      animationId = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", setCanvasSize)
      window.removeEventListener("scroll", handleScroll)
      cancelAnimationFrame(animationId)
    }
  }, [isPaused]) // Add isPaused to dependency array

  return <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none z-0" />
}
