import React from 'react'
import Navbar from './Landing/Navbar'
import Hero from './Landing/Hero'
import Theme from './Landing/Theme'
import Features from './Landing/Features'


const UserRL = () => {
  return (
    <div className='h-screen' >
        <section >
      <section >
        <Navbar />  
        <Hero />
        <Features/>
      </section>
      <Theme />
      </section>
    </div>
  )
}

export default UserRL
