'use client'

import * as React from 'react'
import { CalendarIcon, Users, Home, Settings, LogOut } from 'lucide-react'
import CalendarAndEvents from '@/components/ui/Sections/calendar-events'
import Members from '@/components/ui/Sections/members'

export default function AdminDashboard() {
  return (
    <>
      <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 hidden lg:block bg-white shadow-md">
        <nav className="mt-6">
          <a href="#" className="flex items-center px-4 py-2 text-gray-700 bg-gray-200">
            <Home className="w-5 h-5 mr-2" />
            Dashboard
          </a>
          <a href="#" className="flex items-center px-4 py-2 mt-2 text-gray-600 hover:bg-gray-200">
            <Users className="w-5 h-5 mr-2" />
            Members
          </a>
          <a href="#" className="flex items-center px-4 py-2 mt-2 text-gray-600 hover:bg-gray-200">
            <CalendarIcon className="w-5 h-5 mr-2" />
            Events
          </a>
          <a href="#" className="flex items-center px-4 py-2 mt-2 text-gray-600 hover:bg-gray-200">
            <Settings className="w-5 h-5 mr-2" />
            Settings
          </a>
          <a href="/page" className="flex items-center px-4 py-2 mt-2 text-gray-600 hover:bg-gray-200">
            <LogOut className="w-5 h-5 mr-2" />
            Logout
          </a>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8 overflow-y-auto">
        <h1 className="text-3xl font-semibold text-center text-gray-800 mb-6">Admin Dashboard</h1>

        <Members />
        <CalendarAndEvents />

      </main>
    </div>
    </>
  )
}