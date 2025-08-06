"use client"

import { useEffect, useRef } from "react"
import { Card } from "@/components/ui/card"

export function ArchitectureDiagram() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set text color based on theme
    const isDarkMode = document.documentElement.classList.contains("dark")
    document.documentElement.style.setProperty("--chart-text-color", isDarkMode ? "#ffffff" : "#000000")

    // Add a theme change listener
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === "class") {
          const isDark = document.documentElement.classList.contains("dark")
          document.documentElement.style.setProperty("--chart-text-color", isDark ? "#ffffff" : "#000000")
          drawComponents()
        }
      })
    })
    observer.observe(document.documentElement, { attributes: true })

    // Set canvas dimensions
    canvas.width = canvas.clientWidth
    canvas.height = canvas.clientHeight

    // Define architecture components
    const components = [
      { id: "data", x: 100, y: 100, width: 150, height: 60, label: "Data Ingestion", color: "#3b82f6" },
      { id: "bias", x: 350, y: 100, width: 150, height: 60, label: "Bias Detection", color: "#8b5cf6" },
      { id: "retrain", x: 600, y: 100, width: 150, height: 60, label: "Fairness Retraining", color: "#6366f1" },
      { id: "explain", x: 350, y: 250, width: 150, height: 60, label: "Explainability", color: "#ec4899" },
      { id: "report", x: 600, y: 250, width: 150, height: 60, label: "Compliance Reports", color: "#14b8a6" },
    ]

    // Define connections between components
    const connections = [
      { from: "data", to: "bias", label: "Raw Data" },
      { from: "bias", to: "retrain", label: "Bias Metrics" },
      { from: "bias", to: "explain", label: "Model Analysis" },
      { from: "retrain", to: "report", label: "Fair Model" },
      { from: "explain", to: "report", label: "Explanations" },
    ]

    // Draw rounded rectangle
    function roundRect(
      ctx: CanvasRenderingContext2D,
      x: number,
      y: number,
      width: number,
      height: number,
      radius: number,
      fill: boolean,
      stroke: boolean,
    ) {
      ctx.beginPath()
      ctx.moveTo(x + radius, y)
      ctx.lineTo(x + width - radius, y)
      ctx.quadraticCurveTo(x + width, y, x + width, y + radius)
      ctx.lineTo(x + width, y + height - radius)
      ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height)
      ctx.lineTo(x + radius, y + height)
      ctx.quadraticCurveTo(x, y + height, x, y + height - radius)
      ctx.lineTo(x, y + radius)
      ctx.quadraticCurveTo(x, y, x + radius, y)
      ctx.closePath()
      if (fill) {
        ctx.fill()
      }
      if (stroke) {
        ctx.stroke()
      }
    }

    // Draw arrow
    function drawArrow(
      ctx: CanvasRenderingContext2D,
      fromX: number,
      fromY: number,
      toX: number,
      toY: number,
      label: string,
    ) {
      // Draw line
      ctx.beginPath()
      ctx.moveTo(fromX, fromY)
      ctx.lineTo(toX, toY)
      ctx.stroke()

      // Draw arrowhead
      const angle = Math.atan2(toY - fromY, toX - fromX)
      const size = 10
      ctx.beginPath()
      ctx.moveTo(toX, toY)
      ctx.lineTo(toX - size * Math.cos(angle - Math.PI / 6), toY - size * Math.sin(angle - Math.PI / 6))
      ctx.lineTo(toX - size * Math.cos(angle + Math.PI / 6), toY - size * Math.sin(angle + Math.PI / 6))
      ctx.closePath()
      ctx.fill()

      // Draw label
      ctx.save()
      ctx.textAlign = "center"
      ctx.textBaseline = "middle"
      ctx.fillStyle = "#64748b"
      ctx.font = "12px sans-serif"

      const midX = (fromX + toX) / 2
      const midY = (fromY + toY) / 2

      // Add slight offset to the label
      const offsetX = -10 * Math.sin(angle)
      const offsetY = 10 * Math.cos(angle)

      ctx.fillText(label, midX + offsetX, midY + offsetY)
      ctx.restore()
    }

    // Draw components
    function drawComponents() {
      if (!ctx) return

      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Draw connections
      ctx.strokeStyle = "#64748b"
      ctx.lineWidth = 2
      ctx.fillStyle = "#64748b"

      connections.forEach((connection) => {
        const from = components.find((c) => c.id === connection.from)
        const to = components.find((c) => c.id === connection.to)

        if (from && to) {
          // Calculate connection points
          let fromX, fromY, toX, toY

          // Horizontal connection
          if (from.y === to.y) {
            fromX = from.x + from.width
            fromY = from.y + from.height / 2
            toX = to.x
            toY = to.y + to.height / 2
          }
          // Vertical connection
          else if (from.x === to.x) {
            fromX = from.x + from.width / 2
            fromY = from.y + from.height
            toX = to.x + to.width / 2
            toY = to.y
          }
          // Diagonal connection
          else {
            fromX = from.x + from.width / 2
            fromY = from.y + from.height
            toX = to.x + to.width / 2
            toY = to.y
          }

          drawArrow(ctx, fromX, fromY, toX, toY, connection.label)
        }
      })

      // Draw components
      components.forEach((component) => {
        ctx.fillStyle = component.color + "20" // Add transparency
        ctx.strokeStyle = component.color
        ctx.lineWidth = 2

        roundRect(ctx, component.x, component.y, component.width, component.height, 10, true, true)

        // Draw label
        ctx.fillStyle = "var(--chart-text-color, #000000)"
        ctx.font = "bold 14px sans-serif"
        ctx.textAlign = "center"
        ctx.textBaseline = "middle"
        ctx.fillText(component.label, component.x + component.width / 2, component.y + component.height / 2)
      })
    }

    // Initial draw
    drawComponents()

    // Handle window resize
    const handleResize = () => {
      canvas.width = canvas.clientWidth
      canvas.height = canvas.clientHeight
      drawComponents()
    }

    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
      observer.disconnect()
    }
  }, [])

  return (
    <Card className="p-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-600/5"></div>
      <div className="relative">
        <h3 className="text-lg font-medium mb-4">End-to-End Ethical AI Pipeline</h3>
        <div className="w-full h-[400px] relative">
          <canvas ref={canvasRef} className="w-full h-full" />
        </div>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mt-6">
          <div className="flex flex-col items-center text-center">
            <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center mb-2">
              <div className="w-5 h-5 rounded-full bg-blue-500"></div>
            </div>
            <span className="text-sm">Data Ingestion</span>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="w-10 h-10 rounded-full bg-purple-500/20 flex items-center justify-center mb-2">
              <div className="w-5 h-5 rounded-full bg-purple-500"></div>
            </div>
            <span className="text-sm">Bias Detection</span>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="w-10 h-10 rounded-full bg-indigo-500/20 flex items-center justify-center mb-2">
              <div className="w-5 h-5 rounded-full bg-indigo-500"></div>
            </div>
            <span className="text-sm">Fairness Retraining</span>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="w-10 h-10 rounded-full bg-pink-500/20 flex items-center justify-center mb-2">
              <div className="w-5 h-5 rounded-full bg-pink-500"></div>
            </div>
            <span className="text-sm">Explainability</span>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="w-10 h-10 rounded-full bg-teal-500/20 flex items-center justify-center mb-2">
              <div className="w-5 h-5 rounded-full bg-teal-500"></div>
            </div>
            <span className="text-sm">Compliance Reports</span>
          </div>
        </div>
      </div>
    </Card>
  )
}
