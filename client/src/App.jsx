import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import TaskDetail from "./pages/TaskDetail";
import Navbar from "./components/Navbar";
import LayoutWrapper from "./components/LayoutWrapper";

function App() {
    return (
        <BrowserRouter>
            <LayoutWrapper>
                <Navbar />
                <main className="mt-10">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/dash" element={<Dashboard />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/register" element={<Register />} />
                        <Route path="/tasks/:id" element={<TaskDetail />} />
                    </Routes>{" "}
                </main>
            </LayoutWrapper>
        </BrowserRouter>
    );
}

export default App;
