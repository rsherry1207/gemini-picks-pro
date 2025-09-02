import { Button } from "@/components/ui/button";
import { Target, Users, TrendingUp } from "lucide-react";

type BetCategory = 'points' | 'assists' | 'rebounds';

interface CategoryFilterProps {
  activeCategory: BetCategory;
  onCategoryChange: (category: BetCategory) => void;
}

export const CategoryFilter = ({ activeCategory, onCategoryChange }: CategoryFilterProps) => {
  const categories = [
    {
      id: 'points' as BetCategory,
      label: 'Points',
      icon: Target,
      description: 'Player scoring over/under'
    },
    {
      id: 'assists' as BetCategory,
      label: 'Assists',
      icon: Users,
      description: 'Player assists over/under'
    },
    {
      id: 'rebounds' as BetCategory,
      label: 'Rebounds',
      icon: TrendingUp,
      description: 'Player rebounds over/under'
    }
  ];

  return (
    <div className="mb-8">
      <div className="flex flex-wrap gap-4 justify-center md:justify-start">
        {categories.map(({ id, label, icon: Icon, description }) => (
          <Button
            key={id}
            variant={activeCategory === id ? "betting" : "outline"}
            size="lg"
            onClick={() => onCategoryChange(id)}
            className="flex items-center gap-3 h-auto py-4 px-6 transition-smooth"
          >
            <Icon className="w-5 h-5" />
            <div className="text-left">
              <div className="font-semibold">{label}</div>
              <div className="text-xs opacity-80">{description}</div>
            </div>
          </Button>
        ))}
      </div>
    </div>
  );
};