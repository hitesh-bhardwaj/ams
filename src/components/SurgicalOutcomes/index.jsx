import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Image from "next/image";
import "swiper/css/free-mode";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const SurgicalCard = ({ img, para,title,tclass }) => {
  return (
    <>
     <div className="">
        <p  data-para-anim className={`text-[1.67vw] font-light w-[85%] ml-[2vw] ${tclass} mobile:text-[8vw] mobile:w-full`}>{title}</p>
        <div className="h-[25vw] w-[20vw] p-[1vw] rounded-[1.5vw] bg-white flex flex-col items-center justify-center gap-[2vw] mobile:w-[85vw] mobile:h-[110vw] mobile:rounded-[9vw]">
          <div className="h-[70%] w-[95%] rounded-[1vw] flex items-center justify-center surgical-card-image mobile:rounded-[6vw] mobile:h-[60%]">
            <div className="h-[50%] w-[50%] relative">
              <Image
                src={img}
                fill
                alt="surgical card"
                className="object-contain "
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

const SurgicalOutcomes = ({data, tclass}) => {
  useGSAP(() => {
    if (globalThis.innerWidth > 1024) {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".swiper-container",
        },
      });
      tl.fromTo(
        ".surgicalSwiper",
        {
          xPercent: 70,
          opacity: 0.5,
        },
        {
          xPercent: 0,
          duration: 2,
          delay: 0.3,
          opacity: 1,
          ease: "power3.out",
        }
      );
    }
  });

  const swiperRef = useRef(null);
  const [activeButton, setActiveButton] = useState("");

  const handleNext = () => {
    if (swiperRef.current) {
      swiperRef.current.slideNext();
      setActiveButton("next");
    }
  };

  const handlePrev = () => {
    if (swiperRef.current) {
      swiperRef.current.slidePrev();
      setActiveButton("prev");
    }
  };

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
              spaceBetween={20}
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
                  slidesPerView: 4,
                  spaceBetween: 50,
                },
              }}
            >
              {data.map((item, index) => (
                <SwiperSlide key={index}>
                  <SurgicalCard img={item.img} para={item.para} title={item.title} tclass={tclass}/>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* Navigation buttons */}
          <div className="w-full hidden mobile:block">
            <div
              className={`absolute z-[5] bottom-[2%] left-[65%] translate-x-[-65%] overflow-hidden py-[5vw] px-[5vw] rounded-full next-button cursor-pointer bg-white/50 ${
                activeButton === "next"
                  ? "text-white border-none"
                  : "bg-transparent text-[#111111]"
              } transition-colors duration-300`}
              onClick={handleNext}
            >
              <span
                className={`bg-[#111111] w-[100%] h-[100%] z-[1] absolute top-0 left-0 origin-center scale-0 rounded-full ${
                  activeButton === "next"
                    ? "scale-100 opacity-100"
                    : "scale-0 opacity-50"
                } transition-all duration-300`}
              ></span>
              <div className="w-[1.6vw] h-[1.6vw] relative z-[6] mobile:w-[4.5vw] mobile:h-[4.5vw] tablet:w-[2.5vw] tablet:h-[2.5vw]">
                <Image
                  src="/assets/home/arrow-right.png"
                  alt="arrow-right"
                  className={`object-cover group-hover:invert transition-all duration-300 ${
                    activeButton === "next" ? "invert" : "invert-0"
                  }`}
                  fill
                />
              </div>
            </div>

            <div
              className={`absolute z-[5] bottom-[2%] left-[39%] translate-x-[-38%] bg-white/50 overflow-hidden py-[5vw] px-[5vw] rounded-full prev-button cursor-pointer ${
                activeButton === "prev"
                  ? "text-white border-none"
                  : "bg-transparent text-[#111111]"
              } transition-colors duration-300`}
              onClick={handlePrev}
            >
              <span
                className={`bg-[#111111] w-[100%] h-[100%] z-[1] absolute top-0 left-0 origin-center scale-0 rounded-full ${
                  activeButton === "prev"
                    ? "scale-100 opacity-100"
                    : "scale-0 opacity-50"
                } transition-all duration-300`}
              ></span>
              <div className="w-[1.6vw] h-[1.6vw] relative z-[6] mobile:w-[4.5vw] mobile:h-[4.5vw]">
                <Image
                  src="/assets/home/arrow-left.png"
                  alt="arrow-left"
                  className={`object-cover group-hover:invert transition-all duration-300 ${
                    activeButton === "prev" ? "invert" : "invert-0"
                  }`}
                  fill
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-0 left-0 h-[100%] w-[100vw] z-[-1]">
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
