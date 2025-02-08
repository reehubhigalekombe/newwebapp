import React from 'react'
import { useParams } from 'react-router-dom'
import {products} from "../pages/Men";
import "../styles/shoedetails.css"
function ShoeDetails() {
    const {id } = useParams()
    const product =  products.find((item) => item.id === parseInt(id));
    if(!product) {
        return <h3>Product is not found!</h3>
    }
  return (
    <div className='shoedetails'>
      <img src={product.image}  alt={product.name} className='product-image'  />
      <h2>{product.name}</h2>
      <p>{product.sizes}</p>
      <p className='price'>
<span className='oldPrice'>Ksh.{product.oldPrice}</span>
<span className='newPrice'>Ksh.{product.newPrice}</span>
      </p>
      <label>Quantity</label>
      <input type='number' min="1"  defaultValue={1}/>
      <button className='buy'>Buy Now</button>
      <button className='add'>Add to Cart</button>
    </div>
  )
}

export default ShoeDetails
