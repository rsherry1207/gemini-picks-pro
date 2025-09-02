import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Flame, TrendingUp, TrendingDown } from "lucide-react";

type BetCategory = 'points' | 'assists' | 'rebounds';

interface PlayerBet {
  id: string;
  player: string;
  team: string;
  category: BetCategory;
  line: number;
  overOdds: string;
  underOdds: string;
  isHot?: boolean;
}

interface BetCardProps {
  bet: PlayerBet;
}

export const BetCard = ({ bet }: BetCardProps) => {
  const getCategoryColor = (category: BetCategory) => {
    switch (category) {
      case 'points':
        return 'text-betting-primary';
      case 'assists':
        return 'text-betting-success';
      case 'rebounds':
        return 'text-betting-warning';
      default:
        return 'text-betting-primary';
    }
  };

  const getCategoryIcon = (category: BetCategory) => {
    switch (category) {
      case 'points':
        return '🏀';
      case 'assists':
        return '🤝';
      case 'rebounds':
        return '📈';
      default:
        return '🏀';
    }
  };

  return (
    <div className="gradient-card rounded-lg p-6 border border-border hover:shadow-glow transition-smooth relative">
      {bet.isHot && (
        <div className="absolute top-3 right-3">
          <Badge variant="secondary" className="bg-betting-danger/20 text-betting-danger border-betting-danger/30">
            <Flame className="w-3 h-3 mr-1" />
            Hot
          </Badge>
        </div>
      )}

      {/* Player Info */}
      <div className="mb-4">
        <div className="flex items-center gap-2 mb-1">
          <span className="text-lg font-bold text-foreground">{bet.player}</span>
          <Badge variant="outline" className="text-xs">{bet.team}</Badge>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-2xl">{getCategoryIcon(bet.category)}</span>
          <span className={`text-sm font-medium ${getCategoryColor(bet.category)}`}>
            {bet.category.charAt(0).toUpperCase() + bet.category.slice(1)}
          </span>
        </div>
      </div>

      {/* Line */}
      <div className="text-center mb-6">
        <div className="text-2xl font-bold text-betting-primary-glow mb-1">{bet.line}</div>
        <div className="text-xs text-muted-foreground">Line</div>
      </div>

      {/* Betting Options */}
      <div className="grid grid-cols-2 gap-3">
        <Button 
          variant="outline" 
          className="flex flex-col gap-1 h-auto py-3 border-betting-success/30 hover:bg-betting-success/10"
        >
          <div className="flex items-center gap-1">
            <TrendingUp className="w-4 h-4 text-betting-success" />
            <span className="text-xs font-medium">OVER</span>
          </div>
          <span className="text-sm font-bold text-betting-success">{bet.overOdds}</span>
        </Button>
        
        <Button 
          variant="outline" 
          className="flex flex-col gap-1 h-auto py-3 border-betting-danger/30 hover:bg-betting-danger/10"
        >
          <div className="flex items-center gap-1">
            <TrendingDown className="w-4 h-4 text-betting-danger" />
            <span className="text-xs font-medium">UNDER</span>
          </div>
          <span className="text-sm font-bold text-betting-danger">{bet.underOdds}</span>
        </Button>
      </div>

      {/* AI Confidence Indicator */}
      <div className="mt-4 pt-4 border-t border-border/50">
        <div className="flex items-center justify-between text-xs">
          <span className="text-muted-foreground">AI Confidence</span>
          <div className="flex items-center gap-1">
            <div className="w-16 h-1 bg-muted rounded-full overflow-hidden">
              <div 
                className="h-full bg-betting-primary rounded-full transition-smooth" 
                style={{ width: `${Math.random() * 40 + 60}%` }}
              />
            </div>
            <span className="text-betting-primary-glow font-medium">
              {Math.floor(Math.random() * 20 + 75)}%
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};