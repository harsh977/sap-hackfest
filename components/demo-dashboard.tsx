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
    <div className="w-full max-w-7xl mx-auto p-6">
      <Tabs defaultValue="bias" className="w-full" onValueChange={setActiveTab}>
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
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
    </div>
  )
}

function BiasDetectionDashboard() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <Card className="lg:col-span-2">
        <CardHeader>
          <CardTitle>DoWhy Causal Analysis Results</CardTitle>
          <CardDescription>Gender bias detection using causal inference</CardDescription>
        </CardHeader>
        <CardContent className="overflow-hidden">
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
        <CardContent className="overflow-hidden">
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

      <Card>
        <CardHeader>
          <CardTitle>Fairness Over Time</CardTitle>
          <CardDescription>Tracking bias metrics across model versions</CardDescription>
        </CardHeader>
        <CardContent className="overflow-hidden">
          <LineChart
            data={[
              { version: "v1.0", "Demographic Parity": 0.65, "Equal Opportunity": 0.58 },
              { version: "v1.1", "Demographic Parity": 0.72, "Equal Opportunity": 0.67 },
              { version: "v1.2", "Demographic Parity": 0.78, "Equal Opportunity": 0.75 },
              { version: "v1.3", "Demographic Parity": 0.85, "Equal Opportunity": 0.82 },
              { version: "v2.0", "Demographic Parity": 0.92, "Equal Opportunity": 0.89 },
            ]}
            index="version"
            categories={["Demographic Parity", "Equal Opportunity"]}
            colors={["#8b5cf6", "#3b82f6"]}
            valueFormatter={(value) => `${(value * 100).toFixed(0)}%`}
            className="h-64"
          />
        </CardContent>
      </Card>

      <Card className="lg:col-span-2">
        <CardHeader>
          <CardTitle>Feature Importance & Bias</CardTitle>
          <CardDescription>Identifying which features contribute most to bias</CardDescription>
        </CardHeader>
        <CardContent className="overflow-hidden">
          <div className="space-y-4">
            {[
              { name: "Education", importance: 0.28, bias: 0.15 },
              { name: "Work Experience", importance: 0.22, bias: 0.08 },
              { name: "Location", importance: 0.18, bias: 0.21 },
              { name: "Previous Salary", importance: 0.15, bias: 0.25 },
              { name: "Skills Assessment", importance: 0.12, bias: 0.05 },
              { name: "References", importance: 0.05, bias: 0.03 },
            ].map((feature, index) => (
              <div key={index} className="flex items-center gap-4">
                <div className="w-32 truncate text-sm font-medium">{feature.name}</div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <div className="text-xs w-16 text-muted-foreground">Importance</div>
                    <div className="h-2 flex-1 bg-muted rounded-full overflow-hidden">
                      <div
                        className="h-full bg-blue-500 rounded-full transition-all duration-300"
                        style={{ width: `${feature.importance * 100}%` }}
                      ></div>
                    </div>
                    <div className="text-xs w-12 text-right">{(feature.importance * 100).toFixed(0)}%</div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="text-xs w-16 text-muted-foreground">Bias Impact</div>
                    <div className="h-2 flex-1 bg-muted rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-red-500 rounded-full transition-all duration-300" 
                        style={{ width: `${feature.bias * 100}%` }}
                      ></div>
                    </div>
                    <div className="text-xs w-12 text-right">{(feature.bias * 100).toFixed(0)}%</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

function ExplainabilityDashboard() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <Card>
        <CardHeader>
          <CardTitle>Joule Explainability Interface</CardTitle>
          <CardDescription>Ask questions about model decisions</CardDescription>
        </CardHeader>
        <CardContent className="overflow-hidden">
          <div className="border rounded-lg h-[400px] flex flex-col">
            <div className="p-4 border-b bg-muted/50 flex items-center justify-between">
              <div className="font-medium">Joule AI Assistant</div>
              <Button variant="ghost" size="sm">
                <RefreshCw className="h-4 w-4" />
              </Button>
            </div>

            <div className="flex-1 p-4 overflow-y-auto space-y-4">
              <div className="flex gap-3">
                <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground text-sm">
                  J
                </div>
                <div className="bg-muted p-3 rounded-lg max-w-[80%]">
                  <p className="text-sm">Hello! I can help explain AI decisions. What would you like to know?</p>
                </div>
              </div>

              <div className="flex gap-3 justify-end">
                <div className="bg-primary p-3 rounded-lg max-w-[80%] text-primary-foreground">
                  <p className="text-sm">Why was candidate #4872 rejected for the marketing position?</p>
                </div>
                <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center text-sm">U</div>
              </div>

              <div className="flex gap-3">
                <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground text-sm">
                  J
                </div>
                <div className="bg-muted p-3 rounded-lg max-w-[80%]">
                  <p className="text-sm">
                    Candidate #4872 was not selected primarily due to insufficient experience in digital marketing
                    campaigns (scored 3.2/10 compared to the position requirement of 7/10). Their technical skills in
                    SEO and analytics tools were also below the required threshold.
                  </p>
                  <p className="text-sm mt-2">
                    The decision was not influenced by any protected attributes. The fairness score for this decision
                    was 0.92, indicating no significant bias.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-4 border-t flex gap-2">
              <input
                type="text"
                placeholder="Ask about a decision..."
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
            <CardTitle>Feature Importance</CardTitle>
            <CardDescription>How features influenced this decision</CardDescription>
          </CardHeader>
          <CardContent className="overflow-hidden">
            <div className="space-y-4">
              {[
                { name: "Digital Marketing Experience", value: -0.42, color: "bg-red-500" },
                { name: "SEO Knowledge", value: -0.28, color: "bg-red-500" },
                { name: "Analytics Tools", value: -0.15, color: "bg-red-500" },
                { name: "Communication Skills", value: 0.22, color: "bg-green-500" },
                { name: "Education", value: 0.18, color: "bg-green-500" },
              ].map((feature, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm truncate">{feature.name}</span>
                    <span className={`text-sm ${feature.value < 0 ? "text-red-500" : "text-green-500"}`}>
                      {feature.value > 0 ? "+" : ""}
                      {feature.value.toFixed(2)}
                    </span>
                  </div>
                  <div className="h-2 w-full bg-muted rounded-full overflow-hidden flex">
                    {feature.value < 0 ? (
                      <>
                        <div className="flex-1"></div>
                        <div
                          className={`h-full ${feature.color} transition-all duration-300`}
                          style={{ width: `${Math.abs(feature.value) * 100}%` }}
                        ></div>
                      </>
                    ) : (
                      <>
                        <div 
                          className={`h-full ${feature.color} transition-all duration-300`} 
                          style={{ width: `${feature.value * 100}%` }}
                        ></div>
                        <div className="flex-1"></div>
                      </>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Counterfactual Analysis</CardTitle>
            <CardDescription>What would change the decision?</CardDescription>
          </CardHeader>
          <CardContent className="overflow-hidden">
            <div className="space-y-4">
              <div className="p-3 border rounded-lg bg-muted/30">
                <p className="text-sm font-medium mb-1">If the candidate had:</p>
                <ul className="text-sm space-y-1 list-disc pl-5">
                  <li>3+ years of digital marketing experience (instead of 1 year)</li>
                  <li>Advanced certification in SEO (instead of basic)</li>
                  <li>Proficiency in Google Analytics (instead of beginner level)</li>
                </ul>
                <p className="text-sm font-medium mt-3 text-green-500">The decision would likely be "Accept"</p>
              </div>

              <div className="h-48">
                <PieChart
                  data={[
                    { name: "Digital Marketing", value: 45 },
                    { name: "SEO Knowledge", value: 30 },
                    { name: "Analytics Tools", value: 15 },
                    { name: "Other Factors", value: 10 },
                  ]}
                  index="name"
                  valueFormatter={(value) => `${value}%`}
                  category="value"
                  colors={["#3b82f6", "#8b5cf6", "#ec4899", "#94a3b8"]}
                  className="h-full"
                />
              </div>

              <div className="text-xs text-center text-muted-foreground">
                Relative importance of factors for decision change
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
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <Card className="lg:col-span-3">
        <CardHeader>
          <CardTitle>Compliance Overview</CardTitle>
          <CardDescription>Regulatory compliance status across frameworks</CardDescription>
        </CardHeader>
        <CardContent className="overflow-hidden">
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
                        className={`h-full transition-all duration-300 ${
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

      <Card className="lg:col-span-2">
        <CardHeader>
          <CardTitle>Audit Timeline</CardTitle>
          <CardDescription>History of compliance checks and remediations</CardDescription>
        </CardHeader>
        <CardContent className="overflow-hidden">
          <div className="space-y-4 max-h-96 overflow-y-auto">
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

                <div className="flex-1 min-w-0">
                  <div className="flex justify-between">
                    <div className="min-w-0">
                      <div className="font-medium truncate">{item.title}</div>
                      <div className="text-sm text-muted-foreground truncate">{item.description}</div>
                    </div>
                    <div className="text-sm text-muted-foreground whitespace-nowrap ml-2">{item.date}</div>
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
        <CardContent className="overflow-hidden">
          <div className="space-y-3 max-h-96 overflow-y-auto">
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
                <div className="flex items-center gap-3 min-w-0">
                  <div className="w-8 h-8 rounded bg-primary/10 flex items-center justify-center text-primary text-xs font-medium">
                    {item.type === "PDF" ? "PDF" : "HTML"}
                  </div>
                  <div className="min-w-0">
                    <div className="font-medium text-sm truncate">{item.name}</div>
                    <div className="text-xs text-muted-foreground">
                      {item.date} • {item.size}
                    </div>
                  </div>
                </div>

                <Button variant="ghost" size="icon" className="flex-shrink-0">
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
