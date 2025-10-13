import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

export function useFetchSteam(fetchFn, id) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {

    let isMounted = true

    async function load() {

      try {
        const result = await fetchFn(id)
        if (isMounted) setData(result)
      } catch (err) {

        if (err.message.includes('404')) navigate('/404')
        if (isMounted) setError(err.message)
      }
    }
    if (id) load()



    return () => (isMounted = false)


  }, [fetchFn, id]);

  return { data, error };
}



export const SteamAPI = {
  getProfile: (id) => useFetchSteam(`profile/${id}`),
  getUserGames: (id) => useFetchSteam(`games/${id}`),
  getGame: (appid) => useFetchSteam(`game/${appid}`),
  getFriends: (appid) => useFetchSteam(`friends/${appid}`),
  getRecentGames: (appid) => useFetchSteam(`recent/${appid}`),
}

