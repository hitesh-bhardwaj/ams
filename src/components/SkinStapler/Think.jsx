import React from "react";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { fadeUp } from "../gsapAnimations";
gsap.registerPlugin(useGSAP);

const Think = () => {
  fadeUp();
  useGSAP(() => {
    gsap.from(
      ".think-img",
      {
        scrollTrigger:{
          trigger:"#think",
          start:"top top",
          end:"bottom bottom",
        },
        xPercent:5,
        opacity:0,
        duration: 1.5,
        delay:0.2,
        ease: "power3.out",
      }
    );
  });
  return (
    <section className="overflow-hidden pt-[8%]  mobile:py-[10%] h-full w-full relative" id="think">
      <div className="w-screen h-full container-lg  mobile:h-[150vh] tablet:h-[70%] ">
        <div className="w-full h-full flex flex-col items-center justify-center gap-[5vw] py-[5vw] ">
          <div className="w-full h-full flex flex-col items-center mb-[4vw] justify-center mobile:mb-[10vw] mobile:flex mobile:justify-center mobile:h-fit">
            <h2
              data-para-anim
              className="title-2 aeonik text-center mobile:text-center"
            >
              Think Intelligent. Think ADVASTAP.
            </h2>
          </div>
          <div className="relative w-full h-full flex flex-col items-center justify-center mobile:justify-start">
            <div className="h-[30vw] w-[50vw] scale-[1] relative left-[30%] -top-[5%] mobile:w-[250vw] mobile:h-[120vw]">
              <Image
                src="/assets/skinstapler/skin-stapler2.png"
                fill
                alt="Ergonomic Product"
                className="object-contain think-img"
              />
            </div>
          </div>
          <div className="w-full h-full">

          <div className="absolute left-[5%] flex flex-col items-start justify-center gap-[3vw] mobile:static mobile:gap-[10vw]">
          <div className="flex items-center justify-center gap-[2vw] hover:px-[1vw] hover:border-[2px] hover:border-[#3A87C8] hover:rounded-[1vw] hover:py-[1vw] group transition-all duration-300 ease mobile:flex-col mobile:items-center mobile:w-full mobile:hover:rounded-[4vw]">
                <Image src="/assets/skinstapler/point.png" height={50} width={50} alt="point" className="fadeup"/>
                <p data-para-anim className="text-[1.67vw]  font-light text-[#2A2A2A] group-hover:text-[2.5vw] transition-all duration-300 ease mobile:text-[7.5vw] mobile:text-center mobile:group-hover:text-[7.5vw] mobile:w-[70%]">User Centric Intuitive Design</p>

            </div>
            <div className="flex items-center justify-center gap-[2vw] hover:px-[1vw] hover:border-[2px] hover:border-[#3A87C8] hover:rounded-[1vw] hover:py-[1vw] group transition-all duration-300 ease mobile:flex-col mobile:items-center mobile:w-full mobile:hover:rounded-[4vw]">
                <Image src="/assets/skinstapler/point.png" height={50} width={50} alt="point" className="fadeup"/>
                <p data-para-anim className="text-[1.67vw]  font-light text-[#2A2A2A] group-hover:text-[2.5vw] transition-all duration-300 ease  mobile:text-[7.5vw] mobile:text-center mobile:group-hover:text-[7.5vw]">Versatile Flexibility</p>

            </div>
            <div className="flex items-center justify-center gap-[2vw] hover:px-[1vw] hover:border-[2px] hover:border-[#3A87C8] hover:rounded-[1vw] hover:py-[1vw] group transition-all duration-300 ease mobile:flex-col mobile:items-center mobile:w-full mobile:hover:rounded-[4vw]">
                <Image src="/assets/skinstapler/point.png" height={50} width={50} alt="point" className="fadeup"/>
                <p data-para-anim className="text-[1.67vw]  font-light text-[#2A2A2A] group-hover:text-[2.5vw] transition-all duration-300 ease  mobile:text-[7.5vw] mobile:text-center mobile:group-hover:text-[7.5vw] mobile:w-[70%]">High Quality Construction</p>

            </div>
            <div className="flex items-center justify-center gap-[2vw] hover:px-[1vw] hover:border-[2px] hover:border-[#3A87C8] hover:rounded-[1vw] hover:py-[1vw] group transition-all duration-300 ease mobile:flex-col mobile:items-center mobile:w-full mobile:hover:rounded-[4vw]">
                <Image src="/assets/skinstapler/point.png" height={50} width={50} alt="point" className="fadeup"/>
                <p data-para-anim className="text-[1.67vw]  font-light text-[#2A2A2A] group-hover:text-[2.5vw] transition-all duration-300 ease mobile:text-[7.5vw] mobile:text-center mobile:group-hover:text-[7.5vw]">Optimized Cosmesis</p>
            </div>
          </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Think;
