import './App.css'
import { HashRouter, Route, Routes } from 'react-router'
import DefaultLayout from './layout/DefaultLayout'
import Profile from './pages/Profile'
import '../src/assets/styles/profile.scss'
import '../src/assets/styles/store/home.scss'
import StoreLayout from './layout/StoreLayout'
import LibraryLayout from './layout/LibraryLayout'
import StoreHome from './pages/StoreHome'
import LibraryHome from './pages/Library/LibraryHome'

function App() {

  return (
    <HashRouter>
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route element={<StoreLayout />}>
            <Route path='/' element={<StoreHome />} />
          </Route>
          <Route element={<LibraryLayout />}>
              <Route path='/library' element={<LibraryHome />}/>
          </Route>
          <Route path='/profile/' element={<Profile />} />
        </Route>
      </Routes>
    </HashRouter>
  )
}

export default App
