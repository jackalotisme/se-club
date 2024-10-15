import  * as React from 'react'
import Image from "next/image"
import Link from "next/link"


const header = () => {
  return (
    <>
      <header className="px-4 lg:px-6 h-14 flex items-center my-2">
        <Link className="flex items-center justify-center" href="#">
          <Image
            src="/images/fsw-buc-logo.png"
            width={64}
            height={64} 
            alt="School Logo" 
          />
          <span className="ml-2 text-lg font-bold">Software Engineering Club</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-md font-medium hover:underline underline-offset-4" href="#about">
            About
          </Link>
          <Link className="text-md font-medium hover:underline underline-offset-4" href="#events">
            Events
          </Link>
          <Link className="text-md font-medium hover:underline underline-offset-4" href="#join">
            Join Us
          </Link>
        </nav>
      </header>
    </>
  )
}

export default header
