import React, {useState} from 'react';
import "../styles/navbar.css";
import ShoppingCart  from '@mui/icons-material/ShoppingCart';
import ReorderIcon from '@mui/icons-material/Reorder';
import Notifications  from '@mui/icons-material/Notifications';
import { Link } from 'react-router-dom';
import Auth from '../pages/Auth';
function Navbar({onSearch}) {
  const[openLinks, setOpenLinks] = useState(false);
  const [showAuth, setShowAuth] = useState(false)
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
    <nav className='navbar'>
      <div className='nav-top'>
<div className='left'>


  <h3>MK COLLECTIONS</h3>
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
  <span className='contact'>+254 794 517132</span>
<span className='icon'><ShoppingCart/></span>
<span className='icon'><Notifications/></span>
<button className='menu-toggle' onClick={toggleNavbar} ><ReorderIcon/></button>
<button className='auth-button'  onClick={() => setShowAuth(!showAuth)}
>{showAuth? "Close" : "SIGNIN"}</button>
</div>
      </div >
      <div className={`nav-bottom ${openLinks ? "open" : ""}  `}>
      <Link to="/home" className='link'>Home </Link>
      <Link to="/men" className='link'>Men</Link>
      <Link to="/women" className='link'>Women</Link>
      <Link to="/kids" className='link'>Kids</Link>
      <Link to="/sport" className='link'>Sport</Link>
      <Link to="/official" className='link'>Official</Link>
      <Link to="/sneakers" className='link'>Sneakers</Link>
      <Link to="/slips" className='link'>Slips</Link>
      <Link to="/location" className='link'>Location</Link>
      <Link to="/newsletter" className='link'>Newsletter</Link>
      </div>
      {showAuth && <Auth/>}
    </nav>
  )
}
export default Navbar
