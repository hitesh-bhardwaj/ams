import React from 'react'
import Image from 'next/image'
import { paraAnim } from "../gsapAnimations";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(useGSAP, ScrollTrigger);

const About = () => {
  paraAnim();
  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".about-container",
      },
    });
    tl.fromTo(
      ".about-img",
      {
        yPercent:50
      },
      {
       yPercent:0,
        duration: 1.5,
        delay: 0.1,
        ease: "power3.out",
      }
    );
  });
  return (
   <>
   <section>
    <div className='w-screen h-screen bg-[#020F20] mobile:h-[80vh] tablet:h-[90vh]'>
        <div className='w-screen h-[80%] bg-white flex justify-between items-start pt-[4vw] mobile:flex-col-reverse mobile:pt-[10vw] tablet:flex-col-reverse tablet:justify-center'>
            <div className='w-[80%] h-[100%] relative about-container mobile:w-full mobile:rotate-90 tablet:rotate-90'>
            <Image 
            src="/assets/advastap/advastap-about.png"
            fill
            alt='advastap-about'
            className=' about-img mobile:object-contain tablet:object-contain'
            />
            </div>
            <div className=" w-[50%] mobile:w-full mobile:text-center tablet:w-full">
            <h2 className="text-[3vw]  aeonik drop-shadow-lg leading-[1] mobile:text-[10.2vw] tablet:text-[7vw]">
              <span data-para-anim className="leading-[1.3] overflow-hidden  w-[80%] mobile:w-full mobile:text-center tablet:w-full tablet:text-center">
                ADVASTAP HD III
              </span>
            </h2>
            <p className=" mb-[4vw] content-p mobile:max-w-full tablet:max-w-full mobile:my-[7vw] flex items-center justify-start mobile:justify-center tablet:justify-center ">
              <span data-para-anim className=" mobile:text-center uppercase tracking-widest mobile:tracking-normal">
              3-Row Hemorrhoid Stapler
              </span>      
            </p>
          </div>

        </div>
        <div className='w-screen h-[20%] flex items-center justify-center '>
            <div className="text-white text-[3.35vw] uppercase gradient-text mobile:text-[5vw] tablet:text-[5vw]">
           <p>Raised to the</p>
           <span className="gradient-line"></span>
           <span className="gradient-line"></span>
           <p> power of three</p>
            </div>

        </div>

    </div>
   </section>
   </>
  )
}

export default About