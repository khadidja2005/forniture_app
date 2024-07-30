"use client"
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Home from '../page';
import Image from 'next/image';

type Props = {}
type Home = {
    _id: string,
    title: string,
    content: string,
    photourl: string,
    __v: number,
  }
  
const ArticleDetails = (props: Props) => {
    const [id , setId] = useState<string | null>()
    const [blog , setBlog] =useState<Home | null>(null)
    useEffect(() => {
        const url = window.location.href
        const idFromUrl = url.split('/').pop() || null
        setId(idFromUrl)
      }, [])
    useEffect(()=> {
        const fetchData = async ()=> {
        if (id){
            try{
           const response = await axios.get(`http://localhost:5000/articles/${id}`)
           console.log(response.data)
           setBlog(response.data)
          }catch(err){
            console.log(err)
          }   
        }

        }
        fetchData()
    })  
  return (
    <div className='  my-10 mx-24 '>
    <div className=' w-full h-full flex justify-center items-center flex-col'>
        <div className=' py-2 text-start'>
            <p className=' text-3xl font-bold my-4 text-start'>{blog?.title}</p>
        </div>
        <div className=' w-[80%] relative h-[500px] my-4'>
            <Image src={blog?.photourl} alt='image'  fill objectFit='cover'  layout=' fill'  className=' w-full'/>
        </div>
        <div className=' py-4 px-4'>
            <p className=' text-2xl  leading-loose indent-8 text-gray-700'>{blog?.content}</p>
        </div>
    </div>
    </div>
  )
}

export default ArticleDetails