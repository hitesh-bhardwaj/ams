import React, { useRef, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/scrollbar';
import { Scrollbar, Navigation } from 'swiper/modules';
import Image from 'next/image';
import 'swiper/css/navigation';
import { paraAnim } from "../gsapAnimations";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);
const Hd2Carousel = () => {
    paraAnim();
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
    <>
    <section id='specificationCarousel' className='overflow-hidden relative tablet:h-[60vh] mobile:h-[100vh]'>  
        <div className={`w-screen h-full py-[10vw] bg-[#020912]   text-white items-center flex justify-center swiper-container `}>
        <Swiper
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        
        scrollbar={true}
        centeredSlides={true}
        initialSlide={1}
        modules={[Scrollbar]}
        breakpoints={{       
            541: {
              slidesPerView: 1,
              spaceBetween:30,
            },
            640:{
                slidesPerView:2,
                spaceBetween:30
            },
            1024: {
              slidesPerView: 2,
              spaceBetween: 50,
            },
          }}
        className={`w-screen flex items-center justify-center specificationSwiper fadeUp tablet:h-[50vh] cursor-grab`}
      >
        <SwiperSlide>
        <div className="py-[2vw] flex justify-center">
            <div className='w-full h-full flex flex-col justify-center gap-[2vw]  mobile:w-[85vw] mobile:h-[80vh] mobile:justify-center mobile:gap-[8vw] tablet:h-[45vh]'>
                <p className='text-[2.3vw] font-light ml-[1.5vw] mobile:text-[8vw] mobile:text-center tablet:text-[3vw] tablet:h-[10vw]'><span data-para-anim>High Staple Count Per Firing</span></p>
                <div className='bg-[#0F233D] rounded-[20px]  h-[32vw] w-[48vw] pb-[2vw] flex flex-col gap-[4vw] overflow-hidden mobile:h-[70vh] mobile:w-[85vw] tablet:h-[50vh]'>
                    <div className='w-[55vw] h-[20vw]  relative top-0 left-[-40%] mobile:h-[100vw] mobile:rotate-90 mobile:w-[100vw] mobile:left-[-20%] mobile:top-[-15%] mobile:scale-[1.2] tablet:scale-[1.5] tablet:h-[40vw]'>
                        <Image
                        src="/assets/advastap/spec1.png"
                        fill
                        alt='specification 1'
                        className='object-cover '
                        />

                    </div>
                    <p className='text-center text-[1.25vw] absolute bottom-[15%] left-[10%] aeonik font-extralight mobile:text-[4.7vw] mobile:w-[70%] mobile:bottom-[20%] mobile:left-[15%] mobile:z-50 tablet:text-[2.5vw] tablet:top-[75%] tablet:left-[17%]'><span data-para-anim>Extensive closure with effective coverage.</span></p>
                </div>
            </div>
        </div>
            </SwiperSlide>
        <SwiperSlide>
        <div className="py-[2vw] flex justify-center">
            <div className='w-full h-full flex flex-col justify-between gap-[2vw] mobile:w-[85vw] mobile:h-[80vh] mobile:justify-center mobile:gap-[8vw]  tablet:h-[45vh]'>
                <p className='text-[2.3vw] font-light ml-[1.5vw] mobile:text-[8vw] mobile:text-center tablet:text-[3vw] tablet:h-[10vw]'><span data-para-anim>Four Housing Conduids</span></p>
                <div className='bg-[#0F233D] rounded-[20px]  h-[32vw] w-[48vw] pb-[2vw] flex flex-col gap-[4vw] overflow-hidden mobile:h-[70vh] mobile:w-[85vw] tablet:h-[50vh]'>
                    <div className='w-[60vw] h-[20vw]  relative top-0 left-[-20%] mobile:h-[50vh] mobile:-rotate-90 mobile:left-[15%] mobile:top-[10%] mobile:scale-[3] mobile:overflow-hidden tablet:h-[40vw] tablet:left-[-10%] tablet:scale-[1.2]' >
                        <Image
                        src="/assets/advastap/spec2.png"
                        fill
                        alt='specification 1'
                        className='object-contain'
                        />
               </div>
                    <p className='text-center aeonik text-[1.25vw] absolute bottom-[15%] left-[10%] font-extralight mobile:text-[4.7vw] mobile:w-[70%] mobile:bottom-[20%] mobile:left-[15%] mobile:z-50 tablet:text-[2.5vw] tablet:top-[75%] tablet:left-[5%]'><span data-para-anim>Designed for secure purse-string suture placement.</span></p>
                </div>
            </div>
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="py-[2vw] flex justify-center">
            <div className='w-full h-full flex flex-col justify-between gap-[2vw] mobile:w-[85vw] mobile:h-[80vh] mobile:justify-center mobile:gap-[8vw]  tablet:h-[45vh]'>
                <p className='text-[2.3vw] font-light ml-[1.5vw] mobile:text-[8vw] mobile:text-center tablet:text-[3vw] tablet:h-[10vw]'><span data-para-anim>Uniform Perfusion Across the Staple Lines</span></p>
                <div className='bg-[#0F233D] rounded-[20px] w-[48vw] h-[32vw] pb-[2vw] flex flex-col gap-[4vw] overflow-hidden mobile:h-[70vh] mobile:w-[85vw] tablet:h-[50vh]'>
                    <div className='w-[90vw] h-[15vw]  relative top-0  mobile:h-[50vh] mobile:-rotate-90 mobile:scale-[1.2] mobile:top-[-15%] mobile:left-[15%] tablet:h-[40vw] tablet:top-[5%] tablet:left-[10%]'>
                        <Image
                        src="/assets/advastap/spec3.png"
                        fill
                        alt='specification 1'
                        className='object-cover mobile:object-contain'
                        />

                    </div>
                    <p className='text-center aeonik absolute bottom-[15%] left-[10%] text-[1.25vw] font-extralight mobile:text-[4.7vw] mobile:w-[70%] mobile:bottom-[20%] mobile:left-[15%] mobile:z-50 tablet:left-[5%] tablet:text-[2.5vw] tablet:top-[75%]'><span data-para-anim>Faster Recovery & better postoperative results</span></p>
                </div>
            </div>
        </div>
        </SwiperSlide>
      
      </Swiper>
        </div>
        <div
            className={`px-[1.6vw] py-[1.6vw] border absolute z-[5] bottom-[10%] right-0 mobile:bottom-[2%] mobile:top-auto mobile:right-auto mobile:left-[62%] translate-x-[-65%] tablet:top-[95%]  tablet:right-[33%] tablet:bottom-auto tablet:translate-y-[-70%] overflow-hidden mobile:p-[5vw] tablet:p-[2.5vw] rounded-full next-button cursor-pointer  mobile:block group hover:text-white bg-white/50
                ${
                  activeButton === "next"
                    ? " text-white "
                    : "bg-transparent text-[#111111]"
                } transition-colors duration-300`} // Added background color transition
            onClick={handleNext} // Trigger next slide
          >
            <span
              className={`bg-[#020912] w-[100%] h-[100%] z-[1] absolute top-0 left-0 origin-center scale-0 rounded-full group-hover:scale-100 group-hover:opacity-100 ${
                activeButton === "next"
                  ? "scale-100 opacity-100 "
                  : "scale-0 opacity-50"
              } transition-all duration-300`}
            ></span>
            <div className="w-[1.6vw] h-[1.6vw] relative z-[6] mobile:w-[4.5vw] mobile:h-[4.5vw] tablet:w-[3.5vw] tablet:h-[3.5vw]">
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
            className={`px-[1.6vw] py-[1.6vw] bottom-[10%] border right-[7%] absolute z-[5] mobile:bottom-[2%] mobile:right-auto mobile:top-auto mobile:left-[39%] translate-x-[-38%]  tablet:top-[95%] tablet:bottom-auto tablet:right-[47%] tablet:translate-y-[-70%] bg-white/50 overflow-hidden  mobile:p-[5vw] tablet:p-[2.5vw] rounded-full prev-button cursor-pointer  mobile:block group hover:text-white
                ${
                  activeButton === "prev"
                    ? " text-white "
                    : "bg-transparent text-[#111111]"
                } transition-colors duration-300`} // Added background color transition
            onClick={handlePrev} // Trigger previous slide
          >
            <span
              className={`bg-[#020912] w-[100%] h-[100%] z-[1] absolute top-0 left-0 origin-center scale-0 rounded-full group-hover:scale-100 group-hover:opacity-100 ${
                activeButton === "prev"
                  ? "scale-100 opacity-100"
                  : "scale-0 opacity-50"
              } transition-all duration-300`}
            ></span>
            <div className="w-[1.6vw] h-[1.6vw] relative z-[6] mobile:w-[4.5vw] mobile:h-[4.5vw] tablet:w-[3.5vw] tablet:h-[3.5vw]">
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
    </section>
    </>
  )
}

export default Hd2Carousel;