import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border">
      <div className="container px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg gradient-primary flex items-center justify-center">
              <span className="text-primary-foreground font-bold">A</span>
            </div>
            <span className="text-xl font-bold text-foreground">APEX</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#stats" className="text-muted-foreground hover:text-primary transition-colors">Stats</a>
            <a href="#benefits" className="text-muted-foreground hover:text-primary transition-colors">Benefits</a>
            <a href="#delegate" className="text-muted-foreground hover:text-primary transition-colors">Delegate</a>
            <Button variant="default" size="sm">
              Stake Now
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-muted-foreground hover:text-foreground"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-4">
              <a href="#stats" className="text-muted-foreground hover:text-primary transition-colors py-2">Stats</a>
              <a href="#benefits" className="text-muted-foreground hover:text-primary transition-colors py-2">Benefits</a>
              <a href="#delegate" className="text-muted-foreground hover:text-primary transition-colors py-2">Delegate</a>
              <Button variant="default" className="w-full">
                Stake Now
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
