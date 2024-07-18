import Image from "next/image";
import Navbar from "../../components/Navbar";
import Sliding_Images from "../../components/Sliding_Images";
import Footer from "../../components/Footer";
import Newsletter from "../../components/Newsletter";
import Articale from "../../components/Articale";
import Banner from "../../components/Banner";
import Cards from "../../components/Cards";
import Features from "../../components/Features";
import AnimatedElement from "../../components/AnimatedElement";
import ELements from "../../components/ELements";
import Animation2 from "../../components/Animation2";
import React from "react";

export default function Landing() {
    
  return (
      <div className=" flex justify-center items-center flex-col w-screen overflow-hidden">
        <div className=" w-[90%] bg-white">
          
          <AnimatedElement>
            <Navbar />
          </AnimatedElement>
          <Sliding_Images />
          <AnimatedElement>
            <Features />
          </AnimatedElement>
          <ELements />
        </div>
        <div className=" w-[90%] bg-white">
        <AnimatedElement>
          <Cards/>
        </AnimatedElement>
          
        </div>
        <div  className=" bg-gray-100">
          <AnimatedElement>
            <Banner/>
          </AnimatedElement>  
        </div>
        
        <div className=" w-[90%] bg-white">
          <Animation2>
            <Articale/>
          </Animation2>
          
        </div>
        <div className=" bg-gray-100">
          <AnimatedElement>
            <Newsletter/>
          </AnimatedElement>
          
          <Footer/> 
        </div>
      </div>
  );
}
