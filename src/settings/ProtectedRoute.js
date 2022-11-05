import { Navigate } from "react-router-dom";
import AuthService from "../settings/AuthUtils";

export const ProtectedRoute = ({ roles, permissions, children }) => {
    const auth = new AuthService();

    if (!auth.isAuthenticated()) {
        return <Navigate to="/" replace />;
    }

    let hasRequiredRole = false;
    roles.forEach(function (role, i) {
        if (auth.getUserRole().includes(role)) {
            hasRequiredRole = true;
        }
    });
    if (!hasRequiredRole) {
        return <Navigate to="/" replace />;
    }

    let hasRequiredPermissions = false;
    if (permissions.length === 0) {
        hasRequiredPermissions = true;
    } else {
        permissions.forEach(function (permission, i) {
            if (auth.getUserPermissions().includes(permission)) {
                hasRequiredPermissions = true;
            }
        });
    }
    if (!hasRequiredPermissions) {
        return <Navigate to="/" replace />;
    }

    return children;
};
