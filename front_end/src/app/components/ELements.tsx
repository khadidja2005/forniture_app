import React from 'react'
import './style.css'
import bedroom from "../../../public/images/landing_page/bedroom.png"
import kitchen from "../../../public/images/landing_page/kitchen.png"
import livroom from "../../../public/images/landing_page/livroom.png"
import Image from 'next/image'
type Props = {}

const ELements = (props: Props) => {
  return (
    <div className='between'>
        <div className=' relative'>
         <Image src={livroom} alt='livingroom' className=' z-0'/>
         <p className=' absolute  z-10 top-8 translate-x-1/2 translate-y-1/2 left-0 pb-10 mb-20 text-3xl'>Living Room</p>
        </div>
        <div className='between flex-col gap-6'>
            <div className=' relative'>
                <Image src={bedroom} alt='bedroom' className=' z-0'/>
                <p className=' absolute  z-10  translate-x-1/2 translate-y-1/2 right-2/3 mr-10 bottom-1/3 text-3xl'>Bedroom</p>
            </div>
            <div className=' relative'>
                <Image src={kitchen} alt='kitchen' className=' z-0'/>
                <p className=' absolute  z-10  translate-x-1/2 translate-y-1/2 right-2/3 mr-10 bottom-1/3 text-3xl'>Kitchen</p>
            </div>
        </div>
    </div>
  )
}

export default ELements