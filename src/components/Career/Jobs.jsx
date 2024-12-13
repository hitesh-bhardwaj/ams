import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Autoplay } from "swiper/modules";
import Link from "next/link";
import { paraAnim } from "../gsapAnimations";
import {useLenis} from 'lenis/react'
import styles from "@/styles/careerSwiper.module.css"; // Import the modal component
import JobDescription from "./JobDescription";

const JobCard = ({ dept, designation, location, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="pt-[5%] h-[28vw]  flex flex-col items-center justify-between gap-[3vw] bg-white/50 border-[1px]  rounded-[40px] text-center career-card cursor-pointer mobile:w-[90vw] mobile:h-[100vw] mobile:rounded-[7vw] tablet:w-[40.5vw] tablet:h-[50vw] "
    >
      <div className="content-p mobile:text-[5.7vw] tablet:text-[2.5vw] mt-[2vw]">
        {dept}
      </div>
      <div className="w-[80%] flex">
        <h2
          data-para-anim
          className="text-[2.2vw] leading-[1.3] font-light text-[#2a2a2a] mobile:text-[8.3vw] tablet:text-[4.5vw]"
        >
          {designation}
        </h2>
      </div>
      <div className="content-p border-t-[1px] w-full h-[4vw] items-center py-[3%] bg-white/90 flex justify-center location rounded-b-[40px] mobile:w-[90vw] mobile:h-[16vw] mobile:rounded-b-[7vw] tablet:text-[2.5vw] tablet:w-[40.5vw] tablet:h-[7vw]">
        {location}
      </div>
    </div>
  );
};

const Jobs = () => {
  paraAnim();
  const swiperRef = useRef(null); // Create a ref for Swiper
  const [activeButton, setActiveButton] = useState("");
  const [isModalOpen, setModalOpen] = useState(false);
  const lenis = useLenis(); // Ref for Lenis instance

  // Open modal and stop Lenis
  const handleCardClick = () => {
    lenis&&lenis.stop(); // Stop Lenis
    setModalOpen(true);
    console.log("working")
  };

  // Close modal and restart Lenis
  const handleModalClose = () => {
    setModalOpen(false);
    lenis&&lenis.start(); // Start Lenis
  };

  return (
    <section id="jobs">
      <div className="py-[5%] mobile:py-[10%] mobile:pb-[15%] mobile:flex mobile:flex-col mobile:gap-[7vw] tablet:mt-[10%] tablet:mb-[5%]">
        <div className="flex items-center justify-center tablet:mb-[8vw]">
          <h2 data-para-anim className="title-2 aeonik">
            Featured Jobs
          </h2>
        </div>
        <div className={`mt-[5%] ${styles.careerSwiper} careerSwiper fadeUp`}>
          <Swiper
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            slidesPerView={1}
            spaceBetween={150}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              541: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 100,
              },
              1350:{
                slidesPerView: 3,
                spaceBetween: 170,
              },
              1650:{

                slidesPerView: 3,
                spaceBetween: 200,

              }
            }}
            modules={[Pagination, Autoplay]}
            className="MySwiper !px-[5vw]"
          >
            <SwiperSlide>
              <JobCard
                dept={"Sales"}
                designation={"Territory Sales Manager"}
                location={"Jaipur"}
                onClick={handleCardClick}
              />
            </SwiperSlide>
            <SwiperSlide>
              <JobCard
                dept={"Marketing"}
                designation={"Product Manager"}
                location={"Delhi"}
                onClick={handleCardClick}
              />
            </SwiperSlide>
            <SwiperSlide>
              <JobCard
                dept={"Engineering"}
                designation={"Senior Safety Manager"}
                location={"Vadodara"}
                onClick={handleCardClick}
              />
            </SwiperSlide>
            <SwiperSlide>
              <JobCard
                dept={"Sales"}
                designation={"Territory Sales Manager"}
                location={"Jaipur"}
                onClick={handleCardClick}
              />
            </SwiperSlide>
            <SwiperSlide>
              <JobCard
                dept={"Sales"}
                designation={"Territory Sales Manager"}
                location={"Jaipur"}
                onClick={handleCardClick}
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>

      {/* Render JobDescription Modal */}
      {isModalOpen && <JobDescription onClose={handleModalClose} />}
    </section>
  );
};

export default Jobs;
