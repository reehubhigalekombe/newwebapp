import React from 'react'
import "../styles/crocs.css"
import puma01 from "../assests/kidr.jpg";
import puma02 from "../assests/puma2.webp";
import puma03 from "../assests/puma3.webp";
import puma04 from "../assests/puma5.webp";
import puma05 from "../assests/puma5.webp";
import puma06 from "../assests/puma6.webp";
import puma07 from "../assests/puma1.webp";
import puma08 from "../assests/puma1.webp";
import { Link } from 'react-router-dom';
import ShoppingBasket from '@mui/icons-material/ShoppingBasket';
import WhatsApp from '@mui/icons-material/WhatsApp';
import VisibilityOutlined from '@mui/icons-material/Visibility';
const products = [
  { id: 1, image: puma01, sizes: " Sizes: 35-43", name: "Puma", oldPrice: 1299, newPrice: 999 },
  { id: 2, image: puma02, sizes: " Sizes: 35-43", name: "Puma", oldPrice: 1299, newPrice: 999 },
  { id: 3, image: puma03, sizes: " Sizes: 35-43", name: "Puma", oldPrice: 1299, newPrice: 999 },
  { id: 4, image: puma04, sizes: " Sizes: 35-43", name: "Puma", oldPrice: 1299, newPrice: 999 },
  { id: 5, image: puma05, sizes: " Sizes: 35-43", name: "Puma", oldPrice: 1299, newPrice: 999 },
  { id: 6, image: puma06, sizes: " Sizes: 35-43", name: "Puma", oldPrice: 1299, newPrice: 999 },
  { id: 7, image: puma07, sizes: " Sizes: 35-43", name: "Puma", oldPrice: 1299, newPrice: 999 },
  { id: 8, image: puma08, sizes: " Sizes: 35-43", name: "Puma", oldPrice: 1299, newPrice: 999 },

];
function Crocs() {
  return (
    <div className='crocs'>
      <div className='crocs-top'>
        <ul className='menu'>
          <li className='menuItem'><Link to="/home" className='link'>Home</Link></li>
          <li style={{ color: "white" }}>&gt;&gt;</li>
          <li className='menuItem'><Link to="/crocs" className='link'>Crocs</Link></li>
        </ul>
      </div>
      <div className='bottom'>
        <div className='bottom-left'> 
            <div className='brands'>
                    <p className='para'>BRANDS</p>
                    <p><Link to="/adidas" className='link'>&gt;Adidas</Link></p>
                    <p><Link to="/puma" className='link'>&gt;Puma</Link></p>
                    <p><Link to="/louis" className='link'>&gt;Louis Voitton</Link></p>
                    <p><Link to="/crocs" className='link'>&gt;Crocs</Link></p>
                    <p><Link to="/clarks" className='link'>&gt;Clarks</Link></p>
                    <p><Link to="/skechers" className='link'>&gt;Skechers</Link></p>
                    <p><Link to="/deckers" className='link'>&gt;Deckers Brands</Link></p>
                  </div>
        </div>
        <div className='bottom-right'>
          {products.map((product) => (
            <div key={product.id} className='card'>
              <img src={product.image} alt={product.name} className='image' />
              <h3 className='size'> {product.sizes} </h3>
              <h3 className='name'>{product.name}</h3>
              <div className='priceContainer'>
                <span className='oldPrice'>Ksh.{product.oldPrice}</span>
                <span className='newPrice'>Ksh.{product.newPrice}</span>
              </div>
              <div >
                <ul className='menu'>
                  <li className='menuItem' ><a href='https://x.com/HigalEkomb52804' target='_blank' rel='noopener noreferrer' style={{ fontSize: "40px", color: 'gray' }}><VisibilityOutlined /></a></li>
                  <li className='menuItem' ><a href='https://wa.me/+254742106109' target='_blank' rel='noopener noreferrer' style={{ fontSize: "40px", color: 'green' }}><WhatsApp /></a></li>
                  <li className='menuItem'><a href='https://x.com/HigalEkomb52804' target='_blank' rel='noopener noreferrer' style={{ fontSize: "40px", color: 'grey' }}><ShoppingBasket /></a>   </li>
                </ul>
              </div>
            </div>
          )

          )}

        </div>
      </div>

    </div>
  )
}

export default Crocs;
