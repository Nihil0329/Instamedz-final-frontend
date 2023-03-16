import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import "./hifi.css"
import {BsBoxArrowInDownRight} from "react-icons/bs"
function Hifisuccess() {
  return (
    <><Navbar/>
    <section className='hifi-success'>

        <div class="success-box">
            <div class="success-box-child">
                <img src={require(`../../assets/hifi/success.png`)} alt="success"/>
                <h3>Appointment Confirmed!</h3>
            </div>
        </div>
        <div class="goback">
          <p>Your appointment has been confirmed our expert will get back to you soon </p>
          <p>To check your appointments go to <br/> <a href="/Dashboard">My dashboard <BsBoxArrowInDownRight/> </a> </p></div>
    </section>
    </>
  )
}

export default Hifisuccess