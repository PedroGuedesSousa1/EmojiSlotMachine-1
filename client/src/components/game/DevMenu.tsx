import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

interface DevMenuProps {
  onSetCheatMode: (mode: "jackpot" | "match" | "normal") => void;
  onReset: () => void;
  onClose: () => void;
}

export function DevMenu({ onSetCheatMode, onReset, onClose }: DevMenuProps) {
  return (
    <Card className="absolute top-20 right-4 p-4 bg-white/90 backdrop-blur shadow-xl z-50">
      <div className="space-y-2">
        <Button 
          onClick={() => {
            onSetCheatMode("jackpot");
            onClose();
          }}
          className="w-full"
          variant="outline"
        >
          Force Jackpot
        </Button>
        <Button 
          onClick={() => {
            onSetCheatMode("match");
            onClose();
          }}
          className="w-full"
          variant="outline"
        >
          Force Match
        </Button>
        <Button 
          onClick={() => {
            onSetCheatMode("normal");
            onClose();
          }}
          className="w-full"
          variant="outline"
        >
          Normal Mode
        </Button>
        <Button 
          onClick={() => {
            onReset();
            onClose();
          }}
          className="w-full"
          variant="destructive"
        >
          Reset Game
        </Button>
      </div>
    </Card>
  );
}
