import express from "express";
import { errorHandler } from "./utils/error.utils";
import cookieParser from "cookie-parser";
import cors from "cors";
import organizationsRouter from "./routes/organizations.routes";
import userRouter from "./routes/user.routes";

const PORT = process.env.PORT || 5767;

const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(cors(JSON.parse(process.env.CORS_OPTIONS ?? "{}")));

app.use("/organizations", organizationsRouter);
app.use("/user", userRouter);

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Express API listening on port ${PORT}`);
});
