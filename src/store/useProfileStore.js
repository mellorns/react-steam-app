// src/store/useProfileStore.js
import { create } from "zustand";
import { SteamAPI } from "../api/steamApi";

export const useProfileStore = create((set) => ({
  profile: null,
  loading: false,
  error: null,

  fetchProfile: async (steamId) => {
    set({ loading: true, error: null });
    try {
      const data = await SteamAPI.getProfile(steamId);
      set({ profile: data, loading: false });
    } catch (err) {
      set({ error: err.message, loading: false });
    }
  },
}));
