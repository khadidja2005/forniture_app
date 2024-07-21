import React from 'react'
import Navbar from '../components/Navbar'

type Props = {}

const AddProduct = (props: Props) => {
  return (
    <div className=" flex justify-center items-center flex-col w-screen overflow-hidden">
        <div className=" w-[90%] bg-white">
            <Navbar/>
         </div>
    </div>        
  )
}

export default AddProduct