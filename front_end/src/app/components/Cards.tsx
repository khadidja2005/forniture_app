import React from 'react'
import { CiDeliveryTruck } from "react-icons/ci";
import { CiCreditCard2 } from "react-icons/ci";
import { CiLock } from "react-icons/ci";
import { LiaPhoneSolid } from "react-icons/lia";
import './style.css';
type Props = {}

const Cards = (props: Props) => {
  return (
    <div>
        <div className=' lg:flex lg:justify-between lg:items-center sm:gap-8 grid  mx-6  sm:grid-cols-2 grid-cols-1 gap-4 my-20'>
            <div className=' class'>
            <CiDeliveryTruck size={40} />
            <p className=' text-md font-medium mt-4 mb-2'>Free Shipping</p>
            <p className=' text-xs text-gray-500'>Order above $200</p>
            </div>
            <div className=' class'>
            <CiCreditCard2 size={40}/>
            <p className=' text-md font-medium mt-4 mb-2'>Money-back</p>
            <p className=' text-xs text-gray-500'>30 days guarantee</p>
            </div>
            <div className='class'>
            <CiLock size={40}/>
            <p className=' text-md font-medium mt-4 mb-2'>Secure Payments</p>
            <p className=' text-xs text-gray-500'>Secured by Stripe</p>
            </div>
            <div className=' class'>
            <LiaPhoneSolid size={40}/>
            <p className=' text-md font-medium mt-4 mb-2'>24/7 Support</p>
            <p className=' text-xs text-gray-500 flex-nowrap'>Phone and Email support</p>
            </div>
        </div>
    </div>
  )
}

export default Cards