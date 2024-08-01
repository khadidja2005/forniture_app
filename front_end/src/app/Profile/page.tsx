import React from 'react'
import Navbar from '../components/Navbar'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'
import ProfileCom from '../components/Profile'

type Props = {}

function Profile({}: Props) {
  return (
    <div className='flex justify-center items-center flex-col w-screen overflow-hidden'>
    <div className=' w-[90%]  bg-white'>
      <Navbar/>
      <ProfileCom/>
    </div>  
    <div>
       <Newsletter/>
       <Footer/>  
    </div>
    </div>
  )
}

export default Profile