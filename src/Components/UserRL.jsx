import React from 'react'
import Navbar from './Landing/Navbar'
import Hero from './Landing/Hero'
import Theme from './Landing/Theme'


const UserRL = () => {
  return (
    <div>
        <section className='smart-scroll'>
      <section className='container-fluid'>
        <Navbar />  
        <Hero />
      </section>
      <Theme />
      </section>
    </div>
  )
}

export default UserRL
