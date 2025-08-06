"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowDown } from "lucide-react"

export function SimulationHero() {
  const [isAnimating, setIsAnimating] = useState(false)

  const handleScroll = () => {
    const uploadSection = document.getElementById("upload")
    if (uploadSection) {
      uploadSection.scrollIntoView({ behavior: "smooth" })
    }

    // Trigger animation effect
    setIsAnimating(true)
    setTimeout(() => setIsAnimating(false), 1000)
  }

  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-600/10"></div>

      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tighter mb-6">See the Ethical AI Auditor in Action</h1>
          <p className="text-xl text-muted-foreground mb-10">
            Upload a sample prediction dataset and watch our pipelines work.
          </p>
          <Button
            size="lg"
            className={`rounded-full text-lg px-8 py-6 transition-transform ${isAnimating ? "scale-105" : ""}`}
            onClick={handleScroll}
          >
            Upload Sample Data
            <ArrowDown className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  )
}
