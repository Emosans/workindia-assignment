import express, { Application, Request, Response } from "express";
import dotenv from "dotenv";
import userRouter from "./routers/userRoute";

const app: Application = express();
app.use(express.json());
dotenv.config();

const port: number = 3000;



app.use("/startup", (req: Request, res: Response) => {
  res.send("hello world");
});

app.listen(() => {
  console.log(`listening on port ${port}`);
});
