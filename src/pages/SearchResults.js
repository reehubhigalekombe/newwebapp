
import React, {useState, useEffect} from 'react'
import { useLocation} from 'react-router-dom';
import "../styles/search.css"
import Airforce from "../assests/wm2.jpg"
import Slippers from "../assests/wm3.jpg";
import Open from "../assests/kidq.jpg";
import Sneekers  from "../assests/logo.jpg";
import WhatsApp  from '@mui/icons-material/WhatsApp';
import  VisibilityOutlined  from '@mui/icons-material/Visibility';
import ShoppingBasket  from '@mui/icons-material/ShoppingBasket';
import Facebook from '@mui/icons-material/Facebook';
import Rubber from "../assests/slip6.webp";
import pamz from "../assests/slip8.webp"
import timber from "../assests/slip01.webp";
import crocodile from "../assests/slip26.webp";
import mules from "../assests/slip24.webp";
import tomford from "../assests/slip23.webp";
import tassel from "../assests/slip22.webp";
import johnfoster  from "../assests/slip21.webp"
import Gamboots from "../assests/slip3.webp";
import Sports  from "../assests/slips om.webp";
function SearchResults() {
    const location = useLocation();
    const [query, setQuery] = useState("")
    const [filteredShoes, setFilteredShoes] = useState([]);
    const shoes = [
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
    ];
    useEffect (() => {
        const params = new URLSearchParams(location.search);
        const searchQuery = params.get("query") || "";
        setQuery(searchQuery);
        const results = shoes.filter((shoe) => 
            shoe.name.toLocaleLowerCase().includes(searchQuery.toLocaleLowerCase())
     );
        setFilteredShoes(results);
    }, [location.search] 
) 
  return (
    <div className='search'>
        <h3>Your Search Results for: "{query}"</h3>
        <div className='results' >
            {filteredShoes.length > 0 ? (
                filteredShoes.map((shoe) => (
                    <div key={shoe.id} className='shoe-item'>
                        <img src={shoe.image} alt={shoe.name} className='image' />
                        <div>
                        <h3 className='sizes' >{shoe.sizes} </h3>
                        <h3 className='name'>{shoe.name} </h3>
                        </div>
                        <div className='priceContainer'>
        <span className='oldPrice'>Ksh.{shoe.oldPrice}</span>
        <span className='newPrice'>Ksh.{shoe.newPrice}</span>
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
                ) ) 
            ): (
                    <p>No matching shoes found</p>
                )
            
            }

        </div>
        
      
    </div>
  )
}

export default SearchResults
