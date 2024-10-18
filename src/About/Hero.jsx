import React from 'react'
import './Hero.css'
import img1 from '../images/founder1.jpg'
import img2 from '../images/founder2.jpg'
import img3 from '../images/about1.jpg'
import img4 from '../images/about2.jpg'
import vid from '../images/vid.mp4'
import { FaArrowAltCircleDown } from "react-icons/fa";


function Hero() {
  return (
    // <div className='w-[100%] py-[10px] flex justify-around items-center'>
        
    <div className="relative w-full py-[250px] h-[700px] md:h-[450px] flex justify-around items-center overflow-hidden">
      <video autoPlay loop muted playsInline className="absolute top-1/2 left-1/2 w-full h-full object-cover transform -translate-x-1/2 -translate-y-1/2">
        <source src={vid} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="absolute inset-0 bg-black opacity-75 z-0"></div>
      <div className='absolute w-[100%] gap-[30px] md:gap-0  md:h-[450px] flex flex-col md:flex-row justify-around items-center'>
            <div className='w-[80%] text-center md:text-start md:w-[50%] items-center md:items-start flex flex-col gap-[20px]'>
                <h1 className='text-white font-bold font-sans text-[50px]'>About JacRoc Creatives </h1>
                <p className='text-white text-center md:text-start'>WE HAVE PASSION FOR INNOVATIVE GREAT CREATIVE IDEAS, UNIQUE EXPERIENCES, EXECUTION.
 WE BRIDGE THE GAP THROUGH CONNECTING PEOPLE, CULTURE, TECHNOLOGY AND BRANDS
</p>
                  <a href="#about" className='bg-[#F6A21C] gap-[15px] rounded-full hover:bg-yellow-700 hover:duration-500 hover:transition-all justify-center items-center flex font-bold text-white w-[70%] lg:w-[30%] py-[10px]'>Learn More <FaArrowAltCircleDown /></a>
            </div>
            <div className=' grid grid-cols-2 md:flex md:flex-col gap-[10px]'>
                <div className='h-[100px] overflow-hidden w-[150px] border-white border-[2px]'>
                    <img src={img1} className='contain ' alt="" />
                </div>
                <div className='h-[100px] overflow-hidden w-[150px] border-white border-[2px]'>
                    <img src={img2} className='contain ' alt="" />
                </div>
                <div className='h-[100px] overflow-hidden w-[150px] border-white border-[2px]'>
                    <img src={img3} className='contain ' alt="" />
                </div>
                <div className='h-[100px] overflow-hidden w-[150px] border-white border-[2px]'>
                    <img src={img4} className='contain ' alt="" />
                </div>
            </div>
      </div>
      
    </div>
    
  )
}

export default Hero
