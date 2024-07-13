const express = require("express");
const cors = require("cors");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const dotenv = require("dotenv");

const authorRoute = require("./routes/author");
const bookRoute = require("./routes/book");

dotenv.config(); // Load environment variables from .env file

// CONNECT DATABASE
async function connectDB() {
  try {
    await mongoose.connect(process.env.MONGGODB_URl);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Database connection error:", error);
  }
}

connectDB();

app.use(bodyParser.json({ limit: "50mb" }));
app.use(cors());
app.use(morgan("common"));

// ROUTE
app.use("/v1/author", authorRoute);
app.use("/v1/book", bookRoute);

app.listen(8000, () => {
  console.log("Server is running...");
});
