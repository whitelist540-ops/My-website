import { useState } from "react";
import { Copy, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface StyleCardProps {
  name: string;
  text: string;
  index: number;
}

export const StyleCard = ({ name, text, index }: StyleCardProps) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <Card 
      className={cn(
        "group relative overflow-hidden p-4 sm:p-6",
        "bg-card hover:bg-accent/5 transition-all duration-300",
        "shadow-card hover:shadow-glow",
        "border-2 border-border hover:border-primary/30",
        "animate-fade-in"
      )}
      style={{ animationDelay: `${index * 50}ms` }}
    >
      <div className="flex items-center justify-between gap-4">
        <div className="flex-1 min-w-0">
          <div className="text-xs font-medium text-muted-foreground mb-2">
            {name}
          </div>
          <div className="text-lg sm:text-xl font-semibold text-foreground break-all">
            {text}
          </div>
        </div>
        <Button
          variant="ghost"
          size="icon"
          onClick={handleCopy}
          className={cn(
            "shrink-0 transition-all duration-300",
            copied 
              ? "bg-primary text-primary-foreground" 
              : "hover:bg-primary/10 hover:text-primary"
          )}
        >
          {copied ? (
            <Check className="h-5 w-5" />
          ) : (
            <Copy className="h-5 w-5" />
          )}
        </Button>
      </div>
    </Card>
  );
};
