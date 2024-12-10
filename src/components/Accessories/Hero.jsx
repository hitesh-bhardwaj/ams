import React from 'react';
import Image from 'next/image';
import { paraAnim } from "../gsapAnimations";
import gsap from 'gsap';
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(useGSAP, ScrollTrigger);

const Hero = () => {
  paraAnim();
  useGSAP(() => { 
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "hero-container",
        start: "top top",
        end: "bottom top",
        scrub: true,
        // markers:true
      },
    });
    tl.to(".hero-img", {
      yPercent: 60,
    });
    gsap.fromTo(
      ".hero-img",
      {
        scale: 1.2,
        yPercent: -10,
      },
      {
        scale: 1.1,
        yPercent: 0,
        duration: 1,
        delay: 0.1,
        ease: "power3.out",
      }
    );
  
  });
  return (
    <section id='accessoriesHero' className='dark'>
      <div className="w-screen h-screen relative overflow-hidden hero-container mobile:h-screen tablet:h-[70vh]">
        <Image
          src="/assets/accessories/accessories-hero-bg.png"
          fill
          alt="accessories-hero"
          className="object-cover absolute hero-img"
        />
        <div className="absolute top-0 right-0 bottom-0 left-0 flex justify-between items-center mobile:flex-col mobile:top-[25%] tablet:flex-col tablet:top-[22%]">
          <div className="text-white absolute left-[12%]  mobile:left-[0%] mobile:w-[100%] tablet:left-[15%]">
            <h1 className=" text-[5.7vw] font-light leading-[1.2] aeonik drop-shadow-lg w-[99.5%] mobile:text-[12.2vw] mobile:text-center tablet:text-[9vw] ">
              <span data-para-anim className="leading-[1] overflow-hidden text-[#FFFFFF]  mobile:w-full mobile:text-center">
              CORONARY 
              ACCESSORIES
              </span>
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
