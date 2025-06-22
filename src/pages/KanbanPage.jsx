import KanbanBoard from "../components/kanban/KanbanBoard"

const KanbanPage = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Project Management</h1>
        <p className="text-muted-foreground">Organize your tasks with intuitive drag-and-drop functionality.</p>
      </div>
      <KanbanBoard />
    </div>
  )
}

export default KanbanPage
