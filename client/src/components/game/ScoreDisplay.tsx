import { Card } from "@/components/ui/card";

interface ScoreDisplayProps {
  score: number;
}

export function ScoreDisplay({ score }: ScoreDisplayProps) {
  return (
    <Card className="p-4 bg-white/80 backdrop-blur">
      <div className="text-center">
        <div className="text-sm text-gray-500 font-medium">Score</div>
        <div className="text-3xl font-bold">{score}</div>
      </div>
    </Card>
  );
}
