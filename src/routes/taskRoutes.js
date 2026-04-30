const express = require("express");
const router = express.Router();

const {
  getTasks,
  getTasksbyID,
  createTask,
  updateTask,
  deleteTask,
  patchTask,
} = require("../controllers/tasksControllers");

router.get("/api/tasks", getTasks);
router.get("/api/tasks/:id", getTasksbyID);
router.post("/api/tasks", createTask);
router.put("/api/tasks/:id", updateTask);
router.delete("/api/tasks/:id", deleteTask);
router.patch("/api/tasks/:id", patchTask);

module.exports = router;
