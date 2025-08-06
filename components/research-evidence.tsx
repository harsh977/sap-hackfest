import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { BarChart3, Clock, DollarSign, AlertCircle, Quote, FileText, Scale, Shield } from 'lucide-react'

export function ResearchEvidence() {
  const keyFindings = [
    {
      icon: AlertCircle,
      stat: "80%",
      description: "of AI projects fail because of bias and fairness flaws",
      color: "text-red-500",
    },
    {
      icon: Clock,
      stat: "2-3 weeks",
      description: "average time for manual audits per model",
      color: "text-amber-500",
    },
    {
      icon: DollarSign,
      stat: "$10M+",
      description: "regulatory fines for biased models exceed per case",
      color: "text-green-500",
    },
    {
      icon: BarChart3,
      stat: "67%",
      description: "of enterprises lack any robust AI governance framework",
      color: "text-blue-500",
    },
  ]

  const userQuotes = [
    {
      quote: "Our compliance team is drowning in manual audits.",
      author: "Sarah Chen",
      role: "CTO",
      company: "Financial Services",
    },
    {
      quote: "There is no way to scale our ethics review to 100+ AI systems.",
      author: "Marcus Rodriguez",
      role: "Compliance Manager",
      company: "Healthcare Corp",
    },
  ]

  const regulations = [
    {
      icon: FileText,
      name: "GDPR Article 22",
      description: "Right to explanation for automated decision-making",
      region: "EU",
    },
    {
      icon: Scale,
      name: "EU AI Act",
      description: "Bias testing requirements for high-risk AI systems",
      region: "EU",
    },
    {
      icon: Shield,
      name: "EEOC Guidelines",
      description: "Fair hiring compliance and anti-discrimination",
      region: "US",
    },
  ]

  return (
    <section id="research-evidence" className="py-20">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter mb-2">Research & Evidence</h2>
          <p className="text-muted-foreground max-w-[800px] mx-auto">
            Our solution is built on extensive research, user interviews, and regulatory requirements that validate the
            urgent need for automated AI ethics.
          </p>
        </div>

        <div className="space-y-12">
          {/* Key Research Findings */}
          <div>
            <h3 className="text-2xl font-bold mb-6">Key Research Findings</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {keyFindings.map((finding, index) => {
                const IconComponent = finding.icon
                return (
                  <Card key={index} className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow">
                    <CardContent className="pt-6">
                      <div className={`w-16 h-16 rounded-full bg-muted mx-auto mb-4 flex items-center justify-center ${finding.color}`}>
                        <IconComponent className="h-8 w-8" />
                      </div>
                      <div className="text-3xl font-bold mb-2">{finding.stat}</div>
                      <p className="text-sm text-muted-foreground">{finding.description}</p>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>

          {/* User Voices */}
          <div>
            <h3 className="text-2xl font-bold mb-6">User Voices from Interviews</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {userQuotes.map((testimonial, index) => (
                <Card key={index} className="border-l-4 border-l-primary bg-muted/30">
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-4">
                      <Quote className="h-8 w-8 text-primary shrink-0 mt-1" />
                      <div>
                        <blockquote className="text-lg font-medium mb-4">"{testimonial.quote}"</blockquote>
                        <div className="text-sm">
                          <div className="font-semibold">{testimonial.author}</div>
                          <div className="text-muted-foreground">
                            {testimonial.role}, {testimonial.company}
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Regulatory Drivers */}
          <div>
            <h3 className="text-2xl font-bold mb-6">Regulatory Drivers</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {regulations.map((regulation, index) => {
                const IconComponent = regulation.icon
                return (
                  <Card key={index} className="border-0 shadow-md hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                          <IconComponent className="h-5 w-5" />
                        </div>
                        <div className="flex-1">
                          <CardTitle className="text-lg">{regulation.name}</CardTitle>
                          <div className="text-xs bg-muted px-2 py-1 rounded-full w-fit mt-1">{regulation.region}</div>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">{regulation.description}</p>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
            <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg border border-blue-200 dark:border-blue-800">
              <p className="text-sm text-blue-800 dark:text-blue-200">
                <strong>Compliance Ready:</strong> Our solution is built to meet these strict compliance frameworks
                from day one, ensuring your AI systems are audit-ready and legally compliant.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
