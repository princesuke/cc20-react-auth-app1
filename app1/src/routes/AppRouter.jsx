import { useEffect } from "react";
import {BrowserRouter, Routes, Route, Navigate} from "react-router";
import LoginPage from "../pages/LoginPage";
import AuthDebugPage from  "../pages/AuthDebugPage";
import DashboardPage from "../pages/DashboardPage";
import ForgotPasswordPage from "../pages/ForgotPasswordPage";

import {useAuthStore} from "../stores/authStore";

export default function AppRouter() {
    const user = useAuthStore((state) => state.user);
    const fetchUser = useAuthStore((state) => state.fetchUser);

    useEffect(() => {
        fetchUser();
    }, []);

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" 
                element={user ? <DashboardPage /> : <Navigate to="/login" replace />} />
                <Route path="/login" element={!user ? <LoginPage /> : <Navigate to="/" replace />} />
                <Route path="/auth-debug" element={<AuthDebugPage />} />
                <Route path="/forgot-password" element={<ForgotPasswordPage />} />
            </Routes>
        </BrowserRouter>
    )
}