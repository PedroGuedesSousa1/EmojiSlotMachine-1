import type { Express } from "express";
import { createServer } from "http";
import { storage } from "./storage";
import { insertScoreSchema } from "@shared/schema";

export async function registerRoutes(app: Express) {
  app.get("/api/scores", async (_req, res) => {
    const scores = await storage.getHighScores();
    res.json(scores);
  });

  app.post("/api/scores", async (req, res) => {
    const result = insertScoreSchema.safeParse(req.body);
    if (!result.success) {
      return res.status(400).json({ message: "Invalid score data" });
    }
    const score = await storage.createScore(result.data);
    res.json(score);
  });

  return createServer(app);
}
