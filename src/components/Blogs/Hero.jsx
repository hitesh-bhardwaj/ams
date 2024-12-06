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
    <section className='dark ' id='blogsHero'>
      <div className="w-screen h-screen relative overflow-hidden  mobile:h-screen tablet:h-[70vh]">
        <div className="absolute top-0 right-0 bottom-0 left-0 flex justify-between items-center  mobile:flex-col tablet:flex-col tablet:top-[22%]">
          <div className=" absolute left-[12%] top-[26%] mobile:left-[17%] mobile:w-[100%] tablet:left-[15%] mobile:top-[20%]">
          <h1 data-para-anim className="text-white text-[5.3vw] aeonik drop-shadow-md leading-[1] hero-text font-light mobile:mb-[4vw] ">
                  <span 
                    className={`leading-[1.2] overflow-hidden  text-[5.75vw] mobile:text-[13.2vw] tablet:text-[7.5vw]`}
                  >
                Latest News
                  </span>
                </h1>
            <div className='flex items-center mt-[0.2vw] w-[60%] mobile:items-start'>
            <p data-para-anim className=" text-[1.25vw] font-light text-[#FFFFFF] leading-[1.2] tracking-wider mobile:text-[4.6vw] mobile:tracking-widest mobile:w-[70%]  tablet:text-[3vw] tablet:tracking-widest tablet:max-w-full  mobile:text-center mobile:justify-center">
            Latest Updates from  Advanced MedTech Solutions
                </p>
              </div>
          </div>

        </div>
      </div>
      <div className="absolute h-[100%] w-[100%] top-0 right-0  mobile:w-screen mobile:h-screen mobile:right-0 z-[-1]">
                <Image src="/assets/blogs/blogs-hero-bg.png"
              fill
                alt="blogs Hero bg"
                className="object-cover "/>
            </div>
    </section>
  );
};

export default Hero;
