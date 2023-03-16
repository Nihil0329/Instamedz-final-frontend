import React, { useEffect } from 'react'
import { Link, useNavigate } from "react-router-dom"
import { AiOutlineMenu } from "react-icons/ai"
import { RxCross1 } from "react-icons/rx"
import { useState } from 'react'
import "./Navbar.css"
import UserWindow from '../UserWindow'
import logoblu from "./logoblu.png"
function Navbar(props) {
  const [showlink,setShowlink]=useState(props.show)
  const [id,setID]=useState()
  const {dynamicWidth}=UserWindow()
  const navigate=useNavigate()
  useEffect(()=>{
    setID(localStorage.getItem("id"))
  },[id])
  return (
    <nav className="navbar" >
      <div class="nav-center">
        {/* use anchor tag with logo */}
        <div class="nav-container1">
          <Link to="/" className="nav-item nav-logo" id="nav-logo" >
            <img src={logoblu} alt="instalogo" />
          </Link>
          <div class="navc1-child">
            <button type="button" onClick={()=>setShowlink(!showlink)} id='menu-btn' class="link-btn">
              {!showlink ? <AiOutlineMenu/>:<RxCross1/>}
            </button>
          </div>

        </div>
        {
          (showlink || dynamicWidth > 1200)  && 
        <div class="nav-container2">
          <div class="nav-links">
            <a onClick={()=>navigate("/")} className="nav-item nav-btn">Home</a>
            <a href="/about" className="nav-item nav-btn">About</a>
            <a onClick={()=>navigate("/consult")} className="nav-item nav-btn">Consultation</a>
            <a onClick={()=>navigate("/product")} href="/product" className="nav-item nav-btn">Impulse-12</a>
            <a onClick={()=>navigate("/cardiocamp")} href="/cardiocamp" className="nav-item nav-btn">Cardio Care</a>
            <a  href="/fitInfinity" className="nav-item nav-btn">Fit Infinity</a>
            </div>
            <div class="nav-auth">
            {
              id?<button class="Dash signin" onClick={()=>navigate("/dashboard")}>My Dashboard</button>:
              <>
              <button class="login" onClick={()=>navigate("/auth/login")}>Login</button>
              <button class="signin" onClick={()=>navigate("/auth/signup")}>Signup</button>
              </>
            }
            
            </div>
        </div>
        }


      </div>
    </nav>
  )
}


export default Navbar
