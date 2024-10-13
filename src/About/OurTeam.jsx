import React from 'react'
import partner1 from '../images/founder1.jpg'
import partner2 from '../images/founder2.jpg'


function OurTeam() {
   
  return (
    <div className='w-[100%] gap-[30px] bg-orange-50 py-[50px] flex flex-col justify-center items-center'>
        {/* <div className='w-[80%]'>
            <p className='text-white w-[20%] flex py-[10px] justify-center items-center bg-yellow-400 text-[25px] font-bold'>OUR TEAM</p>
            <p className='w-[70%] font-medium text-[15px]'>Our company was formed by two powerhouse companies Jacoth (PTY) Ltd and Rockwell Africa Group that came together since its inception to form JacRoc Creatives. The brainchild <b>JacRoc Creatives</b> 100% Black owned Agency was formed by two experienced Black young entrepreneurs to provide brands with insight and inclusion in the diverse African culture market.
            </p>
        </div> */}
        <div className='w-[80%]'>
            <div className='w-[100%] flex'>
                <p className='w-full text-[50px]'><b>HELLO.</b> BE BOLD NOT <span className='strikethrough-red text-black'>BORING</span></p>
            </div>
            <div className='w-[100%] flex gap-[20px] items-center justify-start'>
                <p className='text-black w-[10%] text-end text-[30px]'>OUR TEAM</p>
                <p className='w-[70%] text-[14px]'>Our company was formed by two powerhouse companies Jacoth (PTY) Ltd and Rockwell Africa Group that came together since its inception to form JacRoc Creatives. The brainchild <b>JacRoc Creatives</b> 100% Black owned Agency was formed by two experienced Black young entrepreneurs to provide brands with insight and inclusion in the diverse African culture market.</p>
            </div>
        </div>
        <div className='w-[80%] bg-yellow-400 h-[1px]'></div>
        <div className='w-[80%]'>
            <div className='w-[100%] justify-between items-center flex'>
                <div className='w-[48%] gap-[20px] rounded-[30px] border-yellow-400 border py-[35px] flex flex-col px-[30px] bg-white'>
                    <div>
                        <p className='text-black text-[18px] font-semibold'>Jacob Mngomezulu Shelembe</p>
                        <p className='text-yellow-500 text-[13px]'>Director/Co-Founder (JacRoc Creatives)</p>
                    </div>
                    <div className='w-[100%] bg-yellow-400 h-[2px]'></div>
                    <p className='text-[12px]'>Jacob had always been interested in entrepreneurship, so when he landed a job as a project manager at Vodacom, he was thrilled. He quickly proved himself to be a valuable asset to the team, consistently meeting deadlines and exceeding expectations. After a few years, he was offered a position as a marketing director at Old Mutual. Although it wasn't in the field he was originally interested in, Jacob saw it as an opportunity to expand his skills and knowledge.Feeling confident in his abilities and eager to continue growing his business, Jacob founded Jacoth Pty Ltd in 2012. The company has been running successfully spearheading crucial campaigns such as the Transnet Employee Volunteer Blitz, that included Activations, events management and campaign conceptualization. Through these campaigns Jacoth has contributed to previously disadvantaged communities, which is His drive.</p>
                    <div className='w-[100%] rounded-[20px] overflow-hidden h-[450px] bg-red-200 flex'>
                        <img src={partner1} className='object-fill w-full h-full' alt="" />
                    </div>
                </div>
                <div className='w-[48%] gap-[20px] rounded-[30px] border-yellow-400 border py-[35px] flex flex-col px-[30px] bg-white'>
                    <div>
                        <p className='text-black text-[18px] font-semibold '>Thabo Moagi</p>
                        <p className='text-yellow-500 text-[13px]'>Director/Co-Founder (JacRoc Creatives)</p>
                    </div>
                    <div className='w-[100%] bg-yellow-400 h-[2px]'></div>
                    <p className='text-[12px] pb-[38px]'>An Entrepreneur and Marketing Specialist is the current Director and Co-Founder of the company. Thabo has led a few youth development organizations NGO’s. He has also founded and occupied senior management positions in 2 companies in the marketing industry. He has worked for international brands such as LVMH Brands (Louie Vuitton Vevue Cliquit, Moet, Hennessy) as a Brand Builder. He has worked on numerous campaigns with top brands/Organizations such as Transnet, Nokia,SAB, ABI, Absolute Vodka. Further more he has managed PR Campaigns for ex late Mayor Geoff Makhubo. Thabo has led the company from conceptualization to where it is today. Thabo is a Market Management, Venture Creation graduate.</p>
                    <div className='w-[100%] rounded-[20px] overflow-hidden h-[450px] bg-red-200 flex'>
                        <img src={partner2} className='object-fill w-full h-full' alt="" />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default OurTeam