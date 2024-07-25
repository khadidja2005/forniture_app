import React from 'react'
import Newsletter from '../../components/Newsletter'
import Footer from '../../components/Footer'
import Navbar from '../../components/Navbar'
import ProductDetails from '../../components/ProductDetails'

type Props = {}

const product = (props: Props) => {
  return (
    <div className='flex justify-center items-center flex-col w-screen overflow-hidden'>
        <div className=' w-[90%] bg-white'>
         <Navbar/>
         <ProductDetails/>
        </div>
        <div>
            <Newsletter/>
            <Footer/>
        </div>
    </div>
  )
}

export default product