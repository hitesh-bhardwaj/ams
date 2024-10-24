import React from "react";
import Image from "next/image";
import { paraAnim } from "../gsapAnimations";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(useGSAP, ScrollTrigger);
const Hero = ({title ,src, content , titleColor , paraWidth , titleHidden }) => {
  paraAnim();
  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "hero-container",
        scrub: true,
      },
    });
    tl.to(".hero-img", {
      yPercent: 60,
    });
    gsap.fromTo(
      ".hero-img",
      {
        scale: 1.1,
        yPercent: -30,
      },
      {
        scale: 1,
        yPercent: 0,
        duration: 1,
        delay: 0.1,
        ease: "power3.out",
      }
    );
  });
  return (
    <section className=" mb-[5%] hero-container mobile:mb-[15%] dark" id="hero">
      <div className="w-[100vw] h-[100vh] relative overflow-hidden tablet:h-[50vh]">
        <div className="w-screen h-screen absolute tablet:h-[50vh]">
          <Image
            className="hero-img absolute object-cover"
            src={src}
            alt="Hero Image"
            priority={true}
            fill
          />
        </div>

        <div className="px-[12%] relative mobile:px-[5%]">
          <div className="flex h-dvh w-full flex-col justify-center items-start tablet:h-[50vh]">
            <div className="w-full">
              <h1
                
                className={`title-1 aeonik drop-shadow-lg  leading-[1] ${titleHidden}`}
              >
                <span data-para-anim className={`leading-[1.3] overflow-hidden text-[#FFFFFF] w-[80%] mobile:w-full mobile:text-center ${titleColor?"text-black":"text-shadow"}`}>
                 {title}
                </span>
              </h1>
              
              <p className={` max-w-[30vw] mt-[4vw] mb-[4vw] content-p mobile:max-w-[100%] tablet:max-w-[50vw] mobile:my-[7vw] ${paraWidth}`}>
                <span data-para-anim className={`text-[#FFFFFF] mobile:text-center ${titleColor?"text-black":"text-shadow"}`}>
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
