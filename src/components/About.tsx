import { Shield, Globe, Heart } from "lucide-react";

const About = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
      
      <div className="container relative z-10 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              About <span className="text-gradient">NACHO</span>
            </h2>
            <p className="text-muted-foreground">
              Independent infrastructure for a decentralized future
            </p>
          </div>

          <div className="p-8 md:p-12 rounded-3xl bg-card border border-border">
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8">
              NACHO Stake Pool is an independently operated Cardano stake pool built on the principle that true decentralization requires reliable, distributed infrastructure. Operating from self-hosted hardware in the United States, we provide the consistent uptime and professional node management that the Cardano network depends on.
            </p>
            
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8">
              As a new pool, we're focused on earning delegator trust through transparent operation and unwavering reliability. Our 10,000 ADA pledge demonstrates our commitment to the network, while our competitive 1.5% margin ensures delegators retain more of their rewards. Our system architecture is constantly revised to improve overall security, reliability, and sustainability.
            </p>

            <div className="flex flex-col md:flex-row gap-6 pt-8 border-t border-border">
              <div className="flex items-start gap-4 flex-1">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <Shield className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Security First</h3>
                  <p className="text-sm text-muted-foreground">Self-hosted hardware with no shared cloud vulnerabilities</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 flex-1">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <Globe className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Decentralization</h3>
                  <p className="text-sm text-muted-foreground">Contributing to geographic network distribution</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 flex-1">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <Heart className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Commitment</h3>
                  <p className="text-sm text-muted-foreground">10,000 ADA pledge backing our dedication</p>
                </div>
              </div>
            </div>
          </div>

          <p className="text-center text-xl font-medium text-foreground mt-12">
            Choose NACHO and help strengthen Cardano's decentralized foundation.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
