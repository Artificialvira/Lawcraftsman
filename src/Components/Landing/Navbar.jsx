import React from 'react'
import { useState,useEffect } from 'react'
import './landing.css'


const Navbar = () => {
    const [scrolled,setScrolled] = useState(false);
    const [active,setActive] = useState('');

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
        
        <nav className="navbar navbar-expand-md navbar-dark">
            <a className="navbar-brand heading-black" href="index.html">
                Law Craftsman
            </a>
            
            <button className="navbar-toggler navbar-toggler-right border-0" type="button" data-toggle="collapse"
                    data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false"
                    aria-label="Toggle navigation">
                <span data-feather="grid"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarCollapse">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <a className="nav-link page-scroll" href="#features">Features</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link page-scroll" href="#pricing">Pricing</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link page-scroll" href="#faq">FAQ</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link page-scroll" href="#blog">Blog</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link page-scroll d-flex flex-row align-items-center text-white" href="#">
                            <em data-feather="layout" width="18" height="18" className="mr-2"></em>
                            Try Generator
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    
    </>
  )
}

export default Navbar
