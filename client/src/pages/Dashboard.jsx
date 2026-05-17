import { useState, useEffect } from "react";
import { fetchTasks } from "../components/FetchTasks";

const Dashboard = () => {
    // Initializing the state machine
    const [tasks, setTasks] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchTasks(setTasks, setIsLoading, setError);
    }, []);

    if (isLoading)
        return <div className="text-zinc-400">Loading tasks data ...</div>;
    if (error)
        return (
            <div className="text-red-500 font-mono">System Error:{error}</div>
        );

    return (
        <div className="p-6 bg-black text-white min-h-screen">
            <h1 className="text-2xl font-bold mb-4">Task Dashboard</h1>
            <ul className="space-y-2">
                {tasks.map((task) => (
                    <li
                        key={task.id}
                        className="p-3 bg-zinc-900 border border-zinc-800 rounded"
                    >
                        {task.title} -{" "}
                        <span className="text-zinc-500">{task.status}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Dashboard;
