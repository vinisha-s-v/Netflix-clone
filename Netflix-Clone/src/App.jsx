import { useState } from 'react'
import Navbar from './Components/Navbar'
import Home from './Pages/Home'
import {Route,Routes} from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <Routes>
        <Route path ='/' element={<Home/>}/>

      </Routes>
    </>
  )
}

export default App
