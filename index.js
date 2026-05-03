const express = require("express");
const app = express();

app.use(express.json());

// Home route
app.get("/", (req, res) => {
  res.send("🔥 Updated from GitHub!");
});

// API test route
app.get("/api/status", (req, res) => {
  res.json({
    status: "OK",
    message: "Server is working fine",
    time: new Date()
  });
});

app.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});