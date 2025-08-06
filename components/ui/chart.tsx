// components/ui/chart.tsx
import type React from "react"

interface BarChartProps {
  data: { [key: string]: number | string }[]
  index: string
  categories: string[]
  colors: string[]
  valueFormatter?: (value: number) => string
  className?: string
}

export const BarChart: React.FC<BarChartProps> = ({ data, index, categories, colors, valueFormatter, className }) => {
  return (
    <div className={`bar-chart ${className || ""}`}>
      {/* Implement bar chart here using data, index, categories, and colors */}
      <div>BarChart Placeholder</div>
      <pre>{JSON.stringify({ data, index, categories, colors, valueFormatter }, null, 2)}</pre>
    </div>
  )
}

interface LineChartProps {
  data: { [key: string]: number | string }[]
  index: string
  categories: string[]
  colors: string[]
  valueFormatter?: (value: number) => string
  className?: string
}

export const LineChart: React.FC<LineChartProps> = ({ data, index, categories, colors, valueFormatter, className }) => {
  return (
    <div className={`line-chart ${className || ""}`}>
      {/* Implement line chart here using data, index, categories, and colors */}
      <div>LineChart Placeholder</div>
      <pre>{JSON.stringify({ data, index, categories, colors, valueFormatter }, null, 2)}</pre>
    </div>
  )
}

interface PieChartProps {
  data: { name: string; value: number }[]
  index: string
  category: string
  colors: string[]
  valueFormatter?: (value: number) => string
  className?: string
}

export const PieChart: React.FC<PieChartProps> = ({ data, index, category, colors, valueFormatter, className }) => {
  return (
    <div className={`pie-chart ${className || ""}`}>
      {/* Implement pie chart here using data and colors */}
      <div>PieChart Placeholder</div>
      <pre>{JSON.stringify({ data, index, category, colors, valueFormatter }, null, 2)}</pre>
    </div>
  )
}
