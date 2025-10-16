import { redirect } from "react-router-dom";
import { getAuthStatus } from "../services/authService";

// Action for protected routes (example: Dashboard form submit)
export async function protectedAction({ request }) {
  const authStatus = getAuthStatus();
  if (!authStatus.isLoggedIn) {
    throw redirect("/login");
  }
  // Optional: Check for specific roles/permissions
  if (authStatus.userRole !== "admin") {
    throw redirect("/unauthorized");
  }
  // Example: handle form data
  // const formData = await request.formData();
  // await updateData(formData);
  return null;
}
