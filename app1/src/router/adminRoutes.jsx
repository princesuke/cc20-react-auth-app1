import AdminPage from "../pages/AdminPage";
import { protectedLoader } from "../loaders/protectedLoader";

const adminRoute = {
  path: "/admin",
  element: <AdminPage />,
  loader: (args) =>
    protectedLoader({ ...args, context: { allowedRoles: ["admin"] } }),
};
// allowedRoles={["staff", "manager"]}

export default adminRoute;
