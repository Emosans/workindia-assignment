import { Request, Response, NextFunction } from "express";

export const adminAuth = (req: Request, res: Response, next: NextFunction) => {
  const adminToken = req.headers["x-api-key"];
  if (!adminToken || adminToken !== process.env.ADMIN_API_KEY) {
    res.status(403).json({ error: "forbidden! invalid api key" });
    return;
  }
  next();
};
