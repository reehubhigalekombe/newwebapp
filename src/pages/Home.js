import React from 'react';
import "../styles/home.css";
import { Link } from 'react-router-dom';
import ImageContainer from "../pages/ImageContainer"
function Home() {
  return (
    <div className='home-page'>
      <div className='home-tp'>
<video autoPlay loop muted playsInline className='videoBackground'>
  <source src='videos/shel6.mp4' alt="video/mp4" />
  Your browser does not support video tag
</video>
<div className='over-lay'>
  <h1>Discover Affordable Footwear at MK Collections </h1>
  <button>
    <Link to="/new-arrivals">Shop What's New &rarr;</Link>
  </button>
</div>
      </div>
      
      <div className='home-bt'>
      <div className='bottom1'>
        <h1>FEATURED PRODUCTS</h1>
<ImageContainer/>
<h1>BRANDS</h1>
      </div>
      <div className='bottom1'>

        <Link to="/louis"><img src="http://localhost:5500/uploads/louis.png" alt="voiton"/></Link>
        <Link to="/decker"><img src="http://localhost:5500/uploads/deka.png"  alt="voiton"/></Link>
        <Link to="/nike"><img src="http://localhost:5500/uploads/nike.png"  alt="voiton"/></Link>
        <Link to="/puma"><img src="http://localhost:5500/uploads/puml.png" alt="voiton"/></Link>
      </div>
      <div className='bottom1'></div>
      </div>
    </div>
  )
}

export default Home
