import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Zap, MapPin } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center gradient-hero overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '-3s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-primary/10 rounded-full" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-primary/5 rounded-full" />
      </div>

      <div className="container relative z-10 px-4 py-20 text-center">
        <div className="animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 mb-8">
            <Shield className="w-4 h-4 text-primary" />
            <span className="text-sm text-primary font-medium">Strengthening Cardano, One Block at a Time</span>
          </div>
        </div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
          <span className="text-foreground">Secure. Reliable.</span>
          <br />
          <span className="text-gradient">Decentralized.</span>
        </h1>

        <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          Help decentralize Cardano with NACHO — independent infrastructure you can count on.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
          <Button variant="hero" size="lg">
            Delegate to NACHO
            <ArrowRight className="w-5 h-5" />
          </Button>
          <Button variant="outline" size="lg">
            Learn How to Delegate
          </Button>
        </div>

        <div className="mt-16 flex flex-wrap justify-center gap-8 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          <div className="flex items-center gap-2 text-muted-foreground">
            <Zap className="w-5 h-5 text-primary" />
            <span>Reliable Operation</span>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground">
            <Shield className="w-5 h-5 text-primary" />
            <span>Self-Hosted Infrastructure</span>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground">
            <MapPin className="w-5 h-5 text-primary" />
            <span>Alabama, USA</span>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span>Seeking Delegation</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
