import { Routes, Route } from 'react-router-dom'
import HomePublic from './pages/homepublic'
import LoginPage from './pages/loginpage'
import SignupPage from './pages/signuppage'


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePublic />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} /> 
      </Routes>
    </>
  )
}

export default App
