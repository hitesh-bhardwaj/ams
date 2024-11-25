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

const SurgicalCard = ({title, img, para }) => {
  return (
    <>
    <div className="">
      <p  data-para-anim className="text-[1.67vw] font-light w-[55%] ml-[2vw]">{title}</p>
      <div className="h-[30vw] w-[25vw] p-[1vw] rounded-[1.5vw] bg-white flex flex-col items-center justify-center gap-[2vw] hover:shadow-xl hover:drop-shadow-xl transition-all duration-300 ease">
        <div className="h-[70%] w-[95%] rounded-[1vw] flex items-center justify-center surgical-card-image">
          <div className="h-[50%] w-[50%] relative">
            <Image
              src={img}
              fill
              alt="surgical card"
              className="object-contain fadein"
            />
          </div>
        </div>
        <div className=" aeonik font-light text-[1.25vw] text-center ">
          <p data-para-anim >{para}</p>
        </div>
      </div>
      </div>
    </>
  );
};

const SurgicalOutcomes = () => {
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
    <section id="surgical-outcomes" className="relative">
      <div className="w-screen h-full container-lg">
        <div className="w-full h-full flex flex-col items-center justify-center py-[5vw]">
          <div className="w-full h-full flex flex-col items-center justify-center mobile:mb-[10vw] mobile:flex mobile:justify-center">
            <h2
              data-para-anim
              className="title-2 aeonik text-center mobile:text-center"
            >
              Elevate Your Surgical Outcomes
            </h2>
          </div>

          <div className="w-full h-[38vw] mt-[5vw] cursor-grab swiper-container ">
            <Swiper className="surgicalSwiper w-full h-full overflow-visible" slidesPerView={3} freeMode={true}  modules={[FreeMode]}>
              <SwiperSlide>
                <SurgicalCard
                title={"Consistent Perfusion Across Staple Lines"}
                  img={"/assets/advastapcs/surgical-card1.png"}
                  para={
                    "Promotes effective blood flow & tissue healing."
                  }
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
                  para={"Ensures secure closures & reduces post-surgical complications."}
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

          
        </div>
      </div>
      <div className="absolute h-[100%] w-[100vw] top-0 left-0 z-[-1]">
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
