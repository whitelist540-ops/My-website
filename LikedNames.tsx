import { useState } from "react";
import { ThumbsUp, ThumbsDown, Copy } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";

interface NameData {
  id: number;
  text: string;
  likes: number;
  dislikes: number;
}

// Pre-generated 100+ premium and simple stylish names
const initialNames: NameData[] = [
  // Premium Stylish Names (70-80%)
  { id: 1, text: "꧁༒☬Rคყнคห☬༒꧂", likes: 245, dislikes: 12 },
  { id: 2, text: "❝ Ŕꫀຣₒใᥙŧꫀ及ᥙϯ𝗱ᵃ𝕡_! ❞", likes: 189, dislikes: 8 },
  { id: 3, text: "~♥~٩ᴼ𝒇𝒇ϊℝ𝓼ǿ𝕡ƚɇ۶~♥~", likes: 312, dislikes: 15 },
  { id: 4, text: "꧁🕊️⃝Rᴀʏ×͜×𝐇AƝ🕊️⃝࿐", likes: 278, dislikes: 9 },
  { id: 5, text: "🎃⟫Ŕąᵧ𝙝ąη⟪🎃", likes: 156, dislikes: 6 },
  { id: 6, text: "꧁༺₦Ї₦ℑ₳༻꧂", likes: 223, dislikes: 11 },
  { id: 7, text: "★彡(𝓡𝖆𝔂𝖍𝖆𝖓)彡★", likes: 198, dislikes: 7 },
  { id: 8, text: "𓆩💜𝕽𝖆𝖞𝖍𝖆𝖓💜𓆪", likes: 267, dislikes: 10 },
  { id: 9, text: "☯༺𝓡𝓪𝔂𝓱𝓪𝓷༻☯", likes: 201, dislikes: 8 },
  { id: 10, text: "♛🕊️𝓡𝖆𝔂𝖍𝖆𝖓🕊️♛", likes: 289, dislikes: 13 },
  { id: 11, text: "꧁𓊈𒆜Ｒ𝓐𝔂𝓗𝓐𝓝𒆜𓊉꧂", likes: 234, dislikes: 9 },
  { id: 12, text: "☬🎮Ｒ𝕒𝕪𝕙𝕒𝕟🎮☬", likes: 178, dislikes: 5 },
  { id: 13, text: "⎝⎝✧℟𝑎𝐲𝘩𝑎ƞ✧⎠⎠", likes: 145, dislikes: 4 },
  { id: 14, text: "꧁༺༒༻𝐑𝐚𝐲𝐡𝐚𝐧༺༒༻꧂", likes: 256, dislikes: 11 },
  { id: 15, text: "🔥⟫𝓡ąƴԋąղ⟪🔥", likes: 192, dislikes: 6 },
  { id: 16, text: "𓆩🖤ℜᴀʏʜᴀɴ🖤𓆪", likes: 211, dislikes: 8 },
  { id: 17, text: "♡💫𝙍𝙖𝙮𝙝𝙖𝙣💫♡", likes: 167, dislikes: 7 },
  { id: 18, text: "꧁☯Ŕѧʏɦѧɳ☯꧂", likes: 189, dislikes: 5 },
  { id: 19, text: "🦋⟫𝑅𝒶𝓎𝒽𝒶𝓃⟪🦋", likes: 143, dislikes: 3 },
  { id: 20, text: "★彡Ʀąყɧąŋ彡★", likes: 198, dislikes: 9 },
  { id: 21, text: "⭐⟫Rᴀʏʜᴀɴ⟪⭐", likes: 156, dislikes: 6 },
  { id: 22, text: "《.•°~[𝐑𝐚𝐲𝐡𝐚𝐧]~°•.》", likes: 201, dislikes: 8 },
  { id: 23, text: "꧁༒Ř₳ɎⱧ₳₦༒꧂", likes: 234, dislikes: 10 },
  { id: 24, text: "❝★Ř𝕒𝕪ħ𝕒ή★❞", likes: 178, dislikes: 7 },
  { id: 25, text: "𓆩💎Rαyнαη💎𓆪", likes: 267, dislikes: 11 },
  { id: 26, text: "✦✧яαуħαη✧✦", likes: 145, dislikes: 4 },
  { id: 27, text: "『𝓡ค𝕪𝓱ค𝓷』", likes: 189, dislikes: 6 },
  { id: 28, text: "꧁🌸Rคყԋคղ🌸꧂", likes: 156, dislikes: 5 },
  { id: 29, text: "♛👑ℜÅÝĦÅŇ👑♛", likes: 298, dislikes: 12 },
  { id: 30, text: "~♥~Řăŷħăή~♥~", likes: 134, dislikes: 3 },
  { id: 31, text: "꧁༺🔥༻𝐑𝐚𝐲𝐡𝐚𝐧༺🔥༻꧂", likes: 223, dislikes: 9 },
  { id: 32, text: "🌟𝕽𝖆𝖞𝖍𝖆𝖓🌟", likes: 167, dislikes: 7 },
  { id: 33, text: "◦•○•◦Ř𝓪𝔂𝓱𝓪𝓷◦•○•◦", likes: 145, dislikes: 5 },
  { id: 34, text: "꧁⚔️Rąყɧąŋツ⚔️꧂", likes: 201, dislikes: 8 },
  { id: 35, text: "❖Ř𝖆𝓎𝐡𝖆𝓃❖", likes: 178, dislikes: 6 },
  { id: 36, text: "𓆩⚡𝓡𝒶𝔂𝒽𝒶𝓃⚡𓆪", likes: 234, dislikes: 10 },
  { id: 37, text: "【𝐑𝐚𝐲𝐡𝐚𝐧】", likes: 156, dislikes: 4 },
  { id: 38, text: "꧁༒☬ℜąყɧąŋ_FFツ☬༒꧂", likes: 289, dislikes: 11 },
  { id: 39, text: "⌜✧𝑅𝒶𝓎𝒽𝒶𝓃✧⌝", likes: 145, dislikes: 5 },
  { id: 40, text: "🎯⟫Ř₳ɎⱧ₳₦⟪🎯", likes: 198, dislikes: 7 },
  { id: 41, text: "✧･ﾟ𝓡𝕒𝕪𝕙𝕒𝕟ﾟ･✧", likes: 167, dislikes: 6 },
  { id: 42, text: "꧁🎮Rαчнαη🎮꧂", likes: 212, dislikes: 8 },
  { id: 43, text: "☆彡Řąყɧąɳ彡☆", likes: 189, dislikes: 7 },
  { id: 44, text: "𓆩🔥𝑹𝒂𝒚𝒉𝒂𝒏🔥𓆪", likes: 256, dislikes: 9 },
  { id: 45, text: "⟦ℜ𝖆𝔂𝖍𝖆𝔫⟧", likes: 134, dislikes: 4 },
  { id: 46, text: "꧁༺💀༻Rαyнαη༺💀༻꧂", likes: 223, dislikes: 10 },
  { id: 47, text: "✿𝓡𝓪𝔂𝓱𝓪𝓷✿", likes: 178, dislikes: 5 },
  { id: 48, text: "❝☆Řåŷĥåñ☆❞", likes: 201, dislikes: 8 },
  { id: 49, text: "🌸𝑅𝒶𝓎𝒽𝒶𝓃🌸", likes: 145, dislikes: 3 },
  { id: 50, text: "꧁༒Ř𝕒𝓎ħ𝕒𝓷༒꧂", likes: 234, dislikes: 11 },
  { id: 51, text: "⫷⫸𝐑𝐚𝐲𝐡𝐚𝐧⫷⫸", likes: 156, dislikes: 6 },
  { id: 52, text: "𓆩💫ℜɑყɦɑŋ💫𓆪", likes: 198, dislikes: 7 },
  { id: 53, text: "♕𝓡𝖆𝔂𝖍𝖆𝖓♕", likes: 189, dislikes: 8 },
  { id: 54, text: "꧁🌹Rαყɦαŋ🌹꧂", likes: 167, dislikes: 5 },
  { id: 55, text: "⧼✧𝕽𝖆𝖞𝖍𝖆𝖓✧⧽", likes: 145, dislikes: 4 },
  { id: 56, text: "❈𝑅𝒶𝓎𝒽𝒶𝓃❈", likes: 178, dislikes: 6 },
  { id: 57, text: "꧁༺⚡༻Ř𝖆𝔂𝖍𝖆𝔫༺⚡༻꧂", likes: 256, dislikes: 9 },
  { id: 58, text: "🎧𝓡𝓪𝔂𝓱𝓪𝓷🎧", likes: 201, dislikes: 7 },
  { id: 59, text: "•°•Řąყɧąŋ•°•", likes: 134, dislikes: 3 },
  { id: 60, text: "꧁☯🕊️𝐑𝐚𝐲𝐡𝐚𝐧🕊️☯꧂", likes: 289, dislikes: 12 },
  { id: 61, text: "🌺𝑅𝒶𝓎𝒽𝒶𝓃🌺", likes: 145, dislikes: 5 },
  { id: 62, text: "⪻⪼Ř𝕒𝓎ħ𝕒𝓷⪻⪼", likes: 178, dislikes: 6 },
  { id: 63, text: "𓆩👑ℜαყɦαŋ👑𓆪", likes: 267, dislikes: 10 },
  { id: 64, text: "✪𝓡𝖆𝔂𝖍𝖆𝖓✪", likes: 156, dislikes: 4 },
  { id: 65, text: "꧁༒Rαчнαη™༒꧂", likes: 234, dislikes: 8 },
  { id: 66, text: "🌼𝐑𝐚𝐲𝐡𝐚𝐧🌼", likes: 145, dislikes: 5 },
  { id: 67, text: "❲𝕽𝖆𝖞𝖍𝖆𝖓❳", likes: 189, dislikes: 7 },
  { id: 68, text: "꧁💎Ř𝕒𝓎ħ𝕒𝓷ᴾᴿᴼ💎꧂", likes: 298, dislikes: 11 },
  { id: 69, text: "✨𝑅𝒶𝓎𝒽𝒶𝓃✨", likes: 167, dislikes: 6 },
  { id: 70, text: "~♥~𝓡𝖆𝔂𝖍𝖆𝔫~♥~", likes: 201, dislikes: 8 },
  { id: 71, text: "☬BD☬𝐑𝐚𝐲𝐡𝐚𝐧☬BD☬", likes: 178, dislikes: 7 },
  { id: 72, text: "꧁🔥Rαყɦαŋッ🔥꧂", likes: 223, dislikes: 9 },
  { id: 73, text: "💫𝕽𝖆𝖞𝖍𝖆𝖓💫", likes: 156, dislikes: 5 },
  { id: 74, text: "⎝✧Ř𝕒𝓎ħ𝕒𝓷✧⎠", likes: 145, dislikes: 4 },
  { id: 75, text: "𓆩🎮𝓡𝖆𝔂𝖍𝖆𝔫ᴳᴬᴹᴱᴿ🎮𓆪", likes: 312, dislikes: 13 },
  { id: 76, text: "❀𝑅𝒶𝓎𝒽𝒶𝓃❀", likes: 134, dislikes: 3 },
  { id: 77, text: "꧁༒☯Rαყɦαŋ☯༒꧂", likes: 256, dislikes: 10 },
  { id: 78, text: "🎵𝐑𝐚𝐲𝐡𝐚𝐧🎵", likes: 167, dislikes: 6 },
  { id: 79, text: "║▌𝕽𝖆𝖞𝖍𝖆𝖓▌║", likes: 189, dislikes: 7 },
  { id: 80, text: "꧁🌟Ř𝕒𝓎ħ𝕒𝓷_YT🌟꧂", likes: 278, dislikes: 11 },
  
  // Simple Styled Names (20-30%)
  { id: 81, text: "𝓡𝓪𝔂𝓱𝓪𝓷", likes: 198, dislikes: 8 },
  { id: 82, text: "𝐑𝐚𝐲𝐡𝐚𝐧", likes: 167, dislikes: 6 },
  { id: 83, text: "ʀᴀʏʜᴀɴ", likes: 156, dislikes: 5 },
  { id: 84, text: "𝕽𝖆𝖞𝖍𝖆𝖓", likes: 201, dislikes: 7 },
  { id: 85, text: "𝑅𝒶𝓎𝒽𝒶𝓃", likes: 145, dislikes: 4 },
  { id: 86, text: "𝙍𝙖𝙮𝙝𝙖𝙣", likes: 178, dislikes: 6 },
  { id: 87, text: "ℜ𝔞𝔶𝔥𝔞𝔫", likes: 189, dislikes: 8 },
  { id: 88, text: "𝖱𝖺𝗒𝗁𝖺𝗇", likes: 134, dislikes: 3 },
  { id: 89, text: "ＲＡＹＨＡＮ", likes: 156, dislikes: 5 },
  { id: 90, text: "𝗥𝗮𝘆𝗵𝗮𝗻", likes: 167, dislikes: 7 },
  { id: 91, text: "ⓡⓐⓨⓗⓐⓝ", likes: 145, dislikes: 4 },
  { id: 92, text: "🅁🄰🅈🄷🄰🄽", likes: 178, dislikes: 6 },
  { id: 93, text: "𝚁𝚊𝚢𝚑𝚊𝚗", likes: 156, dislikes: 5 },
  { id: 94, text: "Ⓡⓐⓨⓗⓐⓝ", likes: 134, dislikes: 3 },
  { id: 95, text: "ʳᵃʸʰᵃⁿ", likes: 123, dislikes: 2 },
  { id: 96, text: "𝔸 𝔹 ℂ", likes: 98, dislikes: 4 },
  { id: 97, text: "𝒜𝓁𝑒𝓍", likes: 167, dislikes: 6 },
  { id: 98, text: "𝓢𝓪𝓶", likes: 145, dislikes: 5 },
  { id: 99, text: "𝐉𝐨𝐡𝐧", likes: 156, dislikes: 7 },
  { id: 100, text: "𝕸𝖆𝖗𝖐", likes: 134, dislikes: 4 },
  { id: 101, text: "𝑬𝒎𝒎𝒂", likes: 178, dislikes: 8 },
  { id: 102, text: "ʟᴜᴄʏ", likes: 123, dislikes: 3 },
  { id: 103, text: "𝙼𝚒𝚔𝚎", likes: 145, dislikes: 5 },
  { id: 104, text: "ｓａｒａｈ", likes: 156, dislikes: 6 },
  { id: 105, text: "𝗞𝗮𝘁𝗲", likes: 134, dislikes: 4 },
];

const LikedNames = () => {
  const [names, setNames] = useState<NameData[]>(initialNames);
  const { toast } = useToast();

  const handleLike = (id: number) => {
    setNames(prev =>
      prev.map(name =>
        name.id === id ? { ...name, likes: name.likes + 1 } : name
      )
    );
  };

  const handleDislike = (id: number) => {
    setNames(prev =>
      prev.map(name =>
        name.id === id ? { ...name, dislikes: name.dislikes + 1 } : name
      )
    );
  };

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    toast({
      title: "Copied!",
      description: "Stylish name copied to clipboard",
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary via-purple-500 to-pink-500 bg-clip-text text-transparent">
            💎 Liked Stylish Names 💎
          </h1>
          <p className="text-muted-foreground text-lg">
            Premium hand-crafted stylish nicknames with unique decorations
          </p>
        </div>

        {/* Names Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {names.map((name) => (
            <Card
              key={name.id}
              className="group relative overflow-hidden bg-card/50 backdrop-blur-sm border-primary/10 hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20"
            >
              <div className="p-6">
                {/* Name Display */}
                <div className="text-center mb-4">
                  <p className="text-xl md:text-2xl font-medium break-words bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent">
                    {name.text}
                  </p>
                </div>

                {/* Action Buttons */}
                <div className="flex items-center justify-between gap-2">
                  {/* Like/Dislike */}
                  <div className="flex items-center gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleLike(name.id)}
                      className="flex items-center gap-1 hover:bg-green-500/10 hover:text-green-500 hover:border-green-500/30"
                    >
                      <ThumbsUp className="h-4 w-4" />
                      <span className="text-xs">{name.likes}</span>
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleDislike(name.id)}
                      className="flex items-center gap-1 hover:bg-red-500/10 hover:text-red-500 hover:border-red-500/30"
                    >
                      <ThumbsDown className="h-4 w-4" />
                      <span className="text-xs">{name.dislikes}</span>
                    </Button>
                  </div>

                  {/* Copy Button */}
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleCopy(name.text)}
                    className="flex items-center gap-1 hover:bg-primary/10 hover:text-primary hover:border-primary/30"
                  >
                    <Copy className="h-4 w-4" />
                    <span className="text-xs">Copy</span>
                  </Button>
                </div>
              </div>

              {/* Hover Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/5 to-purple-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LikedNames;
