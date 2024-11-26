import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Image from "next/image";
import { fadeIn } from "../gsapAnimations";
import 'swiper/css/free-mode';
import { FreeMode } from 'swiper/modules';
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const SurgicalCard = ({ title, img, para }) => {
  return (
    <>
      <div className="">
        <p  data-para-anim className="text-[1.67vw] font-light w-[55%] ml-[2vw] mobile:hidden">{title}</p>
        <div className="h-[30vw] w-[25vw] p-[1vw] rounded-[1.5vw] bg-white flex flex-col items-center justify-center gap-[2vw] mobile:w-[90vw] mobile:h-[110vw] mobile:rounded-[9vw]">
          <div className="h-[70%] w-[95%] rounded-[1vw] flex items-center justify-center surgical-card-image mobile:rounded-[6vw] mobile:h-[60%]">
            <div className="h-[50%] w-[50%] relative">
              <Image
                src={img}
                fill
                alt="surgical card"
                className="object-contain fadein"
              />
            </div>
          </div>
          <div className=" aeonik font-light text-[1.25vw] text-center mobile:text-[6vw] mobile:leading-[1.3] mobile:mt-[3vw] ">
            <p data-para-anim >{para}</p>
          </div>
        </div>
      </div>
    </>
  );
};

const SurgicalOutcomes = () => {
  const swiperRef = useRef(null);
  const [activeButton, setActiveButton] = useState("");
  
  const handleNext = () => {
    if (swiperRef.current) {
      swiperRef.current.slideNext(); // Move to the next slide
      setActiveButton("next"); // Set next button as active
       // Reset after 300ms
    }
  };

  const handlePrev = () => {
    if (swiperRef.current) {
      swiperRef.current.slidePrev(); // Move to the previous slide
      setActiveButton("prev"); // Set previous button as active
       // Reset after 300ms
    }
  };
  useGSAP(()=>{
    if(globalThis.innerWidth>1024){
    const tl = gsap.timeline({
        scrollTrigger:{
            trigger:'.swiper-container'
        }
    });
    tl.fromTo(".surgicalSwiper",{
        xPercent:70,
        opacity:0.5
    },{
        xPercent:0,
        duration: 2,
    delay: 0.3,
    opacity:1,
    ease: "power3.out",
    })
};
});

  return (
    <section id="surgical-outcomes" className="relative mobile:h-screen">
      <div className="w-screen h-full container-lg">
        <div className="w-full h-full flex flex-col items-center justify-center py-[5vw] mobile:h-fit">
          <div className="w-full h-full flex flex-col items-center justify-center mobile:mb-[10vw] mobile:flex mobile:justify-center">
            <h2
              data-para-anim
              className="title-2 aeonik text-center mobile:text-center"
            >
              Elevate Your Surgical Outcomes
            </h2>
          </div>

          <div className="w-full h-full mt-[5vw] cursor-grab">
            <Swiper
             onSwiper={(swiper) => (swiperRef.current = swiper)}
              className="mySwiper w-full h-full"
             
              breakpoints={{
                541: {
                  slidesPerView: 1,
                  spaceBetween: 30,
                },
                640: {
                  slidesPerView: 2,
                  spaceBetween: 30,
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 50,
                },
              }}
            >
              <SwiperSlide>
                <SurgicalCard
                  title={"Consistent Perfusion Across Staple Lines"}
                  img={"/assets/advastapcs/surgical-card1.png"}
                  para={"Promotes effective blood flow & tissue healing."}
                />
              </SwiperSlide>
              <SwiperSlide >
                <SurgicalCard
                  title={"Versatile Performance"}
                  img={"/assets/advastapcs/surgical-card2.png"}
                  para={"Adapts to a broad range of tissue thicknesses."}
                />
              </SwiperSlide>
              <SwiperSlide >
                <SurgicalCard
                  title={"Minimal Anastomotic Leakage"}
                  img={"/assets/advastapcs/surgical-card3.png"}
                  para={
                    "Ensures secure closures & reduces post-surgical complications."
                  }
                />
              </SwiperSlide>
              <SwiperSlide >
                <SurgicalCard
                  title={"Decreased Recurrence Rates"}
                  img={"/assets/advastapcs/surgical-card4.png"}
                  para={"Ensures long-term surgical success."}
                />
              </SwiperSlide>
            </Swiper>
          </div>
          <div className="w-full hidden mobile:block">

<div
    className={`absolute z-[5] bottom-[7%] left-[65%] translate-x-[-65%] overflow-hidden py-[5vw] px-[5vw] rounded-full next-button cursor-pointer  bg-white/50
      ${
        activeButton === "next"
          ? " text-white border-none"
          : "bg-transparent text-[#111111]"
      } transition-colors duration-300`} // Added background color transition
    onClick={handleNext} // Trigger next slide
  >
    <span className={`bg-[#111111] w-[100%] h-[100%] z-[1] absolute top-0 left-0 origin-center scale-0 rounded-full  ${
        activeButton === "next"
          ?"scale-100 opacity-100"
          : "scale-0 opacity-50"
      } transition-all duration-300`}></span>
    
    <div className="w-[1.6vw] h-[1.6vw] relative z-[6] mobile:w-[4.5vw] mobile:h-[4.5vw] tablet:w-[2.5vw] tablet:h-[2.5vw]">
    <Image
      src="/assets/home/arrow-right.png"
      alt="arrow-right"
      className={`object-cover group-hover:invert transition-all duration-300 ${
          activeButton === "next"
            ? "invert"
            : "invert-0"
        } `}
      fill
    />
  </div>
  </div>
  <div
    className={`absolute z-[5] bottom-[7%] left-[39%] translate-x-[-38%] bg-white/50 overflow-hidden  py-[5vw] px-[5vw] rounded-full prev-button cursor-pointer 
      ${
        activeButton === "prev"
          ? " text-white border-none"
          : "bg-transparent text-[#111111]"
      } transition-colors duration-300`} // Added background color transition
    onClick={handlePrev} // Trigger previous slide
  >
     <span className={`bg-[#111111] w-[100%] h-[100%] z-[1] absolute top-0 left-0 origin-center scale-0 rounded-full ${
        activeButton === "prev"
          ?"scale-100 opacity-100"
          : "scale-0 opacity-50"
      } transition-all duration-300`}></span>
    <div className="w-[1.6vw] h-[1.6vw] relative z-[6] mobile:w-[4.5vw] mobile:h-[4.5vw]">
    <Image
      src="/assets/home/arrow-left.png"
      alt="arrow-left"
      className={`object-cover group-hover:invert transition-all duration-300 ${
          activeButton === "prev"
            ? "invert"
            : "invert-0"
        } `}
      fill
    />
  </div>
  </div>
</div>


        </div>
      </div>
          <div className="absolute h-[100%] w-[100vw] z-[-1] top-0 left-0">
            <Image
              src="/assets/poweredlc/surgical-bg.png"
              fill
              alt="surgical bg"
              className="object-cover "
            />
          </div>
    </section>
  );
};

export default SurgicalOutcomes;
