export const EMOJIS = [
  "😀", "😄", "😊", "🥰", "😎", "🤩", "😇", "🤗", "🥳", "😌",
  "💫", "⭐", "✨", "💎", "🌟", "🔮", "🎨", "🎭", "🎪", "🎯",
  "🦋", "🌈", "🌸", "🍀", "🌺", "🌻", "🌹", "🍄", "🐣", "🦄",
  "🎪", "🎭", "🎨", "🎬", "🎮", "🎲", "🎸", "🎺", "🎷", "🎹",
  "🌙", "☀️", "⚡", "❄️", "🌊", "🔥", "🌈", "☘️", "🍭", "🍬",
  "🎈", "🎊", "🎉", "🎵", "🎶", "💝", "💖", "💗", "💓", "💞",
  "🦚", "🦜", "🦢", "🦩", "🐙", "🦋", "🐠", "🐳", "🐋", "🦈",
  "🎠", "🎡", "🎢", "🎪", "🗽", "🎨", "🎭", "🎪", "🎯", "🎲"
];

export const REWARDS = {
  "🤩": 777, // Jackpot
  "💎": 100,
  "🌟": 90,
  "⭐": 80,
  "✨": 70,
  "💫": 60
  // All other emojis worth 10 points
};

export function getRandomEmoji(): string {
  // 0.2% chance for jackpot (1 in 500)
  if (Math.random() < 0.002) {
    return "🤩";
  }
  return EMOJIS[Math.floor(Math.random() * EMOJIS.length)];
}

export function getCheatReels(mode: "jackpot" | "match" | "normal"): string[] {
  if (mode === "jackpot") {
    return ["🤩", "🤩", "🤩"];
  } else if (mode === "match") {
    const emoji = getRandomEmoji();
    return [emoji, emoji, emoji];
  } else {
    // 2% chance for a match in normal mode
    if (Math.random() < 0.02) {
      const emoji = getRandomEmoji();
      return [emoji, emoji, emoji];
    }
    // Otherwise random emojis
    return [getRandomEmoji(), getRandomEmoji(), getRandomEmoji()];
  }
}

export function checkWin(reels: string[]): number {
  if (reels[0] === reels[1] && reels[1] === reels[2]) {
    return REWARDS[reels[0] as keyof typeof REWARDS] || 10;
  }
  return 0;
}