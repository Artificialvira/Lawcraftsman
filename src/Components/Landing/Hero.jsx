import React from 'react'
import './landing.css'

const Hero = () => {
  return (
    <main>
        <section className="py-7 py-md-0 bg-hero" id="home">
    <div className="container">
        <div className="row vh-md-100">
            <div className="col-md-8 col-sm-10 col-12 mx-auto my-auto text-center">
                <h1 className="heading-black text-capitalize">Quickly build landing pages with Knight</h1>
                <p className="lead py-3">Knight is a platform that helps freelancers and companies build beautiful landing
                    pages in minutes. Sign up for free.</p>
                <button className="btn btn-primary d-inline-flex flex-row align-items-center">
                    Get started now
                    <em className="ml-2" data-feather="arrow-right"></em>
                </button>
            </div>
        </div>
    </div>
</section>
    </main>
  )
}

export default Hero
