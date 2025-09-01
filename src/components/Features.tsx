import { Card } from "@/components/ui/card";
import { Brain, Calculator, Target, BarChart3, Shield, Zap } from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "AI-Powered Recommendations",
    description: "Get personalized betting suggestions based on advanced machine learning algorithms and historical data analysis.",
    color: "text-betting-primary"
  },
  {
    icon: Calculator,
    title: "Real-Time Odds Calculation",
    description: "Dynamic odds calculation using live game data, player statistics, and market movements for optimal betting decisions.",
    color: "text-betting-success"
  },
  {
    icon: Target,
    title: "Precision Betting",
    description: "Make targeted over/under bets with confidence backed by comprehensive NBA player and team analytics.",
    color: "text-betting-warning"
  },
  {
    icon: BarChart3,
    title: "Advanced Analytics",
    description: "Deep insights into player performance, team trends, and game predictions to maximize your winning potential.",
    color: "text-betting-primary"
  },
  {
    icon: Shield,
    title: "Secure Platform",
    description: "Enterprise-grade security with encrypted transactions and responsible gambling features built-in.",
    color: "text-betting-success"
  },
  {
    icon: Zap,
    title: "Instant Processing",
    description: "Lightning-fast bet processing and real-time updates to keep you ahead of the game.",
    color: "text-betting-warning"
  }
];

export const Features = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Why Choose Our{" "}
            <span className="text-betting-primary">AI Platform</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Leverage cutting-edge artificial intelligence to transform your sports betting experience
            with data-driven insights and personalized recommendations.
          </p>
        </div>
        
        {/* Features grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="p-8 gradient-card border-border/50 hover:border-betting-primary/30 transition-smooth shadow-card hover:shadow-glow group"
            >
              <div className="mb-6">
                <feature.icon className={`w-12 h-12 ${feature.color} group-hover:scale-110 transition-smooth`} />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-foreground group-hover:text-betting-primary-glow transition-smooth">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};