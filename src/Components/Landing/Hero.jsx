import React from 'react'


const Hero = () => {
  return (
    <main>
        <section className="py-7 py-md-0 bg-hero" id="home">
    <div className="container">
        <div className="row vh-md-100">
            <div className="col-md-8 col-sm-10 col-12 mx-auto my-auto text-center">
                <h1 className="heading-black text-capitalize">Automated Legal Advisory & Resolution Assistant</h1>
                <p className="lead py-3">A legal chatbot bridging the gap between complex legal language and individuals, empowering them with knowledge of their rights through accessible explanations and reliable resources. Sign up for free.</p>
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
