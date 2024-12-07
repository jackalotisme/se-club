"use client";

import React, { useState } from 'react';
import { CalendarIcon, Users, Home, Settings, PlusCircle, LogOut } from 'lucide-react';
import { Calendar } from '@/components/ui/calendar';
import { Button } from '@/components/ui/button';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

// Members API --------------------------------

const clubMembers = [
  { id: 1, name: 'Alice Johnson', email: 'alice@example.com', role: 'President', joinedAt: '2023-01-15' },
  { id: 2, name: 'Bob Smith', email: 'bob@example.com', role: 'Vice President', joinedAt: '2023-02-01' },
  { id: 3, name: 'Charlie Brown', email: 'charlie@example.com', role: 'Secretary', joinedAt: '2023-02-15' },
  { id: 4, name: 'Diana Ross', email: 'diana@example.com', role: 'Treasurer', joinedAt: '2023-03-01' },
  { id: 5, name: 'Ethan Hunt', email: 'ethan@example.com', role: 'Member', joinedAt: '2023-03-15' },
];

// Generate time options

const generateTimeOptions = () => {
  const options = [];
  for (let hour = 0; hour < 24; hour++) {
    for (let minute = 0; minute < 60; minute += 30) {
      const time = `${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}`;
      options.push(time);
    }
  }
  return options;
};

const timeOptions = generateTimeOptions();

const AdminDashboard = () => {
  const [date, setDate] = useState(new Date());
  const [events, setEvents] = useState([]);
  const [newEvent, setNewEvent] = useState({ title: '', description: '', time: '09:00', ampm: 'AM' });

  const handleAddEvent = () => {
    if (date && newEvent.title) {
      const eventDateTime = new Date(date);
      let [hours, minutes] = newEvent.time.split(':');
      hours = parseInt(hours, 10);
      if (newEvent.ampm === 'PM' && hours !== 12) {
        hours += 12;
      } else if (newEvent.ampm === 'AM' && hours === 12) {
        hours = 0;
      }
      eventDateTime.setHours(hours, parseInt(minutes, 10));

      setEvents([...events, { 
        date: eventDateTime, 
        title: newEvent.title, 
        description: newEvent.description,
        time: `${newEvent.time} ${newEvent.ampm}`
      }]);
      setNewEvent({ title: '', description: '', time: '09:00', ampm: 'AM' });
    }
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Side Navigation */}
      <aside className="w-64 bg-white shadow-md">
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
          <a href="#" className="flex items-center px-4 py-2 mt-2 text-gray-600 hover:bg-gray-200">
            <LogOut className="w-5 h-5 mr-2" />
            Logout
          </a>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8 overflow-y-auto">
        <h1 className="text-3xl font-semibold text-center text-gray-800 mb-6">Admin Dashboard</h1>

        {/* Members Table */}
        <section className="bg-white p-6 rounded-lg shadow mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Club Members</h2>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Role</TableHead>
                <TableHead>Joined</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {clubMembers.map((member) => (
                <TableRow key={member.id}>
                  <TableCell>{member.name}</TableCell>
                  <TableCell>{member.email}</TableCell>
                  <TableCell>{member.role}</TableCell>
                  <TableCell>{new Date(member.joinedAt).toLocaleDateString()}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </section>

        {/* Calendar and Event Creation */}
        <section className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Club Calendar</h2>
          <div className="flex flex-col md:flex-row gap-8">
            <div className="flex-1">
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                className="rounded-md border"
              />
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-medium mb-2">Events</h3>
              <ul className="space-y-2">
                {events.map((event, index) => (
                  <li key={index} className="bg-gray-100 p-2 rounded">
                    <strong>{event.date.toDateString()} at {event.time}: {event.title}</strong>
                    <p className="text-sm text-gray-600">{event.description}</p>
                  </li>
                ))}
              </ul>
              <Dialog>
                <DialogTrigger asChild>
                  <Button className="mt-4">
                    <PlusCircle className="w-4 h-4 mr-2" />
                    Add Event
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                  <DialogHeader>
                    <DialogTitle>Add New Event</DialogTitle>
                    <DialogDescription>
                      Create a new event for the selected date. Click save when you're done.
                    </DialogDescription>
                  </DialogHeader>
                  <div className="grid gap-4 py-4">
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="event-title" className="text-right">
                        Title
                      </Label>
                      <Input
                        id="event-title"
                        value={newEvent.title}
                        onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })}
                        className="col-span-3"
                      />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="event-time" className="text-right">
                        Time
                      </Label>
                      <div className="col-span-3 flex items-center gap-2">
                        <Select
                          value={newEvent.time}
                          onValueChange={(value) => setNewEvent({ ...newEvent, time: value })}
                        >
                          <SelectTrigger className="w-[120px]">
                            <SelectValue placeholder="Select time" />
                          </SelectTrigger>
                          <SelectContent>
                            {timeOptions.map((time) => (
                              <SelectItem key={time} value={time}>
                                {time}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <Select
                          value={newEvent.ampm}
                          onValueChange={(value) => setNewEvent({ ...newEvent, ampm: value })}
                        >
                          <SelectTrigger className="w-[70px]">
                            <SelectValue placeholder="AM/PM" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="AM">AM</SelectItem>
                            <SelectItem value="PM">PM</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="event-description" className="text-right">
                        Description
                      </Label>
                      <Textarea
                        id="event-description"
                        value={newEvent.description}
                        onChange={(e) => setNewEvent({ ...newEvent, description: e.target.value })}
                        className="col-span-3"
                      />
                    </div>
                  </div>
                  <DialogFooter>
                    <Button type="submit" onClick={handleAddEvent}>Save Event</Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default AdminDashboard;