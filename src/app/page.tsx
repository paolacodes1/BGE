import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import FeaturedProjects from "@/components/sections/FeaturedProjects";
import Leadership from "@/components/sections/Leadership";
import PartnersCarousel from "@/components/sections/PartnersCarousel";
import Testimonials from "@/components/sections/Testimonials";
import ContactForm from "@/components/sections/ContactForm";

export default function Home() {
  return (
    <div>
      <Hero />
      <About />
      <FeaturedProjects />
      <Leadership />
      <PartnersCarousel />
      <Testimonials />
      <ContactForm />
    </div>
  );
}
