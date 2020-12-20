const express = require("express");
const { sleep } = require("sleep");

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
  const mu = process.memoryUsage();
  const message = "Starting memory allocation..";
  setTimeout(() => {
    while (true) {
      const mu = process.memoryUsage();
    }
  }, 3000);
  res.render("high_memory", {
    message: message,
  });
});

app.get("/high_cpu", (req, res) => {
  const message = "Starting CPU allocation.. Keep making multiple requests";
  sleep(5);
  for (let i = 0; i > -1; i++) {
    console.log(`Starting CPU allocation - iteration ${i}`)
  }
  res.render("high_cpu", {
    message: message,
  });
});

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});
