//import { useState } from 'react'
//import './App.css'
import Navbar from './Components/Landing/Navbar'
import Hero from './Components/Landing/Hero'
import Theme from './Components/Landing/Theme'
import Routing from './Components/Routing'
import { BrowserRouter } from 'react-router-dom'
import {Routes,Route} from 'react-router-dom'
import UserRL from './Components/UserRL'
import Login from './Components/Login/Login'
import Features from './Components/Landing/Features'
import NotFound from './Components/NotFound'



function App() {
  //const [count, setCount] = useState(0)
  

  return (
    < >
    
      
    <Routes>
      <Route exact path='/' element={<UserRL/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/features' element={<Features/>}/>
      <Route path='*' element={<NotFound/>}/>
    </Routes> 
     
    
    </>
    

  )
}

export default App
