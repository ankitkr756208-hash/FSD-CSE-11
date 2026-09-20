import React from 'react'

const Items = ({ title, price, image }) => {
  return (
    <div className='items'>
      <img src={image} height={100} alt="item-image" />

      <h2>Title: {title}</h2>
      <h3>Price: ₹{price}/-</h3>

      <button className='btn'>Add To Cart</button>
    </div>
  )
}

export default Items