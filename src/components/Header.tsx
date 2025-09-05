import gamepointLogo from "@/assets/gamepoint-logo-new.png";
import { useAuth } from "@/hooks/useAuth";
import { Button } from "@/components/ui/button";
import { LogOut, User } from "lucide-react";
import { useNavigate } from "react-router-dom";

export const Header = () => {
  const { user, signOut } = useAuth();
  const navigate = useNavigate();

  const handleSignOut = async () => {
    await signOut();
    navigate("/");
  };

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
          {user ? (
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2 text-sm">
                <User className="w-4 h-4" />
                <span className="text-muted-foreground">{user.email}</span>
              </div>
              <Button
                onClick={handleSignOut}
                variant="ghost"
                size="sm"
                className="text-muted-foreground hover:text-betting-primary"
              >
                <LogOut className="w-4 h-4" />
              </Button>
            </div>
          ) : (
            <>
              <button 
                onClick={() => navigate("/auth")}
                className="text-muted-foreground hover:text-betting-primary transition-smooth"
              >
                Sign In
              </button>
              <button 
                onClick={() => navigate("/auth")}
                className="gradient-primary px-4 py-2 rounded-lg text-primary-foreground font-medium hover:shadow-glow transition-smooth"
              >
                Get Started
              </button>
            </>
          )}
        </div>
      </div>
    </header>
  );
};