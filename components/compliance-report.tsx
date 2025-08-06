"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Download, AlertTriangle, CheckCircle, XCircle, Info } from 'lucide-react'

interface ComplianceReportProps {
  onDownload: () => void
}

export function ComplianceReport({ onDownload }: ComplianceReportProps) {
  const generatePDF = () => {
    // Create a new window with the report content
    const printWindow = window.open('', '_blank')
    if (!printWindow) return

    const reportHTML = `
      <!DOCTYPE html>
      <html>
      <head>
        <title>Ethical AI Audit Report</title>
        <style>
          @media print {
            body { margin: 0; font-family: Arial, sans-serif; font-size: 12px; line-height: 1.4; }
            .page-break { page-break-before: always; }
            .no-print { display: none; }
            .header { background: #1e40af; color: white; padding: 20px; margin-bottom: 20px; }
            .section { margin-bottom: 30px; }
            .alert { border: 2px solid #dc2626; background: #fef2f2; padding: 15px; margin: 10px 0; }
            .success { border: 2px solid #16a34a; background: #f0fdf4; padding: 15px; margin: 10px 0; }
            .warning { border: 2px solid #ca8a04; background: #fffbeb; padding: 15px; margin: 10px 0; }
            table { width: 100%; border-collapse: collapse; margin: 15px 0; }
            th, td { border: 1px solid #ccc; padding: 8px; text-align: left; }
            th { background: #f3f4f6; font-weight: bold; }
            .metric-table td:nth-child(2) { text-align: center; }
            .metric-table td:nth-child(3) { text-align: center; font-weight: bold; }
            h1 { color: #1e40af; border-bottom: 2px solid #1e40af; padding-bottom: 10px; }
            h2 { color: #374151; border-bottom: 1px solid #d1d5db; padding-bottom: 5px; }
            .risk-high { color: #dc2626; font-weight: bold; }
            .risk-medium { color: #ca8a04; font-weight: bold; }
            .risk-low { color: #16a34a; font-weight: bold; }
          }
          body { font-family: Arial, sans-serif; margin: 20px; line-height: 1.6; }
          .header { background: #1e40af; color: white; padding: 20px; margin: -20px -20px 20px -20px; }
          .section { margin-bottom: 30px; }
          .alert { border: 2px solid #dc2626; background: #fef2f2; padding: 15px; margin: 10px 0; border-radius: 5px; }
          .success { border: 2px solid #16a34a; background: #f0fdf4; padding: 15px; margin: 10px 0; border-radius: 5px; }
          .warning { border: 2px solid #ca8a04; background: #fffbeb; padding: 15px; margin: 10px 0; border-radius: 5px; }
          table { width: 100%; border-collapse: collapse; margin: 15px 0; }
          th, td { border: 1px solid #ccc; padding: 8px; text-align: left; }
          th { background: #f3f4f6; font-weight: bold; }
          .metric-table td:nth-child(2) { text-align: center; }
          .metric-table td:nth-child(3) { text-align: center; font-weight: bold; }
          h1 { color: #1e40af; border-bottom: 2px solid #1e40af; padding-bottom: 10px; }
          h2 { color: #374151; border-bottom: 1px solid #d1d5db; padding-bottom: 5px; }
          .risk-high { color: #dc2626; font-weight: bold; }
          .risk-medium { color: #ca8a04; font-weight: bold; }
          .risk-low { color: #16a34a; font-weight: bold; }
        </style>
      </head>
      <body>
        <div class="header">
          <h1 style="margin: 0; color: white; border: none;">Ethical AI Audit Report</h1>
          <p style="margin: 5px 0 0 0; opacity: 0.9;">Generated on ${new Date().toLocaleDateString()} | Report ID: EAI-${Date.now()}</p>
        </div>

        <div class="section">
          <h2>Executive Summary</h2>
          <div class="alert">
            <strong>⚠️ NON-COMPLIANT:</strong> Significant bias detected in the AI model. Immediate action required to meet regulatory standards.
          </div>
          <p><strong>Overall Risk Assessment:</strong> <span class="risk-high">HIGH RISK</span></p>
          <p><strong>Total Exposure:</strong> $30M - $207M in potential regulatory fines and litigation costs</p>
          <p><strong>Key Findings:</strong></p>
          <ul>
            <li>Gender bias detected with 25.98% causal effect on loan approvals</li>
            <li>Demographic parity difference of 7.6% exceeds acceptable thresholds</li>
            <li>Model fails EEOC compliance standards for fair lending</li>
            <li>GDPR Article 22 requirements not met for automated decision-making</li>
          </ul>
        </div>

        <div class="page-break"></div>

        <div class="section">
          <h2>1. DoWhy Causal Analysis Results</h2>
          <p>Our causal analysis using Microsoft's DoWhy library identified significant bias in the decision-making process:</p>
          
          <table class="metric-table">
            <tr><th>Causal Method</th><th>Estimate</th><th>Status</th></tr>
            <tr><td>Linear Regression (Backdoor)</td><td>-25.98%</td><td class="risk-high">FAIL</td></tr>
            <tr><td>Logistic Regression (Backdoor)</td><td>-16.02%</td><td class="risk-high">FAIL</td></tr>
            <tr><td>Propensity Score Matching</td><td>-21.45%</td><td class="risk-high">FAIL</td></tr>
          </table>

          <div class="warning">
            <strong>Interpretation:</strong> The negative causal estimates indicate that being female reduces the probability of loan approval by 16-26%, holding all other factors constant. This represents systematic discrimination.
          </div>

          <h3>Causal Graph Analysis</h3>
          <p>Identified causal relationships:</p>
          <ul>
            <li><strong>Gender → Loan Status:</strong> Direct discriminatory path detected</li>
            <li><strong>Gender → Income → Loan Status:</strong> Indirect bias through income correlation</li>
            <li><strong>Education → Income → Loan Status:</strong> Legitimate business factor</li>
          </ul>
        </div>

        <div class="section">
          <h2>2. Fairlearn Bias Mitigation Analysis</h2>
          <p>Applied Microsoft Fairlearn's ExponentiatedGradient algorithm to assess and mitigate bias:</p>

          <h3>Before Mitigation</h3>
          <table class="metric-table">
            <tr><th>Fairness Metric</th><th>Value</th><th>Threshold</th><th>Status</th></tr>
            <tr><td>Demographic Parity Difference</td><td>7.6%</td><td>≤2%</td><td class="risk-high">FAIL</td></tr>
            <tr><td>Equalized Odds Difference</td><td>12.3%</td><td>≤5%</td><td class="risk-high">FAIL</td></tr>
            <tr><td>Equal Opportunity Difference</td><td>9.8%</td><td>≤5%</td><td class="risk-high">FAIL</td></tr>
          </table>

          <h3>After Mitigation</h3>
          <table class="metric-table">
            <tr><th>Fairness Metric</th><th>Value</th><th>Threshold</th><th>Status</th></tr>
            <tr><td>Demographic Parity Difference</td><td>0.8%</td><td>≤2%</td><td class="risk-low">PASS</td></tr>
            <tr><td>Equalized Odds Difference</td><td>2.1%</td><td>≤5%</td><td class="risk-low">PASS</td></tr>
            <tr><td>Equal Opportunity Difference</td><td>1.4%</td><td>≤5%</td><td class="risk-low">PASS</td></tr>
          </table>

          <div class="success">
            <strong>Mitigation Success:</strong> Bias reduced by 6.8% while maintaining 94.2% of original model accuracy.
          </div>
        </div>

        <div class="page-break"></div>

        <div class="section">
          <h2>3. Regulatory Compliance Assessment</h2>

          <h3>3.1 EEOC Compliance (Equal Employment Opportunity Commission)</h3>
          <div class="alert">
            <strong>Status: NON-COMPLIANT</strong><br>
            The model violates EEOC guidelines for fair lending practices. The 4/5ths rule is not met (current ratio: 0.74).
          </div>
          <p><strong>Required Actions:</strong></p>
          <ul>
            <li>Implement bias mitigation before production deployment</li>
            <li>Conduct adverse impact analysis</li>
            <li>Document business necessity for all decision factors</li>
          </ul>

          <h3>3.2 GDPR Article 22 (Automated Decision-Making)</h3>
          <div class="alert">
            <strong>Status: NON-COMPLIANT</strong><br>
            Lacks sufficient explainability and human oversight mechanisms required for automated decisions with legal effects.
          </div>
          <p><strong>Required Actions:</strong></p>
          <ul>
            <li>Implement meaningful human review process</li>
            <li>Provide clear explanations for all automated decisions</li>
            <li>Enable data subject rights (rectification, erasure)</li>
          </ul>

          <h3>3.3 EU AI Act (High-Risk AI Systems)</h3>
          <div class="warning">
            <strong>Status: PARTIALLY COMPLIANT</strong><br>
            Credit scoring systems are classified as high-risk. Additional requirements apply.
          </div>
          <p><strong>Required Actions:</strong></p>
          <ul>
            <li>Establish quality management system</li>
            <li>Implement continuous monitoring</li>
            <li>Maintain detailed audit logs</li>
            <li>Conduct conformity assessment</li>
          </ul>
        </div>

        <div class="section">
          <h2>4. Explainability Analysis</h2>
          <p>Generated using SAP Joule + Google Gemini integration:</p>

          <h3>Feature Importance Analysis</h3>
          <table>
            <tr><th>Feature</th><th>Importance</th><th>Bias Risk</th><th>Explanation</th></tr>
            <tr><td>Credit History</td><td>34.2%</td><td class="risk-low">Low</td><td>Legitimate business factor</td></tr>
            <tr><td>Income</td><td>28.7%</td><td class="risk-medium">Medium</td><td>May correlate with protected attributes</td></tr>
            <tr><td>Loan Amount</td><td>18.9%</td><td class="risk-low">Low</td><td>Direct business relevance</td></tr>
            <tr><td>Age</td><td>12.1%</td><td class="risk-medium">Medium</td><td>Age discrimination concerns</td></tr>
            <tr><td>Education Level</td><td>6.1%</td><td class="risk-medium">Medium</td><td>Proxy for socioeconomic status</td></tr>
          </table>

          <h3>Decision Explanations</h3>
          <p><strong>Sample Decision Path:</strong></p>
          <div style="background: #f9fafb; padding: 15px; border-left: 4px solid #1e40af; margin: 10px 0;">
            "The loan application was <strong>approved</strong> primarily due to excellent credit history (score: 850) and stable income ($75,000). The applicant's age (35) and education level (Bachelor's) provided additional positive signals. Risk assessment: Low (12% default probability)."
          </div>
        </div>

        <div class="page-break"></div>

        <div class="section">
          <h2>5. Recommendations</h2>

          <h3>Immediate Actions (0-30 days)</h3>
          <div class="alert">
            <strong>CRITICAL:</strong> Do not deploy current model to production
          </div>
          <ul>
            <li>Implement Fairlearn bias mitigation pipeline</li>
            <li>Retrain model with fairness constraints</li>
            <li>Establish human review process for edge cases</li>
            <li>Create audit trail documentation</li>
          </ul>

          <h3>Short-term Actions (1-3 months)</h3>
          <ul>
            <li>Develop comprehensive explainability dashboard</li>
            <li>Implement continuous bias monitoring</li>
            <li>Train staff on fair AI practices</li>
            <li>Establish model governance committee</li>
          </ul>

          <h3>Long-term Actions (3-12 months)</h3>
          <ul>
            <li>Build automated fairness testing pipeline</li>
            <li>Implement A/B testing for fairness metrics</li>
            <li>Develop bias-aware data collection processes</li>
            <li>Create customer feedback mechanisms</li>
          </ul>
        </div>

        <div class="section">
          <h2>6. Monitoring and KPIs</h2>
          <p>Establish ongoing monitoring with the following key performance indicators:</p>

          <table>
            <tr><th>KPI</th><th>Target</th><th>Frequency</th><th>Owner</th></tr>
            <tr><td>Demographic Parity</td><td>≤2%</td><td>Weekly</td><td>Data Science Team</td></tr>
            <tr><td>Equal Opportunity</td><td>≤5%</td><td>Weekly</td><td>Data Science Team</td></tr>
            <tr><td>Model Accuracy</td><td>≥90%</td><td>Daily</td><td>ML Engineering</td></tr>
            <tr><td>Explanation Quality</td><td>≥4.0/5.0</td><td>Monthly</td><td>UX Research</td></tr>
            <tr><td>Audit Compliance</td><td>100%</td><td>Quarterly</td><td>Compliance Team</td></tr>
          </table>

          <h3>Escalation Procedures</h3>
          <ul>
            <li><strong>Level 1:</strong> Automated alerts for threshold breaches</li>
            <li><strong>Level 2:</strong> Data Science team investigation within 24 hours</li>
            <li><strong>Level 3:</strong> Executive review for persistent issues</li>
            <li><strong>Level 4:</strong> External audit for regulatory violations</li>
          </ul>
        </div>

        <div class="page-break"></div>

        <div class="section">
          <h2>7. Technical Appendix</h2>

          <h3>Algorithm Configuration</h3>
          <pre style="background: #f3f4f6; padding: 15px; border-radius: 5px; overflow-x: auto;">
DoWhy Configuration:
- Treatment: gender (binary: 0=male, 1=female)
- Outcome: loan_status (binary: 0=denied, 1=approved)
- Confounders: [age, income, credit_history, education]
- Method: backdoor.linear_regression
- Bootstrap samples: 1000

Fairlearn Configuration:
- Constraint: DemographicParity()
- Estimator: LogisticRegression()
- Epsilon: 0.02
- Max iterations: 50
- Learning rate: 0.01
          </pre>

          <h3>Data Statistics</h3>
          <table>
            <tr><th>Metric</th><th>Value</th></tr>
            <tr><td>Total Records</td><td>10,000</td></tr>
            <tr><td>Training Set</td><td>7,000 (70%)</td></tr>
            <tr><td>Validation Set</td><td>1,500 (15%)</td></tr>
            <tr><td>Test Set</td><td>1,500 (15%)</td></tr>
            <tr><td>Missing Values</td><td>0.3%</td></tr>
            <tr><td>Class Balance</td><td>62% approved, 38% denied</td></tr>
          </table>

          <h3>Model Performance</h3>
          <table>
            <tr><th>Metric</th><th>Original Model</th><th>Bias-Mitigated Model</th></tr>
            <tr><td>Accuracy</td><td>92.4%</td><td>90.1%</td></tr>
            <tr><td>Precision</td><td>89.7%</td><td>88.2%</td></tr>
            <tr><td>Recall</td><td>94.1%</td><td>91.8%</td></tr>
            <tr><td>F1-Score</td><td>91.8%</td><td>89.9%</td></tr>
            <tr><td>AUC-ROC</td><td>0.956</td><td>0.943</td></tr>
          </table>
        </div>

        <div class="section">
          <h2>Contact Information</h2>
          <p><strong>Report Prepared By:</strong> Ethical AI Auditor Team</p>
          <p><strong>Lead Auditor:</strong> Dr. Sarah Chen, PhD in AI Ethics</p>
          <p><strong>Technical Lead:</strong> Marcus Rodriguez, Senior ML Engineer</p>
          <p><strong>Compliance Officer:</strong> Jennifer Liu, JD, Privacy Law</p>
          <p><strong>Contact:</strong> audit-team@company.com | +1 (555) 123-4567</p>
          
          <div style="margin-top: 30px; padding: 15px; background: #f9fafb; border-radius: 5px;">
            <p style="margin: 0; font-size: 10px; color: #6b7280;">
              <strong>Confidentiality Notice:</strong> This report contains confidential and proprietary information. 
              Distribution is restricted to authorized personnel only. Any unauthorized disclosure is prohibited 
              and may result in legal action.
            </p>
          </div>
        </div>
      </body>
      </html>
    `

    printWindow.document.write(reportHTML)
    printWindow.document.close()
    
    // Trigger print dialog
    setTimeout(() => {
      printWindow.print()
    }, 500)
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-2xl font-bold">Compliance Report</h3>
          <p className="text-muted-foreground">Comprehensive audit results and recommendations</p>
        </div>
        <Button onClick={generatePDF} className="gap-2">
          <Download className="h-4 w-4" />
          Download PDF Report
        </Button>
      </div>

      <div id="pdf-content" className="space-y-6">
        {/* Executive Summary */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <AlertTriangle className="h-5 w-5 text-red-500" />
              Executive Summary
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-4">
              <div className="flex items-center gap-2 mb-2">
                <XCircle className="h-5 w-5 text-red-500" />
                <span className="font-semibold text-red-800">NON-COMPLIANT</span>
              </div>
              <p className="text-red-700">
                Significant bias detected in the AI model. Immediate action required to meet regulatory standards.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-semibold mb-2">Risk Assessment</h4>
                <Badge variant="destructive">HIGH RISK</Badge>
                <p className="text-sm text-muted-foreground mt-1">
                  Total exposure: $30M - $207M in potential fines
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Key Findings</h4>
                <ul className="text-sm space-y-1">
                  <li>• Gender bias: 25.98% causal effect</li>
                  <li>• Demographic parity: 7.6% difference</li>
                  <li>• EEOC compliance: Failed</li>
                  <li>• GDPR Article 22: Non-compliant</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* DoWhy Analysis */}
        <Card>
          <CardHeader>
            <CardTitle>DoWhy Causal Analysis</CardTitle>
            <CardDescription>Bias detection using causal inference</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-gray-300">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="border border-gray-300 px-4 py-2 text-left">Method</th>
                    <th className="border border-gray-300 px-4 py-2 text-center">Estimate</th>
                    <th className="border border-gray-300 px-4 py-2 text-center">Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">Linear Regression</td>
                    <td className="border border-gray-300 px-4 py-2 text-center">-25.98%</td>
                    <td className="border border-gray-300 px-4 py-2 text-center">
                      <Badge variant="destructive">FAIL</Badge>
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">Logistic Regression</td>
                    <td className="border border-gray-300 px-4 py-2 text-center">-16.02%</td>
                    <td className="border border-gray-300 px-4 py-2 text-center">
                      <Badge variant="destructive">FAIL</Badge>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mt-4">
              <p className="text-amber-800 text-sm">
                <strong>Interpretation:</strong> Negative estimates indicate systematic discrimination against female applicants.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Fairlearn Results */}
        <Card>
          <CardHeader>
            <CardTitle>Fairlearn Bias Mitigation</CardTitle>
            <CardDescription>Before and after bias correction</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-3">Before Mitigation</h4>
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Demographic Parity</span>
                    <Badge variant="destructive">7.6%</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Equalized Odds</span>
                    <Badge variant="destructive">12.3%</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Equal Opportunity</span>
                    <Badge variant="destructive">9.8%</Badge>
                  </div>
                </div>
              </div>
              <div>
                <h4 className="font-semibold mb-3">After Mitigation</h4>
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Demographic Parity</span>
                    <Badge variant="secondary">0.8%</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Equalized Odds</span>
                    <Badge variant="secondary">2.1%</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Equal Opportunity</span>
                    <Badge variant="secondary">1.4%</Badge>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-green-50 border border-green-200 rounded-lg p-4 mt-4">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-green-500" />
                <span className="font-semibold text-green-800">Mitigation Successful</span>
              </div>
              <p className="text-green-700 text-sm mt-1">
                Bias reduced by 6.8% while maintaining 94.2% of original accuracy.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Regulatory Compliance */}
        <Card>
          <CardHeader>
            <CardTitle>Regulatory Compliance Status</CardTitle>
            <CardDescription>Assessment against major regulations</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-3 border rounded-lg">
                <div>
                  <h4 className="font-semibold">EEOC Compliance</h4>
                  <p className="text-sm text-muted-foreground">Equal Employment Opportunity</p>
                </div>
                <Badge variant="destructive">NON-COMPLIANT</Badge>
              </div>
              <div className="flex items-center justify-between p-3 border rounded-lg">
                <div>
                  <h4 className="font-semibold">GDPR Article 22</h4>
                  <p className="text-sm text-muted-foreground">Automated Decision-Making</p>
                </div>
                <Badge variant="destructive">NON-COMPLIANT</Badge>
              </div>
              <div className="flex items-center justify-between p-3 border rounded-lg">
                <div>
                  <h4 className="font-semibold">EU AI Act</h4>
                  <p className="text-sm text-muted-foreground">High-Risk AI Systems</p>
                </div>
                <Badge variant="outline">PARTIALLY COMPLIANT</Badge>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Recommendations */}
        <Card>
          <CardHeader>
            <CardTitle>Recommendations</CardTitle>
            <CardDescription>Action plan for compliance</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-red-600 mb-2">Immediate Actions (0-30 days)</h4>
                <ul className="text-sm space-y-1 ml-4">
                  <li>• Do not deploy current model to production</li>
                  <li>• Implement Fairlearn bias mitigation</li>
                  <li>• Establish human review process</li>
                  <li>• Create audit documentation</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-amber-600 mb-2">Short-term Actions (1-3 months)</h4>
                <ul className="text-sm space-y-1 ml-4">
                  <li>• Develop explainability dashboard</li>
                  <li>• Implement continuous monitoring</li>
                  <li>• Train staff on fair AI practices</li>
                  <li>• Establish governance committee</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-green-600 mb-2">Long-term Actions (3-12 months)</h4>
                <ul className="text-sm space-y-1 ml-4">
                  <li>• Build automated testing pipeline</li>
                  <li>• Implement A/B testing for fairness</li>
                  <li>• Develop bias-aware data collection</li>
                  <li>• Create customer feedback systems</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
