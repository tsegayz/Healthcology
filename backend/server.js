import mongoose from "mongoose";
import dotenv from "dotenv";
import app from "./app.js"; 

dotenv.config({ path: "./config.env" });

const PORT = process.env.PORT;
console.log(process.env.NODE_ENV);

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
