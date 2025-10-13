import { create } from "zustand";
import { SteamAPI } from "../api/steamApi";

export const useRecentlyPlayedStore = create((set) => ({
  recentlyPlayed: [],
  loading: false,
  error: null,

  fetchRecentlyPlayed: async (steamId) => {
    set({ loading: true, error: null });
    try {
      const data = await SteamAPI.getRecentGames(steamId);
      set({ recentlyPlayed: data, loading: false });
    } catch (err) {
      set({ error: err.message, loading: false });
    }
  },
}));