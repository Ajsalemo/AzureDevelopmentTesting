const express = require("express");

const path = require("path");
const app = express();
const PORT = process.env.PORT || 3000;

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.render("home");
});

app.get("/high_memory", (req, res) => {
  res.render("high_memory");
});

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});