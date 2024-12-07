import express, { Application, Request, Response } from "express";
import dotenv from "dotenv";
import userRouter from "./routers/userRoute";
import adminRouter from "./routers/adminRoute";

const app: Application = express();
app.use(express.json());
dotenv.config();

const port: number = 5000;

app.get("/", (req: Request, res: Response) => {
  res.send("hello world");
});

app.use("/user", userRouter);
app.use("/admin", adminRouter);

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
