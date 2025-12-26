import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Benefits from "@/components/Benefits";
import HowToDelegate from "@/components/HowToDelegate";
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
        <div id="benefits">
          <Benefits />
        </div>
        <div id="delegate">
          <HowToDelegate />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
