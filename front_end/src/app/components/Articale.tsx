import React from 'react'
import bdroom from "../../../public/images/landing_page/bdrm1.jpg"
import kitchen from "../../../public/images/landing_page/kit3.jpg"
import livroom from "../../../public/images/landing_page/livrm2.jpg"
import Image from 'next/image'
import './style.css'; 
type Props = {}

const Articale = (props: Props) => {
  return (
    <div className=' py-10 my-8 '>
        <p className=' text-3xl py-4 font-semibold'>Articles</p>
        <div className='between w-full h-full gap-10 my-4'>
            <div>
                <Image src={bdroom} alt='bdroom' className=' w-full'/>
                <p className=' py-4'>Decor your bedroom</p>
            </div>
            <div>
                <Image src={kitchen} alt='kitchen' className=' w-full'/>
                <p className=' py-4'>Kitchen organization</p>
            </div>
            <div>
                <Image src={livroom} alt='livroom' className=' w-full'/>
                <p className=' py-4'>7 ways to decor your home</p>
            </div>
        </div>
    </div>
  )
}

export default Articale