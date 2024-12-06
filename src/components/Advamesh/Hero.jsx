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
  
  return (
    <section className='dark w-screen h-screen relative overflow-hidden  mobile:h-screen tablet:h-[70vh]' id='advameshHero'>
      <div className="w-full h-full ">
        <div className="absolute top-0 right-0 bottom-0 left-0 flex justify-between items-center  mobile:flex-col tablet:flex-col tablet:top-[22%]">
          <div className=" absolute left-[12%] top-[28%] mobile:left-[17%] mobile:w-[100%] tablet:left-[15%] mobile:top-[20%] tablet:top-[15%]">
          <h1 data-para-anim className="text-white text-[5.3vw] aeonik drop-shadow-md leading-[1] hero-text font-light mobile:mb-[4vw] ">
                  <span 
                    className={`leading-[1.2] overflow-hidden uppercase text-[5.75vw] mobile:text-[13.2vw] tablet:text-[9vw]`}
                  >
                 ADVAMESH
                  </span>
                </h1>
            <div className='flex items-center mt-[0.2vw] mobile:items-start'>
            <p data-para-anim className=" text-[1.25vw] uppercase font-light text-[#FFFFFF] leading-[1.2] tracking-[0.2em] mobile:text-[4.6vw] mobile:tracking-widest mobile:w-[70%]  tablet:text-[3vw] tablet:tracking-widest tablet:max-w-full  mobile:text-center mobile:justify-center">
            Advancing the Science of Tissue Reinforcement
                </p>
              </div>
          </div>

        </div>
      </div>
      <div className="absolute h-[100%] w-[100%] top-0 right-0  mobile:w-screen mobile:h-screen mobile:right-0 z-[-1]">
                <Image src="/assets/advamesh/advamesh-hero-bg.png"
              fill
                alt="advamesh Hero bg"
                className="object-cover "/>
            </div>
    </section>
  );
};

export default Hero;
