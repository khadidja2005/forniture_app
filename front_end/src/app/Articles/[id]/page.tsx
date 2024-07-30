import React from 'react'
import Navbar from '../../components/Navbar'
import Newsletter from '../../components/Newsletter'
import Footer from '../../components/Footer'
import ArticleDetails from '../../components/ArticleDetails'

type Props = {}

const Blog = (props: Props) => {
  return (
    <div className='flex justify-center items-center flex-col w-screen overflow-hidden'>
        <div className=' w-[90%] bg-white'>
         <Navbar/>
         <ArticleDetails/>
        </div>
        <div>
            <Newsletter/>
            <Footer/>
        </div>
    </div>
  )
}

export default Blog