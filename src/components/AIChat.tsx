import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Bot, Send, X, Minimize2, TrendingUp, TrendingDown } from "lucide-react";
import { Card } from "@/components/ui/card";

interface UserBet {
  id: string;
  player: string;
  category: string;
  line: number;
  type: 'over' | 'under';
  odds: string;
}

export const AIChat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [userBets, setUserBets] = useState<UserBet[]>([]);

  // Simple bet parsing - in real app, this would be more sophisticated
  const parseBetFromMessage = (msg: string): UserBet | null => {
    const lowerMsg = msg.toLowerCase();
    const patterns = [
      { pattern: /(over|under)\s+(\d+\.?\d*)\s+(points?|assists?|rebounds?)\s+(.+)/, type: 'detailed' },
      { pattern: /(.+)\s+(over|under)\s+(\d+\.?\d*)\s+(points?|assists?|rebounds?)/, type: 'player_first' }
    ];

    for (const { pattern, type } of patterns) {
      const match = lowerMsg.match(pattern);
      if (match) {
        let player, betType, line, category;
        
        if (type === 'detailed') {
          betType = match[1] as 'over' | 'under';
          line = parseFloat(match[2]);
          category = match[3].replace(/s$/, ''); // Remove plural
          player = match[4];
        } else {
          player = match[1];
          betType = match[2] as 'over' | 'under';
          line = parseFloat(match[3]);
          category = match[4].replace(/s$/, '');
        }

        return {
          id: Date.now().toString(),
          player: player.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' '),
          category: category.charAt(0).toUpperCase() + category.slice(1),
          line,
          type: betType,
          odds: betType === 'over' ? '-110' : '+105' // Mock odds
        };
      }
    }
    return null;
  };

  const handleSendMessage = () => {
    if (message.trim()) {
      const bet = parseBetFromMessage(message);
      if (bet) {
        setUserBets(prev => [...prev, bet]);
      }
      console.log("Sending message:", message);
      setMessage("");
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  return (
    <>
      {/* AI Chat Window */}
      {isOpen && (
        <Card className={`fixed bottom-20 left-6 right-6 ${userBets.length > 0 ? 'h-[500px]' : 'h-96'} flex flex-col gradient-card border-betting-primary/30 shadow-glow z-50`}>
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-border">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full gradient-primary flex items-center justify-center">
                <Bot className="w-4 h-4 text-primary-foreground" />
              </div>
              <div>
                <div className="font-semibold text-sm text-foreground">GamePoint AI</div>
                <div className="text-xs text-betting-primary-glow">Online</div>
              </div>
            </div>
            <div className="flex items-center gap-1">
              <Button
                variant="ghost"
                size="icon"
                className="w-8 h-8"
                onClick={() => setIsOpen(false)}
              >
                <Minimize2 className="w-4 h-4" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="w-8 h-8"
                onClick={() => setIsOpen(false)}
              >
                <X className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* User Bets Section - Only show if there are bets */}
          {userBets.length > 0 && (
            <div className="p-4 border-b border-border bg-muted/30">
              <h3 className="font-semibold text-sm text-foreground mb-3">Your Bets</h3>
              <div className="space-y-2 max-h-32 overflow-y-auto">
                {userBets.map((bet) => (
                  <div key={bet.id} className="flex items-center justify-between bg-card rounded-lg p-3 border border-border">
                    <div className="flex items-center gap-3">
                      <div className="flex items-center gap-1">
                        {bet.type === 'over' ? (
                          <TrendingUp className="w-4 h-4 text-betting-success" />
                        ) : (
                          <TrendingDown className="w-4 h-4 text-betting-danger" />
                        )}
                        <span className="text-xs font-medium text-muted-foreground uppercase">
                          {bet.type}
                        </span>
                      </div>
                      <div>
                        <div className="font-medium text-sm text-foreground">{bet.player}</div>
                        <div className="text-xs text-muted-foreground">
                          {bet.line} {bet.category}
                        </div>
                      </div>
                    </div>
                    <div className="text-sm font-medium text-betting-primary">{bet.odds}</div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Chat Area */}
          <div className="flex-1 p-4 overflow-y-auto">
            <div className="space-y-4">
              {/* AI Welcome Message */}
              <div className="flex items-start gap-2">
                <div className="w-6 h-6 rounded-full gradient-primary flex items-center justify-center flex-shrink-0">
                  <Bot className="w-3 h-3 text-primary-foreground" />
                </div>
                <div className="bg-muted rounded-lg p-3 max-w-[300px]">
                  <p className="text-sm text-muted-foreground">
                    Hi! I'm your AI betting assistant. Tell me what kind of bet you're thinking about and I'll analyze the odds and risks for you.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Input Area */}
          <div className="p-4 border-t border-border">
            <div className="flex gap-2">
              <Input
                placeholder="Try: 'LeBron over 25.5 points' or 'Curry under 8 assists'"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyPress={handleKeyPress}
                className="flex-1"
              />
              <Button
                size="icon"
                onClick={handleSendMessage}
                disabled={!message.trim()}
                className="gradient-primary"
              >
                <Send className="w-4 h-4" />
              </Button>
            </div>
            <p className="text-xs text-muted-foreground mt-2">
              Enter bets like: "LeBron over 25.5 points" or "Curry under 8 assists"
            </p>
          </div>
        </Card>
      )}

      {/* AI Button */}
      <Button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 w-14 h-14 rounded-full gradient-primary shadow-glow hover:shadow-glow transition-smooth z-40"
        size="icon"
      >
        <Bot className="w-6 h-6" />
      </Button>
    </>
  );
};