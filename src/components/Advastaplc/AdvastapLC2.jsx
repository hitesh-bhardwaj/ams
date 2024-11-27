import React from 'react'
import Image from 'next/image'
import { paraAnim } from "../gsapAnimations";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(useGSAP, ScrollTrigger);

const AdvastapLC2 = () => {
  paraAnim();
//   useGSAP(() => {
//     const tl = gsap.timeline({
//       scrollTrigger: {
//         trigger: ".about-container",
        
//       },
//     });
//     tl.fromTo(
//       ".about-img",
//       {
//         y:0,
//         x:-100
//       },
//       {
//        y:0,
//        x:-30,
//         duration: 1.5,
//         delay: 0.1,
//         ease: "power3.out",
//       }
//     );
//   });
  return (
   <>
  <section id='advastapAbout' className='relative overflow-hidden w-screen'>
  <div className="w-screen h-screen overflow-hidden mobile:h-screen tablet:h-screen">
    <div className="w-screen h-[90%] bg-white relative overflow-hidden pt-[4vw] mobile:pt-[10vw] tablet:justify-center">
    
      <div className="w-[80vw] h-[80vw] relative scale-[1.05] rotate-[60deg] top-[-40%]  about-container mobile:w-[120vw] mobile:h-[120vw] mobile:rotate-0 tablet:rotate-90 mobile:top-[25%] mobile:scale-[1.5] mobile:left-[-10%] tablet:top-[15%] tablet:left-[10%] left-[-10%]">
        <Image 
          src="/assets/advastaplc/advastaplc3-element.png"
          fill
          alt="advastap-about"
          className="about-img object-contain"
        />
      </div>
      
      <div className="absolute top-[15%] right-[8%]  p-[2vw] mobile:w-full mobile:right-[0%] mobile:top-[5%] mobile:text-center tablet:w-full tablet:p-[4vw] tablet:top-[5%] tablet:text-center tablet:right-[0%]">
        <h2 className="text-[4vw] aeonik drop-shadow-lg  tracking-wide text-[#4A4A4A] leading-[1] mobile:text-[11.2vw] tablet:text-[9vw]">
          <span data-para-anim className="leading-[1.3] overflow-hidden w-full mobile:w-full mobile:text-center tablet:w-full tablet:text-center font-light">
          ADVASTAP LC III
          </span>
        </h2>
        <p className="mb-[4vw] text-[1.66vw] tracking-tighter leading-[1.2] mobile:max-w-full tablet:max-w-full mobile:text-[4.75vw] mobile:my-[7vw] flex items-center justify-start mobile:justify-center tablet:justify-center tablet:text-[3.5vw] tablet:tracking-wider">
          <span data-para-anim className="mobile:text-center uppercase tracking-wide mobile:tracking-normal font-light mobile:w-[80%]">
          innovation. securty. consistency.
          </span>
        </p>
      </div>

    </div>

    
  </div>

</section>

   </>
  )
}

export default AdvastapLC2;