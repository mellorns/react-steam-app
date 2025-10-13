import { create } from "zustand";
import { SteamAPI } from "../api/steamApi";

export const useGamesStore = create((set) => ({
  games: [],
  loading: false,
  error: null,

  fetchGames: async (steamId) => {
    set({ loading: true, error: null });
    try {
      const data = await SteamAPI.getUserGames(steamId);
      set({ games: data, loading: false });
    } catch (err) {
      set({ error: err.message, loading: false });
    }
  },
}));