// src/store/useFriendsStore.js
import { create } from "zustand";
import { SteamAPI } from "../api/steamApi";

export const useFriendsStore = create((set) => ({
  friends: [],
  loading: false,
  error: null,

  fetchFriends: async (steamId) => {
    set({ loading: true, error: null });
    try {
      const data = await SteamAPI.getFriends(steamId);
      set({ friends: data, loading: false });
    } catch (err) {
      set({ error: err.message, loading: false });
    }
  },
}));
