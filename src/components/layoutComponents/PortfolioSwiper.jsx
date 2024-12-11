import React, { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "swiper/css/pagination";
import {
  FreeMode,
  Thumbs,
  Navigation,
  EffectCreative,
  Autoplay,
} from "swiper/modules";
import Image from "next/image";
import styles from "@/styles/portfolioSwiper.module.css"
import { Media } from "../media";

const PortfolioCard = ({ src, heading, para,textclass }) => {
  return (
    <div className="">
      <div className="w-[85vw] h-[50vw] relative rounded-[10px] mobile:w-[90vw] mobile:h-[60vh] tablet:h-[70vw]">
        <Image
          src={src}
          fill
          alt="Hernia Slider"
          className="rounded-[20px] mobile:object-cover"
        />
        <div className="absolute top-[30%] left-[10%] flex flex-col gap-[2vw]  mobile:top-[7%] mobile:left-[0%] mobile:items-center mobile:justify-center mobile:text-center tablet:top-[10%]">
          <h2 className={`${textclass} text-[2.8vw] font-light mobile:text-[8.4vw] tablet:text-[4vw] mobile:leading-[1.25] mobile:mb-[5vw]`}>
            {heading}
          </h2>
          <p className={`${textclass} text-[1.4vw] font-extralight w-[50%] text-shadow  mobile:text-[4.2vw] mobile:w-[80%] tablet:text-[2.2vw] tablet:w-[70%] tablet:leading-[1.3]`}>
            {para}
          </p>
        </div>
      </div>
    </div>
  );
};

const PortfolioSwiper = ({ slidesData, textclass }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const swiperRef = useRef(null); // Create a ref for Swiper

  // State to track which button was clicked
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

  return (
    <section id="portfolio-swiper" className="overflow-x-hidden ">
      <div className="w-full ml-[10%] py-[10%] relative h-full mobile:ml-[0%]">
        <div className="text-[1.25vw] text-[#2A2A2A] font-light rotate-[-90deg] absolute left-[-52%] portfolio-text flex items-center gap-[2vw] w-full top-[8%]  tablet:hidden">
          <p className="text-end">{slidesData[0].title}</p>
        </div>
        <div className="mobile:block hidden w-full px-[5vw] text-center font-light text-[8vw] mb-[12vw]">
          <h2 data-para-anim>{slidesData[0].title}</h2>
        </div>
        <div className="relative fadeUp rounded-bl-[10px] rounded-tl-[10px] overflow-hidden ">
          <Media greaterThan="mobile">

          <div className="">
            <Swiper
              slidesPerView={1}
              spaceBetween={0}
              // navigation={true}
              loop={true}
              autoplay={{
                delay: 1500,
                disableOnInteraction: false,
              }}
              effect={"creative"}
              speed={1500}
              creativeEffect={{
                prev: {
                  shadow: true,
                  translate: ["-40%", 0, -1],
                },
                next: {
                  translate: ["100%", 0, 0],
                },
              }}
              modules={[FreeMode, Thumbs, EffectCreative, Autoplay]}
              className={`${styles.endoSwiper} mySwiper rounded-bl-[20px] rounded-tl-[20px] overflow-hidden`}
              thumbs={{
                swiper:
                  thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
              }}
            >
              {slidesData.map((slide, index) => (
                <SwiperSlide key={index}>
                  <PortfolioCard
                    src={slide.src}
                    heading={slide.heading}
                    para={slide.para}
                    textclass={textclass}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          </Media>
          <Media at="mobile">

          <div className=" relative ">
            <Swiper
              onSwiper={(swiper) => (swiperRef.current = swiper)} // Save Swiper instance to ref
              slidesPerView={1}
              spaceBetween={20}
              navigation={false}
              loop={true}
              speed={1000}
              modules={[FreeMode, Thumbs, Autoplay]}
              className={`${styles.endoSwiper} mySwiper overflow-hidden mobile:h-[70vh] mobile:rounded-[20px]`}
              thumbs={{
                swiper:
                  thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
              }}
            >
              {slidesData.map((slide, index) => (
                <SwiperSlide key={index}>
                  <PortfolioCard
                    src={slide.src}
                    heading={slide.heading}
                    para={slide.para}
                  />
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Custom Next and Previous Buttons */}
            <div className="tablet:hidden">
            <div
              className={`absolute z-[5] bottom-0 left-[63%] translate-x-[-65%] overflow-hidden py-[5vw] px-[5vw] rounded-full next-button cursor-pointer  bg-white/50
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
              className={`absolute z-[5] bottom-0 left-[39%] translate-x-[-38%] bg-white/50 overflow-hidden  py-[5vw] px-[5vw] rounded-full prev-button cursor-pointer 
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
          </Media>
          <Media greaterThanOrEqual="tablet">

          <div className="absolute top-[75%] w-full left-[-3%] endoSmallSwiperContainer tablet:left-0">
            <Swiper
              onSwiper={setThumbsSwiper}
              spaceBetween={10}
              slidesPerView={3}
              freeMode={true}
              watchSlidesProgress={true}
              modules={[FreeMode, Navigation, Thumbs]}
              className={`${styles.endoSmallSwiper} endosmallSwiper `}
            >
              {slidesData.map((slide, index) => (
                <SwiperSlide key={index}>
                  <Image
                    src={slide.src}
                    className="rounded-[20px] cursor-pointer"
                    width={290}
                    height={300}
                    alt="small swiper"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          </Media>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSwiper;
