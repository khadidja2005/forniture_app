"use client"
import axios from 'axios'
import Image from 'next/image';
import React, {  useEffect, useState } from 'react'
import Blog from "../../../public/images/landing_page/Blogpage.png"
import { useRouter } from 'next/navigation';
type Props = {}
interface HomeDesign {
    content: string;
    photourl: string;
    title: string;
    __v: number;
    _id: string;
  }
const BlogCom = (props: Props) => {
  const router = useRouter()
const [articles, setArticles] = useState<HomeDesign[]>([])
    useEffect(() => {
     const fetchdata = async()=> {
        try {
            const response = await axios.get("http://localhost:5000/articles/all" ,
              {
                headers: {
                  'Authorization': `Bearer ${localStorage.getItem("access_token") }`// Replace 'your-jwt-token' with the actual token
                }
              }
            )
            console.log(response.data)
            setArticles(response.data)
        }catch (error) {
            console.log(error)
     }
    }
     fetchdata()} , [])
     const ClickonImage = (id : string) => {
       router.push(`/Articles/${id}`)
     }
  return (
    <div>
<div className='relative'>
    <Image src={Blog} alt='blog' />
    <div className='absolute flex justify-center items-center inset-0 flex-col gap-2'>
      <h1 className='text-4xl'>Our Blog</h1>
      <p>Home ideas and design inspiration</p>
    </div>
  </div>
  <div>
    <h1 className='text-2xl font-bold mt-10'>Latest Articles</h1>
  </div>
    <div className=' grid grid-cols-3 gap-6 mb-10 w-full'>
     {
            articles.map((article) => {
                return (
                    <div key={article._id} className="bg-white p-4">
                        <Image src={article.photourl} alt="" onClick={()=>ClickonImage(article._id)} className=" cursor-pointer w-full object-cover" width={200} height={200} />
                        <h1 className="text-lg font-bold mt-2">{article.title}</h1>
                    </div>
                )
            })
     }
    </div> 
</div>

  )
}

export default BlogCom