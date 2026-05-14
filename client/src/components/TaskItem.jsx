const TaskItem = ({ task, onToggle, onDelete }) => {
    return (
        <div className="flex items-center justify-between p-4 bg-zinc-800 border border-zinc-700 rounded-lg shadow-sm">
            <div className="flex items-center gap-4">
                <input
                    type="checkbox"
                    checked={task.status === "completed"}
                    onChange={() => onToggle(task.id)}
                />
                {/* The logic below ensures the text is visible and styled */}
                <span
                    className={`text-zinc-100 ${task.status === "completed" ? "line-through opacity-50" : ""}`}
                >
                    {task.title || "Untitled Task"}
                </span>
            </div>
            <button
                onClick={() => onDelete(task.id)}
                className="text-red-500 hover:text-red-400 font-medium"
            >
                Delete
            </button>
        </div>
    );
};

export default TaskItem;
