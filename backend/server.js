import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config({ path: "./config.env" });

const app = express();
const PORT = process.env.PORT;

// MongoDB connection
const dbURI = process.env.DATABASE.replace(
	"<PASSWORD>",
	process.env.DATABASE_PASSWORD
);
mongoose
	.connect(dbURI)
	.then(() => console.log("DB connection successful!"))
	.catch((err) => console.error("DB connection error:", err));

app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});
