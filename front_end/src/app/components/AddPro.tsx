import React, { ChangeEvent, useState } from 'react'
import Image from 'next/image'
import livroom from "../../../public/images/landing_page/livrm6.png"
import { SlCloudUpload } from "react-icons/sl";
type Props = {}

const AddPro = (props: Props) => {
    const [loading , setloading] = useState(false)
    const [form , setForm] = useState({
        name:"",
        description:"",
        price:"",
        category:"",
        quantity:"",
      })
      const handelform = (e : ChangeEvent<HTMLInputElement>)=> {
        setForm({...form , [e.target.name]:e.target.value})
      } 
      const handelSubmit = ()=> {
        console.log(form)
      } 
  return (
    <div className=' h-screen w-screen'>
      <div className=' flex flex-row justify-center items-center '>
        <div className=' relative w-full flex justify-center items-center flex-col py-32 border-dashed border border-slate-900'>
        <SlCloudUpload className=' size-20' />
        <p className=' text-xl'>drop your images or Browse them</p>
        </div>
       
       <div className=' flex flex-col justify-center w-[80%] mr-20 px-10'>
        <p className=' my-6 text-2xl'>Add Product</p>
       <input 
          type='text' 
          placeholder='Enter product name' 
          className=' mr-20 py-3 px-4 my-4 rounded-lg bg-gray-100 w-[80%]'
          name='name'
          value={form.name}
          onChange={handelform} />
        
        <input 
          type="text"
          placeholder='description' 
          name='description'
          className=' mr-20 py-3 px-4 my-4 rounded-lg bg-gray-100 relative w-[80%]'
          value={form.description}
          onChange={handelform} /> 

       <input 
          type="number"
          placeholder='price' 
          name='price'
          className=' mr-20 py-3 px-4 my-4 rounded-lg bg-gray-100 relative w-[80%]'
          value={form.price}
          onChange={handelform} />
          <div className=' flex'>
            <select
            name='category'
            className=' mr-5 py-3 px-4 my-4 rounded-lg bg-gray-100 w-full'
            value={form.category}
            onChange={()=> handelform}
          >
            <option value="">Select Category</option>
            <option value="Living Room">Living Room</option>
            <option value="Bedroom">Bedroom</option>
            <option value="Kitchen">Kitchen</option>
          </select>

          <input
            type="number"
            placeholder='Quantity'
            name='quantity'
            className='mr-20 py-3 px-4 my-4 rounded-lg bg-gray-100 w-[80%]'
            value={form.quantity}
            onChange={handelform}
          />
          </div> 

          <button 
           className= {loading ? ' my-8 bg-zinc-500 text-white mr-20 py-3 px-4 rounded-lg w-[80%]' : "my-8 bg-zinc-900 text-white mr-20 py-3 px-4 rounded-lg w-[80%]"}
            disabled= {loading}
           type='submit'
           onClick={handelSubmit} >{loading ?"Saving ...": "Publish"}</button>

        
        </div>
       </div>
      </div>  
  )
}

export default AddPro