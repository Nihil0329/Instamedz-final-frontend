import React from 'react'
import "./Hero.css"
import UserWindow from '../../UserWindow'
import hero1 from "../../../assets/hasset/herodoc.png"
import hsmall from "../../../assets/hasset/hsmall.png"
import hsmall2 from "../../../assets/hasset/hsmall2.png"
import hbig from "../../../assets/hasset/hbig.png"

function Hero() {
    const {dynamicWidth}=UserWindow()
    return (
        <>
            <header className="hero">
                <div class="hero-main-container">
                   
                    <>
                
                    <a href="#hcontact"  class="btn-container">
                    <button class="hero-book">Book Appointment</button>
                    </a>

                    <div class="hero-container2">
                        <h1>We Exist For Your <span>Holistic</span> Well-being.</h1>
                        <p>We are your Holistic Care Partner. 
We specialize in all facets of your physical and mental health.</p>
                        <a href="#services"><button  class="explore-btn ">Explore</button></a>
                    </div>
                    <div class="hero-container1">
                        <div class="circle-bg-small"></div>
                        <div class="circle-bg-big"></div>
                        <img className='heroimg' src={hero1} alt="yogaperson" />
                        <img src={hsmall} alt="" className="hsmall chatimg"/>
                        <img src={hsmall2} alt="" className="hsmall2 chatimg"/>
                        <img src={hbig} alt="" className="hbig chatimg"/>
                    </div></>
                    
                </div>
            </header>
        </>
    )
}

export default Hero
