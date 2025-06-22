import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar"

const sales = [
  {
    name: "Olivia Martin",
    email: "olivia.martin@email.com",
    amount: "+$1,999.00",
    avatar: "/placeholder-user.jpg",
    initials: "OM",
    time: "2 hours ago",
  },
  {
    name: "Jackson Lee",
    email: "jackson.lee@email.com",
    amount: "+$39.00",
    avatar: "/placeholder-user.jpg",
    initials: "JL",
    time: "4 hours ago",
  },
  {
    name: "Isabella Nguyen",
    email: "isabella.nguyen@email.com",
    amount: "+$299.00",
    avatar: "/placeholder-user.jpg",
    initials: "IN",
    time: "6 hours ago",
  },
  {
    name: "William Kim",
    email: "will@email.com",
    amount: "+$99.00",
    avatar: "/placeholder-user.jpg",
    initials: "WK",
    time: "8 hours ago",
  },
  {
    name: "Sofia Davis",
    email: "sofia.davis@email.com",
    amount: "+$39.00",
    avatar: "/placeholder-user.jpg",
    initials: "SD",
    time: "1 day ago",
  },
]

const RecentSales = () => {
  return (
    <div className="space-y-6">
      {sales.map((sale, index) => (
        <div
          key={sale.email}
          className="flex items-center justify-between p-2 rounded-lg hover:bg-muted/50 transition-colors"
        >
          <div className="flex items-center space-x-4">
            <Avatar className="h-10 w-10 ring-2 ring-primary/10">
              <AvatarImage src={sale.avatar || "/placeholder.svg"} alt="Avatar" />
              <AvatarFallback className="bg-gradient-to-br from-primary/20 to-primary/10 text-primary font-medium">
                {sale.initials}
              </AvatarFallback>
            </Avatar>
            <div className="space-y-1">
              <p className="text-sm font-medium leading-none">{sale.name}</p>
              <p className="text-xs text-muted-foreground">{sale.email}</p>
              <p className="text-xs text-muted-foreground">{sale.time}</p>
            </div>
          </div>
          <div className="font-medium text-green-600">{sale.amount}</div>
        </div>
      ))}
    </div>
  )
}

export default RecentSales
