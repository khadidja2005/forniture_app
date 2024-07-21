import React from 'react'
import Navbar from '../components/Navbar'
import AddPro from '../components/AddPro'

type Props = {}

const AddProduct = (props: Props) => {
  return (
    <div className=" flex justify-center items-center flex-col w-screen overflow-hidden">
        <div className=" w-[90%] bg-white">
            <Navbar/>
            <AddPro/>
         </div>
    </div>        
  )
}

export default AddProduct