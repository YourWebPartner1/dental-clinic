import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import AboutDoctor from "@/components/AboutDoctor";
import Services from "@/components/Services";
import Gallery from "@/components/Gallery";
import WhyChooseUs from "@/components/WhyChooseUs";
import Testimonials from "@/components/Testimonials";
import Appointment from "@/components/Appointment";

import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <AboutDoctor />
      <Services />
      <Gallery />
      <WhyChooseUs />
      <Testimonials />
      <Appointment />

      <Footer />
    </main>
  );
}
