import { Request, Response } from "express";

interface RequestBodyType {
  source:string;
  destination:string;
}

export const getSeat = (req:Request,res:Response) => {
    console.log("get seats");
}

export const bookSeat = (req:Request,res:Response) => {
    console.log("book a seat");
}

export const bookingDetails = (req:Request,res:Response) => {
    console.log("details to book the train");
}