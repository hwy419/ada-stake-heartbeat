import { Wallet, Search, MousePointer, PartyPopper } from "lucide-react";
import { Button } from "@/components/ui/button";

const steps = [
  {
    icon: Wallet,
    step: "01",
    title: "Get a Wallet",
    description: "Download a Cardano wallet like Eternl, Yoroi, or Daedalus and secure your ADA.",
  },
  {
    icon: Search,
    step: "02",
    title: "Find Our Pool",
    description: "Search for 'NACHO' or use our Pool ID in your wallet's delegation section.",
  },
  {
    icon: MousePointer,
    step: "03",
    title: "Delegate",
    description: "Select our pool and confirm the delegation. Your ADA stays in your wallet.",
  },
  {
    icon: PartyPopper,
    step: "04",
    title: "Earn Rewards",
    description: "Rewards start after 15-20 days and are automatically distributed each epoch.",
  },
];

const HowToDelegate = () => {
  return (
    <section className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/5 to-transparent" />
      
      <div className="container relative z-10 px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Start Earning in <span className="text-gradient">4 Steps</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Delegating is simple and your ADA never leaves your wallet. Start earning passive income today.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {steps.map((item, index) => (
            <div
              key={item.step}
              className="relative p-6 rounded-2xl bg-card border border-border group hover:border-primary/50 transition-all duration-300"
            >
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-gradient-to-r from-primary/50 to-transparent" />
              )}
              
              <div className="text-5xl font-bold text-primary/20 mb-4">
                {item.step}
              </div>
              
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                <item.icon className="w-6 h-6 text-primary" />
              </div>
              
              <h3 className="text-lg font-bold text-foreground mb-2">
                {item.title}
              </h3>
              
              <p className="text-sm text-muted-foreground">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-6 rounded-2xl bg-card border border-border">
            <div className="text-left">
              <p className="text-sm text-muted-foreground mb-1">Pool ID (Ticker: NACHO)</p>
              <code className="text-xs md:text-sm text-primary font-mono break-all">
                pool1xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
              </code>
            </div>
            <Button variant="outline" size="sm">
              Copy ID
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowToDelegate;
