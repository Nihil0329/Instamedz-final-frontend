import React from 'react'
import Footer from '../../components/Footer/Footer'
import Navbar from '../../components/Navbar/Navbar'
import "./Fitinfinity.css"
function Fitinfinity() {
  return (
    <><Navbar/>
    <section class="fit-main-container">

        <img className='fs1' src={require("../../assets/fitinfinity/s1.jpg")} alt=""/>
        <img className='fsm1' src={require("../../assets/fitinfinity/mbs1.jpg")} alt=""/>
        <section className='fit-childrens'>
          <img src={require("../../assets/fitinfinity/childrens.jpg")} alt="childrens"/>
          <div class="fit-prg-text">
            <h4>This <span style={{fontSize:"60px" ,color:"#0097B2"}}>PROGRAM</span> is especially designed for <span style={{color:"#0097B2"}}>college</span>  students, <span style={{color:"#0097B2"}}>corporate</span>employees and  <span style={{color:"#0097B2"}}>school</span>students .</h4>
          </div>
        </section>
        <img src={require("../../assets/fitinfinity/s2.jpg")} alt=""/>
        <img src={require("../../assets/fitinfinity/s3.jpg")} alt=""/>
        <img src={require("../../assets/fitinfinity/s4.jpg")} alt=""/>  
        <Footer/>
    </section>
    </>
  
  )
}

export default Fitinfinity