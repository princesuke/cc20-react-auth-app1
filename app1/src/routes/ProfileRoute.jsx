import { Navigate, Outlet } from "react-router";
import { useAuthStore } from "../stores/authStore";

// (component export removed, only route config is exported below)

import ProfilePage from "../pages/ProfilePage";
import WalletPage from "../pages/WalletPage";
import { protectedLoader } from "../loaders/protectedLoader";

const profileRoute = {
  element: <ProfileRoute />,
  children: [
    { path: "/profile", element: <ProfilePage />, loader: protectedLoader },
    { path: "/wallet", element: <WalletPage />, loader: protectedLoader },
  ],
};

export default profileRoute;
