"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card"
import { Badge } from "../ui/badge"
import { Button } from "../ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar"
import { Plus, MoreHorizontal, Calendar, MessageSquare, Paperclip, Flag } from "lucide-react"

const initialData = [
  {
    id: "todo",
    title: "To Do",
    tasks: [
      {
        id: "1",
        title: "Design System Overhaul",
        description: "Update the design system with new components and comprehensive guidelines",
        priority: "high",
        assignee: {
          name: "John Doe",
          avatar: "/placeholder-user.jpg",
          initials: "JD",
        },
        dueDate: "Dec 20",
        comments: 3,
        attachments: 2,
        tags: ["Design", "System"],
      },
      {
        id: "2",
        title: "User Research Analysis",
        description: "Conduct comprehensive user interviews for the new feature implementation",
        priority: "medium",
        assignee: {
          name: "Jane Smith",
          avatar: "/placeholder-user.jpg",
          initials: "JS",
        },
        dueDate: "Dec 25",
        comments: 1,
        attachments: 0,
        tags: ["Research", "UX"],
      },
    ],
  },
  {
    id: "inprogress",
    title: "In Progress",
    tasks: [
      {
        id: "3",
        title: "Payment API Integration",
        description: "Integrate the new payment gateway API with the frontend application",
        priority: "high",
        assignee: {
          name: "Bob Johnson",
          avatar: "/placeholder-user.jpg",
          initials: "BJ",
        },
        dueDate: "Dec 18",
        comments: 5,
        attachments: 1,
        tags: ["API", "Backend"],
      },
      {
        id: "6",
        title: "Mobile Responsive Design",
        description: "Optimize the dashboard for mobile and tablet devices",
        priority: "medium",
        assignee: {
          name: "Sarah Wilson",
          avatar: "/placeholder-user.jpg",
          initials: "SW",
        },
        dueDate: "Dec 22",
        comments: 2,
        attachments: 3,
        tags: ["Mobile", "CSS"],
      },
    ],
  },
  {
    id: "review",
    title: "Review",
    tasks: [
      {
        id: "4",
        title: "Mobile App Testing Suite",
        description: "Comprehensive testing of the mobile app across different devices and OS versions",
        priority: "medium",
        assignee: {
          name: "Alice Brown",
          avatar: "/placeholder-user.jpg",
          initials: "AB",
        },
        dueDate: "Dec 22",
        comments: 2,
        attachments: 3,
        tags: ["Testing", "QA"],
      },
    ],
  },
  {
    id: "done",
    title: "Done",
    tasks: [
      {
        id: "5",
        title: "Landing Page Redesign",
        description: "Complete redesign of the company landing page with modern UI/UX principles",
        priority: "low",
        assignee: {
          name: "Charlie Wilson",
          avatar: "/placeholder-user.jpg",
          initials: "CW",
        },
        dueDate: "Dec 15",
        comments: 8,
        attachments: 5,
        tags: ["Design", "Frontend"],
      },
    ],
  },
]

const KanbanBoard = () => {
  const [columns, setColumns] = useState(initialData)

  const getPriorityColor = (priority) => {
    switch (priority) {
      case "high":
        return "bg-red-50 text-red-700 border-red-200"
      case "medium":
        return "bg-yellow-50 text-yellow-700 border-yellow-200"
      case "low":
        return "bg-green-50 text-green-700 border-green-200"
      default:
        return "bg-gray-50 text-gray-700 border-gray-200"
    }
  }

  const getPriorityIcon = (priority) => {
    return (
      <Flag
        className={`h-3 w-3 ${
          priority === "high" ? "text-red-500" : priority === "medium" ? "text-yellow-500" : "text-green-500"
        }`}
      />
    )
  }

  const getColumnColor = (columnId) => {
    switch (columnId) {
      case "todo":
        return "border-t-gray-500"
      case "inprogress":
        return "border-t-blue-500"
      case "review":
        return "border-t-yellow-500"
      case "done":
        return "border-t-green-500"
      default:
        return "border-t-gray-500"
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">Project Board</h2>
          <p className="text-muted-foreground">Drag and drop tasks to update their status</p>
        </div>
        <Button className="gap-2">
          <Plus className="h-4 w-4" />
          Add Task
        </Button>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
        {columns.map((column) => (
          <Card key={column.id} className={`flex flex-col border-0 shadow-lg border-t-4 ${getColumnColor(column.id)}`}>
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <CardTitle className="text-sm font-semibold flex items-center gap-2">
                  {column.title}
                  <Badge variant="secondary" className="text-xs font-medium">
                    {column.tasks.length}
                  </Badge>
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent className="flex-1 space-y-3">
              {column.tasks.map((task) => (
                <Card
                  key={task.id}
                  className="cursor-pointer transition-all duration-200 hover:shadow-md hover:scale-[1.02] border-0 bg-gradient-to-br from-card to-card/50"
                >
                  <CardContent className="p-4">
                    <div className="space-y-3">
                      <div className="flex items-start justify-between">
                        <h4 className="font-semibold text-sm leading-tight">{task.title}</h4>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-6 w-6 opacity-0 group-hover:opacity-100 transition-opacity"
                        >
                          <MoreHorizontal className="h-3 w-3" />
                        </Button>
                      </div>

                      <p className="text-xs text-muted-foreground line-clamp-2 leading-relaxed">{task.description}</p>

                      <div className="flex flex-wrap gap-1">
                        {task.tags.map((tag) => (
                          <Badge key={tag} variant="outline" className="text-xs px-2 py-0">
                            {tag}
                          </Badge>
                        ))}
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          {getPriorityIcon(task.priority)}
                          <Badge className={`text-xs ${getPriorityColor(task.priority)}`}>{task.priority}</Badge>
                        </div>
                        <div className="flex items-center text-xs text-muted-foreground gap-1">
                          <Calendar className="h-3 w-3" />
                          {task.dueDate}
                        </div>
                      </div>

                      <div className="flex items-center justify-between pt-2 border-t border-border/50">
                        <Avatar className="h-7 w-7 ring-2 ring-primary/10">
                          <AvatarImage src={task.assignee.avatar || "/placeholder.svg"} />
                          <AvatarFallback className="text-xs bg-primary/10 text-primary font-medium">
                            {task.assignee.initials}
                          </AvatarFallback>
                        </Avatar>

                        <div className="flex items-center space-x-3 text-xs text-muted-foreground">
                          {task.comments > 0 && (
                            <div className="flex items-center gap-1">
                              <MessageSquare className="h-3 w-3" />
                              {task.comments}
                            </div>
                          )}
                          {task.attachments > 0 && (
                            <div className="flex items-center gap-1">
                              <Paperclip className="h-3 w-3" />
                              {task.attachments}
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}

              <Button
                variant="ghost"
                className="w-full justify-start text-muted-foreground hover:text-foreground hover:bg-muted/50 border-2 border-dashed border-muted-foreground/20 hover:border-muted-foreground/40 transition-all"
              >
                <Plus className="mr-2 h-4 w-4" />
                Add a card
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

export default KanbanBoard
