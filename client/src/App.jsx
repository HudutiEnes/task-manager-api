import LayoutWrapper from "./components/LayoutWrapper";
import Navbar from "./components/Navbar";
import Button from "./components/Button";
import { useState } from "react";
import CreateTask from "./components/CreateTask";
import TaskItem from "./components/TaskItem";
import DeleteTask from "./components/DeleteTask";
import initialData from "./data/tasks.json";

console.log("RAW DATA:", initialData);

function App() {
    const [tasks, setTasks] = useState(initialData || []);

    // ADD Task
    const addTask = (title) => {
        const newTask = { id: Date.now(), title, completed: false };
        setTasks([...tasks, newTask]);
    };

    // DELETE Task
    const deleteTask = (id) => {
        setTasks(tasks.filter((task) => task.id !== id));
    };

    const toggleTask = (id) => {
        if (!Array.isArray(tasks)) return;

        setTasks((prevTasks) =>
            prevTasks.map((task) => {
                if (task.id === id) {
                    let nextStatus;
                    if (task.status === "pending") nextStatus = "in-progress";
                    else if (task.status === "in-progress")
                        nextStatus = "completed";
                    else nextStatus = "pending";

                    return { ...task, status: nextStatus };
                }
                return task;
            }),
        );
    };

    return (
        <LayoutWrapper>
            <Navbar />
            <div className="mt-10 max-w-2xl mx-auto px-4">
                <div className="text-center mb-10">
                    <h1 className="text-4xl font-bold mb-4">My Task Manager</h1>
                    <p className="text-zinc-400">
                        Manage your DevOps workflow efficiently.
                    </p>
                </div>

                <div className="mb-10">
                    <CreateTask onCreate={addTask} />
                </div>

                <div className="space-y-4">
                    {Array.isArray(tasks) && tasks.length > 0 ? (
                        tasks.map((task) => (
                            <TaskItem
                                key={task.id}
                                task={task}
                                onDelete={deleteTask}
                                onToggle={toggleTask}
                            />
                        ))
                    ) : (
                        <p className="text-center text-zinc-500">
                            No tasks yet. Add one above!
                        </p>
                    )}
                </div>
            </div>
        </LayoutWrapper>
    );
}

export default App;
