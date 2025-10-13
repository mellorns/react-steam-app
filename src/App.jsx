import './App.css'
import { HashRouter, Route, Routes } from 'react-router'
import DefaultLayout from './layout/DefaultLayout'
import Profile from './pages/Profile'
import '../src/assets/styles/profile.scss'
import '../src/assets/styles/store/home.scss'
import '../src/assets/styles/common.scss'
import StoreLayout from './layout/StoreLayout'
import LibraryLayout from './layout/LibraryLayout'
import StoreHome from './pages/Store/StoreHome'
import LibraryHome from './pages/Library/LibraryHome'
import GameDetails from './pages/Store/GameDetails'
import NoPageFound from './components/common/NoPageFound'
import { useProfileStore } from './store/useProfileStore'
import { useEffect } from 'react'
import { useGamesStore } from './store/useGamesStore'
import { useFriendsStore } from './store/useFriendsStore'
import { useRecentlyPlayedStore } from './store/useRecentlyPlayedStore'
import Loader from './components/common/Loader'
import UnderConstruction from './components/common/UnderConstuction'

function App() {

  const { profile, loading, fetchProfile } = useProfileStore();
  const {fetchFriends} = useFriendsStore()
  const {fetchGames} = useGamesStore()
  const {fetchRecentlyPlayed} = useRecentlyPlayedStore()
  const MY_STEAM_ID = import.meta.env.VITE_MY_STEAM_ID;

  useEffect(() => {
    if (!profile) {
      fetchProfile(MY_STEAM_ID);
      fetchFriends(MY_STEAM_ID);
      fetchGames(MY_STEAM_ID);
      fetchRecentlyPlayed(MY_STEAM_ID);
    }
  }, []);

  if (loading && !profile) return <Loader />;

  return (
    <HashRouter>
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route element={<StoreLayout />}>
            <Route path='/' element={<StoreHome />} />
            <Route path='/game/:appid/:slug' element={<GameDetails />} />
          </Route>
          <Route path='/library' element={<LibraryLayout />}>
            <Route path='/library/:appid' element={<LibraryHome />} />
          </Route>
          <Route path='/profile/:steamId' element={<Profile />} />
        </Route>
        <Route path="*" element={<UnderConstruction />} /> {/* 404 */}
      </Routes>
    </HashRouter>
  )
}

export default App
