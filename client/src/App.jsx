import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ProtectedRoute from "./components/ProtectedRoute";
import Dashboard from "./pages/Dashboard";
import Navbar from "./components/Navbar";
import LayoutWrapper from "./components/LayoutWrapper";
import { useState, useEffect } from "react";

function App() {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const verifyUser = async () => {
            try {
                const response = await fetch("api/v1/auth/verify");

                if (response.ok) {
                    setIsAuthenticated(true);
                } else {
                    setIsAuthenticated(false);
                }
            } catch (error) {
                setIsAuthenticated(false);
            } finally {
                setIsLoading(false);
            }
        };
        verifyUser();
    });

    return (
        <BrowserRouter>
            <LayoutWrapper>
                <Navbar />
                <main className="mt-10">
                    <Routes>
                        <Route path="/login" element={<Login />} />
                        <Route path="/dash" element={<Dashboard />} />

                        <Route
                            element={
                                <ProtectedRoute
                                    isAuthenticated={isAuthenticated}
                                    toggleLoad={isLoading}
                                />
                            }
                        >
                            <Route path="/" element={<Home />} />
                            <Route path="/register" element={<Register />} />
                        </Route>
                    </Routes>{" "}
                </main>
            </LayoutWrapper>
        </BrowserRouter>
    );
}

export default App;
