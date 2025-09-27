import './App.css'
import { HashRouter, Route, Routes } from 'react-router'
import DefaultLayout from './layout/DefaultLayout'
import Profile from './pages/Profile'
import Store from './pages/Store'
import '../src/assets/styles/profile.scss'

function App() {

  return (
    <HashRouter>
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route path='/' element={<Store />} />
          <Route path='/profile/' element={<Profile />} />
        </Route>
      </Routes>
    </HashRouter>
  )
}

export default App
