import React from 'react'
import ban from '../../../public/images/landing_page/livrm6.png'
import Image from 'next/image'
import './style.css'; 
type Props = {}

const Banner = (props: Props) => {
  return (
    <div className=' between w-full h-full'>
        <div className=' w-2/3'>
         <Image src={ban} alt='banner'/>
        </div >
        <div className=' mr-40 ml-14 flex flex-col gap-4'>
        <p className=' text-xl text-blue-500'>SALE UP TO 35% OFF</p>
        <p className=' text-3xl font-semibold'>HUNDREDS of New lower prices!</p>
        <p >It’s more affordable than ever to give every room in your home a stylish makeover</p>
        </div>
    </div>
  )
}

export default Banner