/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react';
import Image from 'next/image';
import { paraAnim } from "../gsapAnimations";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { fadeUp } from '../gsapAnimations';
import ScrollTrigger from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(useGSAP, ScrollTrigger);


const Ortho = () => {
  paraAnim();
  fadeUp();
  return (
    <section className=' relative overflow-hidden'>
      <div className="w-screen h-screen overflow-hidden py-[10vw] mobile:h-[180vw] tablet:h-[70vh]">
        <div className=" absolute w-full h-full top-[10%] mobile:flex-col mobile:top-[25] tablet:flex-col tablet:justify-start">
          <div className=" w-full flex items-center flex-col mobile:left-[17%] mobile:w-[100%] tablet:left-[15%]">
          <h1
data-para-anim className="text-[#0A1F7A] text-[5.3vw] aeonik  leading-[1] hero-text font-light ">
                  <span 
                    className={`leading-[1.2] overflow-hidden  text-[5.75vw] mobile:text-[11.2vw] tablet:text-[9vw]`}
                  >
               ADVAKIT Ortho
                  </span>
                </h1>
            <div className='flex items-center mt-[0.2vw] tablet:justify-center tablet:w-[65%]  tablet:py-[3vw] tablet:text-center mobile:w-full mobile:mt-[5vw]'>
            <p data-para-anim className=" text-[1.25vw] uppercase font-light text-[#1A1A1A] leading-[1.2] tracking-wider z-[10] mobile:text-[4.6vw] mobile:tracking-widest mobile:ml-[10%]  tablet:text-[3vw] tablet:tracking-widest tablet:max-w-full  mobile:text-center mobile:justify-center tablet:text-center tablet:justify-center">
            Supreme handling performance for complete ease and confidence in Orthopaedic surgeries
                </p>
              </div>
          </div>

        </div>
      </div>
      <div className="absolute h-[35vw] w-[80vw] bottom-0 left-[12%] mobile:bottom-[10%] mobile:scale-[2.5] mobile:left-[50%] tablet:scale-[1.3] tablet:bottom-[10%]">
          <Image src="/assets/advakit/ortho-product.png" fill alt='Ortho Product' className='fadeUp'/>

        </div>
      <div className="absolute h-[100%] w-[100%] top-0 right-0 mobile:w-[100vw] mobile:h-[180vw] mobile:right-0 z-[-1]">
                <Image src="/assets/advakit/ortho-bg.png"
              fill
                alt="ortho bg"
                className="object-cover mobile:object-cover"/>
            </div>
    </section>
  );
};

export default Ortho;
