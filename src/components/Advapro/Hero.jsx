/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react';
import Image from 'next/image';
import { paraAnim } from "../gsapAnimations";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(useGSAP, ScrollTrigger);


const Hero = () => {
  paraAnim();
  useGSAP(() => {
    if(globalThis.innerWidth>1024){
    const tl = gsap.timeline({
    });
   
    tl.fromTo(
      ".hero-img",
      {
        xPercent:100
      },
      {
       xPercent:10,
        duration: 1,
        delay: 0.1,
        ease: "power3.out",
      }
    );
  }
  });


  return (
    <section className='w-screen h-screen relative overflow-hidden' id='advaproHero'>
      <div className="w-full h-full mobile:h-screen tablet:h-[70vh]">
        <div className="absolute top-0 right-0 bottom-0 left-0 flex justify-between items-center mobile:flex-col mobile:top-[18%] mobile:left-[-5%] tablet:flex-col tablet:top-[22%]">
          <div className=" absolute left-[12%] mobile:left-[13%] mobile:w-[100%] tablet:left-[15%]">
          <h1 className="text-[#38C5FF]  aeonik drop-shadow-md leading-[1] hero-text font-light mobile:ml-[8%]">
                  <span data-para-anim
                    className={`leading-[1.2] overflow-hidden uppercase text-[5.75vw] mobile:text-[13.2vw] tablet:text-[7.5vw] `}
                  >
                 ADVA PRO
                  </span>
                </h1>
                <div className='w-[80%] h-[1px] bg-black/50 my-[5vw] hidden mobile:block'></div>
            <div className='flex items-center mt-[0.2vw] tablet:mt-[1vw]'>
            <p data-para-anim className=" text-[1.25vw] uppercase font-light text-[#1A1A1A] leading-[1.2] tracking-widest mobile:text-[4.6vw] mobile:tracking-widest  mobile:w-[80%] tablet:text-[2.5vw] tablet:tracking-widest tablet:max-w-full  mobile:text-center mobile:justify-center">
            Sirolimus Eluting Coronary Stent System
                </p>
              </div>
          </div>

          <div className="w-[60%] h-[80%] absolute right-[5%] bottom-0 hero-container tablet:w-[100%]  mobile:top-[45%] tablet:top-[10%] tablet:left-[20%]">
            <div className="w-full h-[50vw]  mobile:w-[100vw] mobile:h-[100vw] mobile:left-[-50%] relative tablet:w-[100vw] tablet:h-[100vw]">
              <Image
                src="/assets/advapro/advapro-hero.png"
                alt="advapro-hero-image"
                fill
                className=" hero-img object-contain"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute h-[100%] w-[100%] top-0 right-0 mobile:w-screen mobile:h-screen mobile:right-0 z-[-1]">
                <Image src="/assets/advapro/advapro-hero-bg-2.png"
              fill
                alt="advapro Hero bg"
                className="object-cover "/>
            </div>
            <div className="absolute h-[100%] w-[100%] bottom-0 left-0 z-[-1] mobile:left-0">
                <Image src="/assets/advapro/advapro-hero-bg-1.png"
               fill
                alt="advapro Hero bg"
                className="object-cover"/>
            </div>
    </section>
  );
};

export default Hero;
