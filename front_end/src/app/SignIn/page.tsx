"use client";
import Image from 'next/image'
import React, { ChangeEvent, useState } from 'react'
import livroom from "../../../public/images/landing_page/livroom3.png"
import { MdOutlineVisibility } from "react-icons/md";
import { MdOutlineVisibilityOff } from "react-icons/md";
import { useRouter } from 'next/navigation';
import bcrypt from 'bcryptjs';
import axios from 'axios'
import { jwtDecode } from 'jwt-decode';
export default function SignIn () {
  const router = useRouter()
  const [visible , setVisible] = useState(true)
  const [loading , setloading] = useState(false)
  const [error , seterror] = useState<string | null>(null)
  const [success , setsuccess] = useState<string | null>(null)
  const [form , setform] = useState({
    email:"",
    password:"",
  })
  const handelform =(e: ChangeEvent<HTMLInputElement>)=>{
    setform({...form , [e.target.name]:e.target.value})
  }
  const togglepassword = ()=> {
    setVisible(!visible)
  }
  const gotosignup = ()=> {
    router.push('/SignUp')
  }
  const gotohome = ()=> {
    router.push('/')
  }
  const handelSubmit = async ()=>{
    setloading(true);
    seterror(null);
    console.log(form)
    if (!form.email || !form.password) {
      seterror("All fields are required.");
      setloading(false);
      return;
  }
    try{
     const response = await axios.post("http://localhost:5000/auth/signin" , {email : form.email , password : form.password})
     console.log(response)
     if (response.data !== "user does not exist") {
      setsuccess("user registred successfully")
      localStorage.setItem("access_token" , response.data.access_token)
      // const decoded = jwtDecode(response.data.access_token)
      // console.log(decoded)
      // setTimeout(()=> {
      //   router.push('/'); 
      // }, 1000)
  } else {
      seterror("Something went wrong. Please try again.");
      setsuccess(null)
  }
    } catch {
      seterror("An error occurred during signup. Please try again.");
      setsuccess(null)
    }
   finally {
    setloading(false)
   }
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
       <input 
          type='email' 
          placeholder='Enter your email' 
          className=' mr-20 py-3 px-4 my-4 rounded-lg bg-gray-100 w-[80%]'
          name='email'
          value={form.email}
          onChange={handelform} />
       <div className=' relative w-[80%] '>
        
        <input 
          type={visible ? "password":"text" } 
          placeholder='Password' 
          name='password'
          className=' mr-20 py-3 px-4 my-4 rounded-lg bg-gray-100 relative w-full'
          value={form.password}
          onChange={handelform} />
          {error && <p className=' text-red-600 my-4'>{error}</p>}
          {success && <p className=' text-green-600 my-4'>{success}</p>}
        {visible?<MdOutlineVisibility className=' absolute right-4 transform bottom-1/2 translate-y-1/2 size-5 text-gray-500 z-10' onClick={togglepassword} /> :
        <MdOutlineVisibilityOff className=' absolute right-4 transform bottom-1/2 translate-y-1/2 size-5 text-gray-500 z-10' onClick={togglepassword} />  }
        
       </div>
        
        <button 
           className= {loading ? ' my-8 bg-zinc-500 text-white mr-20 py-3 px-4 rounded-lg w-[80%]' : "my-8 bg-zinc-900 text-white mr-20 py-3 px-4 rounded-lg w-[80%]"}
            disabled= {loading}
           type='submit'
           onClick={handelSubmit} >{loading ?"Signing in ...": "Sign in"}</button>
       </div>
      </div>
    </div>
  )
}