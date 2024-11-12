import  * as React from 'react'
import { Button } from "@/components/ui/button"

function HeroSection() {

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
    <div className="container px-4 md:px-6 mx-auto">
      <div className="flex flex-col items-center space-y-4 text-center">
        <div className="space-y-2">
          <h1 className="text-3xl text-white font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
            FSW's Software Engineering Club
          </h1>
          <p className="mx-auto max-w-[700px] text-white md:text-xl dark:text-gray-400">
            Improving the educational experience for programming students here at Florida SouthWestern State College. We review coding fundamentals, engage in workforce interview preparation, and promote the practice of constructive collaboration.
          </p>
        </div>
        <div className="space-x-4">
          <Button>Join Now</Button>
          <Button variant="outline">Learn More</Button>
        </div>
      </div>
    </div>
  </section>
  )
}

export default HeroSection