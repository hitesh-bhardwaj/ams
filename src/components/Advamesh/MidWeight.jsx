import React from 'react'
import Image from 'next/image'

const MidWeight = () => {
  return (
    <section
    className="overflow-hidden   mobile:py-[10%] relative  tablet:py-[10%]"
    id="propylene"
  >
    <div className="w-screen h-screen container-lg z-[5] mobile:h-[130vh] tablet:h-[60vh] ">
      <div className="w-full h-full  flex flex-col items-center justify-center pb-[5vw] tablet:justify-start ">
        <div className="w-full h-full  flex flex-col items-center justify-start mobile:mb-[10vw] mobile:flex mobile:justify-center mobile:h-fit tablet:h-fit ">
          <h2
            data-para-anim
            className=" w-[70%] text-[3.95vw] font-light leading-[1.25] aeonik text-center text-[#111111]  mobile:text-center mobile:w-full"
          >
         ADVAMESH Mid Weight
          </h2>
        </div>
        <div className=" w-full absolute right-[-35%] top-[25%]  mobile:h-full   pt-[10vw] mobile:pb-[10%]">
              <div className="h-[38vw] w-[50vw] relative mobile:w-[90vw] mobile:h-[90vw] mobile:left-[5%]  mobile:top-0 tablet:w-[70vw] tablet:h-[70vw] tablet:top-[30%]">
                <Image
                  src="/assets/advamesh/mid-weight.png"
                  fill
                  alt="propylene"
                  className=" fadein object-contain"
                />
              </div>               
              </div>
            </div>
            <div className="absolute top-[32%] left-[12%]">
                <p className="text-[1.25vw] leading-[1.2] font-light   text-[#2A2A2A] w-[60%]">A Revolutionary Solution Engineered
                for Surgical Success</p>
            </div>
            <div className="absolute top-[44%] left-[7%]">
                <p className="text-[1.25vw] leading-[1.2] font-light w-full text-[#2A2A2A]">Dual Elasticity – Comfortable Healing</p>
            </div>
            <div className="absolute bottom-[44%] left-[14%]">
                <p className="text-[1.25vw] leading-[1.2] font-light w-full text-[#2A2A2A]">Precise Mesh Positioning</p>
            </div>
            <div className="absolute bottom-[34%] left-[7%]">
                <p className="text-[1.25vw] leading-[1.2] font-light w-full text-[#2A2A2A]">Honeycomb Structure – Optimum Porosity</p>
            </div>
           <div className="w-[50%] h-[30vw] absolute top-[30%] left-[30%] rotate-180">
            <Image src="/assets/advamesh/half-circle.png" fill alt="half-circle" className='object-cover'/>
           </div>
          </div>
          <div className="w-[100vw] h-[100%] absolute top-0 left-0 z-[-1]">
            <Image src="/assets/advamesh/mid-weight-bg.png"
            fill
            alt="propylene-bg"/>
            </div>
  </section>
  )
}

export default MidWeight