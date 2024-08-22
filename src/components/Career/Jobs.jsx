import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper/modules';
import Link from "next/link";
import { paraAnim } from "../gsapAnimations";


const JobCard =({dept, designation, location})=>{
  return(
    <>   
    <Link href={"#"} className="cursor-default w-[22vw] block">
    <div className="pt-[5%] h-[23vw] px-[4%] w-[22vw] flex flex-col items-center justify-between gap-[3vw] bg-white/80 border-[1px]  rounded-[40px] text-center career-card cursor-pointer">
            <div className="content-p">
              {dept}
            </div>
            <div className="w-[70%]">
              <h2 data-para-anim className="text-[2vw] aeonik leading-[1.3] font-light text-[#111111]">
                {designation} 
              </h2>
            </div>
            <div className="content-p border-t-[1px] w-[22vw] h-[4vw] items-center  py-[3%] bg-white/90 flex  justify-center location rounded-b-[40px]">
             {location}
            </div>
          </div>
    </Link>
         
    </>
  )
}
const Jobs = () => {
  paraAnim()
  return (
    <section id="jobs">
      <div className="container-sm mb-[15%] ">
        <div className=" flex items-center justify-center ">
          <h2 data-para-anim className="title-2 aeonik ">
            Featured Jobs
          </h2>
        </div>
       <div className="mt-[10%] careerSwiper">
       <Swiper
        slidesPerView={3}
        spaceBetween={0}
        loop= {true}
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[ Pagination]}
        className="MySwiper"
      >
        <SwiperSlide>
          <JobCard dept={"Sales"} designation={"Territory Sales Manager"} location={"Jaipur"}/></SwiperSlide>
        <SwiperSlide><JobCard dept={"Marketing"} designation={"Product Manager"} location={"Delhi"}/></SwiperSlide>
        <SwiperSlide><JobCard dept={"Engineering"} designation={"Senior Safety Manager"} location={"Vadodara"}/></SwiperSlide>
        <SwiperSlide><JobCard dept={"Sales"} designation={"Territory Sales Manager"} location={"Jaipur"}/></SwiperSlide>
        <SwiperSlide><JobCard dept={"Marketing"} designation={"Product Manager"} location={"Delhi"}/></SwiperSlide>
        <SwiperSlide><JobCard dept={"Engineering"} designation={"Senior Safety Manager"} location={"Vadodara"}/></SwiperSlide>
      </Swiper>
      </div>
      </div>
      
    </section>
  );
};

export default Jobs;
