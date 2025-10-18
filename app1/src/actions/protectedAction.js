import { redirect } from "react-router";
// import { getAuthStatus } from "../api/auth";
import { useAuthStore } from "../stores/authStore";

// Action for protected routes (example: Dashboard form submit)
export async function protectedAction() {
  //   const authStatus = getAuthStatus();
  const user = useAuthStore.getState().user;
  //   if (!authStatus.isLoggedIn) {
  if (!user) {
    throw redirect("/login");
  }
  // Optional: Check for specific roles/permissions
  if (user.role !== "admin") {
    throw redirect("/unauthorized");
  }
  // Example: handle form data
  // const formData = await request.formData();
  // await updateData(formData);
  return null;
}
