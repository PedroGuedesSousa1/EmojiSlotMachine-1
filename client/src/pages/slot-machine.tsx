import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { EmotiReel } from "@/components/game/EmotiReel";
import { SpinButton } from "@/components/game/SpinButton";
import { ScoreDisplay } from "@/components/game/ScoreDisplay";
import { SettingsPanel } from "@/components/game/SettingsPanel";
import { getRandomEmoji, checkWin } from "@/lib/game";
import { useToast } from "@/hooks/use-toast";
import useSound from "use-sound";

export default function SlotMachine() {
  const [reels, setReels] = useState(["🎰", "🎰", "🎰"]);
  const [isSpinning, setIsSpinning] = useState(false);
  const [score, setScore] = useState(0);
  const [soundEnabled, setSoundEnabled] = useState(true);
  const { toast } = useToast();
  
  const [playSpinSound] = useSound("/sounds/spin.mp3", { volume: 0.5 });
  const [playWinSound] = useSound("/sounds/win.mp3", { volume: 0.5 });

  const spin = async () => {
    if (isSpinning) return;
    
    if (soundEnabled) playSpinSound();
    setIsSpinning(true);

    setTimeout(() => {
      const newReels = [getRandomEmoji(), getRandomEmoji(), getRandomEmoji()];
      setReels(newReels);
      setIsSpinning(false);

      const winAmount = checkWin(newReels);
      if (winAmount > 0) {
        if (soundEnabled) playWinSound();
        setScore(prev => prev + winAmount);
        toast({
          title: "Winner!",
          description: `You won ${winAmount} points!`,
        });
      }
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 flex flex-col items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md"
      >
        <div className="flex justify-between mb-8">
          <ScoreDisplay score={score} />
          <SettingsPanel 
            soundEnabled={soundEnabled}
            onToggleSound={() => setSoundEnabled(!soundEnabled)}
          />
        </div>

        <div className="bg-white/80 backdrop-blur p-8 rounded-2xl shadow-xl">
          <div className="flex justify-center gap-4 mb-8">
            {reels.map((emoji, i) => (
              <EmotiReel key={i} emoji={emoji} isSpinning={isSpinning} />
            ))}
          </div>
          
          <div className="flex justify-center">
            <SpinButton onClick={spin} disabled={isSpinning} />
          </div>
        </div>
      </motion.div>
    </div>
  );
}
