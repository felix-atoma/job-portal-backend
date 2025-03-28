const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./config/db");

// Load environment variables
dotenv.config();

// Connect to MongoDB
connectDB();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Default route for Vercel
test
app.get("/", (req, res) => {
  res.send("Job Portal Backend API is running...");
});

// Routes
app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/jobs", require("./routes/jobRoutes"));
app.use("/api/contact", require("./routes/contactRoutes"));

// Export the app for Vercel
module.exports = app;
