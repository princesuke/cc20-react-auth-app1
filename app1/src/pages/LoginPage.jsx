import { useAuthStore } from "../stores/authStore"
import { useForm } from "react-hook-form";
// import { useNavigate } from "react-router";


export default function LoginPage() {
    const login = useAuthStore((state) => state.login);
    // const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        // formState: { errors}
    } = useForm();

    const onSubmit = async (data) => {
        try {
            await login(data.email, data.password);
            // navigate("/auth-debug");
        } catch {
            alert("Login failed");
        }
    }
 
    return <div>
        <form onSubmit={handleSubmit(onSubmit)}>
            <h2>Login Page</h2>
            <div>
                Email: &nbsp;
                <input {...register("email")} />
            </div>
            <div>
                Password: &nbsp;
                <input type="password" {...register("password")} />
            </div>
            <br/>
            <button type="submit">Login</button>
        </form>
    </div>
}