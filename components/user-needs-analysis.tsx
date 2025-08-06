import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Cog, Users, Heart, CheckCircle2 } from 'lucide-react'

export function UserNeedsAnalysis() {
  const needs = [
    {
      title: "Functional Needs",
      subtitle: "What they must do",
      icon: Cog,
      color: "text-blue-500",
      bgColor: "bg-blue-500/10",
      items: [
        "Automated detection of AI bias",
        "Real-time fairness monitoring",
        "Compliant reporting for GDPR, EEOC, HIPAA",
        "Explainable, human-readable insights",
        "SAP-friendly integration without disrupting workflows",
      ],
    },
    {
      title: "Social Needs",
      subtitle: "Recognition & Validation",
      icon: Users,
      color: "text-purple-500",
      bgColor: "bg-purple-500/10",
      items: [
        "Industry recognition for responsible practices",
        "Approval from regulators and auditors",
        "Reinforce stakeholder and board confidence",
        "Strengthen brand image as a responsible innovator",
      ],
    },
    {
      title: "Emotional Needs",
      subtitle: "How they want to feel",
      icon: Heart,
      color: "text-pink-500",
      bgColor: "bg-pink-500/10",
      items: [
        "Confidence that their models are fair",
        "Trust in the automated oversight",
        "Peace of mind around compliance",
        "Pride in setting the standard for ethical AI",
      ],
    },
  ]

  return (
    <section id="user-needs" className="py-20">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter mb-2">User Needs Analysis</h2>
          <p className="text-muted-foreground max-w-[800px] mx-auto">
            Our solution is laser-focused on addressing these layered needs across functional, social, and emotional
            dimensions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {needs.map((need, index) => {
            const IconComponent = need.icon
            return (
              <Card key={index} className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader className={`${need.bgColor} pb-4`}>
                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 rounded-full bg-background flex items-center justify-center ${need.color}`}>
                      <IconComponent className="h-5 w-5" />
                    </div>
                    <div>
                      <CardTitle className="text-lg">{need.title}</CardTitle>
                      <p className="text-sm text-muted-foreground">{need.subtitle}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pt-6">
                  <ul className="space-y-3">
                    {need.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start gap-2">
                        <CheckCircle2 className={`h-4 w-4 mt-0.5 ${need.color} shrink-0`} />
                        <span className="text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
