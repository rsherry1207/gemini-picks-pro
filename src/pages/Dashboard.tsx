import { Header } from "@/components/Header";
import { BetCard } from "@/components/BetCard";
import { CategoryFilter } from "@/components/CategoryFilter";
import { AIChat } from "@/components/AIChat";
import { useState } from "react";

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

const mockBets: PlayerBet[] = [
  // Points
  { id: '1', player: 'LeBron James', team: 'LAL', category: 'points', line: 25.5, overOdds: '-110', underOdds: '-110', isHot: true },
  { id: '2', player: 'Stephen Curry', team: 'GSW', category: 'points', line: 27.5, overOdds: '-105', underOdds: '-115' },
  { id: '3', player: 'Jayson Tatum', team: 'BOS', category: 'points', line: 26.5, overOdds: '-120', underOdds: '+100' },
  { id: '4', player: 'Luka Dončić', team: 'DAL', category: 'points', line: 32.5, overOdds: '-110', underOdds: '-110', isHot: true },
  
  // Assists
  { id: '5', player: 'Chris Paul', team: 'GSW', category: 'assists', line: 8.5, overOdds: '-115', underOdds: '-105' },
  { id: '6', player: 'Russell Westbrook', team: 'LAC', category: 'assists', line: 7.5, overOdds: '+105', underOdds: '-125', isHot: true },
  { id: '7', player: 'Trae Young', team: 'ATL', category: 'assists', line: 9.5, overOdds: '-110', underOdds: '-110' },
  { id: '8', player: 'Ja Morant', team: 'MEM', category: 'assists', line: 8.5, overOdds: '-120', underOdds: '+100' },
  
  // Rebounds
  { id: '9', player: 'Nikola Jokić', team: 'DEN', category: 'rebounds', line: 12.5, overOdds: '-110', underOdds: '-110', isHot: true },
  { id: '10', player: 'Joel Embiid', team: 'PHI', category: 'rebounds', line: 11.5, overOdds: '-105', underOdds: '-115' },
  { id: '11', player: 'Giannis Antetokounmpo', team: 'MIL', category: 'rebounds', line: 11.5, overOdds: '-115', underOdds: '-105' },
  { id: '12', player: 'Anthony Davis', team: 'LAL', category: 'rebounds', line: 10.5, overOdds: '+100', underOdds: '-120', isHot: true },
];

const Dashboard = () => {
  const [activeCategory, setActiveCategory] = useState<BetCategory>('points');

  const filteredBets = mockBets.filter(bet => bet.category === activeCategory);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">
            Welcome back to GamePoint
          </h1>
          <p className="text-muted-foreground">
            Today's hottest NBA over/under bets, powered by AI analysis
          </p>
        </div>

        {/* Category Filter */}
        <CategoryFilter 
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
        />

        {/* Bets Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-8">
          {filteredBets.map(bet => (
            <BetCard key={bet.id} bet={bet} />
          ))}
        </div>

        {/* Stats Summary */}
        <div className="gradient-card rounded-lg p-6 border border-border">
          <h3 className="text-lg font-semibold text-foreground mb-4">Today's Overview</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-betting-primary-glow">{mockBets.filter(b => b.category === 'points').length}</div>
              <div className="text-sm text-muted-foreground">Points Bets</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-betting-primary-glow">{mockBets.filter(b => b.category === 'assists').length}</div>
              <div className="text-sm text-muted-foreground">Assists Bets</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-betting-primary-glow">{mockBets.filter(b => b.category === 'rebounds').length}</div>
              <div className="text-sm text-muted-foreground">Rebounds Bets</div>
            </div>
          </div>
        </div>
      </main>

      {/* AI Chat Interface */}
      <AIChat />
    </div>
  );
};

export default Dashboard;