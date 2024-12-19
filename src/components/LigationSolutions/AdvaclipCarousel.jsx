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
const AdvaclipCarousel = () => {
    useGSAP(()=>{
            if(globalThis.innerWidth>1024){
            const tl = gsap.timeline({
                scrollTrigger:{
                    trigger:'.lc3-swiper-container'
                }
            });
            tl.fromTo(".lc3Swiper .swiper-slide",{
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
    <section id='lc3-carousel' className='overflow-hidden py-[5%] pb-[10%]  tablet:h-[80vh] mobile:py-[15%] mobile:pb-[25%] '>  
        <div className={`w-screen h-full text-[#2A2A2A] items-center flex justify-center lc3-swiper-container cursor-grab relative `}>
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
                spaceBetween:30,
            },
            1024: {
              slidesPerView: 2,
              spaceBetween: 50,
            },
          }}
        className={`w-screen flex items-center justify-center lc3Swiper specificationSwiper   tablet:h-[60vh] mobile:h-[90vh]`}
      >
        <SwiperSlide>
        <div className="py-[2vw] flex justify-center">
            <div className='w-full h-full flex flex-col justify-center gap-[2vw]  mobile:w-[85vw] mobile:h-[80vh] mobile:justify-center mobile:gap-[8vw] tablet:h-[50vh]'>
                <p className='text-[2.5vw] font-light text-[#1A1A1A] ml-[1.5vw] mobile:text-[8vw] mobile:h-[20vw] mobile:text-center tablet:text-[3vw] tablet:h-[8vw]'><span data-para-anim>Meticulously Designed</span></p>
                <div className=' rounded-[3vw]  h-[31vw] w-[48vw] pb-[2vw] flex flex-col gap-[4vw] overflow-hidden relative mobile:h-[70vh] mobile:w-[85vw] tablet:h-[50vh] mobile:rounded-[9vw] tablet:rounded-[5vw]'>
                    <div className='w-[80vw] h-[15vw]  relative top-[-5%] left-[-30%] scale-[3.5] mobile:h-[100vw]  mobile:w-[100vw] mobile:left-[-7%] mobile:top-[8%] mobile:scale-[1.7] tablet:scale-[1.4] tablet:h-[40vw] tablet:top-[25%] tablet:left-[-40%]'>
                        <Image
                        src="/assets/ligation/advaclip-carousel-card1.png"
                        fill
                        alt='specification 1'   
                        className='object-contain '
                        />
                    </div>
                    <p className='text-center text-[1.25vw] w-[40%] absolute top-[15%] left-[10%] aeonik font-light   text-[#2A2A2A] mobile:text-[7vw]  mobile:font-light mobile:w-[80%] mobile:text-center mobile:top-[5%] mobile:left-[10%] mobile:z-50 tablet:text-[2.5vw] tablet:top-[10%] tablet:font-light tablet:w-[80%]'><span data-para-anim>Inner cross-serration Innovative pull-tab adhesive mechanism Single mold design</span></p>
                    <div className='absolute h-[100%] w-[100%] z-[-1]'>
                    <Image src="/assets/ligation/advaclip-carousel-card1-bg.png" fill alt='carousel-card-1-bg' className='object-cover'/> 
                </div>
                </div>
               
            </div>
        </div>
            </SwiperSlide>
            <SwiperSlide>
        <div className="py-[2vw] flex justify-center">
            <div className='w-full h-full flex flex-col justify-center gap-[2vw]  mobile:w-[85vw] mobile:h-[80vh] mobile:justify-center mobile:gap-[8vw] tablet:h-[50vh]'>
                <p className='text-[2.5vw] font-light ml-[1.5vw] text-[#1A1A1A] mobile:text-[8vw] mobile:h-[20vw]  mobile:text-center tablet:text-[3vw] tablet:h-[8vw]'><span data-para-anim>Revolutionizing Clip Integrity</span></p>
                <div className=' rounded-[3vw]  h-[31vw] w-[48vw] pb-[2vw] flex flex-col gap-[4vw] overflow-hidden relative mobile:h-[70vh] mobile:w-[85vw] tablet:h-[50vh] mobile:rounded-[9vw] tablet:rounded-[5vw]'>
                    <div className='w-[45vw] h-[20vw]  relative top-[30%] left-[-20%] scale-[1.4] mobile:h-[100vw] mobile:w-[100vw] mobile:left-[-15%] mobile:top-[15%] mobile:scale-[0.9] tablet:scale-[1.3] tablet:h-[40vw] tablet:left-[5%] tablet:top-[15%]'>
                        <Image
                        src="/assets/ligation/advaclip-carousel-card2.png"
                        fill
                        alt='specification 1'
                        className='object-contain '
                        />
                    </div>
                    <p className='text-[1.25vw] absolute w-[40%] top-[15%] right-[5%] aeonik font-light  text-[#2A2A2A] mobile:text-[7vw] mobile:font-light mobile:w-[75%] mobile:top-[70%] mobile:left-[15%] mobile:z-50 tablet:text-[2.5vw] tablet:top-[80%] tablet:left-[10%] tablet:font-light mobile:text-center tablet:text-center tablet:w-[80%]'><span data-para-anim>Novel knurling surface
                    Distinctive heart-shaped profile</span></p>
                    <div className='absolute h-[100%] w-[100%] z-[-1]'>
                    <Image src="/assets/ligation/advaclip-carousel-card2-bg.png" fill alt='carousel-card-1-bg' className='object-cover'/> 
                </div>
                </div>
               
            </div>
        </div>
            </SwiperSlide>
            <SwiperSlide>
        <div className="py-[2vw] flex justify-center">
            <div className='w-full h-full flex flex-col justify-center gap-[2vw]  mobile:w-[85vw] mobile:h-[80vh] mobile:justify-center mobile:gap-[8vw] tablet:h-[50vh]'>
                <p className='text-[2.5vw] font-light ml-[1.5vw] text-[#1A1A1A] mobile:text-[8vw] mobile:h-[20vw]  mobile:text-center tablet:text-[3vw] tablet:h-[8vw]'><span data-para-anim>Advaclip Appliers</span></p>
                <div className=' rounded-[3vw]  h-[31vw] w-[48vw] pb-[2vw] flex flex-col gap-[4vw] overflow-hidden relative mobile:h-[70vh] mobile:w-[85vw] tablet:h-[50vh] mobile:rounded-[9vw] tablet:rounded-[5vw]'>
                    <div className='w-[45vw] h-[20vw]  relative top-0 right-[-25%] scale-[1.2]  mobile:h-[100vw]  mobile:w-[100vw] mobile:left-[10%] mobile:top-[5%] mobile:scale-[1] tablet:scale-[1.2] tablet:h-[40vw] tablet:left-[18%]'>
                        <Image
                        src="/assets/ligation/advaclip-carousel-card3.png"
                        fill
                        alt='specification 1'
                        className='object-contain '
                        />
                    </div>
                    <p className=' text-[1.25vw] absolute bottom-[15%] w-[30%] left-[15%] aeonik font-light text-[#2A2A2A] mobile:text-[7vw] mobile:font-light mobile:w-[80%] mobile:top-[80%] mobile:left-[10%]  tablet:left-[10%] mobile:z-50 tablet:text-[2.5vw] mobile:text-center tablet:top-[80%] tablet:font-light tablet:w-[80%] tablet:text-center '><span data-para-anim>Diamond dusted jaws
                    Triangular surface</span></p>
                    <div className='absolute h-[100%] w-[100%] z-[-1]'>
                    <Image src="/assets/ligation/advaclip-carousel-card3-bg.png" fill alt='carousel-card-1-bg' className='object-cover'/> 
                </div>
                </div>
               
            </div>
        </div>
            </SwiperSlide>
            <SwiperSlide>
        <div className="py-[2vw] flex justify-center">
            <div className='w-full h-full flex flex-col justify-center gap-[2vw]  mobile:w-[85vw] mobile:h-[80vh] mobile:justify-center mobile:gap-[8vw] tablet:h-[50vh]'>
                <p className='text-[2.5vw] font-light ml-[1.5vw] text-[#1A1A1A] mobile:text-[8vw] mobile:h-[20vw]  mobile:text-center tablet:text-[3vw] tablet:h-[8vw]'><span data-para-anim>Laparoscopic Appliers</span></p>
                <div className=' rounded-[3vw]  h-[31vw] w-[48vw] pb-[2vw] flex flex-col gap-[4vw] overflow-hidden relative mobile:h-[70vh] mobile:w-[85vw] tablet:h-[50vh] mobile:rounded-[9vw] tablet:rounded-[5vw]'>
                    <div className='w-[45vw] h-[20vw]  relative top-[15%]  right-[8%] scale-[1.3]  mobile:h-[100vw]  mobile:w-[100vw] mobile:left-[-20%] mobile:top-[-15%] mobile:scale-[1] tablet:scale-[1.2] tablet:h-[40vw] tablet:left-[-10%] tablet:top-[5%]'>
                        <Image
                        src="/assets/ligation/advaclip-carousel-card4.png"
                        fill
                        alt='specification 1'
                        className='object-contain '
                        />
                    </div>
                    <p className=' text-[1.25vw] absolute bottom-[15%] left-[10%] aeonik font-light  w-[12vw] text-[#2A2A2A] mobile:text-[7vw] mobile:font-light mobile:w-[80%] mobile:bottom-[10%] mobile:left-[15%] mobile:z-50 tablet:text-[2.5vw] tablet:bottom-[10%] tablet:font-light tablet:w-[80%] mobile:text-center tablet:text-center'><span data-para-anim>For Laparoscopic  Surgical Procedures</span></p>
                    <div className='absolute h-[100%] w-[100%] z-[-1]'>
                    <Image src="/assets/ligation/advaclip-carousel-card4-bg.png" fill alt='carousel-card-1-bg' className='object-cover'/> 
                </div>
                </div>
               
            </div>
        </div>
            </SwiperSlide>
            <SwiperSlide>
        <div className="py-[2vw] flex justify-center">
            <div className='w-full h-full flex flex-col justify-center gap-[2vw]  mobile:w-[85vw] mobile:h-[80vh] mobile:justify-center mobile:gap-[8vw] tablet:h-[50vh]'>
                <p className='text-[2.5vw] font-light ml-[1.5vw] text-[#1A1A1A] mobile:text-[8vw] mobile:h-[20vw]  mobile:text-center tablet:text-[3vw] tablet:h-[8vw]'><span data-para-anim>Open Appliers</span></p>
                <div className=' rounded-[3vw]  h-[31vw] w-[48vw] pb-[2vw] flex flex-col gap-[4vw] overflow-hidden relative mobile:h-[70vh] mobile:w-[85vw] tablet:h-[50vh] mobile:rounded-[9vw] tablet:rounded-[5vw]'>
                    <div className='w-[45vw] h-[20vw]  relative top-[30%] right-[-5%]  mobile:h-[100vw] mobile:rotate-90 mobile:w-[100vw] mobile:left-[-5%] mobile:top-[5%] tablet:scale-[1] tablet:h-[40vw] tablet:top-[10%]'>
                        <Image
                        src="/assets/ligation/advaclip-carousel-card5.png"
                        fill
                        alt='specification 1'
                        className='object-contain '
                        />
                    </div>
                    <p className='text-center text-[1.25vw] absolute top-[15%] right-[10%] aeonik font-light  text-[#2A2A2A] mobile:text-[7vw]  mobile:font-light mobile:w-[70%] mobile:top-[80%] mobile:left-[15%] mobile:z-50 tablet:text-[2.5vw] tablet:top-[80%] tablet:font-light tablet:w-[80%] mobile:text-center tablet:text-center'><span data-para-anim>For Open Surgical Procedures</span></p>
                    <div className='absolute h-[100%] w-[100%] z-[-1]'>
                    <Image src="/assets/ligation/advaclip-carousel-card5-bg.png" fill alt='carousel-card-1-bg' className='object-cover'/> 
                </div>
                </div>
               
            </div>
        </div>
            </SwiperSlide>
       
      
      </Swiper>
     <div
                           className={`px-[1.2vw] py-[1.2vw] absolute z-[5] bottom-[-3%] right-0 mobile:bottom-[-5%] mobile:top-auto mobile:right-auto mobile:left-[65%]  translate-x-[-65%] tablet:top-[90%] tablet:bottom-auto  tablet:translate-y-[-70%] overflow-hidden  tablet:p-[2vw] rounded-full next-button cursor-pointer  mobile:block group hover:text-white bg-white/50 mobile:p-[5vw] tablet:right-[40%]`}
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
                           className={`px-[1.2vw] py-[1.2vw] bottom-[-3%] right-[6%] absolute z-[5] mobile:bottom-[-5%] mobile:top-auto  translate-x-[-38%]  tablet:top-[90%] mobile:right-auto mobile:left-[40%] tablet:translate-y-[-70%] bg-white/50 overflow-hidden  mobile:p-[5vw] tablet:p-[2vw] tablet:bottom-auto rounded-full prev-button cursor-pointer  mobile:block group hover:text-white tablet:right-[50%]`}
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

export default AdvaclipCarousel;