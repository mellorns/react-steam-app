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

function App() {

  return (
    <HashRouter>
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route element={<StoreLayout />}>
            <Route path='/' element={<StoreHome />} />
            <Route path='/game/:appid/:slug' element={<GameDetails />} />
          </Route>
          <Route element={<LibraryLayout />}>
            <Route path='/library' element={<LibraryHome />} />
          </Route>
          <Route path='/profile/:steamId' element={<Profile />} />
        </Route>
        <Route path="*" element={<NoPageFound />} /> {/* 🔥 404 */}
      </Routes>
    </HashRouter>
  )
}

export default App
