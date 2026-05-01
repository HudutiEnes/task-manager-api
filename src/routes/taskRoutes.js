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

router.get("/", getTasks);
router.get("/:id", getTasksbyID);
router.post("/", createTask);
router.put("/:id", updateTask);
router.delete("/:id", deleteTask);
router.patch("/:id", patchTask);

module.exports = router;
