import React from 'react'
import logo from '../images/logo.png';
import { useState } from 'react';
import { CiMenuBurger } from "react-icons/ci";
import { IoClose } from "react-icons/io5";

// import Home from '../page';
function Navbar() {
    const [navbar, setNavbar] = useState(false);

    function handleNav() {
        setNavbar(!navbar);
    }
  
    
  return (
    <div className='custom-gradient w-[100%] flex-col justify-center flex items-center'>
    <div className="w-[80%] py-[30px] flex justify-between items-center ">
       <a href='/'>
       <div>
            <img className="w-[90vw] md:w-[7vw]" src={logo} alt="" />
        </div>
       </a>
        <div className='md:flex md:items-center hidden md:justify-center md:gap-[25px] md:font-medium md:text-[14px]'>
            <a href=""><p>OUR COMPANY</p></a>
            <a href=""><p>OUR COMPANY</p></a>
            <a href=""><p>OUR COMPANY</p></a>
            <a href=""><p>OUR COMPANY</p></a>
            <a href=""><p>OUR COMPANY</p></a>

        </div>
        
        <div 
        onClick={handleNav} 
        className='md:hidden flex font-extrabold text-[20px]'>{navbar ? <IoClose className='text-black' /> : <CiMenuBurger className='text-black' /> }</div>
    </div>
    {navbar && 
        <div className='custom-grad h-[100vh] transition-all duration-1000 ease-in-out w-[100%] items-center py-[25px] text-[20px] font-semibold gap-[18px] flex flex-col '>
            <a className='mt-[30px]' href="/"><p className='text-black'>Home</p></a>
            <a href="/about"><p className='text-black'>About</p></a>
            <a href="/courses"><p className='text-black'>Courses</p></a>
            <a href="/services"><p className='text-black'>Services</p></a>
            <a href="/career"><p className='text-black'>Career</p></a>
            <a href='/contact'>
                <button className='flex py-[10px] md:text-[12px] rounded-xl md:font-bold md:hover:bg-[#dd9015] md:transition-all md:ease-in-out md:flex duration-1000 text-white px-[20px] bg-[#FB9B02]'>Contact Us</button>

            </a>
        </div>
    }
</div>
  )
}

export default Navbar