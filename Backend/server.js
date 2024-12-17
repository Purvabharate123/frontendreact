const express = require("express");
const path = require("path");
const mongoose = require("./config/db");
const cors = require("cors");
const bodyParser = require("body-parser");

const authRoutes = require("./routes/authRoutes");
const menuRoutes = require("./routes/menuRoutes");

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Serve static files from the React frontend (after build)
app.use(express.static(path.join(__dirname, "frontend/build")));

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/menu", menuRoutes);

// Fallback route to serve index.html for all non-API routes
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "frontend/build", "index.html"));
});

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
