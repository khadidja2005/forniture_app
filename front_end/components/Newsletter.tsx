import React from 'react';
import Image from 'next/image';
import newsletter from '../public/images/landing_page/newsletter.png';

type Props = {};

const Newsletter = (props: Props) => {
  return (
    <div className="relative w-full h-full">
      <Image src={newsletter} alt="newsletter" objectFit="cover" className=" z-0 overflow-hidden w-full" />
      <div className="absolute inset-0 flex items-center justify-center z-10">
        <div className="text-center text-black gap-6 flex flex-col">
          <h1 className="text-4xl font-bold">Join Our Newsletter</h1>
          <p className="text-lg">Sign up for deals, new products and promotions.</p>
          <div>
            <input
            type="email"
            placeholder="Enter your email"
            className="mt-4 px-4 py-3 w-96 border-y border-gray-600 border-l text-zinc-500"
          />
          <button className="mt-2 px-4 py-3 bg-white border-y border-gray-600 border-r text-zinc-500 ">Subscribe</button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Newsletter;
