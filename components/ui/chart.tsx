"use client"

import type React from "react"

interface BarChartProps {
  data: { [key: string]: number | string }[]
  index: string
  categories: string[]
  colors: string[]
  valueFormatter?: (value: number) => string
  className?: string
}

export const BarChart: React.FC<BarChartProps> = ({ 
  data, 
  index, 
  categories, 
  colors, 
  valueFormatter = (value) => value.toString(),
  className 
}) => {
  const maxValue = Math.max(
    ...data.flatMap(item => 
      categories.map(cat => typeof item[cat] === 'number' ? item[cat] as number : 0)
    )
  )

  return (
    <div className={`w-full ${className || ""}`}>
      <div className="space-y-4">
        {data.map((item, itemIndex) => (
          <div key={itemIndex} className="space-y-2">
            <div className="text-sm font-medium">{item[index]}</div>
            <div className="flex gap-2">
              {categories.map((category, catIndex) => {
                const value = typeof item[category] === 'number' ? item[category] as number : 0
                const percentage = maxValue > 0 ? (value / maxValue) * 100 : 0
                const color = colors[catIndex % colors.length]
                
                return (
                  <div key={category} className="flex-1">
                    <div className="flex justify-between text-xs mb-1">
                      <span className="text-muted-foreground">{category}</span>
                      <span>{valueFormatter(value)}</span>
                    </div>
                    <div className="h-3 bg-muted rounded-full overflow-hidden">
                      <div 
                        className="h-full rounded-full transition-all duration-300"
                        style={{ 
                          width: `${percentage}%`,
                          backgroundColor: color
                        }}
                      />
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        ))}
      </div>
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

export const LineChart: React.FC<LineChartProps> = ({ 
  data, 
  index, 
  categories, 
  colors, 
  valueFormatter = (value) => value.toString(),
  className 
}) => {
  const maxValue = Math.max(
    ...data.flatMap(item => 
      categories.map(cat => typeof item[cat] === 'number' ? item[cat] as number : 0)
    )
  )

  return (
    <div className={`w-full ${className || ""}`}>
      <div className="relative h-48 border rounded-lg p-4 bg-muted/20">
        <div className="absolute inset-4">
          {/* Y-axis labels */}
          <div className="absolute left-0 top-0 bottom-0 flex flex-col justify-between text-xs text-muted-foreground">
            <span>{valueFormatter(maxValue)}</span>
            <span>{valueFormatter(maxValue * 0.5)}</span>
            <span>0</span>
          </div>
          
          {/* Chart area */}
          <div className="ml-12 h-full relative">
            {categories.map((category, catIndex) => {
              const color = colors[catIndex % colors.length]
              const points = data.map((item, itemIndex) => {
                const value = typeof item[category] === 'number' ? item[category] as number : 0
                const x = (itemIndex / (data.length - 1)) * 100
                const y = 100 - ((value / maxValue) * 100)
                return `${x},${y}`
              }).join(' ')

              return (
                <svg key={category} className="absolute inset-0 w-full h-full">
                  <polyline
                    fill="none"
                    stroke={color}
                    strokeWidth="2"
                    points={points}
                    vectorEffect="non-scaling-stroke"
                  />
                  {data.map((item, itemIndex) => {
                    const value = typeof item[category] === 'number' ? item[category] as number : 0
                    const x = (itemIndex / (data.length - 1)) * 100
                    const y = 100 - ((value / maxValue) * 100)
                    return (
                      <circle
                        key={itemIndex}
                        cx={`${x}%`}
                        cy={`${y}%`}
                        r="3"
                        fill={color}
                      />
                    )
                  })}
                </svg>
              )
            })}
          </div>
          
          {/* X-axis labels */}
          <div className="absolute bottom-0 left-12 right-0 flex justify-between text-xs text-muted-foreground mt-2">
            {data.map((item, itemIndex) => (
              <span key={itemIndex}>{item[index]}</span>
            ))}
          </div>
        </div>
      </div>
      
      {/* Legend */}
      <div className="flex justify-center gap-4 mt-4">
        {categories.map((category, catIndex) => (
          <div key={category} className="flex items-center gap-2">
            <div 
              className="w-3 h-3 rounded-full"
              style={{ backgroundColor: colors[catIndex % colors.length] }}
            />
            <span className="text-sm">{category}</span>
          </div>
        ))}
      </div>
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

export const PieChart: React.FC<PieChartProps> = ({ 
  data, 
  colors, 
  valueFormatter = (value) => value.toString(),
  className 
}) => {
  const total = data.reduce((sum, item) => sum + item.value, 0)
  let currentAngle = 0

  return (
    <div className={`w-full flex items-center justify-center ${className || ""}`}>
      <div className="relative">
        <svg width="160" height="160" className="transform -rotate-90">
          {data.map((item, index) => {
            const percentage = (item.value / total) * 100
            const angle = (item.value / total) * 360
            const startAngle = currentAngle
            const endAngle = currentAngle + angle
            
            const startX = 80 + 60 * Math.cos((startAngle * Math.PI) / 180)
            const startY = 80 + 60 * Math.sin((startAngle * Math.PI) / 180)
            const endX = 80 + 60 * Math.cos((endAngle * Math.PI) / 180)
            const endY = 80 + 60 * Math.sin((endAngle * Math.PI) / 180)
            
            const largeArcFlag = angle > 180 ? 1 : 0
            
            const pathData = [
              `M 80 80`,
              `L ${startX} ${startY}`,
              `A 60 60 0 ${largeArcFlag} 1 ${endX} ${endY}`,
              'Z'
            ].join(' ')
            
            currentAngle += angle
            
            return (
              <path
                key={index}
                d={pathData}
                fill={colors[index % colors.length]}
                stroke="white"
                strokeWidth="2"
              />
            )
          })}
        </svg>
        
        {/* Legend */}
        <div className="absolute -right-32 top-0 space-y-2">
          {data.map((item, index) => (
            <div key={index} className="flex items-center gap-2 text-sm">
              <div 
                className="w-3 h-3 rounded-full"
                style={{ backgroundColor: colors[index % colors.length] }}
              />
              <span className="whitespace-nowrap">{item.name}</span>
              <span className="text-muted-foreground">({valueFormatter(item.value)})</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
