export default function TaskCard({ task }) {
    return (
        <div className="p-4 bg-zinc-900 border border-zinc-800 rounded-lg">
            <h3 className="text-lg font-bold">{task.title}</h3>
            <p className="text-zinc-400">{task.description}</p>
            <div className="mt-4"></div>
        </div>
    );
}
