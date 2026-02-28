import Navbar from "@/components/shared/Navbar";
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
    <div className="p-4 ">
<div className="flex min-h-screen gap-3">
  <div className="hidden w-64 md:block">
    <Sidebar />
  </div>
  <main className="flex-1 rounded-xl  ">
    <Navbar ></Navbar>
    {children}
  </main>
</div>
    </div>
   
  );


}