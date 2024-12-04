import React from 'react'
import Image from 'next/image'

const MidWeight = () => {
  return (
    <section
        className="overflow-hidden mobile:py-[15%] relative py-[10vw] tablet:py-[10%]"
        id="mid-weight"
      >
        <div className="w-screen h-screen container-lg z-[5] mobile:h-full tablet:h-[60vh]">
          <div className="w-full h-full flex flex-col items-center justify-center pb-[5vw] tablet:justify-start mobile:justify-start ">
            <div className="w-full h-full flex flex-col items-center justify-start mobile:flex mobile:justify-center mobile:h-fit tablet:h-fit ">
              <h2
                data-para-anim
                className=" w-[70%] text-[3.95vw] font-light leading-[1.25] aeonik text-center text-[#111111]  mobile:text-center mobile:w-full mobile:text-[11vw]"
              >
                ADVAMESH mid-weight
              </h2>
            </div>
            <div className=" h-full w-full absolute left-[45%] top-[30%]  mobile:h-full   pt-[10vw] mobile:pb-[10%] mobile:top-[25%] fadeUp">
              <div className="h-[38vw] w-[50vw] relative mobile:w-[140vw] mobile:h-[100vw] mobile:left-[-65%]  mobile:top-0 tablet:w-[70vw] tablet:h-[70vw] tablet:top-[30%]">
                <Image
                  src="/assets/advamesh/mid-weight.png"
                  fill
                  alt="mid-weight"
                  className=" fadein object-contain"
                />
              </div>
            </div>
          </div>
          <div className="absolute top-[30%] text-[1.25vw] left-[5%] h-[50vw] py-[5.4%] space-y-[25%] mobile:static mobile:space-y-0 mobile:flex mobile:flex-col mobile:gap-[8vw] mobile:justify-center mobile:mt-[50vh] mobile:w-full mobile:h-fit mobile:text-[6vw]">
              <div className="ml-[30%] mobile:translate-y-0 mobile:ml-0 mobile:flex mobile:justify-center">
                <p data-para-anim className=" leading-[1.2] font-light w-[27vw] text-[#2A2A2A] mobile:w-[80%] mobile:text-center mobile:whitespace-normal">Macroporosity: enhanced comfortable healing</p>
              </div>
              <div className="translate-y-[-45%] ml-[50%] mobile:translate-y-0 mobile:ml-0 mobile:flex mobile:justify-center">
                <p data-para-anim className=" leading-[1.2] font-light w-[25vw] text-[#2A2A2A] mobile:w-[80%] mobile:text-center mobile:whitespace-normal">Innovative honeycomb structure</p>
              </div>
              <div className="translate-y-[-55%] ml-[40%] mobile:translate-y-0 mobile:ml-0 mobile:flex mobile:justify-center">
                <p data-para-anim className=" leading-[1.2] font-light w-[25vw] whitespace-nowrap text-[#2A2A2A] mobile:w-[80%] mobile:text-center mobile:whitespace-normal">Advanced warp-knitting technology</p>
              </div>
              <div className="translate-y-[-95%] ml-[60%] mobile:translate-y-0 mobile:ml-0 mobile:flex mobile:justify-center">
                <p data-para-anim className=" leading-[1.2] font-light w-[25vw] text-[#2A2A2A] mobile:w-[80%] mobile:text-center mobile:whitespace-normal">Superior strength and handling</p>
              </div>
            </div>
            <div className="w-[50%] h-[50vw] absolute top-[20%] left-[40%] mobile:hidden ">
              <Image src="/assets/advamesh/half-circle-left.png" fill alt="half-circle" />
            </div>
        </div>
        <div className="w-[100vw] h-[100%] absolute top-0 right-0 z-[-1] mobile:h-[200vw] mobile:w-[300vw] mobile:top-[-7%]">
          <Image src="/assets/advamesh/mid-weight-bg.png"
            fill
            alt="mid-weight-bg" />
        </div>
      </section>
  )
}

export default MidWeight