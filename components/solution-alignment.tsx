import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, CheckCircle2 } from 'lucide-react'

export function SolutionAlignment() {
  const alignments = [
    {
      userNeed: "Automated bias detection",
      solutionFeature: "FairML engine",
      measurableBenefit: "80% less manual auditing",
    },
    {
      userNeed: "Explainability",
      solutionFeature: "SAP Joule human-readable reports",
      measurableBenefit: "Clear regulator communication",
    },
    {
      userNeed: "Compliance reporting",
      solutionFeature: "Audit-ready, traceable documents",
      measurableBenefit: "Reduced legal risk",
    },
    {
      userNeed: "SAP integration",
      solutionFeature: "SAP BTP cloud architecture",
      measurableBenefit: "Zero disruption",
    },
    {
      userNeed: "Stakeholder trust",
      solutionFeature: "Approval workflows + alerts",
      measurableBenefit: "Better brand confidence",
    },
  ]

  return (
    <section id="solution-alignment" className="py-20">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter mb-2">Solution Alignment to User Needs</h2>
          <p className="text-muted-foreground max-w-[800px] mx-auto">
            Every feature is directly tied to user needs and business benefits, ensuring maximum impact and value
            delivery.
          </p>
        </div>

        <Card className="border-0 shadow-lg overflow-hidden">
          <CardHeader className="bg-muted/50">
            <CardTitle>Need → Solution → Benefit Mapping</CardTitle>
            <CardDescription>Direct alignment between user requirements and our solution capabilities</CardDescription>
          </CardHeader>
          <CardContent className="p-0">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b bg-muted/30">
                    <th className="text-left p-4 font-semibold">User Need</th>
                    <th className="text-center p-4 font-semibold w-16"></th>
                    <th className="text-left p-4 font-semibold">Solution Feature</th>
                    <th className="text-center p-4 font-semibold w-16"></th>
                    <th className="text-left p-4 font-semibold">Measurable Benefit</th>
                  </tr>
                </thead>
                <tbody>
                  {alignments.map((alignment, index) => (
                    <tr key={index} className="border-b hover:bg-muted/20 transition-colors">
                      <td className="p-4">
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 rounded-full bg-red-500"></div>
                          <span className="font-medium">{alignment.userNeed}</span>
                        </div>
                      </td>
                      <td className="p-4 text-center">
                        <ArrowRight className="h-4 w-4 text-muted-foreground mx-auto" />
                      </td>
                      <td className="p-4">
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                          <span className="font-medium">{alignment.solutionFeature}</span>
                        </div>
                      </td>
                      <td className="p-4 text-center">
                        <ArrowRight className="h-4 w-4 text-muted-foreground mx-auto" />
                      </td>
                      <td className="p-4">
                        <div className="flex items-center gap-2">
                          <CheckCircle2 className="h-4 w-4 text-green-500" />
                          <span className="font-medium text-green-700 dark:text-green-400">
                            {alignment.measurableBenefit}
                          </span>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        <div className="mt-8 p-6 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950/20 dark:to-purple-950/20 rounded-lg border border-blue-200 dark:border-blue-800">
          <div className="text-center">
            <h3 className="text-xl font-bold mb-2">User-Centric Design Validation</h3>
            <p className="text-muted-foreground">
              Our comprehensive design thinking journey was meticulously structured by robust principles and proven
              methodologies, ensuring a user-centric and impactful solution that directly addresses critical business
              needs.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
