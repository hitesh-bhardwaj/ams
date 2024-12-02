/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react';
import Image from 'next/image';
import { paraAnim } from "../gsapAnimations";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(useGSAP, ScrollTrigger);


const Ortho = () => {
  paraAnim();
  return (
    <section className=' relative'>
      <div className="w-screen h-screen overflow-hidden py-[10vw] mobile:h-[90vh] ">
        <div className="w-full h-full flex justify-center items-start mobile:flex-col mobile:top-[25] tablet:flex-col tablet:justify-start">
          <div className=" w-full flex items-center flex-col mobile:left-[17%] mobile:w-[100%] tablet:left-[15%]">
          <h1 className="text-[#0A1F7A] text-[5.3vw] aeonik drop-shadow-md leading-[1] hero-text font-light ">
                  <span 
                    className={`leading-[1.2] overflow-hidden uppercase text-[5.75vw] mobile:text-[11.2vw] tablet:text-[7.5vw]`}
                  >
               Advakit Ortho
                  </span>
                </h1>
            <div className='flex items-center mt-[0.2vw] tablet:justify-center tablet:w-[65%]  tablet:py-[3vw] tablet:text-center'>
            <p data-para-anim className=" text-[1.25vw] uppercase font-light text-[#1A1A1A] leading-[1.2] tracking-widest mobile:text-[4.6vw] mobile:tracking-widest mobile:ml-[12%]  tablet:text-[3vw] tablet:tracking-widest tablet:max-w-full  mobile:text-center mobile:justify-center">
            Supreme handling performance for complete ease and confidence in Caesarean surgeries
                </p>
              </div>
          </div>

        </div>
      </div>
      <div className="absolute h-[100%] w-[100%] top-0 right-0 mobile:w-screen mobile:h-screen mobile:right-0 z-[-1]">
                <Image src="/assets/advakit/ortho.png"
              fill
                alt="ortho bg"
                className="object-cover "/>
            </div>
    </section>
  );
};

export default Ortho;
