const express = require("express");
const app = express();

app.use(express.static("public"));

app.get("/", function (req, res) {
  res.send("Hello World");
});

app.get("/contact", function (req, res) {
  res.send("Hello Contact");
});

app.post("/contact", function (req, res) {
  res.send("Hello Post Contact");
});

app.listen(3000, () => {
  console.log("server express berjalan...");
});
