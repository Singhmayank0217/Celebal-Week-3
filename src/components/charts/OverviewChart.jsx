import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts"

const data = [
  { name: "Jan", total: 2400, growth: 12 },
  { name: "Feb", total: 1398, growth: -5 },
  { name: "Mar", total: 9800, growth: 25 },
  { name: "Apr", total: 3908, growth: 8 },
  { name: "May", total: 4800, growth: 15 },
  { name: "Jun", total: 3800, growth: 10 },
]

const OverviewChart = () => {
  return (
    <ResponsiveContainer width="100%" height={350}>
      <BarChart data={data}>
        <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
        <XAxis dataKey="name" stroke="hsl(var(--muted-foreground))" fontSize={12} tickLine={false} axisLine={false} />
        <YAxis
          stroke="hsl(var(--muted-foreground))"
          fontSize={12}
          tickLine={false}
          axisLine={false}
          tickFormatter={(value) => `$${value}`}
        />
        <Tooltip
          contentStyle={{
            backgroundColor: "hsl(var(--card))",
            border: "1px solid hsl(var(--border))",
            borderRadius: "8px",
            boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
          }}
          labelStyle={{ color: "hsl(var(--foreground))" }}
        />
        <Bar
          dataKey="total"
          fill="hsl(var(--primary))"
          radius={[6, 6, 0, 0]}
          className="hover:opacity-80 transition-opacity"
        />
      </BarChart>
    </ResponsiveContainer>
  )
}

export default OverviewChart
