"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Download, AlertTriangle, CheckCircle, XCircle, Info } from 'lucide-react'

interface ComplianceReportProps {
  onDownload: () => void
  datasetType?: 'biased' | 'unbiased'
}

export function ComplianceReport({ onDownload, datasetType = 'biased' }: ComplianceReportProps) {
  const getReportData = () => {
    if (datasetType === 'biased') {
      return {
        overallRisk: 'HIGH RISK',
        riskColor: 'text-red-600',
        riskBg: 'bg-red-50 border-red-200',
        statusIcon: XCircle,
        statusText: 'NON-COMPLIANT',
        statusColor: 'text-red-800',
        exposure: '$30M - $207M',
        keyFindings: [
          'Gender bias detected with 25.98% causal effect on loan approvals',
          'Demographic parity difference of 26.1% exceeds acceptable thresholds',
          'Model fails EEOC compliance standards for fair lending',
          'GDPR Article 22 requirements not met for automated decision-making'
        ],
        causalMethods: [
          { method: 'Linear Regression (Backdoor)', estimate: '-25.98%', status: 'FAIL', color: 'destructive' },
          { method: 'Logistic Regression (Backdoor)', estimate: '-16.02%', status: 'FAIL', color: 'destructive' },
          { method: 'Propensity Score Matching', estimate: '-21.45%', status: 'FAIL', color: 'destructive' }
        ],
        interpretation: 'The negative causal estimates indicate that being female reduces the probability of loan approval by 16-26%, holding all other factors constant. This represents systematic discrimination.',
        beforeMitigation: {
          demographicParity: '26.1%',
          equalizedOdds: '18.7%',
          equalOpportunity: '15.3%'
        },
        afterMitigation: {
          demographicParity: '2.8%',
          equalizedOdds: '4.1%',
          equalOpportunity: '3.2%'
        },
        mitigationSuccess: 'Bias reduced by 23.3% while maintaining 89.4% of original model accuracy.',
        complianceStatus: [
          { name: 'EEOC Compliance', status: 'NON-COMPLIANT', color: 'destructive' },
          { name: 'GDPR Article 22', status: 'NON-COMPLIANT', color: 'destructive' },
          { name: 'EU AI Act', status: 'NON-COMPLIANT', color: 'destructive' }
        ],
        immediateActions: [
          'Do not deploy current model to production',
          'Implement Fairlearn bias mitigation pipeline immediately',
          'Retrain model with demographic parity constraints',
          'Establish mandatory human review for all loan decisions'
        ]
      }
    } else {
      return {
        overallRisk: 'MEDIUM RISK',
        riskColor: 'text-amber-600',
        riskBg: 'bg-amber-50 border-amber-200',
        statusIcon: AlertTriangle,
        statusText: 'PARTIALLY COMPLIANT',
        statusColor: 'text-amber-800',
        exposure: '$5M - $25M',
        keyFindings: [
          'Overall bias appears minimal (+0.66% causal effect)',
          'Hidden intersectional bias detected in subgroups',
          'Young, low-education females face -9.6% discrimination',
          'Older, high-education females receive +34.3% preferential treatment'
        ],
        causalMethods: [
          { method: 'Linear Regression (Backdoor)', estimate: '+0.66%', status: 'PASS', color: 'secondary' },
          { method: 'Intersectional Analysis', estimate: 'Variable', status: 'WARN', color: 'outline' },
          { method: 'Subgroup Fairness Check', estimate: '-9.6% to +34.3%', status: 'FAIL', color: 'destructive' }
        ],
        interpretation: 'While overall metrics appear fair, significant intersectional bias exists. Young, less-educated women face systematic disadvantage, while older, highly-educated women receive preferential treatment.',
        beforeMitigation: {
          demographicParity: '1.3%',
          equalizedOdds: '2.8%',
          equalOpportunity: '1.9%'
        },
        afterMitigation: {
          demographicParity: '0.9%',
          equalizedOdds: '1.4%',
          equalOpportunity: '1.1%'
        },
        mitigationSuccess: 'Subgroup bias reduced by 67% while maintaining 96.8% of original model accuracy.',
        complianceStatus: [
          { name: 'EEOC Compliance', status: 'PARTIALLY COMPLIANT', color: 'outline' },
          { name: 'GDPR Article 22', status: 'COMPLIANT', color: 'secondary' },
          { name: 'EU AI Act', status: 'PARTIALLY COMPLIANT', color: 'outline' }
        ],
        immediateActions: [
          'Implement subgroup monitoring for intersectional fairness',
          'Add age-education interaction constraints to model training',
          'Establish separate approval thresholds for demographic subgroups',
          'Create targeted data collection for underrepresented groups'
        ]
      }
    }
  }

  const reportData = getReportData()
  const StatusIcon = reportData.statusIcon

  const generatePDF = () => {
    // Create a new window with the report content
    const printWindow = window.open('', '_blank')
    if (!printWindow) return

    const reportHTML = `
      <!DOCTYPE html>
      <html>
      <head>
        <title>Ethical AI Audit Report - ${datasetType === 'biased' ? 'Biased' : 'Unbiased'} Dataset</title>
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
          <p style="margin: 5px 0 0 0; opacity: 0.9;">Dataset: ${datasetType === 'biased' ? 'Biased Loan Dataset' : 'Unbiased Loan Dataset'} | Generated on ${new Date().toLocaleDateString()} | Report ID: EAI-${Date.now()}</p>
        </div>

        <div class="section">
          <h2>Executive Summary</h2>
          <div class="${datasetType === 'biased' ? 'alert' : 'warning'}">
            <strong>${datasetType === 'biased' ? '⚠️ NON-COMPLIANT:' : '⚠️ PARTIALLY COMPLIANT:'}</strong> ${datasetType === 'biased' ? 'Significant bias detected in the AI model. Immediate action required to meet regulatory standards.' : 'Hidden intersectional bias detected despite fair overall metrics. Subgroup monitoring required.'}
          </div>
          <p><strong>Overall Risk Assessment:</strong> <span class="${datasetType === 'biased' ? 'risk-high' : 'risk-medium'}">${reportData.overallRisk}</span></p>
          <p><strong>Total Exposure:</strong> ${reportData.exposure} in potential regulatory fines and litigation costs</p>
          <p><strong>Key Findings:</strong></p>
          <ul>
            ${reportData.keyFindings.map(finding => `<li>${finding}</li>`).join('')}
          </ul>
        </div>

        <div class="page-break"></div>

        <div class="section">
          <h2>1. DoWhy Causal Analysis Results</h2>
          <p>Our causal analysis using Microsoft's DoWhy library identified ${datasetType === 'biased' ? 'significant bias' : 'complex intersectional bias patterns'} in the decision-making process:</p>
          
          <table class="metric-table">
            <tr><th>Causal Method</th><th>Estimate</th><th>Status</th></tr>
            ${reportData.causalMethods.map(method => 
              `<tr><td>${method.method}</td><td>${method.estimate}</td><td class="${method.status === 'FAIL' ? 'risk-high' : method.status === 'WARN' ? 'risk-medium' : 'risk-low'}">${method.status}</td></tr>`
            ).join('')}
          </table>

          <div class="${datasetType === 'biased' ? 'warning' : 'success'}">
            <strong>Interpretation:</strong> ${reportData.interpretation}
          </div>
        </div>

        <div class="section">
          <h2>2. Fairlearn Bias Mitigation Analysis</h2>
          <p>Applied Microsoft Fairlearn's ExponentiatedGradient algorithm to assess and mitigate bias:</p>

          <h3>Before Mitigation</h3>
          <table class="metric-table">
            <tr><th>Fairness Metric</th><th>Value</th><th>Threshold</th><th>Status</th></tr>
            <tr><td>Demographic Parity Difference</td><td>${reportData.beforeMitigation.demographicParity}</td><td>≤2%</td><td class="${datasetType === 'biased' ? 'risk-high' : 'risk-medium'}">${datasetType === 'biased' ? 'FAIL' : 'WARN'}</td></tr>
            <tr><td>Equalized Odds Difference</td><td>${reportData.beforeMitigation.equalizedOdds}</td><td>≤5%</td><td class="${datasetType === 'biased' ? 'risk-high' : 'risk-low'}">${datasetType === 'biased' ? 'FAIL' : 'PASS'}</td></tr>
            <tr><td>Equal Opportunity Difference</td><td>${reportData.beforeMitigation.equalOpportunity}</td><td>≤5%</td><td class="${datasetType === 'biased' ? 'risk-high' : 'risk-low'}">${datasetType === 'biased' ? 'FAIL' : 'PASS'}</td></tr>
          </table>

          <h3>After Mitigation</h3>
          <table class="metric-table">
            <tr><th>Fairness Metric</th><th>Value</th><th>Threshold</th><th>Status</th></tr>
            <tr><td>Demographic Parity Difference</td><td>${reportData.afterMitigation.demographicParity}</td><td>≤2%</td><td class="risk-low">PASS</td></tr>
            <tr><td>Equalized Odds Difference</td><td>${reportData.afterMitigation.equalizedOdds}</td><td>≤5%</td><td class="risk-low">PASS</td></tr>
            <tr><td>Equal Opportunity Difference</td><td>${reportData.afterMitigation.equalOpportunity}</td><td>≤5%</td><td class="risk-low">PASS</td></tr>
          </table>

          <div class="success">
            <strong>Mitigation Success:</strong> ${reportData.mitigationSuccess}
          </div>
        </div>

        <div class="page-break"></div>

        <div class="section">
          <h2>3. Regulatory Compliance Assessment</h2>

          ${reportData.complianceStatus.map((compliance, index) => `
            <h3>3.${index + 1} ${compliance.name}</h3>
            <div class="${compliance.status.includes('NON-COMPLIANT') ? 'alert' : compliance.status.includes('PARTIALLY') ? 'warning' : 'success'}">
              <strong>Status: ${compliance.status}</strong><br>
              ${compliance.name === 'EEOC Compliance' ? 
                (datasetType === 'biased' ? 
                  'The model violates EEOC guidelines for fair lending practices. The 4/5ths rule is not met (current ratio: 0.52).' :
                  'The model meets overall EEOC guidelines but fails subgroup analysis. Intersectional bias may violate fair lending practices.'
                ) :
                compliance.name === 'GDPR Article 22' ?
                (datasetType === 'biased' ?
                  'Lacks sufficient explainability and human oversight mechanisms required for automated decisions with legal effects.' :
                  'Meets basic explainability requirements but intersectional bias creates transparency concerns.'
                ) :
                (datasetType === 'biased' ?
                  'Credit scoring systems are classified as high-risk. Current bias levels exceed acceptable thresholds.' :
                  'Meets basic requirements but intersectional bias requires enhanced monitoring and documentation.'
                )
              }
            </div>
          `).join('')}
        </div>

        <div class="section">
          <h2>4. Recommendations</h2>

          <h3>Immediate Actions (0-30 days)</h3>
          <div class="${datasetType === 'biased' ? 'alert' : 'warning'}">
            <strong>${datasetType === 'biased' ? 'CRITICAL:' : 'IMPORTANT:'}</strong> ${datasetType === 'biased' ? 'Do not deploy current model to production' : 'Implement subgroup monitoring before full deployment'}
          </div>
          <ul>
            ${reportData.immediateActions.map(action => `<li>${action}</li>`).join('')}
          </ul>
        </div>

        <div class="section">
          <h2>Contact Information</h2>
          <p><strong>Report Prepared By:</strong> Ethical AI Auditor Team</p>
          <p><strong>Dataset Analyzed:</strong> ${datasetType === 'biased' ? 'Biased Loan Dataset' : 'Unbiased Loan Dataset'}</p>
          <p><strong>Analysis Type:</strong> ${datasetType === 'biased' ? 'Standard Bias Detection' : 'Intersectional Fairness Analysis'}</p>
          <p><strong>Contact:</strong> audit-team@company.com | +1 (555) 123-4567</p>
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
          <p className="text-muted-foreground">
            {datasetType === 'biased' ? 'Severe bias' : 'Intersectional bias'} analysis and regulatory assessment
          </p>
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
              <StatusIcon className={`h-5 w-5 ${datasetType === 'biased' ? 'text-red-500' : 'text-amber-500'}`} />
              Executive Summary
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className={`${reportData.riskBg} border rounded-lg p-4 mb-4`}>
              <div className="flex items-center gap-2 mb-2">
                <StatusIcon className={`h-5 w-5 ${datasetType === 'biased' ? 'text-red-500' : 'text-amber-500'}`} />
                <span className={`font-semibold ${reportData.statusColor}`}>{reportData.statusText}</span>
              </div>
              <p className={reportData.statusColor}>
                {datasetType === 'biased' 
                  ? 'Significant bias detected in the AI model. Immediate action required to meet regulatory standards.'
                  : 'Hidden intersectional bias detected despite fair overall metrics. Subgroup monitoring required.'
                }
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-semibold mb-2">Risk Assessment</h4>
                <Badge variant={datasetType === 'biased' ? 'destructive' : 'outline'}>{reportData.overallRisk}</Badge>
                <p className="text-sm text-muted-foreground mt-1">
                  Total exposure: {reportData.exposure} in potential fines
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Key Findings</h4>
                <ul className="text-sm space-y-1">
                  {reportData.keyFindings.map((finding, index) => (
                    <li key={index}>• {finding}</li>
                  ))}
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* DoWhy Analysis */}
        <Card>
          <CardHeader>
            <CardTitle>DoWhy Causal Analysis</CardTitle>
            <CardDescription>
              {datasetType === 'biased' ? 'Bias detection using causal inference' : 'Intersectional bias analysis using causal methods'}
            </CardDescription>
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
                  {reportData.causalMethods.map((method, index) => (
                    <tr key={index}>
                      <td className="border border-gray-300 px-4 py-2">{method.method}</td>
                      <td className="border border-gray-300 px-4 py-2 text-center">{method.estimate}</td>
                      <td className="border border-gray-300 px-4 py-2 text-center">
                        <Badge variant={method.color as any}>{method.status}</Badge>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className={`${datasetType === 'biased' ? 'bg-amber-50 border-amber-200' : 'bg-blue-50 border-blue-200'} border rounded-lg p-4 mt-4`}>
              <p className={`${datasetType === 'biased' ? 'text-amber-800' : 'text-blue-800'} text-sm`}>
                <strong>Interpretation:</strong> {reportData.interpretation}
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Fairlearn Results */}
        <Card>
          <CardHeader>
            <CardTitle>Fairlearn Bias Mitigation</CardTitle>
            <CardDescription>Before and after bias correction results</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-3">Before Mitigation</h4>
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Demographic Parity</span>
                    <Badge variant={datasetType === 'biased' ? 'destructive' : 'outline'}>
                      {reportData.beforeMitigation.demographicParity}
                    </Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Equalized Odds</span>
                    <Badge variant={datasetType === 'biased' ? 'destructive' : 'secondary'}>
                      {reportData.beforeMitigation.equalizedOdds}
                    </Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Equal Opportunity</span>
                    <Badge variant={datasetType === 'biased' ? 'destructive' : 'secondary'}>
                      {reportData.beforeMitigation.equalOpportunity}
                    </Badge>
                  </div>
                </div>
              </div>
              <div>
                <h4 className="font-semibold mb-3">After Mitigation</h4>
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Demographic Parity</span>
                    <Badge variant="secondary">{reportData.afterMitigation.demographicParity}</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Equalized Odds</span>
                    <Badge variant="secondary">{reportData.afterMitigation.equalizedOdds}</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Equal Opportunity</span>
                    <Badge variant="secondary">{reportData.afterMitigation.equalOpportunity}</Badge>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-green-50 border border-green-200 rounded-lg p-4 mt-4">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-green-500" />
                <span className="font-semibold text-green-800">Mitigation Results</span>
              </div>
              <p className="text-green-700 text-sm mt-1">
                {reportData.mitigationSuccess}
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
              {reportData.complianceStatus.map((compliance, index) => (
                <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                  <div>
                    <h4 className="font-semibold">{compliance.name}</h4>
                    <p className="text-sm text-muted-foreground">
                      {compliance.name === 'EEOC Compliance' ? 'Equal Employment Opportunity' :
                       compliance.name === 'GDPR Article 22' ? 'Automated Decision-Making' :
                       'High-Risk AI Systems'}
                    </p>
                  </div>
                  <Badge variant={compliance.color as any}>{compliance.status}</Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Recommendations */}
        <Card>
          <CardHeader>
            <CardTitle>Recommendations</CardTitle>
            <CardDescription>Action plan for compliance and bias mitigation</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <h4 className={`font-semibold mb-2 ${datasetType === 'biased' ? 'text-red-600' : 'text-amber-600'}`}>
                  Immediate Actions (0-30 days)
                </h4>
                <ul className="text-sm space-y-1 ml-4">
                  {reportData.immediateActions.map((action, index) => (
                    <li key={index}>• {action}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-blue-600 mb-2">Long-term Actions (3-12 months)</h4>
                <ul className="text-sm space-y-1 ml-4">
                  <li>• Build automated fairness testing pipeline</li>
                  <li>• Implement continuous bias monitoring system</li>
                  <li>• Develop bias-aware data collection processes</li>
                  <li>• Create customer feedback mechanisms for fairness</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
