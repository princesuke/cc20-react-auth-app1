import { redirect } from "react-router";
import { useAuthStore } from "../stores/authStore";

// Loader for protected routes (zustand version, supports allowedRoles)
export function protectedLoader({ context }) {
  // context.allowedRoles can be passed from route config
  // Use zustand store directly (sync)
  const user = useAuthStore.getState().user;
  if (!user) {
    throw redirect("/login");
  }
  const allowedRoles = context && context.allowedRoles;
  if (allowedRoles && !allowedRoles.includes(user.role?.toLowerCase())) {
    throw redirect("/not-found");
  }
  return null;
}
