import { Wallet, Search, MousePointer, PartyPopper } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

const steps = [
  {
    icon: Wallet,
    step: "01",
    title: "Get a Cardano Wallet",
    description: "Download a compatible wallet like Daedalus, Yoroi, Eternl, or Lace. These wallets support native staking on Cardano.",
  },
  {
    icon: Search,
    step: "02",
    title: "Find NACHO",
    description: "Search for our ticker NACHO or use our Pool ID to locate us in your wallet's delegation center.",
  },
  {
    icon: MousePointer,
    step: "03",
    title: "Delegate Your ADA",
    description: "Select NACHO and confirm your delegation. Your ADA never leaves your wallet—you maintain full control at all times.",
  },
  {
    icon: PartyPopper,
    step: "04",
    title: "Earn Rewards",
    description: "Rewards are distributed automatically every epoch (5 days). Sit back and watch your ADA grow while supporting decentralization.",
  },
];

const POOL_ID = "pool1dhugawja82wkmrq0lhd24uyrhm02v7grdhnren9r2qgujsh5kml";

const HowToDelegate = () => {
  const copyPoolId = () => {
    navigator.clipboard.writeText(POOL_ID);
    toast.success("Pool ID copied to clipboard!");
  };

  return (
    <section className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/5 to-transparent" />
      
      <div className="container relative z-10 px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Start Earning in <span className="text-gradient">4 Steps</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Delegating is simple and your ADA never leaves your wallet. Start earning passive rewards today.
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
                {POOL_ID}
              </code>
            </div>
            <Button variant="outline" size="sm" onClick={copyPoolId}>
              Copy Pool ID
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowToDelegate;
