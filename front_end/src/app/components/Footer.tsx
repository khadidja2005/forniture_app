import React from 'react'
import './style.css'; // Import the CSS file
import insta from "../../../public/images/icons/Group 77.svg"
import fb from "../../../public/images/icons/Group 78.svg"
import yt from "../../../public/images/icons/Group 79.svg"
import Image from 'next/image';
type Props = {}

const Footer = (props: Props) => {
  return (
    <div className=' h-2/5  bg-neutral-900 text-white sm:px-32 px-10 py-10 w-screen'>
      <div className=' between'>
        <div className='between gap-6' >
          <div className=' font-medium text-2xl'>
            3legant
          </div>
          <div className=' text-sm'>
          Gift & Decoration Store
          </div>
        </div>
      <div className=' font-light between gap-4 text-sm'>
            <p>Home</p>
            <p>Shop</p>
            <p>Products</p>
            <p>Blog</p>
            <p>Contact Us</p>
        </div>
      </div>
      <div className='between mt-16  border-t pt-8 border-gray-400 '>
        <div className=' between gap-6'>
         <p className='text-sm font-light'>Copyright © 2023 3legant. All rights reserved</p>
         <div className='flex justify-between items-center gap-4 sm:my-0 my-4' >
          <p className=' text-xs font-bold'>Privacy Policy</p>
         <p className=' text-xs font-bold'>Terms of Use</p>
         </div>

        </div>
        <div className='flex justify-between items-center gap-3 sm:my-0 my-4'>
        <Image src={insta} alt='insta' />
        <Image src={fb} alt='fb'/>
        <Image src={yt} alt='yt'/>
        </div>
      </div>
    </div>
  )
}

export default Footer