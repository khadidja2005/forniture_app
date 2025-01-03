import React from 'react'
import './style.css'
type Props = {}

const Features = (props: Props) => {
    return (
        <div>
            <div className='sm:justify-center sm:items-center md:flex-row flex flex-col  md:gap-20 gap-10 my-4 py-4'>
                <div>
                    <p className=' text-5xl sm:pr-10 font-medium mb-2'>Simply Unique/</p>
                    <p className=' text-5xl sm:pr-10 font-medium'>Simply Better.</p>
                </div>
                <div className=' pl-30'>
                    <p className=' mx-4'>3legant is a gift & decorations store based in HCMC, Vietnam. Est since 2019. </p>
                </div>
            </div>
        </div>

    )
}

export default Features