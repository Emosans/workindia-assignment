import { Request, Response } from "express";
import bcrypt from "bcrypt";
import prisma from "../db";
import jwt from "jsonwebtoken";

interface RequestBodyType {
  email: string;
  password: string;
}

export const registerUser = async (req: Request, res: Response) => {
  const { email, password }: RequestBodyType = req.body;
  try {
    const newUser = await prisma.user.create({
      data: {
        email: email,
        password: await bcrypt.hash(password, 10),
      },
    });
    res.status(201).json({ newUser });
  } catch (error) {
    res.status(500).json({ error: "could not create user" });
  }
};

export const loginUser = async (req: Request, res: Response) => {
  const { email, password }: RequestBodyType = req.body;
  try {
    const user = await prisma.user.findUnique({ where: { email: email } });
    if (!user) {
      res.status(404).json({ error: "user nor found" });
    } else {
      const isPasswordMatch = await bcrypt.compare(password, user.password);
      if (!isPasswordMatch)
        res.status(404).json({ error: "invalid credentials" });

      const token = jwt.sign({ email: user.email }, process.env.JWT_SECRET!);
      if (!token) res.status(500).json({ error: "could not create token" });

      res.status(201).json({ token, message: "login successful" });
    }
  } catch (error) {
    res.status(500).json({error:"cannot login"});
  }
};
