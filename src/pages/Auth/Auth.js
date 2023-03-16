import React, { useEffect, useState } from 'react'
// import { logIn,signUp } from '../../api'
import "./Auth.css"
import  {useNavigate, useParams} from "react-router-dom"
import { logIn, signUp } from '../../api/api'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from '../../components/Navbar/Navbar';


function Auth() {
  const {value}=useParams()
  const [isSignup, setisSignup] = useState(null)
  //value === "signup" ?true:false
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [ans,setAnswer]=useState("")
  const [ques,setQuestion]=useState("")
  const navigate=useNavigate()
  const handleswitch = async() => {
    setisSignup(!isSignup)
  }
  const handlesubmit=async(e)=>{
    e.preventDefault()
    if (!password && !email){
      alert("Enter email and password")
    }
    if(isSignup){
      if(!name){
        alert("enter name to continue")
      }
      if(!ques){
        alert("select ques to continue")
      }
      if(!ans){
        alert("enter ans to continue")
      }
      else{
        const sec=ques + "+" + ans
        const {data}=await signUp({name,email,password,sec})
        if(data.message){
          alert(data.message)
        }
        else{
          console.log("signup success",data)
          setisSignup(false)
        }
      }
    }
    else{
        
        const {data}=await logIn({email,password})
        
        if(data.message){
          alert(data.message)
        }
        else{
        if(data.admin){
          navigate("/admin")
        } 
        else{
          
          toast.success('You have login successfully', {
            position: toast.POSITION.TOP_CENTER,
            autoClose:"800",
            hideProgressBar: true
        })
          localStorage.setItem("token",data.token)
          localStorage.setItem("id",data.id)
          setTimeout(function(){
navigate("/consult")
window.location.reload()
          }, 1500);
          
        }}
      }
      // window.location.reload()
  }
  
  useEffect(()=>{
    value === "signup" ? setisSignup(true):setisSignup(false)
  },[value])

  return (
    <> <Navbar/>
    <section className='auth-section'>
      
      {/* {isSignup} */}
      <div class="auth-container-2">
        {/* {!isSignup && <div id="logo-container"><img src="" alt='iconimg' className='login-logo'></img></div>} */}
        <h1 class="auth-title">
        {isSignup? <>SIGN UP</>:<>LOGIN</>}
        </h1>
        
        <form onSubmit={handlesubmit}>
          {isSignup &&
          <>
          <label htmlFor='name'>
            <h4>Name</h4>
            <input type="name" name="name" id="name" onChange={(e)=>{setName(e.target.value)}}></input>
          </label>
          <label for="security">
          <h4>Choose security question</h4>
            <select class="form-control"  onChange={(e)=>setQuestion(e.target.value)}
            >
              <option value="notselected"> --- select mode --- </option>
              <option value="q1">What's your pet name?</option>
              <option value="q2">Your favourite cricketer name?</option>
              <option value="q3">Your favourite singer name?</option>
          </select>
          </label>
          <label for="answer">
          <h4>Your answer</h4>
          <input type="text"  id="sec-ans" minlength="3" onChange={(e)=>{setAnswer(e.target.value)}}></input>
          </label>
      </>
          }
          <label htmlFor='email'>
            <h4>Email</h4>
            <input type="email" name="email" id="email" onChange={(e)=>{setEmail(e.target.value)}}></input>
          </label>
          <label htmlFor='password'>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <h4>Password</h4>
            </div>
            <input type="text" name="password" id="password" minlength="8" onChange={(e)=>{setPassword(e.target.value)}}></input>
            {!isSignup && <p className='p-blue-13' style={{textAlign:"right"}}> <a href="/auth/forgot" >Forgot password</a></p>}
            {isSignup && <p style={{ color: "rgba(82, 82, 82, 1)", fontSize: "13px" }}>Passwords must contain at least eight characters,</p>}
          </label>
          <button type='submit' className='auth-btn'>{isSignup ? "Signup" : "Login"}</button>
          <p className='auth-p' >
            {isSignup ? "Already have an account?" : "Don't have an account?"}
            <button type="button" className='handle-switch-btn' onClick={handleswitch}>{isSignup ? " Login" : " Sign up"}</button>
          </p>
          
        </form>
      </div>
      <ToastContainer />
    </section>
    </>
  )
}

export default Auth