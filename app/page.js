"use client";

import About from "@/components/ui/about";
import Events from "@/components/ui/events";
import Footer from "@/components/ui/footer";
import { Button } from "@/components/ui/button";
import FAQ from "@/components/ui/faq";
import Testimonials from "@/components/ui/testimonials";
import { NameField } from "@/components/ui/nameField";
import { EmailField } from "@/components/ui/emailField";
import Header from "@/components/ui/header";
import Employment from "@/components/ui/employment";


export default function Component() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
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
        <Employment />
        <FAQ />
        <Testimonials />
        <section id="join" className="w-full py-12 md:py-24 lg:py-32 bg-gray-50 dark:bg-gray-800">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Join Software Engineering Club
                </h2>
                <p className="mx-auto max-w-[600px] md:text-xl dark:text-gray-400">
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
