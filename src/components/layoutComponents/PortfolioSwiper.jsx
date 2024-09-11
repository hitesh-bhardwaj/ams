import React, { useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import 'swiper/css/pagination';
import { FreeMode, Thumbs, Navigation, EffectCreative, Autoplay } from 'swiper/modules';
import Image from "next/image";

const PortfolioCard = ({ src, heading, para }) => {
  return (
    <div className="">
      <div className="w-[85vw] h-[50vw] relative rounded-[10px]">
        <Image src={src} fill alt="Hernia Slider" className="rounded-[20px]" />
        <div className="absolute top-[30%] left-[10%] flex flex-col gap-[2vw]">
          <h2 className="text-[#ffffff] text-[2.8vw] font-light text-shadow">{heading}</h2>
          <p className="text-[#ffffff] text-[1.4vw] font-extralight w-[50%] text-shadow">{para}</p>
        </div>
      </div>
    </div>
  );
};

const PortfolioSwiper = ({slidesData }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <section id="hernia-swiper" className="overflow-x-hidden">
      <div className="w-full mb-[5%] ml-[10%] py-[10%] relative h-full">
        <div className="text-[1.25vw] text-[#2A2A2A] font-light rotate-[-90deg] absolute left-[-52%] portfolio-text flex items-center gap-[2vw] w-full top-[8%]">
          <p className="text-end">{slidesData[0].title}</p>
        </div>
        <div className="relative fadeUp rounded-bl-[10px] rounded-tl-[10px] overflow-hidden">
          <Swiper
            slidesPerView={1}
            spaceBetween={0}
            loop={true}
            autoplay={{
              delay: 1500,
              disableOnInteraction: false,
            }}
            effect={'creative'}
            speed={1500}
            creativeEffect={{
              prev: {
                shadow: true,
                translate: ['-40%', 0, -1],
              },
              next: {
                translate: ['100%', 0, 0],
              },
            }}
            modules={[FreeMode, Thumbs, Navigation, EffectCreative, Autoplay]}
            className="mySwiper rounded-bl-[20px] rounded-tl-[20px] overflow-hidden"
            thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
          >
            {slidesData.map((slide, index) => (
              <SwiperSlide key={index}>
                <PortfolioCard src={slide.src} heading={slide.heading} para={slide.para} />
              </SwiperSlide>
            ))}
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
             {slidesData.map((slide, index) => (
              <SwiperSlide key={index}>
                <Image src={slide.src} className="rounded-[20px] cursor-pointer"
                width={500}
                height={500}
                    alt="small swiper"  />
              </SwiperSlide>
            ))} 
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSwiper;
