/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react';
import Image from 'next/image';
import { lineAnim, paraAnim } from "../gsapAnimations";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(useGSAP, ScrollTrigger);


const Hero = () => {
  paraAnim();
  lineAnim()

 
  useGSAP(() => {
    if(globalThis.innerWidth>1024){
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".hero-container",
      },
    });
   
   
    tl.fromTo(".line",{
      scale:0,
    },{
      scale:1,
      transformOrigin:"left",
      duration: 1,
      delay: -0.7,
      ease: "power3.out", 
    })
  }
  });


  return (
    <section className='' id='advastapHero'>
      <div className="w-screen h-screen relative overflow-hidden mobile:h-screen tablet:h-[70vh]">
        <Image
          src="/assets/advastaplc/advastaplc-hero-bg.png"
          fill
          alt="advastap-hero"
          className="object-cover absolute"
        />
        <div className="absolute top-0 right-0 bottom-0 left-0 flex justify-between items-center mobile:flex-col mobile:top-[20%] tablet:flex-col tablet:top-[22%]">
          <div className=" absolute left-[12%] mobile:left-[10%] mobile:w-[100%] tablet:left-[15%] z-[10]">
          <h1 className="advastap-text text-white text-[5.3vw] aeonik drop-shadow-md leading-[1] hero-text fadeUp">
                  <span 
                    className={`leading-[1.2] overflow-hidden uppercase text-[5.75vw] mobile:text-[13.2vw] tablet:text-[9vw]`}
                  >
                  ADVASTAP LC
                  </span>
                </h1>
                <div className='w-[80%] h-[1px] bg-black/50 my-[4vw] hidden mobile:block lineDraw'></div>
            <div className='flex items-center mobile:w-[80%] mobile:justify-center fadeUp '>
            <p className=" text-[1.25vw] uppercase leading-[1.2] tracking-space font-light  mobile:text-[4.6vw] mobile:tracking-widest  tablet:text-[3vw] tablet:tracking-widest tablet:max-w-full  flex items-center justify-start mobile:text-center mobile:justify-center">
          Linear Cutter 
                </p>
              <span className="w-[10vw] h-[1px] ml-[1vw] bg-black line mobile:hidden tablet:hidden "></span>
              </div>
          </div>

          <div className="w-[70%] h-full relative left-[46%] hero-container   tablet:w-[100%]  mobile:top-[15%] tablet:top-[10%] tablet:left-[20%] fadeUp">
            <div className="w-[80vw] h-[80vw]  mobile:w-[150vw] mobile:h-[150vw] mobile:left-[-90%] relative tablet:w-[100vw] tablet:h-[100vw]">
              <Image
                src="/assets/advastaplc/advastaplc-hero-element.png"
                alt="side-image"
                fill
                className=" hero-img object-contain rotate-[-110deg] mobile:rotate-[-105deg]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
