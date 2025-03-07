import React, {useState}from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import {products} from "../Data/products";
import "../styles/shoedetails.css"
import WhatsApp  from '@mui/icons-material/WhatsApp';
function ShoeDetails() {
    const {id } = useParams()
    const [quantity, setQuantity] = useState(1)
    const [size, setSize] = useState(25)
    const product =  products.find((item) => item.id === parseInt(id));
    const navigate = useNavigate()
    if(!product) {
        return <h3>Product is not found!</h3>
    }
    const  handleOrder = () => {
      alert(`"You have ordered ${quantity} pairs of ${product.name}`)
      navigate("/")
    }
      const whatsAppNumber = "+254742106109";
      const whatsAppMessage  =  `Hello, I would like to order ${quantity} pairs of ${product.name} size ${product.size}. Is it available`
      const whatsAppURL = `http://wa.me/${whatsAppNumber}?text=${encodeURIComponent(whatsAppMessage)}  `
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
      <input type='number'
      value={quantity}
       min={1}
       step={1}
       onChange={(e) => setQuantity(Math.max(1, Number(e.target.value))) }
         defaultValue={1}/><br/>
      
      <label>
        The size os shoes:
      </label>
      <input type='number'
       value={size}
       min={25}
       max={47}
       step={1}

       onChange={(e) => {
        const newSize = Number(e?.target?.value);
        if  (newSize >=25 && newSize <=47) {
          setSize(newSize)
        }
       }
       } 
       /> <br/>
        <button onClick={handleOrder}  >ORDER</button> <br/>

        <label>Order Via WhatsApp: </label>
<button > <a href={whatsAppURL} target='_blank' rel='noopener noreferrer'  ><WhatsApp style={{color: "green"}} /></a></button>
        <p>Mode of Payment:</p>
        <div className='payment-methods'>
    <button ><a href='https://x.com/HigalEkomb52804' target='_blank' rel='noopener noreferrer'>MPESA</a></button>
    <button ><a href='https://x.com/HigalEkomb52804' target='_blank' rel='noopener noreferrer'>PAYPAlL</a></button>
    <button ><a href='https://x.com/HigalEkomb52804' target='_blank' rel='noopener noreferrer'>MASTER CARD</a></button>
        </div>  
    </div>
  )
}

export default ShoeDetails;
