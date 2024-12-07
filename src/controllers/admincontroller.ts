import { Request, Response } from "express";
import prisma from "../db";

interface RequestBodyType {
  source: string;
  destination: string;
  seats: number;
}

export const addNewTrain = async (req: Request, res: Response) => {
  const { source, destination,seats }: RequestBodyType = req.body;

  try {
    const newTrain = await prisma.train.create({
      data: {
        source: source,
        destination: destination,
        seats: seats
      },
    });
    res.status(201).json({ newTrain });
  } catch (error) {
    res.status(500).json({ error: "could not add new train!" });
  }
};
