import React, { useState } from 'react'
import { changepass, checksignup } from '../../api/api'
import Loader from '../../components/Loader'
import Navbar from '../../components/Navbar/Navbar'
import "./Forgot.css"
function Forgot() {
  const [ans,setAnswer]=useState("")
  const [cans,setCAns]=useState("")
  const [email,setEmail]=useState("")
  const [p1,setP1]=useState("")
  const [p2,setP2]=useState("")
  const [ques,setques]=useState("")
  const [id,setId]=useState("")
  
  const ar=["What's your pet name?","Your favourite cricketer name?","Your favourite singer name?"]
  const elem1=document.getElementsByClassName("fp-container")[0]
  const elem2=document.getElementsByClassName("fp-container1")[0]
  const elem3=document.getElementsByClassName("fp-container2")[0]

  const emailcheck = async()=>{
   
   
     var {data} = await checksignup({email:email})
     if(!data){
      return(<>
      <Loader/>
      </>)
    }
    if(data.success){
      const secq=data.sec
      const n=  parseInt(secq.split("+")[0][1])
      setques(ar[n-1])
      setCAns(secq.split("+")[1])
      setId(data.id)
      elem1.innerHTML="<p>now enter security question below</p>"
      elem2.style.display="block"
     
    }
    else{
      alert("no email found")
    }
  }
  const anscheck =()=>{
      if (cans===ans){
        elem1.style.display="none"
        elem2.innerHTML="<p>Correct ans now enter new password</p>"
        elem3.style.display="block"
      }
      else{
        alert("wrong answer retry")
      }
  }
  const handlesubmit=async()=>{
    if(p1===p2){
      const {data}=await changepass({id:id,password:p1})
      if(data.success){
        elem2.style.display="none"
        alert("password change successfully")
       
      }
      else{
        alert("some error occur")
      }
    }
    else{
      alert("password doesnt match")
    }
    
  }
  
    return (
      <main className='forgotp'>
       <Navbar/>
       <div class="fp-maincontainer">
       <div class="fp-container">
       <h4>Enter your email</h4>
         <input type="text"  id="sec-ans"  onChange={(e)=>{setEmail(e.target.value)}}></input>
         <button class="fpc1" onClick={()=>emailcheck()}>Submit</button>
       </div>
       <div class="fp-container1" style={{display:"none"}}>
             <h4>{ques}</h4>
             <label for="answer">
             <h4>Your answer</h4>
             <input type="text"  id="sec-ans"  onChange={(e)=>{setAnswer(e.target.value)}}></input>
             </label>
             <button class="fpc1" onClick={()=>anscheck()}>Submit</button>
             
       </div>
       <div class="fp-container2" style={{display:"none"}}>
         <div class="fp-child"><h4>Enter new password</h4>
             <input type="text" id="sec-ans" minlength="8" onChange={(e)=>{setP1(e.target.value)}} placeholder="min length should be 8"></input>
         </div>
         <div class="fp-child"><h4>Confirm new password</h4>
             <input type="text"  id="sec-ans" minlength="8" onChange={(e)=>{setP2(e.target.value)}}></input>
             <button class="new-pass" onClick={()=>handlesubmit()}>Submit</button>
         </div>
         <p style={{textAlign:"center",fontSize:"19px"}}><a href="/auth/login" style={{borderBottom:"1px solid"}}>Go to login</a></p>
       </div>
       </div>
      </main>
     )
 


}

export default Forgot