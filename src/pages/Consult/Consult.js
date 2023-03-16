import "./consult.css";
import React, { useEffect, useState } from 'react'
import Service from "../../components/HomeComp/Services/Service";
import Faq from "../../components/faq/Faq";
import { useNavigate } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
// images
import nurse from "../../assets/consult/nurse.png"
import consulthero from "../../assets/consult/consulthero.jpg"
import Navbar from "../../components/Navbar/Navbar";
// import ourexperts from "../../assets/consult/ourexperts.png"


function Consult() {

  const [id,setID]=useState()

  useEffect(() => {
    setID(localStorage.getItem("id"))
    window.scrollTo(0, 0); // set scroll position to top of the page
  }, []);
 
    return ( 
    <main className="consultpage">
       <Navbar/>
        <header className="consult-hero">
          <div>
            <div class="consult-hero-c1">
              <h1>Hassle Free Appointment with Experts</h1>
              <h3>Skip the hospital waiting rooms <br/>Get second opinion </h3>
              <p>Get expert opinion from respective specialist online <br/> Starting from INR 199/- only. </p>
              {id?<a className="bkapp" href="#services">Book Appointment</a>:<>
              <p> <a href="/auth/login">Login </a> to book appointment with our doctor.</p>
              </>}
              
            </div>
            <img className="nursephoto"  src={nurse} alt=""/>
          </div>
          {/* <a href="#services"><img  src={consulthero} alt="consulthero"/></a> */}
          
        </header>
        {/* src="./rectangle-4@2x.png" */}


        <section class="experts">
        {/* <div class="service-title">
        <h1>Our Products</h1>
        <div class="underline"></div> */}
                    <div class="c-expert" style={{padding:"0px"}}>
                <img className='cimg' src={require("../../assets/casset/expertw.jpg")} alt="" />
                <div class="c-expert-container">
                    <img src={require("../../assets/casset/exp1.png")} alt="" />
                    <img src={require("../../assets/casset/exp2.png")} alt="" />
                </div>
            </div>

        </section>

        <Service/>
      
    <Footer/>
    </main>
    
  )
}

export default Consult


