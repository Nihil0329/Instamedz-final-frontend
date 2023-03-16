import React from 'react'
import "./Service.css"
import data from "./data"
import {AiOutlineLeft,AiOutlineRight} from "react-icons/ai"
import { useNavigate } from 'react-router-dom'

function Service() {
  const navigate=useNavigate()
  const handleClick=(str)=>{
    const care=str.split(" ")[0].toLowerCase()
    navigate(`/appointservice/${care}`)
  }
  return (
    <section id="services" class="service">
      <div class="services-center">
      <div class="service-title">
        <h1>Our Services</h1>
        <h2>Connect with Trusted Doctors Online</h2>
        <h2>Quality Healthcare at Your Convenience</h2>
      </div>
      <div class="allcard-container">
      
        {
          data.map((item) => (
            <a key={item.title} onClick={()=>handleClick(item.title)} className="card-container">
              <div class="img-card-container">
                <img className="photo-child" alt="eye-care" src={require(`../../../assets/hasset/${item.photo}`)}/>
                <div className="card-title">
                  <h3>{item.title}</h3>
              </div>
              </div>
              <div class="card-container2">
                <p className="card-text">
                  {item.text}
                </p>
              </div> 
            </a>
          ))
        }
  
      </div>
      </div>
    </section>
  )
}

export default Service


