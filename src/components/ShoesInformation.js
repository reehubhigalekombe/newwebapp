import React, {useState} from 'react'
import "../styles/shoesInformation.css"
import { useParams, useNavigate } from 'react-router-dom';
import Airforce from "../assests/men2.jpg"
import Slippers from "../assests/men3.jpg";
import Open from "../assests/kidq.jpg";
import Gamboots from "../assests/slip3.webp";
import Sneekers  from "../assests/men1.jpg";
import Sports  from "../assests/slips om.webp";
import Rubber from "../assests/slip6.webp";
import pamz from "../assests/slip8.webp"
import timber from "../assests/slip01.webp";
import crocodile from "../assests/slip26.webp";
import mules from "../assests/slip24.webp";
import tomford from "../assests/slip23.webp";
import tassel from "../assests/slip22.webp";
import johnfoster  from "../assests/slip21.webp"
const shoes = [
    {id: 1,  image: Sneekers, sizes: "Sizes: 37 - 44", name: "High-Heel Closed",  Price: 1400, },
    {id: 2, image: Airforce, sizes: "Sizes: 37 - 44", name: "Slay-Shoes", Price: 1399 },
    {id: 3, image: Slippers, sizes: "Sizes: 37 - 44",  name: "Leisure", PerformanceEventTimingrice: 1299 },
    {id: 4, image: Open, sizes: "Sizes: 37 - 44",  name: "Airforce",  Price: 123},
    {id: 5, image: Gamboots, sizes: "Sizes: 37 - 44", name: "Sneaker-Black", Price: 123,},
    { id: 6, image: Rubber, sizes: "Sizes: 37 - 44",  name: "Rubber-Ladies Black", Price: 123},
    {id: 7, image: Sports,  sizes: "Sizes: 37 - 44", name: "High-Heeel Open", Price: 123},    
    { id: 8, image: timber,  sizes: "Sizes: 37 - 44", name: "Timber-Land Reinforced", Price: 123 },   
    { id: 9, image: pamz,  sizes: "Sizes: 37 - 44", name: "Louis Vuiton", Price: 123},    
    { id: 10, image: mules,  sizes: "Sizes: 37 - 44", name: "Mules", Price: 123},   
    { id: 11, image: tassel,  sizes: "Sizes: 37 - 44", name: "Tassel", Price: 123,},   
    { id: 12, image: tomford,  sizes: "Sizes: 37 - 44", name: "Tom Ford", Price: 123 },   
    { id: 13, image: johnfoster,  sizes: "Sizes: 37 - 44", name: "John Foster", Price: 123 },   
    { id: 14, image: crocodile,  sizes: "Sizes: 37 - 44",  name: "Crocodile", Price: 123,  },  
]
function ShoesInformation() {
    const {id} =useParams();
    const shoe = shoes.find((shoe) =>shoe.id === parseInt(id))
    const [quantity, setQuantity] = useState(1)
    const navigate = useNavigate()
    if (!shoe) return <h2>The your are searching cannot be found</h2>
    const handleOrder = () => {
        alert(`You've ordered ${quantity} pairs of ${shoe.name}`);
        navigate("/")
    }
  return (
    <div className='shoesInformation'>
      <h1>{shoe.name}</h1>
      <img src={shoe.image} alt={shoe.name} width='200'/>
      <p>Price: Ksh.{shoe.Price}</p>
      <p>Available Sizes: ${shoe.sizes}</p>
      <p>Mode of Payment:
      <select>
        <option>Cash</option>
        <option>MPESA</option>
        <option>Paypal</option>
      </select>
      </p>
      <label>
        The number of Shoes chosed:
      </label>
      <input type='number'
       value={quantity}
       min={1}
       onChange={(e) => setQuantity(e.target.value) } 
       />
        <button onClick={handleOrder}  >Order</button>  
      
    </div>
  )
}

export default ShoesInformation
