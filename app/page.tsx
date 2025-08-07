import type React from "react"
import Link from "next/link"
import { ArrowRight, Github, Linkedin } from 'lucide-react'
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

        {/* The Problem We Are Solving */}
        <section id="problem" className="py-20 bg-muted/50">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tighter mb-4">The Problem We Are Solving</h2>
              <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
                AI powers critical decisions in finance, hiring, and healthcare — yet these models often replicate biases, 
                lack transparency, and carry compliance risks.
              </p>
            </div>

            {/* Core Problem */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
              <div>
                <h3 className="text-2xl font-bold mb-6">Core Problem</h3>
                <p className="text-lg text-muted-foreground mb-6">
                  Manual bias audits are slow, inconsistent, and cannot keep up with the scale of modern AI deployments, 
                  leaving organizations exposed to significant risks.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <span className="font-medium">Regulatory penalties</span>
                    <span className="text-xs bg-red-100 text-red-800 px-2 py-1 rounded-full">HIGH</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <span className="font-medium">Legal challenges</span>
                    <span className="text-xs bg-red-100 text-red-800 px-2 py-1 rounded-full">HIGH</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full bg-red-600"></div>
                    <span className="font-medium">Reputational damage</span>
                    <span className="text-xs bg-red-200 text-red-900 px-2 py-1 rounded-full">CRITICAL</span>
                  </div>
                </div>

                <div className="mt-8 p-4 bg-amber-50 border border-amber-200 rounded-lg">
                  <h4 className="font-bold text-amber-800 mb-2">Urgency</h4>
                  <p className="text-sm text-amber-700">
                    With GDPR, the EU AI Act, and EEOC frameworks tightening, scalable, transparent, and fair AI governance 
                    is no longer optional — it is a business survival need.
                  </p>
                </div>
              </div>

              <div className="relative">
                <div className="grid grid-cols-2 gap-4">
                  <Card className="bg-red-50 border-red-200">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg text-red-800">Delayed Launches</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-red-700">Manual audits taking 2-3 weeks delay AI deployment</p>
                    </CardContent>
                  </Card>
                  <Card className="bg-amber-50 border-amber-200">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg text-amber-800">High Costs</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-amber-700">Manual processes cost 80% more than automated solutions</p>
                    </CardContent>
                  </Card>
                  <Card className="bg-purple-50 border-purple-200 col-span-2">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg text-purple-800">Loss of Public Trust</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-purple-700">Biased AI decisions damage brand reputation permanently</p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>

            {/* Scope & Scale */}
            <div className="mb-20">
              <h3 className="text-2xl font-bold mb-8 text-center">Scope & Scale</h3>
              <p className="text-center text-muted-foreground mb-8">Industries most affected by AI bias and compliance challenges</p>
              
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                {[
                  { name: "Finance & Banking", icon: "🏦" },
                  { name: "Healthcare", icon: "🏥" },
                  { name: "Human Resources", icon: "👥" },
                  { name: "Insurance", icon: "🛡️" },
                  { name: "Public Sector", icon: "🏛️" },
                  { name: "Retail & E-commerce", icon: "🛒" }
                ].map((industry, index) => (
                  <Card key={index} className="text-center p-4 hover:shadow-md transition-shadow">
                    <div className="text-3xl mb-2">{industry.icon}</div>
                    <p className="text-sm font-medium">{industry.name}</p>
                  </Card>
                ))}
              </div>
            </div>

            {/* Research & Evidence */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
              <Card className="text-center p-6 bg-gradient-to-br from-red-50 to-red-100 border-red-200">
                <div className="text-3xl font-bold text-red-600 mb-2">80%</div>
                <p className="text-sm text-red-700">of AI projects fail because of bias and fairness flaws</p>
              </Card>
              <Card className="text-center p-6 bg-gradient-to-br from-amber-50 to-amber-100 border-amber-200">
                <div className="text-3xl font-bold text-amber-600 mb-2">2-3</div>
                <p className="text-sm text-amber-700">weeks average time for manual audits per model</p>
              </Card>
              <Card className="text-center p-6 bg-gradient-to-br from-purple-50 to-purple-100 border-purple-200">
                <div className="text-3xl font-bold text-purple-600 mb-2">$10M+</div>
                <p className="text-sm text-purple-700">regulatory fines for biased models exceed per case</p>
              </Card>
              <Card className="text-center p-6 bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200">
                <div className="text-3xl font-bold text-blue-600 mb-2">67%</div>
                <p className="text-sm text-blue-700">of enterprises lack any robust AI governance framework</p>
              </Card>
            </div>
          </div>
        </section>

        {/* Meet Our Users */}
        <section id="users" className="py-20">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tighter mb-4">Meet Our Users</h2>
              <p className="text-muted-foreground max-w-3xl mx-auto">
                Through extensive research and interviews, we identified key personas who face critical challenges 
                with AI ethics and compliance in their daily work.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Primary Persona - Sarah Chen */}
              <Card className="overflow-hidden border-0 shadow-lg">
                <div className="h-2 bg-gradient-to-r from-blue-500 to-purple-600"></div>
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold text-xl">
                      SC
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-xl">Sarah Chen</CardTitle>
                      <CardDescription className="text-base">CTO, Mid-size Financial Services Company</CardDescription>
                      <div className="flex items-center gap-4 mt-2 text-sm text-muted-foreground">
                        <span>📍 San Francisco, CA</span>
                        <span>🎓 MS Computer Science, MBA</span>
                      </div>
                      <div className="mt-2">
                        <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full">Primary Persona</span>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Background & Experience</h4>
                    <p className="text-sm text-muted-foreground">
                      15+ years in technology leadership, spearheading digital transformation with a focus on ethical, 
                      explainable AI systems. Uses SAP S/4HANA for core ERP and integrates AI-based fraud detection.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-2">Daily Challenges</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Struggles to explain AI logic to board and regulators</li>
                      <li>• Reviewing incomplete and outdated ethics reports</li>
                      <li>• Audits take 2-3 weeks, delaying innovation</li>
                      <li>• Constantly worried about GDPR, EEOC compliance</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2">Goals & Aspirations</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Streamline AI audits to save time</li>
                      <li>• Build stakeholder trust</li>
                      <li>• Maintain brand reputation</li>
                      <li>• Deploy AI with confidence in fairness and compliance</li>
                    </ul>
                  </div>

                  <div className="p-3 bg-blue-50 border border-blue-200 rounded-lg">
                    <p className="text-sm text-blue-800 italic">
                      "Our compliance team is drowning in manual audits."
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Secondary Persona - Marcus Rodriguez */}
              <Card className="overflow-hidden border-0 shadow-lg">
                <div className="h-2 bg-gradient-to-r from-green-500 to-teal-600"></div>
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-green-500 to-teal-600 flex items-center justify-center text-white font-bold text-xl">
                      MR
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-xl">Marcus Rodriguez</CardTitle>
                      <CardDescription className="text-base">AI Ethics Compliance Manager, Large Healthcare Corporation</CardDescription>
                      <div className="flex items-center gap-4 mt-2 text-sm text-muted-foreground">
                        <span>📍 Boston, MA</span>
                        <span>🎓 PhD AI Ethics, JD Technology Law</span>
                      </div>
                      <div className="mt-2">
                        <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">Secondary Persona</span>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Healthcare Focus</h4>
                    <p className="text-sm text-muted-foreground">
                      8 years in governance and compliance. Uses SAP BTP for AI-driven patient services, oversees clinical 
                      workflows with AI-assisted diagnosis tools. Ensures HIPAA, FDA compliance.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-2">Pain Points</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Lack of real-time bias tracking</li>
                      <li>• Difficult to integrate bias monitoring into clinical workflows</li>
                      <li>• Cumbersome manual compliance reports</li>
                      <li>• Fear of legal and ethical exposure</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2">Aspirations</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Reliable automated compliance</li>
                      <li>• Ethical transparency for patients</li>
                      <li>• Protect brand reputation in health sector</li>
                      <li>• Industry recognition for responsible practices</li>
                    </ul>
                  </div>

                  <div className="p-3 bg-green-50 border border-green-200 rounded-lg">
                    <p className="text-sm text-green-800 italic">
                      "There is no way to scale our ethics review to 100+ AI systems."
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* User Needs Analysis */}
        <section id="needs" className="py-20 bg-muted/50">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tighter mb-4">User Needs Analysis</h2>
              <p className="text-muted-foreground max-w-3xl mx-auto">
                Our solution is laser-focused on addressing these layered needs across functional, social, and emotional dimensions.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Functional Needs */}
              <Card className="border-0 shadow-lg">
                <div className="h-2 bg-blue-500"></div>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-blue-500/10 flex items-center justify-center">
                      <span className="text-blue-500 font-bold">F</span>
                    </div>
                    Functional Needs
                  </CardTitle>
                  <CardDescription>What they must do</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 shrink-0"></div>
                      <span>Automated detection of AI bias</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 shrink-0"></div>
                      <span>Real-time fairness monitoring</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 shrink-0"></div>
                      <span>Compliant reporting for GDPR, EEOC, HIPAA</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 shrink-0"></div>
                      <span>Explainable, human-readable insights</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 shrink-0"></div>
                      <span>SAP-friendly integration without disrupting workflows</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* Social Needs */}
              <Card className="border-0 shadow-lg">
                <div className="h-2 bg-purple-500"></div>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-purple-500/10 flex items-center justify-center">
                      <span className="text-purple-500 font-bold">S</span>
                    </div>
                    Social Needs
                  </CardTitle>
                  <CardDescription>Recognition & Validation</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-2 shrink-0"></div>
                      <span>Industry recognition for responsible practices</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-2 shrink-0"></div>
                      <span>Approval from regulators and auditors</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-2 shrink-0"></div>
                      <span>Reinforce stakeholder and board confidence</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-2 shrink-0"></div>
                      <span>Strengthen brand image as a responsible innovator</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* Emotional Needs */}
              <Card className="border-0 shadow-lg">
                <div className="h-2 bg-green-500"></div>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-green-500/10 flex items-center justify-center">
                      <span className="text-green-500 font-bold">E</span>
                    </div>
                    Emotional Needs
                  </CardTitle>
                  <CardDescription>How they want to feel</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-green-500 mt-2 shrink-0"></div>
                      <span>Confidence that their models are fair</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-green-500 mt-2 shrink-0"></div>
                      <span>Trust in the automated oversight</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-green-500 mt-2 shrink-0"></div>
                      <span>Peace of mind around compliance</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-green-500 mt-2 shrink-0"></div>
                      <span>Pride in setting the standard for ethical AI</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Regulatory Drivers */}
        <section id="regulatory" className="py-20">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tighter mb-4">Regulatory Drivers</h2>
              <p className="text-muted-foreground max-w-3xl mx-auto">
                Our solution is built to meet these strict compliance frameworks from day one, ensuring your AI systems 
                are audit-ready and legally compliant.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="border-0 shadow-lg overflow-hidden">
                <div className="h-2 bg-blue-600"></div>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle>GDPR Article 22</CardTitle>
                    <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full">EU</span>
                  </div>
                  <CardDescription>Right to explanation for automated decision-making</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Individuals have the right to obtain meaningful information about the logic involved in automated 
                    decision-making that significantly affects them.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg overflow-hidden">
                <div className="h-2 bg-purple-600"></div>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle>EU AI Act</CardTitle>
                    <span className="text-xs bg-purple-100 text-purple-800 px-2 py-1 rounded-full">EU</span>
                  </div>
                  <CardDescription>Bias testing requirements for high-risk AI systems</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    High-risk AI systems must undergo conformity assessments, including bias testing and risk management 
                    throughout their lifecycle.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg overflow-hidden">
                <div className="h-2 bg-red-600"></div>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle>EEOC Guidelines</CardTitle>
                    <span className="text-xs bg-red-100 text-red-800 px-2 py-1 rounded-full">US</span>
                  </div>
                  <CardDescription>Fair hiring compliance and anti-discrimination</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Employment decisions using AI must comply with federal anti-discrimination laws and demonstrate 
                    fairness across protected classes.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="mt-12 p-6 bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200 rounded-lg">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white">
                  ✓
                </div>
                <h3 className="text-lg font-bold text-blue-800">Compliance Ready</h3>
              </div>
              <p className="text-blue-700">
                Our solution is built to meet these strict compliance frameworks from day one, ensuring your AI systems 
                are audit-ready and legally compliant.
              </p>
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
