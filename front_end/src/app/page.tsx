import Image from "next/image";
import Navbar from "../../components/Navbar";
import Sliding_Images from "../../components/Sliding_Images";
import Footer from "../../components/Footer";
import Newsletter from "../../components/Newsletter";
import Articale from "../../components/Articale";
import Banner from "../../components/Banner";

export default function Home() {
  return (
    <>
      <div className=" flex justify-center items-center flex-col">
        <div className=" w-[90%] bg-white">
          <Navbar />
          <Sliding_Images />
          
        </div>
        <div  className=" bg-gray-100">
           <Banner/>
        </div>
        
        <div className=" w-[90%] bg-white">
          <Articale/>
        </div>
        <div className=" bg-gray-100">
          <Newsletter/>
          <Footer/> 
        </div>
      </div>


    </>
  );
}
