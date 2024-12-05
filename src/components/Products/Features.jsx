/* eslint-disable react-hooks/rules-of-hooks */
import React, { useRef, useState, useEffect } from 'react'
import Image from 'next/image'
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { paraAnim, fadeUp } from "../gsapAnimations";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css/navigation";
import { Media } from '../media';

gsap.registerPlugin(ScrollTrigger);

const FeatureCard = ({ src, title }) => {
  return (
    <>
      <div className='w-full tablet:w-fit flex flex-col items-center justify-center feature-card group opacity-[0.2] cursor-pointer duration-300 transition-all ease  hover:opacity-[1] tablet:py-[5%] mobile:opacity-[1] '>
        <div className='h-[19vw] w-[18vw] mobile:w-[60vw] mobile:h-[50vw] tablet:w-[20vw] tablet:h-[25vw]'>
          <div className='w-full h-full relative'>
            <Image
              src={src}
              fill
              alt="Features"
              className='object-contain'
            />
          </div>
        </div>
        <div className='w-full flex justify-center items-center '>
          <p data-para-anim className='text-[1.15vw] font-light text-center w-[50%] mobile:text-[6vw] tablet:text-[2.5vw]'>
            {title}
          </p>
        </div>
      </div>
    </>
  )
}

const Features = ({ card1, card2, card3, card4 }) => {
  paraAnim();
  fadeUp();

  const swiperRef = useRef(null);
  const [activeButton, setActiveButton] = useState(" ");

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
  }

  return (
    <>
      <section className='mobile:py-[10%] py-[5%] tablet:py-[10%]' id='features'>
        <Media greaterThan='mobile'>

        <div className='h-full w-screen container-lg tablet:h-full'>
          <div className='h-full w-full border rounded-[3vw] py-[4vw] flex flex-col bg-white/50 items-center justify-center gap-[4vw] tablet:py-[3vw] tablet:h-[60%]'>
            <div>
              <h2 data-para-anim className='title-2 aeonik'>Key Features</h2>
            </div>
            <div className='flex items-center justify-evenly w-full feature-card-container mobile:hidden tablet:flex-wrap tablet:justify-center tablet:items-start'>
              <FeatureCard src={card1.src} title={card1.title} />
              <FeatureCard src={card2.src} title={card2.title} />
              <FeatureCard src={card3.src} title={card3.title} />
              <FeatureCard src={card4.src} title={card4.title} />
            </div>
          </div>
        </div>
        </Media>
        <Media at='mobile'>
        <div className='h-screen w-screen container-lg mobile:h-full relative'>
          <div className='mb-[10%] mobile:mb-[15vw]'>
            <h2 className='title-2 aeonik mobile:text-center'>Key Features</h2>
          </div>
          <div className='h-[120vw] w-full border rounded-[9vw] flex flex-col bg-white/50 items-center justify-center gap-[6vw] mobile:pt-[10vw]'>
            <div className='w-[47%] flex-col gap-y-[2vw]  mobile:flex mobile:flex-row mobile:w-[100%] mobile:h-full'>
              <Swiper
                navigation={false}
                modules={[Navigation]}
                onSwiper={(swiper) => (swiperRef.current = swiper)}
                spaceBetween={40}
                className="molecularSwiper mySwiper mobile:h-[100%] tablet:h-[100%]"
              >
                <SwiperSlide>
                  <FeatureCard src={card1.src} title={card1.title} />
                </SwiperSlide>
                <SwiperSlide>
                  <FeatureCard src={card2.src} title={card2.title} />
                </SwiperSlide>
                <SwiperSlide>
                  <FeatureCard src={card3.src} title={card3.title} />
                </SwiperSlide>
                <SwiperSlide>
                  <FeatureCard src={card4.src} title={card4.title} />
                </SwiperSlide>
              </Swiper>
              <div
                className={`absolute z-[5] bottom-[10%] left-[63%] translate-x-[-65%] overflow-hidden border bg-white/50 py-[5vw] px-[5vw] rounded-full next-button cursor-pointer 
                ${activeButton === "next" ? "text-white border-none" : "bg-transparent text-[#111111]"} transition-colors duration-300`}
                onClick={handleNext}
              >
                <span
                  className={`bg-[#111111] w-[100%] h-[100%] z-[1] absolute top-0 left-0 origin-center scale-0 rounded-full 
                  ${activeButton === "next" ? "scale-100 opacity-100" : "scale-0 opacity-50"} transition-all duration-300`}
                ></span>
                <div className="w-[1.6vw] h-[1.6vw] relative z-[6] mobile:w-[4.5vw] mobile:h-[4.5vw] tablet:w-[2.5vw] tablet:h-[2.5vw]">
                  <Image
                    src="/assets/home/arrow-right.png"
                    alt="arrow-right"
                    className={`object-cover group-hover:invert transition-all duration-300 
                    ${activeButton === "next" ? "invert" : "invert-0"}`}
                    fill
                  />
                </div>
              </div>
              <div
                className={`absolute z-[5] bottom-[10%] left-[37%] translate-x-[-38%] bg-white/50 overflow-hidden border py-[5vw] px-[5vw] rounded-full prev-button cursor-pointer 
                ${activeButton === "prev" ? "text-white border-none" : "bg-transparent text-[#111111]"} transition-colors duration-300`}
                onClick={handlePrev}
              >
                <span
                  className={`bg-[#111111] w-[100%] h-[100%] z-[1] absolute top-0 left-0 origin-center scale-0 rounded-full 
                  ${activeButton === "prev" ? "scale-100 opacity-100" : "scale-0 opacity-50"} transition-all duration-300`}
                ></span>
                <div className="w-[1.6vw] h-[1.6vw] relative z-[6] mobile:w-[4.5vw] mobile:h-[4.5vw]">
                  <Image
                    src="/assets/home/arrow-left.png"
                    alt="arrow-left"
                    className={`object-cover group-hover:invert transition-all duration-300 
                    ${activeButton === "prev" ? "invert" : "invert-0"}`}
                    fill
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        </Media>
      </section>
    </>
  )
}

export default Features;
