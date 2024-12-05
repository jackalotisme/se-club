import Header from "../components/ui/header"
import HeroSection from "@/components/ui/HeroSection";
import About from "@/components/ui/about";
import Events from "@/components/ui/events";
import FAQ from "@/components/ui/faq";
import Testimonials from "@/components/ui/testimonials";
import Footer from "@/components/ui/footer";
import Employment from "@/components/ui/employment";
import Join from "@/components/ui/join";

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
