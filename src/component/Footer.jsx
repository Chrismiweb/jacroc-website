import React from 'react'
import logo from '../images/logo.png';


function Footer() {
    const date = new Date().getFullYear()

  return (
    <div className='flex flex-col gap-[30px] bg-[#312209] py-[60px] w-[100%]'>
        <div className='w-[100%] px-[20px] md:px-0 gap-[20px] md:gap-0 flex flex-col md:flex-row justify-around '>
            <div className='flex w-[90%] md:w-[35%] flex-col gap-[20px]'>
                <img className="w-[90vw] md:w-[15vw]" src={logo} alt="" />
                <p className='w-full text-[25px] text-white md:text-[25px]'><b>HELLO.</b> BE BOLD NOT <span className='strikethrough-red text-white'>BORING</span></p>
            </div>
            <div className='flex flex-col gap-[7px]'>
                <h1 className='text-[17px] mb-3 font-bold text-white'>Contact Us</h1>
                <p className='text-[15px] text-white'>Email:  Info@JacRoc.co.za
                </p>
                <p className='text-[15px] text-white'>Instagram: JacRoc_Creatives</p>
                <p className='text-[15px] text-white'>Phone NO.: +27 74 250 9701 / 079 843 4368</p>
            </div>
            <div className='flex flex-col gap-[7px]'>
                <h1 className='text-[17px] text-white mb-3 font-bold'>About Us</h1>
                <a href="#service" className='text-[15px] text-white'>Our Service</a>
                <a href="#team" className='text-[15px] text-white'>Our Team</a>
                <a href="#approach" className='text-[15px] text-white'>Our Approach</a>
                <a href="#brand" className='text-[15px] text-white'>Our Loyal Brand</a>
            </div>
        </div>
        <div className='w-[100%] justify-center items-center flex flex-col gap-[20px]'>
            <div className='w-[100%] h-[1px] border-black border'></div>
                <p className='w-[100%] md:w-[50%] text-white text-center'>Copyright © {date} JacRoc Creative All rights reserved
                Site Operator: JacRoc</p>
                
        </div>
    </div>
  )
}

export default Footer