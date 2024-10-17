import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import brand1 from "../images/brand1.png";
import brand2 from "../images/brand2.png";
import brand3 from "../images/brand3.png";
import brand4 from "../images/brand4.png";
import brand5 from "../images/brand5.png";
import brand6 from "../images/brand6.png";
import brand7 from "../images/brand7.png";
import brand8 from "../images/brand8.png";
import brand9 from "../images/brand9.png";
import brand10 from "../images/brand10.jpg";
import brand11 from "../images/brand11.png";
import brand12 from "../images/brand12.png";
import brand13 from "../images/brand13.png";
import brand14 from "../images/brand14.jpg";
import brand15 from "../images/brand15.jpg";

function Brand() {
  return (
    <div className="w-[100%] px-[30px] md:px-[70px] py-[50px] bg-orange-50 flex flex-col gap-[30px] mx-auto">
        <div className='w-[90%] gap-[40px] md:gap-0 flex flex-col lg:w-[80%]'>
            <div className='w-[100%] flex'>
                <p className='w-full text-[30px] md:text-[50px]'>OUR LOYAL BRANDS</p>
            </div>
            WE ‘VE HAD THE PRIVILAGE OF DEVELOPING SOLUTIONS FOR MANY 
LEADING SOUTH AFRICAN AND INTERNATIONAL BRANDS INCLUDING TRANSNET, SAB,GAUTENG PREMIERS OFFICE, DIMENSION DATA, NOKIA, (BLA)BLACK LAWYERS ASSOCIATION, SASSA 

        </div>
        <div className='w-[90%] lg:w-[100%] bg-[#7A7A7A] h-[1px]'></div>


      <Carousel
        autoPlay={true}
        interval={3000}
        infiniteLoop={true}
        showThumbs={false}
        showStatus={false}
        showIndicators={true}
        stopOnHover={false}
      >
        {/* 5 images per slide on large screens, 3 on tablets, 2 on phones */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          <img className="w-full p-2" src={brand1} alt="Brand 1" />
          <img className="w-full p-2" src={brand2} alt="Brand 2" />
          <img className="w-full p-2" src={brand3} alt="Brand 3" />
          <img className="w-full p-2" src={brand4} alt="Brand 4" />
          <img className="w-full p-2" src={brand5} alt="Brand 5" />
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          <img className="w-full p-2" src={brand6} alt="Brand 6" />
          <img className="w-full p-2" src={brand7} alt="Brand 7" />
          <img className="w-full p-2" src={brand8} alt="Brand 8" />
          <img className="w-full p-2" src={brand9} alt="Brand 9" />
          <img className="w-full p-2" src={brand10} alt="Brand 10" />
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          <img className="w-full p-2" src={brand11} alt="Brand 11" />
          <img className="w-full p-2" src={brand12} alt="Brand 12" />
          <img className="w-full p-2" src={brand13} alt="Brand 13" />
          <img className="w-full p-2" src={brand14} alt="Brand 14" />
          <img className="w-full p-2" src={brand15} alt="Brand 15" />
        </div>
      </Carousel>
      <div className="w-[100%] flex justify-end items-end">
        <button className="bg-[#F6A21C] gap-[15px] rounded-full hover:bg-yellow-700 hover:duration-500 hover:transition-all justify-center items-center flex font-bold text-white w-[70%] md:w-[40%] lg:w-[20%] py-[10px]">WORK WITH US</button>
      </div>
    </div>
  );
}

export default Brand;
