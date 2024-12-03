import React from 'react'
import Image from 'next/image'

const MidWeight = () => {
  return (
    <section
        className="overflow-hidden mobile:py-[10%] relative py-[10vw] tablet:py-[10%]"
        id="mid-weight"
      >
        <div className="w-screen h-screen container-lg z-[5] mobile:h-[130vh] tablet:h-[60vh]">
          <div className="w-full h-full flex flex-col items-center justify-center pb-[5vw] tablet:justify-start ">
            <div className="w-full h-full flex flex-col items-center justify-start mobile:mb-[10vw] mobile:flex mobile:justify-center mobile:h-fit tablet:h-fit ">
              <h2
                data-para-anim
                className=" w-[70%] text-[3.95vw] font-light leading-[1.25] aeonik text-center text-[#111111]  mobile:text-center mobile:w-full"
              >
                ADVAMESH mid-weight
              </h2>
            </div>
            <div className=" h-full w-full absolute left-[45%] top-[30%]  mobile:h-full   pt-[10vw] mobile:pb-[10%]">
              <div className="h-[38vw] w-[50vw] relative mobile:w-[90vw] mobile:h-[90vw] mobile:left-[5%]  mobile:top-0 tablet:w-[70vw] tablet:h-[70vw] tablet:top-[30%]">
                <Image
                  src="/assets/advamesh/mid-weight.png"
                  fill
                  alt="mid-weight"
                  className=" fadein object-contain"
                />
              </div>
            </div>
          </div>
          <div className="absolute top-[30%] left-[5%] h-[50vw] py-[5.4%] space-y-[25%]">
              <div className="ml-[30%]">
                <p className="text-[1.25vw] leading-[1.2] font-light w-[27vw] text-[#2A2A2A]">Macroporosity: enhanced comfortable healing</p>
              </div>
              <div className="translate-y-[-45%] ml-[50%]">
                <p className="text-[1.25vw] leading-[1.2] font-light w-[25vw] text-[#2A2A2A]">Innovative honeycomb structure</p>
              </div>
              <div className="translate-y-[-55%] ml-[40%]">
                <p className="text-[1.25vw] leading-[1.2] font-light w-[25vw] whitespace-nowrap text-[#2A2A2A]">Advanced warp-knitting technology</p>
              </div>
              <div className="translate-y-[-95%] ml-[60%]">
                <p className="text-[1.25vw] leading-[1.2] font-light w-[25vw] text-[#2A2A2A]">Superior strength and handling</p>
              </div>
            </div>
            <div className="w-[50%] h-[50vw] absolute top-[20%] left-[40%] ">
              <Image src="/assets/advamesh/half-circle-left.png" fill alt="half-circle" />
            </div>
        </div>
        <div className="w-[100vw] h-[100%] absolute top-0 right-0 z-[-1]">
          <Image src="/assets/advamesh/mid-weight-bg.png"
            fill
            alt="mid-weight-bg" />
        </div>
      </section>
  )
}

export default MidWeight