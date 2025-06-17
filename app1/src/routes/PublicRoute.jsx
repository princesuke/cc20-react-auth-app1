import { Navigate } from "react-router";
import { useAuthStore } from "../stores/authStore";

export default function PublicRoute({ children, to = "/" }) {
  const user = useAuthStore((state) => state.user);
  return user ? <Navigate to={to} replace /> : children;
}
