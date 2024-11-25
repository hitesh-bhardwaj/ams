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

const SurgicalCard = ({ img, para }) => {
  return (
    <>
      <div className="h-[25vw] w-[20vw] py-[1vw] px-[0.5vw] rounded-[1.5vw] bg-white flex flex-col items-center justify-center gap-[2vw] hover:bg-white  hover:drop-shadow-xl hover:shadow-rounded">
        <div className="h-[70%] w-[95%] rounded-[1vw] flex items-center justify-center surgical-card-image">
          <div className="h-[50%] w-[50%] relative">
            <Image
              src={img}
              fill
              alt="surgical card"
              className="object-contain fadein "
            />
          </div>
        </div>
        <div className=" aeonik text-center font-light text-[1.25vw] w-[95%] ">
          <p data-para-anim>{para}</p>
        </div>
      </div>
    </>
  );
};

const SurgicalOutcomes = () => {
  fadeIn();
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
        <div className="w-full h-full flex flex-col items-center justify-center py-[5vw] ">
          <div className="w-full h-full flex flex-col items-center justify-center mobile:mb-[10vw] mobile:flex mobile:justify-center">
            <h2
              data-para-anim
              className="title-2 aeonik text-center mobile:text-center"
            >
              Elevate Your Surgical Outcomes
            </h2>
          </div>

          <div className="w-full h-full mt-[5vw] cursor-grab swiper-container">
            <Swiper className="surgicalSwiper w-full h-full" slidesPerView={4} spaceBetween={20}  freeMode={true}  modules={[FreeMode]}>
              <SwiperSlide>
                <SurgicalCard
                  img={"/assets/poweredlc/surgical-card1.png"}
                  para={
                    "Uniform Pressure ensures consistent staple line formation."
                  }
                />
              </SwiperSlide>
              <SwiperSlide>
                <SurgicalCard
                  img={"/assets/poweredlc/surgical-card2.png"}
                  para={"Fewer leaks and enhanced staple formation."}
                />
              </SwiperSlide>
              <SwiperSlide>
                <SurgicalCard
                  img={"/assets/poweredlc/surgical-card3.png"}
                  para={"Consistent results in challenging tissues."}
                />
              </SwiperSlide>
              <SwiperSlide>
                <SurgicalCard
                  img={"/assets/poweredlc/surgical-card4.png"}
                  para={"Reduced slippage during firing."}
                />
              </SwiperSlide>
              <SwiperSlide>
                <SurgicalCard
                  img={"/assets/poweredlc/surgical-card5.png"}
                  para={"Wider tapered pockets for improved capture."}
                />
              </SwiperSlide>
              <SwiperSlide>
                <SurgicalCard
                  img={"/assets/poweredlc/surgical-card6.png"}
                  para={"B-form stapling for greater efficiency."}
                />
              </SwiperSlide>
            </Swiper>
          </div>

         
        </div>
      </div>
      <div className="absolute h-[100%] w-[100vw] top-0 left-0  z-[-1]">
            <Image
              src="/assets/poweredlc/surgical-bg.png"
              fill
              alt="surgical bg"
              className="object-cover"
            />
          </div>
    </section>
  );
};

export default SurgicalOutcomes;
