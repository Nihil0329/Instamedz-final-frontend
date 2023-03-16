import React, { useEffect, useState } from 'react'
import "./hifidoc.css"
import { useNavigate,useParams } from 'react-router-dom'
import Footer from '../../components/Footer/Footer'
import maledoc from "../../assets/hifi/maledoc.png"
import femaledoc from "../../assets/hifi/femaledoc.png"
import tick from "../../assets/hifi/greentick.png"
import { viewDoctor } from '../../api/api'
import Loader from '../../components/Loader'
import Navbar from '../../components/Navbar/Navbar'

function Hifidoc() {
    const [data,setData]=useState([])
    const {care}=useParams()
    const navigate=useNavigate()

    useEffect(() => {
        (async () => {
          const {data} = await viewDoctor(care);
          
          setData(data);
          console.log("doctoe",data)
        })();
        return () => {
          // this now gets called when the component unmounts
        };
      }, []);
    const bookapp=(id)=>{
        navigate(`/appointform/${id}`)
  }
  if(data.length > 0){
    return (
        <main className='apphifi-docpg'>
            <Navbar/>
            <header className='hifi-header'>

                <div class="app-header-title">
                    <h1>Choose the Doctor</h1>
                    <p>Select the Medical expert you wish to consult with and proceed to Book Appointment with them</p>
                </div>
            </header>
            <section class="hf-doc-container">
                {/* <aside class="hf-doc-side-container">
                  <h3>Sort</h3>
                  <p>Experience</p>
                  <p>Price</p>
                  <p>Language</p>
                  <p>Rating</p>
                  <p>Consults done</p>
                </aside> */}

                <div class="hf-doc-main-container">
                    <div class="hf-child-docmain">
                    {data
                    .map((item)=>(
                        <div class="hf-doc-card" key={item._id}>
                        <div class="hfdc-text">
                            <div class="hfdc-img">
                            {   item.img.length === 0 ?
                                item.gender === "male"?
                                <img src={maledoc} alt="maledoc"/>:<img src={femaledoc}alt="femaledoc"/>:
                                <img src={item.img} alt="docimg"></img>
                            }
                        </div>
                            <div>
                            <h4>{item.name} <span><img src={tick} alt="" /></span> </h4>
                            <p className='doc-degree'>{item.degree.map((item)=>
                            
                            <span >{`${item} `}</span>
                            )}</p>
                            <p style={{marginTop:"10px"}}>{item.experience} years Experience</p>
                            <p>{item.language}</p>
                            
                            <p> {item.totalconsult} Consults Done </p>
                            </div>
                        </div>
                        <div class="hfdc-fh">
                            <div class="hfdc-fh-text">
                                <div>
                            <h4>Consultation Fee</h4>
                            <p>{item.fees}</p>
                            </div>
                            <div>
                            <h4>Available Hours</h4>
                            <p>{item.available_hrs}</p>
                            </div>
                            </div>
                            <button onClick={()=>bookapp(item._id)}>Book Appointment</button>
                        </div>
                </div>
                    ))
                     
                    }
                    </div>
                    <div class="hifi-pgno">
                    <ul>
                        <img src="./hifi/leftbtn.svg" alt=""/>
                        <li>1</li>
                        <li>2</li>
                        <li>3</li>
                        <li>4</li>
                        <li>5</li>
                        <img src="./hifi/rightbtn.svg" alt=""/>
                    </ul>
                    </div>
                
                </div>
            </section>
            <Footer/>
        </main>
    )
                }
    else{
        return(
            <Loader/>
        )
    }
}

export default Hifidoc