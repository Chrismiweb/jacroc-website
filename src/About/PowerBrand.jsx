import React from 'react'
import collage from '../images/photo-collage.png (1).png'

function PowerBrand() {
    const power = [
        {
            header: "1. COMPREHENSIVE MEDIA SOLUTIONS",
            content: "Our company offers a complete suite of brand management services including brand strategy, content creation, distribution and performance analytics. We manage all aspects of brand presence, ensuring consistent & impactful messaging"
        },
        {
            header: "2. STRATEGIC BRAND POSITIONING",
            content: "We specialize in helping businesses define & strengthen their brand identity in a competitive market. Our team of experts conducts in-depth market research and analysis to develop a unique positioning strategy that resonates with client target audience, driving growth and brand loyalty. "
        },
        {
            header: "3. DATA DRIVEN INSIGHTS",
            content: "We leverage advanced analytics and AI technologies, we provide actionable insights derived from data to optimize media campaigns and maximize ROI. Our data-driven approach ensures smarter decision-making allowing brands to allocate resources effectively and adapt to changing market dynamics."
        },
        {
            header: "4. CROSS- CHANNEL INTERGRATION",
            content: "Our company understands the importance of an integrated media approach. We develop cohesive strategies that harmonize various media channels, such as social media, traditional advertising, digital platforms, and PR, to create a unified brand experience for clients audience."
        },
        {
            header: "5. CREATIVE & COMPELING CONTENT",
            content: "With a creative professionals, we produce engaging and innovative content that captures audience attention and drives brand engagement. From captivating visuals to compelling storytelling, our content solutions are tailored to amplify your brands message and leave a lasting impact."
        },
        {
            header: "6. RESULTS-ORIENTATED APPROACH",
            content: "We are committed to delivering measurable results. Our performance metrics and analytics provide clear visibility into effectiveness of media campaigns, helping brands assess their performance, identity areas for improvement, and optimize strategies for better outcomes."
        }
        // {
        //     header: "1. COMPREHENSIVE MEDIA SOLUTIONS",
        //     content: "Our company offers a complete suite of brand management services including brand strategy, content creation, distribution and performance analytics. We manage all aspects of brand presence, ensuring consistent & impactful messaging"
        // }
    ]
  return (
    <div className='w-[100%] py-[50px] lg:py-0 bg-orange-50 flex flex-col lg:flex-row justify-center items-center lg:justify-between lg:items-start pr-[20px]'>
      <div className='w-[90%] lg:w-[45%] flex  lg:flex h-[1100px]'>
        <img src={collage} className='w-full h-full object-fit' alt="" />
      </div>
      <div className='w-[90%] flex flex-col gap-[30px] lg:justify-start lg:items-start justify-center items-center lg:w-[53%] pt-[30px]'>
            <h1 className='text-[50px] text-center lg:text-start w-[90%] lg:w-[50%] '>POWER YOUR BRAND</h1>
            <div className='border-2 p-[15px] border-[#F6A21C] flex flex-col gap-[20px] rounded-[10px]'>
                <div className='grid gap-[20px] grid-cols-1 md:grid-cols-2 '>
                    {
                        power.map((p, index)=>(
                            <div key={index} className='w-[98%] flex flex-col gap-[10px] rounded-[20px] p-[20px] bg-[#312209]'>
                                <p className='text-white text-center text-[13px] font-bold'>{p.header}</p>
                                <p className='text-white text-center text-[11px]'>{p.content}</p>
                            </div>
                        ))
                    }
                </div>
                <div className='w-[100%] flex flex-col gap-[10px] rounded-[20px] p-[20px] bg-[#312209]'>
                    <p className='text-white text-center text-[13px] font-bold'>7. SHARE OF VOICE                            </p>
                    <p className='text-white text-center text-[11px]'>Build a moderate share of voice in the media, with a presence across various platforms such as digital, print and social media. 
                    </p>
                    <li className='text-white text-center text-[11px]'>Decent foothold in the industry, they face strong competition from established players with a higher share of voice. 
                    </li>
                    <li className='text-white text-center text-[11px]'>Moderate share of voice in the market, with its presence primarily in the niche of African and Afro- Caribbean media content.
                    </li>
                    <li className='text-white text-center text-[11px]'>Significant share of voice in the marketing agency industry based on their online presence, social media engagement and industry partnerships. 
                    </li>
                    <li className='text-white text-center text-[11px]'>Compared to key competitors will provide insights brand visibility and market positioning. 
                    </li>
                </div>
            </div>
      </div>
    </div>
  )
}

export default PowerBrand
