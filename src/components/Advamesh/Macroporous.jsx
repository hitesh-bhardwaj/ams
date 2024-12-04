import React, { useEffect } from "react";
import Image from "next/image";
import { paraAnim } from "../gsapAnimations";

const Macroporous = () => {
  paraAnim();
  return (
    <>
      <section
        className="overflow-hidden mobile:py-[15%] relative py-[10vw] tablet:py-[10%]"
        id="macroporous"
      >
        <div className="w-screen h-screen container-lg z-[5] mobile:h-full tablet:h-[60vh]">
          <div className="w-full h-full flex flex-col items-center justify-center pb-[5vw] tablet:justify-start mobile:justify-start mobile:h-fit ">
            <div className="w-full h-full flex flex-col items-center justify-start mobile:mb-[10vw] mobile:flex  mobile:h-fit tablet:h-fit ">
              <h2
                data-para-anim
                className=" w-[70%] text-[3.95vw] font-light leading-[1.25] aeonik text-center text-[#111111]  mobile:text-center mobile:w-full mobile:text-[11vw]"
              >
                ADVAMESH Macroporous
              </h2>
            </div>
            <div className=" h-full w-full absolute left-[10%] top-[20%]  mobile:h-full   pt-[10vw] mobile:pb-[10%] mobile:left-0 fadeUp">
              <div className="h-[38vw] w-[50vw] relative mobile:w-[150vw] mobile:h-[80vw] mobile:left-[-15%]  mobile:top-0 tablet:w-[70vw] tablet:h-[70vw] tablet:top-[30%]">
                <Image
                  src="/assets/advamesh/macroporous.png"
                  fill
                  alt="macroporous"
                  className=" fadein object-contain"
                />
              </div>
            </div>
          </div>
            <div className=" text-[1.25vw] absolute top-[20%] left-[65%] h-[50vw] py-[5.4%] space-y-[25%] mobile:static mobile:space-y-0 mobile:flex mobile:flex-col mobile:gap-[8vw] mobile:justify-center mobile:mt-[50vh] mobile:w-full z-[10] mobile:h-fit mobile:text-[6vw]">
              <div className=" mobile:flex mobile:justify-center">
                <p data-para-anim className=" leading-[1.2] font-light w-full text-[#2A2A2A]  mobile:w-[80%] mobile:text-center">Macroporosity: enhanced comfortable healing</p>
              </div>
              <div className="translate-y-[-45%] ml-[20%] mobile:translate-y-0 mobile:ml-0 mobile:flex mobile:justify-center">
                <p data-para-anim className=" leading-[1.2] font-light w-full text-[#2A2A2A] mobile:w-[80%] mobile:text-center">Innovative honeycomb structure</p>
              </div>
              <div className="translate-y-[-55%] ml-[30%] mobile:translate-y-0 mobile:ml-0 mobile:flex mobile:justify-center">
                <p data-para-anim className=" leading-[1.2] font-light w-full whitespace-nowrap text-[#2A2A2A]  mobile:w-[80%] mobile:text-center mobile:whitespace-normal">Advanced warp-knitting technology</p>
              </div>
              <div className="translate-y-[-95%] ml-[30%] mobile:translate-y-0 mobile:ml-0 mobile:flex mobile:justify-center">
                <p data-para-anim className=" leading-[1.2] font-light w-full text-[#2A2A2A] mobile:w-[80%] mobile:text-center">Superior strength and handling</p>
              </div>
              <div className="translate-y-[-120%] ml-[20%] mobile:translate-y-0 mobile:ml-0 mobile:flex mobile:justify-center">
                <p data-para-anim className=" leading-[1.2] font-light w-full text-[#2A2A2A] mobile:w-[80%] mobile:text-center">Blue informative lines</p>
              </div>
              <div className="translate-y-[-150%] mobile:translate-y-0 mobile:ml-0 mobile:flex mobile:justify-center">
                <p data-para-anim className=" leading-[1.2] whitespace-nowrap font-light w-full text-[#2A2A2A]  mobile:w-[80%] mobile:text-center mobile:whitespace-normal">Suitable for laparoscopic & open procedures</p>
              </div>
            </div>
            <div className="w-[50%] h-[50vw] absolute top-[20%] right-[30%] mobile:hidden ">
              <Image src="/assets/advamesh/half-circle.png" fill alt="half-circle" />
            </div>
        </div>
        <div className="w-[100vw] h-[100%] absolute top-0 left-0 z-[-1] mobile:h-[200vw] mobile:w-[300vw]">
          <Image src="/assets/advamesh/macroporous-bg.png"
            fill
            alt="macroporous-bg" />
        </div>
      </section>
    </>
  );
};

export default Macroporous;
