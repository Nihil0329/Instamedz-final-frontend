import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import  axios  from 'axios'

function Cform() {
    const [cname,setCname]=useState("")
    const [phone,setPhone]=useState("")
    const [date,setDate]=useState("")
    const [city,setCity]=useState("")
    const [address,setAddress]=useState("")
    const navigate=useNavigate()
    const bookapp = async(e)=>{
        e.preventDefault()
        // const data=new Date().toLocaleDateString()
        // Time:new Date().toLocaleTimeString()}
        
        const resultresp=await axios.post("https://sheetdb.io/api/v1/725wae185vaj2",{
            data:[{
                Name:cname,
                Address:address,
                Date:date,
                City:city,
                Contact:phone,
                formfor:"campaign"
            }]
        })
        if(resultresp){
                navigate("/appointsuccess")
        }
        console.log(resultresp)
        setCname("")
        setPhone("")
        setAddress("")
    }
  return (
    <div class="cube-appform">
    <div class="cube-app-container">
        <div class="c-app-title">
            
            <div class="c-app-t1">
                <h2>Appointment Request Form</h2>
                <p>Please fill in the details for your appointment</p>
            </div>
        </div>

        <form >
            <div className="ask-form-container">
                <article>
                    <label for="cname">
                        <h4>Name</h4>
                        <input type="text" id="cname" placeholder="" onChange={(e)=>setCname(e.target.value)}></input>
                    </label>
                    <label for="cphone">
                        <h4>Phone</h4>
                        <input type="tel" id="cphone" onChange={(e)=>setPhone(e.target.value)} ></input>
                    </label>
                    <label for="cemail"  >
                        <h4>Address</h4>
                        <input type="text" id="address" onChange={(e)=>setAddress(e.target.value)}></input>
                    </label>
                </article>

                <article>
                    <label for="cdate">
                        <h4>Date</h4>
                        <input type="date" id="cdate" onChange={(e)=>setDate(e.target.value)} ></input>
                    </label>
                    <label for="cities">
                        <h4>City</h4>
                        <select class="form-control" onChange={(e) => {
                            setCity(e.target.value)
                        }}>
                            <option value="notselected"> --- select city --- </option>
                            <option value="pune">Pune,Mahasrastra</option>
                            <option value="indore">Indore,MP</option>
                        </select>
                    </label>
                </article>
            </div>
            <button onClick={bookapp} class="btn btn-primary book-appointment" id="callback">Book Appointment</button>
        </form>
    </div>
</div>
  )
}

export default Cform