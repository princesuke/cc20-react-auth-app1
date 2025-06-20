import axios from "axios";
import { useAuthStore } from "../stores/authStore";

const baseConfig = {
  baseURL: "http://localhost:3000/api",
  timeout: 5000,
};

export const publicApi = axios.create(baseConfig);

export const authApi = axios.create(baseConfig);

authApi.interceptors.request.use((config) => {
  const accessToken = useAuthStore.getState().accessToken;
  if (accessToken) config.headers.Authorization = `Bearer ${accessToken}`;
  return config;
});
