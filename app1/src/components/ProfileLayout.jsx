import { NavLink, Outlet } from "react-router";
import "./ProfileLayout.css";

export default function ProfileLayout() {
  return (
    <div className="profile-layout">
      <aside className="profile-sidebar">
        <nav>
          <ul>
            <li>
              <NavLink
                to="/profile"
                end
                className={({ isActive }) => (isActive ? "active" : undefined)}
              >
                โปรไฟล์
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/wallet"
                className={({ isActive }) => (isActive ? "active" : undefined)}
              >
                กระเป๋าเงิน
              </NavLink>
            </li>
          </ul>
        </nav>
      </aside>
      <main className="profile-content">
        <Outlet />
      </main>
    </div>
  );
}
