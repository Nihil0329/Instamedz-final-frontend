import React ,{ useEffect, useRef } from 'react'
import { useState } from 'react'
import "./faq.css"
import fdata from './fdata'
import {AiOutlineUp,AiOutlineDown} from "react-icons/ai"

function Faq() {
  const containerRef = useRef(null);
  const [value,setValue]=useState(-1)
  
  const showFun=(index)=>{
    if(index===value){
      setValue(-1)
      
    }
    else{
      setValue(index)
    }

  }
  return (
    <section className="faqs">
      <div>
        <span class="faqs-title">
          <h2>Frequently asked questions</h2>
        </span>
        <div ref={containerRef} class="faqs-allcard">

          {
            fdata.map((item,index)=>(
            
              <article className="faq-card" key={index}>
                <div class="faq-ques">
                  <h3>{item.ques}</h3>
                  <button className={`faq-btn `} onClick={()=>showFun(index)} >{value===index ? <AiOutlineUp/>:<AiOutlineDown/>}</button>
                </div>
              <p className={`faq-ans`} >
                {
                  value===index && 
                  <>
                  {item.ans}
                  </>
                  
                }
                </p>
              
            </article>
            ))
          }

        </div>
        
      </div>
    </section>

  )
}

export default Faq