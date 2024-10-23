const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const path = require("path");
const app = express();

console.log(process.env.NODE_ENV);

if (process.env.NODE_ENV === "development") {
	app.use(morgan("dev"));
}

app.use(express.json());
const corsOptions = {
	origin: "http://localhost:3000",
};

app.use(cors(corsOptions));
app.use("/images", express.static(path.join(__dirname, "images")));

// read operation

module.exports = app;
