import React from 'react'
import "../styles/whatsappButton.css"
function FloatingButton() {
    const defaultMessage = "Hello our esteemed Customers! Welcome to MK Collection: How can I help you"

  return (
    <div className='whatsappButton'>
      <a
       href={`https://wa.me/${254742106109}?text=${encodeURIComponent(
        defaultMessage
       )}`} target='_blank' rel='noopener noreferrer'  className='anchorr' >
        <img src='https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg'
        alt='WhatsApp' className='myimage'
        />
      </a>
    </div>
  )
}

export default FloatingButton;
