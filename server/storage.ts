import { scores, type Score, type InsertScore } from "@shared/schema";

export interface IStorage {
  getHighScores(): Promise<Score[]>;
  createScore(score: InsertScore): Promise<Score>;
}

export class MemStorage implements IStorage {
  private scores: Map<number, Score>;
  currentId: number;

  constructor() {
    this.scores = new Map();
    this.currentId = 1;
  }

  async getHighScores(): Promise<Score[]> {
    return Array.from(this.scores.values())
      .sort((a, b) => b.score - a.score)
      .slice(0, 10);
  }

  async createScore(insertScore: InsertScore): Promise<Score> {
    const id = this.currentId++;
    const score: Score = { ...insertScore, id };
    this.scores.set(id, score);
    return score;
  }
}

export const storage = new MemStorage();
