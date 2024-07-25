"use client"
import axios from 'axios'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
type Props = {}

const ProductDetails = (props: Props) => {
  const [product, setProduct] = useState(null)
  const [id, setId] = useState<string | null>(null)
  const [isLiked, setIsLiked] = useState(false)

  useEffect(() => {
    const url = window.location.href
    const idFromUrl = url.split('/').pop() || null
    setId(idFromUrl)
  }, [])

  useEffect(() => {
    const fetchData = async () => {
      if (id) {
        try {
          const response = await axios.get(`http://localhost:5000/post/${id}`)
          console.log(response.data)
          setProduct(response.data)
        } catch (error) {
          console.log(error)
        }
      }
    }
    fetchData()
  }, [id])
  const heartOnclick = ()=> {
    setIsLiked(!isLiked)
  }
  return (
    <div>
      <div className=' flex justify-evenly items-start my-10'>
        <div className=' w-full relative'>
        <Image src={product?.photourl} alt={"product"} width={500} height={500} />
        {isLiked ? 
        <FaHeart className=' absolute bottom-4 right-14' size={40} onClick={heartOnclick} />:
        <FaRegHeart className='absolute bottom-4 right-14' size={40}  onClick={heartOnclick} />}
        {/* <FaHeart /> */}
        </div>
        <div className=' w-full mx-10' >
          <div className=' w-full flex flex-col gap-6'>
            <p className=' text-xl text-gray-700 font-semibold py-2 px-4 bg-gray-200 w-fit border border-slate-800 rounded-lg'>{product?.category}</p>
            <p className=' text-3xl font-semibold'>{product?.name}</p>
            <p className='  pr-10 mr-20 text-gray-600'>{product?.description}</p>
            <div className=' flex'>
            <p className=' text-gray-600 text-xl'>Price:</p>
              <p className='  mx-2 font-bold text-xl'>{product?.price} $</p>  
            </div>
            
            <div className=' flex '>
              <p className=' text-gray-600'>Available quantity:  </p>
              <p className=' mx-2 text-black font-bold'> {product?.quantity}</p>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetails