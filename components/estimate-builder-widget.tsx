"use client"

import type React from "react"

import { useState } from "react"
import { Calculator, ChevronDown } from "lucide-react"

export function EstimateBuilderWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const [formData, setFormData] = useState({
    projectType: "",
    timeline: "",
    budget: "",
    features: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("[v0] Estimate form submitted:", formData)
    // Handle form submission
    alert("Thank you! We'll send you an estimate shortly.")
    setIsOpen(false)
  }

  return (
    <>
      {/* Floating Widget - Only render when open */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 z-50">
          <div className="transition-all duration-500 ease-in-out translate-y-0 opacity-100">
            <div className="bg-gradient-to-br from-slate-900 to-slate-950 border border-cyan-500/30 rounded-3xl shadow-2xl shadow-cyan-500/10 w-[380px] overflow-hidden">
              {/* Header */}
              <div className="bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border-b border-cyan-500/20 p-6 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500 to-cyan-600 flex items-center justify-center shadow-lg shadow-cyan-500/30">
                    <Calculator className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold text-lg">Estimate Builder</h3>
                    <p className="text-cyan-400 text-xs">Get a quick quote</p>
                  </div>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-gray-400 hover:text-white transition-colors p-1 hover:bg-white/10 rounded-lg"
                >
                  <ChevronDown className="w-5 h-5" />
                </button>
              </div>

              {/* Form Content */}
              <form onSubmit={handleSubmit} className="p-6 space-y-4">
                <div>
                  <label className="block text-white text-sm font-medium mb-2">Project Type</label>
                  <select
                    value={formData.projectType}
                    onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                    className="w-full px-4 py-3 bg-white/5 border border-cyan-500/20 rounded-xl text-white text-sm focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all"
                    required
                  >
                    <option value="">Select type</option>
                    <option value="desktop">Desktop App</option>
                    <option value="web">Web App</option>
                    <option value="ai">AI Integration</option>
                    <option value="cv">Computer Vision</option>
                  </select>
                </div>

                <div>
                  <label className="block text-white text-sm font-medium mb-2">Timeline</label>
                  <select
                    value={formData.timeline}
                    onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                    className="w-full px-4 py-3 bg-white/5 border border-cyan-500/20 rounded-xl text-white text-sm focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all"
                    required
                  >
                    <option value="">Select timeline</option>
                    <option value="1-2">1-2 months</option>
                    <option value="3-4">3-4 months</option>
                    <option value="5-6">5-6 months</option>
                    <option value="6+">6+ months</option>
                  </select>
                </div>

                <div>
                  <label className="block text-white text-sm font-medium mb-2">Budget Range</label>
                  <select
                    value={formData.budget}
                    onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                    className="w-full px-4 py-3 bg-white/5 border border-cyan-500/20 rounded-xl text-white text-sm focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all"
                    required
                  >
                    <option value="">Select budget</option>
                    <option value="10k-25k">$10k - $25k</option>
                    <option value="25k-50k">$25k - $50k</option>
                    <option value="50k-100k">$50k - $100k</option>
                    <option value="100k+">$100k+</option>
                  </select>
                </div>

                <div>
                  <label className="block text-white text-sm font-medium mb-2">Key Features</label>
                  <textarea
                    value={formData.features}
                    onChange={(e) => setFormData({ ...formData, features: e.target.value })}
                    rows={3}
                    placeholder="Brief description..."
                    className="w-full px-4 py-3 bg-white/5 border border-cyan-500/20 rounded-xl text-white text-sm placeholder-gray-500 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all resize-none scrollbar-thin scrollbar-track-transparent scrollbar-thumb-cyan-500/50"
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-gradient-to-r from-cyan-500 to-cyan-600 text-white font-semibold rounded-xl hover:from-cyan-400 hover:to-cyan-500 transform hover:scale-[1.02] transition-all duration-300 shadow-lg shadow-cyan-500/25"
                >
                  Get Estimate
                </button>
              </form>

              {/* Footer */}
              <div className="px-6 py-3 bg-gradient-to-r from-cyan-500/5 to-purple-500/5 border-t border-cyan-500/10 text-center">
                <p className="text-xs text-gray-400">We'll respond within 24 hours</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Toggle Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`transition-all duration-300 mt-4 ml-auto flex items-center gap-3 px-6 py-4 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 text-white font-semibold rounded-2xl hover:from-cyan-300 hover:via-purple-400 hover:to-pink-400 transform hover:scale-105 shadow-2xl shadow-cyan-500/30 hover:shadow-cyan-500/50`}
        >
          <Calculator className="w-5 h-5" />
          <span>Estimate Builder</span>
        </button>
      </div>
    </>
  )
}
