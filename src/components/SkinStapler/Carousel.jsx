import React, { useRef, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/scrollbar';
import { Scrollbar } from 'swiper/modules';
import Image from 'next/image';
import 'swiper/css/navigation';
import { paraAnim } from "../gsapAnimations";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);
const Carousel = () => {
    paraAnim();
    useGSAP(()=>{
            if(globalThis.innerWidth>1024){
            const tl = gsap.timeline({
                scrollTrigger:{
                    trigger:'.swiper-container'
                }
            });
            tl.fromTo(".specificationSwiper",{
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
    <section id='skinstapler-carousel' className='overflow-hidden'>  
        <div className={`w-screen h-full  py-[5vw] text-[#2A2A2A] items-center flex justify-center swiper-container cursor-grab relative`}>
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
        className={`w-screen flex items-center justify-center specificationSwiper skinstaplerSwiper`}
      >
        <SwiperSlide>
        <div className="py-[2vw] flex justify-center">
            <div className='w-full h-full flex flex-col justify-center gap-[2vw]  mobile:w-[85vw] mobile:h-[80vh] mobile:justify-center mobile:gap-[8vw] tablet:h-[60vh]'>
                <p className='text-[2.5vw] font-light ml-[1.5vw] mobile:text-[8vw] mobile:text-center tablet:text-[4.5vw]'><span data-para-anim>Revolutionary Feed System</span></p>
                <div className=' rounded-[3vw]  h-[31vw] w-[48vw] pb-[2vw] flex flex-col gap-[4vw] overflow-hidden relative mobile:h-[70vh] mobile:w-[85vw] tablet:h-[50vh] mobile:rounded-[9vw] tablet:rounded-[5vw]'>
                    <div className='w-[45vw] h-[20vw]  relative top-[10%] left-[-20%] scale-[2.5] mobile:h-[100vw]  mobile:w-[100vw] mobile:left-[-10%] mobile:top-[5%] mobile:scale-[1.4] tablet:scale-[1.6] tablet:h-[40vw] tablet:left-0 tablet:top-[15%]'>
                        <Image
                        src="/assets/skinstapler/carousel-card1.png"
                        fill
                        alt='specification 1'
                        className='object-contain '
                        />
                    </div>
                    <p className='text-center text-[1.25vw] leading-[1.3] absolute top-[15%] right-[10%] aeonik font-extralight w-[15vw] text-[#2A2A2A] mobile:text-[7vw] mobile:w-[70%] mobile:top-[70%] mobile:font-light mobile:left-[15%] mobile:z-50 tablet:text-[4vw] tablet:top-[75%] tablet:font-light tablet:w-[40vw]'><span data-para-anim>Smooth and effortless stapling performance</span></p>
                    <div className='absolute h-[100%] w-[100%] z-[-1]'>
                    <Image src="/assets/skinstapler/carousel-card1-bg.png" fill alt='carousel-card-1-bg' className='object-cover'/> 
                </div>
                </div>
               
            </div>
        </div>
            </SwiperSlide>
            <SwiperSlide>
        <div className="py-[2vw] flex justify-center">
            <div className='w-full h-full flex flex-col justify-center gap-[2vw]  mobile:w-[85vw] mobile:h-[80vh] mobile:justify-center mobile:gap-[8vw] tablet:h-[60vh]'>
                <p className='text-[2.5vw] font-light ml-[1.5vw] mobile:text-[8vw] mobile:text-center tablet:text-[4.5vw]'><span data-para-anim>Pinpoint Placement Technology</span></p>
                <div className=' rounded-[3vw]  h-[31vw] w-[48vw] pb-[2vw] flex flex-col gap-[4vw] overflow-hidden relative mobile:h-[70vh] mobile:w-[85vw] mobile:rounded-[9vw] tablet:h-[50vh] tablet:rounded-[5vw]'>
                    <div className='w-[45vw] h-[20vw]  relative top-[25%] left-[-20%] scale-[1.5] mobile:h-[100vw]  mobile:w-[100vw] mobile:left-[-40%] mobile:top-[10%] mobile:scale-[1.1] tablet:scale-[1.5] tablet:h-[40vw] tablet:top-[5%]'>
                        <Image
                        src="/assets/skinstapler/carousel-card2.png"
                        fill
                        alt='specification 1'
                        className='object-contain '
                        />
                    </div>
                    <p className='text-center text-[1.25vw] absolute bottom-[15%] right-[10%] aeonik font-extralight w-[20vw]  leading-[1.3] text-[#2A2A2A] mobile:text-[7vw] mobile:w-[80%] mobile:font-light mobile:bottom-[10%] mobile:left-[10%]  mobile:z-50 tablet:text-[4vw] tablet:bottom-[5%] tablet:w-[40vw] tablet:font-light'><span data-para-anim>Innovative design for precise positioning accuracy</span></p>
                    <div className='absolute h-[100%] w-[100%] z-[-1]'>
                    <Image src="/assets/skinstapler/carousel-card2-bg.png" fill alt='carousel-card-1-bg' className='object-cover'/> 
                </div>
                </div>
               
            </div>
        </div>
            </SwiperSlide>
            <SwiperSlide>
        <div className="py-[2vw] flex justify-center">
            <div className='w-full h-full flex flex-col justify-center gap-[2vw]  mobile:w-[85vw] mobile:h-[80vh] mobile:justify-center mobile:gap-[8vw] tablet:h-[60vh]'>
                <p className='text-[2.5vw] font-light ml-[1.5vw] mobile:text-[8vw] mobile:text-center tablet:text-[4.5vw]'><span data-para-anim>Advanced Inventory System</span></p>
                <div className=' rounded-[3vw]  h-[31vw] w-[48vw] pb-[2vw] flex flex-col gap-[4vw] overflow-hidden relative mobile:h-[70vh] mobile:w-[85vw] mobile:rounded-[9vw] tablet:h-[50vh] tablet:rounded-[5vw]'>
                    <div className='w-[45vw] h-[20vw]  relative top-[35%] left-[-10%] scale-[2.5] mobile:h-[100vw] mobile:w-[100vw] mobile:left-[-20%] mobile:top-[15%] mobile:scale-[1.4] tablet:scale-[1.7] tablet:h-[40vw] tablet:top-[25%]'>
                        <Image
                        src="/assets/skinstapler/carousel-card3.png"
                        fill
                        alt='specification 1'
                        className='object-contain '
                        />
                    </div>
                    <p className='text-center text-[1.25vw] absolute bottom-[15%] left-[15%] aeonik font-extralight text-[#2A2A2A]  leading-[1.3] mobile:text-[7vw] mobile:font-light mobile:w-[70%] mobile:bottom-[10%] mobile:left-[15%] mobile:z-50 tablet:text-[4vw] tablet:bottom-[12%] tablet:left-[7%] tablet:font-light tablet:w-[40vw]' ><span data-para-anim>Enhanced staple count visibility</span></p>
                    <div className='absolute h-[100%] w-[100%] z-[-1]'>
                    <Image src="/assets/skinstapler/carousel-card3-bg.png" fill alt='carousel-card-1-bg' className='object-cover'/> 
                </div>
                </div>
               
            </div>
        </div>
            </SwiperSlide>
            <SwiperSlide>
        <div className="py-[2vw] flex justify-center">
            <div className='w-full h-full flex flex-col justify-center gap-[2vw]  mobile:w-[85vw] mobile:h-[80vh] mobile:justify-center mobile:gap-[8vw] tablet:h-[60vh]'>
                <p className='text-[2.5vw] font-light ml-[1.5vw] mobile:text-[8vw] mobile:text-center tablet:text-[4.5vw]'><span data-para-anim>Advanced Inventory System</span></p>
                <div className=' rounded-[3vw]  h-[31vw] w-[48vw] pb-[2vw] flex flex-col gap-[4vw] overflow-hidden relative mobile:h-[70vh] mobile:w-[85vw] mobile:rounded-[9vw] tablet:h-[50vh] tablet:rounded-[5vw]'>
                    <div className='w-[45vw] h-[20vw]  relative top-[12%] scale-[1.4] right-[-15%]  mobile:h-[100vw]  mobile:w-[100vw] mobile:left-[10%] mobile:top-[-5%] mobile:scale-[1.2] tablet:scale-[1.2] tablet:h-[40vw] tablet:top-0'>
                        <Image
                        src="/assets/skinstapler/carousel-card4.png"
                        fill
                        alt='specification 1'
                        className='object-contain '
                        />
                    </div>
                    <p className='text-center text-[1.25vw] absolute bottom-[15%] left-[10%] aeonik font-extralight w-[20vw] text-[#2A2A2A]  leading-[1.3] mobile:text-[7vw]  mobile:font-light mobile:w-[80%] mobile:bottom-[10%] mobile:left-[15%] mobile:z-50 tablet:text-[4vw] tablet:bottom-[5%] tablet:w-[40vw] tablet:font-light'><span data-para-anim>Effortless removal with sleek and elegant design</span></p>
                    <div className='absolute h-[100%] w-[100%] z-[-1]'>
                    <Image src="/assets/skinstapler/carousel-card4-bg.png" fill alt='carousel-card-1-bg' className='object-cover'/> 
                </div>
                </div>
               
            </div>
        </div>
            </SwiperSlide>
       
      
      </Swiper>
      
      <div
            className={`px-[1.6vw] py-[1.6vw] absolute z-[5] bottom-[10%] right-0 mobile:bottom-[7%] mobile:top-auto mobile:right-auto mobile:left-[62%] translate-x-[-65%] tablet:top-[88%] tablet:bottom-auto  tablet:right-[30%] tablet:translate-y-[-70%] overflow-hidden mobile:p-[5vw] tablet:p-[4vw] rounded-full next-button cursor-pointer  mobile:block group hover:text-white bg-white/50
                ${
                  activeButton === "next"
                    ? " text-white"
                    : "bg-transparent text-[#111111]"
                } transition-colors duration-300`} // Added background color transition
            onClick={handleNext} // Trigger next slide
          >
            <span
              className={`bg-[#222222] w-[100%] h-[100%] z-[1] absolute top-0 left-0 origin-center scale-0 rounded-full group-hover:scale-100 group-hover:opacity-100 ${
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
            className={`px-[1.6vw] py-[1.6vw] bottom-[10%] right-[7%] absolute z-[5] mobile:bottom-[7%] mobile:right-auto mobile:top-auto mobile:left-[39%] translate-x-[-38%]  tablet:top-[88%] tablet:bottom-auto tablet:right-[50%] tablet:translate-y-[-70%] bg-white/50 overflow-hidden  mobile:p-[5vw] tablet:p-[4vw] rounded-full prev-button cursor-pointer  mobile:block group hover:text-white
                ${
                  activeButton === "prev"
                    ? " text-white"
                    : "bg-transparent text-[#111111]"
                } transition-colors duration-300`} // Added background color transition
            onClick={handlePrev} // Trigger previous slide
          >
            <span
              className={`bg-[#222222] w-[100%] h-[100%] z-[1] absolute top-0 left-0 origin-center scale-0 rounded-full group-hover:scale-100 group-hover:opacity-100 ${
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
        </div>
    </section>
    </>
  )
}

export default Carousel;