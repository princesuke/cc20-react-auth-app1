import {useForm} from "react-hook-form"
import { useState } from "react";
import { sendForgotPassword } from '../services/authService';

export default function ForgotPasswordPage() {

    const { register, handleSubmit } = useForm();
    const [resetLink, setResetLink] = useState(null);

    const onSubmit = async (data) => {
        try {
            const link = await sendForgotPassword(data.email);
            setResetLink(link);
        } catch(err) {
            alert("error: " + err.message);
        }
    }

    return (
        <div style={{padding: 20}}>
            <h2>Forgot Password Page</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label>Email: </label>
                    <input type="email" {...register("email")} />
                </div><br/>
                <button>Send Reset Password</button>
            </form>


            {resetLink &&
                <div style={{marginTop: 20}}>
                    ลิงค์สำหรับ reset password: <br/>
                    <a href={resetLink} target="_blank">
                        คลิกเพื่อ Reset Password
                    </a>

                </div>
            }
        </div>
    )
}