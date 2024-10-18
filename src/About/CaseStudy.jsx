import React from 'react'
import case1 from '../images/case1.jpg'
import case2 from '../images/case2.png'
import case3 from '../images/case.jpg'


function CaseStudy() {
  return (
    <div id="case-study" className='w-[100%] gap-[30px] bg-orange-100 py-[50px] flex flex-col justify-center items-center'>
        {/* <div className='w-[80%]'>
            <p className='text-white w-[20%] flex py-[10px] justify-center items-center bg-yellow-400 text-[25px] font-bold'>OUR TEAM</p>
            <p className='w-[70%] font-medium text-[15px]'>Our company was formed by two powerhouse companies Jacoth (PTY) Ltd and Rockwell Africa Group that came together since its inception to form JacRoc Creatives. The brainchild <b>JacRoc Creatives</b> 100% Black owned Agency was formed by two experienced Black young entrepreneurs to provide brands with insight and inclusion in the diverse African culture market.
            </p>
        </div> */}
        <div className='w-[90%] gap-[40px] justify-center items-center flex flex-col lg:w-[80%]'>
          <p className='text-[50px]'>CASE STUDY</p>
          <p className='text-center text-[17px]'>WE HAVE PASSION FOR INNOVATIVE GREAT CREATIVE IDEAS, UNIQUE EXPERIENCES, EXECUTION.
 WE BRIDGE THE GAP THROUGH CONNECTING PEOPLE, CULTURE, TECHNOLOGY AND BRANDS
</p>
        </div>
        <div className='w-[90%] md:w-[80%] bg-yellow-400 h-[1px]'></div>
        <div className='w-[90%] lg:w-[85%]'>
            <div className='w-[100%] gap-[20px] lg:gap-0 justify-between items-center flex flex-col lg:flex-row'>
                <div className='w-[100%] md:w-[69%] lg:w-[33%] gap-[20px] rounded-[15px] border-yellow-400 border py-[35px] flex flex-col px-[30px] bg-white'>
                    <div>
                        <p className='text-black text-[19px] md:text-[16px] font-semibold'>TRANSNET FOUNDATION
                        </p>
                        {/* <p className='text-yellow-500 text-[13px]'>Director/Co-Founder (JacRoc Creatives)</p> */}
                    </div>
                    <div className='w-[100%] bg-yellow-400 h-[2px]'></div>
                    <p className='text-[14px] pt-[20px] lg:h-[90px] md:pt-0 md:text-[12px]'>The Transnet Foundation Blitz's hosted 500 employees in Ocean View Pre school  for their CSI they were treated to activities, entertainment, food and community engagement..
                    </p>
                    <div className='w-[100%] rounded-[10px] overflow-hidden h-[250px] flex'>
                        <img src={case1} className='object-fill w-full h-full' alt="" />
                    </div>
                </div>
                <div className='w-[100%] md:w-[69%] lg:w-[33%] gap-[20px] rounded-[15px] border-yellow-400 border py-[35px] flex flex-col px-[30px] bg-white'>
                    <div>
                        <p className='text-black text-[19px] md:text-[16px] font-semibold'>GAUTENG PREMIERS OFFICE- GPG

                        </p>
                        {/* <p className='text-yellow-500 text-[13px]'>Director/Co-Founder (JacRoc Creatives)</p> */}
                    </div>
                    <div className='w-[100%] bg-yellow-400 h-[2px]'></div>
                    <p className='text-[14px] pt-[20px] md:pt-0 lg:h-[90px] md:text-[12px]'>GPG is the Premiers office they have an initiative called TSHEPO1MILLION which they wanted to  demonstrate the positive effect on South Africa’s youth, through social media & video production
                    </p>
                    <div className='w-[100%] rounded-[10px] overflow-hidden h-[250px] flex'>
                        <img src={case2} className='object-fill w-full h-full' alt="" />
                    </div>
                </div>
                <div className='w-[100%] md:w-[69%] lg:w-[33%] gap-[20px] rounded-[15px] border-yellow-400 border py-[35px] flex flex-col px-[30px] bg-white'>
                    <div>
                        <p className='text-black text-[19px] md:text-[16px] font-semibold'>AUTHENTIC SUNDAYS
                        </p>
                        {/* <p className='text-yellow-500 text-[13px]'>Director/Co-Founder (JacRoc Creatives)</p> */}
                    </div>
                    <div className='w-[100%] bg-yellow-400 h-[2px]'></div>
                    <p className='text-[14px] pt-[20px] md:pt-0 lg:h-[90px] md:text-[12px]'>Africa No.1 leading urban street culture showcase. A unique brand that speaks to the elements in urban culture, fashion, Music, Art &Culture and Technology
                    </p>
                    <div className='w-[100%] rounded-[10px] overflow-hidden h-[250px] bg-red flex'>
                        <img src={case3} className='object-fill w-full h-full' alt="" />
                    </div>
                </div>
               
               
               
            </div>
        </div>
    </div>
  )
}

export default CaseStudy