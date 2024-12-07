import React, { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Calendar } from '@/components/ui/calendar'
import { PlusCircle, Edit, Trash2 } from 'lucide-react'
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
  const [editingEvent, setEditingEvent] = useState(null)
  const [isEditEventDialogOpen, setIsEditEventDialogOpen] = useState(false)

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


  const handleEditEvent = (id) => {
    const eventToEdit = events.find(event => event.id === id)
    if (eventToEdit) {
      const [time, ampm] = eventToEdit.time.split(' ')
      setEditingEvent({...eventToEdit, time, ampm})
      setIsEditEventDialogOpen(true)
    }
  }

  const handleSaveEventEdit = () => {
    if (editingEvent) {
      const updatedEvent = {
        ...editingEvent,
        time: `${editingEvent.time} ${editingEvent.ampm}`
      }
      setEvents(events.map(event => 
        event.id === editingEvent.id ? updatedEvent : event
      ))
      setIsEditEventDialogOpen(false)
      setEditingEvent(null)
    }
  }

  const handleDeleteEvent = (id) => {
    setEvents(events.filter(event => event.id !== id))
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
                  <div>
                    <Button 
                      variant="ghost" 
                      size="icon" 
                      onClick={() => handleEditEvent(event.id)}
                    >
                      <Edit className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="icon" onClick={() => handleDeleteEvent(event.id)}>
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
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
      <Dialog open={isEditEventDialogOpen} onOpenChange={setIsEditEventDialogOpen}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Edit Event</DialogTitle>
            <DialogDescription>
              Make changes to the event details. Click save when you're done.
            </DialogDescription>
          </DialogHeader>
          {editingEvent && (
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="edit-event-title" className="text-right">
                  Title
                </Label>
                <Input
                  id="edit-event-title"
                  value={editingEvent.title}
                  onChange={(e) => setEditingEvent({ ...editingEvent, title: e.target.value })}
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="edit-event-time" className="text-right">
                  Time
                </Label>
                <div className="col-span-3 flex items-center gap-2">
                  <Select
                    value={editingEvent.time}
                    onValueChange={(value) => setEditingEvent({ ...editingEvent, time: value })}
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
                    value={editingEvent.ampm}
                    onValueChange={(value) => setEditingEvent({ ...editingEvent, ampm: value })}
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
                <Label htmlFor="edit-event-description" className="text-right">
                  Description
                </Label>
                <Textarea
                  id="edit-event-description"
                  value={editingEvent.description}
                  onChange={(e) => setEditingEvent({ ...editingEvent, description: e.target.value })}
                  className="col-span-3"
                />
              </div>
            </div>
          )}
          <DialogFooter>
            <Button type="submit" onClick={handleSaveEventEdit}>Save Changes</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  )
}

export default CalendarAndEvents
