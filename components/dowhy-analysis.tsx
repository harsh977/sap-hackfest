"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { AlertTriangle, CheckCircle, TrendingDown, TrendingUp } from 'lucide-react'

interface DoWhyAnalysisProps {
  datasetType: 'biased' | 'unbiased'
}

export function DoWhyAnalysis({ datasetType }: DoWhyAnalysisProps) {
  if (datasetType === 'biased') {
    return <BiasedDatasetAnalysis />
  } else {
    return <UnbiasedDatasetAnalysis />
  }
}

function BiasedDatasetAnalysis() {
  return (
    <div className="space-y-6">
      {/* Manual Statistics */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            📊 Raw Manual Statistics
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-gray-300">
              <thead>
                <tr className="bg-gray-50">
                  <th className="border border-gray-300 px-4 py-2 text-left">Metric</th>
                  <th className="border border-gray-300 px-4 py-2 text-center">Value</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">Overall Approval Rate</td>
                  <td className="border border-gray-300 px-4 py-2 text-center font-mono">0.260</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">Male Approval Rate</td>
                  <td className="border border-gray-300 px-4 py-2 text-center font-mono text-blue-600">0.390</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">Female Approval Rate</td>
                  <td className="border border-gray-300 px-4 py-2 text-center font-mono text-red-600">0.129</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">Raw Difference (F - M)</td>
                  <td className="border border-gray-300 px-4 py-2 text-center font-mono text-red-600 font-bold">-0.261</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="mt-4 p-3 bg-amber-50 border border-amber-200 rounded-lg">
            <p className="text-sm text-amber-800">
              <strong>✅ Interpretation:</strong> Females are approved at 13%, while males are approved at 39%. 
              The raw approval gap is -26.1%, suggesting strong disparity. However, this does not control for 
              potential confounding factors like income, age, credit history, education, etc.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* DoWhy Causal Estimand */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            📊 DoWhy Causal Estimand Setup
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
              <p className="text-sm text-blue-800 mb-2">
                <strong>The chosen estimand is:</strong>
              </p>
              <div className="font-mono text-center text-lg bg-white p-3 rounded border">
                d/d[gender] E[loan_status]
              </div>
            </div>
            <div className="p-3 bg-muted/50 rounded-lg">
              <p className="text-sm">
                <strong>✅ Interpretation:</strong> You're estimating the Average Treatment Effect (ATE) of being 
                female vs. male on loan approval, adjusting for other variables like age and education.
              </p>
              <p className="text-sm mt-2">
                <strong>Assumption:</strong> Unconfoundedness — no unmeasured confounders.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Linear Regression Results */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            📈 Linear Regression Causal Estimate
            <TrendingDown className="h-5 w-5 text-red-500" />
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
              <p className="text-lg font-mono text-center text-red-800">
                <strong>Mean Value: -0.2598</strong>
              </p>
            </div>
            <div className="p-3 bg-red-50 border border-red-200 rounded-lg">
              <p className="text-sm text-red-800">
                <strong>✅ Interpretation:</strong> After adjusting for age and education, being female reduces 
                loan approval probability by ~25.98% on average. This causal effect is almost the same as the 
                raw gap (-26.1%), which suggests that gender is a significant causal driver, not just correlated.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Conditional Estimates */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            🔍 Conditional Estimates (Intersectional Bias)
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-gray-300">
              <thead>
                <tr className="bg-gray-50">
                  <th className="border border-gray-300 px-4 py-2 text-left">Age Range</th>
                  <th className="border border-gray-300 px-4 py-2 text-left">Education Level</th>
                  <th className="border border-gray-300 px-4 py-2 text-center">Gender Effect (F - M)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">21–33</td>
                  <td className="border border-gray-300 px-4 py-2">Low</td>
                  <td className="border border-gray-300 px-4 py-2 text-center font-mono text-red-600">-0.296</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">21–33</td>
                  <td className="border border-gray-300 px-4 py-2">Medium</td>
                  <td className="border border-gray-300 px-4 py-2 text-center font-mono text-red-600">-0.251</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">21–33</td>
                  <td className="border border-gray-300 px-4 py-2">High</td>
                  <td className="border border-gray-300 px-4 py-2 text-center font-mono text-red-600">-0.219</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">33–42</td>
                  <td className="border border-gray-300 px-4 py-2">Low</td>
                  <td className="border border-gray-300 px-4 py-2 text-center font-mono text-red-600">-0.286</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">42–52</td>
                  <td className="border border-gray-300 px-4 py-2">Low</td>
                  <td className="border border-gray-300 px-4 py-2 text-center font-mono text-red-600">-0.273</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">52–61</td>
                  <td className="border border-gray-300 px-4 py-2">Low</td>
                  <td className="border border-gray-300 px-4 py-2 text-center font-mono text-red-600">-0.266</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">61–73</td>
                  <td className="border border-gray-300 px-4 py-2">Low</td>
                  <td className="border border-gray-300 px-4 py-2 text-center font-mono text-red-600">-0.256</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="mt-4 p-3 bg-red-50 border border-red-200 rounded-lg">
            <p className="text-sm text-red-800">
              <strong>✅ Interpretation:</strong> Every subgroup experiences a strong negative effect for females. 
              Even at higher education levels or older ages, females are less likely to be approved than their 
              male counterparts. This shows a widespread intersectional bias, not limited to a few groups.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Final Assessment */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            🧪 Final Bias Assessment
            <AlertTriangle className="h-5 w-5 text-red-500" />
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Is there gender bias?</span>
                <Badge variant="destructive">✅ YES</Badge>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Direction of bias?</span>
                <Badge variant="outline">Against females</Badge>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">How much?</span>
                <Badge variant="destructive">16% to 26% lower</Badge>
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Consistent across subgroups?</span>
                <Badge variant="destructive">✅ YES</Badge>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Is it causal?</span>
                <Badge variant="destructive">✅ YES (DoWhy confirmed)</Badge>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

function UnbiasedDatasetAnalysis() {
  return (
    <div className="space-y-6">
      {/* Manual Statistics */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            📊 Raw Manual Statistics
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-gray-300">
              <thead>
                <tr className="bg-gray-50">
                  <th className="border border-gray-300 px-4 py-2 text-left">Metric</th>
                  <th className="border border-gray-300 px-4 py-2 text-center">Value</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">Overall Approval Rate</td>
                  <td className="border border-gray-300 px-4 py-2 text-center font-mono">0.436</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">Male Approval Rate</td>
                  <td className="border border-gray-300 px-4 py-2 text-center font-mono text-blue-600">0.429</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">Female Approval Rate</td>
                  <td className="border border-gray-300 px-4 py-2 text-center font-mono text-green-600">0.443</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">Raw Difference (F - M)</td>
                  <td className="border border-gray-300 px-4 py-2 text-center font-mono text-green-600 font-bold">0.013</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="mt-4 p-3 bg-green-50 border border-green-200 rounded-lg">
            <p className="text-sm text-green-800">
              <strong>✅ Interpretation:</strong> Females are approved at 44.3%, while males are approved at 42.9%. 
              The raw approval gap is only +1.3%, suggesting minimal overall disparity.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Linear Regression Results */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            📈 Linear Regression Causal Estimate
            <CheckCircle className="h-5 w-5 text-green-500" />
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
              <p className="text-lg font-mono text-center text-green-800">
                <strong>Mean Value: 0.0066</strong>
              </p>
            </div>
            <div className="p-3 bg-green-50 border border-green-200 rounded-lg">
              <p className="text-sm text-green-800">
                <strong>✅ Interpretation:</strong> After adjusting for age and education, being female increases 
                loan approval probability by ~0.66% on average. This suggests minimal overall gender bias.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Conditional Estimates */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            🔍 Conditional Estimates (Intersectional Analysis)
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-gray-300">
              <thead>
                <tr className="bg-gray-50">
                  <th className="border border-gray-300 px-4 py-2 text-left">Education Level</th>
                  <th className="border border-gray-300 px-4 py-2 text-left">Age Range</th>
                  <th className="border border-gray-300 px-4 py-2 text-center">Gender Effect (F - M)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">Low (≤1.0)</td>
                  <td className="border border-gray-300 px-4 py-2">18-27</td>
                  <td className="border border-gray-300 px-4 py-2 text-center font-mono text-red-600">-0.096</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">Low (≤1.0)</td>
                  <td className="border border-gray-300 px-4 py-2">27-36</td>
                  <td className="border border-gray-300 px-4 py-2 text-center font-mono text-red-600">-0.082</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">Low (≤1.0)</td>
                  <td className="border border-gray-300 px-4 py-2">55-64</td>
                  <td className="border border-gray-300 px-4 py-2 text-center font-mono text-red-600">-0.053</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">Medium (1.0-2.0)</td>
                  <td className="border border-gray-300 px-4 py-2">18-27</td>
                  <td className="border border-gray-300 px-4 py-2 text-center font-mono text-green-600">+0.129</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">Medium (1.0-2.0)</td>
                  <td className="border border-gray-300 px-4 py-2">55-64</td>
                  <td className="border border-gray-300 px-4 py-2 text-center font-mono text-green-600">+0.179</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">High (2.0-3.0)</td>
                  <td className="border border-gray-300 px-4 py-2">18-27</td>
                  <td className="border border-gray-300 px-4 py-2 text-center font-mono text-green-600">+0.295</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">High (2.0-3.0)</td>
                  <td className="border border-gray-300 px-4 py-2">55-64</td>
                  <td className="border border-gray-300 px-4 py-2 text-center font-mono text-green-600">+0.343</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="mt-4 p-3 bg-amber-50 border border-amber-200 rounded-lg">
            <p className="text-sm text-amber-800">
              <strong>✅ Interpretation:</strong> At lower education levels, females face a negative causal effect — 
              they're less likely to be approved than males of same age group. At higher education levels, females 
              gain a positive causal advantage, which increases with age. This reveals intersectional bias — the 
              impact of gender is not uniform across all groups.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Final Assessment */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            ⚖️ Fairness & Bias Implication
            <TrendingUp className="h-5 w-5 text-green-500" />
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
              <h4 className="font-semibold text-green-800 mb-2">✅ Key Conclusions:</h4>
              <ul className="text-sm text-green-700 space-y-1">
                <li><strong>No strong overall bias:</strong> The average causal effect is slightly positive (0.66%) for females.</li>
                <li><strong>Hidden subgroup bias:</strong> There is bias against young and less educated females, while bias favors older, highly educated females.</li>
                <li><strong>Fairness Risk:</strong> If the model is deployed as-is, younger and less educated women might be systematically disadvantaged, even though the overall metrics look "fair".</li>
              </ul>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Overall bias detected?</span>
                  <Badge variant="secondary">Minimal</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Subgroup bias?</span>
                  <Badge variant="outline">⚠️ YES</Badge>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Risk level?</span>
                  <Badge variant="outline">Medium</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Action needed?</span>
                  <Badge variant="outline">Monitor subgroups</Badge>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
