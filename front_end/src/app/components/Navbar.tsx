"use client";
import {jwtDecode} from 'jwt-decode';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { CiShoppingCart } from "react-icons/ci";
import { IoIosClose } from "react-icons/io";
import Image from 'next/image';
import axios from 'axios';
import { AnimatePresence , motion } from 'framer-motion';

type Props = {};

interface Review {
  comment: string;
  id_user: string;
  __v: number;
  _id: string;
}

interface Post {
  category: string;
  description: string;
  likes: string[];
  name: string;
  photourl: string;
  price: number;
  quantity: number;
  reviews: Review[];
  __v: number;
  _id: string;
}

interface PanierItem {
  post: Post;
  quantity: number;
}

const Navbar = (props: Props) => {
  const [visible, setVisible] = useState(false);
  const router = useRouter();
  const [user, setUser] = useState<any>(null); // Use 'any' for simplicity; consider creating a proper type for user
  const [token, setToken] = useState<string | null>(null);
  const [panier, setPanier] = useState<PanierItem[]>([]);

  const gotosignin = () => router.push('/SignIn');
  const gotoaddproduct = () => router.push('/AddProduct');
  const gotoshop = () => router.push('/Shop');
  const gotohome = () => router.push('/');
  const gotArticle = () => router.push('/Articles');
  const gotoAddBlog = () => router.push('/AddBlog');
  const gotoProfile =()=> router.push('/Profile');
  useEffect(() => {
    const storedToken = localStorage.getItem("access_token");
    if (storedToken) {
      setToken(storedToken);
      const decodedUser = jwtDecode(storedToken);
      console.log("Decoded User:", decodedUser); // Log the decoded token
      setUser(decodedUser);
    }
  }, []);
  const handleClick = () => {
    setVisible(!visible);
  };

  useEffect(() => {
      const fetchPanier = async () => {
        try {
          const response = await axios.get(`http://localhost:5000/user/getpanier/${user.sub}`);
          console.log("Panier response:", response.data);
          setPanier(response.data);
        } catch (error) {
          console.error("Error fetching cart items:", error);
        }
      };
      if(user){
        fetchPanier();
      }
      
  }, [user]);

  return (
    <div className='flex justify-between items-center px-8 py-4 sticky z-10 shadow-sm'>
      <div>
        <p className='text-3xl font-bold cursor-pointer' onClick={gotohome}>3legant.</p>
      </div>
      <div className='text-[16px] pr-10'>
        {token ? (
          <ul className='flex justify-between items-center gap-6 pr-4 text-zinc-500'>
            <li className="hover:text-zinc-950 cursor-pointer" onClick={gotohome}>Home</li>
            <li className="hover:text-zinc-950 cursor-pointer" onClick={gotoshop}>Shop</li>
            <li className="hover:text-zinc-950 cursor-pointer" onClick={gotArticle}>Blog</li>
            {user && user.role === "admin" && <li className="hover:text-zinc-950 cursor-pointer" onClick={gotoaddproduct}>Add product</li>}
            {user && user.role === "admin" && <li className="hover:text-zinc-950 cursor-pointer" onClick={gotoAddBlog}>Add Blog</li>}
            <div className='flex ml-10 justify-center items-center gap-6 '>
              <CiShoppingCart className='size-8 text-slate-900 font-semibold' onClick={handleClick} />
              <AnimatePresence>
              {visible && (
                <motion.div 
                initial={{ x: '100%', opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: '100%', opacity: 0 }}
                transition={{ duration: 0.3 }}
                className=' fixed right-0 mt-60  w-64 bg-white text-black shadow-lg rounded-lg z-20 flex flex-col px-4 py-4'>
                  <div className=' fixed top-2 w-full  py-8 px-8 flex justify-between items-center'>
                    <p className=' font-bold'>Your Panier</p>
                    <IoIosClose size={40} onClick={handleClick} />
                  </div>
                  <div className='mt-16 overflow-y-auto max-h-[300px]'>
                    {panier.length === 0 ? (
                    <p className='text-sm'>Your cart is empty.</p>
                  ) : ( 
                    <div>
                      {panier.map((item) => (
                        <div key={item.post._id} className='flex justify-between items-center gap-6 px-6 py-4'>
                          <div className='flex justify-between items-center gap-6'>
                            <Image src={item.post.photourl} alt='product' width={40} height={40} className='rounded-2xl border border-slate-900' />
                            <div className='mx-2 text-slate-900 text-sm'>
                              <p>{item.post.name}</p>
                              <p>{item.quantity} x ${item.post.price}</p>
                              <p>Total: ${item.quantity * item.post.price}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                  </div>

                </motion.div>
              )}
              </AnimatePresence>
              {user && (
                <div className='flex justify-center items-center border border-slate-500 rounded-md px-2 py-1 cursor-pointer' onClick={gotoProfile}>
                  <Image src={user.photourl} alt='profile' width={40} height={40} className='rounded-2xl border border-slate-900 object-cover w-12 h-12' />
                  <div className='mx-2 text-slate-900 text-sm'>
                    <p>{user.username}</p>
                    <p>{user.role}</p>
                  </div>
                </div>
              )}
            </div>
          </ul>
        ) : (
          <ul className='flex justify-between items-center gap-6 pr-4 text-zinc-500'>
            <li className="hover:text-zinc-950 cursor-pointer" onClick={gotohome}>Home</li>
            <li className="hover:text-zinc-950">About Us</li>
            <li className="hover:text-zinc-950">Contact Us</li>
            <li className="hover:text-zinc-950">NewsLetter</li>
            <button className='border-zinc-400 border text-gray-700 px-4 py-2 rounded-md hover:bg-slate-500 hover:text-white' onClick={gotosignin}>Sign In</button>
          </ul>
        )}
      </div>
    </div>
  );
};

export default Navbar;
