/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react'
import Image from 'next/image'
import { paraAnim } from "../gsapAnimations";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(useGSAP, ScrollTrigger);

const HD2 = () => {
  paraAnim();
  if(globalThis.innerWidth>1024){

  
  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".hd-container",
        scrub:true
      },
    });
    tl.fromTo(
      ".hd-img",
      {
        x:-250,
      },
      {
       x:0,
        duration: 1.5,
        delay: 0.1,
        ease: "power3.out",
      }
    );
  });
}
  return (
   <>
   <section>
    <div className='w-screen h-screen bg-[#020F20] mobile:h-[85vh] tablet:h-[85vh]'>
        <div className='w-screen h-screen bg-white flex flex-col-reverse justify-between items-start pt-[4vw] mobile:py-[10vw] mobile:h-[70vh] tablet:h-[70vh]'>
            <div className='w-[80%] h-full relative hd-container mobile:w-full mobile:-rotate-90'>
            <Image 
            src="/assets/advastap/hd2.png"
            fill
            alt='advastap-about'
            className='object-cover hd-img mobile:object-contain
            tablet:object-contain'
            />
            </div>
            <div className=" w-[50%] pl-[10vw] mobile:w-full mobile:pl-0 tablet:w-full tablet:pl-0">
            <h1 className="text-[3vw]   aeonik drop-shadow-lg leading-[1] mobile:text-[10.2vw] tablet:text-[7vw]">
              <span data-para-anim className="leading-[1.3] overflow-hidden  w-[80%] mobile:w-full mobile:text-center tablet:w-full tablet:text-center">
                ADVASTAP HD II
              </span>
            </h1>
            <p className=" mb-[4vw] content-p mobile:max-w-[100%] tablet:max-w-[100%] mobile:my-[7vw] flex items-center justify-start mobile:justify-center tablet:justify-center">
              <span data-para-anim className=" mobile:text-center uppercase tracking-widest mobile:tracking-normal">
              2-Row Hemorrhoid Stapler
              </span>
            
            </p>
          </div>

        </div>
        <div className="w-screen h-[20%] flex items-center justify-center ">
  <div className="text-white text-[3.35vw] uppercase gradient-text flex items-center  mobile:text-[5vw] tablet:text-[5vw]">
    <p>Safe. Superior.</p>
    <span className="gradient-line"></span>
    <span className="gradient-line"></span>
    <p>Precisely invasive.</p>
  </div>
</div>

    </div>
   </section>
   </>
  )
}

export default HD2