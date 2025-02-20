import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

interface SpinButtonProps {
  onClick: () => void;
  disabled: boolean;
}

export function SpinButton({ onClick, disabled }: SpinButtonProps) {
  return (
    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
      <Button
        onClick={onClick}
        disabled={disabled}
        className="w-32 h-12 text-lg font-medium bg-primary"
      >
        Spin
      </Button>
    </motion.div>
  );
}
