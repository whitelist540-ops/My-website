import { useState, useEffect, useRef, useCallback } from "react";
import { Sparkles, Copy, RefreshCw } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { generateFancyTextBatch, resetGeneratedIds, StyledText } from "@/lib/fancyTextGenerator";
import { StyleCard } from "@/components/StyleCard";
import { CategorySection } from "@/components/CategorySection";
import { useToast } from "@/hooks/use-toast";

const Index = () => {
  const [inputText, setInputText] = useState("");
  const [styledTexts, setStyledTexts] = useState<StyledText[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const observerTarget = useRef<HTMLDivElement>(null);
  const { toast } = useToast();

  const loadMoreStyles = useCallback(() => {
    if (!inputText.trim() || isLoading) return;
    
    setIsLoading(true);
    setTimeout(() => {
      const newBatch = generateFancyTextBatch(inputText, 20);
      if (newBatch.length > 0) {
        setStyledTexts(prev => [...prev, ...newBatch]);
      }
      setIsLoading(false);
    }, 300);
  }, [inputText, isLoading]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && inputText.trim() && !isLoading) {
          loadMoreStyles();
        }
      },
      { threshold: 0.1 }
    );

    if (observerTarget.current) {
      observer.observe(observerTarget.current);
    }

    return () => observer.disconnect();
  }, [loadMoreStyles, inputText, isLoading]);

  useEffect(() => {
    if (inputText.trim()) {
      resetGeneratedIds();
      const initialBatch = generateFancyTextBatch(inputText, 20);
      setStyledTexts(initialBatch);
    } else {
      setStyledTexts([]);
    }
  }, [inputText]);

  const handleCopyAll = async () => {
    const allText = styledTexts.map(style => style.text).join('\n');
    await navigator.clipboard.writeText(allText);
    toast({
      title: "Copied!",
      description: `${styledTexts.length} styles copied to clipboard`,
    });
  };

  const handleRefresh = () => {
    resetGeneratedIds();
    const newBatch = generateFancyTextBatch(inputText, 20);
    setStyledTexts(newBatch);
    toast({
      title: "Refreshed!",
      description: "New styles generated",
    });
  };

  return (
    <div className="min-h-screen bg-background pb-32">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-primary py-20 sm:py-32">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_hsl(var(--primary-glow))_0%,_transparent_50%)] opacity-30" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_hsl(var(--secondary))_0%,_transparent_50%)] opacity-20" />
        
        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 bg-primary-foreground/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6 animate-scale-in">
            <Sparkles className="h-4 w-4 text-primary-foreground animate-glow" />
            <span className="text-sm font-medium text-primary-foreground">
              Infinite Stylish Nickname Generator
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-primary-foreground mb-6 animate-fade-in">
            Create Endless
            <br />
            <span className="bg-gradient-accent bg-clip-text text-transparent">
              Fancy Nicknames
            </span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-primary-foreground/90 mb-12 max-w-2xl mx-auto animate-fade-in">
            Type your name once and scroll to discover unlimited unique stylish variations
          </p>
        </div>
      </section>

      {/* Results Section */}
      {styledTexts.length > 0 && (
        <section className="py-8 sm:py-12">
          <div className="container mx-auto px-4">
            <div className="text-center mb-6">
              <div className="flex flex-wrap items-center justify-center gap-3 mb-4">
                <h2 className="text-2xl sm:text-3xl font-bold text-foreground">
                  {styledTexts.length}+ Stylish Results
                </h2>
                <div className="flex gap-2">
                  <Button
                    onClick={handleCopyAll}
                    variant="outline"
                    size="sm"
                    className="gap-2"
                  >
                    <Copy className="h-4 w-4" />
                    Copy All
                  </Button>
                  <Button
                    onClick={handleRefresh}
                    variant="outline"
                    size="sm"
                    className="gap-2"
                  >
                    <RefreshCw className="h-4 w-4" />
                    Refresh
                  </Button>
                </div>
              </div>
              <p className="text-muted-foreground">
                Scroll down for more unique styles
              </p>
            </div>

            <div className="max-w-4xl mx-auto grid gap-4">
              {styledTexts.map((style, index) => (
                <StyleCard
                  key={style.id}
                  name={style.name}
                  text={style.text}
                  index={index}
                />
              ))}
              
              {/* Infinite scroll trigger */}
              <div ref={observerTarget} className="h-20 flex items-center justify-center">
                {isLoading && (
                  <div className="text-muted-foreground flex items-center gap-2">
                    <RefreshCw className="h-4 w-4 animate-spin" />
                    Loading more styles...
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Category Section - only show when no input */}
      {!inputText.trim() && (
        <section className="py-12 sm:py-16 bg-muted/30">
          <CategorySection />
        </section>
      )}

      {/* Features Section */}
      <section className="py-12 sm:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold text-center mb-12 bg-gradient-primary bg-clip-text text-transparent">
              Why Use Our Generator?
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="text-center p-6">
                <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-gradient-primary flex items-center justify-center text-primary-foreground text-2xl">
                  ⚡
                </div>
                <h3 className="font-bold text-foreground mb-2">Infinite Styles</h3>
                <p className="text-sm text-muted-foreground">
                  Scroll endlessly to discover unlimited unique variations
                </p>
              </div>

              <div className="text-center p-6">
                <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-gradient-primary flex items-center justify-center text-primary-foreground text-2xl">
                  🎨
                </div>
                <h3 className="font-bold text-foreground mb-2">Live Updates</h3>
                <p className="text-sm text-muted-foreground">
                  Generate stylish text in real-time as you type
                </p>
              </div>

              <div className="text-center p-6">
                <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-gradient-primary flex items-center justify-center text-primary-foreground text-2xl">
                  📱
                </div>
                <h3 className="font-bold text-foreground mb-2">One-Click Copy</h3>
                <p className="text-sm text-muted-foreground">
                  Copy any style or all styles to your clipboard instantly
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Floating Input Bar */}
      <div className="fixed bottom-0 left-0 right-0 z-50 backdrop-blur-xl bg-background/80 border-t border-border shadow-2xl">
        <div className="container mx-auto px-4 py-4">
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <Input
                type="text"
                placeholder="Type your name or nickname..."
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                className="h-14 sm:h-16 text-base sm:text-lg px-6 bg-card/50 backdrop-blur-sm border-2 border-primary/20 focus:border-primary/40 text-foreground placeholder:text-muted-foreground shadow-glow"
              />
              {inputText && (
                <div className="absolute right-4 top-1/2 -translate-y-1/2">
                  <Sparkles className="h-5 w-5 text-primary animate-glow" />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="py-8 border-t border-border">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm text-muted-foreground">
            © 2025 NickStyle Generator. Create fancy nicknames for free.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
