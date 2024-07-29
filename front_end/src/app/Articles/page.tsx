import React from 'react'
import Navbar from '../components/Navbar'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'
import BlogCom from '../components/BlogCom'

type Props = {}

const Blog = (props: Props) => {
  return (
    <div className='flex justify-center items-center flex-col w-screen overflow-hidden'>
    <div className=' w-[90%]  bg-white'>
      <Navbar/>
      <BlogCom/>

    </div>  
    <div>
       <Newsletter/>
       <Footer/>  
    </div>
    </div>
  )
}

export default Blog