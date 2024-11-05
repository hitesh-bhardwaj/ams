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
  if(globalThis.innerWidth>1024){
  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".hero-container",
      },
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
    tl.fromTo(".line",{
      scale:0,
    },{
      scale:1,
      transformOrigin:"left",
      duration: 1,
      delay: -0.1,
      ease: "power3.out", 
    })
  });
}

  return (
    <section>
      <div className="w-screen h-screen relative mobile:h-[90vh]">
        <Image
          src="/assets/advastap/advastap-hero-bg.png"
          fill
          alt="advastap-hero"
          className="object-cover absolute"
        />
        <div className="absolute top-0 right-0 bottom-0 left-0 flex justify-between items-center pl-[5vw] mobile:flex-col mobile:top-[25%] tablet:flex-col tablet:top-[22%]">
          <div className="text-white w-[50%] mobile:w-[100%]">
            <h1 className="title-1 aeonik drop-shadow-lg leading-[1]">
              <span data-para-anim className="leading-[1] overflow-hidden text-[#FFFFFF] w-[80%] mobile:w-full mobile:text-center">
                ADVASTAP HD
              </span>
            </h1>
            <p className="max-w-[30vw] mb-[4vw] content-p mobile:max-w-full tablet:max-w-[50vw] mobile:my-[7vw] flex items-center justify-start mobile:text-center mobile:justify-center tablet:justify-center ">
              <span data-para-anim className="text-[#FFFFFF] mobile:text-center uppercase tracking-widest">
                Hemorrhoid stapler
              </span>
              <span className="w-[6vw] h-[1px] bg-white ml-2 line mobile:hidden tablet:hidden "></span>
            </p>
          </div>

          <div className="w-[80%] h-full relative flex justify-end right-0 hero-container mobile:rotate-90 mobile:w-[90%] mobile:h-[60%] tablet:rotate-90 tablet:w-[100%]">
            <div className="w-full h-full">
              <Image
                src="/assets/advastap/advastap-hero.png"
                alt="side-image"
                fill
                className=" hero-img"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
