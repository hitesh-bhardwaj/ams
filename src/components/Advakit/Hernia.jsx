/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react';
import Image from 'next/image';
import { paraAnim } from "../gsapAnimations";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { fadeUp } from '../gsapAnimations';
import ScrollTrigger from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(useGSAP, ScrollTrigger);


const Hernia = () => {
  paraAnim();
  fadeUp();
  return (
    <section className=' relative overflow-hidden'>
      <div className="w-screen h-screen overflow-hidden py-[10vw] mobile:h-[180vw] tablet:h-[70vh]">
        <div className="w-full h-full absolute top-[10%] mobile:flex-col mobile:top-[25] tablet:flex-col  tablet:justify-start">
          <div className=" w-full flex items-center flex-col mobile:left-[17%] mobile:w-[100%] tablet:left-[15%]">
          <h1
data-para-anim className="text-[#0A1F7A] text-[5.3vw] z-[10] aeonik  leading-[1] hero-text font-light ">
                  <span 
                    className={`leading-[1.2] overflow-hidden  text-[5.75vw] mobile:text-[11.2vw] tablet:text-[9vw] `}
                  >
               ADVAKIT Hernia
                  </span>
                </h1>
            <div className='flex items-center mt-[0.2vw]  tablet:text-center tablet:w-[68%] tablet:py-[3vw] mobile:mt-[5vw] mobile:w-[95%] mobile:ml-[17%]' >
            <p data-para-anim className=" text-[1.25vw] uppercase font-light text-[#1A1A1A] leading-[1.2] tracking-wider z-[10] mobile:text-[4.6vw] mobile:tracking-widest  tablet:text-[3vw] tablet:tracking-widest tablet:max-w-full  mobile:text-center  mobile:justify-center tablet:text-center tablte:justify-center">
            Ultimate strength and confidence for repair of abdominal wall hernia and deficincies
                </p>
              </div>
          </div>

        </div>
      </div>
      <div className="absolute h-[30vw] w-[75vw] bottom-0 left-[12%] mobile:bottom-[20%] mobile:scale-[2.5] mobile:left-[50%] tablet:scale-[1.3] tablet:bottom-[15%] tablet:h-[35vw]">
          <Image src="/assets/advakit/hernia-product.png" fill alt='Hernia Product' className='fadeUp'/>

        </div>
      <div className="absolute h-[100%] w-[100%] top-0 right-0 mobile:w-screen mobile:h-[180vw] mobile:right-0 z-[-1]">
                <Image src="/assets/advakit/hernia-bg.png"
              fill
                alt="hernia bg"
                className="object-cover mobile:object-cover"/>
            </div>
    </section>
  );
};

export default Hernia;
