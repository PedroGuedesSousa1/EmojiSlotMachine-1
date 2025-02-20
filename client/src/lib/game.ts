export const EMOJIS = [
  "😀", "😄", "😊", "🥰", "😎", "🤩", "😇", "🤗", "🥳", "😌",
  "💫", "⭐", "✨", "💎", "🌟", "🔮", "🎨", "🎭", "🎪", "🎯",
  "🦋", "🌈", "🌸", "🍀", "🌺", "🌻", "🌹", "🍄", "🐣", "🦄",
  "🎪", "🎭", "🎨", "🎬", "🎮", "🎲", "🎸", "🎺", "🎷", "🎹",
  "🌙", "☀️", "⚡", "❄️", "🌊", "🔥", "🌈", "☘️", "🍭", "🍬",
  "🎈", "🎊", "🎉", "🎵", "🎶", "💝", "💖", "💗", "💓", "💞",
  "🦚", "🦜", "🦢", "🦩", "🐙", "🦋", "🐠", "🐳", "🐋", "🦈",
  "🎠", "🎡", "🎢", "🎪", "🗽", "🎨", "🎭", "🎪", "🎯", "🎲",
  "🔮", "💎", "💫", "✨", "⭐", "🌟", "🌙", "☀️", "⚡", "❄️"
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
  return EMOJIS[Math.floor(Math.random() * EMOJIS.length)];
}

export function checkWin(reels: string[]): number {
  if (reels[0] === reels[1] && reels[1] === reels[2]) {
    return REWARDS[reels[0] as keyof typeof REWARDS] || 10;
  }
  return 0;
}