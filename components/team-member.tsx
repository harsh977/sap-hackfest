import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

interface TeamMemberProps {
  name: string
  role: string
  goal: string
  image: string
}

export function TeamMember({ name, role, goal, image }: TeamMemberProps) {
  // Get initials from name
  const initials = name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .toUpperCase()
    .substring(0, 2)

  return (
    <Card className="overflow-hidden border-0 shadow-md hover:shadow-lg transition-shadow duration-300">
      <CardHeader className="p-0">
        <div className="aspect-square relative overflow-hidden">
          <Avatar className="h-full w-full rounded-none">
            <AvatarImage src={image || "/placeholder.svg"} alt={name} />
            <AvatarFallback className="rounded-none text-4xl">{initials}</AvatarFallback>
          </Avatar>
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
          <div className="absolute bottom-0 left-0 right-0 p-4">
            <h3 className="font-bold text-white">{name}</h3>
            <p className="text-white/80 text-sm">{role}</p>
          </div>
        </div>
      </CardHeader>
      <CardContent className="p-4">
        <div className="flex items-center gap-2">
          <div className="w-1 h-6 bg-primary rounded-full"></div>
          <p className="text-sm">Goal: {goal}</p>
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0 flex justify-between">
        <div className="flex -space-x-2">
          {[1, 2, 3].map((i) => (
            <div key={i} className="w-6 h-6 rounded-full bg-muted border-2 border-background"></div>
          ))}
        </div>
        <div className="text-xs text-muted-foreground">3 shared projects</div>
      </CardFooter>
    </Card>
  )
}
