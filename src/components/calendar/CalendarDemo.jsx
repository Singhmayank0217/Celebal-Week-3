"use client"

import { useState } from "react"
import { Calendar } from "../ui/calendar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card"
import { Badge } from "../ui/badge"
import { Button } from "../ui/button"
import { Separator } from "../ui/separator"
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar"
import { Clock, MapPin, Users, Plus, Video, Coffee, Briefcase } from "lucide-react"

const events = [
  {
    id: 1,
    title: "Team Standup Meeting",
    time: "09:00 AM",
    duration: "30 minutes",
    attendees: 8,
    location: "Conference Room A",
    type: "meeting",
    color: "bg-blue-500",
    avatar: "/placeholder-user.jpg",
  },
  {
    id: 2,
    title: "Product Review Session",
    time: "02:00 PM",
    duration: "2 hours",
    attendees: 12,
    location: "Virtual Meeting",
    type: "review",
    color: "bg-green-500",
    avatar: "/placeholder-user.jpg",
  },
  {
    id: 3,
    title: "Client Presentation",
    time: "04:00 PM",
    duration: "1.5 hours",
    attendees: 5,
    location: "Client Office",
    type: "presentation",
    color: "bg-purple-500",
    avatar: "/placeholder-user.jpg",
  },
  {
    id: 4,
    title: "Coffee Chat with Design Team",
    time: "10:30 AM",
    duration: "45 minutes",
    attendees: 4,
    location: "Cafeteria",
    type: "casual",
    color: "bg-orange-500",
    avatar: "/placeholder-user.jpg",
  },
]

const CalendarDemo = () => {
  const [date, setDate] = useState(new Date())

  const getEventIcon = (type) => {
    switch (type) {
      case "meeting":
        return <Briefcase className="h-4 w-4" />
      case "review":
        return <Video className="h-4 w-4" />
      case "presentation":
        return <Users className="h-4 w-4" />
      case "casual":
        return <Coffee className="h-4 w-4" />
      default:
        return <Clock className="h-4 w-4" />
    }
  }

  const getEventBadgeVariant = (type) => {
    switch (type) {
      case "meeting":
        return "default"
      case "review":
        return "secondary"
      case "presentation":
        return "outline"
      case "casual":
        return "destructive"
      default:
        return "secondary"
    }
  }

  return (
    <div className="grid gap-6 lg:grid-cols-3">
      <Card className="lg:col-span-2 border-0 shadow-lg">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Clock className="h-5 w-5 text-primary" />
            Calendar View
          </CardTitle>
          <CardDescription>Schedule and manage your events and meetings.</CardDescription>
        </CardHeader>
        <CardContent>
          <Calendar mode="single" selected={date} onSelect={setDate} className="rounded-lg border w-full" />
        </CardContent>
      </Card>

      <div className="space-y-6">
        <Card className="border-0 shadow-lg">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
            <CardTitle className="text-lg">Today's Schedule</CardTitle>
            <Button size="sm" className="gap-2">
              <Plus className="h-4 w-4" />
              Add Event
            </Button>
          </CardHeader>
          <CardContent className="space-y-4">
            {events.map((event, index) => (
              <div key={event.id}>
                <div className="space-y-3">
                  <div className="flex items-start justify-between">
                    <div className="flex items-start space-x-3">
                      <div className={`p-2 rounded-lg ${event.color} bg-opacity-10`}>{getEventIcon(event.type)}</div>
                      <div className="space-y-1">
                        <h4 className="font-medium text-sm leading-tight">{event.title}</h4>
                        <Badge variant={getEventBadgeVariant(event.type)} className="text-xs">
                          {event.type}
                        </Badge>
                      </div>
                    </div>
                    <Avatar className="h-6 w-6">
                      <AvatarImage src={event.avatar || "/placeholder.svg"} />
                      <AvatarFallback className="text-xs bg-primary/10 text-primary">
                        {event.title.charAt(0)}
                      </AvatarFallback>
                    </Avatar>
                  </div>

                  <div className="ml-11 space-y-2 text-xs text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Clock className="h-3 w-3" />
                      <span>
                        {event.time} ({event.duration})
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="h-3 w-3" />
                      <span>{event.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="h-3 w-3" />
                      <span>{event.attendees} attendees</span>
                    </div>
                  </div>
                </div>
                {index < events.length - 1 && <Separator className="mt-4" />}
              </div>
            ))}
          </CardContent>
        </Card>

        <Card className="border-0 shadow-lg">
          <CardHeader>
            <CardTitle className="text-lg">Calendar Stats</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-sm text-muted-foreground">This Week</span>
              <span className="font-semibold text-primary">18 events</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-muted-foreground">This Month</span>
              <span className="font-semibold text-blue-600">72 events</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-muted-foreground">Upcoming</span>
              <span className="font-semibold text-green-600">34 events</span>
            </div>
            <Separator />
            <div className="flex justify-between items-center">
              <span className="text-sm text-muted-foreground">Meeting Hours</span>
              <span className="font-semibold">24.5h</span>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default CalendarDemo
