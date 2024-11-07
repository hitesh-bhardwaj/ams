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


const SpecificationsCarousel = () => {
    paraAnim();
      // useGSAP(()=>{
    //     const tl = gsap.timeline({
    //         scrollTrigger:{
    //             trigger:'.swiper-container'
    //         }
    //     });
    //     tl.fromTo(".mySpecificationSwiper",{
    //         xPercent:80,
    //         opacity:0.5
    //     },{
    //         xPercent:-80,
    //         duration: 2,
    //     delay: 0.1,
    //     opacity:1,
    //     ease: "power3.out",
    //     })
    // })
  return (
    <>
    <section id='specificationCarousel'>  
        <div className='w-screen h-full py-[10vw] bg-[#020912]  overflow-hidden text-white items-center flex justify-center swiper-container'>
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
        className="mySpecificationSwiper w-screen flex items-center justify-center"
      >
        <SwiperSlide>
        <div className="py-[2vw] flex justify-center">
            <div className='w-full h-full flex flex-col justify-center gap-[2vw] text-[2vw] mobile:w-[85vw] mobile:h-[80vh] mobile:justify-center mobile:gap-[4vw] tablet:h-[60vh]'>
                <p className='text-[2.5vw] font-light ml-[1.5vw] mobile:text-[9.2vw] mobile:text-center tablet:text-[4.5vw]'><span data-para-anim>High Staple Count Per Firing</span></p>
                <div className='bg-[#0F233D] rounded-[20px]  h-[32vw] w-[48vw] pb-[2vw] flex flex-col gap-[4vw] overflow-hidden mobile:h-[70vh] mobile:w-[85vw] tablet:h-[50vh]'>
                    <div className='w-[55vw] h-[20vw]  relative top-0 left-[-40%] mobile:h-[100vw] mobile:rotate-90 mobile:w-[100vw] mobile:left-[-20%] mobile:top-[-15%] mobile:scale-[1.2] tablet:scale-[1.5] tablet:h-[40vw]'>
                        <Image
                        src="/assets/advastap/spec1.png"
                        fill
                        alt='specification 1'
                        className='object-cover '
                        />

                    </div>
                    <p className='text-center text-[1.25vw] absolute bottom-[15%] left-[10%] aeonik font-extralight mobile:text-[4.7vw] mobile:w-[70%] mobile:bottom-[20%] mobile:left-[15%] mobile:z-50 tablet:text-[4vw] tablet:bottom-[25%]'><span data-para-anim>Extensive closure with effective coverage.</span></p>
                </div>
            </div>
        </div>
            </SwiperSlide>
        <SwiperSlide>
        <div className="py-[2vw] flex justify-center">
            <div className='w-full h-full flex flex-col justify-between gap-[2vw] text-[2vw] mobile:w-[85vw] mobile:h-[80vh] mobile:justify-center mobile:gap-[4vw]  tablet:h-[60vh]'>
                <p className='text-[2.5vw] font-light ml-[1.5vw] mobile:text-[9.2vw] mobile:text-center tablet:text-[4.5vw]'><span data-para-anim>Four Housing Conduids</span></p>
                <div className='bg-[#0F233D] rounded-[20px]  h-[32vw] w-[48vw] pb-[2vw] flex flex-col gap-[4vw] overflow-hidden mobile:h-[70vh] mobile:w-[85vw] tablet:h-[50vh]'>
                    <div className='w-[60vw] h-[20vw]  relative top-0 left-[-20%] mobile:h-[60vh] mobile:-rotate-90 mobile:left-[15%] mobile:top-[10%] mobile:scale-[3] mobile:overflow-hidden tablet:h-[40vw] tablet:left-[-10%] tablet:scale-[1.2]' >
                        <Image
                        src="/assets/advastap/spec2.png"
                        fill
                        alt='specification 1'
                        className='object-contain'
                        />

                    </div>
                    <p className='text-center aeonik text-[1.25vw] absolute bottom-[15%] left-[10%] font-extralight mobile:text-[4.7vw] mobile:w-[70%] mobile:bottom-[20%] mobile:left-[15%] mobile:z-50 tablet:text-[4vw] tablet:bottom-[20%]'><span data-para-anim>Designed for secure purse-string suture placement.</span></p>
                </div>
            </div>
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="py-[2vw] flex justify-center">
            <div className='w-full h-full flex flex-col justify-between gap-[2vw] text-[2vw] mobile:w-[85vw] mobile:h-[80vh] mobile:justify-center mobile:gap-[4vw]  tablet:h-[60vh]'>
                <p className='text-[2.5vw] font-light ml-[1.5vw] mobile:text-[9.2vw] mobile:text-center tablet:text-[4.5vw]'><span data-para-anim>Uniform Perfusion Across the Staple Lines</span></p>
                <div className='bg-[#0F233D] rounded-[20px] w-[48vw] h-[32vw] pb-[2vw] flex flex-col gap-[4vw] overflow-hidden mobile:h-[70vh] mobile:w-[85vw] tablet:h-[50vh]'>
                    <div className='w-[90vw] h-[15vw]  relative top-0  mobile:h-[50vh] mobile:-rotate-90 mobile:scale-[1.2] mobile:top-[-15%] mobile:left-[15%] tablet:h-[40vw] tablet:top-[5%] tablet:left-[10%]'>
                        <Image
                        src="/assets/advastap/spec3.png"
                        fill
                        alt='specification 1'
                        className='object-cover mobile:object-contain'
                        />

                    </div>
                    <p className='text-center aeonik absolute bottom-[15%] left-[10%] text-[1.25vw] font-extralight mobile:text-[4.7vw] mobile:w-[70%] mobile:bottom-[20%] mobile:left-[15%] mobile:z-50 tablet:text-[4vw] tablet:bottom-[25%]'><span data-para-anim>Faster Recovery & better postoperative results</span></p>
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

export default SpecificationsCarousel