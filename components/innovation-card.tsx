import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { BarChart2, Filter, MessageSquare, Shield } from "lucide-react"

interface InnovationCardProps {
  title: string
  description: string
  metric: string
  icon: string
}

export function InnovationCard({ title, description, metric, icon }: InnovationCardProps) {
  const getIcon = () => {
    switch (icon) {
      case "filter":
        return <Filter className="h-5 w-5" />
      case "message-square":
        return <MessageSquare className="h-5 w-5" />
      case "shield":
        return <Shield className="h-5 w-5" />
      case "bar-chart":
        return <BarChart2 className="h-5 w-5" />
      default:
        return <Filter className="h-5 w-5" />
    }
  }

  return (
    <Card className="overflow-hidden border-0 shadow-md hover:shadow-lg transition-shadow duration-300">
      <div className="h-1 w-full bg-gradient-to-r from-blue-500 to-purple-600"></div>
      <CardHeader className="pb-2">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary">
            {getIcon()}
          </div>
          <CardTitle>{title}</CardTitle>
        </div>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-sm mb-4">{description}</CardDescription>
        <div className="flex items-center gap-2 text-sm font-medium">
          <div className="w-1 h-6 bg-primary rounded-full"></div>
          <div>{metric}</div>
        </div>
      </CardContent>
    </Card>
  )
}
