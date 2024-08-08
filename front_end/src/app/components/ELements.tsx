import React from 'react'
import './style.css'
import bedroom from "../../../public/images/landing_page/bedroom.png"
import kitchen from "../../../public/images/landing_page/kitchen.png"
import livroom from "../../../public/images/landing_page/livroom.png"
import Image from 'next/image'
type Props = {}

const ELements = (props: Props) => {
  return (
    <div className=' md:flex-row flex justify-between items-center flex-col'>
        <div className=' relative m-8'>
         <Image src={livroom} alt='livingroom' className='  z-0'/>
         <p className=' absolute  z-10 top-8 translate-x-1/2 translate-y-1/2 left-0 pb-10 mb-20 md:text-3xl text-xl'>Living Room</p>
        </div>
        <div className=' flex  items-center  flex-col justify-center gap-6'>
            <div className=' relative'>
                <Image src={bedroom} alt='bedroom' className=' z-0'/>
                <p className=' absolute  z-10  translate-x-1/2 translate-y-1/2 right-2/3 mr-10 bottom-1/3 md:text-3xl text-xl'>Bedroom</p>
            </div>
            <div className=' relative'>
                <Image src={kitchen} alt='kitchen' className=' z-0'/>
                <p className=' absolute  z-10  translate-x-1/2 translate-y-1/2 right-2/3 mr-10 bottom-1/3 md:text-3xl text-xl'>Kitchen</p>
            </div>
        </div>
    </div>
  )
}

export default ELements