import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useState } from 'react'
import Footer from '../../components/Footer/Footer'
import { appointform } from '../../api/api'
import Navbar from '../../components/Navbar/Navbar'

// import emailjs from '@emailjs/browser'
function Hifiform() {
    
   
    const [cname,setCname]=useState("")
    const [phone,setPhone]=useState("")
    const [date,setDate]=useState("")
    const [mode,setMode]=useState("")
    
    const navigate=useNavigate()
    const {id}=useParams()
    const uid = localStorage.getItem("id")
   
   
    console.log("form",uid)
    // const sendEmail = (e) => {
    //     e.preventDefault();
        // emailjs.sendForm('service_yyr6ist', 'template_24pgpej', e.target, 'W8MIgqXfgJt3n4Jiz').then((result) => {
        //     window.location.reload()  //This is if you still want the page to reload (since e.preventDefault() cancelled that behavior) 
        //     alert("✅Message sent successfully")
        // }, (error) => {
        //     console.log(error.text);
        //     alert("❌ Message not sent ❌")
    
        // });
    //   };

    const bookapp=async(e)=>{
        e.preventDefault()
        const resultresp=await appointform({
                uid:uid,
                date:date,
                Mode:mode,
                phone:phone,
                Docid:id,
                Status:"pending"
        })
        if(resultresp){
                navigate("/appointsuccess")
        }
        console.log(resultresp)
        setCname("")
        setPhone("")
     
    }
  return (
    <div class="hifi-appform">
        <Navbar/>
    <div class="cube-app-container">
        <div class="c-app-title">
            
            <div class="c-app-t1">
                <h2>Appointment Request Form</h2>
                <p>Please fill in the details for your appointment</p>
            </div>
        </div>

        <form method='POST'>
            <div className="ask-form-container">
                <article>
                    <label for="cname">
                        <h4>Name</h4>
                        <input type="text" id="cname" onChange={(e)=>setCname(e.target.value)}   value={cname} placeholder=""></input>
                    </label>
                    <label for="cphone">
                        <h4>Phone</h4>
                        <input type="tel" id="cphone" onChange={(e)=>setPhone(e.target.value)}   value={phone}  ></input>
                    </label>
                </article>

                <article>
                    <label for="cdate">
                        <h4>Date</h4>
                        <input type="date" id="cdate" onChange={(e)=>setDate(e.target.value)}   value={date}></input>
                    </label>
                    {/* <label for="cities">
                        <h4>City</h4>
                        <select class="form-control" onChange={(e)=>setCity(e.target.value)}
                        >
                            <option value="notselected"> --- select city --- </option>
                            <option value="pune">Pune,Mahasrastra</option>
                            <option value="indore">Indore,MP</option>
                        </select>
                    </label> */}
                    <label for="callmode">
                        <h4>Mode</h4>
                        <select class="form-control"  onChange={(e)=>setMode(e.target.value)}
                        >
                            <option value="notselected"> --- select mode --- </option>
                            <option value="phone">Phone</option>
                            <option value="video">video</option>
                            <option value="chat">chat</option>
                        </select>
                    </label>
                </article>
            </div>
            <button onClick={bookapp}  class="btn btn-primary book-appointment" id="callback">Book Appointment</button>
        </form>
    </div>
    <Footer/>
</div>
  )
}

export default Hifiform