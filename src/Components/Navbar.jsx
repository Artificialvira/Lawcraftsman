import React from 'react'
import { useState,useEffect } from 'react'

const Navbar = () => {
    const [scrolled,setScrolled] = useState(false);

    useEffect(() => {
        const handlescroll = () => {
            const scrolltop = window.scrollY;
            if (scrolltop > 100)
            {
                setScrolled(true);
            }
            else{
                setScrolled(false);
            }
        }
        window.addEventListener('scroll',handlescroll);
        return () => window.removeEventListener('scroll',handlescroll)
    },[]);

  return (
    <>

    </>
  )
}

export default Navbar
