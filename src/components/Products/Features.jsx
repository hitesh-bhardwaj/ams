/* eslint-disable react-hooks/rules-of-hooks */
import React ,{useRef, useState} from 'react'
import Image from 'next/image'
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { paraAnim , fadeUp } from "../gsapAnimations";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css/navigation";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const FeatureCard=({src,title})=>{
    return(
        <>
          <div className='flex flex-col items-center justify-center fadeup feature-card'>
                    <div className='h-[15vw] w-[10vw] mobile:w-[60vw] mobile:h-[40vw]'>
                        <div className='w-full h-full relative'>
                        <Image
                        src={src}
                        fill
                        alt="Features"
                        className='object-contain'
                        />
                        </div>
                    </div>
                    <di>
                        <p className='text-[1.65vw] font-light mobile:text-[5.5vw]'>
                            {title}
                        </p>
                    </di>
                </div>
        </>
    )
}

const Features = ({card1,card2,card3,card4}) => {
    // paraAnim()
    // fadeUp()
    // if(globalThis.innerWidth<1024){
  
    // }
    // else{
    //   useGSAP(()=>{
    //     gsap.from(".feature-card",{
    //       yPercent:50,
    //       opacity:0,
    //       duration:0.7,
    //       scrollTrigger:{
    //         trigger:".feature-card-container",
    //         start:"top 80%",
    //         end:"bottom 40%",
           
    //       },
    //       stagger:0.1
          
    //     })
    
    //   })
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
    }
  return (
   <>
   <section>
    <div className='h-screen w-screen container-lg glassmorphism mobile:hidden '>
        <div className='h-[70%] w-full border rounded-[40px] flex flex-col glassmorphism items-center justify-center gap-[6vw] '>
            <div>
                <h2 className='title-2 aeonik'>Key Features</h2>
            </div>
            <div className='flex items-center justify-evenly w-full feature-card-container mobile:hidden'>
                <FeatureCard src={card1.src} title={card1.title}/>
                <FeatureCard src={card2.src} title={card2.title}/>
                <FeatureCard src={card3.src} title={card3.title}/>
                <FeatureCard src={card4.src} title={card4.title}/>
            </div>
            </div>
            </div>


            <div className='h-screen w-screen container-lg glassmorphism hidden mobile:mt-[40%] mobile:block mobile:h-[70vh]'>
            <div className='mb-[10%]'>
                <h2 className='title-2 aeonik mobile:text-center'>Key Features</h2>
            </div>
        <div className='h-[90vw] w-full border rounded-[40px] flex flex-col glassmorphism items-center justify-center gap-[6vw] mobile:py-[10vw]'>        
            <div className='w-[47%] flex-col gap-y-[2vw]  mobile:flex mobile:flex-row mobile:w-[100%] mobile:h-full'>
              <Swiper
              navigation={false}
              modules={[Navigation]}
              onSwiper={(swiper) => (swiperRef.current = swiper)}
              spaceBetween={40}
              className="molecularSwiper mySwiper mobile:h-[100%] tablet:h-[100%]"
               >
                <SwiperSlide>
                <FeatureCard src={card1.src} title={card1.title}/>
                </SwiperSlide>
                <SwiperSlide>
                <FeatureCard src={card2.src} title={card2.title}/>
                </SwiperSlide>
                <SwiperSlide>
                <FeatureCard src={card3.src} title={card3.title}/>
                </SwiperSlide>
                <SwiperSlide>
                <FeatureCard src={card4.src} title={card4.title}/>
                </SwiperSlide>
              </Swiper>
              <div
                className={`absolute z-[5] bottom-5 left-[67%] translate-x-[-65%] overflow-hidden border glassmorphism  py-[5vw] px-[5vw] rounded-full next-button cursor-pointer 
                ${
                  activeButton === "next"
                    ? " text-white border-none"
                    : "bg-transparent text-[#111111]"
                } transition-colors duration-300`} // Added background color transition
                onClick={handleNext} // Trigger next slide
              >
                <span
                  className={`bg-[#111111] w-[100%] h-[100%] z-[1] absolute top-0 left-0 origin-center scale-0 rounded-full  ${
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
                    activeButton === "next"
                      ? "invert"
                      : "invert-0"
                  } `}
                fill
              />
            </div>
              </div>
              <div
                className={`absolute z-[5] bottom-5 left-[37%] translate-x-[-38%] glassmorphism overflow-hidden border py-[5vw] px-[5vw] rounded-full prev-button cursor-pointer 
                ${
                  activeButton === "prev"
                    ? " text-white border-none"
                    : "bg-transparent text-[#111111]"
                } transition-colors duration-300`} // Added background color transition
                onClick={handlePrev} // Trigger previous slide
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
            </div>
            

  
   </section>
   </>
  )
}


export default Features