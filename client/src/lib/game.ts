export const EMOJIS = ["🍎", "🍋", "🍒", "🎰", "💎", "7️⃣"];

export const REWARDS = {
  "🍎": 10,
  "🍋": 20,
  "🍒": 30,
  "🎰": 50,
  "💎": 100,
  "7️⃣": 777
};

export function getRandomEmoji(): string {
  return EMOJIS[Math.floor(Math.random() * EMOJIS.length)];
}

export function checkWin(reels: string[]): number {
  if (reels[0] === reels[1] && reels[1] === reels[2]) {
    return REWARDS[reels[0] as keyof typeof REWARDS];
  }
  return 0;
}
