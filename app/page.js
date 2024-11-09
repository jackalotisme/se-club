"use client";

import About from "@/components/ui/about";
import Events from "@/components/ui/events";
import Footer from "@/components/ui/footer";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import Testimonials from "@/components/ui/testimonials";
import { NameField } from "@/components/ui/nameField";
import { EmailField } from "@/components/ui/emailField";

export default function Component() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-14 flex items-center my-4">
        <Link className="flex items-center justify-center" href="#">
          <Image
            src="/images/fsw-buc-logo.png"
            width={64}
            height={64}
            alt="School Logo"
          />
          <span className="hidden md:inline-block lg:inline-block text-lg ml-2 font-bold">
            Software Engineering Club
          </span>
        </Link>
        <nav className="ml-auto flex flex-row items-center gap-4 sm:gap-6 md:gap-8">
          <Link
            className="text-lg font-medium hover:underline underline-offset-4"
            href="#about"
          >
            About
          </Link>
          <Link
            className="text-lg font-medium hover:underline underline-offset-4"
            href="#events"
          >
            Events
          </Link>
          <Link
            className="text-lg font-medium hover:underline underline-offset-4"
            href="#testimonials"
          >
            Testimonials
          </Link>
          <Link
            className="text-lg font-medium hover:underline underline-offset-4"
            href="#join"
          >
            Join
          </Link>
        </nav>
      </header>
      <main className="flex-1 bg-gradient-to-tr from-sky-500 to-violet-700">
        <section id="hero" className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl text-white font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  FSW's Software Engineering Club
                </h1>
                <p className="mx-auto max-w-[700px] text-white md:text-xl dark:text-gray-400">
                  Improving the educational experience for programming students
                  here at Florida SouthWestern State College. We review coding
                  fundamentals, engage in workforce interview preparation, and
                  promote the practice of constructive collaboration.
                </p>
              </div>
              <div className="space-x-4">
                <Button>Join Now</Button>
                <Button variant="outline">Learn More</Button>
              </div>
            </div>
          </div>
        </section>
        <About />
        <Events />
        <Testimonials />
        <section id="join" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold text-white tracking-tighter sm:text-4xl md:text-5xl">
                  Join Software Engineering Club
                </h2>
                <p className="mx-auto max-w-[600px] text-white md:text-xl dark:text-gray-400">
                  Be part of a community that's shaping the future of software
                  engineering.
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <form className="flex flex-col space-y-4">
                  <NameField placeholder="Your Name" required></NameField>
                  <EmailField placeholder="Your Email" required></EmailField>
                  <Button type="submit" id="SignUp">
                    Sign Up
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
