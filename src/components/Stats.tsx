import { Coins, Percent, MapPin, Blocks, Users, Trophy } from "lucide-react";

const stats = [
  {
    icon: Coins,
    value: "₳10,000",
    label: "Pledge",
    description: "Our commitment to you",
  },
  {
    icon: Blocks,
    value: "340 ₳",
    label: "Fixed Fee",
    description: "Per block minted",
  },
  {
    icon: Percent,
    value: "1.5%",
    label: "Margin",
    description: "More rewards for you",
  },
  {
    icon: MapPin,
    value: "USA",
    label: "Location",
    description: "Self-hosted in America",
  },
];

const Stats = () => {
  return (
    <section className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      
      <div className="container relative z-10 px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Pool <span className="text-gradient">Statistics</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Transparent operations with competitive fees that keep more rewards in your wallet.
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

        {/* Pool ID Section */}
        <div className="mt-12 text-center">
          <div className="inline-flex flex-col items-center gap-2 p-6 rounded-2xl bg-card border border-border">
            <p className="text-sm text-muted-foreground">Pool ID (Ticker: NACHO)</p>
            <code className="text-xs md:text-sm text-primary font-mono break-all max-w-md">
              pool1dhugawja82wkmrq0lhd24uyrhm02v7grdhnren9r2qgujsh5kml
            </code>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
