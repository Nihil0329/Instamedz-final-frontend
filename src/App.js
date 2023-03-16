import './App.css';
import Navbar from "./components/Navbar/Navbar"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Allroutes from './Allroutes';
import Footer from './components/Footer/Footer';
import { useState } from 'react';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        {/* <Navbar  /> */}
        <Allroutes />
      </BrowserRouter>
    </div>
  );
}

export default App;
