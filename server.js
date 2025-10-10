import express from "express";
import fetch from "node-fetch";
import cors from "cors";

const app = express();
const PORT = 3000;

app.use(cors());

const STEAM_API_KEY = "3EFF9DA3161F8AD07798A06ECFC71424";

// 🔸 Профіль користувача
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

// 🔸 Ігри користувача
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

// 🔸 Деталі гри
app.get("/api/steam/game/:appid", async (req, res) => {
  const { appid } = req.params;
  try {
    const response = await fetch(
      `https://store.steampowered.com/api/appdetails?appids=${appid}`,
      {
        headers: {
          "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64)",
          "Accept": "application/json",
        },
      }
    );
    if (!response.ok) return res.status(500).json({ error: "Steam API request failed" });
    const data = await response.json();
    const result = data[appid]?.data;
    if (!result) return res.status(404).json({ error: "Game not found" });
    res.json(result);
  } catch (err) {
    console.error("❌ Error fetching game:", err);
    res.status(500).json({ error: "Failed to fetch game details" });
  }
});

// ✅ Лише один app.listen
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
