import React from 'react'
import "./Footer.css";
import {FaLinkedinIn} from "react-icons/fa"
import {BsYoutube} from "react-icons/bs"
import {CgFacebook} from "react-icons/cg"
import {AiOutlinePlus,AiOutlineMinus,AiFillInstagram} from "react-icons/ai"
import {RxCross1} from "react-icons/rx"
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import UserWindow from '../UserWindow'
const Footer = () => {
  // we can also use single object state
  const [contact,setContact]=useState(false)
  const [overview,setOverview]=useState(false)
  const [product,setProduct]=useState(false)
  const [service,setService]=useState(false)
  const {dynamicWidth}=UserWindow()
  const navigate=useNavigate()

  const showlink=(ct,ov,pr,sr)=>{
    
    setContact(ct)
    setOverview(ov)
    setProduct(pr)
    setService(sr)


    
  }

  
  return (
    <footer>
      <div class="ft-container1">
        <img src="./logofooter.svg" alt=""/>
        <div class="social-container">
          <p>follow us on</p>
          <div class="social-icons">
            <a target="_blank"  href="https://m.facebook.com/instamedz.in/?ref=search"> <CgFacebook/></a>
            <a target="_blank"  href="https://www.linkedin.com/company/instamedz/mycompany"> <   FaLinkedinIn/></a>
            <a target="_blank" href="https://www.instagram.com/instamedz.com_/"> <AiFillInstagram/></a>
            <a target="_blank" href="https://www.youtube.com/@instamedz6825"> <BsYoutube/></a>
          </div>
        </div>
        

      </div>
      <div class="ft-container2 list">
        <span>
          <p>Our Services</p>

          <button onClick={()=>showlink(false,false,false,!service)}>
            {service   ? <AiOutlineMinus/> : <AiOutlinePlus/>}
            </button>
          
        </span>
        {(service || dynamicWidth >1000) && 
        <ul>
          <li><a href="/consult">Covid Care</a></li>
          <li><a href="/consult">Soul Care</a></li>
          <li><a href="/consult">Heart Care</a></li>
          <li><a href="/consult">Nutri Care</a></li>
          <li><a href="/consult">Dental Care</a></li>
          <li><a href="/consult">Eye Care</a></li>
        </ul>
        }
      </div>
      <div class="ft-container3 list">
        <span>
        <p>Our Products</p>
        <button onClick={()=>showlink(false,false,!product,false)}>{product ? <AiOutlineMinus/> : <AiOutlinePlus/>}</button>
        </span>
        {(product || dynamicWidth >1000) &&
        <ul>
        <li><a href="/product">Impulse 12</a></li>
        </ul>}
      </div>
      <div class="ft-container4 list">
        <span>
        <p>Overview</p>
        <button onClick={()=>showlink(false,!overview,false,false)}>{overview ? <AiOutlineMinus/> : <AiOutlinePlus/>}</button>
        </span>
        {(overview || dynamicWidth >1000) && 
        <ul>
        <li><a href="/about">About Us</a></li>
        <li><a href="/about">Vision & Mission</a></li>
        <li><a href="/about">Our Team</a></li>
        <li><a href="/about">Careers</a></li>
        <li><a href="/about">Privacy Policy</a></li>
        <li><a href="/about">Terms of Use</a></li>
        </ul>
        }
      </div>
      <div class="ft-container5 list">
        {/* <img src="./newsletter.png" alt=""/> */}
        <div>
          <span>
          <p>Contact Us</p>
          <button onClick={()=>showlink(!contact,false,false,false)}>{contact ? <AiOutlineMinus/> : <AiOutlinePlus/>}</button>
          </span>
          {(contact || dynamicWidth >1000) &&
          <ul>
          <li><a href="/about">Address</a></li>
          <li><a href="/about">Phone</a></li>
          </ul>}
        </div>
      </div>

    </footer>
  );
};

export default Footer;
