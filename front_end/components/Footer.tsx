import React from 'react'
import './style.css'; // Import the CSS file
type Props = {}

const Footer = (props: Props) => {
  return (
    <div className=' h-2/5  bg-neutral-900 text-white px-20 py-5 w-screen'>
      <div className='between'>
        <div className='between' >
          <div>
            3legant
          </div>
          <div>
          Gift & Decoration Store
          </div>
        </div>
      <div className=' font-light between gap-4'>
            <p>Home</p>
            <p>Shop</p>
            <p>Products</p>
            <p>Blog</p>
            <p>Contact Us</p>
        </div>
      </div>
      <div>
        <div>

        </div>
      </div>
    </div>
  )
}

export default Footer