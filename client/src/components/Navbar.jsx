import { useNavigate, Link } from "react-router-dom";

export default function Navbar() {
    const navigate = useNavigate();
    const handleLogout = () => {
        localStorage.removeItem("token");

        setIsAuthenticated(false);

        navigate("/login");
    };

    return (
        <nav className="flex justify-between items-center p-6 border-b border-zinc-800">
            <div className="font-bold text-xl">TM</div>

            <div>
                <button
                    onClick={handleLogout}
                    className="bg-zinc-900 hover:bg-red-950 text-zinc-400 hover:text-red-400 border border-zinc-800 hover:border-red-900 px-4 py-2 rounded text-sm font-mono transition-colors"
                >
                    Logout
                </button>
            </div>
        </nav>
    );
}
