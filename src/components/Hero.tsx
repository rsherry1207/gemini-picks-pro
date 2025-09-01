import { Button } from "@/components/ui/button";
import { TrendingUp, Zap, Brain } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-20">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-betting-primary/20 via-background to-background" />
      
      {/* Glow effect */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-betting-primary/30 rounded-full blur-3xl opacity-20" />
      
      <div className="relative z-10 text-center max-w-4xl mx-auto">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-betting-primary/30 bg-betting-primary/10 mb-8">
          <Brain className="w-4 h-4 text-betting-primary" />
          <span className="text-sm text-betting-primary font-medium">AI-Powered Sports Betting</span>
        </div>
        
        {/* Main heading */}
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-foreground via-betting-primary-glow to-foreground bg-clip-text text-transparent">
          Outsmart the
          <br />
          <span className="text-betting-primary">Odds.</span>
        </h1>
        
        {/* Subheading */}
        <p className="text-xl md:text-2xl text-muted-foreground mb-12 leading-relaxed">
          Let GamePoint's AI calculate the odds, evaluate every angle, and craft the perfect bet.
          <br />
          <span className="text-betting-primary-glow font-medium">Why guess when you can know?</span>
        </p>
        
        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" variant="betting" className="text-lg px-8 py-6">
            <Zap className="w-5 h-5 mr-2" />
            Start Winning
          </Button>
          <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-betting-primary/30 hover:bg-betting-primary/10">
            <TrendingUp className="w-5 h-5 mr-2" />
            See AI in Action
          </Button>
        </div>
        
        {/* Stats */}
        <div className="flex flex-col sm:flex-row gap-8 justify-center mt-16 pt-16 border-t border-border/30">
          <div className="text-center">
            <div className="text-2xl font-bold text-betting-primary">98.7%</div>
            <div className="text-muted-foreground">Accuracy Rate</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-betting-primary">15M+</div>
            <div className="text-muted-foreground">Bets Analyzed</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-betting-primary">24/7</div>
            <div className="text-muted-foreground">AI Support</div>
          </div>
        </div>
      </div>
    </section>
  );
};
