import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = ({ isAuthenticated, isLoading }) => {
    if (isLoading) {
        return <div className="text-white p-6">Verifying system access...</div>;
    }

    return isAuthenticated ? <Outlet /> : <Navigate to="/login" replace />;
};

export default ProtectedRoute;
