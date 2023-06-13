import { Route, Routes } from 'react-router-dom'
import './assets/css/Main.css'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Phone from './pages/Phone'
import Lap from './pages/Lap'
import Pc from './components/Pc'

function App() {
  return (
    <>
    <Navbar/>
    <Routes>
        <Route path="/"  element={[<Home/>]} />
        <Route path="/phone"  element={[<Phone/>]} />
        <Route path="/lap"  element={[<Lap/>]} />
        <Route path="/pc" element={[<Pc/>]} />
      </Routes>
    </>
  )
}
export default App
