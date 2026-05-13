import Button from "./Button";

export default function Navbar() {
    return (
        <nav className="flex justify-between items-center p-4 border-b border-zinc-800">
            <div className="font-bold text-xl">TM</div>

            <div>
                <Button text="Login" variant="outline" />
            </div>
        </nav>
    );
}
