import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { AddContent } from '../../api/api'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./Blog.css"

function Blog() {
    const [title,setTitle]=useState("")
    const [care,setCare]=useState(null)
    const [shd,setShd]=useState("")
    const [content,setContent]=useState("")
    const [color,setColor]=useState("#000000")
    const [flag,setFlag]=useState(true)
    
    const navigate=useNavigate()
    const handleEnter=(e)=>{
        if (e.key === "Enter"){
            setContent(content + "\n")
        }
    }
    useEffect(()=>{
        
    },[flag])
    const addContent=async()=>{
        
        const {data}=await AddContent({title,care,shd,color,content})
        setFlag(!flag)
       
        if(data.success){
          toast.success('Success Notification', {
            position: toast.POSITION.TOP_RIGHT
        });}
        else{
          toast.error('Error in data addition !', {
            position: toast.POSITION.TOP_RIGHT
        });
        }
        
        if(data.admin){
          navigate("/admin")
        }
        setTitle("")
        setCare(null)
        setShd("")
        setContent("")
        setColor(null)
       
    }
  return (
    <section class=" admin-blog">
        
         <h4>consult Care</h4>
            <select class="form-control" onChange={(e)=>setCare(e.target.value)}>
             <option value="none">Select options</option>
             <option value="covid">Covid</option>
            <option value="heart">Heart</option>
            <option value="eye">Eye</option>
            <option value="nutri">Nutri</option>
            <option value="child">child</option>
            <option value="soul">Soul</option>
            <option value="dental">Dental</option>
            </select>
        
            <h4>Title</h4>
            <input type="text" class="admin-input" onChange={(e)=>setTitle(e.target.value)}  ></input>

            <h4>Short Description</h4>
            <input type="text" class="admin-input" onChange={(e)=>setShd(e.target.value)}   placeholder="use 10-15 words only" ></input>

            <h4 for="head">choose background color</h4>
            <h2>selected color {color}</h2>
            <input type="color" value={color} onChange={e => setColor(e.target.value)} id="head" name="head"
             />
            <h4>write blog</h4>
            <textarea name="blog" onChange={(e)=>setContent(e.target.value)} onKeyDown={handleEnter} id="ask-ques-body" cols="30" rows="10"></textarea>

            <button class="admin-btn-add" onClick={addContent}>Add</button>
            <ToastContainer />

    </section>
  )
}

export default Blog