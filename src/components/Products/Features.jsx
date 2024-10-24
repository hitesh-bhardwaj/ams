/* eslint-disable react-hooks/rules-of-hooks */
import React, { useRef, useState, useEffect } from 'react'
import Image from 'next/image'
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { paraAnim, fadeUp } from "../gsapAnimations";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css/navigation";

gsap.registerPlugin(ScrollTrigger);

const FeatureCard = ({ src, title }) => {
  return (
    <>
      <div className='flex flex-col items-center justify-center feature-card tablet:py-[5%]'>
        <div className='h-[15vw] w-[10vw] mobile:w-[60vw] mobile:h-[20vw] tablet:w-[20vw] tablet:h-[25vw]'>
          <div className='w-full h-full relative'>
            <Image
              src={src}
              fill
              alt="Features"
              className='object-contain'
            />
          </div>
        </div>
        <div className='w-[80%] '>
          <p data-para-anim className='text-[1.65vw] font-light text-center  mobile:text-[6vw] tablet:text-[2.5vw]'>
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

  useEffect(() => {
    if (globalThis.innerWidth >= 1024) {
      gsap.from(".feature-card", {
        yPercent: 50,
        opacity: 0,
        duration: 0.7,
        scrollTrigger: {
          trigger: ".feature-card-container",
          start: "top 80%",
          end: "bottom 40%",
        },
        stagger: 0.1
      });
    }
  }, []); // Run the GSAP animation once after component mounts

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
      <section className='mobile:py-[10%] tablet:py-[10%]' id='features'>
        <div className='h-screen w-screen container-lg mobile:hidden tablet:h-full'>
          <div className='h-[80%] w-full border rounded-[3vw] flex flex-col glassmorphism items-center justify-center gap-[4vw] tablet:py-[3vw] tablet:h-[60%]'>
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

        <div className='h-screen w-screen container-lg hidden mobile:block mobile:h-full'>
          <div className='mb-[10%] mobile:mb-[15vw]'>
            <h2 className='title-2 aeonik mobile:text-center'>Key Features</h2>
          </div>
          <div className='h-[90vw] w-full border rounded-[9vw] flex flex-col glassmorphism items-center justify-center gap-[6vw] mobile:pt-[10vw] mobile:h-[50vh]'>
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
                className={`absolute z-[5] bottom-[10%] left-[65%] translate-x-[-65%] overflow-hidden border glassmorphism py-[5vw] px-[5vw] rounded-full next-button cursor-pointer 
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
                className={`absolute z-[5] bottom-[10%] left-[37%] translate-x-[-38%] glassmorphism overflow-hidden border py-[5vw] px-[5vw] rounded-full prev-button cursor-pointer 
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
      </section>
    </>
  )
}

export default Features;
