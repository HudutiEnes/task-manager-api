import LayoutWrapper from "./components/LayoutWrapper";
import Navbar from "./components/Navbar";
import Button from "./components/Button";

function App() {
    return (
        <LayoutWrapper>
            <Navbar />
            <div className="mt-10 text-center">
                <h1 className="text-4xl font-bold mb-4">My Task Manager</h1>
                <p className="text-zinc-400 mb-8">
                    Manage your DevOps workflow efficiently.
                </p>
                <Button text="Get Started" variant="primary" />
            </div>
        </LayoutWrapper>
    );
}

export default App;
