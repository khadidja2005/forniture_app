"use client"
import { jwtDecode } from 'jwt-decode';
import Image from 'next/image';
import React, { use, useEffect, useState } from 'react'

type Props = {}
type User = {
    email: string;
    exp: number;
    iat: number;
    name: string;
    panier: Array<{
      post: {
        _id: string;
        photourl: string;
        name: string;
        price: number;
      };
      quantity: number;
    }>;
    photourl: string;
    role: string;
    sub: string;
    username: string;
  };
  
const ProfileCom = (props: Props) => {
    const [user , setUser] = useState<User>()
    useEffect(()=> {
        const storedToken = localStorage.getItem("access_token");
         if (storedToken){
            const decodedUser = jwtDecode(storedToken);
            console.log("Decoded User:", decodedUser); // Log the decoded token
            setUser(decodedUser);
        }
    } , [])
  return (
     <div className=' flex justify-center items-center  flex-col py-4 w-full'>

      <div className=' flex items-start justify-start my-4'>
       <p className=' text-3xl my-8'>Profile Page</p>
      </div>
      <Image src={user?.photourl ?? ''} alt='image' width={100} height={100} className=' rounded-2xl'/>
      <p className=' text-lg text-blue-500 my-4'>Update profile image</p>
       <input type="text" name="name" value={user?.name} className=' w-1/2 py-2 px-4 my-4 border border-gray-900 rounded-md'  />
       <input type="email" name="email" value={user?.email} readOnly className=' w-1/2 py-2 px-4 my-4 text-gray-500 border rounded-md border-gray-900' />
        <input type="text" name="username" value={user?.username} className=' w-1/2 py-2 px-4 my-4 border rounded-md border-gray-900' />
        <input type="text" name="role" value={user?.role} readOnly className=' w-1/2 py-2 px-4 my-4 text-gray-500 rounded-md border border-gray-900' />
        <button className=' mb-10 w-1/2 bg-zinc-800 py-2 rounded-md  text-white '>Update</button> 
     </div>
  )
}

export default ProfileCom