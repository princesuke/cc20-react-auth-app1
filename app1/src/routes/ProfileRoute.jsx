import { Navigate, Outlet } from "react-router";
import { useAuthStore } from "../stores/authStore";

export default function ProfileRoute() {
  const user = useAuthStore((state) => state.user);

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
}
