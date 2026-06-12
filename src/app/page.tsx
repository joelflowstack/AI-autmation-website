import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import Process from "@/components/sections/Process";
import Showcase from "@/components/sections/Showcase";
import Testimonials from "@/components/sections/Testimonials";
import Pricing from "@/components/sections/Pricing";
import FAQ from "@/components/sections/FAQ";
import CTA from "@/components/sections/CTA";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";
import CaseStudies from "@/components/sections/CaseStudies";
import FloatingHUD from "@/components/effects/FloatingHUD";

export default function Page() {

  return (

    <main>

      <Navbar />

      <Hero />

      <Services />

      <Process />

      <Showcase />
      
      <CaseStudies />
      
      <Testimonials />

      <Pricing />

      <FAQ />

      <CTA />

      <Contact />

      <Footer />

    </main>

  );
}
