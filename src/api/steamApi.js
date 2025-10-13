const BASE_URL = "http://localhost:3000/api/steam";


export const SteamAPI = {
    async getProfile(id) {
        const res = await fetch(`${BASE_URL}/profile/${id}`)
        if (!res.ok) throw new Error(`Unable to load profile data (${res.status})`)
        const data = await res.json()
        return data
    },
    async getUserGames(id) {
        const res = await fetch(`${BASE_URL}/games/${id}`);
        if (!res.ok) throw new Error("Failed to load games");
        const data = await res.json();
        return data;
    },
    async getGame(appid) {
        const res = await fetch(`${BASE_URL}/game/${appid}`);
        if (!res.ok) throw new Error("Failed to load game");
        const data = await res.json();
        return data;
    },
    async getFriends(id) {
        const res = await fetch(`${BASE_URL}/friends/${id}`);
        if (!res.ok) throw new Error("Failed to load friends");
        const data = await res.json();
        return data;
    },
    async getRecentGames(id) {
        const res = await fetch(`${BASE_URL}/recent/${id}`);
        if (!res.ok) throw new Error("Failed to load recent games");
        const data = await res.json();
        return data;
    },

};
