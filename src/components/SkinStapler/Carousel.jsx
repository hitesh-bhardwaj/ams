import React from 'react'
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
const Carousel = () => {
    paraAnim();
     
  return (
    <>
    <section id='specificationCarousel' className='overflow-hidden'>  
        <div className={`w-screen h-full py-[10vw] text-[#2A2A2A] items-center flex justify-center swiper-container cursor-grab`}>
        <Swiper
        navigation={true}
        scrollbar={true}
        centeredSlides={true}
        initialSlide={1}
        modules={[Scrollbar,Navigation]}
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
                <p className='text-[2.3vw] font-light ml-[1.5vw] mobile:text-[8vw] mobile:text-center tablet:text-[4.5vw]'><span data-para-anim>Revolutionary Feed System</span></p>
                <div className=' rounded-[20px]  h-[32vw] w-[48vw] pb-[2vw] flex flex-col gap-[4vw] overflow-hidden relative mobile:h-[70vh] mobile:w-[85vw] tablet:h-[50vh]'>
                    <div className='w-[45vw] h-[20vw]  relative top-[10%] left-[-20%] scale-[2.5] mobile:h-[100vw] mobile:rotate-90 mobile:w-[100vw] mobile:left-[-20%] mobile:top-[-15%] mobile:scale-[1.2] tablet:scale-[1.5] tablet:h-[40vw]'>
                        <Image
                        src="/assets/skinstapler/carousel-card1.png"
                        fill
                        alt='specification 1'
                        className='object-contain '
                        />
                    </div>
                    <p className='text-center text-[1.25vw] absolute top-[15%] right-[10%] aeonik font-extralight w-[15vw] mobile:text-[4.7vw] mobile:w-[70%] mobile:bottom-[20%] mobile:left-[15%] mobile:z-50 tablet:text-[4vw] tablet:bottom-[25%]'><span data-para-anim>Smooth and effortless stapling performance</span></p>
                    <div className='absolute h-[100%] w-[100%]'>
                    <Image src="/assets/skinstapler/carousel-card1-bg.png" fill alt='carousel-card-1-bg' className='object-coer z-[-1]'/> 
                </div>
                </div>
               
            </div>
        </div>
            </SwiperSlide>
            <SwiperSlide>
        <div className="py-[2vw] flex justify-center">
            <div className='w-full h-full flex flex-col justify-center gap-[2vw]  mobile:w-[85vw] mobile:h-[80vh] mobile:justify-center mobile:gap-[8vw] tablet:h-[60vh]'>
                <p className='text-[2.3vw] font-light ml-[1.5vw] mobile:text-[8vw] mobile:text-center tablet:text-[4.5vw]'><span data-para-anim>Revolutionary Feed System</span></p>
                <div className=' rounded-[20px]  h-[32vw] w-[48vw] pb-[2vw] flex flex-col gap-[4vw] overflow-hidden relative mobile:h-[70vh] mobile:w-[85vw] tablet:h-[50vh]'>
                    <div className='w-[45vw] h-[20vw]  relative top-[25%] left-[-20%] scale-[1.5] mobile:h-[100vw] mobile:rotate-90 mobile:w-[100vw] mobile:left-[-20%] mobile:top-[-15%] mobile:scale-[1.2] tablet:scale-[1.5] tablet:h-[40vw]'>
                        <Image
                        src="/assets/skinstapler/carousel-card2.png"
                        fill
                        alt='specification 1'
                        className='object-contain '
                        />
                    </div>
                    <p className='text-center text-[1.25vw] absolute bottom-[15%] right-[10%] aeonik font-extralight w-[20vw] mobile:text-[4.7vw] mobile:w-[70%] mobile:bottom-[20%] mobile:left-[15%] mobile:z-50 tablet:text-[4vw] tablet:bottom-[25%]'><span data-para-anim>Innovative design for precise positioning accuracy</span></p>
                    <div className='absolute h-[100%] w-[100%]'>
                    <Image src="/assets/skinstapler/carousel-card2-bg.png" fill alt='carousel-card-1-bg' className='object-coer z-[-1]'/> 
                </div>
                </div>
               
            </div>
        </div>
            </SwiperSlide>
            <SwiperSlide>
        <div className="py-[2vw] flex justify-center">
            <div className='w-full h-full flex flex-col justify-center gap-[2vw]  mobile:w-[85vw] mobile:h-[80vh] mobile:justify-center mobile:gap-[8vw] tablet:h-[60vh]'>
                <p className='text-[2.3vw] font-light ml-[1.5vw] mobile:text-[8vw] mobile:text-center tablet:text-[4.5vw]'><span data-para-anim>Revolutionary Feed System</span></p>
                <div className=' rounded-[20px]  h-[32vw] w-[48vw] pb-[2vw] flex flex-col gap-[4vw] overflow-hidden relative mobile:h-[70vh] mobile:w-[85vw] tablet:h-[50vh]'>
                    <div className='w-[45vw] h-[20vw]  relative top-[35%] left-[-10%] scale-[2.5] mobile:h-[100vw] mobile:rotate-90 mobile:w-[100vw] mobile:left-[-20%] mobile:top-[-15%] mobile:scale-[1.2] tablet:scale-[1.5] tablet:h-[40vw]'>
                        <Image
                        src="/assets/skinstapler/carousel-card3.png"
                        fill
                        alt='specification 1'
                        className='object-contain '
                        />
                    </div>
                    <p className='text-center text-[1.25vw] absolute bottom-[15%] left-[15%] aeonik font-extralight mobile:text-[4.7vw] mobile:w-[70%] mobile:bottom-[20%] mobile:left-[15%] mobile:z-50 tablet:text-[4vw] tablet:bottom-[25%]'><span data-para-anim>Enhanced staple count visibility</span></p>
                    <div className='absolute h-[100%] w-[100%]'>
                    <Image src="/assets/skinstapler/carousel-card3-bg.png" fill alt='carousel-card-1-bg' className='object-coer z-[-1]'/> 
                </div>
                </div>
               
            </div>
        </div>
            </SwiperSlide>
            <SwiperSlide>
        <div className="py-[2vw] flex justify-center">
            <div className='w-full h-full flex flex-col justify-center gap-[2vw]  mobile:w-[85vw] mobile:h-[80vh] mobile:justify-center mobile:gap-[8vw] tablet:h-[60vh]'>
                <p className='text-[2.3vw] font-light ml-[1.5vw] mobile:text-[8vw] mobile:text-center tablet:text-[4.5vw]'><span data-para-anim>Revolutionary Feed System</span></p>
                <div className=' rounded-[20px]  h-[32vw] w-[48vw] pb-[2vw] flex flex-col gap-[4vw] overflow-hidden relative mobile:h-[70vh] mobile:w-[85vw] tablet:h-[50vh]'>
                    <div className='w-[45vw] h-[20vw]  relative top-[12%] scale-[1.4] right-[-15%]  mobile:h-[100vw] mobile:rotate-90 mobile:w-[100vw] mobile:left-[-20%] mobile:top-[-15%] mobile:scale-[1.2] tablet:scale-[1.5] tablet:h-[40vw]'>
                        <Image
                        src="/assets/skinstapler/carousel-card4.png"
                        fill
                        alt='specification 1'
                        className='object-contain '
                        />
                    </div>
                    <p className='text-center text-[1.25vw] absolute bottom-[15%] left-[10%] aeonik font-extralight w-[20vw] mobile:text-[4.7vw] mobile:w-[70%] mobile:bottom-[20%] mobile:left-[15%] mobile:z-50 tablet:text-[4vw] tablet:bottom-[25%]'><span data-para-anim>Effortless removal with sleek and elegant design</span></p>
                    <div className='absolute h-[100%] w-[100%]'>
                    <Image src="/assets/skinstapler/carousel-card4-bg.png" fill alt='carousel-card-1-bg' className='object-coer z-[-1]'/> 
                </div>
                </div>
               
            </div>
        </div>
            </SwiperSlide>
       
      
      </Swiper>
        </div>
    </section>
    </>
  )
}

export default Carousel;