import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card"
import { Badge } from "../components/ui/badge"
import { Button } from "../components/ui/button"
import { Progress } from "../components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs"
import OverviewChart from "../components/charts/OverviewChart"
import RecentSales from "../components/dashboard/RecentSales"
import { ArrowUpRight, ArrowDownRight, Users, CreditCard, Activity, DollarSign, TrendingUp, Calendar, Target, Sparkles, Zap, Globe } from 'lucide-react'

const stats = [
  {
    title: "Total Revenue",
    value: "$54,231.89",
    change: "+20.1%",
    trend: "up",
    icon: DollarSign,
    color: "text-green-600",
    bgColor: "bg-green-50 dark:bg-green-950",
  },
  {
    title: "Active Users",
    value: "+2,350",
    change: "+180.1%",
    trend: "up",
    icon: Users,
    color: "text-blue-600",
    bgColor: "bg-blue-50 dark:bg-blue-950",
  },
  {
    title: "Total Sales",
    value: "+12,234",
    change: "+19%",
    trend: "up",
    icon: CreditCard,
    color: "text-purple-600",
    bgColor: "bg-purple-50 dark:bg-purple-950",
  },
  {
    title: "Active Sessions",
    value: "+573",
    change: "+201",
    trend: "up",
    icon: Activity,
    color: "text-orange-600",
    bgColor: "bg-orange-50 dark:bg-orange-950",
  },
]

const projects = [
  {
    name: "E-commerce Platform",
    progress: 85,
    status: "In Progress",
    dueDate: "Dec 25, 2024",
    priority: "high",
  },
  {
    name: "Mobile App Redesign",
    progress: 65,
    status: "In Progress",
    dueDate: "Jan 15, 2025",
    priority: "medium",
  },
  {
    name: "API Integration",
    progress: 95,
    status: "Review",
    dueDate: "Dec 20, 2024",
    priority: "high",
  },
  {
    name: "Dashboard Analytics",
    progress: 40,
    status: "Planning",
    dueDate: "Feb 10, 2025",
    priority: "low",
  },
]

const DashboardOverview = () => {
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div className="space-y-1">
          <h1 className="text-4xl font-bold tracking-tight bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
            Welcome back! 👋
          </h1>
          <p className="text-lg text-muted-foreground">Here's what's happening with your projects today.</p>
        </div>
        <div className="flex items-center space-x-3">
          <Button variant="outline" size="sm" className="gap-2">
            <Calendar className="h-4 w-4" />
            Last 30 days
          </Button>
          <Button
            size="sm"
            className="gap-2 bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70"
          >
            <TrendingUp className="h-4 w-4" />
            View Report
          </Button>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, index) => (
          <Card key={stat.title} className="card-hover border-0 shadow-lg bg-gradient-to-br from-card to-card/50">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-3">
              <CardTitle className="text-sm font-medium text-muted-foreground">{stat.title}</CardTitle>
              <div className={`p-2 rounded-lg ${stat.bgColor}`}>
                <stat.icon className={`h-5 w-5 ${stat.color}`} />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold mb-1">{stat.value}</div>
              <div className="flex items-center text-sm">
                {stat.trend === "up" ? (
                  <ArrowUpRight className="mr-1 h-4 w-4 text-green-500" />
                ) : (
                  <ArrowDownRight className="mr-1 h-4 w-4 text-red-500" />
                )}
                <span className={stat.trend === "up" ? "text-green-600" : "text-red-600"}>{stat.change}</span>
                <span className="ml-1 text-muted-foreground">from last month</span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Charts and Tables */}
      <div className="grid gap-6 lg:grid-cols-7">
        <Card className="col-span-4 border-0 shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Sparkles className="h-5 w-5 text-primary" />
              Revenue Overview
            </CardTitle>
            <CardDescription>Revenue and sales data for the last 6 months</CardDescription>
          </CardHeader>
          <CardContent>
            <OverviewChart />
          </CardContent>
        </Card>

        <Card className="col-span-3 border-0 shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Globe className="h-5 w-5 text-primary" />
              Recent Sales
            </CardTitle>
            <CardDescription>You made 265 sales this month.</CardDescription>
          </CardHeader>
          <CardContent>
            <RecentSales />
          </CardContent>
        </Card>
      </div>

      {/* Projects and Quick Actions */}
      <div className="grid gap-6 lg:grid-cols-2">
        <Card className="border-0 shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Target className="h-5 w-5 text-primary" />
              Active Projects
            </CardTitle>
            <CardDescription>Track progress of your ongoing projects</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {projects.map((project, index) => (
              <div key={project.name} className="space-y-3">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">{project.name}</p>
                    <p className="text-sm text-muted-foreground">Due: {project.dueDate}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge
                      variant={
                        project.status === "Review"
                          ? "secondary"
                          : project.status === "In Progress"
                            ? "default"
                            : "outline"
                      }
                      className={
                        project.priority === "high"
                          ? "border-red-200 text-red-700 bg-red-50"
                          : project.priority === "medium"
                            ? "border-yellow-200 text-yellow-700 bg-yellow-50"
                            : "border-green-200 text-green-700 bg-green-50"
                      }
                    >
                      {project.status}
                    </Badge>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Progress</span>
                    <span className="font-medium">{project.progress}%</span>
                  </div>
                  <Progress value={project.progress} className="h-2" />
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card className="border-0 shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Zap className="h-5 w-5 text-primary" />
              Quick Actions
            </CardTitle>
            <CardDescription>Frequently used actions and shortcuts</CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="actions" className="w-full">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="actions">Actions</TabsTrigger>
                <TabsTrigger value="shortcuts">Shortcuts</TabsTrigger>
              </TabsList>
              <TabsContent value="actions" className="space-y-3 mt-6">
                <Button className="w-full justify-start gap-3 h-12" variant="outline">
                  <Users className="h-5 w-5" />
                  Add New User
                </Button>
                <Button className="w-full justify-start gap-3 h-12" variant="outline">
                  <CreditCard className="h-5 w-5" />
                  Create Invoice
                </Button>
                <Button className="w-full justify-start gap-3 h-12" variant="outline">
                  <Activity className="h-5 w-5" />
                  Generate Report
                </Button>
              </TabsContent>
              <TabsContent value="shortcuts" className="space-y-4 mt-6">
                <div className="text-sm space-y-3">
                  <div className="flex justify-between items-center p-2 rounded-lg hover:bg-muted/50">
                    <span>New Project</span>
                    <Badge variant="secondary">Ctrl + N</Badge>
                  </div>
                  <div className="flex justify-between items-center p-2 rounded-lg hover:bg-muted/50">
                    <span>Search</span>
                    <Badge variant="secondary">Ctrl + K</Badge>
                  </div>
                  <div className="flex justify-between items-center p-2 rounded-lg hover:bg-muted/50">
                    <span>Settings</span>
                    <Badge variant="secondary">Ctrl + ,</Badge>
                  </div>
                  <div className="flex justify-between items-center p-2 rounded-lg hover:bg-muted/50">
                    <span>Toggle Theme</span>
                    <Badge variant="secondary">Ctrl + T</Badge>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default DashboardOverview
