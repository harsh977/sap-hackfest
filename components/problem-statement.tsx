import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { AlertTriangle, TrendingDown, Clock, Shield, DollarSign, Users } from 'lucide-react'

export function ProblemStatement() {
  const impacts = [
    {
      icon: Clock,
      title: "Delayed Product Launches",
      description: "Manual audits taking 2-3 weeks delay AI deployment",
      color: "text-amber-500",
    },
    {
      icon: DollarSign,
      title: "Increased Compliance Costs",
      description: "Manual processes cost 80% more than automated solutions",
      color: "text-red-500",
    },
    {
      icon: Users,
      title: "Loss of Public Trust",
      description: "Biased AI decisions damage brand reputation permanently",
      color: "text-blue-500",
    },
  ]

  const risks = [
    { label: "Regulatory penalties", severity: "high" },
    { label: "Legal challenges", severity: "high" },
    { label: "Reputational damage", severity: "critical" },
  ]

  return (
    <section id="problem-statement" className="py-20 bg-muted/50">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter mb-2">The Problem We Are Solving</h2>
          <p className="text-muted-foreground max-w-[800px] mx-auto">
            AI powers critical decisions in finance, hiring, and healthcare — yet these models often replicate biases,
            lack transparency, and carry compliance risks.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <Card className="border-l-4 border-l-red-500 bg-red-50/50 dark:bg-red-950/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <AlertTriangle className="h-5 w-5 text-red-500" />
                  Core Problem
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Manual bias audits are slow, inconsistent, and cannot keep up with the scale of modern AI deployments,
                  leaving organizations exposed to significant risks.
                </p>
              </CardContent>
            </Card>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Organizations Face:</h3>
              <div className="grid gap-3">
                {risks.map((risk, index) => (
                  <div key={index} className="flex items-center gap-3 p-3 rounded-lg bg-background border">
                    <div
                      className={`w-3 h-3 rounded-full ${
                        risk.severity === "critical"
                          ? "bg-red-500"
                          : risk.severity === "high"
                            ? "bg-amber-500"
                            : "bg-yellow-500"
                      }`}
                    ></div>
                    <span className="font-medium">{risk.label}</span>
                    <span
                      className={`text-xs px-2 py-1 rounded-full ${
                        risk.severity === "critical"
                          ? "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200"
                          : risk.severity === "high"
                            ? "bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-200"
                            : "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200"
                      }`}
                    >
                      {risk.severity}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <Card className="border-l-4 border-l-blue-500 bg-blue-50/50 dark:bg-blue-950/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="h-5 w-5 text-blue-500" />
                  Urgency
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  With GDPR, the EU AI Act, and EEOC frameworks tightening, scalable, transparent, and fair AI
                  governance is no longer optional — it is a business survival need.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-center">Business Impact</h3>
            <div className="grid gap-6">
              {impacts.map((impact, index) => {
                const IconComponent = impact.icon
                return (
                  <Card key={index} className="border-0 shadow-md hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className={`w-12 h-12 rounded-full bg-muted flex items-center justify-center ${impact.color}`}>
                          <IconComponent className="h-6 w-6" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold mb-1">{impact.title}</h4>
                          <p className="text-sm text-muted-foreground">{impact.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                )
              })}
            </div>

            <Card className="bg-gradient-to-br from-purple-500/10 to-blue-500/10 border-purple-200 dark:border-purple-800">
              <CardHeader>
                <CardTitle>Scope & Scale</CardTitle>
                <CardDescription>Industries most affected by AI bias and compliance challenges</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-purple-500"></div>
                    <span>Finance & Banking</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                    <span>Healthcare</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-green-500"></div>
                    <span>Human Resources</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-amber-500"></div>
                    <span>Insurance</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-pink-500"></div>
                    <span>Public Sector</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-teal-500"></div>
                    <span>Retail & E-commerce</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
