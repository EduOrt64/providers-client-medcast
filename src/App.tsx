import { Routes, Route } from 'react-router-dom'
import HomeHero from './components/homehrero'
import Navbar from './components/navbar'

function App() {
  return (
    <>
      <Navbar isLogged={false} />

      <Routes>
        <Route path="/" element={<HomeHero />} />
      </Routes>
    </>
  )
}

export default App
