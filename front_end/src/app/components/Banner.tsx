import React from 'react'
import ban from '../../../public/images/landing_page/livrm6.png'
import Image from 'next/image'
import './style.css'; 
type Props = {}

const Banner = (props: Props) => {
  return (
    <div className='flex md:justify-between md:flex-row items-center flex-col w-full h-full'>
        <div className=' w-full'>
         <Image src={ban} alt='banner' className=' h-full w-full'/>
        </div >
        <div className=' md:mr-40 md:ml-14 mx-6 flex flex-col gap-8 my-10'>
        <p className=' sm:text-xl text-lg text-blue-500'>SALE UP TO 35% OFF</p>
        <p className=' sm:text-3xl text-2xl font-semibold'>HUNDREDS of New lower prices!</p>
        <p >It’s more affordable than ever to give every room in your home a stylish makeover</p>
        </div>
    </div>
  )
}

export default Banner