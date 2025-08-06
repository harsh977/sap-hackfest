"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Download, FileText, AlertTriangle, CheckCircle2, XCircle } from 'lucide-react'

interface ComplianceReportProps {
  onDownload: () => void
}

export function ComplianceReport({ onDownload }: ComplianceReportProps) {
  const reportData = {
    model: "hiring_model_v1",
    version: "1.0",
    generatedOn: new Date().toLocaleString(),
    recordCount: 1000,
    disparateImpactRatio: 0.717,
    statisticalParityDifference: -0.170,
    equalOpportunityDifference: 0.032,
    accuracyScore: 0.760,
    f1Score: 0.419
  }

  const generatePDF = () => {
    // Create a new window for PDF generation
    const printWindow = window.open('', '_blank')
    if (!printWindow) return

    const htmlContent = `
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Ethical AI Auditor - Compliance Report</title>
    <style>
        @page {
            margin: 1in;
            size: A4;
        }
        
        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            line-height: 1.6;
            color: #333;
            max-width: 100%;
            margin: 0;
            padding: 0;
        }
        
        .header {
            text-align: center;
            border-bottom: 3px solid #2563eb;
            padding-bottom: 20px;
            margin-bottom: 30px;
        }
        
        .header h1 {
            color: #1e40af;
            font-size: 28px;
            margin: 0;
            font-weight: bold;
        }
        
        .header h2 {
            color: #64748b;
            font-size: 18px;
            margin: 5px 0 0 0;
            font-weight: normal;
        }
        
        .executive-summary {
            background: #fee2e2;
            border: 2px solid #dc2626;
            border-radius: 8px;
            padding: 20px;
            margin: 20px 0;
        }
        
        .non-compliant {
            color: #dc2626;
            font-weight: bold;
            font-size: 18px;
        }
        
        .section {
            margin: 30px 0;
            page-break-inside: avoid;
        }
        
        .section h2 {
            color: #1e40af;
            border-bottom: 2px solid #e5e7eb;
            padding-bottom: 10px;
            font-size: 20px;
        }
        
        .section h3 {
            color: #374151;
            font-size: 16px;
            margin-top: 25px;
        }
        
        .metrics-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 20px;
            margin: 20px 0;
        }
        
        .metric-card {
            border: 1px solid #d1d5db;
            border-radius: 8px;
            padding: 15px;
            background: #f9fafb;
        }
        
        .metric-label {
            font-weight: bold;
            color: #374151;
        }
        
        .metric-value {
            font-family: 'Courier New', monospace;
            font-size: 18px;
            margin: 5px 0;
        }
        
        .metric-status {
            font-size: 12px;
            font-weight: bold;
        }
        
        .non-compliant-value {
            color: #dc2626;
        }
        
        .compliant-value {
            color: #059669;
        }
        
        .warning-value {
            color: #d97706;
        }
        
        .compliance-grid {
            display: grid;
            grid-template-columns: 1fr 1fr 1fr;
            gap: 15px;
            margin: 20px 0;
        }
        
        .compliance-card {
            border: 2px solid #dc2626;
            border-radius: 8px;
            padding: 15px;
            background: #fee2e2;
            text-align: center;
        }
        
        .table {
            width: 100%;
            border-collapse: collapse;
            margin: 20px 0;
        }
        
        .table th,
        .table td {
            border: 1px solid #d1d5db;
            padding: 12px;
            text-align: left;
        }
        
        .table th {
            background: #f3f4f6;
            font-weight: bold;
        }
        
        .recommendations {
            background: #fef3c7;
            border: 2px solid #f59e0b;
            border-radius: 8px;
            padding: 20px;
            margin: 20px 0;
        }
        
        .recommendation-item {
            margin: 15px 0;
            padding: 10px;
            background: white;
            border-radius: 5px;
            border-left: 4px solid #f59e0b;
        }
        
        .page-break {
            page-break-before: always;
        }
        
        .footer {
            margin-top: 50px;
            padding-top: 20px;
            border-top: 2px solid #e5e7eb;
            text-align: center;
            color: #6b7280;
            font-size: 12px;
        }
        
        .risk-high {
            background: #fee2e2;
            color: #dc2626;
            padding: 2px 8px;
            border-radius: 4px;
            font-weight: bold;
        }
        
        .code-block {
            background: #f3f4f6;
            border: 1px solid #d1d5db;
            border-radius: 4px;
            padding: 15px;
            font-family: 'Courier New', monospace;
            font-size: 12px;
            margin: 10px 0;
        }
    </style>
</head>
<body>
    <div class="header">
        <h1>ETHICAL AI AUDITOR</h1>
        <h2>Comprehensive Compliance & Audit Report</h2>
        <div style="margin-top: 20px;">
            <strong>Model:</strong> ${reportData.model} | 
            <strong>Version:</strong> ${reportData.version} | 
            <strong>Generated:</strong> ${reportData.generatedOn}
        </div>
    </div>

    <div class="executive-summary">
        <h2 style="margin-top: 0;">EXECUTIVE SUMMARY</h2>
        <div class="non-compliant">⚠️ NON-COMPLIANT - HIGH RISK</div>
        <p><strong>Risk Score:</strong> 92/100</p>
        <p><strong>Records Analyzed:</strong> ${reportData.recordCount.toLocaleString()}</p>
        <p>This comprehensive audit reveals significant bias in the hiring model, with a disparate impact ratio of ${reportData.disparateImpactRatio}, falling below the legally required 0.8 threshold. <strong>Immediate remediation is required</strong> to ensure regulatory compliance and mitigate legal risks.</p>
    </div>

    <div class="section">
        <h2>1. BIAS DETECTION RESULTS (DoWhy Causal Analysis)</h2>
        
        <h3>1.1 Causal Inference Analysis</h3>
        <p>Our DoWhy algorithm performed comprehensive causal analysis to identify true bias versus spurious correlations:</p>
        
        <div class="metrics-grid">
            <div class="metric-card">
                <div class="metric-label">Causal Effect (Linear Regression)</div>
                <div class="metric-value non-compliant-value">-25.98% gender penalty</div>
            </div>
            <div class="metric-card">
                <div class="metric-label">Causal Effect (Logistic Regression)</div>
                <div class="metric-value non-compliant-value">-16.02% gender penalty</div>
            </div>
            <div class="metric-card">
                <div class="metric-label">Male Approval Rate</div>
                <div class="metric-value">39.0%</div>
            </div>
            <div class="metric-card">
                <div class="metric-label">Female Approval Rate</div>
                <div class="metric-value non-compliant-value">12.9%</div>
            </div>
        </div>

        <h3>1.2 Conditional Bias Analysis</h3>
        <table class="table">
            <thead>
                <tr>
                    <th>Age Group</th>
                    <th>Education Level</th>
                    <th>Gender Penalty</th>
                    <th>Severity</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>21-33</td>
                    <td>High School</td>
                    <td class="non-compliant-value">-29.6%</td>
                    <td><span class="risk-high">CRITICAL</span></td>
                </tr>
                <tr>
                    <td>21-33</td>
                    <td>Bachelor</td>
                    <td class="non-compliant-value">-25.1%</td>
                    <td><span class="risk-high">HIGH</span></td>
                </tr>
                <tr>
                    <td>33-42</td>
                    <td>High School</td>
                    <td class="non-compliant-value">-28.6%</td>
                    <td><span class="risk-high">CRITICAL</span></td>
                </tr>
                <tr>
                    <td>61-73</td>
                    <td>Graduate</td>
                    <td class="non-compliant-value">-18.1%</td>
                    <td><span class="risk-high">HIGH</span></td>
                </tr>
            </tbody>
        </table>

        <h3>1.3 FairML Metrics</h3>
        <div class="metrics-grid">
            <div class="metric-card">
                <div class="metric-label">Disparate Impact Ratio</div>
                <div class="metric-value non-compliant-value">${reportData.disparateImpactRatio}</div>
                <div class="metric-status non-compliant-value">NON-COMPLIANT (< 0.8)</div>
            </div>
            <div class="metric-card">
                <div class="metric-label">Statistical Parity Difference</div>
                <div class="metric-value non-compliant-value">${reportData.statisticalParityDifference}</div>
                <div class="metric-status non-compliant-value">BIASED</div>
            </div>
        </div>
    </div>

    <div class="section page-break">
        <h2>2. BIAS MITIGATION RESULTS (Fairlearn Implementation)</h2>
        
        <h3>2.1 Pre-Mitigation Performance</h3>
        <div class="metrics-grid">
            <div class="metric-card">
                <div class="metric-label">Accuracy</div>
                <div class="metric-value">${(reportData.accuracyScore * 100).toFixed(1)}%</div>
            </div>
            <div class="metric-card">
                <div class="metric-label">F1 Score</div>
                <div class="metric-value">${(reportData.f1Score * 100).toFixed(1)}%</div>
            </div>
            <div class="metric-card">
                <div class="metric-label">Demographic Parity Difference</div>
                <div class="metric-value non-compliant-value">7.6%</div>
            </div>
            <div class="metric-card">
                <div class="metric-label">Equalized Odds Difference</div>
                <div class="metric-value warning-value">3.2%</div>
            </div>
        </div>

        <h3>2.2 Post-Mitigation Results (ExponentiatedGradient)</h3>
        <div class="metrics-grid">
            <div class="metric-card">
                <div class="metric-label">Accuracy</div>
                <div class="metric-value">72.3% (↓3.7%)</div>
            </div>
            <div class="metric-card">
                <div class="metric-label">F1 Score</div>
                <div class="metric-value">26.5% (↓15.4%)</div>
            </div>
            <div class="metric-card">
                <div class="metric-label">Demographic Parity Difference</div>
                <div class="metric-value compliant-value">0.8% (↓6.8%)</div>
            </div>
            <div class="metric-card">
                <div class="metric-label">Equalized Odds Difference</div>
                <div class="metric-value warning-value">7.0% (↑3.8%)</div>
            </div>
        </div>

        <div style="background: #dcfce7; border: 2px solid #16a34a; border-radius: 8px; padding: 15px; margin: 20px 0;">
            <strong>✅ Mitigation Success:</strong> ExponentiatedGradient achieved a 6.8% improvement in demographic parity with only a 3.7% accuracy reduction, representing a positive fairness-performance trade-off.
        </div>
    </div>

    <div class="section page-break">
        <h2>3. REGULATORY COMPLIANCE ASSESSMENT</h2>
        
        <div class="compliance-grid">
            <div class="compliance-card">
                <h3>EEOC</h3>
                <div class="non-compliant">NON-COMPLIANT</div>
                <p><strong>80% Rule Violation</strong></p>
                <p>DI: ${reportData.disparateImpactRatio} < 0.8</p>
                <p><strong>Risk:</strong> $300K-$2M penalties</p>
            </div>
            <div class="compliance-card">
                <h3>GDPR</h3>
                <div class="non-compliant">NON-COMPLIANT</div>
                <p><strong>Article 22 Violation</strong></p>
                <p>Discriminatory Processing</p>
                <p><strong>Risk:</strong> €5M-€20M fines</p>
            </div>
            <div class="compliance-card">
                <h3>EU AI Act</h3>
                <div class="non-compliant">NON-COMPLIANT</div>
                <p><strong>High-Risk AI</strong></p>
                <p>Bias Threshold Exceeded</p>
                <p><strong>Risk:</strong> €10M-€35M fines</p>
            </div>
        </div>

        <div style="background: #fee2e2; border: 2px solid #dc2626; border-radius: 8px; padding: 20px; margin: 20px 0;">
            <h3 style="color: #dc2626; margin-top: 0;">⚠️ TOTAL ESTIMATED RISK EXPOSURE: $30M - $207M</h3>
            <p>This includes potential lawsuits, regulatory fines, reputational damage, and operational disruption costs.</p>
        </div>
    </div>

    <div class="section page-break">
        <h2>4. EXPLAINABILITY ANALYSIS (Joule + Gemini LLM)</h2>
        
        <h3>4.1 Model Decision Factors</h3>
        <table class="table">
            <thead>
                <tr>
                    <th>Feature</th>
                    <th>Impact</th>
                    <th>Bias Risk</th>
                    <th>Legitimacy</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Gender (Direct)</td>
                    <td class="non-compliant-value">-16.02%</td>
                    <td><span class="risk-high">HIGH</span></td>
                    <td class="non-compliant-value">ILLEGAL</td>
                </tr>
                <tr>
                    <td>Age × Gender</td>
                    <td class="non-compliant-value">-8.92%</td>
                    <td><span class="risk-high">HIGH</span></td>
                    <td class="non-compliant-value">DISCRIMINATORY</td>
                </tr>
                <tr>
                    <td>Education × Gender</td>
                    <td class="non-compliant-value">-6.54%</td>
                    <td class="warning-value">MEDIUM</td>
                    <td class="non-compliant-value">BIASED</td>
                </tr>
                <tr>
                    <td>Years of Experience</td>
                    <td class="compliant-value">+12.34%</td>
                    <td class="compliant-value">LOW</td>
                    <td class="compliant-value">LEGITIMATE</td>
                </tr>
                <tr>
                    <td>Technical Skills</td>
                    <td class="compliant-value">+9.87%</td>
                    <td class="compliant-value">LOW</td>
                    <td class="compliant-value">LEGITIMATE</td>
                </tr>
            </tbody>
        </table>

        <h3>4.2 Sample Decision Explanation</h3>
        <div class="code-block">
"Candidate #4872 was rejected primarily due to gender bias in the model. Despite having comparable qualifications (7 years experience, Bachelor's degree, strong technical skills), the model applied a -16.02% penalty for being female. This decision violates EEOC guidelines and exposes the organization to discrimination lawsuits."
        </div>

        <h3>4.3 Counterfactual Analysis</h3>
        <p>If the rejected female candidate had been male with identical qualifications:</p>
        <ul>
            <li><strong>Original Prediction:</strong> 0.38 (REJECT)</li>
            <li><strong>Counterfactual Prediction:</strong> 0.54 (ACCEPT)</li>
            <li><strong>Decision Change:</strong> YES - Would have been approved</li>
            <li><strong>Bias Impact:</strong> 16% probability increase</li>
        </ul>
    </div>

    <div class="section page-break">
        <h2>5. CRITICAL RECOMMENDATIONS & REMEDIATION PLAN</h2>
        
        <div class="recommendations">
            <h3>IMMEDIATE ACTIONS (0-30 days)</h3>
            
            <div class="recommendation-item">
                <strong>1. Suspend Model Deployment</strong>
                <ul>
                    <li>Immediately halt automated hiring decisions</li>
                    <li>Implement manual review for all pending applications</li>
                    <li>Notify legal and compliance teams</li>
                </ul>
            </div>

            <div class="recommendation-item">
                <strong>2. Bias Mitigation Implementation</strong>
                <ul>
                    <li>Deploy ExponentiatedGradient fairness constraints</li>
                    <li>Retrain model with balanced synthetic data</li>
                    <li>Implement threshold optimization for fairness</li>
                </ul>
            </div>

            <div class="recommendation-item">
                <strong>3. Legal Compliance Measures</strong>
                <ul>
                    <li>Conduct impact assessment for affected candidates</li>
                    <li>Prepare documentation for regulatory inquiries</li>
                    <li>Review and update hiring policies</li>
                </ul>
            </div>
        </div>

        <h3>SHORT-TERM IMPROVEMENTS (1-3 months)</h3>
        <ul>
            <li><strong>Model Retraining:</strong> Remove gender and gender-correlated features</li>
            <li><strong>Process Enhancement:</strong> Establish bias monitoring dashboards</li>
            <li><strong>Training and Awareness:</strong> Train HR teams on algorithmic bias</li>
        </ul>

        <h3>LONG-TERM STRATEGY (3-12 months)</h3>
        <ul>
            <li><strong>Comprehensive AI Governance:</strong> Develop enterprise AI ethics framework</li>
            <li><strong>Technology Upgrades:</strong> Deploy real-time bias detection</li>
            <li><strong>Organizational Changes:</strong> Hire AI ethics specialists</li>
        </ul>
    </div>

    <div class="section page-break">
        <h2>6. MONITORING & CONTINUOUS IMPROVEMENT</h2>
        
        <h3>6.1 Key Performance Indicators (KPIs)</h3>
        <table class="table">
            <thead>
                <tr>
                    <th>Metric</th>
                    <th>Current Value</th>
                    <th>Target Value</th>
                    <th>Status</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Disparate Impact Ratio</td>
                    <td class="non-compliant-value">${reportData.disparateImpactRatio}</td>
                    <td>≥ 0.8</td>
                    <td class="non-compliant-value">NON-COMPLIANT</td>
                </tr>
                <tr>
                    <td>Statistical Parity Difference</td>
                    <td class="non-compliant-value">${Math.abs(reportData.statisticalParityDifference)}</td>
                    <td>≤ 0.05</td>
                    <td class="non-compliant-value">NON-COMPLIANT</td>
                </tr>
                <tr>
                    <td>Equal Opportunity Difference</td>
                    <td class="warning-value">${reportData.equalOpportunityDifference}</td>
                    <td>≤ 0.05</td>
                    <td class="warning-value">MODERATE</td>
                </tr>
                <tr>
                    <td>Model Accuracy</td>
                    <td>${(reportData.accuracyScore * 100).toFixed(1)}%</td>
                    <td>≥ 70%</td>
                    <td class="compliant-value">COMPLIANT</td>
                </tr>
            </tbody>
        </table>

        <h3>6.2 Monitoring Schedule</h3>
        <ul>
            <li><strong>Daily:</strong> Automated bias detection alerts</li>
            <li><strong>Weekly:</strong> Fairness metrics dashboard review</li>
            <li><strong>Monthly:</strong> Comprehensive bias audit</li>
            <li><strong>Quarterly:</strong> Regulatory compliance assessment</li>
            <li><strong>Annually:</strong> Full model revalidation</li>
        </ul>

        <h3>6.3 Escalation Procedures</h3>
        <ul>
            <li><strong>Yellow Alert (Minor Bias):</strong> Notify model owner</li>
            <li><strong>Orange Alert (Moderate Bias):</strong> Escalate to compliance team</li>
            <li><strong>Red Alert (Severe Bias):</strong> Immediate model suspension</li>
        </ul>
    </div>

    <div class="section">
        <h2>7. CONCLUSION & NEXT STEPS</h2>
        
        <p>The hiring_model_v1 demonstrates <strong>significant gender bias</strong> that violates multiple regulatory frameworks and exposes the organization to substantial legal and financial risks. The disparate impact ratio of ${reportData.disparateImpactRatio} falls well below the required 0.8 threshold, indicating systematic discrimination against female candidates.</p>

        <div style="background: #fee2e2; border: 2px solid #dc2626; border-radius: 8px; padding: 20px; margin: 20px 0;">
            <h3 style="color: #dc2626; margin-top: 0;">CRITICAL ACTIONS REQUIRED:</h3>
            <ol>
                <li>Immediate model suspension and manual review implementation</li>
                <li>Deployment of Fairlearn bias mitigation techniques</li>
                <li>Comprehensive retraining with fairness constraints</li>
                <li>Legal review and compliance documentation</li>
                <li>Establishment of ongoing monitoring systems</li>
            </ol>
        </div>

        <h3>Success Metrics:</h3>
        <ul>
            <li>Achieve disparate impact ratio ≥ 0.8</li>
            <li>Reduce statistical parity difference to ≤ 0.05</li>
            <li>Maintain model accuracy ≥ 70%</li>
            <li>Ensure full regulatory compliance</li>
        </ul>

        <p><strong>Timeline:</strong> 90 days for full remediation and compliance</p>
    </div>

    <div class="section">
        <h2>APPENDIX A: TECHNICAL SPECIFICATIONS</h2>
        
        <h3>DoWhy Configuration:</h3>
        <div class="code-block">
Causal Graph: gender → loan_status
Confounders: age, education, income, credit_history
Estimation Methods: Linear Regression, Logistic Regression
Robustness Tests: Placebo treatment, data subset validation
        </div>

        <h3>Fairlearn Configuration:</h3>
        <div class="code-block">
Algorithm: ExponentiatedGradient
Fairness Constraint: DemographicParity
Protected Attribute: gender
Optimization: GridSearch with 10-fold CV
        </div>

        <h3>Evaluation Metrics:</h3>
        <div class="code-block">
Disparate Impact (DI) = P(Y=1|A=0) / P(Y=1|A=1)
Statistical Parity Difference (SPD) = P(Y=1|A=1) - P(Y=1|A=0)
Equal Opportunity Difference (EOD) = TPR_A1 - TPR_A0
        </div>
    </div>

    <div class="footer">
        <p><strong>Report Generated by:</strong> Ethical AI Auditor v2.0</p>
        <p><strong>SAP Hackfest 2025 | Team: CodeHers</strong></p>
        <p><strong>Contact:</strong> ayush.bharadwaj@sap.com | harsh.daftari@sap.com | nikhil.singh@sap.com | yash.singh@sap.com</p>
        <p style="margin-top: 20px; font-style: italic;">This report contains confidential and proprietary information. Distribution should be limited to authorized personnel only.</p>
    </div>
</body>
</html>
    `

    printWindow.document.write(htmlContent)
    printWindow.document.close()
    
    // Wait for content to load, then trigger print dialog
    setTimeout(() => {
      printWindow.print()
      printWindow.close()
    }, 1000)
  }

  return (
    <div className="space-y-6">
      <Card className="border-0 shadow-lg">
        <CardHeader className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950/20 dark:to-purple-950/20">
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="flex items-center gap-2">
                <FileText className="h-5 w-5" />
                Comprehensive Compliance Report
              </CardTitle>
              <CardDescription>
                Detailed audit results with regulatory compliance assessment
              </CardDescription>
            </div>
            <Button onClick={generatePDF} className="gap-2">
              <Download className="h-4 w-4" />
              Download PDF Report
            </Button>
          </div>
        </CardHeader>
        <CardContent className="p-6">
          {/* Rest of the component remains the same */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Executive Summary */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Executive Summary</h3>
              <div className="p-4 bg-red-50 dark:bg-red-950/20 rounded-lg border border-red-200 dark:border-red-800">
                <div className="flex items-center gap-2 mb-2">
                  <XCircle className="h-5 w-5 text-red-500" />
                  <span className="font-semibold text-red-800 dark:text-red-200">NON-COMPLIANT</span>
                </div>
                <p className="text-sm text-red-700 dark:text-red-300">
                  Model shows significant gender bias with disparate impact ratio of {reportData.disparateImpactRatio}, 
                  violating EEOC, GDPR, and EU AI Act requirements.
                </p>
              </div>
              
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Model:</span>
                  <span className="text-sm font-mono">{reportData.model}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Version:</span>
                  <span className="text-sm font-mono">{reportData.version}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Records Analyzed:</span>
                  <span className="text-sm font-mono">{reportData.recordCount.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Risk Score:</span>
                  <span className="text-sm font-mono text-red-600">92/100 (HIGH)</span>
                </div>
              </div>
            </div>

            {/* Key Metrics */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Key Bias Metrics</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                  <div>
                    <div className="font-medium">Disparate Impact Ratio</div>
                    <div className="text-xs text-muted-foreground">EEOC 80% Rule</div>
                  </div>
                  <div className="text-right">
                    <div className="font-mono text-red-600">{reportData.disparateImpactRatio}</div>
                    <div className="text-xs text-red-600">NON-COMPLIANT</div>
                  </div>
                </div>
                
                <div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                  <div>
                    <div className="font-medium">Statistical Parity Diff</div>
                    <div className="text-xs text-muted-foreground">Gender Gap</div>
                  </div>
                  <div className="text-right">
                    <div className="font-mono text-red-600">{reportData.statisticalParityDifference}</div>
                    <div className="text-xs text-red-600">BIASED</div>
                  </div>
                </div>
                
                <div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                  <div>
                    <div className="font-medium">Equal Opportunity Diff</div>
                    <div className="text-xs text-muted-foreground">TPR Difference</div>
                  </div>
                  <div className="text-right">
                    <div className="font-mono text-amber-600">{reportData.equalOpportunityDifference}</div>
                    <div className="text-xs text-amber-600">MODERATE</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Regulatory Compliance */}
          <div className="mt-6 space-y-4">
            <h3 className="text-lg font-semibold">Regulatory Compliance Status</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 border rounded-lg bg-red-50 dark:bg-red-950/20 border-red-200 dark:border-red-800">
                <div className="flex items-center gap-2 mb-2">
                  <XCircle className="h-4 w-4 text-red-500" />
                  <span className="font-semibold">EEOC</span>
                </div>
                <div className="text-sm text-red-700 dark:text-red-300">
                  80% Rule Violation<br />
                  DI: {reportData.disparateImpactRatio} &lt; 0.8
                </div>
              </div>
              
              <div className="p-4 border rounded-lg bg-red-50 dark:bg-red-950/20 border-red-200 dark:border-red-800">
                <div className="flex items-center gap-2 mb-2">
                  <XCircle className="h-4 w-4 text-red-500" />
                  <span className="font-semibold">GDPR</span>
                </div>
                <div className="text-sm text-red-700 dark:text-red-300">
                  Article 22 Violation<br />
                  Discriminatory Processing
                </div>
              </div>
              
              <div className="p-4 border rounded-lg bg-red-50 dark:bg-red-950/20 border-red-200 dark:border-red-800">
                <div className="flex items-center gap-2 mb-2">
                  <XCircle className="h-4 w-4 text-red-500" />
                  <span className="font-semibold">EU AI Act</span>
                </div>
                <div className="text-sm text-red-700 dark:text-red-300">
                  High-Risk AI Non-Compliance<br />
                  Bias Threshold Exceeded
                </div>
              </div>
            </div>
          </div>

          {/* Recommendations */}
          <div className="mt-6 space-y-4">
            <h3 className="text-lg font-semibold">Critical Recommendations</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3 p-3 bg-amber-50 dark:bg-amber-950/20 rounded-lg border border-amber-200 dark:border-amber-800">
                <AlertTriangle className="h-5 w-5 text-amber-500 mt-0.5" />
                <div>
                  <div className="font-medium text-amber-800 dark:text-amber-200">Immediate Model Suspension</div>
                  <div className="text-sm text-amber-700 dark:text-amber-300">
                    Halt automated hiring decisions and implement manual review process
                  </div>
                </div>
              </div>
              
              <div className="flex items-start gap-3 p-3 bg-blue-50 dark:bg-blue-950/20 rounded-lg border border-blue-200 dark:border-blue-800">
                <CheckCircle2 className="h-5 w-5 text-blue-500 mt-0.5" />
                <div>
                  <div className="font-medium text-blue-800 dark:text-blue-200">Deploy Fairlearn Mitigation</div>
                  <div className="text-sm text-blue-700 dark:text-blue-300">
                    Implement ExponentiatedGradient with fairness constraints to reduce bias by 6.8%
                  </div>
                </div>
              </div>
              
              <div className="flex items-start gap-3 p-3 bg-green-50 dark:bg-green-950/20 rounded-lg border border-green-200 dark:border-green-800">
                <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5" />
                <div>
                  <div className="font-medium text-green-800 dark:text-green-200">Continuous Monitoring</div>
                  <div className="text-sm text-green-700 dark:text-green-300">
                    Establish real-time bias detection and automated compliance reporting
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
