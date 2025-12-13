"use client"

import type React from "react"

import { Calendar, Upload, ChevronDown } from "lucide-react"
import { useState } from "react"

export function ContactFormSection() {
  const [selectedFile, setSelectedFile] = useState<string | null>(null)

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedFile(e.target.files[0].name)
    }
  }

  return (
    <section id="contact" className="relative py-32 px-4 overflow-hidden">
      <div className="container mx-auto max-w-4xl relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block px-6 py-2 rounded-full border border-cyan-500/30 bg-cyan-500/5 text-cyan-400 text-sm font-medium mb-6">
            GET IN TOUCH
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="text-white">Start Your </span>
            <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 text-transparent bg-clip-text">
              Project Today
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Tell us about your vision and we'll help bring it to life with cutting-edge AI and computer vision
            technology.
          </p>
        </div>

        <form className="space-y-8">
          {/* Name and Email Row */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="group">
              <label className="block text-white font-medium mb-3 text-sm">Full Name</label>
              <input
                type="text"
                placeholder="John Doe"
                className="w-full px-6 py-4 bg-white/5 border border-cyan-500/20 rounded-2xl text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all duration-300"
              />
            </div>
            <div className="group">
              <label className="block text-white font-medium mb-3 text-sm">Email Address</label>
              <input
                type="email"
                placeholder="john@company.com"
                className="w-full px-6 py-4 bg-white/5 border border-cyan-500/20 rounded-2xl text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all duration-300"
              />
            </div>
          </div>

          {/* Project Type and Date Row */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="group">
              <label className="block text-white font-medium mb-3 text-sm">Project Type</label>
              <div className="relative">
                <select className="w-full px-6 py-4 bg-white/5 border border-cyan-500/20 rounded-2xl text-white appearance-none focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all duration-300 cursor-pointer">
                  <option value="">Select a service</option>
                  <option value="desktop">Desktop Application</option>
                  <option value="web">Web Application</option>
                  <option value="ai">AI Integration</option>
                  <option value="cv">Computer Vision</option>
                  <option value="automation">Process Automation</option>
                  <option value="legacy">Legacy Modernization</option>
                </select>
                <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-cyan-400 pointer-events-none" />
              </div>
            </div>
            <div className="group">
              <label className="block text-white font-medium mb-3 text-sm">Desired Start Date</label>
              <div className="relative">
                <input
                  type="date"
                  className="w-full px-6 py-4 bg-white/5 border border-cyan-500/20 rounded-2xl text-white focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all duration-300 [&::-webkit-calendar-picker-indicator]:filter [&::-webkit-calendar-picker-indicator]:invert [&::-webkit-calendar-picker-indicator]:cursor-pointer"
                />
                <Calendar className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-cyan-400 pointer-events-none" />
              </div>
            </div>
          </div>

          {/* File Upload */}
          <div className="group">
            <label className="block text-white font-medium mb-3 text-sm">Project Documents (Optional)</label>
            <div className="relative">
              <input
                type="file"
                id="file-upload"
                className="hidden"
                onChange={handleFileChange}
                accept=".pdf,.doc,.docx,.png,.jpg,.jpeg"
              />
              <label
                htmlFor="file-upload"
                className="flex items-center justify-center gap-3 w-full px-6 py-4 bg-white/5 border border-cyan-500/20 rounded-2xl text-gray-400 cursor-pointer hover:border-cyan-500 hover:bg-white/10 transition-all duration-300 group"
              >
                <Upload className="w-5 h-5 text-cyan-400 group-hover:scale-110 transition-transform" />
                <span className="text-white">{selectedFile || "Click to upload files"}</span>
              </label>
            </div>
          </div>

          {/* Project Description */}
          <div className="group">
            <label className="block text-white font-medium mb-3 text-sm">Project Description</label>
            <textarea
              rows={6}
              placeholder="Tell us about your project requirements, goals, and any specific features you'd like to include..."
              className="w-full px-6 py-4 bg-white/5 border border-cyan-500/20 rounded-2xl text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all duration-300 resize-none
              scrollbar-thin scrollbar-track-transparent scrollbar-thumb-cyan-500/50 hover:scrollbar-thumb-cyan-500"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full md:w-auto px-12 py-4 bg-gradient-to-r from-cyan-500 to-cyan-600 text-white font-semibold rounded-2xl hover:from-cyan-400 hover:to-cyan-500 transform hover:scale-105 transition-all duration-300 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40"
          >
            Submit Project Request
          </button>
        </form>
      </div>
    </section>
  )
}
