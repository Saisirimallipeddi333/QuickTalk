const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 5000;

app.use(cors({ origin: "http://localhost:3000" }));
app.use(express.json());

app.get("/", (req, res) => {
  res.send("QuickTalk backend is running 🚀");
});

// health check API
app.get("/api/health", (req, res) => {
  res.json({ status: "ok", service: "quicktalk-backend" });
});

app.listen(PORT, () => {
  console.log(`Server started on http://localhost:${PORT}`);
});
