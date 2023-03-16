import React, { useState } from 'react'
import Blog from '../../components/admincomp/Blog'
import Doctor from '../../components/admincomp/Doctor'
import Navbar from '../../components/Navbar/Navbar'

function Admin() {
    const [edit,setEdit]=useState("")
  return (
    <><Navbar/>
    <main className='admin'>
        <h1>choose section you want to edit</h1>
        <div class="admin-btn-container1">
            <button onClick={()=>setEdit("blog")}>blog</button>
            <button onClick={()=>setEdit("doctor")}>doctor</button>
        </div>
        {
           (edit === "blog") ?<Blog/> :<Doctor/>
            
        }
    </main>
    </>
  )
}

export default Admin