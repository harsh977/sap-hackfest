"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { SendHorizontal, Bot, User, BarChart2, AlertCircle, Info } from 'lucide-react'

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
    "Explain the DoWhy causal analysis results",
    "How did Fairlearn reduce the bias?",
    "What features contribute most to bias?",
    "Show me the demographic parity improvements",
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

    // Simulate Joule's response based on the question using real algorithm outputs
    setTimeout(() => {
      let response = ""

      if (message.toLowerCase().includes("rejected") || message.toLowerCase().includes("candidate")) {
        response =
          "Based on our DoWhy causal analysis of the loan approval dataset, I can explain this decision. Our analysis shows that being female reduces loan approval probability by approximately 16.02% on average, even after controlling for legitimate factors like age, education, income, and credit history.\n\nThe raw data shows:\n• Male approval rate: 39.0%\n• Female approval rate: 12.9%\n• Raw difference: -26.1%\n\nThis confirms systematic gender bias in the decision-making process. Our Fairlearn mitigation using ExponentiatedGradient reduced the demographic parity difference from 7.6% to 0.8%."
      } else if (message.toLowerCase().includes("gender bias") || message.toLowerCase().includes("bias")) {
        response =
          "Yes, our DoWhy causal analysis detected significant gender bias. Here are the key findings:\n\n**Causal Effects:**\n• Linear Regression Method: -25.98% effect\n• Logistic Regression Method: -16.02% effect\n\n**Conditional Analysis:**\nThe bias varies by demographic intersections:\n• Young females (21-33) + High School: -29.6% penalty\n• Young females (21-33) + Bachelor: -25.1% penalty\n• Older females (61-73) + Graduate: -18.1% penalty\n\nThe bias is most severe for younger women with lower education levels, indicating intersectional discrimination."
      } else if (message.toLowerCase().includes("improve fairness") || message.toLowerCase().includes("mitigation")) {
        response =
          "Our Fairlearn implementation successfully reduced bias using the ExponentiatedGradient method:\n\n**Before Mitigation:**\n• Demographic Parity Difference: 7.6%\n• Equalized Odds Difference: 3.2%\n• Accuracy: 76.0%\n\n**After Mitigation:**\n• Demographic Parity Difference: 0.8% ✓\n• Equalized Odds Difference: 7.0%\n• Accuracy: 72.3%\n\n**Trade-off Analysis:**\nWe achieved a 6.8% improvement in demographic parity with only a 3.7% accuracy reduction, representing a positive fairness-performance trade-off."
      } else if (message.toLowerCase().includes("features") || message.toLowerCase().includes("influenced")) {
        response =
          "Based on our DoWhy causal feature analysis, here are the key factors influencing decisions:\n\n**Bias-Contributing Features:**\n• Gender (Direct Effect): -16.02% impact\n• Age Interaction with Gender: -8.92% impact\n• Education Interaction with Gender: -6.54% impact\n\n**Legitimate Features:**\n• Income: +12.34% positive impact\n• Credit History: +9.87% positive impact\n• Loan Amount: +5.43% impact\n\nThe analysis shows that gender and its interactions with age/education are the primary sources of unfair bias, while financial factors like income and credit history have legitimate predictive value."
      } else if (message.toLowerCase().includes("algorithm") || message.toLowerCase().includes("method")) {
        response =
          "Our ethical AI auditor uses three integrated algorithms:\n\n**1. DoWhy (Bias Detection):**\n• Causal inference to identify true bias vs. correlation\n• Controls for confounding variables\n• Provides conditional estimates across demographic groups\n\n**2. Fairlearn (Bias Mitigation):**\n• ExponentiatedGradient method for fairness constraints\n• Reduces demographic parity from 7.6% to 0.8%\n• Balances fairness-accuracy trade-offs\n\n**3. Joule + Gemini LLM (Explainability):**\n• Natural language explanations of bias patterns\n• Contextual interpretation of statistical results\n• Regulatory-compliant documentation generation"
      } else {
        response =
          "I'm analyzing model decisions using our integrated DoWhy + Fairlearn + Gemini pipeline. I can explain:\n\n• **Bias Detection**: How DoWhy identified 16.02% gender penalty\n• **Mitigation Results**: How Fairlearn reduced bias by 6.8%\n• **Feature Analysis**: Which factors drive unfair vs. legitimate decisions\n• **Compliance**: How our results meet GDPR/EEOC requirements\n\nWhat specific aspect would you like me to explain in detail?"
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
