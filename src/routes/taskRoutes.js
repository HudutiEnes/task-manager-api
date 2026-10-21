const express = require("express");
const router = express.Router();

const {
    getTasks,
    getTasksbyID,
    createTask,
    updateTask,
    deleteTask,
    patchTask,
    register,
    login,
} = require("../controllers/tasksControllers");

router.get("/", getTasks);
router.get("/:id", getTasksbyID);
router.post("/", createTask);
router.put("/:id", updateTask);
router.delete("/:id", deleteTask);
router.patch("/:id", patchTask);
router.post("/auth/register", register);
router.get("/auth/login", login);

module.exports = router;
