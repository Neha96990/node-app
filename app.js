const express = require("express");
const app = express();
const PORT = 3000;

// Middleware
app.use(express.json());

// Routes
const userRoutes = require("./routes/userRoutes");
app.use("/api/users", userRoutes);

// Root Route
app.get("/", (req, res) => {
  res.send("🚀 Node.js CI/CD App Running Successfully!");
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});