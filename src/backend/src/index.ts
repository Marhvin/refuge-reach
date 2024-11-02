import express from "express";
import { errorHandler } from "./utils/error.utils";
import cookieParser from "cookie-parser";
import cors from "cors";

const PORT = process.env.PORT || 5767;

const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(cors(JSON.parse(process.env.CORS_OPTIONS ?? "{}")));

// add routes

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Express API listening on port ${PORT}`);
});
