import { useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router";
import LoginPage from "../pages/LoginPage";
import AuthDebugPage from "../pages/AuthDebugPage";
import DashboardPage from "../pages/DashboardPage";
import ForgotPasswordPage from "../pages/ForgotPasswordPage";
import ResetPasswordPage from "../pages/ResetPasswordPage";
import ProfilePage from "../pages/ProfilePage";
import WalletPage from "../pages/WalletPage";
import NotfoundPage from "../pages/NotfoundPage";

import { useAuthStore } from "../stores/authStore";
import PublicRoute from "../routes/PublicRoute";
import ProtectedRoute from "../routes/ProtectedRoute";
import ProfileRoute from "../routes/ProfileRoute";
import AdminPage from "../pages/AdminPage";

export default function AppRouter() {
  // const user = useAuthStore((state) => state.user);
  const fetchUser = useAuthStore((state) => state.fetchUser);

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" 
                element={user ? <DashboardPage /> : <Navigate to="/login" replace />} /> */}
        {/* <Route path="/login" element={!user ? <LoginPage /> : <Navigate to="/" replace />} /> */}

        <Route
          path="/"
          element={
            <ProtectedRoute>
              <DashboardPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/login"
          element={
            <PublicRoute>
              <LoginPage />
            </PublicRoute>
          }
        />
        <Route element={<ProfileRoute />}>
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/wallet" element={<WalletPage />} />
        </Route>

        <Route
          path="/admin"
          element={
            <ProtectedRoute allowedRoles={["admin"]}>
              <AdminPage />
            </ProtectedRoute>
          }
        />
        <Route path="/not-found" element={<NotfoundPage />} />

        <Route path="/auth-debug" element={<AuthDebugPage />} />
        <Route path="/forgot-password" element={<ForgotPasswordPage />} />
        <Route path="/reset-password/:token" element={<ResetPasswordPage />} />
      </Routes>
    </BrowserRouter>
  );
}
