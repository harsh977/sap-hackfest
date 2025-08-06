"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { SendHorizontal, Bot, User, BarChart2, AlertCircle, Info } from "lucide-react"

type Message = {
  role: "user" | "assistant"
  content: string
  timestamp: Date
}

export function JouleInteraction() {
  const [input, setInput] = useState("")
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content:
        "Hello! I'm Joule, your ethical AI assistant. I can help explain model decisions and fairness metrics. What would you like to know?",
      timestamp: new Date(),
    },
  ])

  const predefinedQuestions = [
    "Why was this candidate rejected?",
    "Is there gender bias in the model?",
    "How can we improve fairness?",
    "What features influenced this decision?",
  ]

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

    // Simulate Joule's response based on the question
    setTimeout(() => {
      let response = ""

      if (message.toLowerCase().includes("rejected")) {
        response =
          "Based on the model analysis, the candidate was rejected primarily due to insufficient experience in the required domain (scored 3.2/10 compared to the position requirement of 7/10). However, our fairness metrics indicate a potential gender bias in how experience is evaluated, with a 0.82 disparity score between male and female candidates with similar backgrounds."
      } else if (message.toLowerCase().includes("gender bias")) {
        response =
          "Yes, our analysis detected gender bias in the model with a disparate impact ratio of 0.76, below the recommended 0.8 threshold. Female candidates are 24% less likely to receive positive outcomes despite similar qualifications. The bias is most pronounced in the 'years of experience' and 'leadership potential' features."
      } else if (message.toLowerCase().includes("improve fairness")) {
        response =
          "To improve fairness, I recommend: 1) Retraining with balanced datasets, 2) Implementing fairness constraints during model optimization, 3) Removing or transforming the biased 'leadership potential' feature, and 4) Adding synthetic data for underrepresented groups. Our simulation shows these changes could reduce bias by up to 68%."
      } else if (message.toLowerCase().includes("features") || message.toLowerCase().includes("influenced")) {
        response =
          "The top 5 features influencing this decision were: 1) Years of experience (32% influence), 2) Technical skills assessment (24%), 3) Leadership potential (18%), 4) Education level (15%), and 5) Previous role similarity (11%). Features 1 and 3 showed significant demographic disparities in their impact."
      } else {
        response =
          "I'm analyzing the model's decision-making process and fairness metrics. Could you clarify what specific aspect of the model or decision you'd like me to explain? I can provide insights on bias detection, feature importance, or recommended improvements."
      }

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
          Ask why a decision was made, what features influenced it, and how to improve fairness.
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
              <CardDescription>Ethical AI Explainer</CardDescription>
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
                  {message.role === "assistant" && message.content.includes("gender bias") && (
                    <div className="mt-2 p-2 bg-background/50 rounded-md flex items-center gap-2">
                      <AlertCircle className="h-4 w-4 text-amber-500" />
                      <span className="text-xs font-medium">Bias detected in model</span>
                    </div>
                  )}

                  {message.role === "assistant" && message.content.includes("features influencing") && (
                    <div className="mt-2 p-2 bg-background/50 rounded-md">
                      <div className="flex items-center gap-2 mb-1">
                        <BarChart2 className="h-4 w-4 text-blue-500" />
                        <span className="text-xs font-medium">Feature importance</span>
                      </div>
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <div className="w-full h-2 bg-muted-foreground/20 rounded-full overflow-hidden">
                            <div className="h-full bg-blue-500 rounded-full" style={{ width: "32%" }}></div>
                          </div>
                          <span className="text-xs w-8">32%</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-full h-2 bg-muted-foreground/20 rounded-full overflow-hidden">
                            <div className="h-full bg-blue-500 rounded-full" style={{ width: "24%" }}></div>
                          </div>
                          <span className="text-xs w-8">24%</span>
                        </div>
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
              {predefinedQuestions.map((question, index) => (
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
              placeholder="Ask about model decisions or fairness..."
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
            This is a simulation of how Joule would explain AI decisions and fairness metrics. In a real implementation,
            Joule would analyze the actual model outputs and provide detailed explanations based on SHAP values,
            fairness metrics, and counterfactual analysis.
          </p>
        </div>
      </div>
    </div>
  )
}
