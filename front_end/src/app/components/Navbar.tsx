"use client"
import { useRouter } from 'next/navigation'
import React from 'react'
import useNavigate from 'react-router-dom'
type Props = {}

const Navbar = (props: Props) => {
  const router = useRouter()
  const gotosignin =()=> {
     router.push('/SignIn')
   }
  return (
    <>
      <div className='flex justify-between items-center px-8 py-4'>
        <div>
          <p className=' text-3xl font-bold '>3legant.</p>
        </div>
        <div className='  text-[16px] pr-10'>
          <ul className=' flex justify-between items-center gap-6 pr-4 text-zinc-500'>
            <li className="hover:text-zinc-950">Home</li>
            <li className="hover:text-zinc-950">About Us</li>
            <li className="hover:text-zinc-950">Contact Us</li>
            <li className="hover:text-zinc-950">NewsLetter</li>
            <button className='border-zinc-400 border  text-gray-700 px-4 py-2 rounded-md hover:bg-slate-500 hover:text-white' onClick={gotosignin}>Sign In</button>
          </ul>
          
        </div>
      </div>

    </>
  )
}

export default Navbar