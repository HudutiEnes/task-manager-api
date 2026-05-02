tasks = require("../../tasks.json");

// Validating the tasks status
const validStatuses = ["pending", "in-progress", "completed"];

// Creates new task and adds it to in-memory array
const createTask = (req, res, next) => {
    const { title, status, dueDate } = req.body;

    console.log("POST /api/tasks", req.body);

    if (!title || !status) {
        return next(new Error("Title and Status are required"));
    }

    if (!validStatuses.includes(status)) {
        return next(
            new Error(
                "Invalid status value. Must be 'pending', 'in-progress', or 'completed'.",
            ),
        );
    }

    const newTask = {
        id: Date.now().toString(),
        title,
        status,
        dueDate,
    };

    tasks.push(newTask);

    res.status(201).json({
        message: "Task created succesfully",
        task: newTask,
    });
};

// Fetches all tasks from array
const getTasks = (req, res) => {
    console.log("GET /api/tasks", req.query);
    res.status(200).json({
        message: "Fetched all tasks",
        task: tasks,
    });
};

//Fetches specific task found by id
const getTasksbyID = (req, res, next) => {
    const { id } = req.params;
    console.log("GET /api/tasks/:id", id);

    const task = tasks.find((t) => t.id === id);

    if (!task) {
        return next(new Error("Task is missing!"));
    }

    res.status(200).json({
        message: `Fetched all tasks with id:${id}`,
        task,
    });
};

// Updates the task
const updateTask = (req, res, next) => {
    const { id } = req.params;
    const { title, status, dueDate } = req.body;

    const index = tasks.findIndex((t) => t.id === id);

    if (index === -1) {
        return next(new Error("Task is missing"));
    }

    if (!title?.trim() || !status) {
        return next(
            new Error("Title and Status are required and cannot be empty"),
        );
    }

    if (!validStatuses.includes(status)) {
        return next(new Error("Invalid status value"));
    }

    tasks[index] = { ...tasks[index], title, status, dueDate };

    res.status(200).json({
        message: "Task updated succesfully",
        task: tasks[index],
    });
};

// Deletes the task by id
const deleteTask = (req, res, next) => {
    const { id } = req.params;
    const task = tasks.find((t) => t.id === id);

    if (!task) {
        return next(new Error("Task is missing"));
    }

    tasks = tasks.filter((t) => t.id !== id);

    res.status(200).json({
        message: "Task deleted succesfully",
    });
};

const patchTask = (req, res, next) => {
    const { id } = req.params;
    const updates = req.body;

    const index = tasks.findIndex((t) => t.id === id);
    if (index === -1) {
        return next(new Error("Task not found"));
    }

    if (updates.status && !validStatuses.includes(updates.status)) {
        return next(new Error("Invalid status value"));
    }

    tasks[index] = { ...tasks[index], ...updates };

    res.status(200).json({
        message: "Task patched succesfully",
        task: tasks[index],
    });
};

module.exports = {
    getTasks,
    getTasksbyID,
    createTask,
    updateTask,
    deleteTask,
    patchTask,
};
