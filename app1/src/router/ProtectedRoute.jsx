import { Navigate } from "react-router";
import { useAuthStore } from "../stores/authStore";

export default function ProtectedRoute({
  allowedRoles,
  children,
  to = "/login",
}) {
  const user = useAuthStore((state) => state.user);
  //   return !user ? <Navigate to={to} replace /> : children;
  if (!user) {
    return <Navigate to={to} replace />;
  }

  console.log("role=> ", user.role);
  if (allowedRoles && !allowedRoles.includes(user.role.toLowerCase())) {
    return <Navigate to="/not-found" replace />;
  }

  return children;
}
