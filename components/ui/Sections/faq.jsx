import * as React from 'react'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const FAQ = () => {
  return (
    <>
      <section id="faq" className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-6 md:px-8 mx-auto">
          <h2 className="text-3xl text-white font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">
            Frequently Asked Questions
          </h2>
          <Accordion type="single" collapsible className="w-full max-w-3xl mx-auto">
            <AccordionItem value="item-1">
              <AccordionTrigger>Who can join the Software Engineering Club?</AccordionTrigger>
              <AccordionContent>
                Our club is open to all students interested in software engineering, regardless of their major or experience level. Whether you're a beginner looking to learn coding or an advanced programmer wanting to expand your skills, you're welcome to join!
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>How often does the club meet?</AccordionTrigger>
              <AccordionContent>
                We hold regular meetings every week on Tuesdays from 12:00 PM to 1:00 PM. Additionally, we organize special events, workshops, and hackathons throughout the semester. Check our events calendar for the most up-to-date schedule.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>What kind of activities does the club organize?</AccordionTrigger>
              <AccordionContent>
                Our club offers a variety of activities including coding workshops, guest speaker sessions from industry professionals, collaborative projects, hackathons, and networking events. We also provide mentorship opportunities and resources for interview preparation and career development in software engineering.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>Do I need to know how to code to join the club?</AccordionTrigger>
              <AccordionContent>
                Not at all! While some of our members have coding experience, we welcome beginners and provide resources to help you get started. Our club is a learning environment where members can develop their skills regardless of their starting point. We offer beginner-friendly workshops and pair experienced members with newcomers for mentorship.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
              <AccordionTrigger>How can I get involved in club leadership?</AccordionTrigger>
              <AccordionContent>
                We encourage active participation from all our members! To get involved in club leadership, start by regularly attending meetings and events. We hold elections for officer positions at the end of each academic year. Throughout the year, you can also volunteer to lead workshops, organize events, or contribute to ongoing projects. Speak with any current officer about opportunities to take on more responsibility within the club.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>
    </>
  )
}

export default FAQ