import { useAuthStore} from "../stores/authStore";

export default function DashboardPage() {
    const user = useAuthStore((state) => state.user);
    const logout = useAuthStore((state) => state.logout);

    return (
        <div style={{padding: 20}}>
            <h1>Welcome, {user?.email}</h1>
            <div>id: {user?.id}</div><br/>
            <button onClick={logout}>Logout</button>
        </div>
    )
}