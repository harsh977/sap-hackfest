import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowDown, BarChart2, FileUp, Scale, Shield } from "lucide-react"
import Link from "next/link"

export function BiasAuditingPipelines() {
  return (
    <section id="bias-pipelines" className="py-20">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter mb-2">Custom Bias Auditing Pipelines</h2>
          <p className="text-muted-foreground max-w-[800px] mx-auto">
            Beyond SAP tools, we developed independent pipelines that let users upload predictions from any external AI
            model (black-box or white-box) to evaluate fairness. These pipelines compute fairness metrics like
            demographic parity, disparate impact, and equal opportunity, and visualize model bias.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <Card className="relative overflow-hidden border-0 shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className="absolute top-0 left-0 w-2 h-full bg-blue-500"></div>
            <CardHeader className="pb-2">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-500">
                  <FileUp className="h-5 w-5" />
                </div>
                <div>
                  <CardTitle>Step 1</CardTitle>
                  <CardDescription>Upload model outputs and demographic attributes</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Upload your model's predictions along with demographic data. We support various formats including CSV,
                JSON, and direct API outputs from common ML platforms.
              </p>
              <div className="mt-4 p-3 bg-muted/50 rounded-md text-xs">
                <code>
                  {`{
  "predictions": [0.8, 0.3, 0.9, ...],
  "demographics": {
    "gender": ["F", "M", "F", ...],
    "age_group": ["25-34", "18-24", "45+", ...]
  }
}`}
                </code>
              </div>
            </CardContent>
          </Card>

          <Card className="relative overflow-hidden border-0 shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className="absolute top-0 left-0 w-2 h-full bg-purple-500"></div>
            <CardHeader className="pb-2">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-purple-500/10 flex items-center justify-center text-purple-500">
                  <Scale className="h-5 w-5" />
                </div>
                <div>
                  <CardTitle>Step 2</CardTitle>
                  <CardDescription>Run statistical fairness analysis</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Our pipeline automatically calculates key fairness metrics across demographic groups, identifying
                potential bias in your model's decisions.
              </p>
              <div className="mt-4 space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-xs">Demographic Parity</span>
                  <span className="text-xs font-medium">Computing...</span>
                </div>
                <div className="h-1.5 w-full bg-muted rounded-full overflow-hidden">
                  <div className="h-full bg-purple-500 w-[75%] rounded-full animate-pulse"></div>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-xs">Equal Opportunity</span>
                  <span className="text-xs font-medium">Computing...</span>
                </div>
                <div className="h-1.5 w-full bg-muted rounded-full overflow-hidden">
                  <div className="h-full bg-purple-500 w-[60%] rounded-full animate-pulse"></div>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-xs">Disparate Impact</span>
                  <span className="text-xs font-medium">Computing...</span>
                </div>
                <div className="h-1.5 w-full bg-muted rounded-full overflow-hidden">
                  <div className="h-full bg-purple-500 w-[85%] rounded-full animate-pulse"></div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="relative overflow-hidden border-0 shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className="absolute top-0 left-0 w-2 h-full bg-teal-500"></div>
            <CardHeader className="pb-2">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-teal-500/10 flex items-center justify-center text-teal-500">
                  <BarChart2 className="h-5 w-5" />
                </div>
                <div>
                  <CardTitle>Step 3</CardTitle>
                  <CardDescription>Get audit results and retraining suggestions</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Receive comprehensive reports with visualizations and actionable recommendations to mitigate bias in
                your models.
              </p>
              <div className="mt-4 flex flex-col gap-2">
                <div className="flex items-center gap-2 text-xs">
                  <Shield className="h-4 w-4 text-green-500" />
                  <span>Fairness assessment report</span>
                </div>
                <div className="flex items-center gap-2 text-xs">
                  <Shield className="h-4 w-4 text-amber-500" />
                  <span>Bias mitigation strategies</span>
                </div>
                <div className="flex items-center gap-2 text-xs">
                  <Shield className="h-4 w-4 text-blue-500" />
                  <span>Model retraining suggestions</span>
                </div>
                <div className="flex items-center gap-2 text-xs">
                  <Shield className="h-4 w-4 text-purple-500" />
                  <span>Compliance documentation</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="flex justify-center">
          <Link href="#demo">
            <Button size="lg" className="rounded-full group">
              Try the Auditor
              <ArrowDown className="ml-2 h-4 w-4 transition-transform group-hover:translate-y-1" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
