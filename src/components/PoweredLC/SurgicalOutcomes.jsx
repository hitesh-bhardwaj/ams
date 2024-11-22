import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Image from "next/image";

const SurgicalCard = ({ img, para }) => {
  return (
    <>
      <div className="h-[25vw] w-[20vw] p-[1vw] rounded-[1.5vw] bg-white flex flex-col items-center justify-center gap-[2vw]">
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
        <div className=" aeonik font-light text-[1.31vw] text-center">
          <p>{para}</p>
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
            <Swiper className="mySwiper w-full h-full" slidesPerView={4} spaceBetween={20}>
              <SwiperSlide>
                <SurgicalCard
                  img={"/assets/poweredlc/surgical-card1.png"}
                  para={
                    "Uniform Pressure ensures consistent staple line formation."
                  }
                />
              </SwiperSlide>
              <SwiperSlide>
                <SurgicalCard
                  img={"/assets/poweredlc/surgical-card2.png"}
                  para={"Fewer leaks and enhanced staple formation."}
                />
              </SwiperSlide>
              <SwiperSlide>
                <SurgicalCard
                  img={"/assets/poweredlc/surgical-card3.png"}
                  para={"Consistent results in challenging tissues."}
                />
              </SwiperSlide>
              <SwiperSlide>
                <SurgicalCard
                  img={"/assets/poweredlc/surgical-card4.png"}
                  para={"Reduced slippage during firing."}
                />
              </SwiperSlide>
              <SwiperSlide>
                <SurgicalCard
                  img={"/assets/poweredlc/surgical-card5.png"}
                  para={"Wider tapered pockets for improved capture."}
                />
              </SwiperSlide>
              <SwiperSlide>
                <SurgicalCard
                  img={"/assets/poweredlc/surgical-card6.png"}
                  para={"B-form stapling for greater efficiency."}
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
