import { useState } from "react";
import { motion } from "framer-motion";
import Confetti from "react-confetti";
import { EmotiReel } from "@/components/game/EmotiReel";
import { SpinButton } from "@/components/game/SpinButton";
import { DevMenu } from "@/components/game/DevMenu";
import { AboutDialog } from "@/components/game/AboutDialog";
import { getCheatReels, checkWin } from "@/lib/game";
import { useToast } from "@/hooks/use-toast";

export default function SlotMachine() {
  const [reels, setReels] = useState(["❓", "❓", "❓"]);
  const [isSpinning, setIsSpinning] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const [hasSpunOnce, setHasSpunOnce] = useState(false);
  const [titleClicks, setTitleClicks] = useState(0);
  const [showDevMenu, setShowDevMenu] = useState(false);
  const [cheatMode, setCheatMode] = useState<"jackpot" | "match" | "normal">("normal");
  const { toast } = useToast();

  const spin = async () => {
    if (isSpinning) return;

    setIsSpinning(true);
    if (!hasSpunOnce) setHasSpunOnce(true);

    setTimeout(() => {
      const newReels = getCheatReels(cheatMode);
      setReels(newReels);
      setIsSpinning(false);

      // Check for wins
      const isMatch = newReels[0] === newReels[1] && newReels[1] === newReels[2];
      const isJackpot = isMatch && newReels[0] === "🤩";

      if (isJackpot) {
        setShowConfetti(true);
        // More confetti pieces for jackpot
        setTimeout(() => setShowConfetti(false), 4000);
        toast({
          title: "🎉 JACKPOT! 🎉",
          description: "Incredible! You've hit the legendary jackpot!",
        });
      } else if (isMatch) {
        setShowConfetti(true);
        setTimeout(() => setShowConfetti(false), 3000);
        toast({
          title: "🎯 Match!",
          description: `Congratulations! You matched three ${newReels[0]}!`,
        });
      }
    }, 1500);
  };

  const handleTitleClick = () => {
    const newCount = titleClicks + 1;
    setTitleClicks(newCount);
    if (newCount === 7) {
      setShowDevMenu(true);
      setTitleClicks(0);
    }
  };

  const resetGame = () => {
    setReels(["❓", "❓", "❓"]);
    setHasSpunOnce(false);
    setCheatMode("normal");
    setShowConfetti(false);
  };

  return (
    <div className="min-h-screen bg-[#FAFAFA] flex flex-col items-center justify-center p-4 select-none">
      {showConfetti && (
        <Confetti
          recycle={false}
          numberOfPieces={reels[0] === "🤩" ? 500 : 200}
          confettiSource={{
            x: window.innerWidth / 2,
            y: window.innerHeight / 2,
            w: 0,
            h: 0
          }}
        />
      )}

      <AboutDialog />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md"
      >
        <h1 
          className="text-4xl font-semibold text-center mb-8 bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent cursor-pointer"
          onClick={handleTitleClick}
        >
          The Emoji Machine
        </h1>

        {showDevMenu && (
          <DevMenu
            onSetCheatMode={setCheatMode}
            onReset={resetGame}
            onClose={() => setShowDevMenu(false)}
          />
        )}

        <div className="bg-white/80 backdrop-blur p-8 rounded-2xl shadow-xl">
          <div className="flex justify-center gap-4 mb-8">
            {reels.map((emoji, i) => (
              <EmotiReel 
                key={i} 
                emoji={emoji} 
                isSpinning={isSpinning} 
                hasMatch={false}
              />
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