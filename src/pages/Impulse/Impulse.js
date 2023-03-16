import React from 'react'
import "./Impulse.css"
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'
import { AiOutlineDoubleLeft, AiOutlineDoubleRight } from "react-icons/ai"
import Faq from '../../components/faq/Faq'
import data from "./impdata"
import Footer from '../../components/Footer/Footer'
// images
import iwh from "../../assets/Imp-assest/iwh.jpg"
import report from "./reportdata"
import Navbar from '../../components/Navbar/Navbar'
// 

function Impulse() {
  const [phone, setPhone] = useState("")
  const [address, setAddress] = useState("")
  const [cname, setCname] = useState("")
  const [prevMode, setImp] = useState(true)
  const navigate = useNavigate()

  const endpoint = "https://ik.imagekit.io/instamedz"

  function handleinput(e) {
    if (e.target.name === "phone") {
      setPhone(e.target.value)
    }
    if (e.target.name === "address") {
      setAddress(e.target.value)
    }
    if (e.target.name === "cname") {
      setCname(e.target.value)
    }
  }
  const scrolll = () => {
    var left = document.querySelector(".card-video-container")
    left.scrollBy(350, 0)
  }
  const scrollr = () => {
    var right = document.querySelector(".card-video-container")
    right.scrollBy(-350, 0)
  }
  const onsubmit = async () => {

    // const data=new Date().toLocaleDateString()
    // Time:new Date().toLocaleTimeString()}]


    const resultresp = await axios.post("https://sheetdb.io/api/v1/725wae185vaj2", {
      data: [{
        Name: cname,
        Address: address,
        Contact: phone,
        formfor: "impulse"
      }]
    })
    if (resultresp) {
      navigate("/appointsuccess")
    }
    console.log(resultresp)
    setAddress("")
    setPhone("")
    setCname("")

  }
  return (
    <div class="impulse-page">
 <Navbar/>
      <header>

        <div class="impulse-hero1">
          <img src={iwh} alt="imp-img" />
          <img src={require(`../../assets/Imp-assest/impm1.jpg`)} alt="impimg" />
        </div>
        <h2 className='feature-text'>Features</h2>
        <div class="impulse-hero2">
          
          <img src={endpoint + "/impfunc.jpg"} alt="imp img" />
          <img src={require(`../../assets/Imp-assest/impm2.png`)} alt="imp img" />
        </div>
      </header>

      <section class="impulseform">
        <div class="impulseform-container2">
          {/* <div class="imp-form-title">
            <h2>Try before you buy</h2>
            <p>Book a free demo of Impulse-12 at your doorstep by filing the details below</p>

          </div> */}

          <div className='hc-container2-child'>
            <div class="hc-title">
              <h2>Try before you buy</h2>
              <p>Book a free demo of Impulse-12 at your doorstep by filing the details below</p>
            </div>
            <div>
              <div class="form-group">
                <input type="text" class="form-control" onChange={(e) => handleinput(e)} name="cname" placeholder="Name" />
              </div>

              <div class="form-group">
                <input type="tel" class="form-control" onChange={(e) => handleinput(e)} name="phone" aria-describedby="emailHelp" placeholder="Phone" />

              </div>
              <div class="form-group">
                <input type="text" class="form-control" onChange={(e) => handleinput(e)} name="address" aria-describedby="emailHelp" placeholder="Pincode" />

              </div>
            </div>
            <button onClick={onsubmit} class="btn btn-primary book-appointment" id="callback">Book a Free Demo</button>
          </div>
        </div>
      </section>

      <section class="deviceinfo">
        <div class="impulsedevice imp-c">
          <img className='impdevicew' src= "./impulse4.svg"  alt="devicepic" />
          <img className='impdevicew' src="./impulse22.svg" alt="devicepic"/>

          <img className='impdevicem' src={require("../../assets/Imp-assest/impdevicem1.jpg")} alt="devicepic" />
            <img className='impdevicem' src= {require("../../assets/Imp-assest/impdevicem2.jpg")} alt="devicepic"/>

          {/* <img src="./impulse4.svg" alt="" /> */}
        </div>
      </section>

      {/* how to use direction */}
      <section className='direction-use'>
        <h3>How to use Impulse-12</h3>
        <div class="direction-use-child">
          <button className='left-icon' onClick={scrolll}><AiOutlineDoubleLeft /></button>
          {/* <button class="icon"><i className='fas fa-angle-double-left'></i></button> */}
          <div class="card-video-container" id='cv-container'>
            <div class="card-video">
              <img src={require("../../assets/Imp-assest/step1.jpg")} alt='step1'></img>
              <h4>step 1: <span>Connect the chest electrode</span></h4>
            </div>
            <div class="card-video">
              <img src={require("../../assets/Imp-assest/step2.jpg")} alt='step2'></img>
              <h4>step 2: <span style={{fontsize:"15px"}}>Connect limb electrodes</span></h4>
            </div>
            <div class="card-video">
              <img src={require("../../assets/Imp-assest/step3.jpg")} alt='step3'></img>
              <h4>step 3: <span>Establish connection with mobile</span></h4>
            </div>
            <div class="card-video">
              <img src={require("../../assets/Imp-assest/autor1.jpg")} alt='step4'></img>
              <h4>step 4: <span>Report generation in pdf format</span></h4>
            </div>
          </div>
          <button className='right-icon' onClick={scrollr}><AiOutlineDoubleRight /></button>

        </div>
        {/* <div class="device-steps imp-c">
          <img src="./impulsestep.svg" alt="" />
        </div> */}
      </section>

      <section class="imptestimonial">
        <div>
          <div class="imp-testimonial-title">
            <h3>Our Satisfied Clients</h3>
          </div>
          <div class="imp-test-container">
            <div class="imp-test-cards">

              {
                data.map((item) => (
                  <div class="test-cardcontainer">
                    <article>
                      <h4>{item.name}</h4>
                      <p className='t12' >{item.e1}<br />
                        {item.e2}<br />
                        {item.e3}</p>
                      <p ><b>{item.e4}</b></p>
                    </article>
                  </div>
                ))
              }
            </div>
          </div>
        </div>
      </section>


      <section class="autoreport">
        <div class="autoreport-title">
          <h3>Impulse-12</h3>
        </div>
        <div class="direction-use-child">
          {/* <button className='left-icon' onClick={scrolll}><AiOutlineDoubleLeft /></button> */}
         
          <div class="card-video-container">
            {report.map((item) => (
              <div key={item.img} class="card-video">
                <img src={require(`../../assets/Imp-assest/${item.img}`)} alt="impulsekit" ></img>
                <h4><span>{item.info}</span></h4>
              </div>
            ))

            }
          </div>
          {/* <button className='right-icon' onClick={scrollr}><AiOutlineDoubleRight /></button> */}

        </div>
      </section>


      <Faq />
      <Footer />

    </div>
  )
}

export default Impulse