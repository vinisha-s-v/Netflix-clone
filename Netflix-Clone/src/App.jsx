import { useState } from 'react'
import Navbar from './Components/Navbar'
import Home from './Pages/Home'
import {Route,Routes} from 'react-router-dom'
import Login from './Pages/Login'
import Signup from './Pages/Signup'
// import { AuthContextProvider } from './Context/AuthContext'

function App() {


  return (
    <>
    {/* <AuthContextProvider> */}
      <Navbar/>
      <Routes>
        <Route path ='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
       
      </Routes>
      {/* </AuthContextProvider> */}
    </>
  )
}

export default App
