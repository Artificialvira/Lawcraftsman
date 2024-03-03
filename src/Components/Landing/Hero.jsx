import React from 'react'
import { FaArrowRight } from "react-icons/fa";
import {Link} from 'react-router-dom'


const Hero = () => {
  return (
    <main>
        <section className="py-7 py-md-0 bg-hero" id="home">
    <div className="container">
        <div className="row vh-md-100">
            <div className="col-md-8 col-sm-10 col-12 mx-auto my-auto text-center">
                <h1 className="heading-black text-capitalize">Automated Legal Advisory & Resolution Assistant</h1>
                <p className="lead py-3">A legal chatbot bridging the gap between complex legal language and individuals, empowering them with knowledge of their rights through accessible explanations and reliable resources. Sign up for free.</p>
                <Link to='/login'><button className="btn btn-primary d-inline-flex flex-row align-items-center">
                    Get started now
                    <FaArrowRight className="ml-2"/>
                
                </button></Link>
            </div>
        </div>
    </div>
</section>
    </main>
  )
}

export default Hero
