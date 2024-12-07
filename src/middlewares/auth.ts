import jwt from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";

export const auth = (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) {
    res.json({ error: "No token provided" });
    return;
  }

  jwt.verify(token, process.env.JWT_SECRET!, (error, user) => {
    if (error) {
      res.status(403).json({ error: "forbidden" });
      return;
    }

    (req as any).user = user as {
      email: string;
      password: string;
    };

    next();
  });
};
