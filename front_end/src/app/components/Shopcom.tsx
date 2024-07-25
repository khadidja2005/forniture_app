'use client'
import Image from 'next/image'
import React, { ChangeEvent, useEffect, useState } from 'react'
import shop from "../../../public/images/landing_page/shoppage.png"
import axios from 'axios'
import { useRouter } from 'next/navigation'

type Props = {}

function Shopcom({}: Props) {
  const [category, setCategory] = useState("")
  const [price, setPrice] = useState("")
  const [products, setProducts] = useState([{
      _id: "",
      name: "",
      price: 0,
      category: "",
      photourl: ""}
  ])
  const [filteredProducts, setFilteredProducts] = useState([
    {
      _id: "",
      name: "",
      price: 0,
      category: "",
      photourl: ""
    }
  ])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:5000/post/all")
        setProducts(response.data)
        console.log(response.data)
        setFilteredProducts(response.data)
      } catch (error) {
        console.log(error)
      }
    }
    fetchData()
  }, [])
  const router = useRouter()
  useEffect(() => {
    const applyFilter = () => {
      let filtered = products

      if (category) {
        filtered = filtered.filter((item) => item.category === category)
      }

      if (price) {
        filtered = filtered.filter((item) => {
          const itemPrice = item.price
          switch (price) {
            case "0-20":
              return itemPrice >= 0 && itemPrice <= 20
            case "20-100":
              return itemPrice >= 20 && itemPrice <= 100
            case "100-500":
              return itemPrice >= 100 && itemPrice <= 500
            case "500-1000":
              return itemPrice >= 500 && itemPrice <= 1000
            default:
              return true
          }
        })
      }

      setFilteredProducts(filtered)
    }
    applyFilter()
  }, [category, price, products])

  const handleCategoryChange = (event:ChangeEvent<HTMLSelectElement>) => {
    const selectedCategory = event.target.value

    setCategory(selectedCategory === category ? '' : selectedCategory)
  }

  const handlePriceChange = (event:ChangeEvent<HTMLSelectElement>) => {
    const selectedPrice = event.target.value
    setPrice(selectedPrice === price ? '' : selectedPrice)
  }
  const handelproductClick =(id : string)=> {
    router.push(`/Shop/${id}`)
  }

  return (
    <div>
      <div className='relative'>
        <Image src={shop} alt='shop' />
        <div className='absolute flex justify-center items-center inset-0 flex-col gap-2'>
          <h1 className='text-4xl'>Shop Page</h1>
          <p>Let’s design the place you always imagined.</p>
        </div>
      </div>
      <div className='grid grid-cols-4 gap-8 my-10'>
        <div>
          <p className='text-xl font-medium text-gray-600'>Categories</p>
          <select
            name='category'
            value={category}
            onChange={handleCategoryChange}
            className='mr-5 py-3 px-4 my-2 rounded-md bg-white border-2 border-gray-900 w-full'>
            <option value="">Select Category</option>
            <option value="Living Room">Living Room</option>
            <option value="Bedroom">Bedroom</option>
            <option value="Kitchen">Kitchen</option>
          </select>
        </div>
        <div>
          <p className='text-xl font-medium text-gray-600'>Prices</p>
          <select
            name='price'
            value={price}
            onChange={handlePriceChange}
            className='mr-5 py-3 px-4 my-2 rounded-md bg-white border-2 border-gray-900 w-full'>
            <option value="">Select price range</option>
            <option value="0-20">0$ - 20$</option>
            <option value="20-100">20$ - 100$</option>
            <option value="100-500">100$ - 500$</option>
            <option value="500-1000">500$ - 1000$</option>
          </select>
        </div>
      </div>
      <div>
        <div className='grid grid-cols-4 gap-8 mb-10'>
          {filteredProducts.map((item) => (
            <div key={item._id} className='bg-white rounded-lg'>
              <div className='flex justify-center my-2 hover:cursor-pointer' onClick={()=>handelproductClick(item._id)}>
                <Image src={item.photourl} alt='product' className='w-full h-full' width={200} height={200} />
              </div>
              <h1 className='text-lg font-semibold'>{item.name}</h1>
              <p>{item.price} $</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Shopcom
