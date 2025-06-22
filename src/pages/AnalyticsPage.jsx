import AnalyticsCharts from "../components/charts/AnalyticsCharts"

const AnalyticsPage = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Analytics Dashboard</h1>
        <p className="text-muted-foreground">Visualize your data with interactive charts and insights.</p>
      </div>
      <AnalyticsCharts />
    </div>
  )
}

export default AnalyticsPage
