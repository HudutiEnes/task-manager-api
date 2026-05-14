import { useState } from "react";

const CreateTask = ({ onCreate }) => {
    const [text, setText] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!text.trim()) return;

        onCreate(text);
        setText("");
    };

    return (
        <form onSubmit={handleSubmit} className="flex gap-2">
            <input
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Add a new DevOps task..."
                className="flex-1 p-2 rounded bg-zinc-800 border border-zinc-700 text-white outline-none focus:border-blue-500"
            />

            <button
                type="submit"
                className="px-4 bg-blue-600 text-white rounded hover:bg-blue-500"
            >
                Add
            </button>
        </form>
    );
};

export default CreateTask;
