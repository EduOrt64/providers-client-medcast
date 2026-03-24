import { Routes, Route } from 'react-router-dom'
import HomePublic from './pages/homepublic'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePublic />} />
      </Routes>
    </>
  )
}

export default App
