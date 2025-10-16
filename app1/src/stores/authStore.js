import { create } from "zustand";
import { persist } from "zustand/middleware";
import * as authService from "../api/auth";

import { isTokenExpired } from "../utils/tokenUtils";

export const useAuthStore = create(
  persist(
    (set, get) => ({
      accessToken: null,
      user: null,
      login: async (email, password) => {
        const accessToken = await authService.login(email, password);
        set({ accessToken });

        get().fetchUser();
      },
      logout: () => set({ accessToken: null, user: null }),
      fetchUser: async () => {
        const token = get().accessToken;
        if (!token) return;

        if (isTokenExpired(token)) {
          console.warn("Token หมดอายุ");
          return get().logout();
        }

        try {
          const user = await authService.fetchMe();
          set({ user });
        } catch {
          get().logout();
        }
      },
    }), //set
    { name: "auth-storage" }
  ) //persist
);
