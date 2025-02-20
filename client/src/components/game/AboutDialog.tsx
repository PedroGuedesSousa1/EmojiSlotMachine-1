import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

export function AboutDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button 
          variant="outline" 
          className="absolute top-4 right-4"
        >
          About Us
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>About The Emoji Machine</DialogTitle>
          <DialogDescription className="space-y-4 pt-4">
            <p>
              The Emoji Machine is a playful passion project designed to demonstrate the dangers of gambling in a fun, harmless way.
            </p>
            <div className="space-y-2">
              <h4 className="font-semibold">How it works:</h4>
              <ul className="list-disc pl-4 space-y-1">
                <li>Match three emojis (2% chance) to win!</li>
                <li>Hit the super rare Jackpot (0.2% chance) with three 🤩 stars!</li>
              </ul>
            </div>
            <p className="text-sm italic">
              Remember: This is just for fun! Real gambling can be dangerous and addictive.
            </p>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
