import React from 'react'
import { CiEdit } from "react-icons/ci";
import { FaLanguage } from "react-icons/fa";
import { GrResources } from "react-icons/gr";
import { FcDisclaimer } from "react-icons/fc";
import { lawyer,multiple,guid,cost } from '../../assets';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useState, useEffect } from 'react';





const Features = () => {

    const [scrollTop, setScrollTop] = useState(0);
 const [isScrolling, setIsScrolling] = useState(false);
 const [isUp, setIsUp] = useState(false);

 useEffect(() => {
    const onScroll = () => {
      const scroll = window.scrollY;
      setScrollTop(scroll);
      setIsScrolling(scroll > 80);
      setIsUp(scroll > scrollTop);
    };

    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
 }, [scrollTop]);

 const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
 };

  return (
    <main>
        <section className="pt-6 pb-7 overflow-hidden" id="features">
            <article className="container">
                <article className="row">
                    <article className="col-md-6 mx-auto text-center">
                        <h2 className="heading-black">
                            LawCraftsman offers everything you need.
                        </h2>
                        <p className="text-muted lead"></p>
                    </article>
                </article>
                <article className="row mt-5">
                    <article className="col-md-10 mx-auto">
                        <article className="row feature-boxes">
                            <article className="col-md-6 box">
                                <article className="icon-box box-primary">
                                    <article className="icon-box-inner w-5 h-5">
                                    <CiEdit width="35" height="35"/>
                                    </article>
                                </article>
                                <h5>Scenario-based approach.</h5>
                                <p className="text-muted">Tailors explanations to specific legal situations users encounter.</p>
                            </article>
                            <article className="col-md-6 box">
                                <article className="icon-box box-success">
                                    <article className="icon-box-inner ">
                                    <FaLanguage className=''/>
                                    </article>
                                </article>
                                <h5>Simple, non-technical language.</h5>
                                <p className="text-muted">Makes complex legal concepts understandable for diverse users.</p>
                            </article>
                            <article className="col-md-6 box">
                                <article className="icon-box box-success">
                                    <article className="icon-box-inner">
                                    <GrResources width="35" height="35"/>
                                    </article>
                                </article>
                                <h5>Integrated legal resources.</h5>
                                <p className="text-muted">Makes complex legal concepts understandable for diverse users.</p>
                            </article>
                            <article className="col-md-6 box">
                                <article className="icon-box box-success">
                                    <article className="icon-box-inner">
                                    <FcDisclaimer width="35" height="35"/>
                                    </article>
                                </article>
                                <h5>Disclaimers and limitations.</h5>
                                <p className="text-muted">Clearly states the chatbot does not offer legal advice and encourages users to seek professional guidance for complex issues.</p>
                            </article>
                        </article>
                    </article>
                </article>
                <article className="row mt-6">
                <article className="col-md-6 mr-auto">
                <h2>LawCraftsman is more than just a LawChatBot.</h2>
                <p className="mb-5">LawCraftsman goes further than legal chatbots by connecting you with local lawyers for complex cases, offering initial guidance for your situation, and providing cost transparency through potential fee estimations.</p>
                <a href="#" className="btn btn-light">
                    Try the live demo
                </a>
                </article>
                <div className="col-md-5">
                <Slider {...settings}>
                    <img src={lawyer} className="img-fluid rounded d-block mx-auto" alt="Work 1"/>
                    <img src={guid} className="img-fluid rounded d-block mx-auto" alt="Work 2"/>
                    <img src={cost} className="img-fluid rounded d-block mx-auto" alt="Work 3"/>
                    <img src={multiple} className="img-fluid rounded d-block mx-auto" alt="Work 4"/>
                </Slider>
            </div>
            </article>
            </article>

            

        </section>
    </main>
  )
}

export default Features;
