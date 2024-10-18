import React from 'react'
import { FaChartLine } from "react-icons/fa";
import { SiMicrostrategy } from "react-icons/si";
import { BsPersonWorkspace } from "react-icons/bs";
import { LuCalendarRange } from "react-icons/lu";
import { SiAntdesign } from "react-icons/si";
import { FaPeopleRoof } from "react-icons/fa6";
function Service() {
    const approach = [
        {
            icon: <FaChartLine/>,
            header: "EXPERIENTIAL MARKETING ",
            content1: "1. Consumer facing activations Targeted Demographics",
            content2: "2. Brand Engagement",
            content3: "3. Brand Insight & Training",
            content4: "4. Stakeholder Engagement",
            content5: "5. Community Engagements",

        },
        {
            icon: <LuCalendarRange/>,
            header: "BRAND MANAGEMENT ",
            content1: "1. Brand Strategy",
            content2: "2. Brand Culture",
            content3: "3. Brand Positioning ",
            content4: "4. Brand Marketing",
            content5: "5. Brand Performance",
            content6: "6. Grow & Sustain Brand Equity ",

        },
        {
            icon: <SiMicrostrategy/>,
            header: "RETAIL-OOH MARKETING  ",
            content1: "1. Outdoor Advertising",
            content2: "2. Pro Active Sales Solutions",
            content3: "3. Retail Visibility",
            content4: "4. New Product Launches",
            content5: "5. Category Management",
            content6: "6. Activation Vehicles",
            content7: "7. Research teams",

           
        },
        {
            icon: <BsPersonWorkspace/>,

            header: "DIGITAL",
            content1: "1. Content creation",
            content2: "2. Email & SMS",
            content3: "3. Email banners",
            content4: "4. Marketing Lead",
            content5: "5. Capture & Database Management"
        },
        {
            icon: <SiAntdesign/>,
            header: "DESIGN",
            content1: "1. Web Design & Development ",
            content2: "2. Corporate Identity",
            content3: "3. Motion Design & Graphics",
           
        },
        {
            icon: <FaPeopleRoof/>,
            header: "EVENT DESIGN & P RODUCTION",
            content1: "1. Event Development  &  Management ",
            content2: "2. Location & venue Scout ",
            content3: "3. Live Streaming",
             content4: "4. Talent Management",
            content5: "5. Sponsorship Management"
           

        }

    ]
  return (
    <div id="service" className='w-[100%] gap-[30px] bg-[#312209] py-[70px] flex flex-col justify-center items-center'>
    {/* <div className='w-[80%]'>
        <p className='text-white w-[20%] flex py-[10px] justify-center items-center bg-yellow-400 text-[25px] font-bold'>OUR TEAM</p>
        <p className='w-[70%] font-medium text-[15px]'>Our company was formed by two powerhouse companies Jacoth (PTY) Ltd and Rockwell Africa Group that came together since its inception to form JacRoc Creatives. The brainchild <b>JacRoc Creatives</b> 100% Black owned Agency was formed by two experienced Black young entrepreneurs to provide brands with insight and inclusion in the diverse African culture market.
        </p>
    </div> */}
    <div className='w-[90%] md:w-[85%] lg:w-[85%]'>
        {/* <div className='w-[100%] flex'>
            <p className='w-full text-white text-[50px]'>OUR APPROACH</p>
        </div> */}
        <div className='w-[100%] flex flex-col md:flex-row gap-[20px] md:gap-[50px] items-center justify-center md:justify-start'>
            <p className='w-[100%] text-white md:w-[10%] md:text-end text-center text-[35px] md:text-[25px]'>OUR SERVICES</p>
            <p className='md:w-[80%] text-center text-white text-[25px] md:text-[30px] lg:text-[40px]'> UNLOCKS YOUR BRAND 
            </p>
        </div>
    </div>
    <div className='w-[90%] lg:w-[85%] bg-[#7A7A7A] h-[1px]'></div>
    <div className='w-[90%] lg:w-[85%] grid gap-[20px] grid-col-1 md:grid-cols-2 lg:grid-cols-3'>
            {
                approach.map((a, index)=>(
                    <div key={index} className='w-[95%] h-[350px] justify-center items-center flex  bg-[#312209] border border-[#F6A21C] rounded-[25px]'>
                        <div className='w-[95%] flex flex-col gap-[15px] px-[20px] py-[20px] border rounded-[25px] h-[330px] border-[#7A7A7A]'>
                            <div className='w-[80px] rounded-full flex justify-center items-center h-[80px] bg-[#312209] border-2 border-[#F6A21C] '>
                                <div className='w-[60px] rounded-full flex justify-center items-center h-[60px] bg-[#F6A21C] text-[30px]'>{a.icon}</div>

                            </div>
                            <div className='text-white text-[20px]'>{a.header}</div>
                            <div>
                                <p className='text-white text-[14px]'>{a.content1}</p>
                                <p className='text-white text-[14px]'>{a.content2}</p>
                                <p className='text-white text-[14px]'>{a.content3}</p>
                                <p className='text-white text-[14px]'>{a.content4}</p>
                                <p className='text-white text-[14px]'>{a.content5}</p>
                                <p className='text-white text-[14px]'>{a.content6}</p>
                                <p className='text-white text-[14px]'>{a.content7}</p>



                            </div>

                        </div>
                    </div>
                ))
            }
    </div>

   
</div>
  )
}

export default Service
