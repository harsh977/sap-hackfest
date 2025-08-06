import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

export function TechStack() {
  const techStack = [
    {
      name: "SAP AI Core",
      description: "Fairness-constrained model retraining",
      icon: "🧠",
      details: "Used for training models with fairness constraints and synthetic data augmentation to reduce bias.",
    },
    {
      name: "SAP HANA Cloud",
      description: "Data ingestion and bias detection",
      icon: "💾",
      details: "Provides high-performance data processing for large-scale bias detection and analysis.",
    },
    {
      name: "Joule",
      description: "Explainable AI with NLQ interface",
      icon: "💬",
      details:
        "Conversational AI that explains model decisions in natural language, answering questions about specific decisions.",
    },
    {
      name: "SAP Build Code",
      description: "Custom dashboard UI",
      icon: "🖥️",
      details: "Low-code development platform for creating intuitive dashboards and visualizations.",
    },
    {
      name: "AI Launchpad",
      description: "Continuous compliance monitoring",
      icon: "📊",
      details: "Monitors AI systems in production for drift, bias, and compliance issues.",
    },
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {techStack.map((tech, index) => (
        <TooltipProvider key={index}>
          <Tooltip>
            <TooltipTrigger asChild>
              <Card className="overflow-hidden border-0 shadow-md hover:shadow-lg transition-shadow duration-300">
                <div
                  className={`h-2 w-full ${
                    index % 5 === 0
                      ? "bg-blue-500"
                      : index % 5 === 1
                        ? "bg-purple-500"
                        : index % 5 === 2
                          ? "bg-pink-500"
                          : index % 5 === 3
                            ? "bg-indigo-500"
                            : "bg-teal-500"
                  }`}
                ></div>
                <CardHeader className="pb-2">
                  <CardTitle className="flex items-center gap-2">
                    <span className="text-2xl">{tech.icon}</span>
                    <span>{tech.name}</span>
                  </CardTitle>
                  <CardDescription>{tech.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between items-center">
                    <div className="flex space-x-1">
                      {Array(5)
                        .fill(0)
                        .map((_, i) => (
                          <div key={i} className={`w-2 h-8 rounded-full ${i < 4 ? "bg-primary/60" : "bg-muted"}`}></div>
                        ))}
                    </div>
                    <div className="text-sm text-muted-foreground">Integration: 80%</div>
                  </div>
                </CardContent>
              </Card>
            </TooltipTrigger>
            <TooltipContent side="bottom" className="max-w-xs">
              <p>{tech.details}</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      ))}
    </div>
  )
}
