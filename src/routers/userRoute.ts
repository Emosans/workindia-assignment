import { registerUser, loginUser } from "../controllers/usercontroller";
import express from "express";
import { auth } from "../middlewares/auth";
import {
  bookingDetails,
  bookSeat,
  getSeat,
} from "../controllers/bookingController";

const userRouter = express.Router();

userRouter.post("/register", registerUser);
userRouter.post("/login", loginUser);

// booking routes
userRouter.post("/bookseat", auth, bookSeat);
userRouter.get("/booking/:bookingId", auth, bookingDetails);
userRouter.get("/seat/:trainId/:seatNumber", getSeat);

export default userRouter;
