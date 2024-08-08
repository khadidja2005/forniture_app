"use client"
import axios from 'axios';
import { jwtDecode } from 'jwt-decode';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React, { ChangeEvent, useEffect, useState } from 'react'

type Props = {}
type User = {
    email: string;
    exp: number;
    iat: number;
    name: string;
    _id?: string;
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
  const router = useRouter()
  const [image, setImage] = useState<File | null>(null);
  const [previewImage, setPreviewImage] = useState<string | null>(null);
  const [user , setUser] = useState<User | null>()
  const [error , setError] = useState<string | null>(null)
  const [success , setSuccess] = useState<string | null>(null)
  const [users , setUsers] = useState<User[]>([])
  const [loading , setLoading] = useState<boolean>(false)

    useEffect(()=> {
        const storedToken = localStorage.getItem("access_token");
         if (storedToken){
            const decodedUser = jwtDecode(storedToken);
            console.log("Decoded User:", decodedUser); // Log the decoded token
            setUser(decodedUser);
        }
    } , [])
    useEffect(()=> {
      if (user?.role == "admin"){
        const fetchData = async () => {
          try {
            const response = await axios.get("http://localhost:5000/user/all")
            setUsers(response.data)
            console.log(response.data)
          } catch (error) {
            console.log(error)
          }
        }
        fetchData()
      }
    }, [user])
    const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files?.[0] || null;
      if (file) {
          setImage(file);
          setPreviewImage(URL.createObjectURL(file));
      }
  };
  const handelSubmit =async (e:React.FormEvent)=> {
  e.preventDefault()
  if (user) {
   const formdata = new FormData()
   formdata.append("id" , user.sub)
   formdata.append("name" , user.name)
   formdata.append("username" , user.username)
   if (image){
  formdata.append("file" ,image)
   }
   try {
    setLoading(true)
    const response = await axios.post("http://localhost:5000/user/update" , formdata ,
      {
        headers: {
            'Content-Type': 'multipart/form-data',
        },
    }
    
    )
    setSuccess("profile updated")
    console.log("user updated")
    setLoading(false)
    localStorage.setItem("access_token" , response.data.token)
   } catch (error) {
    console.log(error)
    setError("failed to update profile")
   }
   
  } else {
    return "failed to update profile"
  } 
  }
  const handelonRoleChange = async (id : string , role : string) => {
    try {
      console.log(id , role)

      const response = await axios.post("http://localhost:5000/user/updaterole" , {id , role})
      if (id === user?.sub){
        localStorage.removeItem("access_token")
        setTimeout(()=> { router.push("/")} , 1000)

      }
      console.log(response.data)
      setUsers((prevUsers) =>
        prevUsers.map((user) =>
          user.sub === id ? { ...user, role: role } : user
        )
      );
    } catch (error) {
      console.log(error)
    }

  }
  return (
     <div className=' flex justify-center items-center  flex-col py-4 w-full'>

      <div className=' flex items-start justify-start my-4'>
       <p className=' text-3xl my-8'>Profile Page</p>
      </div>
      <Image src={previewImage ? previewImage :user?.photourl ?? ''} alt='image' width={100} height={100} className=' w-28 h-32 rounded-2xl'/>
      <p className=' text-lg text-blue-500 my-4'>Update profile image</p>
      <input type='file'   onChange={handleImageChange} className=' text-center' />
      <form onSubmit={handelSubmit} className=' flex flex-col w-full items-center my-8'>
       <input 
          type="text" 
          name="name" 
          value={user?.name} 
          onChange={(e) => setUser(user ? {...user , name : e.target.value} : null)}
          className=' w-1/2 py-2 px-4 my-4 border border-gray-900 rounded-md'  />
       <input 
       type="email" 
       name="email" 
       value={user?.email || ""} 
       readOnly 
       className=' w-1/2 py-2 px-4 my-4 text-gray-500 border rounded-md border-gray-900' />
        <input 
           type="text" 
           name="username" 
           value={user?.username} 
           onChange={(e)=> setUser(user ? {...user , username : e.target.value}: null)}
           className=' w-1/2 py-2 px-4 my-4 border rounded-md border-gray-900' />
        <input 
          type="text" 
           name="role" value={user?.role || ''} 
           readOnly 
           className=' w-1/2 py-2 px-4 my-4 text-gray-500 rounded-md border border-gray-900' />

        <button type='submit' className=' mb-10 w-1/2 bg-zinc-800 py-2 rounded-md  text-white '>Update</button> 
            {error && <p className=' text-red-500'>{error}</p>}
            {success && <p className=' text-green-500'>{success}</p>}
      </form> 
      {user?.role === "admin" && (
        <div className=' w-2/3'>
        <p className=' text-4xl my-2 text-center'>Admin panel</p>
        <p className=' text-center my-2 text-lg'>Manage clients</p>


        <div className=' flex flex-col w-ful shadow my-8'>
         {users.map((item)=> (
            <div key={item._id} className=' flex items-center justify-between py-4 gap-4 px-6 border-t border-gray-200'>
              <Image src={item.photourl} alt='profile' width={40} height={40} className='rounded-2xl h-10 w-10 border object-cover border-slate-900' />
              <p>{item.username}</p>
              <p>{item.email}</p>
              <select 
                 name="role"  
                 value={item.role} 
                 onChange={(e)=> handelonRoleChange(item._id, e.target.value)}
                 className=' py-2 px-1'>
                <option className=' py-2 px-1' value="admin">Admin</option>
                <option className='py-2 px-1' value="client">Client</option>
              </select>
            </div>
         ))}
        </div>
      </div> 
      )}

     </div>
  )
}

export default ProfileCom