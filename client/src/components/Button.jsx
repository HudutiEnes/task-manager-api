export default function Button({ text, onClick, variant = "primary" }) {
    const styles = {
        primary: "bg-white text-black hover:bg-gray-200",
        secondary: "bg-zinc-800 text-white hover:bg-zinc-700",
        outline: "border border-zinc-700 text-white hover:bg-zinc-800",
    };

    return (
        <button
            onClick={onClick}
            className={`px-4 py-2 rounded-md transition-all duration-200 font-medium ${styles[variant]}`}
        >
            {text}
        </button>
    );
}
