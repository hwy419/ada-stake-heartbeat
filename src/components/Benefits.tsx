import { Shield, Zap, Globe, Coins, HeartHandshake, MapPin } from "lucide-react";

const benefits = [
  {
    icon: Shield,
    title: "Secure Infrastructure",
    description: "Self-hosted hardware operated with security as the top priority. No shared cloud vulnerabilities.",
  },
  {
    icon: Zap,
    title: "Reliable Operation",
    description: "Consistent uptime and proactive monitoring ensure we're always ready to mint blocks when selected.",
  },
  {
    icon: Globe,
    title: "True Decentralization",
    description: "Independent operation from the United States helps distribute Cardano's network geographically and operationally.",
  },
  {
    icon: Coins,
    title: "Competitive Rewards",
    description: "1.5% margin means more rewards stay in your wallet. Standard 340 ADA fixed fee per block.",
  },
  {
    icon: HeartHandshake,
    title: "Operator Commitment",
    description: "10,000 ADA pledge demonstrates our long-term investment in the pool's success and the Cardano ecosystem.",
  },
  {
    icon: MapPin,
    title: "US-Based",
    description: "Operated from self-hosted infrastructure in Alabama, contributing to geographic diversity on the network.",
  },
];

const Benefits = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container relative z-10 px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Why Delegate to <span className="text-gradient">NACHO</span>?
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Independent infrastructure built for reliability and true decentralization.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={benefit.title}
              className="group p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <benefit.icon className="w-7 h-7 text-primary" />
              </div>
              
              <h3 className="text-xl font-bold text-foreground mb-3">
                {benefit.title}
              </h3>
              
              <p className="text-muted-foreground leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
