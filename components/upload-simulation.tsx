"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { FileUp, AlertCircle, CheckCircle2, BarChart2, FileText, Shield } from "lucide-react"

export function UploadSimulation() {
  const [file, setFile] = useState<File | null>(null)
  const [isUploading, setIsUploading] = useState(false)
  const [currentStage, setCurrentStage] = useState(0)
  const [progress, setProgress] = useState(0)
  const [isComplete, setIsComplete] = useState(false)

  const stages = [
    { name: "Detecting Bias...", icon: AlertCircle, color: "text-amber-500" },
    { name: "Fairness Metrics in Progress...", icon: BarChart2, color: "text-blue-500" },
    { name: "Generating Explainable Report...", icon: FileText, color: "text-purple-500" },
    { name: "Creating Compliance Summary...", icon: Shield, color: "text-green-500" },
    { name: "Audit Complete!", icon: CheckCircle2, color: "text-green-500" },
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

    // Simulate the upload and processing stages
    const totalDuration = 8000 // 8 seconds total
    const stageTime = totalDuration / stages.length

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          return 100
        }
        return prev + 1
      })
    }, totalDuration / 100)

    // Progress through stages
    for (let i = 0; i < stages.length; i++) {
      setTimeout(() => {
        setCurrentStage(i)
        if (i === stages.length - 1) {
          setIsComplete(true)
          clearInterval(interval)
          setProgress(100)
        }
      }, i * stageTime)
    }
  }

  const resetSimulation = () => {
    setFile(null)
    setIsUploading(false)
    setCurrentStage(0)
    setProgress(0)
    setIsComplete(false)
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
                  {`id,prediction,gender,age_group,location
1,0.82,male,25-34,urban
2,0.45,female,18-24,rural
3,0.91,male,45+,urban
4,0.38,female,35-44,suburban
...`}
                </pre>
              </div>
            </div>
          ) : (
            <div className="space-y-8">
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Processing...</span>
                  <span>{progress}%</span>
                </div>
                <Progress value={progress} className="h-2" />
              </div>

              <div className="space-y-4">
                {stages.map((stage, index) => {
                  const StageIcon = stage.icon
                  const isActive = currentStage === index
                  const isCompleted = currentStage > index

                  return (
                    <div
                      key={index}
                      className={`flex items-center gap-3 p-3 rounded-md transition-all duration-300 ${
                        isActive ? "bg-muted/80 scale-105" : isCompleted ? "opacity-70" : "opacity-40"
                      }`}
                    >
                      <div
                        className={`w-8 h-8 rounded-full flex items-center justify-center ${
                          isActive
                            ? `${stage.color} animate-pulse`
                            : isCompleted
                              ? stage.color
                              : "text-muted-foreground"
                        }`}
                      >
                        <StageIcon className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="font-medium">{stage.name}</p>
                        {isActive && index === 0 && (
                          <div className="mt-2 h-20 bg-muted/50 rounded-md overflow-hidden relative">
                            <div className="absolute inset-0 grid grid-cols-10 grid-rows-5 gap-px">
                              {Array.from({ length: 50 }).map((_, i) => (
                                <div
                                  key={i}
                                  className="bg-gradient-to-br from-amber-500/10 to-amber-500/30 animate-pulse"
                                  style={{ animationDelay: `${i * 50}ms` }}
                                ></div>
                              ))}
                            </div>
                          </div>
                        )}
                        {isActive && index === 1 && (
                          <div className="mt-2 h-20 bg-muted/50 rounded-md p-2 flex items-end gap-1">
                            {Array.from({ length: 10 }).map((_, i) => (
                              <div
                                key={i}
                                className="flex-1 bg-blue-500/50 rounded-t-sm animate-in fade-in slide-in-from-bottom-4"
                                style={{
                                  height: `${20 + Math.random() * 60}%`,
                                  animationDelay: `${i * 100}ms`,
                                  animationDuration: "0.5s",
                                }}
                              ></div>
                            ))}
                          </div>
                        )}
                        {isActive && index === 2 && (
                          <div className="mt-2 h-20 bg-muted/50 rounded-md flex items-center justify-center">
                            <FileText className="h-10 w-10 text-purple-500/70 animate-pulse" />
                          </div>
                        )}
                        {isActive && index === 3 && (
                          <div className="mt-2 h-20 bg-muted/50 rounded-md p-3">
                            <div className="space-y-2">
                              {Array.from({ length: 3 }).map((_, i) => (
                                <div
                                  key={i}
                                  className="flex items-center gap-2 animate-in fade-in slide-in-from-right-4"
                                  style={{ animationDelay: `${i * 300}ms` }}
                                >
                                  <CheckCircle2 className="h-4 w-4 text-green-500" />
                                  <div className="h-2 bg-muted rounded-full flex-1">
                                    <div
                                      className="h-full bg-green-500/50 rounded-full"
                                      style={{ width: `${70 + Math.random() * 30}%` }}
                                    ></div>
                                  </div>
                                </div>
                              ))}
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
              <Button variant="ghost">Use Sample Data</Button>
              <Button onClick={handleUpload} disabled={!file}>
                Start Audit
              </Button>
            </>
          ) : (
            <>
              <Button variant="ghost" disabled={!isComplete} onClick={resetSimulation}>
                Reset
              </Button>
              <Button disabled={!isComplete}>View Full Report</Button>
            </>
          )}
        </CardFooter>
      </Card>
    </div>
  )
}
