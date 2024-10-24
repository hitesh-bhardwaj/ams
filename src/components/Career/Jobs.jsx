import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Autoplay, Navigation } from 'swiper/modules';
import Link from "next/link";
import { paraAnim } from "../gsapAnimations";
import Image from "next/image";


const JobCard =({dept, designation, location})=>{
  return(
    <>   
    <Link href={"#"} className="cursor-default w-fit block">
    <div className="pt-[5%] h-[28vw] px-[4%] w-[22vw] flex flex-col items-center justify-between gap-[3vw] bg-white/80 border-[1px]  rounded-[40px] text-center career-card cursor-pointer mobile:w-[90vw] mobile:h-[90vw] mobile:rounded-[7vw] tablet:w-[40.5vw] tablet:h-[50vw] glassmorphism">
            <div className="content-p mobile:text-[5.7vw] tablet:text-[2.5vw] mt-[2vw]">
              {dept}
            </div>
            <div className="w-[80%]">
              <h2 data-para-anim className="text-[2.2vw] leading-[1.3] font-light text-[#111111] mobile:text-[8.3vw] tablet:text-[4.5vw]">
                {designation} 
              </h2>
            </div>
            <div className="content-p border-t-[1px] w-[22vw] h-[4vw] items-center  py-[3%] bg-white/90 flex  justify-center location rounded-b-[40px] mobile:w-[90vw] mobile:h-[16vw] mobile:rounded-b-[7vw] tablet:text-[2.5vw] tablet:w-[40.5vw] tablet:h-[7vw]">
             {location}
            </div>
          </div>
    </Link>
         
    </>
  )
}
const Jobs = () => {
  paraAnim()
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
    <section id="jobs">
      <div className="container-sm mb-[10%] mobile:my-[20%] mobile:flex mobile:flex-col mobile:gap-[7vw] ">
        <div className=" flex items-center justify-center ">
          <h2 data-para-anim className="title-2 aeonik ">
            Featured Jobs
          </h2>
        </div>
       <div className="mt-[5%] careerSwiper fadeUp">
       <Swiper
       onSwiper={(swiper) => (swiperRef.current = swiper)}
        slidesPerView={1}
        spaceBetween={150}
        loop= {true}
        autoplay={{
          delay: 2000, 
          disableOnInteraction: false,
        }}
        // navigation={true}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
         
          541: {
            slidesPerView: 2,
            spaceBetween:30,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
        modules={[ Pagination, Autoplay,Navigation]}
        className="MySwiper "
      >
        <SwiperSlide>
          <JobCard dept={"Sales"} designation={"Territory Sales Manager"} location={"Jaipur"}/></SwiperSlide>
        <SwiperSlide><JobCard dept={"Marketing"} designation={"Product Manager"} location={"Delhi"}/></SwiperSlide>
        <SwiperSlide><JobCard dept={"Engineering"} designation={"Senior Safety Manager"} location={"Vadodara"}/></SwiperSlide>
        <SwiperSlide><JobCard dept={"Sales"} designation={"Territory Sales Manager"} location={"Jaipur"}/></SwiperSlide>
      
      </Swiper>
      <div
              className={`absolute z-[5] bottom-0 left-[65%] translate-x-[-65%] border overflow-hidden py-[5vw] px-[5vw] rounded-full next-button cursor-pointer hidden mobile:block 
                ${
                  activeButton === "next"
                    ? " text-white"
                    : "bg-white text-black"
                } transition-colors duration-300`} // Added background color transition
              onClick={handleNext} // Trigger next slide
            >
              <span className={`bg-black w-[100%] h-[100%] z-[1] absolute top-0 left-0 origin-center scale-0 rounded-full  ${
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
              className={`absolute z-[5] bottom-0 left-[35%] translate-x-[-38%] border overflow-hidden  py-[5vw] px-[5vw] rounded-full prev-button cursor-pointer hidden mobile:block
                ${
                  activeButton === "prev"
                    ? " text-white"
                    : "bg-white text-black"
                } transition-colors duration-300`} // Added background color transition
              onClick={handlePrev} // Trigger previous slide
            >
               <span className={`bg-black w-[100%] h-[100%] z-[1] absolute top-0 left-0 origin-center scale-0 rounded-full ${
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

      
      
    </section>
  );
};

export default Jobs;
