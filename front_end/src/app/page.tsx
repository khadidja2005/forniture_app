import Image from "next/image";
import Navbar from "../../components/Navbar";
import Sliding_Images from "../../components/Sliding_Images";
import Footer from "../../components/Footer";

export default function Home() {
  return (
    <>
      <div className=" flex justify-center items-center flex-col">
        <div className=" w-[90%]">
          <Navbar />
          <Sliding_Images />
        </div>
        <div>
          <Footer/>
        </div>
      </div>


    </>
  );
}
