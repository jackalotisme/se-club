import * as React from 'react'

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const Events = () => {
  return (
    <>
      <section id="events" className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6 mx-auto">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center text-white mb-8">
            Upcoming Events
          </h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle>Web Development Workshop</CardTitle>
                <CardDescription>
                  Learn the latest in web technologies
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p>Date: June 15, 2024</p>
                <p>Time: 2:00 PM - 5:00 PM</p>
                <p>Location: Tech Hub, Room 101</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>AI & Machine Learning Seminar</CardTitle>
                <CardDescription>
                  Explore the world of artificial intelligence
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p>Date: July 5, 2024</p>
                <p>Time: 1:00 PM - 4:00 PM</p>
                <p>Location: Virtual Event</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Hackathon: Code for Good</CardTitle>
                <CardDescription>
                  Create solutions for social impact
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p>Date: August 20-22, 2024</p>
                <p>Time: 48-hour event</p>
                <p>Location: Innovation Center</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </>
  )
}

export default Events