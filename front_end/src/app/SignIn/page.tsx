"use client";
import Image from 'next/image'
import React, { useState } from 'react'
import livroom from "../../../public/images/landing_page/livroom3.png"
import { MdOutlineVisibility } from "react-icons/md";
import { MdOutlineVisibilityOff } from "react-icons/md";
import { useRouter } from 'next/navigation';
export default function SignIn () {
  const router = useRouter()
  const [visible , setVisible] = useState(true)
  const togglepassword = ()=> {
    setVisible(!visible)
  }
  const gotosignup = ()=> {
    router.push('/SignUp')
  }
  const gotohome = ()=> {
    router.push('/')
  }
  return (
    <div className=' h-screen w-screen'>
      <div className=' flex flex-row justify-center items-center '>
        <div className=' relative w-full'>
          <p className=' text-3xl absolute font-semibold left-1/4 my-4 cursor-pointer' onClick={gotohome}>3legant.</p>
          <Image src={livroom} alt='livroom' className='h-screen w-4/5' />
        </div>
       
       <div className=' flex flex-col justify-center w-[100%] mr-20 px-10'>
       <p className=' text-3xl my-5 font-semibold'>Sign In</p>
       <p className=' text-gray-500'>Don’t have an accout yet? <span onClick={gotosignup} className=' text-green-500 font-semibold cursor-pointer'>Sign Up</span></p>
       <input type='email' placeholder='Enter your email' className=' mr-20 py-3 px-4 my-4 rounded-lg bg-gray-100 w-[80%]' />
       <div className=' relative w-[80%] '>
        
        <input type={visible ? "password":"text" } placeholder='Password' className=' mr-20 py-3 px-4 my-4 rounded-lg bg-gray-100 relative w-full' />
        {visible?<MdOutlineVisibility className=' absolute right-4 transform bottom-1/2 translate-y-1/2 size-5 text-gray-500 z-10' onClick={togglepassword} /> :
        <MdOutlineVisibilityOff className=' absolute right-4 transform bottom-1/2 translate-y-1/2 size-5 text-gray-500 z-10' onClick={togglepassword} />  }
        
       </div>
        
        <button className=' my-8 bg-zinc-900 text-white mr-20 py-3 px-4 rounded-lg w-[80%]'>Sign In</button>
       </div>
      </div>
     
    </div>
  )
}