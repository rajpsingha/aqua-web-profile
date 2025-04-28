
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import SocialLinks from "@/components/SocialLinks";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <SocialLinks />
      <Hero />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
