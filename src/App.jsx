import { Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import AboutUs from './components/AboutUs'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Properties from './components/Properties'
import Login from './components/Login'
import Register from './components/Register'
import SingleProperty from './components/SingleProperty'

function App() {
  const user=localStorage.getItem("access_token")

  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' element={<AboutUs/>}/>
        <Route path='/properties' element={user?<Properties/>:<Navigate to={'/login'} />}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/property' element={<SingleProperty/>}/>
      </Routes>
      <Footer/>
    </>
  )
}

export default App
