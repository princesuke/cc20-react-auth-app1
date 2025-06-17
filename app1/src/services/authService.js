import { publicApi, authApi } from "../libs/axios";

export async function login(email, password) {
  const res = await publicApi.post("/auth/login", { email, password });
  return res.data.accessToken;
}

export async function fetchMe() {
  const res = await authApi.get("/auth/me");
  return res.data;
}

export async function sendForgotPassword(email) {
  const res = await publicApi.post("/auth/forgot-password", { email });
  return res.data.link;
}

export async function resetPassword(token, newPassword) {
  const res = await publicApi.post(`/auth/reset-password/${token}`, {
    password: newPassword,
  });
  return res.data;
}
