import React from "react";
import Image from "next/image";
import { paraAnim, titleAnim } from "../gsapAnimations";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(useGSAP, ScrollTrigger);

const Hero = ({title ,src, content , titleColor , paraWidth , titleHidden ,mode,titleWidth}) => {
  
  titleAnim()
  paraAnim();
  // useGSAP(() => { 
  //   const tl = gsap.timeline({
  //     scrollTrigger: {
  //       trigger: "hero-container",
  //       start: "top top",
  //       end: "bottom top",
  //       scrub: true,
  //       // markers:true
  //     },
  //   });
  //   tl.to(".hero-img", {
  //     yPercent: 60,
  //   });
  //   gsap.fromTo(
  //     ".hero-img",
  //     {
  //       scale: 1.2,
  //       yPercent: -10,
  //     },
  //     {
  //       scale: 1.1,
  //       yPercent: 0,
  //       duration: 1,
  //       delay: 0.1,
  //       ease: "power3.out",
  //     }
  //   );
  
  // });
  return (
    <section className={` hero-container mobile:mb-[15%] ${mode}`} id="hero">
      <div className="w-[100vw] h-[100vh] relative overflow-hidden tablet:h-[70vh]">
        <div className="w-full h-full absolute tablet:h-full">
          <Image
            className="hero-img object-cover h-full w-full"
            src={src}
            alt="Hero Image"
            priority={true}
            width={1920}
            height={1080}
          />
        </div>
        <div className="px-[12%] relative mobile:px-[5%]">
          <div className="flex h-dvh w-full flex-col justify-center items-start tablet:h-[60vh] mobile:justify-start mobile:pt-[35vw]">
            <div className={`w-[90%] mobile:w-full ${titleWidth}`}>
              <h1
                
                className={`title-1 w-full aeonik capitalize leading-[1] ${titleHidden}`}
              >
                <span data-para-anim className={`leading-[1.21] overflow-hidden text-[#FFFFFF] w-[80%] mobile:w-full mobile:text-center ${titleColor?"text-black":""}`}>
                 {title}
                </span>
              </h1>
              <p className={` max-w-[30vw] mt-[4vw] mb-[4vw] content-p mobile:text-center  mobile:max-w-[100%] tablet:max-w-[50vw] mobile:my-[7vw] tablet:text-[2.5vw] ${paraWidth}`}>
                <span data-para-anim className={`text-[#FFFFFF] leading-[1.4] ${titleColor?"text-black":""}`}>
                  {content}
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;