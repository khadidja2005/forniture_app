"use client"
import { jwtDecode } from 'jwt-decode';
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { CiShoppingCart } from "react-icons/ci";
import useNavigate from 'react-router-dom'
import Image from 'next/image';
type Props = {}

const Navbar = (props: Props) => {
  const router = useRouter()
  const [user , setUser] = useState(null)
  const [token, setToken] = useState<string |null>(null)
  const gotosignin =()=> {
     router.push('/SignIn')
   }
   const gotoaddproduct =()=> {
    router.push('/AddProduct')
  }
   useEffect(() => {
    const storedToken = localStorage.getItem("access_token")
    if (storedToken) {
      setToken(storedToken)
      setUser(jwtDecode(storedToken))
    }
  }, [])
  console.log(user) 
  return (
    <>
      <div className='flex justify-between items-center px-8 py-4'>
        <div>
          <p className=' text-3xl font-bold '>3legant.</p>
        </div>
        <div className='  text-[16px] pr-10'>
          {token ? 
                <ul className=' flex justify-between items-center gap-6 pr-4 text-zinc-500'>
                    <li className="hover:text-zinc-950">Home</li>
                    <li className="hover:text-zinc-950">Shop</li>
                    <li className="hover:text-zinc-950">Blog</li>
                    {user && user.role == "admin" && <li className="hover:text-zinc-950 cursor-pointer" onClick={gotoaddproduct}>Add product</li> }
                    {user && user.role == "admin" && <li className="hover:text-zinc-950">Add Blog</li> }
                    <div className='flex ml-10 justify-center items-center gap-6 '>
                      <CiShoppingCart className=' size-8 text-slate-900 font-semibold' />
                      {user && <div className=' flex justify-center items-center border border-slate-500 rounded-md px-2 py-1'>
                        <Image src={user.photourl} alt='profile' width={40} height={40} className=' rounded-2xl border border-slate-900' />
                        <div className=' mx-2 text-slate-900 text-sm'>
                          <p>{user.username}</p>
                          <p>{user.role}</p>
                        </div>
                      </div> }
                    </div> 
                  </ul>
          : 
          <ul className=' flex justify-between items-center gap-6 pr-4 text-zinc-500'>
          <li className="hover:text-zinc-950">Home</li>
          <li className="hover:text-zinc-950">About Us</li>
          <li className="hover:text-zinc-950">Contact Us</li>
          <li className="hover:text-zinc-950">NewsLetter</li>        
          <button className='border-zinc-400 border  text-gray-700 px-4 py-2 rounded-md hover:bg-slate-500 hover:text-white' onClick={gotosignin}>Sign In</button>
        </ul>}
          
        </div>
      </div>

    </>
  )
}

export default Navbar