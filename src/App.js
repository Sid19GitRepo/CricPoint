import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import NavBar from './Pages/NavBar';
import Home from './Pages/Home';
import Rankings from './Pages/Rankings/Rankings';
import Schedule from './Pages/Schedule';


function App(){
  return(
    <div className='overflow-auto no-scrollbar h-screen' >
      <Router>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route path = "/schedule" element={<Schedule />} />
          <Route path="/rankings" element={<Rankings/>} />
        </Routes>
      </Router>
    </div>
  )
}

export default App;