"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { BarChart, LineChart, PieChart } from "@/components/ui/chart"
import { MessageSquare, Download, RefreshCw } from 'lucide-react'

export function DemoDashboard() {
  const [activeTab, setActiveTab] = useState("bias")

  return (
    <Tabs defaultValue="bias" className="w-full" onValueChange={setActiveTab}>
      <div className="flex justify-between items-center mb-6">
        <TabsListWrapper>
          <TabsListInner>
            <TabsTrigger value="bias">Bias Detection</TabsTrigger>
            <TabsTrigger value="explain">Explainability</TabsTrigger>
            <TabsTrigger value="compliance">Compliance</TabsTrigger>
          </TabsListInner>
        </TabsListWrapper>

        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm">
            <RefreshCw className="mr-2 h-4 w-4" />
            Refresh
          </Button>
          <Button variant="outline" size="sm">
            <Download className="mr-2 h-4 w-4" />
            Export
          </Button>
        </div>
      </div>

      <TabsContent value="bias" className="mt-0">
        <BiasDetectionDashboard />
      </TabsContent>

      <TabsContent value="explain" className="mt-0">
        <ExplainabilityDashboard />
      </TabsContent>

      <TabsContent value="compliance" className="mt-0">
        <ComplianceDashboard />
      </TabsContent>
    </Tabs>
  )
}

function BiasDetectionDashboard() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <Card className="md:col-span-2">
        <CardHeader>
          <CardTitle>DoWhy Causal Analysis Results</CardTitle>
          <CardDescription>Gender bias detection using causal inference</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {/* Manual Calculations */}
            <div className="p-4 bg-muted/50 rounded-lg">
              <h4 className="font-semibold mb-3">Manual Calculations</h4>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="text-muted-foreground">Overall approval rate:</span>
                  <span className="font-mono ml-2">26.0%</span>
                </div>
                <div>
                  <span className="text-muted-foreground">Male approval rate:</span>
                  <span className="font-mono ml-2 text-blue-600">39.0%</span>
                </div>
                <div>
                  <span className="text-muted-foreground">Female approval rate:</span>
                  <span className="font-mono ml-2 text-red-600">12.9%</span>
                </div>
                <div>
                  <span className="text-muted-foreground">Raw difference:</span>
                  <span className="font-mono ml-2 text-red-600 font-bold">-26.1%</span>
                </div>
              </div>
            </div>

            {/* Causal Estimate */}
            <div className="p-4 bg-red-50 dark:bg-red-950/20 rounded-lg border border-red-200 dark:border-red-800">
              <h4 className="font-semibold mb-2 text-red-800 dark:text-red-200">Causal Analysis Result</h4>
              <p className="text-sm text-red-700 dark:text-red-300 mb-2">
                <strong>Linear Regression Method:</strong> Mean causal effect = -25.98%
              </p>
              <p className="text-sm text-red-700 dark:text-red-300 mb-2">
                <strong>Logistic Regression Method:</strong> Estimated ATE = -16.02%
              </p>
              <div className="mt-3 p-3 bg-red-100 dark:bg-red-900/30 rounded border-l-4 border-l-red-500">
                <p className="text-sm font-medium text-red-800 dark:text-red-200">
                  <strong>Final Interpretation:</strong> Being female reduces loan approval probability by approximately 16.02% on average, after controlling for age, education, income, credit history, and loan amount. This confirms the presence of gender bias in the loan approval process.
                </p>
              </div>
            </div>

            {/* Conditional Estimates Preview */}
            <div className="p-4 bg-muted/50 rounded-lg">
              <h4 className="font-semibold mb-3">Conditional Estimates by Age & Education</h4>
              <div className="space-y-2 text-xs font-mono">
                <div className="flex justify-between">
                  <span>Age (21-33), Education (High School):</span>
                  <span className="text-red-600">-29.6%</span>
                </div>
                <div className="flex justify-between">
                  <span>Age (21-33), Education (Bachelor):</span>
                  <span className="text-red-600">-25.1%</span>
                </div>
                <div className="flex justify-between">
                  <span>Age (33-42), Education (High School):</span>
                  <span className="text-red-600">-28.6%</span>
                </div>
                <div className="flex justify-between">
                  <span>Age (61-73), Education (Graduate):</span>
                  <span className="text-red-600">-18.1%</span>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Fairlearn Mitigation Results</CardTitle>
          <CardDescription>Before vs. after bias mitigation</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {/* Before Mitigation */}
            <div>
              <h4 className="font-semibold mb-3 text-red-600">Before Mitigation</h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Accuracy:</span>
                  <span className="font-mono">76.0%</span>
                </div>
                <div className="flex justify-between">
                  <span>F1 Score:</span>
                  <span className="font-mono">41.9%</span>
                </div>
                <div className="flex justify-between">
                  <span>Demographic Parity:</span>
                  <span className="font-mono text-red-600">7.6%</span>
                </div>
                <div className="flex justify-between">
                  <span>Equalized Odds:</span>
                  <span className="font-mono text-red-600">3.2%</span>
                </div>
              </div>
            </div>

            {/* After Mitigation */}
            <div>
              <h4 className="font-semibold mb-3 text-green-600">After Mitigation (ExponentiatedGradient)</h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Accuracy:</span>
                  <span className="font-mono">72.3%</span>
                </div>
                <div className="flex justify-between">
                  <span>F1 Score:</span>
                  <span className="font-mono">26.5%</span>
                </div>
                <div className="flex justify-between">
                  <span>Demographic Parity:</span>
                  <span className="font-mono text-green-600">0.8%</span>
                </div>
                <div className="flex justify-between">
                  <span>Equalized Odds:</span>
                  <span className="font-mono text-green-600">7.0%</span>
                </div>
              </div>
            </div>

            {/* Improvement Summary */}
            <div className="p-3 bg-green-50 dark:bg-green-950/20 rounded border border-green-200 dark:border-green-800">
              <h4 className="font-semibold text-green-800 dark:text-green-200 mb-2">Improvement Summary</h4>
              <div className="text-sm space-y-1">
                <div className="flex justify-between">
                  <span>Demographic Parity:</span>
                  <span className="font-mono text-green-600">↓ 6.8%</span>
                </div>
                <div className="flex justify-between">
                  <span>Method Used:</span>
                  <span className="font-mono">ExponentiatedGradient</span>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="md:col-span-3">
        <CardHeader>
          <CardTitle>Model Dashboard Summary</CardTitle>
          <CardDescription>Real-time monitoring of multiple AI models</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Hiring Model */}
            <div className="p-4 border rounded-lg bg-red-50 dark:bg-red-950/20 border-red-200 dark:border-red-800">
              <div className="flex justify-between items-start mb-2">
                <h4 className="font-semibold">hiring_model_v1</h4>
                <span className="text-xs bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200 px-2 py-1 rounded">NON-COMPLIANT</span>
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Risk Score:</span>
                  <span className="font-mono text-red-600">92</span>
                </div>
                <div className="flex justify-between">
                  <span>Bias Source:</span>
                  <span className="font-mono">gender</span>
                </div>
                <div className="flex justify-between">
                  <span>Disparate Impact:</span>
                  <span className="font-mono text-red-600">0.717</span>
                </div>
                <div className="flex justify-between">
                  <span>Last Audited:</span>
                  <span className="font-mono text-xs">2025-08-05</span>
                </div>
              </div>
            </div>

            {/* Fraud Detection Model */}
            <div className="p-4 border rounded-lg bg-green-50 dark:bg-green-950/20 border-green-200 dark:border-green-800">
              <div className="flex justify-between items-start mb-2">
                <h4 className="font-semibold">fraud_detection_v2</h4>
                <span className="text-xs bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-2 py-1 rounded">COMPLIANT</span>
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Risk Score:</span>
                  <span className="font-mono text-green-600">34</span>
                </div>
                <div className="flex justify-between">
                  <span>Bias Source:</span>
                  <span className="font-mono">none</span>
                </div>
                <div className="flex justify-between">
                  <span>Disparate Impact:</span>
                  <span className="font-mono text-green-600">0.91</span>
                </div>
                <div className="flex justify-between">
                  <span>Last Audited:</span>
                  <span className="font-mono text-xs">2025-08-04</span>
                </div>
              </div>
            </div>

            {/* Credit Scoring Model */}
            <div className="p-4 border rounded-lg bg-amber-50 dark:bg-amber-950/20 border-amber-200 dark:border-amber-800">
              <div className="flex justify-between items-start mb-2">
                <h4 className="font-semibold">credit_scoring_v3</h4>
                <span className="text-xs bg-amber-100 dark:bg-amber-900 text-amber-800 dark:text-amber-200 px-2 py-1 rounded">NON-COMPLIANT</span>
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Risk Score:</span>
                  <span className="font-mono text-amber-600">76</span>
                </div>
                <div className="flex justify-between">
                  <span>Bias Source:</span>
                  <span className="font-mono">age</span>
                </div>
                <div className="flex justify-between">
                  <span>Disparate Impact:</span>
                  <span className="font-mono text-amber-600">0.78</span>
                </div>
                <div className="flex justify-between">
                  <span>Last Audited:</span>
                  <span className="font-mono text-xs">2025-08-03</span>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

function ExplainabilityDashboard() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <Card>
        <CardHeader>
          <CardTitle>Joule + Gemini LLM Explainability</CardTitle>
          <CardDescription>AI-powered explanations of model decisions</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="border rounded-lg h-[400px] flex flex-col">
            <div className="p-4 border-b bg-muted/50 flex items-center justify-between">
              <div className="font-medium">Joule AI Assistant (Powered by Gemini)</div>
              <Button variant="ghost" size="sm">
                <RefreshCw className="h-4 w-4" />
              </Button>
            </div>

            <div className="flex-1 p-4 overflow-y-auto space-y-4">
              <div className="flex gap-3">
                <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground">
                  J
                </div>
                <div className="bg-muted p-3 rounded-lg max-w-[80%]">
                  <p className="text-sm">Hello! I'm Joule, powered by Gemini LLM. I can explain the loan approval decisions based on our DoWhy causal analysis. What would you like to know?</p>
                </div>
              </div>

              <div className="flex gap-3 justify-end">
                <div className="bg-primary p-3 rounded-lg max-w-[80%] text-primary-foreground">
                  <p className="text-sm">Why was the female applicant with ID #4872 rejected for the loan?</p>
                </div>
                <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center">U</div>
              </div>

              <div className="flex gap-3">
                <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground">
                  J
                </div>
                <div className="bg-muted p-3 rounded-lg max-w-[80%]">
                  <p className="text-sm">
                    Based on our DoWhy causal analysis, this decision shows concerning bias patterns. Here's what the data reveals:
                  </p>
                  <div className="mt-2 p-2 bg-red-50 dark:bg-red-950/30 rounded text-xs">
                    <p><strong>Causal Effect:</strong> Being female reduces loan approval probability by 16.02% on average</p>
                    <p><strong>Raw Gender Gap:</strong> Male approval rate (39.0%) vs Female approval rate (12.9%)</p>
                    <p><strong>Bias Confirmation:</strong> Even after controlling for age, education, income, and credit history, gender bias persists</p>
                  </div>
                  <p className="text-sm mt-2">
                    The rejection appears to be influenced by gender bias rather than legitimate financial factors. Our Fairlearn mitigation reduced this bias from 7.6% to 0.8% demographic parity difference.
                  </p>
                </div>
              </div>

              <div className="flex gap-3 justify-end">
                <div className="bg-primary p-3 rounded-lg max-w-[80%] text-primary-foreground">
                  <p className="text-sm">What specific features contributed most to this bias?</p>
                </div>
                <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center">U</div>
              </div>

              <div className="flex gap-3">
                <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground">
                  J
                </div>
                <div className="bg-muted p-3 rounded-lg max-w-[80%]">
                  <p className="text-sm">
                    The DoWhy conditional estimates show bias varies by demographic intersections:
                  </p>
                  <div className="mt-2 space-y-1 text-xs font-mono bg-background p-2 rounded">
                    <div>Young females (21-33) + High School: <span className="text-red-600">-29.6% penalty</span></div>
                    <div>Young females (21-33) + Bachelor: <span className="text-red-600">-25.1% penalty</span></div>
                    <div>Older females (61-73) + Graduate: <span className="text-red-600">-18.1% penalty</span></div>
                  </div>
                  <p className="text-sm mt-2">
                    The bias is most severe for younger women with lower education levels, suggesting intersectional discrimination in the model's decision-making process.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-4 border-t flex gap-2">
              <input
                type="text"
                placeholder="Ask about bias patterns or model decisions..."
                className="flex-1 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              />
              <Button size="icon">
                <MessageSquare className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>DoWhy Feature Analysis</CardTitle>
            <CardDescription>Causal feature importance from your algorithm</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { name: "Gender (Direct Effect)", value: -0.1602, color: "bg-red-500", description: "Primary bias source" },
                { name: "Age Interaction", value: -0.0892, color: "bg-red-400", description: "Amplifies gender bias" },
                { name: "Education Interaction", value: -0.0654, color: "bg-red-400", description: "Intersectional bias" },
                { name: "Income", value: 0.1234, color: "bg-green-500", description: "Legitimate factor" },
                { name: "Credit History", value: 0.0987, color: "bg-green-500", description: "Legitimate factor" },
              ].map((feature, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium">{feature.name}</span>
                    <span className={`text-sm font-mono ${feature.value < 0 ? "text-red-600" : "text-green-600"}`}>
                      {feature.value > 0 ? "+" : ""}{(feature.value * 100).toFixed(1)}%
                    </span>
                  </div>
                  <div className="h-2 w-full bg-muted rounded-full overflow-hidden flex">
                    {feature.value < 0 ? (
                      <>
                        <div className="flex-1"></div>
                        <div
                          className={`h-full ${feature.color}`}
                          style={{ width: `${Math.abs(feature.value) * 300}%` }}
                        ></div>
                      </>
                    ) : (
                      <>
                        <div className={`h-full ${feature.color}`} style={{ width: `${feature.value * 300}%` }}></div>
                        <div className="flex-1"></div>
                      </>
                    )}
                  </div>
                  <div className="text-xs text-muted-foreground mt-1">{feature.description}</div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Fairlearn Mitigation Strategy</CardTitle>
            <CardDescription>How bias was reduced in your model</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="p-3 border rounded-lg bg-blue-50 dark:bg-blue-950/20">
                <h4 className="font-medium mb-2">ExponentiatedGradient Method</h4>
                <p className="text-sm text-muted-foreground mb-2">
                  Applied fairness constraints during model training to reduce demographic parity difference.
                </p>
                <div className="grid grid-cols-2 gap-4 text-xs">
                  <div>
                    <span className="text-muted-foreground">Before:</span>
                    <span className="ml-2 font-mono text-red-600">7.6% bias</span>
                  </div>
                  <div>
                    <span className="text-muted-foreground">After:</span>
                    <span className="ml-2 font-mono text-green-600">0.8% bias</span>
                  </div>
                </div>
              </div>

              <div className="p-3 border rounded-lg">
                <h4 className="font-medium mb-2">Trade-off Analysis</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Accuracy Change:</span>
                    <span className="font-mono text-amber-600">-3.7%</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Fairness Improvement:</span>
                    <span className="font-mono text-green-600">+6.8%</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Overall Benefit:</span>
                    <span className="font-mono text-green-600">Positive</span>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

function ComplianceDashboard() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <Card className="md:col-span-3">
        <CardHeader>
          <CardTitle>Compliance Overview</CardTitle>
          <CardDescription>Regulatory compliance status across frameworks</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                name: "GDPR",
                score: 92,
                status: "Compliant",
                issues: 2,
                color: "green",
              },
              {
                name: "EEOC",
                score: 87,
                status: "Mostly Compliant",
                issues: 4,
                color: "yellow",
              },
              {
                name: "AI Ethics Guidelines",
                score: 95,
                status: "Compliant",
                issues: 1,
                color: "green",
              },
            ].map((item, index) => (
              <div key={index} className="flex flex-col">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-medium">{item.name}</span>
                  <span
                    className={`text-sm px-2 py-0.5 rounded-full ${
                      item.color === "green"
                        ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
                        : item.color === "yellow"
                          ? "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200"
                          : "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200"
                    }`}
                  >
                    {item.status}
                  </span>
                </div>

                <div className="flex items-end gap-4">
                  <div className="flex-1">
                    <div className="flex justify-between text-sm mb-1">
                      <span>Compliance Score</span>
                      <span>{item.score}%</span>
                    </div>
                    <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
                      <div
                        className={`h-full ${
                          item.score >= 90 ? "bg-green-500" : item.score >= 80 ? "bg-yellow-500" : "bg-red-500"
                        } rounded-full`}
                        style={{ width: `${item.score}%` }}
                      ></div>
                    </div>
                  </div>

                  <div className="text-center">
                    <div className="text-2xl font-bold">{item.issues}</div>
                    <div className="text-xs text-muted-foreground">Open Issues</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card className="md:col-span-2">
        <CardHeader>
          <CardTitle>Audit Timeline</CardTitle>
          <CardDescription>History of compliance checks and remediations</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {[
              {
                date: "May 15, 2025",
                title: "Quarterly Compliance Audit",
                description: "Full audit of hiring model fairness and compliance",
                status: "Completed",
                issues: 3,
                color: "green",
              },
              {
                date: "April 22, 2025",
                title: "Bias Remediation",
                description: "Fixed gender bias in promotion recommendations",
                status: "Resolved",
                issues: 0,
                color: "green",
              },
              {
                date: "April 10, 2025",
                title: "GDPR Documentation Update",
                description: "Updated data processing documentation for EU compliance",
                status: "Completed",
                issues: 0,
                color: "green",
              },
              {
                date: "March 28, 2025",
                title: "Monthly Fairness Check",
                description: "Routine check of model fairness metrics",
                status: "Issues Found",
                issues: 2,
                color: "yellow",
              },
            ].map((item, index) => (
              <div key={index} className="flex gap-4">
                <div className="w-2 flex-shrink-0">
                  <div
                    className={`w-2 h-2 rounded-full mt-2 ${
                      item.color === "green" ? "bg-green-500" : item.color === "yellow" ? "bg-yellow-500" : "bg-red-500"
                    }`}
                  ></div>
                  {index < 3 && <div className="w-0.5 h-full bg-border mx-auto mt-1"></div>}
                </div>

                <div className="flex-1">
                  <div className="flex justify-between">
                    <div>
                      <div className="font-medium">{item.title}</div>
                      <div className="text-sm text-muted-foreground">{item.description}</div>
                    </div>
                    <div className="text-sm text-muted-foreground">{item.date}</div>
                  </div>

                  <div className="flex justify-between mt-2">
                    <span
                      className={`text-xs px-2 py-0.5 rounded-full ${
                        item.color === "green"
                          ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
                          : item.color === "yellow"
                            ? "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200"
                            : "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200"
                      }`}
                    >
                      {item.status}
                    </span>

                    {item.issues > 0 && (
                      <span className="text-xs text-muted-foreground">
                        {item.issues} issue{item.issues > 1 ? "s" : ""} found
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Compliance Reports</CardTitle>
          <CardDescription>Generated documentation for auditors</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {[
              {
                name: "Q2 2025 Fairness Report",
                date: "May 15, 2025",
                type: "PDF",
                size: "2.4 MB",
              },
              {
                name: "GDPR Compliance Documentation",
                date: "April 10, 2025",
                type: "PDF",
                size: "3.8 MB",
              },
              {
                name: "Model Cards for Hiring AI",
                date: "March 22, 2025",
                type: "HTML",
                size: "1.2 MB",
              },
              {
                name: "Bias Mitigation Evidence",
                date: "March 15, 2025",
                type: "PDF",
                size: "5.1 MB",
              },
              {
                name: "Q1 2025 Fairness Report",
                date: "February 12, 2025",
                type: "PDF",
                size: "2.2 MB",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-3 border rounded-lg hover:bg-muted/50 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded bg-primary/10 flex items-center justify-center text-primary">
                    {item.type === "PDF" ? "PDF" : "HTML"}
                  </div>
                  <div>
                    <div className="font-medium text-sm">{item.name}</div>
                    <div className="text-xs text-muted-foreground">
                      {item.date} • {item.size}
                    </div>
                  </div>
                </div>

                <Button variant="ghost" size="icon">
                  <Download className="h-4 w-4" />
                </Button>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

function TabsListWrapper({ children }: { children: React.ReactNode }) {
  return <div className="rounded-lg border bg-card p-1">{children}</div>
}

function TabsListInner({ children }: { children: React.ReactNode }) {
  return <TabsList className="grid w-full grid-cols-3">{children}</TabsList>
}
