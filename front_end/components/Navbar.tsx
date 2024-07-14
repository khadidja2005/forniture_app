import React from 'react'

type Props = {}

const Navbar = (props: Props) => {
  return (
    <>
      <div className='flex justify-between items-center'>
        <div>
          <p>3legant.</p>
        </div>
        <div>
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>NewsLetter</li>
          </ul>
        </div>
      </div>

    </>
  )
}

export default Navbar