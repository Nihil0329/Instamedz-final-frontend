import React from 'react'
import "./Cube.css"
import Progf from '../../components/cubecomp/Progfeat/Progf';
import Cform from './Cform';
import Footer from '../../components/Footer/Footer';
import Navbar from '../../components/Navbar/Navbar';

function Cube() {
    return (
        <main>
             <Navbar/>
            <div class="cube-hero">
                <div class="cube-hero-container">
                    <div class="ch-title">
                        <h1>CARDIO CARE CAMPAIGN</h1>
                        <p>Get a Complete home heart Checkup and consultation for a Intensivist in minutes.</p>
                    </div>
                    <div class="ch-img-container">
                        <img src={require("../../assets/casset/docvis.png")} alt="" />
                    </div>

                </div>

            </div>
            <Progf/>

            <div class="cube-imp">
                <a href="/buydevice"><img className='cimg' src={require("../../assets/casset/arroww.jpg")} alt="" /></a>
                <div class="cim">
                    <a href="/buydevice"><img className='cimg' src={require("../../assets/casset/impdevice.png")} alt="" /></a>
                    <div class="c-imp-container2">
                        <h2>Impulse-12</h2>
                        <p>Portable 12-Lead ECG Machine to monitor your heart health with convenience. With BARC certification and 100% Accuracy, Impulse-12 runs for 200 readings in one charge and comes with 2- year gurantee</p>

                    </div>
                </div>
            </div>
{/* 
            <div class="c-oldman">
                <a href="/appointcamp"><img className='cimg' src= {require("../../assets/casset/woldman.jpg")} alt="oldman" /></a>
                <a href="/appointcamp"><img className='cimg' src={require("../../assets/casset/moldman.jpg")} alt="oldman" /></a>
            </div> */}

            <div class="c-expert">
                <img className='cimg' src={require("../../assets/casset/expertw.jpg")} alt="" />
                <div class="c-expert-container">
                    <img src={require("../../assets/casset/exp1.png")} alt="" />
                    <img src={require("../../assets/casset/exp2.png")} alt="" />
                </div>
            </div>

          <Cform/>

            <section class="cubetest">
                <div class="ctest-header">
                    <img src={require("../../assets/casset/arrowtest.png")} alt="" />
                </div>
                <div class="ctest-video-container">
                    <a href="https://www.youtube.com/watch?v=QZIjRA9J3IA"><img src={require("../../assets/casset/ctest-video.jpg")} alt="" /></a>
                </div>
            </section>
            <Footer/>
        </main>
        

    )
}

export default Cube