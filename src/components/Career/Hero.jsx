import React from "react";
import Image from "next/image";
import { paraAnim } from "../gsapAnimations";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(useGSAP, ScrollTrigger);
const Hero = () => {
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
    <section className=" mb-[5%] hero-container mobile:mb-[15%]" id="hero">
      <div className="w-[100vw] h-[110vh] relative overflow-hidden tablet:h-[50vh]">
        <div className="w-screen h-[110vh] absolute tablet:h-[50vh]">
          <Image data-speed="0.7"
            className="hero-img absolute object-cover"
            src="/assets/career/career-bg.png"
            alt="Hero Image"
            priority={true}
            fill
          />
        </div>

        <div className="px-[12%] relative mobile:px-[5%]">
          <div className="flex h-[120vh] w-full flex-col justify-center items-start tablet:h-[50vh] mobile:h-screen">
            <div className="w-full">
              <h1
                
                className={`title-1 aeonik drop-shadow-lg  leading-[1] tablet:w-full w-[80%] mobile:w-full mobile:text-center`}
              >
                <span data-para-anim className={`leading-[1.3] overflow-hidden text-[#111111]`}>
                Join Our Mission to Create a Healthier World
                
            
                </span>
              </h1>
             
              <p className={` max-w-[30vw] mt-[2vw] mb-[4vw] content-p mobile:max-w-[100%] tablet:max-w-[50vw] mobile:my-[7vw]`}>
                <span data-para-anim className={`text-[#111111] mobile:text-center`}>
                Be a part of a team making a meaningful difference in healthcare.
                </span>
              </p>
            </div>
            <div className={`w-full h-fit fadeUp mobile:hidden`}>
              <div className="h-[3vw] w-[3vw] relative top-[40%] left-[2%] z-[2] tablet:w-[3.5vw] tablet:h-[3.5vw] tablet:top-[35%] ">
                <img src="/assets/career/search.png" alt="search-icon" />
              </div>
              <input
                type="text"
                placeholder="Explore job openings"
                className="w-[95%] h-[4vw] px-[7%] rounded-[40px] outline-0 text-[1.3vw] bg-white/80  placeholder-[#143CA3] placeholder:opacity-75 text-[#143CA3] glassmorphism placeholder:text-shadow tablet:h-[5.5vw] tablet:text-[2.2vw] tablet:px-[10%]"
              />

              <div className="relative left-[90%] bottom-[35%] tablet:bottom-[35%] tablet:left-[88%]">
                <div className="bg-[#143CA3] w-[3vw] h-[3vw] text-[#ffffff] rounded-[50%] flex items-center justify-center p-[0.8%] cursor-pointer tablet:w-[4vw] tablet:h-[4vw] tablet:p-[1.4%] ">
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
