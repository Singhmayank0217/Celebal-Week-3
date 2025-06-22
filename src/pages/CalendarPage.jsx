import CalendarDemo from "../components/calendar/CalendarDemo"

const CalendarPage = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Calendar & Events</h1>
        <p className="text-muted-foreground">Manage your schedule and upcoming events efficiently.</p>
      </div>
      <CalendarDemo />
    </div>
  )
}

export default CalendarPage
