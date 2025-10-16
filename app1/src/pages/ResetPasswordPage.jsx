import { useParams, useNavigate } from "react-router";
import { useForm } from "react-hook-form";
import { resetPassword } from "../api/auth";

export default function ResetPasswordPage() {
  const { token } = useParams();
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      await resetPassword(token, data.password);
      alert("Password reset successful");
      navigate("/login");
    } catch (err) {
      alert("Reset failed: " + err.message);
    }
  };

  // if(!token) return <p>Invalid reset link.</p>

  return (
    <div style={{ padding: 20 }}>
      <h2>Reset Password Page</h2>
      {/* <div>{token}</div> */}
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>New Password: </label>
          <input type="password" {...register("password")} />
        </div>
        <br />
        <button type="submit">Reset</button>
      </form>
    </div>
  );
}
