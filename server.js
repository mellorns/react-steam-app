import express from "express";
import fetch from "node-fetch";
import cors from "cors";

const app = express();
const PORT = 3000;

app.use(cors());

// 🔑 заміни своїм API ключем
const STEAM_API_KEY = "3EFF9DA3161F8AD07798A06ECFC71424";

// ✅ приклад: отримати дані гравця
app.get("/api/steam/profile/:steamId", async (req, res) => {
  const { steamId } = req.params;

  const url = `https://api.steampowered.com/ISteamUser/GetPlayerSummaries/v2/?key=${STEAM_API_KEY}&steamids=${steamId}`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    res.json(data.response.players[0]);
  } catch (err) {
    console.error("Steam API error:", err);
    res.status(500).json({ error: "Steam API request failed" });
  }
});

// ✅ приклад: отримати список ігор користувача
app.get("/api/steam/games/:steamId", async (req, res) => {
  const { steamId } = req.params;

  const url = `https://api.steampowered.com/IPlayerService/GetOwnedGames/v1/?key=${STEAM_API_KEY}&steamid=${steamId}&include_appinfo=true`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    res.json(data.response.games);
  } catch (err) {
    console.error("Steam API error:", err);
    res.status(500).json({ error: "Steam API request failed" });
  }
});

app.listen(PORT, () => {
  console.log(`✅ Proxy server running on http://localhost:${PORT}`);
});
