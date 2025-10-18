import { protectedLoader } from "../loaders/protectedLoader";
import ProfileLayout from "../components/ProfileLayout";
import ProfilePage from "../pages/ProfilePage";
import WalletPage from "../pages/WalletPage";

const profileRoute = {
  element: <ProfileLayout />,
  loader: protectedLoader,
  children: [
    { path: "/profile", element: <ProfilePage /> },
    { path: "/wallet", element: <WalletPage /> },
  ],
};

export default profileRoute;
