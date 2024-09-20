import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Autoplay, Navigation } from 'swiper/modules';
import Link from "next/link";
import { paraAnim } from "../gsapAnimations";


const JobCard =({dept, designation, location})=>{
  return(
    <>   
    <Link href={"#"} className="cursor-default w-fit block">
    <div className="pt-[5%] h-[28vw] px-[4%] w-[22vw] flex flex-col items-center justify-between gap-[3vw] bg-white/80 border-[1px]  rounded-[40px] text-center career-card cursor-pointer mobile:w-[90vw] mobile:h-[90vw] mobile:rounded-[7vw] tablet:h-[50vw] glassmorphism">
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
      setTimeout(() => setActiveButton(""), 300); // Reset after 300ms
    }
  };

  const handlePrev = () => {
    if (swiperRef.current) {
      swiperRef.current.slidePrev(); // Move to the previous slide
      setActiveButton("prev"); // Set previous button as active
      setTimeout(() => setActiveButton(""), 300); // Reset after 300ms
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
        // autoplay={{
        //   delay: 2000, 
        //   disableOnInteraction: false,
        // }}
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
              className={`absolute z-[5] bottom-0 left-[65%] translate-x-[-65%] border overflow-hidden border-black py-[5vw] px-[5vw] rounded-full next-button cursor-pointer hidden mobile:block 
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
              
              <div className="w-[7vw] h-[7vw] relative z-[1]">
                <svg
                  fill="currentColor"
                  height="30px"
                  width="30px"
                  version="1.1"
                  id="Layer_1"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 330 330"
                >
                  <path
                    id="XMLID_27_"
                    d="M15,180h263.787l-49.394,49.394c-5.858,5.857-5.858,15.355,0,21.213C232.322,253.535,236.161,255,240,255
	s7.678-1.465,10.606-4.394l75-75c5.858-5.857,5.858-15.355,0-21.213l-75-75c-5.857-5.857-15.355-5.857-21.213,0
	c-5.858,5.857-5.858,15.355,0,21.213L278.787,150H15c-8.284,0-15,6.716-15,15S6.716,180,15,180z"
                  />
                </svg>
              </div>
            </div>
            <div
              className={`absolute z-[5] bottom-0 left-[35%] translate-x-[-38%] border border-black overflow-hidden  py-[5vw] px-[5vw] rounded-full prev-button cursor-pointer hidden mobile:block
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
              <div className="w-[7vw] h-[7vw] relative z-[2] ">
                <svg
                  width="30"
                  height="30"
                  viewBox="0 0 800 800"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_381_369)">
                    <path
                      d="M763.636 436.364H124.153L243.896 556.107C258.097 570.305 258.097 593.331 243.896 607.532C236.795 614.63 227.488 618.182 218.182 618.182C208.875 618.182 199.568 614.63 192.47 607.53L10.6521 425.711C-3.54908 411.513 -3.54908 388.487 10.6521 374.286L192.47 192.468C206.669 178.269 229.695 178.269 243.896 192.468C258.097 206.667 258.097 229.692 243.896 243.893L124.153 363.636H763.636C783.719 363.636 800 379.918 800 400C800 420.082 783.719 436.364 763.636 436.364Z"
                      fill="currentColor"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_381_369">
                      <rect
                        width="800"
                        height="800"
                        fill="white"
                        transform="matrix(-1 0 0 1 800 0)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </div>
            </div>
          </div>
      </div>

      
      
    </section>
  );
};

export default Jobs;
