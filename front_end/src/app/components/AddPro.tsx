import React, { ChangeEvent, useState } from 'react'
import Image from 'next/image'
import livroom from "../../../public/images/landing_page/livrm6.png"
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
        <div className=' relative w-full'>
          <Image src={livroom} alt='livroom' className='h-screen w-4/5' />
        </div>
       
       <div className=' flex flex-col justify-center w-[100%] mr-20 px-10'>
       <input 
          type='text' 
          placeholder='Enter product name' 
          className=' mr-20 py-3 px-4 my-4 rounded-lg bg-gray-100 w-[80%]'
          name='name'
          value={form.name}
          onChange={handelform} />
       <div className=' relative w-[80%] '>
        
        <input 
          type="text"
          placeholder='description' 
          name='description'
          className=' mr-20 py-3 px-4 my-4 rounded-lg bg-gray-100 relative w-full'
          value={form.description}
          onChange={handelform} /> 
       </div>
       <input 
          type="text"
          placeholder='price' 
          name='price'
          className=' mr-20 py-3 px-4 my-4 rounded-lg bg-gray-100 relative w-full'
          value={form.price}
          onChange={handelform} /> 
       </div>
        
        <button 
           className= {loading ? ' my-8 bg-zinc-500 text-white mr-20 py-3 px-4 rounded-lg w-[80%]' : "my-8 bg-zinc-900 text-white mr-20 py-3 px-4 rounded-lg w-[80%]"}
            disabled= {loading}
           type='submit'
           onClick={handelSubmit} >{loading ?"Saving ...": "Publish"}</button>
       </div>
      </div>  
  )
}

export default AddPro