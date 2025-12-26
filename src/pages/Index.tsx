import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import About from "@/components/About";
import Benefits from "@/components/Benefits";
import HowToDelegate from "@/components/HowToDelegate";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <div id="stats">
          <Stats />
        </div>
        <div id="about">
          <About />
        </div>
        <div id="benefits">
          <Benefits />
        </div>
        <div id="delegate">
          <HowToDelegate />
        </div>
        <div id="faq">
          <FAQ />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
