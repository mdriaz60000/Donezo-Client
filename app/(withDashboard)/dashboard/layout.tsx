import Sidebar from "@/components/shared/Sidebar"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Task Management Dashboard",
  description: "Dashboard layout",
}


export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="p-4 bg-amber-500">
<div className="flex min-h-screen gap-3">
  <div className="hidden w-64 md:block">
    <Sidebar />
  </div>
  <main className="flex-1 rounded-xl bg-slate-100 p-4">
    {children}
  </main>
</div>
    </div>
   
  );


}