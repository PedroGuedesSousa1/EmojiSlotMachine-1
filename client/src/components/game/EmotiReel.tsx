import { motion } from "framer-motion";

interface EmotiReelProps {
  emoji: string;
  isSpinning: boolean;
  hasMatch: boolean;
}

export function EmotiReel({ emoji, isSpinning, hasMatch }: EmotiReelProps) {
  return (
    <motion.div
      className={`w-24 h-24 bg-white rounded-xl shadow-lg flex items-center justify-center text-4xl select-none
        ${hasMatch ? 'ring-4 ring-[conic-gradient(from_var(--angle),gold,yellow,gold)] before:animate-[spin_3s_linear_infinite]' : ''}`}
      style={hasMatch ? { "--angle": "0deg" } as any : undefined}
      animate={{
        y: isSpinning ? [0, -20, 0] : 0,
        scale: isSpinning ? [1, 1.1, 1] : 1,
        rotateX: isSpinning ? [0, 360, 720] : 0,
      }}
      transition={{
        duration: 0.4,
        repeat: isSpinning ? 3 : 0,
        ease: "easeInOut",
      }}
    >
      {emoji}
    </motion.div>
  );
}