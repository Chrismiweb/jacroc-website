import React from 'react'
import { FaPhone } from "react-icons/fa";
import { MdMarkEmailRead } from "react-icons/md";
import { FaSquareInstagram } from "react-icons/fa6";

function Contact() {
  return (
    <div id="contact" className='w-[100%] border-y-2 gap-[20px] border-[#F6A21C] bg-orange-50 py-[50px] flex flex-col justify-center items-center'>
        <h1 className='text-[60px] text-center'>GET IN TOUCH</h1>
        <form action="" className='bg-[#fae6c5] gap-[40px] lg:gap-0 flex flex-col-reverse  lg:flex-row justify-between items-center md:w-[95%] lg:w-[80%] p-[20px] rounded-[20px] shadow-2xl shadow-slate-400-500/500'>
            <div className=' w-[100%] lg:w-[40%] rounded-[20px] flex justify-center gap-[30px] py-[30px] items-center flex-col bg-orange-100 '>
                <p className=' w-[90%] lg:w-[80%] text-[20px] text-start'>CONTACT INFORMATION</p>
                <div className='bg-[#312209] py-[20px] rounded-[20px] w-[90%] lg:w-[80%] gap-[10px] flex justify-start px-[20px] items-center'>
                    <div className='w-[55px]  flex justify-center bg-[#fae6c5] items-center h-[55px] rounded-full'>
                        <FaPhone className='text-[20px]'/>
                    </div>
                    <div>
                        <p className='text-white text-[20px] md:text-[25px]'>PHONE</p>
                        <p className='text-white text-[14px]'>+27 74 250 9701 / 079 843 4368</p>
                    </div>
                </div>
                <div className='bg-[#312209] py-[20px] rounded-[20px] w-[90%] lg:w-[80%] gap-[10px] flex justify-start px-[20px] items-center'>
                    <div className='w-[55px]  flex justify-center bg-[#fae6c5] items-center h-[55px] rounded-full'>
                        <MdMarkEmailRead className='text-[20px]'/>
                    </div>
                    <div>
                        <p className='text-white text-[20px] md:text-[25px]'>EMAIL</p>
                        <p className='text-white text-[14px]'>Info@JacRoc.co.za</p>
                    </div>
                </div>
                <div className='bg-[#312209] py-[20px] rounded-[20px] w-[90%] lg:w-[80%] gap-[10px] flex justify-start px-[20px] items-center'>
                    <div className='w-[55px]  flex justify-center bg-[#fae6c5] items-center h-[55px] rounded-full'>
                        <FaSquareInstagram className='text-[20px]'/>
                    </div>
                    <div>
                        <p className='text-white text-[20px] md:text-[25px]'>INSTAGRAM</p>
                        <p className='text-white text-[14px]'>JacRoc_Creatives</p>
                    </div>
                </div>

            </div>
            <div className='w-[100%] lg:w-[70%] gap-[20px] flex flex-col bg-transparent lg:px-[30px]'>
                <div className='w-[100%] flex flex-col gap-[5px]'>
                    <p className='text-[20px]'>Email</p>
                    <input type="email" name="" id="" className='bg-orange-50 rounded-[20px] py-[10px] w-[100%] px-[20px]' placeholder='Your Email'/>
                </div>
                <div className='w-[100%] flex flex-col gap-[5px]'>
                    <p className='text-[20px]'>Name</p>
                    <input type="text" name="" id="" className='bg-orange-50 rounded-[20px] py-[10px] w-[100%] px-[20px]' placeholder='Your Name'/>
                </div>
                <div className='w-[100%] flex flex-col gap-[5px]'>
                    <p className='text-[20px]'>Message</p>
                    <textarea type="text" name="" id="" className='bg-orange-50 rounded-[20px] py-[10px] w-[100%] px-[20px] h-[120px]' placeholder='Your Message'/>
                </div>
                <div className='w-[100%] flex justify-end'>
                    <button className='bg-[#F6A21C] gap-[15px] rounded-full hover:bg-yellow-700 hover:duration-500 hover:transition-all justify-center items-center flex font-bold text-white w-[70%] md:w-[50%] lg:w-[30%] py-[10px]'>Submit</button>
                </div>
            </div>
        </form>
    </div>
  )
}

export default Contact
