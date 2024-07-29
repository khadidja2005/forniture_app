"use client"
import React from 'react'
import Navbar from '../components/Navbar'
import AddBlogcom from '../components/AddBlogcom'

type Props = {}

const AddBlog = (props: Props) => {
  return (
    <div className=" flex justify-center items-center flex-col w-screen overflow-hidden">
    <div className=" w-[90%] bg-white">
        <Navbar/>
        <AddBlogcom/>
     </div>
</div>   
  )
}

export default AddBlog