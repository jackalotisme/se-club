"use client";

import Header from "@/components/ui/header";
import Footer from "@/components/ui/footer";
import About from "@/components/ui/Sections/about";
import Events from "@/components/ui/Sections/events";
import FAQ from "@/components/ui/Sections/faq";
import Join from "@/components/ui/Sections/join";
import Testimonials from "@/components/ui/Sections/testimonials";
import HeroSection from "@/components/ui/Sections/HeroSection";
import Employment from "@/components/ui/Sections/employment";

// import MemberCard from "../components/ui/MemberCard";

export default function Component() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="relative flex-1 bg-gradient-to-tr from-violet-700 to-blue-800">
        <HeroSection />
        <About />
        <Events />
        <Employment />
        <FAQ />
        <Testimonials />
        <Join />
      </main>
      <Footer />
    </div>
  );
}
