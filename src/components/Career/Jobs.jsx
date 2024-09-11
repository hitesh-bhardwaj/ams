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
    <Link href={"#"} className="cursor-default w-[23.5vw] block mobile:w-[70vw]">
    <div className="pt-[5%] h-[23vw] px-[4%] w-[23.5vw] flex flex-col items-center justify-between gap-[3vw] bg-white/80 border-[1px]  rounded-[40px] text-center career-card cursor-pointer mobile:h-[70vw] mobile:w-[70vw] mobile:rounded-[7vw]">
            <div className="content-p">
              {dept}
            </div>
            <div className="w-[70%]">
              <h2 data-para-anim className="text-[2vw] aeonik leading-[1.3] font-light text-[#111111]">
                {designation} 
              </h2>
            </div>
            <div className="content-p border-t-[1px] w-[23.5vw] h-[4vw] items-center  py-[3%] bg-white/90 flex  justify-center location rounded-b-[40px]">
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
      <div className="container-sm mb-[10%] ">
        <div className=" flex items-center justify-center ">
          <h2 data-para-anim className="title-2 aeonik ">
            Featured Jobs
          </h2>
        </div>
       <div className="mt-[10%] careerSwiper fadeUp">
       <Swiper
        slidesPerView={3}
        spaceBetween={0}
        loop= {true}
        // autoplay={{
        //   delay: 2000,
        //   disableOnInteraction: false,
        // }}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          0: {
            slidesPerView: 1, // 1 slide per view on mobile
            spaceBetween: 40,
          },
          542: {
            slidesPerView: 2, // 2 slides per view on tablets
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3, // 3 slides per view on larger screens
            spaceBetween: 30,
          },
        }}
        modules={[ Pagination, Autoplay]}
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
