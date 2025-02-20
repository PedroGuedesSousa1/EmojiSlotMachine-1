import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";

interface SettingsPanelProps {
  soundEnabled: boolean;
  onToggleSound: () => void;
}

export function SettingsPanel({ soundEnabled, onToggleSound }: SettingsPanelProps) {
  return (
    <Card className="p-4 bg-white/80 backdrop-blur">
      <div className="flex items-center space-x-2">
        <Switch id="sound" checked={soundEnabled} onCheckedChange={onToggleSound} />
        <Label htmlFor="sound">Sound Effects</Label>
      </div>
    </Card>
  );
}
