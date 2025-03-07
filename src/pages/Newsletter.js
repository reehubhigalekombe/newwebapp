import React from 'react';
import "../styles/newsletter.css"
import photo from "../assests/slip4.webp"
function Newsletter() {
 
  return (
    <div  className='newsletter'>
      <div className='top'>
      <h1>MK COLLECTIONS</h1>
      <h2>All your brand needs in Shoes Covered</h2>
      <p>Kindly enter your information below for updates, promotion and Verified Market Reports</p>
      
      </div>
      <div className='bottom'>
        <div className='partionSide'>
        </div>
        <div className='partionCenter'>
        <form action='mailto: elonreaganp@gmail.com' id='contact-form' method='post' styles={{backgroundImage: `url(${photo})`}}>
          <label htmlFor='name'><span style={styles.required}>*</span>First Name:</label><br/>
          <input type='text'  placeholder='first name' />
          <label htmlFor='name'><span style={styles.required}>*</span>Last Name:</label><br/>
          <input type='text'  placeholder='last name' />
        <label htmlFor='email'><span style={styles.required}>*</span>Email:</label><br/>
        <input type='email' placeholder='Enter email address' />
        <span style={styles.required}>*</span>
        <label htmlFor='number'>Phone No.: </label><br/>
        <input type='tel' placeholder='+254 794 517132'/>
        <button type='submit' className='buttonn'>Subcribe</button>
      </form>
        </div>
        <div className='partionSide'>

</div>
      </div>
    </div>
  )
}
const styles = {
  required: {
    color: "red"
  }
}

export default Newsletter

    
