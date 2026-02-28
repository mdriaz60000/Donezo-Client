"use client"

import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"

import { Bell, Mail, Search, Command } from "lucide-react"

export default function Navbar() {
  return (
    <nav className="flex h-24 w-full items-center justify-between rounded-3xl bg-muted px-6">
      
      <div className="flex items-center gap-2">
        <div className="relative w-[400px]">
          <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />

          <Input
            placeholder="Search tasks, projects, and more..."
            className="pl-12 pr-20 bg-background rounded-4xl py-6 text-base"
          />

          
          <div className="pointer-events-none absolute right-3 top-1/2 flex -translate-y-1/2 items-center gap-1.5 rounded-lg border bg-muted px-3 py-1.5 text-sm text-muted-foreground">
            <Command className="h-4 w-4" />
            <span>K</span>
          </div>
        </div>
      </div>

   
      <div className="flex items-center gap-4">
        <Button 
          size="icon" 
          variant="ghost" 
          aria-label="Inbox"
          className="h-12 w-12 rounded-full bg-background"
        >
          <Mail className="h-6 w-6" />
        </Button>

        <Button 
          size="icon" 
          variant="ghost" 
          aria-label="Notifications"
          className="h-12 w-12 rounded-full bg-background"
        >
          <Bell className="h-6 w-6" />
        </Button>

        <div className="flex items-center gap-3 rounded-2xl px-3 py-2 transition  ">
          <Avatar className="h-14 w-14 bg-white">
            <AvatarImage className="bg-white" src="/avatar.png" alt="Totok Michael" />
            <AvatarFallback className="text-lg bg-background">TM</AvatarFallback>
          </Avatar>

          <div className="hidden flex-col leading-tight sm:flex">
            <p className="font-medium text-base">Mohammad Riaz</p>
            <p className="text-muted-foreground text-sm">riaz@gmail.com</p>
          </div>
        </div>
      </div>
    </nav>
  )
}