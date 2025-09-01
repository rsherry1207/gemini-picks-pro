import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

export const CTA = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        {/* Background glow */}
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-betting-primary/20 via-betting-primary/30 to-betting-primary/20 rounded-3xl blur-3xl opacity-30" />
          
          <div className="relative gradient-card border border-betting-primary/30 rounded-3xl p-12 md:p-16 shadow-card">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-betting-primary/20 border border-betting-primary/30 mb-8">
              <Sparkles className="w-4 h-4 text-betting-primary" />
              <span className="text-sm text-betting-primary font-medium">Ready to Win Smart?</span>
            </div>
            
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              Start Your{" "}
              <span className="gradient-primary bg-clip-text text-transparent">
                AI Journey
              </span>
            </h2>
            
            <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
              Join thousands of smart bettors who trust GamePoint's AI to make winning decisions.
              Get started today and experience the future of sports betting.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="betting" className="text-lg px-10 py-6 shadow-glow">
                Create Account
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button size="lg" variant="ghost" className="text-lg px-10 py-6 border border-betting-primary/30 hover:bg-betting-primary/10">
                Learn More
              </Button>
            </div>
            
            <div className="mt-12 pt-8 border-t border-border/30">
              <p className="text-sm text-muted-foreground">
                No signup fees • Instant access • 24/7 support
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};