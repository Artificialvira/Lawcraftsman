//import { useState } from 'react'
//import './App.css'
import './Components/Landing/landing.css'
import Navbar from './Components/Landing/Navbar'
import Hero from './Components/Landing/Hero'
import Theme from './Components/Landing/Theme'


function App() {
  //const [count, setCount] = useState(0)

  return (
    < >
    <section className='smart-scroll'>
      <section className='container-fluid'>
        <Navbar />  
        <Hero />
      </section>
      <Theme />
      </section>
    </>
  )
}

export default App
