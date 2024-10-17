import React from 'react'
import about1 from '../images/about1.jpg'
import about2 from '../images/about2.jpg'


function About() {
  return (
    <div className='w-[100%] border-y-[1px] border-yellow-400 gap-[50px] bg-orange-100 py-[50px] flex flex-col justify-center items-center'>
            <div className='lg:w-[80%] w-[90%] flex flex-col gap-[20px] items-center justify-center'>
                <h1 className='text-center text-[40px] font-semibold'>ABOUT JacRoc Creatives </h1>
                <p className='text-center w-[100%] md:w-[80%]'>We are <span className='text-yellow-500 font-bold'>Diversified  100% Black owned & Africa Focused Media & Marketing Creative Agency</span> compromising of Innovative, Experienced Professionals. We pride ourselves with our <span className='text-yellow-500 font-bold'>12 YEARS</span> track record of understanding our clients needs and developing the best customized solutions for each project. We pride ourselves in being the leading communications agency that continuously adds new innovative products and services to our portfolio to allow our clients to continue <span className='text-yellow-500 font-bold'>ACCELEARTING THEIR BRANDS TO STANDOUT AMONG COMPETITORS</span> </p>
            </div>
            <div className='w-[90%] lg:w-[80%] flex flex-col md:flex-row  gap-[20px] md:items-center md:justify-around'>
                <div className='w-[100%] overflow-hidden rounded-[20px] md:w-[35%] flex h-[400px] bg-red-50'>
                    <img src={about1} className='w-full h-full object-cover' alt="" />
                </div>
                <div className='w-[100%] md:w-[50%] gap-[30px] flex flex-col'>
                    <div className='w-[100%] gap-[10px] flex flex-col'>
                        <div className='flex justify-between items-center gap-[20px]'>
                            <h1 className='text-[20px] text-yellow-500 underline font-bold'>OUR PHILOSOHY</h1>
                            {/* <div className='w-[60%] h-[2px] bg-yellow-400'></div> */}
                        </div>
                        <p className='text-[15px]'>We live our clients  brand, create great innovative  ideas and create solutions that will suite our clients needs. We are a growing agency with passionate individuals which gives us added advantage of focusing on our clients and to always better our services</p>
                    </div>
                    <div className='w-[100%] gap-[10px] flex flex-col'>
                        <div className='flex justify-between items-center gap-[20px]'>
                            <h1 className='text-[20px] text-yellow-500 underline font-bold'>CORE VALUES</h1>
                            {/* <div className='w-[60%] h-[2px] bg-yellow-400'></div> */}
                        </div>
                        <div>
                            <li>Authenticity</li>
                            <li>Honesty & transparency</li>
                            <li>Build trust through communication</li>
                            <li>Strive to always be innovative and think out the box</li>
                            <li>Accountability</li>
                            <li>Value our people and continuously strive for growth </li>
                        </div>
                    </div>
                </div>

            </div>
            <div className='w-[90%] lg:w-[80%] flex flex-col-reverse md:flex-row  gap-[20px] md:items-center md:justify-around'>
                <div className='w-[100%] md:w-[50%] gap-[30px] flex flex-col'>
                    <div className='w-[100%] gap-[10px] flex flex-col'>
                        <div className='flex justify-between items-center gap-[20px]'>
                            <h1 className='text-[20px] text-yellow-500 underline font-bold'>OUR VISION</h1>
                            {/* <div className='w-[60%] h-[2px] bg-yellow-400'></div> */}
                        </div>
                        <p className='text-[15px]'>Be the leading agency in innovation of bridging the gap, by connecting people, culture, technology, and brands in the media and marketing space.
                        </p>
                    </div>
                    <div className='w-[100%] gap-[10px] flex flex-col'>
                        <div className='flex justify-between items-center gap-[20px]'>
                            <h1 className='text-[20px] text-yellow-500 underline font-bold'>BUSINESS STRATEGY</h1>
                            {/* <div className='w-[50%] h-[2px] bg-yellow-400'></div> */}
                        </div>
                        <div>
                            <li>Understanding clients business and objectives
                            </li>
                            <li>Understand project objectives – expectations, time, costs, quality
                            </li>
                            <li>Conceptualize ideas & create solutions that work for audience & brands
                            </li>
                            <li>Combine innovation, experience, market analysis & research in product development.
                            </li>
                           
                        </div>
                    </div>
                </div>
                <div className='w-[100%] overflow-hidden rounded-[20px] md:w-[35%] flex h-[400px] bg-red-500'>
                    <img src={about2} className='w-full h-full object-cover' alt="" />
                </div>
            </div>
    </div>
  )
}

export default About