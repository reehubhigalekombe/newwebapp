import React from 'react';
import "../styles/navbar.css";
import  Search  from '@mui/icons-material/Search';
import ShoppingCart  from '@mui/icons-material/ShoppingCart';
import ReorderIcon from '@mui/icons-material/Reorder';
import Notifications  from '@mui/icons-material/Notifications';
import { Link } from 'react-router-dom';
function Navbar() {
  return (
    <div className='navbar'>
      <div className='nav-top'>
<div className='left'>
  <h3>MK COLLECTIONS</h3>
</div>
<div className='middle'>

</div>
<div className='right'>
<span style={styles.contact}>+254 794 517132</span>
<span style={styles.icon}><ShoppingCart/></span>
<span><Search/></span>
<span><Notifications/></span>
</div>
      </div>
      <div className='nav-bottom'>
        <ul style={styles.menu}>
          <li style={styles.menuItem}><Link to="/home" className='link'>Home </Link></li>
          <li style={styles.menuItem}><Link to="/men" className='link'>Men</Link></li>
          <li style={styles.menuItem}><Link to="/women" className='link'>Women</Link></li>
          <li style={styles.menuItem}> <Link to="/kids" className='link'>Kids</Link></li>
          <li style={styles.menuItem}> <Link to="/sport" className='link'>Sport</Link></li>
          <li style={styles.menuItem}><Link to="/official" className='link'>Official</Link> </li>
          <li style={styles.menuItem}><Link to="/sneakers" className='link'>Sneakers</Link></li>
          <li style={styles.menuItem}><Link to="/slips" className='link'>Slips</Link></li>
          <li style={styles.menuItem}><Link to="/newsletter" className='link'>Newsletter</Link></li>
          <button><ReorderIcon/></button>
        </ul>
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
