import { Shield, Zap, Clock, Users, Server, HeartHandshake } from "lucide-react";

const benefits = [
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "Multi-layer security infrastructure with 24/7 monitoring and automated failover systems.",
  },
  {
    icon: Zap,
    title: "High Performance",
    description: "Optimized relay nodes across multiple regions for maximum block production efficiency.",
  },
  {
    icon: Clock,
    title: "99.9% Uptime",
    description: "Redundant infrastructure ensures your stake is always working to earn rewards.",
  },
  {
    icon: Users,
    title: "Community Focused",
    description: "Active community engagement with transparent operations and regular updates.",
  },
  {
    icon: Server,
    title: "Bare Metal Servers",
    description: "No shared cloud resources. Dedicated hardware for consistent performance.",
  },
  {
    icon: HeartHandshake,
    title: "Long-term Commitment",
    description: "We're here for the long run, committed to Cardano's vision and your success.",
  },
];

const Benefits = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container relative z-10 px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Why Stake with <span className="text-gradient">APEX</span>?
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            We combine technical excellence with community values to deliver the best staking experience.
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
