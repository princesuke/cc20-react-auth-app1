import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
  redirect,
} from "react-router";
import LoginPage from "../pages/LoginPage";
import AuthDebugPage from "../pages/AuthDebugPage";
import DashboardPage from "../pages/DashboardPage";
import ForgotPasswordPage from "../pages/ForgotPasswordPage";
import ResetPasswordPage from "../pages/ResetPasswordPage";
import ProfilePage from "../pages/ProfilePage";
import WalletPage from "../pages/WalletPage";
import NotfoundPage from "../pages/NotfoundPage";
import { useAuthStore } from "../stores/authStore";
// import { getAuthStatus } from "../services/authService";
import PublicRoute from "./PublicRoute";
import profileRoute from "./ProfileRoute";

import adminRoute from "./adminRoute";

import { protectedLoader } from "../loaders/protectedLoader";
import { protectedAction } from "../actions/protectedAction";

const router = createBrowserRouter([
  {
    path: "/",
    element: <DashboardPage />,
    loader: protectedLoader,
    action: protectedAction,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  profileRoute,
  adminRoute,
  { path: "/not-found", element: <NotfoundPage /> },
  { path: "/auth-debug", element: <AuthDebugPage /> },
  { path: "/forgot-password", element: <ForgotPasswordPage /> },
  { path: "/reset-password/:token", element: <ResetPasswordPage /> },
  { path: "*", element: <Navigate to="/not-found" replace /> },
]);

export default function AppRouter() {
  return <RouterProvider router={router} />;
}
