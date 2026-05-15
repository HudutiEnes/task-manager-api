import Button from "./Button";
import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <nav className="flex justify-between items-center p-6 border-b border-zinc-800">
            <div className="font-bold text-xl">TM</div>

            <div>
                <Link
                    to="/login"
                    className="px-4 py-2 bg-zinc-100 text-black rounded-md hover:bg-zinc-300 transition-colors"
                >
                    Login
                </Link>
            </div>
        </nav>
    );
}
