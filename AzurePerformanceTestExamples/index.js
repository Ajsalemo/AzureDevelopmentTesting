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
  const mu = process.memoryUsage();
  const message = "Starting memory allocation..";
  setTimeout(() => {
    while (true) {
      const mu = process.memoryUsage();
      console.log(`Heap used: ${mu.heapUsed}`);
    }
  }, 3000);
  res.render("high_memory", {
    message: message,
  });
});

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});
