import React, {useState} from 'react';
import "../styles/navbar.css";
import ShoppingCart  from '@mui/icons-material/ShoppingCart';
import ReorderIcon from '@mui/icons-material/Reorder';
import Notifications  from '@mui/icons-material/Notifications';
import { Link } from 'react-router-dom';
function Navbar({onSearch}) {
  const[openLinks, setOpenLinks] = useState(false);
  const toggleNavbar = () => {
    setOpenLinks(!openLinks)

  }
  const [query, setQuery] = useState("");
  const handleSearch = (e) => {
    e.preventDefault();
    if (query) {
      window.location.href = `/search?query=${query}`
    }
  }
  return (
    <div className='navbar'>
      <div className='nav-top'>
<div className='left' id={openLinks ? "open" : "close"}>
  <h3>MK COLLECTIONS</h3>
  <div className='hiddenLinks'>
        <Link to="/home" className='link'>Home </Link>
      <Link to="/men" className='link'>Men</Link>
      <Link to="/women" className='link'>Women</Link>
      <Link to="/kids" className='link'>Kids</Link>
      <Link to="/sport" className='link'>Sport</Link>
      <Link to="/official" className='link'>Official</Link>
      <Link to="/sneakers" className='link'>Sneakers</Link>
      <Link to="/slips" className='link'>Slips</Link>
      <Link to="/gifts" className='link'>Gifts</Link>
      <Link to="/shaz" className='link'>ShoesInformation</Link>
      <Link to="/newsletter" className='link'>Newsletter</Link>

        </div>

</div>
<div className='middle'>
<div className='search-bar'>
    <input type='text' placeholder='Search for an pair....'
      value={query}
      onChange={(e) => setQuery(e.target.value) }
      />
      <button onClick={handleSearch}>Search</button>

    </div>
</div>
<div className='right'>
  <span style={styles.contact}>+254 794 517132</span>
<span style={styles.icon}><ShoppingCart/></span>
<span style={styles.icon}><Notifications/></span>


</div>
      </div>
      <div className='nav-bottom'>
      <Link to="/home" className='link'>Home </Link>
      <Link to="/men" className='link'>Men</Link>
      <Link to="/women" className='link'>Women</Link>
      <Link to="/kids" className='link'>Kids</Link>
      <Link to="/sport" className='link'>Sport</Link>
      <Link to="/official" className='link'>Official</Link>
      <Link to="/sneakers" className='link'>Sneakers</Link>
      <Link to="/slips" className='link'>Slips</Link>
      <Link to="/newsletter" className='link'>Newsletter</Link>
      <button onClick={toggleNavbar}><ReorderIcon/></button>
      </div>
    </div>
  )
}
const styles = {
  contact: {
    fontSize: "20px",
    fontWeight: "bold",
    fontFamily: "Arial, Helvetica, sans-serif"
  
  },
  icon: {
    fontSize: "26px",
    color: "hsl(24, 90%, 57%)"
  },
 menu: {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  listStyleType: "none",
  margin: "0"
 },
 menuItem: {
  margin: "0  15px"
 },
 link: {
  textDecoration: "none",
  color: "white",
  fontSize: "16px",
  transition: "color 0.3s",
  fontFamily: "Arial, Helvetica, sans-serif"
 },
 linkHover: {
  color: "black"
 }
}
export default Navbar
