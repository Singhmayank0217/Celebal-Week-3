import DataTablesDemo from "../components/tables/DataTablesDemo"

const TablesPage = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Data Management</h1>
        <p className="text-muted-foreground">Manage your data with powerful tables and advanced filters.</p>
      </div>
      <DataTablesDemo />
    </div>
  )
}

export default TablesPage
