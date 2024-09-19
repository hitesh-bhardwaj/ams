import React from "react";
import Image from "next/image";
import { paraAnim } from "../gsapAnimations";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(useGSAP, ScrollTrigger);
const Hero = ({ line1, line2, src, content,className , titleColor , paraWidth , titleHidden}) => {
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
    <section className=" mb-[12%] hero-container mobile:mb-[15%]" id="hero">
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
            <div className="">
              <h1
                data-para-anim
                className={`title-1 aeonik drop-shadow-lg  leading-[1] mobile:hidden tablet:hidden ${titleHidden}`}
              >
                <span className={`leading-[1.2] overflow-hidden text-[#FFFFFF] ${titleColor?"text-black":"text-shadow"}`}>
                  {line1}
                </span>
                <br />
                <span className={`leading-[1.2] overflow-hidden text-[#FFFFFF] ${titleColor?"text-black":"text-shadow"} `}>
                  {line2}
                </span>
              </h1>
              <h1
                
                className="title-1 aeonik drop-shadow-lg  leading-[1] hidden mobile:block tablet:block"
              >
                <span data-para-anim className={`leading-[1.2] overflow-hidden text-[#FFFFFF] text-center tablet:text-start ${titleColor?"text-black":"text-shadow"} `}>
                  {line1}
               
                
                  {line2}
                </span>
              </h1>
              <p className={` max-w-[30vw] mt-[4vw] mb-[4vw] content-p mobile:max-w-[100%] tablet:max-w-[50vw] mobile:my-[7vw] ${paraWidth}`}>
                <span data-para-anim className={`text-[#FFFFFF] mobile:text-center ${titleColor?"text-black":"text-shadow"}`}>
                  {content}
                </span>
              </p>
            </div>
            <div className={`w-full fadeUp ${className} mobile:hidden`}>
              <div className="h-[3vw] w-[3vw] relative top-[40%] left-[2%] z-[2] tablet:w-[5vw] tablet:h-[5vw] tablet:top-[37%] ">
                <img src="/assets/career/search.png" alt="search-icon" />
              </div>
              <input
                type="text"
                placeholder="Explore job openings"
                className="w-[95%] h-[4vw] px-[7%] rounded-[40px] outline-0 text-[1.3vw] bg-white/80  placeholder-[#143CA3] placeholder:opacity-75 text-[#143CA3] glassmorphism placeholder:text-shadow tablet:h-[7vw] tablet:text-[2.5vw] tablet:px-[10%]"
              />

              <div className="relative left-[90%] bottom-[35%] tablet:bottom-[35%] tablet:left-[87%]">
                <div className="bg-[#143CA3] w-[3vw] h-[3vw] text-[#ffffff] rounded-[50%] flex items-center justify-center p-[0.8%] cursor-pointer tablet:w-[5vw] tablet:h-[5vw] ">
                  <svg
                    viewBox="0 0 22 16"
                    fill="#ffffff"
                    xmlns="http://www.w3.org/2000/svg"
                    className="btn-icon"
                  >
                    <g className="btn-path" fill="#ffffff">
                      <path
                        d="M13.6437 15.9303C13.4217 15.9303 13.1998 15.8485 13.0246 15.6733C12.6858 15.3345 12.6858 14.7738 13.0246 14.4351L19.496 7.96366L13.0246 1.49228C12.6858 1.15352 12.6858 0.592823 13.0246 0.254067C13.3633 -0.0846889 13.924 -0.0846889 14.2628 0.254067L21.3533 7.34455C21.6921 7.68331 21.6921 8.24401 21.3533 8.58277L14.2628 15.6733C14.0876 15.8485 13.8656 15.9303 13.6437 15.9303Z"
                        fill="#ffffff"
                      />
                      <path
                        d="M20.5356 8.83812L0.876093 8.83812C0.397162 8.83812 0 8.44096 0 7.96203C0 7.4831 0.397162 7.08594 0.876093 7.08594L20.5356 7.08594C21.0145 7.08594 21.4117 7.4831 21.4117 7.96203C21.4117 8.44096 21.0145 8.83812 20.5356 8.83812Z"
                        fill="#ffffff"
                      />
                    </g>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
