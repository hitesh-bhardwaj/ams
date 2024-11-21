import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Image from "next/image";

const SurgicalCard = ({title, img, para }) => {
  return (
    <>
    <div className="">
      <p className="text-[2.2vw] font-light w-[72%]">{title}</p>
      <div className="h-[30vw] w-[25vw] p-[1vw] rounded-[1.5vw] bg-white flex flex-col items-center justify-center gap-[2vw]">
        <div className="h-[70%] w-[95%] rounded-[1vw] flex items-center justify-center surgical-card-image">
          <div className="h-[50%] w-[50%] relative">
            <Image
              src={img}
              fill
              alt="surgical card"
              className="object-contain"
            />
          </div>
        </div>
        <div className=" aeonik font-light text-[1.675vw] text-center">
          <p>{para}</p>
        </div>
      </div>
      </div>
    </>
  );
};

const SurgicalOutcomes = () => {
  return (
    <section id="surgical-outcomes">
      <div className="w-screen h-full container-lg">
        <div className="w-full h-full flex flex-col items-center justify-center py-[5vw] relative">
          <div className="w-full h-full flex flex-col items-center justify-center mobile:mb-[10vw] mobile:flex mobile:justify-center">
            <h2
              data-para-anim
              className="title-2 aeonik text-center mobile:text-center"
            >
              Elevate Your Surgical Outcomes
            </h2>
          </div>

          <div className="w-full h-full mt-[5vw] cursor-grab">
            <Swiper className="mySwiper w-full h-full" slidesPerView={3}>
              <SwiperSlide>
                <SurgicalCard
                title={"Consistent Perfusion Across Staple Lines"}
                  img={"/assets/advastapcs/surgical-card1.png"}
                  para={
                    "Promotes effective blood flow & tissue healing."
                  }
                />
              </SwiperSlide>
              <SwiperSlide>
                <SurgicalCard
                title={"Versatile Performance"}
                  img={"/assets/advastapcs/surgical-card2.png"}
                  para={"Adapts to a broad range of tissue thicknesses."}
                />
              </SwiperSlide>
              <SwiperSlide>
                <SurgicalCard
                title={"Minimal Anastomotic Leakage"}
                  img={"/assets/advastapcs/surgical-card3.png"}
                  para={"Ensures secure closures & reduces post-surgical complications."}
                />
              </SwiperSlide>
              <SwiperSlide>
                <SurgicalCard
                title={"Decreased Recurrence Rates"}
                  img={"/assets/advastapcs/surgical-card4.png"}
                  para={"Ensures long-term surgical success."}
                />
              </SwiperSlide>
            </Swiper>
          </div>

          <div className="absolute h-[100%] w-[100vw]">
            <Image
              src="/assets/poweredlc/surgical-bg.png"
              fill
              alt="surgical bg"
              className="object-cover z-[-1]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SurgicalOutcomes;
