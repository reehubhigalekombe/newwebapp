import React, {useState} from 'react';
import Home from "./pages/Home";
import Sneakers from "./pages/Sneakers";
import Sport from "./pages/Sport";
import Newsletter from "./pages/Newsletter";
import Official from "./pages/Official";
import Men from "./pages/Men";
import Slips from "./pages/Slips"
import Women from "./pages/Women"
import Kids from "./pages/Kids"
import Navbar from './components/Navbar';
import Footer from "./components/Footer";
import Puma from './pages/Puma';
import {
   BrowserRouter as Router,
  Routes,
  Route}  from 'react-router-dom';
function App() {
  return (
    <div>
      <Router>
    
    <Navbar/>
    <Routes>
        <Route path="/home" exact element={<Home/>} />
        <Route path="/men"  exact  element={<Men/>} />
        <Route path="/women" exact  element={<Women/>} />
        <Route path="/kids" exact  element={<Kids/>} />
        <Route path="/sport" exact  element={<Sport/>} />
        <Route path="/official" exact  element={<Official/>} />
        <Route path="/sneakers" exact  element={<Sneakers/>} />
        <Route path="/slips" exact  element={<Slips/>} />
        <Route path="/newsletter" exact  element={<Newsletter/>} />
        <Route path="/puma" exact  element={<Puma/>} />
      </Routes>
      <Footer/>
    </Router>
    </div>
  )
}

export default App

