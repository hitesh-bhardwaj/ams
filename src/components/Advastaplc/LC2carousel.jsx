import React, { useRef, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/scrollbar';
import { Scrollbar } from 'swiper/modules';
import Image from 'next/image';
import 'swiper/css/navigation';
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);
const LC2Carousel = () => {
    useGSAP(()=>{
            if(globalThis.innerWidth>1024){
            const tl = gsap.timeline({
                scrollTrigger:{
                    trigger:'.lc2-swiper-container'
                }
            });
            tl.fromTo(".lc2Swiper .swiper-slide",{
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

        const handleNext = () => {
          if (swiperRef.current) {
            swiperRef.current.slideNext();
          }
        };
      
        const handlePrev = () => {
          if (swiperRef.current) {
            swiperRef.current.slidePrev(); 
          }
        };
     
  return (
    <>
    <section id='lc2-carousel' className='overflow-hidden py-[5%] mobile:py-[15%] tablet:h-[80vh] '>  
        <div className={`w-screen h-full text-[#2A2A2A] items-center flex justify-center lc2-swiper-container cursor-grab relative `}>
        <Swiper
         onSwiper={(swiper) => (swiperRef.current = swiper)}
        scrollbar={true}
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
              centeredSlides:true,
              initialSlide:1
            },
          }}
        className={`w-screen flex items-center justify-center specificationSwiper lc2Swiper  tablet:h-[60vh] mobile:h-[180vw]`}
      >
        <SwiperSlide>
        <div className="py-[2vw] flex justify-center">
            <div className='w-full h-full flex flex-col justify-center gap-[2vw]  mobile:w-[85vw] mobile:h-[160vw] mobile:justify-center mobile:gap-[8vw] tablet:h-[50vh]'>
                <p className='text-[2.5vw] font-light ml-[1.5vw] mobile:text-[8vw] mobile:text-center tablet:text-[3vw] tablet:h-[10vw]'><span data-para-anim>Optimal and secure placement</span></p>
                <div className=' rounded-[3vw]  h-[31vw] w-[48vw] pb-[2vw] flex flex-col gap-[4vw] overflow-hidden relative mobile:h-[70vh] mobile:w-[85vw] mobile:rounded-[9vw] tablet:h-[50vh] tablet:rounded-[5vw]'>
                    <div className='w-[80vw] h-[15vw]  relative top-[-5%] left-[15%] scale-[2.5] mobile:h-[100vw] mobile:-rotate-90 mobile:w-[100vw] mobile:left-[-10%] mobile:top-[-10%] mobile:scale-[1.3] tablet:scale-[1.3] tablet:h-[40vw] tablet:left-[20%]'>
                        <Image
                        src="/assets/advastaplc/lc2-carousel-card-1.png"
                        fill
                        alt='specification 1'
                        className='object-contain '
                        />
                    </div>
                    <p className=' text-[1.25vw] absolute bottom-[15%] right-[10%] aeonik font-light  text-[#2A2A2A] mobile:text-[5vw] mobile:leading-[1.3] mobile:text-center mobile:font-light mobile:w-[70%] mobile:bottom-[10%] mobile:left-[15%] mobile:z-50 tablet:text-[2.5vw] tablet:bottom-[10%] tablet:left-[10%] tablet:font-light'><span data-para-anim>Atraumatic anvil tip.</span></p>
                    <div className='absolute h-[100%] w-[100%] z-[-1]'>
                    <Image src="/assets/advastaplc/lc2-carousel-card-bg.png" fill alt='carousel-card-1-bg' className='object-cover'/> 
                </div>
                </div>
               
            </div>
        </div>
            </SwiperSlide>
            <SwiperSlide>
        <div className="py-[2vw] flex justify-center">
            <div className='w-full h-full flex flex-col justify-center gap-[2vw]  mobile:w-[85vw] mobile:h-[160vw] mobile:justify-center mobile:gap-[8vw] tablet:h-[50vh]'>
                <p className='text-[2.5vw] font-light ml-[1.5vw] mobile:text-[8vw] mobile:text-center tablet:text-[3vw] tablet:h-[10vw]'><span data-para-anim>Enhanced firing efficiency</span></p>
                <div className=' rounded-[3vw]  h-[31vw] w-[48vw] pb-[2vw] flex flex-col gap-[4vw] overflow-hidden relative mobile:h-[70vh] mobile:w-[85vw] mobile:rounded-[9vw] tablet:h-[50vh] tablet:rounded-[5vw]'>
                    <div className='w-[45vw] h-[20vw]  relative top-[10%] left-[5%] scale-[1.2] mobile:h-[100vw] mobile:rotate-90 mobile:w-[100vw] mobile:left-[-10%] mobile:top-[-5%] mobile:scale-[1.2] tablet:scale-[1.5] tablet:h-[40vw]'>
                        <Image
                        src="/assets/advastaplc/lc2-carousel-card-2.png"
                        fill
                        alt='specification 1'
                        className='object-contain '
                        />
                    </div>
                    <p className=' text-[1.25vw] absolute bottom-[15%] left-[10%] aeonik font-light text-[#2A2A2A] mobile:text-[5vw] mobile:leading-[1.3] mobile:text-center mobile:font-light mobile:w-[80%] mobile:bottom-[10%] mobile:left-[10%] mobile:z-50 tablet:text-[2.5vw] tablet:bottom-[10%] tablet:font-light'><span data-para-anim>Two sided equipoised firing knob</span></p>
                    <div className='absolute h-[100%] w-[100%] z-[-1]'>
                    <Image src="/assets/advastaplc/lc2-carousel-card-bg.png" fill alt='carousel-card-1-bg' className='object-cover'/> 
                </div>
                </div>
               
            </div>
        </div>
            </SwiperSlide>
            <SwiperSlide>
        <div className="py-[2vw] flex justify-center">
            <div className='w-full h-full flex flex-col justify-center gap-[2vw]  mobile:w-[85vw] mobile:h-[160vw] mobile:justify-center mobile:gap-[8vw] tablet:h-[50vh]'>
                <p className='text-[2.5vw] font-light ml-[1.5vw] mobile:text-[8vw] mobile:text-center tablet:text-[3vw] tablet:h-[10vw]'><span data-para-anim>Innovative B-form staple technology 2</span></p>
                <div className=' rounded-[3vw]  h-[31vw] w-[48vw] pb-[2vw] flex flex-col gap-[4vw] overflow-hidden relative mobile:h-[70vh] mobile:w-[85vw] mobile:rounded-[9vw] tablet:h-[50vh] tablet:rounded-[5vw]'>
                    <div className='w-[45vw] h-[20vw]  relative top-[10%]  right-[-15%]  mobile:h-[100vw]  mobile:w-[100vw] mobile:left-[-10%] mobile:top-[-5%] mobile:scale-[0.8] tablet:scale-[1] tablet:h-[40vw] tablet:left-[5%] tablet:top-[5%]'>
                        <Image
                        src="/assets/advastaplc/lc2-carousel-card-3.png"
                        fill
                        alt='specification 1'
                        className='object-contain '
                        />
                    </div>
                    <p className=' text-[1.25vw] absolute bottom-[10%] left-[10%] aeonik font-light  w-[20vw] text-[#2A2A2A] mobile:text-[5vw] mobile:leading-[1.3] mobile:text-center mobile:font-light mobile:w-[80%] mobile:bottom-[5%] mobile:left-[10%] mobile:z-50 tablet:text-[2.5vw] tablet:bottom-[5%] tablet:font-light tablet:w-[45vw] tablet:left-[5%]'><span data-para-anim>Consistent tissue compression
                    Minimised risk of leaks or bleeding</span></p>
                    <div className='absolute h-[100%] w-[100%] z-[-1]'>
                    <Image src="/assets/advastaplc/lc2-carousel-card-bg.png" fill alt='carousel-card-1-bg' className='object-cover'/> 
                </div>
                </div>
               
            </div>
        </div>
            </SwiperSlide>
            <SwiperSlide>
        <div className="py-[2vw] flex justify-center">
            <div className='w-full h-full flex flex-col justify-center gap-[2vw]  mobile:w-[85vw] mobile:h-[160vw] mobile:justify-center mobile:gap-[8vw] tablet:h-[50vh]'>
                <p className='text-[2.5vw] font-light ml-[1.5vw] mobile:text-[8vw] mobile:text-center tablet:text-[3vw] tablet:h-[10vw]'><span data-para-anim>Safety Lock</span></p>
                <div className=' rounded-[3vw]  h-[31vw] w-[48vw] pb-[2vw] flex flex-col gap-[4vw] overflow-hidden relative mobile:h-[70vh] mobile:w-[85vw] mobile:rounded-[9vw] tablet:h-[50vh] tablet:rounded-[5vw]'>
                    <div className='w-[45vw] h-[20vw]  relative top-[12%] right-[-5%]  mobile:h-[100vw] mobile:rotate-90 mobile:w-[100vw] mobile:left-[-10%] mobile:top-[-7%] mobile:scale-[1.2] tablet:scale-[1.2] tablet:h-[40vw] tablet:top-[5%]'>
                        <Image
                        src="/assets/advastaplc/lc3-carousel-card-5.png"
                        fill
                        alt='specification 1'
                        className='object-contain '
                        />
                    </div>
                    <p className=' text-[1.25vw] absolute bottom-[10%] left-[10%] aeonik font-light w-[27vw] text-[#2A2A2A] mobile:text-[5vw] mobile:leading-[1.3] mobile:text-center mobile:font-light mobile:w-[80%] mobile:bottom-[5%] mobile:left-[10%] mobile:z-50 tablet:text-[2.5vw] tablet:bottom-[3%] tablet:w-[45vw] tablet:font-light tablet:left-[5%] '><span data-para-anim>Enclose the blades pre and post firing 
                    Avoids accidental operational misfiring before clamping</span></p>
                    <div className='absolute h-[100%] w-[100%] z-[-1]'>
                    <Image src="/assets/advastaplc/lc2-carousel-card-bg.png" fill alt='carousel-card-1-bg' className='object-cover'/> 
                </div>
                </div>
               
            </div>
        </div>
            </SwiperSlide>
       
      
      </Swiper>
     <div
                           className={`px-[1.2vw] py-[1.2vw] absolute z-[5] bottom-[-3%] right-0 mobile:bottom-[-3%] mobile:top-auto mobile:right-auto mobile:left-[62%] translate-x-[-65%] tablet:top-[70%] tablet:translate-y-[-70%] overflow-hidden mobile:p-[5vw] tablet:p-[2vw] rounded-full next-button cursor-pointer  mobile:block group hover:text-white bg-white/50 border border-[#222222]`}
                           onClick={handleNext} // Trigger next slide
                         >
                           <span
                             className={`bg-[#222222] w-[100%] h-[100%] z-[1] absolute top-0 left-0 origin-center scale-0 rounded-full group-hover:scale-100 duration-300`}
                           />
                           <div className="w-[1.2vw] h-[1.2vw] relative z-[6] mobile:w-[4.5vw] mobile:h-[4.5vw] tablet:w-[2.5vw] tablet:h-[2.5vw]">
                             <Image
                               src="/assets/home/arrow-right.png"
                               alt="arrow-right"
                               className={`object-cover group-hover:invert duration-300`}
                               fill
                             />
                           </div>
                         </div>
                         <div
                           className={`px-[1.2vw] py-[1.2vw] bottom-[-3%] right-[6%] absolute z-[5] mobile:bottom-[-3%] mobile:top-auto mobile:left-[37%] mobile:right-auto translate-x-[-38%]  tablet:top-[70%] tablet:translate-y-[-70%] bg-white/50 overflow-hidden  mobile:p-[5vw] tablet:p-[2vw] rounded-full prev-button cursor-pointer  mobile:block group hover:text-white border border-[#222222]`}
                           onClick={handlePrev} // Trigger previous slide
                         >
                           <span
                             className={`bg-[#222222] w-[100%] h-[100%] z-[1] absolute top-0 left-0 origin-center scale-0 rounded-full group-hover:scale-100 duration-300`}
                           />
                           <div className="w-[1.2vw] h-[1.2vw] relative z-[6] mobile:w-[4.5vw] mobile:h-[4.5vw] tablet:w-[2.5vw] tablet:h-[2.5vw] rotate-180">
                             <Image
                               src="/assets/home/arrow-left.png"
                               alt="arrow-left"
                               className={`object-cover group-hover:invert duration-300 rotate-180`}
                               fill
                             />
                           </div>
                         </div>
        </div>
    </section>
    </>
  )
}

export default LC2Carousel;