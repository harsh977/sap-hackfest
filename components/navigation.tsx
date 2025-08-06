"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/mode-toggle"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 w-full border-b backdrop-blur supports-[backdrop-filter]:bg-background/60 transition-all duration-200 ${
        isScrolled ? "border-border" : "border-transparent"
      }`}
    >
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-full bg-gradient-to-br from-blue-500 to-purple-600"></div>
          <span className="font-bold tracking-tight">Ethical AI Auditor</span>
        </div>
        <nav className="hidden md:flex items-center gap-6">
          <Link href="#problem" className="text-sm font-medium hover:text-primary">
            Problem & Vision
          </Link>
          <Link href="#innovation" className="text-sm font-medium hover:text-primary">
            Innovation
          </Link>
          <Link href="#tech" className="text-sm font-medium hover:text-primary">
            Tech Stack
          </Link>
          <Link href="#bias-pipelines" className="text-sm font-medium hover:text-primary">
            Bias Auditing
          </Link>
          <Link href="#architecture" className="text-sm font-medium hover:text-primary">
            Architecture
          </Link>
          <Link href="#demo" className="text-sm font-medium hover:text-primary">
            Demo
          </Link>
          <Link href="#team" className="text-sm font-medium hover:text-primary">
            Team
          </Link>
          <Link href="#contact" className="text-sm font-medium hover:text-primary">
            Contact
          </Link>
          <Link href="/simulate" className="text-sm font-medium hover:text-primary">
            Simulate
          </Link>
        </nav>
        <div className="flex items-center gap-2">
          <ModeToggle />
          <Button variant="default" size="sm" className="hidden md:flex">
            <Link href="#demo">Explore Dashboard</Link>
          </Button>
          <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsOpen(true)}>
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle menu</span>
          </Button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm md:hidden">
          <div className="fixed inset-y-0 right-0 w-full max-w-xs bg-background p-6 shadow-lg">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="h-8 w-8 rounded-full bg-gradient-to-br from-blue-500 to-purple-600"></div>
                <span className="font-bold tracking-tight">Ethical AI Auditor</span>
              </div>
              <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)}>
                <X className="h-5 w-5" />
                <span className="sr-only">Close menu</span>
              </Button>
            </div>
            <nav className="mt-8 flex flex-col gap-4">
              <Link
                href="#problem"
                className="flex items-center py-2 text-base font-medium hover:text-primary"
                onClick={() => setIsOpen(false)}
              >
                Problem & Vision
              </Link>
              <Link
                href="#innovation"
                className="flex items-center py-2 text-base font-medium hover:text-primary"
                onClick={() => setIsOpen(false)}
              >
                Innovation
              </Link>
              <Link
                href="#tech"
                className="flex items-center py-2 text-base font-medium hover:text-primary"
                onClick={() => setIsOpen(false)}
              >
                Tech Stack
              </Link>
              <Link
                href="#bias-pipelines"
                className="flex items-center py-2 text-base font-medium hover:text-primary"
                onClick={() => setIsOpen(false)}
              >
                Bias Auditing
              </Link>
              <Link
                href="#architecture"
                className="flex items-center py-2 text-base font-medium hover:text-primary"
                onClick={() => setIsOpen(false)}
              >
                Architecture
              </Link>
              <Link
                href="#demo"
                className="flex items-center py-2 text-base font-medium hover:text-primary"
                onClick={() => setIsOpen(false)}
              >
                Demo
              </Link>
              <Link
                href="#team"
                className="flex items-center py-2 text-base font-medium hover:text-primary"
                onClick={() => setIsOpen(false)}
              >
                Team
              </Link>
              <Link
                href="#contact"
                className="flex items-center py-2 text-base font-medium hover:text-primary"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
              <Link
                href="/simulate"
                className="flex items-center py-2 text-base font-medium hover:text-primary"
                onClick={() => setIsOpen(false)}
              >
                Simulate
              </Link>
              <Button className="mt-4" onClick={() => setIsOpen(false)}>
                <Link href="#demo">Explore Dashboard</Link>
              </Button>
            </nav>
          </div>
        </div>
      )}
    </header>
  )
}
