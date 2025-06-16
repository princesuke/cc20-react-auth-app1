import { useAuthStore } from "../stores/authStore";

export default function AuthDebugPage() {
    const user = useAuthStore((state) => state.user);
    const fetchUser = useAuthStore((state) => state.fetchUser);
    const logout = useAuthStore((state) => state.logout);


    return (
        <div style={{ padding: 20 }}>
            <h2>Auth Debug Fetch User</h2>
            <button onClick={fetchUser}>Fetch User</button> &nbsp;&nbsp;
            <button onClick={logout}>Logout</button>
            <p>Email: {user?.email}</p>
        </div>
    )
}