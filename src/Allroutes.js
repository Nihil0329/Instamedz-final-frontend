import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Nomatch from './components/Nomatch'
import PrivateRoutes from './components/Privatesroutes'
import About from './pages/About/About'
import Admin from './pages/Admin/Admin'
import Apphifi from './pages/Apphifi/Apphifi'
import Hifidoc from './pages/Apphifi/Hifidoc'
import Hifiform from './pages/Apphifi/Hifiform'
import Hifisuccess from './pages/Apphifi/Hifisuccess'
import Auth from './pages/Auth/Auth'
import Consult from './pages/Consult/Consult'
import Cube from './pages/Cube/Cube'
import Dashboard from './pages/Dashboard/dashboard'
import Fitinfinity from './pages/Fitinfinity/Fitinfinity'
import Forgot from './pages/ForgotP/Forgot'
import Home from './pages/Home/homepage'
import Impulse from './pages/Impulse/Impulse'



function Allroutes() {
  return (
     <Routes>
        <Route path='/'element={<Home></Home>}></Route>
        <Route path="/product" element={<Impulse/>}> </Route>
        <Route path="/cardiocamp" element={<Cube/>}> </Route>
        <Route exact path="/appointservice/:care" element={<Apphifi/>}> </Route>
        <Route path="/consult" element={<Consult/>}> </Route>
        <Route path="/auth/:value" element={<Auth/>}> </Route>
        <Route path="/auth/forgot" element={<Forgot/>}> </Route>
        <Route path="/fitinfinity" element={<Fitinfinity/>}> </Route>
        <Route path="/about" element={<About/>}> </Route>
        
        <Route path="*" element={<Nomatch/>}></Route>
        {/* route for login user only */}
        <Route element={<PrivateRoutes/>}>
        <Route path="/appointdoctor/:care" element={<Hifidoc/>}> </Route>
        <Route path="/appointform/:id" element={<Hifiform/>}> </Route>
        <Route path="/appointsuccess" element={<Hifisuccess/>}> </Route>
        <Route path="/dashboard" element={<Dashboard/>}> </Route>
        </Route>
        {/* protected route */}
        <Route path="/admin" element={<Admin/>}> </Route>
        



    </Routes>
  )
}

export default Allroutes