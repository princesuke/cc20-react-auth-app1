// import { useEffect } from "react";
import { useAuthStore } from "../stores/authStore"


export default function DebugPage() {
    const accessToken = useAuthStore((state)=> state.accessToken);
    const login = useAuthStore((state) => state.login);
    const logout = useAuthStore((state) => state.logout);

    // useEffect(() => {
    //     const testLogin = async () => {
    //         try {
    //             await login("john@gmail.com", "my123456789");
    //         } catch(err) {
    //             console.error("Login failed:", err);
    //         }   
    //     }
    //     testLogin();
    // }, []);

    const testLogin = async () => {
        try {
            await login("john@gmail.com", "my123456789");
        } catch(err) {
            console.error("Login failed:", err);
        }   
    }

    return <div>
        <h2>Debug API TEST</h2>
        <p>Token: {accessToken}</p>
        <button onClick={testLogin}>Login</button> &nbsp;&nbsp;
        <button onClick={logout}>Logout</button>
    </div>
}