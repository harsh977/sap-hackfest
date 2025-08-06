"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { FileUp, AlertCircle, CheckCircle2, BarChart2, FileText, Shield, Download } from 'lucide-react'
import { ComplianceReport } from "@/components/compliance-report"

export function UploadSimulation() {
  const [file, setFile] = useState<File | null>(null)
  const [isUploading, setIsUploading] = useState(false)
  const [currentStage, setCurrentStage] = useState(0)
  const [progress, setProgress] = useState(0)
  const [isComplete, setIsComplete] = useState(false)
  const [showReport, setShowReport] = useState(false)
  const [stageDetails, setStageDetails] = useState<string[]>([])

  const stages = [
    { 
      name: "Uploading data to SAP HANA Cloud...", 
      icon: FileUp, 
      color: "text-blue-500",
      duration: 8000,
      details: [
        "Validating CSV format and schema...",
        "Uploading 1,000 records to SAP HANA...",
        "Creating data pipeline connections...",
        "Data ingestion complete ✓"
      ]
    },
    { 
      name: "Running DoWhy Causal Analysis...", 
      icon: AlertCircle, 
      color: "text-amber-500",
      duration: 15000,
      details: [
        "Identifying causal estimands...",
        "Building causal graph: gender → loan_status...",
        "Running backdoor adjustment method...",
        "Linear regression causal estimate: -25.98%",
        "Logistic regression causal estimate: -16.02%",
        "⚠️ Significant gender bias detected!"
      ]
    },
    { 
      name: "Applying Fairlearn Bias Mitigation...", 
      icon: BarChart2, 
      color: "text-purple-500",
      duration: 20000,
      details: [
        "Analyzing baseline fairness metrics...",
        "Demographic parity difference: 7.6%",
        "Applying ExponentiatedGradient algorithm...",
        "Training with fairness constraints...",
        "Post-mitigation demographic parity: 0.8%",
        "✓ Bias reduced by 6.8%!"
      ]
    },
    { 
      name: "Generating Joule + Gemini Explanations...", 
      icon: FileText, 
      color: "text-green-500",
      duration: 12000,
      details: [
        "Connecting to SAP Joule API...",
        "Processing causal analysis results...",
        "Generating natural language explanations...",
        "Creating regulatory compliance summaries...",
        "Joule explanations ready ✓"
      ]
    },
    { 
      name: "Creating Compliance Documentation...", 
      icon: Shield, 
      color: "text-teal-500",
      duration: 5000,
      details: [
        "Generating EEOC compliance report...",
        "Creating GDPR Article 22 documentation...",
        "Preparing EU AI Act assessment...",
        "Compiling audit trail evidence...",
        "✓ Compliance report generated!"
      ]
    }
  ]

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0])
    }
  }

  const handleUpload = () => {
    setIsUploading(true)
    setCurrentStage(0)
    setProgress(0)
    setIsComplete(false)
    setStageDetails([])

    const totalDuration = stages.reduce((sum, stage) => sum + stage.duration, 0)
    let elapsedTime = 0

    // Progress through stages with realistic timing
    stages.forEach((stage, stageIndex) => {
      setTimeout(() => {
        setCurrentStage(stageIndex)
        setStageDetails([])

        // Show stage details progressively
        stage.details.forEach((detail, detailIndex) => {
          setTimeout(() => {
            setStageDetails(prev => [...prev, detail])
          }, (detailIndex * stage.duration) / stage.details.length)
        })

        // Update progress during this stage
        const stageProgressInterval = setInterval(() => {
          setProgress(prev => {
            const newProgress = ((elapsedTime + Date.now() % stage.duration) / totalDuration) * 100
            return Math.min(newProgress, 100)
          })
        }, 100)

        // Clear interval when stage completes
        setTimeout(() => {
          clearInterval(stageProgressInterval)
          if (stageIndex === stages.length - 1) {
            setIsComplete(true)
            setProgress(100)
          }
        }, stage.duration)

      }, elapsedTime)

      elapsedTime += stage.duration
    })
  }

  const resetSimulation = () => {
    setFile(null)
    setIsUploading(false)
    setCurrentStage(0)
    setProgress(0)
    setIsComplete(false)
    setShowReport(false)
    setStageDetails([])
  }

  const handleDownloadReport = () => {
    // This will be handled by the ComplianceReport component's generatePDF function
    // The button click will trigger the PDF generation directly
  }

  if (showReport) {
    return (
      <div id="upload" className="max-w-4xl mx-auto">
        <div className="mb-6 flex items-center justify-between">
          <div>
            <h2 className="text-3xl font-bold tracking-tighter mb-2">Audit Results</h2>
            <p className="text-muted-foreground">
              Comprehensive bias analysis and compliance assessment completed
            </p>
          </div>
          <Button variant="outline" onClick={() => setShowReport(false)}>
            Back to Upload
          </Button>
        </div>
        <ComplianceReport onDownload={handleDownloadReport} />
      </div>
    )
  }

  return (
    <div id="upload" className="max-w-3xl mx-auto">
      <h2 className="text-3xl font-bold tracking-tighter mb-2 text-center">Upload & Analyze</h2>
      <p className="text-muted-foreground mb-8 text-center">
        Upload your model's predictions to see our ethical AI auditor in action
      </p>

      <Card className="border-0 shadow-lg">
        <CardHeader>
          <CardTitle>Model Audit Simulation</CardTitle>
          <CardDescription>Upload a CSV file with model predictions and demographic attributes</CardDescription>
        </CardHeader>
        <CardContent>
          {!isUploading ? (
            <div className="space-y-6">
              <div className="border-2 border-dashed border-muted-foreground/25 rounded-lg p-10 text-center hover:border-muted-foreground/50 transition-colors">
                <FileUp className="h-10 w-10 mx-auto mb-4 text-muted-foreground/50" />
                <p className="text-muted-foreground mb-2">Drag and drop your CSV file here, or click to browse</p>
                <input type="file" id="file-upload" className="hidden" accept=".csv" onChange={handleFileChange} />
                <Button asChild variant="secondary" size="sm">
                  <label htmlFor="file-upload" className="cursor-pointer">
                    Browse Files
                  </label>
                </Button>
              </div>

              {file && (
                <div className="flex items-center justify-between p-3 bg-muted rounded-md">
                  <div className="flex items-center gap-2">
                    <FileText className="h-5 w-5 text-blue-500" />
                    <span className="font-medium">{file.name}</span>
                  </div>
                  <Button variant="ghost" size="sm" onClick={() => setFile(null)}>
                    Remove
                  </Button>
                </div>
              )}

              <div className="bg-muted/50 p-4 rounded-md">
                <h4 className="font-medium mb-2">Sample Data Format</h4>
                <pre className="text-xs overflow-x-auto p-2 bg-background rounded-md">
                  {`age,income,credit_history,loan_amount,gender,education,education_num,loan_status
73,47758.87,0,14669.52,0,High School,0,0
35,66584.39,0,11242.98,1,Bachelor,1,1
44,65954.73,1,21444.66,1,Bachelor,1,0
49,56457.12,1,11701.35,1,High School,0,0
40,61544.88,0,27018.61,0,High School,0,0`}
                </pre>
              </div>
            </div>
          ) : (
            <div className="space-y-8">
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Processing with SAP AI Core...</span>
                  <span>{Math.round(progress)}%</span>
                </div>
                <Progress value={progress} className="h-3" />
                <div className="text-xs text-muted-foreground text-center">
                  Estimated time remaining: {Math.max(0, Math.round((100 - progress) * 0.6))} seconds
                </div>
              </div>

              <div className="space-y-4">
                {stages.map((stage, index) => {
                  const StageIcon = stage.icon
                  const isActive = currentStage === index
                  const isCompleted = currentStage > index

                  return (
                    <div
                      key={index}
                      className={`flex items-start gap-3 p-4 rounded-md transition-all duration-500 ${
                        isActive ? "bg-muted/80 scale-[1.02] shadow-md" : isCompleted ? "opacity-70" : "opacity-40"
                      }`}
                    >
                      <div
                        className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${
                          isActive
                            ? `${stage.color} animate-pulse`
                            : isCompleted
                              ? stage.color
                              : "text-muted-foreground"
                        }`}
                      >
                        <StageIcon className="h-5 w-5" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="font-medium">{stage.name}</p>
                        {isActive && (
                          <div className="mt-3 p-3 bg-background/50 rounded-md border">
                            <div className="space-y-1">
                              {stageDetails.map((detail, detailIndex) => (
                                <div 
                                  key={detailIndex} 
                                  className="text-xs font-mono animate-in fade-in slide-in-from-left-2"
                                  style={{ animationDelay: `${detailIndex * 100}ms` }}
                                >
                                  {detail.includes('✓') ? (
                                    <span className="text-green-600">{detail}</span>
                                  ) : detail.includes('⚠️') ? (
                                    <span className="text-amber-600">{detail}</span>
                                  ) : (
                                    <span className="text-muted-foreground">{detail}</span>
                                  )}
                                </div>
                              ))}
                              {isActive && stageDetails.length > 0 && (
                                <div className="flex items-center gap-2 mt-2">
                                  <div className="w-2 h-2 bg-current rounded-full animate-pulse"></div>
                                  <span className="text-xs text-muted-foreground">Processing...</span>
                                </div>
                              )}
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          )}
        </CardContent>
        <CardFooter className="flex justify-between">
          {!isUploading ? (
            <>
              <Button variant="ghost" onClick={() => {
                // Simulate using sample data
                setFile(new File(['sample'], 'sample_hiring_data.csv', { type: 'text/csv' }))
              }}>
                Use Sample Data
              </Button>
              <Button onClick={handleUpload} disabled={!file}>
                Start Audit
              </Button>
            </>
          ) : (
            <>
              <Button variant="ghost" disabled={!isComplete} onClick={resetSimulation}>
                Reset
              </Button>
              <Button 
                disabled={!isComplete} 
                onClick={() => setShowReport(true)}
                className="gap-2"
              >
                <FileText className="h-4 w-4" />
                View Full Report
              </Button>
            </>
          )}
        </CardFooter>
      </Card>
    </div>
  )
}
