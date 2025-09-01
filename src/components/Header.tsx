import gamepointLogo from "@/assets/gamepoint-logo.png";

export const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border/30">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img src={gamepointLogo} alt="GamePoint" className="w-8 h-8" />
          <span className="text-xl font-bold gradient-primary bg-clip-text text-transparent">
            GamePoint
          </span>
        </div>
        
        <nav className="hidden md:flex items-center gap-8">
          <a href="#features" className="text-muted-foreground hover:text-betting-primary transition-smooth">
            Features
          </a>
          <a href="#about" className="text-muted-foreground hover:text-betting-primary transition-smooth">
            About
          </a>
          <a href="#contact" className="text-muted-foreground hover:text-betting-primary transition-smooth">
            Contact
          </a>
        </nav>
        
        <div className="flex items-center gap-4">
          <button className="text-muted-foreground hover:text-betting-primary transition-smooth">
            Sign In
          </button>
          <button className="gradient-primary px-4 py-2 rounded-lg text-primary-foreground font-medium hover:shadow-glow transition-smooth">
            Get Started
          </button>
        </div>
      </div>
    </header>
  );
};