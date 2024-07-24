import React from 'react'
import Navbar from '../components/Navbar'
import Shopcom from '../components/Shopcom'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'

type Props = {}

const Shop = (props: Props) => {
  return (
    <div className='flex justify-center items-center flex-col w-screen overflow-hidden'>
    <div className=' w-[90%]  bg-white'>
      <Navbar/>
       <Shopcom/>

    </div>  
    <div>
       <Newsletter/>
       <Footer/>  
    </div>
    </div>

  )
}

export default Shop