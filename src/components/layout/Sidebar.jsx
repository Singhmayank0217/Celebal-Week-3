"use client"
import { Link, useLocation } from "react-router-dom"
import { cn } from "../../lib/utils"
import { Button } from "../ui/button"
import { ScrollArea } from "../ui/scroll-area"
import { Sheet, SheetContent } from "../ui/sheet"
import { BarChart3, Calendar, Home, Kanban, Settings, Table, X, Zap, TrendingUp } from 'lucide-react'

const navigation = [
  { name: "Dashboard", href: "/", icon: Home },
  { name: "Analytics", href: "/analytics", icon: BarChart3 },
  { name: "Data Tables", href: "/tables", icon: Table },
  { name: "Calendar", href: "/calendar", icon: Calendar },
  { name: "Kanban Board", href: "/kanban", icon: Kanban },
  { name: "Settings", href: "/settings", icon: Settings },
]

const Sidebar = ({ open, setOpen }) => {
  const location = useLocation()

  const SidebarContent = () => (
    <div className="flex h-full flex-col">
      <div className="flex h-16 items-center justify-between px-6 border-b">
        <div className="flex items-center space-x-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-primary/80 shadow-lg">
            <Zap className="h-5 w-5 text-primary-foreground" />
          </div>
          <div>
            <span className="text-xl font-bold bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
            Celebal
            </span>
            <div className="text-xs text-muted-foreground">Admin Pro</div>
          </div>
        </div>
        <Button variant="ghost" size="icon" className="lg:hidden" onClick={() => setOpen(false)}>
          <X className="h-4 w-4" />
        </Button>
      </div>

      <ScrollArea className="flex-1 px-4 py-6">
        <nav className="space-y-2">
          {navigation.map((item) => {
            const isActive = location.pathname === item.href
            return (
              <Link
                key={item.name}
                to={item.href}
                className={cn(
                  "flex items-center space-x-3 rounded-xl px-4 py-3 text-sm font-medium transition-all duration-200 hover:bg-accent hover:text-accent-foreground group",
                  isActive
                    ? "bg-primary text-primary-foreground shadow-lg shadow-primary/25"
                    : "text-muted-foreground hover:text-foreground",
                )}
                onClick={() => setOpen(false)}
              >
                <item.icon
                  className={cn(
                    "h-5 w-5 transition-transform duration-200 group-hover:scale-110",
                    isActive ? "text-primary-foreground" : "",
                  )}
                />
                <span>{item.name}</span>
                {isActive && <div className="ml-auto h-2 w-2 rounded-full bg-primary-foreground animate-pulse" />}
              </Link>
            )
          })}
        </nav>

        <div className="mt-8 p-4 rounded-xl bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20">
          <div className="flex items-center space-x-2 mb-2">
            <TrendingUp className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium">Quick Stats</span>
          </div>
          <div className="space-y-2 text-xs text-muted-foreground">
            <div className="flex justify-between">
              <span>Active Users</span>
              <span className="font-medium text-foreground">1,234</span>
            </div>
            <div className="flex justify-between">
              <span>Revenue</span>
              <span className="font-medium text-green-600">$45.2K</span>
            </div>
            <div className="flex justify-between">
              <span>Growth</span>
              <span className="font-medium text-primary">+12.5%</span>
            </div>
          </div>
        </div>
      </ScrollArea>
    </div>
  )

  return (
    <>
      {/* Desktop Sidebar */}
      <div className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-64 lg:flex-col">
        <div className="flex grow flex-col gap-y-5 overflow-y-auto border-r bg-card/50 backdrop-blur-sm">
          <SidebarContent />
        </div>
      </div>

      {/* Mobile Sidebar */}
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetContent side="left" className="w-64 p-0">
          <SidebarContent />
        </SheetContent>
      </Sheet>
    </>
  )
}

export default Sidebar
