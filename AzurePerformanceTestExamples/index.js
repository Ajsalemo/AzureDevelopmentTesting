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

app.get("/high_cpu", (req, res) => {
  const message = "Starting CPU allocation..";
  const number = parseInt(1000);
  // Run the sequence to take time up on the main thread
  // Use a load test/benchmark tool to run subsequent requests to watch CPU increase while the operation runs
  setTimeout(() => {
    let n1 = 0;
    let n2 = 1;
    let nextTerm;

    console.log("Fibonacci Series:");

    for (let i = 1; i <= number; i++) {
      console.log(n1);
      nextTerm = n1 + n2;
      n1 = n2;
      n2 = nextTerm;
    }
  }, 3000);

  res.render("high_cpu", {
    message: message,
  });
});

app.get("/high_memory", (req, res) => {
  // This will cause Javascript Heap Out Of Memory (Note: This may take a few minutes to occur)
  const message = "Starting memory allocation..";
  setTimeout(() => {
    for (let i = 0; i > -1; i++) {
      console.log(`Starting Memory allocation - iteration ${i}`);
    }
  }, 3000);
  res.render("high_memory", {
    message: message,
  });
});

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});
