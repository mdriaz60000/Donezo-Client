"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import {
  LayoutDashboard,
  CheckSquare,
  Calendar,
  BarChart3,
  Users,
  Settings,
  HelpCircle,
  LogOut,
  Globe
} from "lucide-react"

const menu = [
  { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
  { name: "Tasks", href: "/tasks", icon: CheckSquare, badge: "14" },
  { name: "Calendar", href: "/calendar", icon: Calendar },
  { name: "Analytics", href: "/analytics", icon: BarChart3 },
  { name: "Team", href: "/team", icon: Users },
]

const general = [
  { name: "Settings", href: "/settings", icon: Settings },
  { name: "Help", href: "/help", icon: HelpCircle },
  { name: "Logout", href: "/logout", icon: LogOut },
]

export default function Sidebar() {
  const pathname = usePathname()

  return (
    <aside className="sticky top-0 flex h-screen flex-col rounded-2xl bg-muted px-4 py-6">
      
     
      <div className="mb-8 flex items-center justify-center gap-2 text-2xl font-bold">
        <Globe className="h-8 w-8 text-primary" />
        <span>Donezo</span>
      </div>

      
      <div className="mb-6">
        <p className="mb-3  font-semibold uppercase tracking-wide text-muted-foreground">
          Menu
        </p>
        <nav className="space-y-1">
          {menu.map((item) => {
            const active = pathname === item.href
            return (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "relative flex items-center gap-3 rounded-lg px-3 py-2 font-medium transition hover:bg-background",
                  active &&
                    "bg-background text-primary before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:h-5 before:w-1 before:rounded-r-full before:bg-primary"
                )}
              >
                <item.icon className="h-4 w-4" />
                {item.name}

                {item.badge && (
                  <span className="ml-auto rounded-full bg-emerald-100 px-2 py-0.5  text-emerald-600">
                    {item.badge}
                  </span>
                )}
              </Link>
            )
          })}
        </nav>
      </div>

      
      <div className="mb-auto">
        <p className="mb-3  font-semibold uppercase tracking-wide text-muted-foreground">
          General
        </p>
        <nav className="space-y-1">
          {general.map((item) => {
            const active = pathname === item.href
            return (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "flex items-center gap-3 rounded-lg px-3 py-2  font-medium transition hover:bg-background",
                  active && "bg-background text-primary"
                )}
              >
                <item.icon className="h-4 w-4" />
                {item.name}
              </Link>
            )
          })}
        </nav>
      </div>

  
      <div className="mt-6 rounded-xl bg-primary p-4 text-white">
        <p className="font-medium">Download our Mobile App</p>
        <p className=" opacity-80">Get instant access</p>
        <button className="mt-3 w-full rounded-lg bg-white py-2 font-semibold text-emerald-600 transition hover:bg-white/90">
          Download
        </button>
      </div>
    </aside>
  )
}