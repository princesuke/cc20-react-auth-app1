import { useAuthStore } from "../stores/authStore";

export default function ProfilePage() {
  const user = useAuthStore((state) => state.user);

  return (
    <div>
      <h2>Profile Page</h2>
      <div>email: {user?.email}</div>
    </div>
  );
}
