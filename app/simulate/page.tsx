import Link from "next/link"
import { ArrowLeft } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Navigation } from "@/components/navigation"
import { SimulationHero } from "@/components/simulation-hero"
import { UploadSimulation } from "@/components/upload-simulation"
import { JouleInteraction } from "@/components/joule-interaction"
import { DatasetProvider } from "@/components/dataset-context"

export default function SimulatePage() {
  return (
    <DatasetProvider>
      <div className="flex min-h-screen flex-col">
        <Navigation />

        <main className="flex-1">
          {/* Hero Section */}
          <SimulationHero />

          {/* Upload & Loading Simulation Section */}
          <section className="py-16 bg-muted/50">
            <div className="container">
              <UploadSimulation />
            </div>
          </section>

          {/* Joule Interaction Section */}
          <section className="py-16">
            <div className="container">
              <JouleInteraction />
            </div>
          </section>

          {/* Call to Action */}
          <section className="py-16 bg-muted/50">
            <div className="container flex flex-col items-center text-center">
              <h2 className="text-3xl font-bold tracking-tighter mb-4">Want to audit your real models?</h2>
              <p className="text-muted-foreground mb-8 max-w-[600px]">
                Take the next step and integrate our ethical AI auditor with your production models for continuous
                fairness monitoring.
              </p>
              <div className="flex gap-4">
                <Button asChild size="lg">
                  <Link href="/#demo">Return to Main Dashboard</Link>
                </Button>
                <Button variant="outline" asChild size="lg">
                  <Link href="#upload">
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Back to Upload
                  </Link>
                </Button>
              </div>
            </div>
          </section>
        </main>

        <footer className="border-t py-6 md:py-0">
          <div className="container flex flex-col md:flex-row items-center justify-between gap-4 md:h-16">
            <p className="text-sm text-muted-foreground">
              Ayush Bharadwaj, Harsh Daftari, Nikhil Singh, Yash Singh – SAP Hackfest 2025
            </p>
            <div className="flex items-center gap-4">
              <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                Privacy Policy
              </Link>
              <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                Terms of Service
              </Link>
            </div>
          </div>
        </footer>
      </div>
    </DatasetProvider>
  )
}
