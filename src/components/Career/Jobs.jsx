import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';


const JobCard =({dept, designation, location})=>{
  return(
    <>
          <div className="py-[5%] h-[23vw] px-[4%] w-[20vw] flex flex-col items-center justify-between gap-[3vw] bg-white/80 border-[1px]  rounded-[40px] text-center">
            <div className="content-p">
              {dept}
            </div>
            <div className="w-[70%]">
              <h2 className="text-[2vw] aeonik leading-[1.3] font-light text-[#111111]">
                {designation} 
              </h2>
            </div>
            <div className="content-p border-t-[1px] w-full bg-white/90 flex items-center justify-center">
             {location}
            </div>
          </div>
    </>
  )
}
const Jobs = () => {
  return (
    <section>
      <div className="container-sm mb-[10%] ">
        <div className=" flex items-center justify-center ">
          <h2 className="title-2 aeonik  ml-[9%]">
            <span>Featured Jobs</span>
          </h2>
        </div>
       <div className="mt-[10%]">
       <Swiper
        slidesPerView={3}
        spaceBetween={20}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="careerSwiper"
      >
        <SwiperSlide><JobCard dept={"Sales"} designation={"Territory Sales Manager"} location={"Jaipur"}/></SwiperSlide>
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
