import React from 'react'

export const DisplayBox = () => {
  return (
    <div className=''>
        <img>Location Image</img>
        <div className=''>
        <p>Price</p>
        <p>Location</p>
        </div>
        <div>
            <button type='submit' onClick={AddToCart}>Add</button>
        </div>
        
    </div>
  )
}
