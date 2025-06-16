import { create } from "zustand";
import * as authService from "../services/authService";

export const useAuthStore = create((set) => ({
  accessToken: null,
  login: async (email, password) => {
    const accessToken = await authService.login(email, password);
    set({ accessToken });
  },
  logout: () => set({ accessToken: null }),
}));
