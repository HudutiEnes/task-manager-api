// Task Manager API - Entry Point
// Sets up middleware, routes, and error handling

const express = require("express");
const app = express();
const morgan = require("morgan");

app.use(express.json());
app.use(morgan("dev"));

const taskRoutes = require("./routes/taskRoutes");
app.use("/", taskRoutes);

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(err.status || 500).json({
    message: err.message || "Internal Server Error",
  });
});

app.listen(3000, () => {
  console.log("Server is starting on port 3000");
});
