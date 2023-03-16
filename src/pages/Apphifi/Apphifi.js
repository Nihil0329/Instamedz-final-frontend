import React, { useEffect, useState } from 'react'
import "./hifi.css"
import "./apphifi.css"
import { useNavigate, useParams } from 'react-router-dom'
import { viewContent } from '../../api/api'
import Footer from '../../components/Footer/Footer'
import Loader from '../../components/Loader'
import Navbar from '../../components/Navbar/Navbar'


function Apphifi() {
  const [data,setData]=useState([])
  const [blog,setBlog]=useState("")
  const path="../../assets/hasset/"
  const imgmap={"eye":"eye.svg" ,
"dental":"dental.png",
"heart":"heart.png",
"soul":"soul.png",
"nutri":"nutri.png",
"child":"child.png",
"covid":"covid.png",
}
  const navigate = useNavigate()
  const {care}=useParams()
  useEffect(() => {
    (async () => {
      const {data} = await viewContent(care);
      setData(data);
    })();
    return () => {
      // this now gets called when the component unmounts
    };
  }, []);

  if(data.length > 0){
    return (
      <main className='apphifi'>
        <Navbar/>
        <header className='hifi-header'>
          
          <div class="app-header-title">
            <h1>Connect with our doctor </h1>
       
            <a href={`/appointdoctor/${care}`}>Connect now >></a>
          </div>
        </header>
        <section class="apphf-concern-cardcontainer">
          <div class="apphf-c-container1">
            <div class="apphf-c-c1-title">
              <h3>Read our blogs for possible symptomps</h3>
            </div>
            <div class="apphf-c-c1-cards">
  
              {
                data.map((item) => (
                   
                    <div key={item._id} class="apphf-c-c1-card">
                        <div class="apphfc-card-center">
                          <img src={require(`../../assets/hasset/${imgmap[care]}`)} style={{background:`${item.bg}` }} alt="eyeimg" />
                          <article>
                            <h4>{item.title}</h4>
                            <p>{item.shd} <a href="#blogbody"><button style={{background:"none"}} onClick={()=>setBlog(item.content)}>Read more</button></a></p>
                            <button onClick={()=>navigate(`/appointdoctor/${care}`)}>Consult Doctor</button>
                           
                          </article>
                        </div>   
                    </div>
                  
                ))
              }
  
            </div>
          </div>
          <div class="apphf-c-container2">
            <div class="apphf-c-c1-title">
              <h3>Blog written by our experts</h3>
            </div>
            <article id='blogbody' class="blog">
              {  blog.length >0 ? blog: <>
                Click on the Read more button to learn more about the issues listed above.
                </>
              }
            </article>
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

export default Apphifi