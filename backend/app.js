import express, { json } from "express";
import morgan from "morgan";
import cors from "cors";
import { join } from "path";
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = join(__filename, '..');

const app = express();

if (process.env.NODE_ENV === "development") {
	app.use(morgan("dev"));
}

app.use(json());
const corsOptions = {
	origin: "http://localhost:3000",
};

app.use(cors(corsOptions));
app.use("/images", express.static(join(__dirname, "images"))); // Use express.static here

import userRouter from "./routes/userRouters.js";
import courseRouter from "./routes/courseRouters.js";

// we used it as a middleware to attach it to the main route which is also called mounting
app.use("/api/v1/users", userRouter);
app.use("/api/v1/courses", courseRouter);

export default app;