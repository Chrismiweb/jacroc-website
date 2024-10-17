import React from 'react'
import { CiSearch } from "react-icons/ci";
import { FaChartLine } from "react-icons/fa";
import { GiBrain } from "react-icons/gi";
import { TbBulb } from "react-icons/tb";
import { SiMicrostrategy } from "react-icons/si";
import { BsPersonWorkspace } from "react-icons/bs";
function Approach() {
    const approach = [
        {
            icon: <CiSearch/>,
            header: "THE BRIEF",
            content1: "1. Understand clients pain",
            content2: "2. Understand the challenges",
            content3: "3. Understanding scope of work",
            content4: "4. Understand what's required from client or brand.",
        },
        {
            icon: <FaChartLine/>,
            header: "MARKET RESEARCH",
            content1: "1. Research data is gathered from market, on the ground & collaborative research.",
            content2: "2. Market research & insights"
        },
        {
            icon: <GiBrain/>,
            header: "BRAINSTORMING",
            content1: "1. We craft ideas supported by research",
            content2: "2. Strategy with client/brand",
           
        },
        {
            icon: <TbBulb/>,
            header: "CREATE",
            content1: "1. Select the best ideas and expand on the thinking",
            content2: "2. Design, unite creativity, data &technology."
        },
        {
            icon: <SiMicrostrategy/>,
            header: "STRATEGY",
            content1: "1. We create a creative strategy for each idea/challenge",
            content2: "2. Scrutinize internally",
            content3: "3. Showcase & pre-approval"
        },
        {
            icon: <BsPersonWorkspace/>,
            header: "IMPLEMENTATION",
            content1: "1. Key driver implementation",
            content2: "2. Track and monitor success",
            content3: "3. Measure ROI"
        }

    ]
  return (
    <div className='w-[100%] gap-[30px] bg-[#312209] py-[70px] flex flex-col justify-center items-center'>
    {/* <div className='w-[80%]'>
        <p className='text-white w-[20%] flex py-[10px] justify-center items-center bg-yellow-400 text-[25px] font-bold'>OUR TEAM</p>
        <p className='w-[70%] font-medium text-[15px]'>Our company was formed by two powerhouse companies Jacoth (PTY) Ltd and Rockwell Africa Group that came together since its inception to form JacRoc Creatives. The brainchild <b>JacRoc Creatives</b> 100% Black owned Agency was formed by two experienced Black young entrepreneurs to provide brands with insight and inclusion in the diverse African culture market.
        </p>
    </div> */}
    <div className='w-[85%]'>
        {/* <div className='w-[100%] flex'>
            <p className='w-full text-white text-[50px]'>OUR APPROACH</p>
        </div> */}
        <div className='w-[100%] flex gap-[50px] items-center justify-start'>
            <p className='w-[10%] text-white text-right text-[25px]'>OUR APPROACH</p>
            <p className='w-[90%] text-white text-[40px]'>|  Collaborative Approach, Effective Results.</p>
        </div>
    </div>
    <div className='w-[85%] bg-[#7A7A7A] h-[1px]'></div>
    <div className='w-[85%] grid gap-[20px] grid-cols-3'>
            {
                approach.map((a, index)=>(
                    <div key={index} className='w-[95%] h-[330px] justify-center items-center flex  bg-[#312209] border border-[#F6A21C] rounded-[25px]'>
                        <div className='w-[95%] flex flex-col gap-[15px] px-[20px] py-[20px] border rounded-[25px] h-[310px] border-[#7A7A7A]'>
                            <div className='w-[80px] rounded-full flex justify-center items-center h-[80px] bg-[#312209] border-2 border-[#F6A21C] '>
                                <div className='w-[60px] rounded-full flex justify-center items-center h-[60px] bg-[#F6A21C] text-[30px]'>{a.icon}</div>

                            </div>
                            <div className='text-white text-[20px]'>{a.header}</div>
                            <div>
                                <p className='text-white text-[14px]'>{a.content1}</p>
                                <p className='text-white text-[14px]'>{a.content2}</p>
                                <p className='text-white text-[14px]'>{a.content3}</p>
                                <p className='text-white text-[14px]'>{a.content4}</p>

                            </div>

                        </div>
                    </div>
                ))
            }
    </div>

   
</div>
  )
}

export default Approach
