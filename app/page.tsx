import type React from "react"
import Link from "next/link"
import { ArrowRight, Github, Linkedin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArchitectureDiagram } from "@/components/architecture-diagram"
import { TeamMember } from "@/components/team-member"
import { TechStack } from "@/components/tech-stack"
import { Timeline } from "@/components/timeline"
import { DemoDashboard } from "@/components/demo-dashboard"
import { HeroBackground } from "@/components/hero-background"
import { ContactForm } from "@/components/contact-form"
// Add the import for BiasAuditingPipelines at the top with other imports
import { BiasAuditingPipelines } from "@/components/bias-auditing-pipelines"
// First, add the import at the top
import { Navigation } from "@/components/navigation"
import { InnovationCard } from "@/components/innovation-card"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Navigation */}
      <Navigation />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-24 md:py-32">
          <HeroBackground />
          <div className="container relative z-10 flex flex-col items-center text-center">
            <div className="inline-block rounded-full bg-muted px-3 py-1 text-sm mb-6">SAP Hackfest 2025</div>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tighter mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-600">
              Ethical AI Auditor for Business Applications
            </h1>
            <p className="max-w-[700px] text-muted-foreground md:text-xl mb-8">
              Ensuring fairness, transparency, and compliance in enterprise AI.
            </p>
            <Button size="lg" className="rounded-full">
              Explore the Dashboard <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </section>

        {/* Problem & Vision */}
        <section id="problem" className="py-20 bg-muted/50">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold tracking-tighter mb-6">Problem & Vision</h2>
                <div className="space-y-4">
                  <p className="text-muted-foreground">
                    Unchecked AI in hiring, lending, and customer service leads to discrimination, opacity, and legal
                    risks. Organizations face increasing scrutiny over algorithmic decision-making, yet lack the tools
                    to ensure fairness.
                  </p>
                  <p className="text-muted-foreground">
                    Without proper auditing, AI systems can perpetuate historical biases, create unexplainable
                    decisions, and expose businesses to regulatory penalties.
                  </p>
                  <div className="mt-6 p-4 border rounded-lg bg-background">
                    <p className="font-medium text-lg">
                      "We automate AI ethics — from bias detection to explainability and audit reporting — using SAP
                      technologies and novel fairness techniques."
                    </p>
                  </div>
                </div>
              </div>
              <div className="relative h-[400px] rounded-xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-600/20 rounded-xl"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="grid grid-cols-2 gap-4 p-6 w-full max-w-md">
                    <Card className="bg-background/80 backdrop-blur-sm">
                      <CardHeader className="p-4">
                        <CardTitle className="text-lg">Discrimination</CardTitle>
                      </CardHeader>
                      <CardContent className="p-4 pt-0">
                        <p className="text-sm">AI systems can perpetuate historical biases</p>
                      </CardContent>
                    </Card>
                    <Card className="bg-background/80 backdrop-blur-sm">
                      <CardHeader className="p-4">
                        <CardTitle className="text-lg">Opacity</CardTitle>
                      </CardHeader>
                      <CardContent className="p-4 pt-0">
                        <p className="text-sm">Black-box decisions without explanations</p>
                      </CardContent>
                    </Card>
                    <Card className="bg-background/80 backdrop-blur-sm">
                      <CardHeader className="p-4">
                        <CardTitle className="text-lg">Legal Risk</CardTitle>
                      </CardHeader>
                      <CardContent className="p-4 pt-0">
                        <p className="text-sm">Non-compliance with regulations</p>
                      </CardContent>
                    </Card>
                    <Card className="bg-background/80 backdrop-blur-sm">
                      <CardHeader className="p-4">
                        <CardTitle className="text-lg">Trust</CardTitle>
                      </CardHeader>
                      <CardContent className="p-4 pt-0">
                        <p className="text-sm">Eroding stakeholder confidence</p>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Innovation Section */}
        <section id="innovation" className="py-20">
          <div className="container">
            <h2 className="text-3xl font-bold tracking-tighter mb-2">What Makes Us Unique</h2>
            <p className="text-muted-foreground mb-12 max-w-[800px]">
              Our innovative approach combines cutting-edge fairness techniques with SAP's enterprise technology
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <InnovationCard
                title="Bias-to-Action Pipeline"
                description="Go beyond detecting bias — we retrain models using FairML techniques and synthetic data augmentation."
                metric="Bias reduction from 15% → 4.5%"
                icon="filter"
              />
              <InnovationCard
                title="Conversational Explainable AI"
                description="Joule is integrated not just as a chatbot, but as an ethical decision explainer that responds to questions like 'Why was this candidate rejected?'"
                metric="Explanation satisfaction up 78%"
                icon="message-square"
              />
              <InnovationCard
                title="Compliance-as-a-Service"
                description="Automate GDPR/EEOC checks with a full audit trail, minimizing legal risk and compliance costs."
                metric="Audit time cut from 14h → 2h"
                icon="shield"
              />
              <InnovationCard
                title="Quantified Impact"
                description="Measure and track fairness improvements over time with comprehensive metrics and visualizations."
                metric="ROI of 3.2x on compliance costs"
                icon="bar-chart"
              />
            </div>
          </div>
        </section>

        {/* SAP Tech Stack */}
        <section id="tech" className="py-20 bg-muted/50">
          <div className="container">
            <h2 className="text-3xl font-bold tracking-tighter mb-2">SAP Tech Stack</h2>
            <p className="text-muted-foreground mb-12 max-w-[800px]">
              Leveraging SAP's powerful enterprise technologies to deliver ethical AI at scale
            </p>

            <TechStack />
          </div>
        </section>

        {/* Bias Auditing Pipelines - NEW SECTION */}
        <BiasAuditingPipelines />

        {/* Architecture Diagram */}
        <section id="architecture" className="py-20">
          <div className="container">
            <Tabs defaultValue="architecture" className="w-full">
              <div className="flex justify-between items-center mb-8">
                <div>
                  <h2 className="text-3xl font-bold tracking-tighter mb-2">System Architecture</h2>
                  <p className="text-muted-foreground max-w-[800px]">
                    End-to-end ethical AI auditing and remediation pipeline
                  </p>
                </div>
                <TabsListWrapper>
                  <TabsListInner>
                    <TabsTrigger value="architecture">Architecture</TabsTrigger>
                    <TabsTrigger value="timeline">Timeline</TabsTrigger>
                  </TabsListInner>
                </TabsListWrapper>
              </div>

              <TabsContent value="architecture" className="mt-0">
                <ArchitectureDiagram />
              </TabsContent>

              <TabsContent value="timeline" className="mt-0">
                <Timeline />
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Demo Preview */}
        <section id="demo" className="py-20 bg-muted/50">
          <div className="container">
            <h2 className="text-3xl font-bold tracking-tighter mb-2">Live Demo Preview</h2>
            <p className="text-muted-foreground mb-12 max-w-[800px]">
              Experience our ethical AI auditing dashboard and explainability features
            </p>

            <DemoDashboard />
          </div>
        </section>

        {/* How We Proceed */}
        <section id="approach" className="py-20">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold tracking-tighter mb-6">How We Proceed</h2>
                <div className="space-y-4">
                  <p className="text-muted-foreground">
                    Our 7-day hackathon sprint follows a structured approach to deliver a complete ethical AI auditing
                    solution.
                  </p>

                  <div className="space-y-4 mt-6">
                    <div className="flex gap-4 items-start">
                      <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold shrink-0">
                        1
                      </div>
                      <div>
                        <h3 className="font-medium">Day 1-2: Data Ingestion + Fairness Profiling</h3>
                        <p className="text-sm text-muted-foreground">
                          Set up data pipelines and initial bias detection algorithms
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-4 items-start">
                      <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold shrink-0">
                        2
                      </div>
                      <div>
                        <h3 className="font-medium">Day 3-5: Train/Retrain with Bias Mitigation</h3>
                        <p className="text-sm text-muted-foreground">
                          Implement FairML techniques and synthetic data augmentation
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-4 items-start">
                      <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold shrink-0">
                        3
                      </div>
                      <div>
                        <h3 className="font-medium">Day 6: Joule Integration + UX Build</h3>
                        <p className="text-sm text-muted-foreground">
                          Connect explainable AI interface and finalize dashboard
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-4 items-start">
                      <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold shrink-0">
                        4
                      </div>
                      <div>
                        <h3 className="font-medium">Day 7: Final Testing, Metrics, and Submission</h3>
                        <p className="text-sm text-muted-foreground">
                          Validate results, document impact, and prepare presentation
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6">
                    <p className="text-sm text-muted-foreground">
                      We use collaborative GitHub workflows, SAP BTP environments, and agile sprints to ensure efficient
                      delivery.
                    </p>
                  </div>
                </div>
              </div>

              <div className="relative h-[400px] rounded-xl overflow-hidden bg-gradient-to-br from-blue-500/10 to-purple-600/10 flex items-center justify-center">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-full max-w-md p-6">
                    <Card className="bg-background/80 backdrop-blur-sm border-0 shadow-lg">
                      <CardHeader className="pb-2">
                        <CardTitle>Project Approach</CardTitle>
                        <CardDescription>SAP Hackfest 2025 Sprint</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-2">
                          <div className="flex justify-between">
                            <span className="text-sm">Data Preparation</span>
                            <span className="text-sm font-medium">100%</span>
                          </div>
                          <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
                            <div className="h-full bg-blue-500 w-full rounded-full"></div>
                          </div>

                          <div className="flex justify-between">
                            <span className="text-sm">Bias Mitigation</span>
                            <span className="text-sm font-medium">85%</span>
                          </div>
                          <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
                            <div className="h-full bg-blue-500 w-[85%] rounded-full"></div>
                          </div>

                          <div className="flex justify-between">
                            <span className="text-sm">Explainability</span>
                            <span className="text-sm font-medium">70%</span>
                          </div>
                          <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
                            <div className="h-full bg-blue-500 w-[70%] rounded-full"></div>
                          </div>

                          <div className="flex justify-between">
                            <span className="text-sm">Reporting</span>
                            <span className="text-sm font-medium">50%</span>
                          </div>
                          <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
                            <div className="h-full bg-blue-500 w-[50%] rounded-full"></div>
                          </div>
                        </div>
                      </CardContent>
                      <CardFooter>
                        <p className="text-xs text-muted-foreground">Updated 2 hours ago</p>
                      </CardFooter>
                    </Card>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section id="team" className="py-20 bg-muted/50">
          <div className="container">
            <h2 className="text-3xl font-bold tracking-tighter mb-2">Meet the Team</h2>
            <p className="text-muted-foreground mb-12 max-w-[800px]">
              Our diverse team brings together expertise in AI ethics, SAP development, and UX design
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
              <TeamMember
                name="Alex Chen"
                role="ML Lead"
                goal="Implement fairness-aware algorithms"
                image="/placeholder.svg?height=300&width=300"
              />
              <TeamMember
                name="Priya Sharma"
                role="SAP Developer"
                goal="Integrate with SAP AI Core"
                image="/placeholder.svg?height=300&width=300"
              />
              <TeamMember
                name="Marcus Johnson"
                role="UX Designer"
                goal="Create intuitive ethical AI interfaces"
                image="/placeholder.svg?height=300&width=300"
              />
              <TeamMember
                name="Sofia Rodriguez"
                role="Ethics Specialist"
                goal="Ensure compliance with regulations"
                image="/placeholder.svg?height=300&width=300"
              />
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold tracking-tighter mb-6">Get Involved</h2>
                <div className="space-y-4">
                  <p className="text-muted-foreground">
                    Interested in ethical AI auditing for your business applications? Get in touch with our team to
                    learn more about our solution.
                  </p>

                  <div className="flex flex-col gap-4 mt-6">
                    <Button variant="outline" className="justify-start">
                      <Github className="mr-2 h-4 w-4" />
                      <span>View on GitHub</span>
                    </Button>
                    <Button variant="outline" className="justify-start">
                      <Linkedin className="mr-2 h-4 w-4" />
                      <span>Connect on LinkedIn</span>
                    </Button>
                    <Button variant="outline" className="justify-start">
                      <ArrowRight className="mr-2 h-4 w-4" />
                      <span>SAP Hackfest Project Page</span>
                    </Button>
                  </div>
                </div>
              </div>

              <ContactForm />
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
  )
}

function TabsListWrapper({ children }: { children: React.ReactNode }) {
  return <div className="rounded-lg border bg-card p-1">{children}</div>
}

function TabsListInner({ children }: { children: React.ReactNode }) {
  return <TabsList className="grid w-full grid-cols-2">{children}</TabsList>
}
