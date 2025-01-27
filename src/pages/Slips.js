import React from 'react'
import "../styles/slips.css"
import { Link } from 'react-router-dom';
import WhatsApp  from '@mui/icons-material/WhatsApp';
import  VisibilityOutlined  from '@mui/icons-material/Visibility';
import ShoppingBasket  from '@mui/icons-material/ShoppingBasket';
import Facebook from '@mui/icons-material/Facebook';
import Airforce from "../assests/wm2.jpg"
import Slippers from "../assests/wm3.jpg";
import Open from "../assests/kidq.jpg";
import Gamboots from "../assests/slip3.webp";
import Sneekers  from "../assests/w1.jpg";
import Sports  from "../assests/slips om.webp";
import Rubber from "../assests/slip6.webp";
import pamz from "../assests/slip8.webp"
import timber from "../assests/slip01.webp";
import crocodile from "../assests/slip26.webp";
import mules from "../assests/slip24.webp";
import tomford from "../assests/slip23.webp";
import tassel from "../assests/slip22.webp";
import johnfoster  from "../assests/slip21.webp"
const products = [
  {id: 1,  image: Sneekers, sizes: "Sizes: 37 - 44", name: "High-Heel Closed",  oldPrice: 143,  newPrice: 100, },
    {id: 2, image: Airforce, sizes: "Sizes: 37 - 44", name: "Slay-Shoes", oldPrice: 123, newPrice: 100, },
    {id: 3, image: Slippers, sizes: "Sizes: 37 - 44",  name: "Leisure", oldPrice: 123, newPrice: 100, },
    {id: 4, image: Open, sizes: "Sizes: 37 - 44",  name: "Airforce",  oldPrice: 123, newPrice: 100, },
    {id: 5, image: Gamboots, sizes: "Sizes: 37 - 44", name: "Sneaker-Black", oldPrice: 123, newPrice: 100,},
    { id: 6, image: Rubber, sizes: "Sizes: 37 - 44",  name: "Rubber-Ladies Black", oldPrice: 123, newPrice: 100,},
    {id: 7, image: Sports,  sizes: "Sizes: 37 - 44", name: "High-Heel Open", oldPrice: 123, newPrice: 100, },    
    { id: 8, image: timber,  sizes: "Sizes: 37 - 44", name: "Timber-Land Reinforced", oldPrice: 123, newPrice: 100, },   
    { id: 9, image: pamz,  sizes: "Sizes: 37 - 44", name: "Louis Vuiton", oldPrice: 123, newPrice: 100, },    
    { id: 10, image: mules,  sizes: "Sizes: 37 - 44", name: "Mules", oldPrice: 123, newPrice: 100, },   
    { id: 11, image: tassel,  sizes: "Sizes: 37 - 44", name: "Tassel", oldPrice: 123, newPrice: 100, },   
    { id: 12, image: tomford,  sizes: "Sizes: 37 - 44", name: "Tom Ford", oldPrice: 123, newPrice: 100, },   
    { id: 13, image: johnfoster,  sizes: "Sizes: 37 - 44", name: "John Foster", oldPrice: 123, newPrice: 100, },   
    { id: 14, image: crocodile,  sizes: "Sizes: 37 - 44",  name: "Crocodile", oldPrice: 123, newPrice: 100, },  
]
function Slips() {
  return (
    <div className='slippers'>
      <div className='slippers-top'>
    <ul className='menu'>
  <li className='menuItem'><Link to="/home" className='link'>Home</Link></li>
  <li style={{color: "white"}}>&gt;&gt;</li>
  <li className='menuItem'><Link to="/slips" className='link'>Slips-On</Link></li>
</ul>
    </div>
    <div className='slippers-bottom'>
    <div className='bottom-left'>
<div className='categories'>
    <p className='para'>CATEGORIES</p>
     <p><Link to="/crocs" className='link'>&gt;Air Force Shoes</Link></p>
                <p><Link to="/crocs" className='link'>&gt;Sneakers for Men</Link></p>
                <p><Link to="/crocs" className='link'>&gt;Sneakers for Women</Link></p>
                <p><Link to="/crocs" className='link'>&gt;Sneakers for Kid</Link></p>
                <p><Link to="/crocs" className='link'>&gt;Air Max Shoes</Link></p>
                <p><Link to="/crocs" className='link'>&gt;Jordan Shoes</Link></p>
  </div>
  <div className='brands'>
        <p className='para'>BRANDS</p>
                  <p><Link to="/crocs" className='link'>&gt;Adidas</Link></p>
                  <p><Link to="/puma" className='link'>&gt;Puma</Link></p>
                  <p><Link to="/crocs" className='link'>&gt;Louis Voitton</Link></p>
                  <p><Link to="/crocs" className='link'>&gt;Crocs</Link></p>
                  <p><Link to="/crocs" className='link'>&gt;Clarks</Link></p>
                  <p><Link to="/crocs" className='link'>&gt;Skechers</Link></p>
                  <p><Link to="/crocs" className='link'>&gt;Deckers Brands</Link></p>
                  <p><Link to="/crocs" className='link'></Link></p>
    </div>
    </div>
    <div className='bottom-right'>
      {products.map((product) => (
        <div key = {product} className='card'>
          <img src={product.image} alt={product.name} className='image'/>
          <h3 className='sizes' >{product.sizes} </h3>
      <h3 className='name'>{product.name} </h3>
      <div className='priceContainer'>
        <span className='oldPrice'>Ksh.{product.oldPrice}</span>
        <span className='newPrice'>Ksh.{product.newPrice}</span>
      </div>
      <div className='card-style'>
   <ul className='menu'>
                  <li className='menuItem' ><a href='https://x.com/HigalEkomb52804' target='_blank' rel='noopener noreferrer' style={{ fontSize: "40px", color: 'gray' }}><VisibilityOutlined/></a></li>
                  <li className='menuItem' ><a href='https://wa.me/+254742106109' target='_blank' rel='noopener noreferrer' style={{ fontSize: "40px", color: 'green' }}><WhatsApp/></a></li>
                  <li className='menuItem'><a href='https://x.com/HigalEkomb52804' target='_blank' rel='noopener noreferrer' style={{ fontSize: "40px", color: 'grey' }}><ShoppingBasket/></a>   </li>
                  <li className='menuItem' ><a href='https://wa.me/+254742106109' target='_blank' rel='noopener noreferrer' style={{ fontSize: "40px", color: 'blue' }}>
                  <Facebook/></a></li>
                  </ul>
   </div>
        </div>

      ))

      }

    </div>
    </div>
    </div>
  )
}

export default Slips
