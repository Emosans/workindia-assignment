import { Request, Response } from "express";
import prisma from "../db";

export const bookSeat = async (req: Request, res: Response) => {
  const { userId, trainId, seatNumber } = req.body;

  try {
    const result = await prisma.$transaction(async (prisma) => {
      const bookingExists = await prisma.booking.findFirst({
        where: {
          trainId: trainId,
          seatNumber: seatNumber,
        },
      });

      if (bookingExists) {
        throw new Error("Seat already booked");
      }

      const newBooking = await prisma.booking.create({
        data: {
          userId: userId,
          trainId: trainId,
          seatNumber: seatNumber,
        },
      });

      return newBooking;
    });

    res
      .status(201)
      .json({ message: "Seat booked successfully", booking: result });
  } catch (error) {
    res.status(500).json({ error: "cannot book seat" });
  }
};

export const getSeat = async (req: Request, res: Response) => {
  const { trainId, seatNumber } = req.params;

  try {
    const seat = await prisma.booking.findFirst({
      where: {
        trainId: parseInt(trainId),
        seatNumber: parseInt(seatNumber),
      },
    });
    if (!seat) res.status(200).json({ message: "seat is available" });

    res.status(201).json({ message: "seat is booked!" });
  } catch (error) {
    res.status(500).json({ error: "could not get seat" });
  }
};

export const bookingDetails = async (req: Request, res: Response) => {
  const { bookingId } = req.params;

  try {
    const booking = await prisma.booking.findUnique({
      where: {
        id: parseInt(bookingId),
      },
      include: { user: true, train: true },
    });

    if (!booking) {
      res.status(404).json({ error: "booking not found" });
      return;
    }

    res.status(201).json({ booking });
  } catch (error) {
    res.status(500).json({ error: "couldnt fetch details" });
  }
};
