import React,{useEffect} from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Performance = () => {
  useEffect(() => {
    if (globalThis.innerWidth > 0) {
      const ctx = gsap.context(() => {
        const content = document.querySelectorAll(".ecard-up");
        content.forEach((content) => {
          gsap.from(content, {
            scrollTrigger: {
              trigger:"#ergonomic",
              start: "top top",
              end: "bottom bottom",
            },
            opacity: 0,
            y: 50,
            ease: 'power3.out',
            duration: 0.7,
            stagger: 0.5,
          });
        });
      });
      return () => ctx.revert();
    }
  }, []);
  return (
    <>
      <section
        className="overflow-hidden  mobile:py-[10%] relative py-[10vw] tablet:py-[10%]"
        id="performance"
      >
        <div className="w-screen h-full container-lg z-[5] mobile:h-[130vh] tablet:h-[60vh] ">
          <div className="w-full h-full flex flex-col items-center justify-center pb-[5vw] tablet:justify-start ">
            <div className="w-full h-full flex flex-col items-center justify-center mobile:mb-[10vw] mobile:flex mobile:justify-center mobile:h-fit tablet:h-fit ">
              <h2
                data-para-anim
                className=" w-[70%] text-[3.95vw] font-light leading-[1.25] aeonik text-center text-white  mobile:text-center mobile:w-full"
              >
              ADVA PRO, the Performance PRO for Complex Anatomies
              </h2>
            </div>
            <div className=" h-[50vw] w-[80vw] mobile:h-full flex flex-col items-center justify-end  pt-[10vw] mobile:pb-[10%]">
             
                <div className=" w-full h-full flex flex-col items-center justify-center">
                  <div className="h-[38vw] w-[50vw] relative mobile:w-[90vw] mobile:h-[90vw] mobile:left-[5%]  mobile:top-0 tablet:w-[70vw] tablet:h-[70vw] tablet:top-[30%]">
                    <Image
                      src="/assets/advapro/advapro-tube.png"
                      fill
                      alt="advapro tube"
                      className=" fadein"
                    />
                  </div>
                  <div className=" mobile:flex mobile:flex-col mobile:gap-[5vw]">

                  <div className="absolute w-[28%] h-fit rounded-[1vw] px-[2vw] py-[1vw] flex items-center justify-center  text-[#FFFFFF] left-[10%] top-[35%] mobile:static mobile:w-[90vw] mobile:flex mobile:flex-col mobile:items-center mobile:py-[6vw] mobile:rounded-[4vw] mobile:px-[5vw] tablet:w-[40%]">
                    <div className="absolute h-[4vw] w-[4vw] left-0 top-0 tablet:h-[5vw] tablet:w-[5vw]">
                        <Image src="/assets/advapro/coating.png" fill alt="coating"/>
                    </div>
                    <p
                      data-para-anim
                      className="text-[1.45vw] font-light mobile:text-[4.5vw] tracking-wide mobile:text-center tablet:text-[2.5vw]"
                    >
                    Abluminal Drug Coating
                    </p>
                  </div>
                  <div className="absolute w-[28%] h-fit rounded-[1vw] px-[2vw] py-[1vw] flex items-center justify-center  text-[#FFFFFF] right-[10%] top-[40%] mobile:static mobile:w-[90vw] mobile:flex mobile:flex-col mobile:items-center mobile:py-[6vw] mobile:rounded-[4vw] mobile:px-[5vw] tablet:w-[40%] tablet:right-[5%]">
                    <div className="absolute h-[4vw] w-[4vw] left-0 top-0 tablet:h-[5vw] tablet:w-[5vw] ">
                        <Image src="/assets/advapro/design.png" fill alt="coating"/>
                    </div>
                    <p
                      data-para-anim
                      className="text-[1.45vw] font-light mobile:text-[4.5vw] tracking-wide mobile:text-center tablet:text-[2.5vw]"
                    >
                   Stent (Scaffold) Design
                    </p>
                  </div>
                  <div className="absolute w-[22%] h-fit rounded-[1vw] px-[2vw] py-[1vw] flex items-center justify-center  text-[#FFFFFF] left-[15%] top-[55%] mobile:static mobile:w-[90vw] mobile:flex mobile:flex-col mobile:items-center mobile:py-[6vw] mobile:rounded-[4vw] mobile:px-[5vw] tablet:w-[30%] tablet:top-[49%] tablet:left-[10%]">
                    <div className="absolute h-[4vw] w-[4vw] left-0 top-0 tablet:h-[5vw] tablet:w-[5vw] ">
                        <Image src="/assets/advapro/drug.png" fill alt="coating"/>
                    </div>
                    <p
                      data-para-anim
                      className="text-[1.45vw] font-light mobile:text-[4.5vw] tracking-wide mobile:text-center tablet:text-[2.5vw]"
                    >
                   Sirolimus Drug
                    </p>
                  </div>
                  <div className="absolute w-[32%] h-fit rounded-[1vw] px-[2vw] py-[1vw] flex items-center justify-center  text-[#FFFFFF] left-[40%] bottom-[5%] mobile:static mobile:w-[90vw] mobile:flex mobile:flex-col mobile:items-center mobile:py-[6vw] mobile:rounded-[4vw] mobile:px-[5vw] tablet:w-[50%]">
                    <div className="absolute h-[4vw] w-[4vw] left-0 top-0 tablet:h-[5vw] tablet:w-[5vw]">
                        <Image src="/assets/advapro/matrix.png" fill alt="coating"/>
                    </div>
                    <p
                      data-para-anim
                      className="text-[1.45vw] font-light mobile:text-[4.5vw] tracking-wide mobile:text-center tablet:text-[2.5vw]"
                    >
                  Biodegradable Polymer Matrix
                    </p>
                  </div>
                  <div className="absolute w-[28%] h-fit rounded-[1vw] px-[2vw] py-[1vw] flex items-center justify-center  text-[#FFFFFF] right-[5%] bottom-[20%] mobile:static mobile:w-[90vw] mobile:flex mobile:flex-col mobile:items-center mobile:py-[6vw] mobile:rounded-[4vw] mobile:px-[5vw] tablet:w-[40%]">
                    <div className="absolute h-[4vw] w-[4vw] left-0 top-0  tablet:h-[5vw] tablet:w-[5vw]">
                        <Image src="/assets/advapro/stent.png" fill alt="coating"/>
                    </div>
                    <div className="absolute h-[7vw] w-[6vw]  bottom-[90%] ">
                        <Image src="/assets/advapro/cobalt.png" fill alt="coating"/>
                    </div>
                    <p
                      data-para-anim
                      className="text-[1.45vw] font-light mobile:text-[4.5vw] tracking-wide mobile:text-center tablet:text-[2.5vw]"
                    >
                  Cobalt Chromium Stent
                    </p>
                  </div>
                  
                   
    
                  </div>                 
                    </div>
                  </div>
                </div>
               
              </div>
              <div className="w-[100vw] h-[100%] absolute top-0 left-0 z-[-1]">
                <Image src="/assets/advapro/performance-bg.png"
                fill
                alt="performance-bg"/>
                </div>
      </section>
    </>
  );
};

export default Performance;
