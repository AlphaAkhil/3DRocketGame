const express = require("express");
const path = require("path");
const app = express();

const buildPath = path.join(__dirname, 'Build'); // Adjust if needed

app.get("*.br", (req, res, next) => {
  if (req.url.endsWith(".js.br")) {
    res.set("Content-Encoding", "br");
    res.set("Content-Type", "application/javascript");
  } else if (req.url.endsWith(".wasm.br")) {
    res.set("Content-Encoding", "br");
    res.set("Content-Type", "application/wasm");
  } else if (req.url.endsWith(".data.br")) {
    res.set("Content-Encoding", "br");
    res.set("Content-Type", "application/octet-stream");
  }
  next();
});

app.use(express.static(buildPath));

app.listen(8080, () => {
  console.log("✅ Server running at http://localhost:5500");
});
