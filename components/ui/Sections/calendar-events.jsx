import React, { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Calendar } from '@/components/ui/calendar'
import { PlusCircle } from 'lucide-react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Textarea } from '@/components/ui/textarea'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

const CalendarAndEvents = () => {
  const [date, setDate] = useState(new Date())
  const [events, setEvents] = useState([])
  const [newEvent, setNewEvent] = useState({ title: '', description: '', time: '09:00', ampm: 'AM' })

  const generateTimeOptions = () => {
    const options = []
    for (let hour = 0; hour < 24; hour++) {
      for (let minute = 0; minute < 60; minute += 30) {
        const time = `${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}`
        options.push(time)
      }
    }
    return options
  }
  
  const timeOptions = generateTimeOptions()

  const handleAddEvent = () => {
    if (date && newEvent.title) {
      const eventDateTime = new Date(date)
      let [hours, minutes] = newEvent.time.split(':')
      hours = parseInt(hours, 10)
      if (newEvent.ampm === 'PM' && hours !== 12) {
        hours += 12
      } else if (newEvent.ampm === 'AM' && hours === 12) {
        hours = 0
      }
      eventDateTime.setHours(hours, parseInt(minutes, 10))

      setEvents([...events, { 
        date: eventDateTime, 
        title: newEvent.title, 
        description: newEvent.description,
        time: `${newEvent.time} ${newEvent.ampm}`
      }])
      setNewEvent({ title: '', description: '', time: '09:00', ampm: 'AM' })
    }
  }
  return (
    <>
      <section id="calendar-events" className="bg-white p-6 rounded-lg shadow">
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
          <div className="flex-1 md: flex flex-col">
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
                <Button className="w-30 mt-4">
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
    </>
  )
}

export default CalendarAndEvents
