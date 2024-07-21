"use client"
import React, { ChangeEvent } from 'react'

import Image from 'next/image'
import { useState } from 'react'
import livroom from "../../../public/images/landing_page/livroom3.png"
import { MdOutlineVisibility } from "react-icons/md";
import { MdOutlineVisibilityOff } from "react-icons/md";
import { useRouter } from 'next/navigation';
import bcrypt from 'bcryptjs';
import axios from 'axios'
type Props = {}

const SignUp = (props: Props) => {
    const router = useRouter()
    const [visible , setVisible] = useState(true)
    const [loading , setloading] = useState(false)
    const [error , seterror] = useState<string | null>(null)
    const [success , setsuccess] = useState<string | null>(null)
    const [form , setForm] = useState({
      username:"",
      name:"",
      email:"",
      password:"",
    })
    const handelChange = (e : ChangeEvent<HTMLInputElement>)=> {
      setForm({...form , [e.target.name]:e.target.value})
    }
    const togglepassword = ()=> {
      setVisible(!visible)
    }
    const gotosignin = ()=> {
        router.push('/SignIn')
    }
    const gotohome = ()=> {
        router.push('/')
      }
    const handelSubmit = async ()=>{
      setloading(true);
      seterror(null);
      console.log(form)
      if (!form.username || !form.name || !form.email || !form.password) {
        seterror("All fields are required.");
        setloading(false);
        return;
    }
      try{
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(form.password, salt);
       const response = await axios.post("http://localhost:5000/auth/signup" , {email : form.email , password : hashedPassword , name : form.name , username : form.username})
       console.log(response)
       if (response.status === 201) {
        localStorage.setItem("access_token" , response.data.access_token)
        setsuccess("user registred successfully")
        setTimeout(()=> {
         router.push('/SignIn'); 
        }, 1000)
    } else {
        seterror("Something went wrong. Please try again.");
    }
      } catch {
        seterror("An error occurred during signup. Please try again.");
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
     <p className=' text-3xl my-5 font-semibold'>Sign Up</p>
     <p className=' text-gray-500'>Already have an account? <span onClick={gotosignin} className=' text-green-500 font-semibold cursor-pointer'>Sign In</span></p>
     <input 
       type='text' 
       placeholder='Your name' 
       className=' mr-20 py-3 px-4 my-4 rounded-lg bg-gray-100 w-[80%]'
       value={form.name}
       name='name'
       onChange={handelChange} />
     <input 
       type='text' 
       placeholder='Your username' 
       className=' mr-20 py-3 px-4 my-4 rounded-lg bg-gray-100 w-[80%]'
       name='username'
       value={form.username}
       onChange={handelChange} />
     <input 
       type='email' 
       placeholder='Enter your email' 
       className=' mr-20 py-3 px-4 my-4 rounded-lg bg-gray-100 w-[80%]'
       value={form.email}
       name='email'
       onChange={handelChange} />
     <div className=' relative w-[80%] '>
      
      <input 
        type={visible ? "password":"text" } 
        placeholder='Password' 
        className=' mr-20 py-3 px-4 my-4 rounded-lg bg-gray-100 relative w-full'
        value={form.password}
        name='password'
        onChange={handelChange} />
        {error && <p className=' text-red-600 my-4'>{error}</p>}
        {success && <p className=' text-green-600 my-4'>{success}</p>}
      {visible?<MdOutlineVisibility className=' absolute right-4 transform bottom-1/2 translate-y-1/2 size-5 text-gray-500 z-10' onClick={togglepassword} /> :
      <MdOutlineVisibilityOff className=' absolute right-4 transform bottom-1/2 translate-y-1/2 size-5 text-gray-500 z-10' onClick={togglepassword} />  }
      
     </div>
      
      <button onClick={handelSubmit} type='submit' className= {loading ? ' my-8 bg-zinc-500 text-white mr-20 py-3 px-4 rounded-lg w-[80%]' : "my-8 bg-zinc-900 text-white mr-20 py-3 px-4 rounded-lg w-[80%]"}  disabled= {loading}>{loading ?"Signing UP .." :"Sign Up"}</button>
     </div>
    </div>
   
  </div>
  )
}

export default SignUp