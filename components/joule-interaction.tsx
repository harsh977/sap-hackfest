"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { SendHorizontal, Bot, User, BarChart2, AlertCircle, Info } from 'lucide-react'
import { useDataset } from "@/components/dataset-context"

type Message = {
  role: "user" | "assistant"
  content: string
  timestamp: Date
}

export function JouleInteraction() {
  const { datasetType } = useDataset()
  const [input, setInput] = useState("")
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content: `Hello! I'm Joule, your ethical AI assistant. I've analyzed your ${datasetType === 'biased' ? 'biased loan dataset' : 'unbiased loan dataset'} and can explain the ${datasetType === 'biased' ? 'significant bias patterns' : 'subtle intersectional bias patterns'} I found. What would you like to know?`,
      timestamp: new Date(),
    },
  ])

  const getPredefinedQuestions = () => {
    if (datasetType === 'biased') {
      return [
        "Why is there such strong gender bias?",
        "How much bias was detected?",
        "Is the bias consistent across all groups?",
        "What causes the -25.98% causal effect?"
      ]
    } else {
      return [
        "Why does overall bias look minimal?",
        "What is intersectional bias?",
        "Why are young women disadvantaged?",
        "How do education levels affect bias?"
      ]
    }
  }

  const generateResponse = (message: string) => {
    const lowerMessage = message.toLowerCase()
    
    if (datasetType === 'biased') {
      // Responses for biased dataset
      if (lowerMessage.includes("strong") || lowerMessage.includes("gender bias")) {
        return "The DoWhy causal analysis revealed a -25.98% causal effect of being female on loan approval probability. This means that after controlling for age, education, income, and credit history, women are still 26% less likely to be approved than men with identical qualifications. This indicates systematic discrimination rather than legitimate business factors."
      } else if (lowerMessage.includes("much bias") || lowerMessage.includes("detected")) {
        return "The bias is severe across multiple metrics: Raw approval gap of -26.1% (39% for males vs 13% for females), DoWhy linear regression shows -25.98% causal effect, and logistic regression confirms -16.02% effect. Every demographic subgroup shows negative effects for females, ranging from -18.1% to -29.6% depending on age and education level."
      } else if (lowerMessage.includes("consistent") || lowerMessage.includes("all groups")) {
        return "Yes, the bias is remarkably consistent. Every single age-education subgroup shows negative causal effects for females: Young/Low-education: -29.6%, Young/High-education: -21.9%, Older/Low-education: -25.6%. This widespread pattern indicates systemic discrimination that affects all female applicants regardless of their other characteristics."
      } else if (lowerMessage.includes("causal effect") || lowerMessage.includes("25.98")) {
        return "The -25.98% causal effect means that gender itself is causing the disparity, not confounding factors. DoWhy's backdoor adjustment method controlled for age, education, income, and credit history. Since the causal effect (-25.98%) is nearly identical to the raw gap (-26.1%), it confirms that gender discrimination is the primary driver, not differences in qualifications."
      } else {
        return "Based on the biased dataset analysis, this model exhibits severe gender discrimination with a -25.98% causal effect against females. The bias is systematic, affecting all demographic subgroups consistently. This model should not be deployed without immediate bias mitigation using techniques like Fairlearn's ExponentiatedGradient algorithm."
      }
    } else {
      // Responses for unbiased dataset
      if (lowerMessage.includes("overall bias") || lowerMessage.includes("minimal")) {
        return "The overall statistics look fair: females have 44.3% approval vs males at 42.9% (+1.3% difference), and DoWhy shows only +0.66% causal effect. However, this masks significant intersectional bias. The 'fairness' at the aggregate level hides systematic disadvantages for specific subgroups of women."
      } else if (lowerMessage.includes("intersectional") || lowerMessage.includes("intersectional bias")) {
        return "Intersectional bias occurs when the impact of gender varies dramatically across other demographic categories. In this dataset: Young, low-educated women face -9.6% bias, while older, highly-educated women enjoy +34.3% advantage. The overall +0.66% effect masks these opposing forces, creating a false impression of fairness."
      } else if (lowerMessage.includes("young women") || lowerMessage.includes("disadvantaged")) {
        return "Young women with low education face significant discrimination (-9.6% causal effect for ages 18-27). This suggests the model may be perpetuating stereotypes about young women's financial responsibility or career stability. The bias decreases with age (-5.3% for 55-64 age group) but remains negative for all low-education women."
      } else if (lowerMessage.includes("education") || lowerMessage.includes("education levels")) {
        return "Education creates a dramatic reversal in bias direction. Low-education women face negative bias (-5.3% to -9.6%), while high-education women gain substantial advantages (+29.5% to +34.3%). This suggests the model may be over-correcting for gender at higher education levels, potentially reflecting biased assumptions about 'exceptional' women."
      } else {
        return "This dataset demonstrates hidden intersectional bias. While overall metrics appear fair (+0.66% causal effect), young and less-educated women face systematic disadvantage, while older, highly-educated women receive preferential treatment. This creates fairness risks that aggregate metrics miss entirely."
      }
    }
  }

  const handleSend = (message: string = input) => {
    if (!message.trim()) return

    // Add user message
    const userMessage: Message = {
      role: "user",
      content: message,
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    setInput("")

    // Generate Joule's response
    setTimeout(() => {
      const response = generateResponse(message)
      
      const assistantMessage: Message = {
        role: "assistant",
        content: response,
        timestamp: new Date(),
      }

      setMessages((prev) => [...prev, assistantMessage])
    }, 1000)
  }

  return (
    <div className="max-w-3xl mx-auto">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold tracking-tighter mb-2">Talk to Joule about the Model</h2>
        <p className="text-muted-foreground max-w-[600px] mx-auto">
          Ask about the {datasetType === 'biased' ? 'significant gender bias' : 'intersectional bias patterns'} detected in your {datasetType === 'biased' ? 'biased' : 'unbiased'} dataset.
        </p>
      </div>

      <Card className="border-0 shadow-lg">
        <CardHeader className="bg-muted/30">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground">
              <Bot className="h-4 w-4" />
            </div>
            <div>
              <CardTitle>Joule AI Assistant</CardTitle>
              <CardDescription>
                Ethical AI Explainer - {datasetType === 'biased' ? 'Biased Dataset Analysis' : 'Unbiased Dataset Analysis'}
              </CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="p-0">
          <div className="h-[400px] overflow-y-auto p-4 space-y-4">
            {messages.map((message, index) => (
              <div key={index} className={`flex gap-3 ${message.role === "user" ? "justify-end" : ""}`}>
                {message.role === "assistant" && (
                  <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground shrink-0">
                    <Bot className="h-4 w-4" />
                  </div>
                )}

                <div
                  className={`p-3 rounded-lg max-w-[80%] ${
                    message.role === "user" ? "bg-primary text-primary-foreground" : "bg-muted"
                  }`}
                >
                  {message.content.split("\n").map((text, i) => (
                    <p key={i} className="text-sm">
                      {text}
                    </p>
                  ))}

                  {/* Add visual elements to assistant messages */}
                  {message.role === "assistant" && message.content.includes("bias") && (
                    <div className={`mt-2 p-2 bg-background/50 rounded-md flex items-center gap-2 ${
                      datasetType === 'biased' ? 'border-l-4 border-l-red-500' : 'border-l-4 border-l-amber-500'
                    }`}>
                      <AlertCircle className={`h-4 w-4 ${datasetType === 'biased' ? 'text-red-500' : 'text-amber-500'}`} />
                      <span className="text-xs font-medium">
                        {datasetType === 'biased' ? 'Severe bias detected' : 'Intersectional bias detected'}
                      </span>
                    </div>
                  )}

                  {message.role === "assistant" && message.content.includes("%") && (
                    <div className="mt-2 p-2 bg-background/50 rounded-md">
                      <div className="flex items-center gap-2 mb-1">
                        <BarChart2 className="h-4 w-4 text-blue-500" />
                        <span className="text-xs font-medium">Key Statistics</span>
                      </div>
                      <div className="space-y-1">
                        {datasetType === 'biased' ? (
                          <>
                            <div className="flex items-center gap-2">
                              <div className="w-full h-2 bg-muted-foreground/20 rounded-full overflow-hidden">
                                <div className="h-full bg-red-500 rounded-full" style={{ width: "26%" }}></div>
                              </div>
                              <span className="text-xs w-12">-26%</span>
                            </div>
                            <div className="text-xs text-muted-foreground">Gender bias severity</div>
                          </>
                        ) : (
                          <>
                            <div className="flex items-center gap-2">
                              <div className="w-full h-2 bg-muted-foreground/20 rounded-full overflow-hidden">
                                <div className="h-full bg-amber-500 rounded-full" style={{ width: "35%" }}></div>
                              </div>
                              <span className="text-xs w-12">+34%</span>
                            </div>
                            <div className="text-xs text-muted-foreground">Max subgroup advantage</div>
                          </>
                        )}
                      </div>
                    </div>
                  )}
                </div>

                {message.role === "user" && (
                  <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center shrink-0">
                    <User className="h-4 w-4" />
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="p-4 border-t">
            <div className="flex flex-wrap gap-2 mb-3">
              {getPredefinedQuestions().map((question, index) => (
                <Button
                  key={index}
                  variant="outline"
                  size="sm"
                  className="text-xs"
                  onClick={() => handleSend(question)}
                >
                  {question}
                </Button>
              ))}
            </div>
          </div>
        </CardContent>
        <CardFooter className="border-t p-3">
          <form
            className="flex w-full gap-2"
            onSubmit={(e) => {
              e.preventDefault()
              handleSend()
            }}
          >
            <Input
              placeholder={`Ask about ${datasetType === 'biased' ? 'gender discrimination' : 'intersectional bias'}...`}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="flex-1"
            />
            <Button type="submit" size="icon">
              <SendHorizontal className="h-4 w-4" />
            </Button>
          </form>
        </CardFooter>
      </Card>

      <div className="mt-6 p-4 border rounded-md bg-muted/30">
        <div className="flex items-start gap-2">
          <Info className="h-5 w-5 text-blue-500 shrink-0 mt-0.5" />
          <p className="text-sm text-muted-foreground">
            This is a simulation showing how Joule would explain the specific bias patterns found in your {datasetType} dataset. 
            In production, Joule would analyze real model outputs and provide detailed explanations based on actual SHAP values, 
            DoWhy causal analysis, and Fairlearn metrics.
          </p>
        </div>
      </div>
    </div>
  )
}
