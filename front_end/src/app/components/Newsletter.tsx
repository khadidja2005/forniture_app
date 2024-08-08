import React from 'react';
import Image from 'next/image';
import newsletter from '../../../public/images/landing_page/newsletter.png';

type Props = {};

const Newsletter = (props: Props) => {
  return (
    <div className="relative w-full h-full">
      <Image src={newsletter} alt="newsletter"  className=" z-0 overflow-hidden w-full h-52 md:h-72" />
      <div className="absolute inset-0 flex items-center justify-center z-10">
        <div className="text-center text-black md:gap-6 gap-2 flex flex-col">
          <h1 className="md:text-4xl text-xl font-bold">Join Our Newsletter</h1>
          <p className="md:text-lg text-sm">Sign up for deals, new products and promotions.</p>
          <div>
            <input
            type="email"
            placeholder="Enter your email"
            className="md:mt-4 px-4 md:py-3 py-1 md:w-96 w-32 border-y border-gray-600 border-l text-zinc-500"
          />
          <button className=" md:px-4 px-2 md:py-3 py-1 bg-white border-y border-gray-600 border-r text-zinc-500 ">Subscribe</button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Newsletter;
