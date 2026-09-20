import React from 'react'

const Saman = ({ title, price, image }) => {
  return (
    <div className='items'>
      <div className='item-image'>
        <img
          src={image}
          alt={title}
          onError={(event) => {
            event.currentTarget.style.display = 'none'
          }}
        />
        <span className='image-fallback'>{title.slice(0, 2)}</span>
      </div>
      <div className='item-details'>
       
        <h2>{title}</h2>
        <div className='item-footer'>
          <h3>₹{price}</h3>
          <button type='button'>Add to cart</button>
        </div>
      </div>
    </div>
  )
}

export default Saman