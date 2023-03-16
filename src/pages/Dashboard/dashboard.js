import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { mydata } from '../../api/api';
import Footer from '../../components/Footer/Footer';
import Loader from '../../components/Loader';
import Navbar from '../../components/Navbar/Navbar';
import "./dashboard.css"

function Dashboard() {
    const [data,setData]=useState()
    const [app,setApp]=useState([])
    const uid =localStorage.getItem("id")
    const navigate=useNavigate()
    
    useEffect(()=>{
        (async () => {
            const {data} = await mydata(uid);
            setData(data);
            setApp(data.appointment)
          })();
          return () => {
            // this now gets called when the component unmounts
          };
    },[])

    const logout=()=>{
      localStorage.clear();
      navigate("/")
      window.location.reload()
     
      
    }
    
  if(data){
    return (
      <><Navbar/>
        <section className="dashboard">
            <div class="dashboard-container">
                <header class="d-header">
                    <h3>Hello, {data.name}</h3>
                  
                </header>
                <main>
                    <h4>Your Appointments</h4>
                    <div class="all-appointments">
                    {
                app.map((item) => (
                   
                    <div key={item._id} class="d-appointment">
                        <p>Your appointment is booked under <span style={{textTransform:"capitalize"}}>{item.Care} care</span> </p>
                        <p>Booked On : {item.BookedOn.slice(0,10)}</p>
                        <p>Appointment Date : {item.DateAppoint.slice(0,10)}</p>
                        <p>Status : {item.Status}</p>
                        <p>Mode: {item.Mode}</p>
                        <p>Doctor: {item.Docname}</p>
                       
                    </div>
                  
                ))
              }
                    </div>
                </main>
              <button id='logout-btn' onClick={()=>logout()}>Logout</button>
            </div> 
            <Footer/>
        </section>
        </>
      )
  }
  else{
    return(
     <Loader/>
    )
  }
 
}

export default Dashboard