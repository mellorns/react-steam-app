// hooks/useFetchSteam.js
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

export function useFetchSteam(path) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch(`http://localhost:3000/api/steam/${path}`);
        if (!res.ok) {
          if (res.status === 404) {
            navigate("/404");
            return;
          }
          throw new Error("Request failed");
        }
        const json = await res.json();
        setData(json);
      } catch (err) {
        setError(err.message);
      }
    }

    fetchData();
  }, [path]);

  return { data, error };
}

export const SteamAPI = {
  getProfile: (id) => useFetchSteam(`profile/${id}`),
  getUserGames: (id) => useFetchSteam(`games/${id}`),
  getGame: (appid) => useFetchSteam(`game/${appid}`),
}