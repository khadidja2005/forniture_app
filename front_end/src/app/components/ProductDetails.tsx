"use client"
import axios from 'axios'
import { jwtDecode } from 'jwt-decode';
import Image from 'next/image'
import React, { ChangeEvent, FormEvent, use, useEffect, useState } from 'react'
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
type Props = {}

const ProductDetails = (props: Props) => {
  const [product, setProduct] = useState(null)
  const [id, setId] = useState<string | null>(null)
  const [isLiked, setIsLiked] = useState(false)
  const [quantity, setQuantity] = useState(1)
  const [loading , setloading] = useState(false)
  const [error, setError] = useState("")
  const [success, setSuccess] = useState("")
  const [comment, setComment] = useState("")
  const [user , setUser] = useState(
    {
      username : ""
    }
  )
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
  const addcount =()=> {
   if(quantity<product?.quantity){
     setQuantity(quantity+1)
   }
   
  }
  const removecount =()=> {
    if(quantity>1){
      setQuantity(quantity-1)
    }
  }
 useEffect(()=> {
    const likedornot =()=> {
    const token = localStorage.getItem('access_token')
    const decode =jwtDecode(token)
    const userId = decode.sub
    if(product?.likes?.includes(userId) ){
      setIsLiked(true)
    }else{
      setIsLiked(false)
    }
  }
    likedornot()
 }, [product])


  const HandelSubmit = async ()=> {
    const token = localStorage.getItem('access_token')
    const decode =jwtDecode(token)
    const userId = decode.sub
    console.log(userId)
    const postId = id
    try {
      setloading(true)
      const response = await axios.post('http://localhost:5000/user/addpanier', {
        userId,
        postId,
        quantity
      })
      console.log(response.data)
      try{
      const response2 = await axios.post('http://localhost:5000/post/quantity', {
        quantity,
        post_id : id,
      }) 
      console.log(response2.data) 
      setSuccess("Product added to cart")
      setError("")
      setloading(false)
      } catch(error) {
        console.log(error)
        setloading(false)
        setError("Something went wrong")
        setSuccess("")
      }

    } catch (error) {
      console.log(error)
      setloading(false)
      setError("Something went wrong")
      setSuccess("")
  }}
  const handellikes = async ()=> {
    const token = localStorage.getItem('access_token')
    const decode =jwtDecode(token)
    const userId = decode.sub
    try {
      const response = await axios.post('http://localhost:5000/post/like', {
        userid : userId,
        postid : id
      })
      console.log(response.data)
    } catch (error) {
      console.log(error)
    }
  }
  const submitReview = async(e : FormEvent<HTMLFormElement>)=> {
    const token = localStorage.getItem('access_token')
    const decode =jwtDecode(token)
    const userId = decode.sub
    e.preventDefault()
    try {
      const response = await axios.post("http://localhost:5000/post/addreview", {
        id_post : id ,
        id_user : userId,
        comment ,
      })
      console.log(response.data)
    }catch(error){
      console.log(error)
    }
  }
  return (
    <div>
      <div className=' flex sm:justify-evenly sm:flex-row gap-8 flex-col items-start my-10'>
        <div className=' w-full relative'>
        <Image src={product?.photourl} alt={"product"} width={450} height={400} />
        <div onClick={handellikes}>
                  {isLiked ? 
        <FaHeart className=' absolute bottom-4 right-28 sm:size-10 size-5'  onClick={heartOnclick}  />:
        <FaRegHeart className='absolute bottom-4 right-28 sm:size-10 size-5'   onClick={heartOnclick} />}
        </div>

        {/* <FaHeart /> */}
        </div>
        <div className=' w-full sm:mx-10 mx-2' >
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
            <div className=' mt-20 w-fit'>
        <div className='flex  bg-slate-300 rounded-md'>
                <div className='py-2 px-4 border-r border-gray-400 cursor-pointer' onClick={addcount}>
                    +
                </div>
               <div className='py-2 px-4'>
                {quantity}
               </div>
               <div className='py-2 px-4 border-l border-gray-400 cursor-pointer' onClick={removecount}>
                -
               </div>
            </div> 
            </div>
            {error && <p className='text-red-500'>{error}</p>}
            {success && <p className='text-green-500'>{success}</p>}
            <button className={loading ? "bg-slate-400 text-white sm:px-4 sm:py-2 px-2 py-2 rounded-lg mx-4":  " mx-4 bg-slate-800 text-white sm:px-4 sm:py-2 px-2 py-2 rounded-lg"} onClick={HandelSubmit}>{loading ? "adding to panier" :"Add to panier"}</button> 

          </div>
        </div>
      </div>
      <div className=' flex flex-col items-start justify-center w-full'>
        <p className=' text-3xl py-4'>Customer Reviews</p>
        <form className=' w-full flex flex-row my-8' onSubmit={submitReview}>
          <input 
             type="text" 
             placeholder='Add a review' 
             className=' w-full px-4 py-2 border border-zinc-900 focus:outline-none focus:shadow-none  '
             name='comment'
             value={comment}
             onChange={(e)=> setComment(e.target.value)}  />
          <button type='submit' className=' px-4 py-2 bg-zinc-900 text-white rounded-r-md border border-zinc-900 '>Publish</button>
        </form>
        <div className=' mb-10'>
          <p>{product?.reviews?.length} Reviews</p>
          {product?.reviews?.map((review , index) => {
            return (
              <div key={index} className='flex justify-start items-start sm:m-4 py-4'>
                <div className=' mx-4 sm:w-[5%] '>
                <Image src={review.id_user.photourl} alt={"user"} width={50} height={50} className=' w-12 h-12 rounded-2xl' />
                </div>
                <div className=' w-full'>
                  <p className=' font-bold text-lg'>{review.id_user.username}</p>
                  <p>{review.comment}</p>
                </div>
                

                
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default ProductDetails