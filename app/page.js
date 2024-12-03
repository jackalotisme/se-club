"use client";

import Header from "../components/ui/header"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Code, Globe, Users } from "lucide-react"
import Link from "next/link"
import HeroSection from "@/components/ui/HeroSection";
import About from "@/components/ui/about";
import Events from "@/components/ui/events";
import FAQ from "@/components/ui/faq";
import Testimonials from "@/components/ui/testimonials";
import { NameField } from "@/components/ui/nameField";
import { EmailField } from "@/components/ui/emailField";
import { SignUpForm } from "@/components/forms/SignUpForm";
import Footer from "@/components/ui/footer";
import Employment from "@/components/ui/employment";

import MemberCard from "../components/ui/MemberCard";

export default function Component() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="relative flex-1 bg-gradient-to-tr from-violet-700 to-blue-800">
      <HeroSection />
        <section id="hero" className="relative h-full w-full py-12 md:py-24 lg:py-32 xl:py-48 overflow-hidden">
          <video
            className="absolute inset-0 w-full h-full object-cover mix-blend-overlay opacity-50"
            autoPlay
            loop
            muted
            playsInline
          >
            <source src="https://videos.pexels.com/video-files/2278095/2278095-hd_1920_1080_30fps.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
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
              <div className="z-10 space-x-4">
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
        <section id="join" className="relative h-full w-full py-12 md:py-24 lg:py-32 xl:py-48 overflow-hidden">
          <video
              className="absolute inset-0 w-full h-full object-cover mix-blend-overlay opacity-50"
              autoPlay
              loop
              muted
              playsInline
            >
              <source src="https://videos.pexels.com/video-files/8199326/8199326-hd_1920_1080_25fps.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <div className="container px-4 md:px-6 mx-auto">
              <div className="flex flex-col items-center space-y-4 text-center">
                <div className="space-y-2">
                  <h2 className="text-3xl text-white font-bold tracking-tighter sm:text-4xl md:text-5xl">
                    Join Software Engineering Club
                  </h2>
                  <p className="mx-auto max-w-[600px] md:text-xl dark:text-gray-400 text-white">
                    Be part of a community that's shaping the future of software
                    engineering.
                  </p>
                </div>
              <SignUpForm />
              </div>
            </div>
          </section>
        </main>
      <Footer />
    </div>
  );
}
