import React from 'react';
import { Link } from 'react-router-dom';
import "../styles/home.css";
import imge from "../assests/hopg.png";
import louis from "../assests/louis.png";
import decker from "../assests/deka.png";
import nike from "../assests/nike.png";
import puma from "../assests/puml.png"
import logo from "../assests/logo.jpg"
import ImageContainer from "../pages/ImageContainer"
function Home() {
  return (
    <div className='home'>
      <div className='home-top' style={{backgroundImage: `url(${imge})`}}>
       <h1>Discover Affordable footwears at MK Collections </h1>
       <img src={logo} alt="logo" style={{width: "10%", borderRadius: '50%'}}  />
      </div>

      <div className='home-bottom'>
        <div className=" bottom-container2">
        <h1>FEATURED PRODUCTS</h1>
        <ImageContainer/>
        <h1>BRANDS</h1>
        </div>
        <div className=" bottom-container3">
  
        <Link to="/louis"><img src={louis} alt='voiton' className='hike'/></Link>
        <Link to="/decker"><img src={decker} alt='voiton'/></Link>
        <Link to="/nike"><img src={nike} alt='voiton'/></Link>
        <Link to="/puma"><img src={puma} alt='voiton'/></Link>
        
        </div>
        <div className=" bottom-container4">
     <h1>Join the MK Collections Family</h1>
     <h4 style={{fontWeight: "lighter", color: "red", fontSize: "35px"}}> FOR TRENDING COLLECTIONS</h4>
     <button style={{padding: "10px 35px", fontSize: "19px", backgroundColor: "red", border: "none"}}>
      <Link to="/newsletter" style={{textDecoration: "none", color: "white"}}>SUBCRIBE</Link></button>
      <p style={{ fontSize: "20px"}}>MK Collections provides quality footwear at pretty affordable price, you can shop online with
       immidiate delivery. </p>
       <p style={{ fontSize: "20px"}}>Consequently we help you find the perfect fit. MK Collection offers affordable &lt;
        <strong style={{color: "hsl(24, 90%, 57%)"}}>Men, Women, Kids and Sports&gt;</strong>
       shoes from one of the World reknown Retailers MK Collection Store has everything you could need from smart flats to 
       trainers, boots and the highest heels</p>
       <h2>Value for Money at MK Collection</h2>
        </div>
      </div>
    </div>
  )
}
export default Home
