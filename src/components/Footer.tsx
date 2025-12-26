import { Twitter, MessageCircle, Github, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-16 border-t border-border">
      <div className="container px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-xl gradient-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">N</span>
              </div>
              <span className="text-2xl font-bold text-foreground">Nacho Pool</span>
            </div>
            <p className="text-muted-foreground max-w-sm mb-6">
              A reliable Cardano stake pool committed to network decentralization and delivering consistent rewards to our delegators.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors duration-300">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors duration-300">
                <MessageCircle className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors duration-300">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors duration-300">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold text-foreground mb-4">Resources</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Pool Stats</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Cardano Explorer</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Staking Guide</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">FAQ</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-foreground mb-4">Wallets</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Eternl</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Yoroi</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Daedalus</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Lace</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © 2024 Nacho Pool. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground">
            Built on <span className="text-primary">Cardano</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
