import { motion } from "framer-motion";

interface EmotiReelProps {
  emoji: string;
  isSpinning: boolean;
}

export function EmotiReel({ emoji, isSpinning }: EmotiReelProps) {
  return (
    <motion.div
      className="w-24 h-24 bg-white rounded-xl shadow-lg flex items-center justify-center text-4xl"
      animate={{
        y: isSpinning ? [0, -20, 0] : 0,
      }}
      transition={{
        duration: 0.3,
        repeat: isSpinning ? 5 : 0,
        ease: "easeInOut",
      }}
    >
      {emoji}
    </motion.div>
  );
}
