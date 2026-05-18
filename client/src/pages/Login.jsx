import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = ({ setIsAuthenticated }) => {
    const [formData, setFormData] = useState({ username: "", password: "" });
    const [error, setError] = useState(null);

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(null);

        try {
            const response = await fetch("/api/v1/auth/login", {
                method: "POST",

                headers: {
                    "Content-Type": "application/json",
                },

                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.message || "Authentication failed");
            }

            const data = await response.json();

            localStorage.setItem("token", data.token);

            setIsAuthenticated(true);
            navigate("/dashboard");
        } catch (err) {
            setError(err.message);
        }
    };

    return (
        <div className="flex min-h-screen items-center justify-center bg-black text-white">
            <form
                onSubmit={handleSubmit}
                className="w-full max-w-sm p-6 bg-zinc-900 rounded-lg border border-zinc-800"
            >
                <h2 className="text-xl font-bold mb-4">Login to System</h2>

                {error && (
                    <p className="text-red-500 mb-2 font-mono text-sm">
                        {error}
                    </p>
                )}

                <div className="mb-4">
                    <label className="block text-sm font-medium mb-1">
                        Username
                    </label>
                    <input
                        type="text"
                        className="w-full p-2 bg-zinc-950 border border-zinc-800 rounded text-white"
                        value={formData.username}
                        onChange={(e) =>
                            setFormData({
                                ...formData,
                                username: e.target.value,
                            })
                        }
                        required
                    />
                </div>

                <div className="mb-6">
                    <label className="block text-sm font-medium mb-1">
                        Password
                    </label>
                    <input
                        type="password"
                        className="w-full p-2  bg-zinc-950 border border-zinc-800 rounded text-white"
                        value={formData.password}
                        onChange={(e) =>
                            setFormData({
                                ...formData,
                                password: e.target.value,
                            })
                        }
                        required
                    />
                </div>

                <button
                    type="submit"
                    className="w-full bg-blue-600 hover:bg-blue-700 p-2 rounded font-medium"
                >
                    Submit Credentials
                </button>
            </form>
        </div>
    );
};

export default Login;
