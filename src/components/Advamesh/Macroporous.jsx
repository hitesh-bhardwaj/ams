import React,{useEffect} from "react";
import Image from "next/image";

const Macroporous = () => {
  return (
    <>
      <section
        className="overflow-hidden   mobile:py-[10%] relative py-[10vw] tablet:py-[10%]"
        id="macroporous"
      >
        <div className="w-screen h-screen container-lg z-[5] mobile:h-[130vh] tablet:h-[60vh] ">
          <div className="w-full h-full flex flex-col items-center justify-center pb-[5vw] tablet:justify-start ">
            <div className="w-full h-full flex flex-col items-center justify-start mobile:mb-[10vw] mobile:flex mobile:justify-center mobile:h-fit tablet:h-fit ">
              <h2
                data-para-anim
                className=" w-[70%] text-[3.95vw] font-light leading-[1.25] aeonik text-center text-[#111111]  mobile:text-center mobile:w-full"
              >
             ADVAMESH Macroporous
              </h2>
            </div>
            <div className=" h-full w-full absolute left-[10%] top-[20%]  mobile:h-full   pt-[10vw] mobile:pb-[10%]">
                  <div className="h-[38vw] w-[50vw] relative mobile:w-[90vw] mobile:h-[90vw] mobile:left-[5%]  mobile:top-0 tablet:w-[70vw] tablet:h-[70vw] tablet:top-[30%]">
                    <Image
                      src="/assets/advamesh/macroporous.png"
                      fill
                      alt="macroporous"
                      className=" fadein object-contain"
                    />
                  </div>               
                  </div>
                </div>
                <div className="absolute top-[26%] right-[10%]">
                    <p className="text-[1.25vw] leading-[1.2] font-light w-full text-[#2A2A2A]">Macroporosity: enhanced comfortable healing</p>
                </div>
                <div className="absolute top-[36%] right-[13%]">
                    <p className="text-[1.25vw] leading-[1.2] font-light w-full text-[#2A2A2A]">Innovative honeycomb structure</p>
                </div>
                <div className="absolute top-[47%] right-[8%]">
                    <p className="text-[1.25vw] leading-[1.2] font-light w-full text-[#2A2A2A]">Advanced warp-knitting technology</p>
                </div>
                <div className="absolute bottom-[41%] right-[11%]">
                    <p className="text-[1.25vw] leading-[1.2] font-light w-full text-[#2A2A2A]">Superior strength and handling</p>
                </div>
                <div className="absolute bottom-[31%] right-[19%]">
                    <p className="text-[1.25vw] leading-[1.2] font-light w-full text-[#2A2A2A]">Blue informative lines</p>
                </div>
                <div className="absolute bottom-[20.5%] right-[11%]">
                    <p className="text-[1.25vw] leading-[1.2] font-light w-full text-[#2A2A2A]">Suitable for laparoscopic & open procedures</p>
                </div>
               <div className="w-[50%] h-[50vw] absolute top-[20%] right-[30%]">
                <Image src="/assets/advamesh/half-circle.png" fill alt="half-circle"/>
               </div>
              </div>
              <div className="w-[100vw] h-[100%] absolute top-0 left-0 z-[-1]">
                <Image src="/assets/advamesh/macroporous-bg.png"
                fill
                alt="macroporous-bg"/>
                </div>
      </section>
    </>
  );
};

export default Macroporous;
