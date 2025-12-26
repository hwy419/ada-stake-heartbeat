import { TrendingUp, Percent, Coins, Blocks } from "lucide-react";

const stats = [
  {
    icon: TrendingUp,
    value: "4.2%",
    label: "Annual ROA",
    description: "Lifetime return on ADA",
  },
  {
    icon: Percent,
    value: "1%",
    label: "Pool Margin",
    description: "Low fees, more rewards",
  },
  {
    icon: Coins,
    value: "500K",
    label: "ADA Pledge",
    description: "Our commitment to you",
  },
  {
    icon: Blocks,
    value: "2,847",
    label: "Blocks Minted",
    description: "Successfully produced",
  },
];

const Stats = () => {
  return (
    <section className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      
      <div className="container relative z-10 px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Pool <span className="text-gradient">Performance</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Real-time statistics showcasing our commitment to delivering consistent rewards.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="group relative p-6 rounded-2xl gradient-card border border-border hover:border-primary/50 transition-all duration-300 hover:-translate-y-1"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="absolute inset-0 rounded-2xl bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:glow-primary transition-all duration-300">
                  <stat.icon className="w-6 h-6 text-primary" />
                </div>
                
                <div className="text-4xl font-bold text-foreground mb-1">
                  {stat.value}
                </div>
                
                <div className="text-lg font-semibold text-foreground mb-1">
                  {stat.label}
                </div>
                
                <div className="text-sm text-muted-foreground">
                  {stat.description}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
