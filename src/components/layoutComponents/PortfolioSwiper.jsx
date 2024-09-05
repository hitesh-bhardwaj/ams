import React, { useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import 'swiper/css/pagination';
import { FreeMode, Thumbs, Navigation } from 'swiper/modules';
import Image from "next/image";
import { paraAnim } from "../gsapAnimations";

const PortfolioCard = ({ src, heading, para }) => {
  return (
    <div className="">
      <div className="w-[85vw] h-[50vw] relative rounded-[10px]">
        <Image src={src} fill alt="Hernia Slider" className="rounded-[20px]" />
        <div className="absolute top-[30%] left-[10%] flex flex-col gap-[2vw]">
          <h2  className="text-[#ffffff] text-[2.8vw] font-light text-shadow">{heading}</h2>
          <p  className="text-[#ffffff] text-[1.4vw] font-extralight w-[50%] text-shadow ">{para}</p>
        </div>
      </div>
    </div>
  );
};

const PortfolioSwiper = () => {
  // paraAnim()
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <section id="hernia-swiper">
      <div className="w-full mb-[5%] ml-[10%] py-[10%] relative h-full">
        <div className="text-[1.25vw] text-[#2A2A2A] font-light rotate-[-90deg] absolute left-[-52%] portfolio-text flex items-center gap-[2vw] w-full top-[8%]">
          <p className="text-end">A Partner in Your Success</p>
        </div>
        <div className=" relative">
          <Swiper
            slidesPerView={1}
            spaceBetween={20}
            loop={true}
            autoplay={{
              delay: 1500,
              disableOnInteraction: false,
            }}
            modules={[FreeMode, Thumbs, Navigation]}
            className="mySwiper"
            thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
          >
            <SwiperSlide>
              <PortfolioCard
                src={"/assets/hernia/portfolio-1.png"}
                heading={"Advancing Patient Recovery"}
                para={"Our ADVAMESH products are designed to enhance patient recovery and comfort. By offering exceptional support and promoting natural tissue integration, our meshes minimize bioreactivity and reduce recurrence rates, ensuring a smoother recovery process."}
                className="bgfilter"
              />
            </SwiperSlide>
            <SwiperSlide>
              <PortfolioCard
                src={"/assets/hernia/portfolio-2.png"}
                heading={"Commitment to Excellence"}
                para={"AMS is dedicated to maintaining the highest standards of quality and innovation. Our rigorous quality assurance protocols guarantee that every ADVAMESH product delivers superior performance and reliability. We continuously strive to meet the evolving needs of hernia repair through ongoing research and collaboration with leading surgeons."}
                className="bgfilter"
              />
            </SwiperSlide>
            <SwiperSlide>
              <PortfolioCard
                src={"/assets/hernia/portfolio-3.png"}
                heading={"Empowering Surgical Success"}
                para={"AMS partners with healthcare professionals to achieve surgical success. Our comprehensive range of ADVAMESH products is supported by extensive training and resources, enabling surgeons to perform hernia repairs with confidence and precision. We provide the necessary tools and support to enhance surgical practice and improve patient care."}
                 className="bgfilter"
              />
            </SwiperSlide>
          </Swiper>

          <div className="absolute top-[80%] w-full left-[-3%]">
            <Swiper
              onSwiper={setThumbsSwiper}
              spaceBetween={10}
              slidesPerView={4}
              freeMode={true}
              watchSlidesProgress={true}
              modules={[FreeMode, Navigation, Thumbs]}
              className="endoSmallSwiper"
            >
              <SwiperSlide className="flex gap-[1vw]">
                <div className="h-[7vw] w-[12vw] relative cursor-pointer">
                  <Image
                    fill
                    src="/assets/hernia/portfolio-1.png"
                    className="border-[1px] border-[#FFFFFF] rounded-[20px]"
                    alt="small swiper"
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="h-[7vw] w-[12vw] relative cursor-pointer">
                  <Image
                    fill
                    src="/assets/hernia/portfolio-2.png"
                    className="border-[1px] border-[#FFFFFF] rounded-[20px]"
                    alt="small swiper"
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="h-[7vw] w-[12vw] relative cursor-pointer">
                  <Image
                    fill
                    src="/assets/hernia/portfolio-3.png"
                    className="border-[1px] border-[#FFFFFF] rounded-[20px]"
                    alt="small swiper"
                  />
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSwiper;
