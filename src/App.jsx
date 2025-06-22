import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { ThemeProvider } from "./contexts/ThemeContext"
import { Toaster } from "./components/ui/toaster"
import DashboardLayout from "./components/layout/DashboardLayout"
import DashboardOverview from "./pages/DashboardOverview"
import AnalyticsPage from "./pages/AnalyticsPage"
import TablesPage from "./pages/TablesPage"
import CalendarPage from "./pages/CalendarPage"
import KanbanPage from "./pages/KanbanPage"
import SettingsPage from "./pages/SettingsPage"
import "./App.css"

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="App">
          <DashboardLayout>
            <Routes>
              <Route path="/" element={<DashboardOverview />} />
              <Route path="/analytics" element={<AnalyticsPage />} />
              <Route path="/tables" element={<TablesPage />} />
              <Route path="/calendar" element={<CalendarPage />} />
              <Route path="/kanban" element={<KanbanPage />} />
              <Route path="/settings" element={<SettingsPage />} />
            </Routes>
          </DashboardLayout>
          <Toaster />
        </div>
      </Router>
    </ThemeProvider>
  )
}

export default App
