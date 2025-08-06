import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { TrendingUp, Clock, Shield, Users, Zap, Award, Leaf, Building } from 'lucide-react'

export function BusinessImpact() {
  const quantitativeMetrics = [
    {
      icon: TrendingUp,
      value: "80%",
      label: "Bias Resolution",
      description: "Less manual effort for compliance reviews",
      color: "text-green-500",
      bgColor: "bg-green-500/10",
    },
    {
      icon: Zap,
      value: "2x",
      label: "Faster Compliance",
      description: "Accelerated reporting cycles for regulations",
      color: "text-blue-500",
      bgColor: "bg-blue-500/10",
    },
    {
      icon: Clock,
      value: "2 Hrs/Day",
      label: "Daily Automation Savings",
      description: "Time liberated for strategic initiatives",
      color: "text-purple-500",
      bgColor: "bg-purple-500/10",
    },
    {
      icon: TrendingUp,
      value: "3x",
      label: "Audit Time Reduction",
      description: "Quicker identification and remediation of biases",
      color: "text-amber-500",
      bgColor: "bg-amber-500/10",
    },
  ]

  const qualitativeBenefits = [
    {
      icon: Users,
      title: "Empowered Users",
      description: "Enables confidence in deploying and managing AI systems",
    },
    {
      icon: Shield,
      title: "Transparent AI",
      description: "Promotes clear, explainable AI practices across operations",
    },
    {
      icon: Building,
      title: "Stakeholder Trust",
      description: "Builds confidence with regulators, boards, and customers",
    },
    {
      icon: Award,
      title: "Ethical AI Leadership",
      description: "Positions the brand at the forefront of responsible AI",
    },
    {
      icon: Leaf,
      title: "Sustainable Innovation",
      description: "Supports long-term, responsible growth for the next decade",
    },
    {
      icon: Shield,
      title: "Reduced Risk",
      description: "Mitigates costly legal and regulatory penalties",
    },
  ]

  return (
    <section id="business-impact" className="py-20 bg-muted/50">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter mb-2">Business and Social Impact</h2>
          <p className="text-muted-foreground max-w-[800px] mx-auto">
            Our Ethical AI Auditor delivers measurable business outcomes while promoting responsible AI practices across
            your organization.
          </p>
        </div>

        <div className="space-y-12">
          {/* Quantitative Benefits */}
          <div>
            <h3 className="text-2xl font-bold mb-6 text-center">Quantitative Benefits</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {quantitativeMetrics.map((metric, index) => {
                const IconComponent = metric.icon
                return (
                  <Card key={index} className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow">
                    <CardContent className="pt-6">
                      <div className={`w-16 h-16 rounded-full ${metric.bgColor} mx-auto mb-4 flex items-center justify-center ${metric.color}`}>
                        <IconComponent className="h-8 w-8" />
                      </div>
                      <div className="text-4xl font-bold mb-2">{metric.value}</div>
                      <div className="font-semibold mb-2">{metric.label}</div>
                      <p className="text-sm text-muted-foreground">{metric.description}</p>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>

          {/* Qualitative Benefits */}
          <div>
            <h3 className="text-2xl font-bold mb-6 text-center">Strategic Outcomes</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {qualitativeBenefits.map((benefit, index) => {
                const IconComponent = benefit.icon
                return (
                  <Card key={index} className="border-0 shadow-md hover:shadow-lg transition-shadow">
                    <CardHeader className="pb-2">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                          <IconComponent className="h-5 w-5" />
                        </div>
                        <CardTitle className="text-lg">{benefit.title}</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">{benefit.description}</p>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>

          {/* Impact Summary */}
          <Card className="bg-gradient-to-br from-blue-500/10 to-purple-600/10 border-blue-200 dark:border-blue-800">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl">Transformative Impact</CardTitle>
              <CardDescription className="text-lg">
                The Ethical AI Auditor transforms responsible AI from a compliance burden into a strategic advantage
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold text-blue-500 mb-2">70%</div>
                  <div className="font-medium">Faster Fairness Insights</div>
                  <div className="text-sm text-muted-foreground">Rapid understanding of AI model fairness</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-purple-500 mb-2">3x</div>
                  <div className="font-medium">Faster Issue Resolution</div>
                  <div className="text-sm text-muted-foreground">Quicker identification and remediation of biases</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-green-500 mb-2">100%</div>
                  <div className="font-medium">Ethical Culture</div>
                  <div className="text-sm text-muted-foreground">
                    Reinforces a strong foundation of responsible AI governance
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
