import { useState } from "react";
import { Sparkles, Copy, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { getRandomNickname, NicknameCategory, nicknameCategories } from "@/lib/fancyTextGenerator";

export const CategorySection = () => {
  const [generatedNames, setGeneratedNames] = useState<Record<NicknameCategory, string>>({
    gaming: "",
    cool: "",
    funny: "",
    stylish: "",
  });
  
  const [copiedCategory, setCopiedCategory] = useState<NicknameCategory | null>(null);

  const handleGenerate = (category: NicknameCategory) => {
    const newName = getRandomNickname(category);
    setGeneratedNames(prev => ({ ...prev, [category]: newName }));
  };

  const handleCopy = async (category: NicknameCategory) => {
    const name = generatedNames[category];
    if (name) {
      await navigator.clipboard.writeText(name);
      setCopiedCategory(category);
      setTimeout(() => setCopiedCategory(null), 2000);
    }
  };

  const categories: { key: NicknameCategory; label: string; emoji: string }[] = [
    { key: "gaming", label: "Gaming", emoji: "🎮" },
    { key: "cool", label: "Cool", emoji: "😎" },
    { key: "funny", label: "Funny", emoji: "😄" },
    { key: "stylish", label: "Stylish", emoji: "✨" },
  ];

  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-12">
      <div className="text-center mb-8">
        <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-3">
          Random Nickname Generator
        </h2>
        <p className="text-muted-foreground text-sm sm:text-base">
          Generate unique nicknames by category with one click
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
        {categories.map(({ key, label, emoji }) => (
          <Card 
            key={key}
            className="p-6 bg-card shadow-card hover:shadow-glow transition-all duration-300 border-2 border-border"
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="text-3xl">{emoji}</span>
              <h3 className="text-xl font-bold text-foreground">{label}</h3>
            </div>

            {generatedNames[key] && (
              <div className="mb-4 p-4 bg-muted rounded-lg">
                <p className="text-lg font-semibold text-foreground break-all">
                  {generatedNames[key]}
                </p>
              </div>
            )}

            <div className="flex gap-2">
              <Button
                onClick={() => handleGenerate(key)}
                className="flex-1 bg-gradient-primary hover:opacity-90 text-primary-foreground"
              >
                <Sparkles className="mr-2 h-4 w-4" />
                Generate
              </Button>

              {generatedNames[key] && (
                <Button
                  onClick={() => handleCopy(key)}
                  variant="outline"
                  size="icon"
                  className={
                    copiedCategory === key
                      ? "bg-primary text-primary-foreground border-primary"
                      : "border-border hover:border-primary"
                  }
                >
                  {copiedCategory === key ? (
                    <Check className="h-4 w-4" />
                  ) : (
                    <Copy className="h-4 w-4" />
                  )}
                </Button>
              )}
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};
