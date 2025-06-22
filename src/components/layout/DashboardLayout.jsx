"use client"

import { useState } from "react"
import { cn } from "../../lib/utils"
import Sidebar from "./Sidebar"
import Header from "./Header"

const DashboardLayout = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <div className="min-h-screen bg-background">
      <Sidebar open={sidebarOpen} setOpen={setSidebarOpen} />
      <div className={cn("transition-all duration-300 ease-in-out", "lg:ml-64")}>
        <Header onMenuClick={() => setSidebarOpen(true)} />
        <main className="p-6">
          <div className="mx-auto max-w-7xl animate-fade-in">{children}</div>
        </main>
      </div>
    </div>
  )
}

export default DashboardLayout
