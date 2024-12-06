import express from "express";
import { addNewTrain } from "../controllers/admincontroller";
import { adminAuth } from "../middlewares/adminAuth";

const adminRouter = express.Router();

adminRouter.post("/addtrain", adminAuth, addNewTrain);

export default adminRouter;
