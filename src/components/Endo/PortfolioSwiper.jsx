import React, { useState, useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import 'swiper/css/pagination';
import { FreeMode, Thumbs, Navigation, Autoplay } from 'swiper/modules';
import Image from "next/image";
import { paraAnim } from "../gsapAnimations";
import { gsap } from "gsap";

const PortfolioCard = ({ src, heading, para }) => {
  return (
    <div className="">
      <div className="w-[85vw] h-[50vw] relative rounded-[10px]">
        <Image src={src}
          fill
          alt="Endo Slider"
          className=""
        />
        <div className="absolute top-[30%] left-[10%] flex flex-col gap-[2vw]">
          <h2 className="text-[#FFFFFF] text-[2.5vw] font-extralight text-shadow">{heading}</h2>
          <p className="text-[#FFFFFF] text-[1.25vw] font-light w-[50%] text-shadow">{para}</p>
        </div>
      </div>
    </div>
  );
};

const PortfolioSwiper = () => {
  paraAnim();
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const thumbnailsRefs = useRef([]);

  // Function to handle slide change and trigger GSAP animations
  const handleSlideChange = (swiper) => {
    setActiveIndex(swiper.activeIndex);
  };

  const handleAutoplay = (swiper) => {
    const progress = swiper.autoplay.running ? swiper.autoplay.progress : 0;

    // Animate overlay on active thumbnail based on autoplay progress
    const activeThumb = thumbnailsRefs.current[swiper.activeIndex % thumbnailsRefs.current.length];
    if (activeThumb) {
      gsap.to(activeThumb, {
        opacity: 1 - progress,
        duration: 0.1,
        ease: 'linear',
      });
    }

    // Apply overlay to non-active thumbnails
    thumbnailsRefs.current.forEach((thumb, index) => {
      if (index !== swiper.activeIndex % thumbnailsRefs.current.length) {
        gsap.to(thumb, {
          opacity: 1,
          duration: 0.1,
          ease: 'linear',
        });
      }
    });
  };

  useEffect(() => {
    if (thumbsSwiper) {
      thumbsSwiper.on('autoplay', handleAutoplay);

      // Clean up event listener when component unmounts or thumbsSwiper changes
      return () => {
        if (thumbsSwiper) {
          thumbsSwiper.off('autoplay', handleAutoplay);
        }
      };
    }
  }, [thumbsSwiper]);

  return (
    <section id="endo-swiper">
      <div className="w-full mb-[5%] ml-[10%] relative py-[10%]">
        <div className="text-[1.25vw] text-[#2A2A2A] font-light rotate-[-90deg] left-[-52%] portfolio-text flex items-center gap-[2vw] absolute w-full top-[8%]">
          Your Partner in Surgical Excellence
        </div>
        <div className="relative fadeUp rounded-bl-[10px] rounded-tl-[10px] overflow-hidden">
          <Swiper
            slidesPerView={1}
            spaceBetween={0}
            thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
            loop={true}
            modules={[FreeMode, Thumbs, Navigation, Autoplay]}
            className="mySwiper rounded-bl-[20px] rounded-tl-[20px] overflow-hidden"
            onSlideChange={handleSlideChange}
            autoplay={{ delay: 3000, disableOnInteraction: false }} // Enable autoplay
          >
            <SwiperSlide>
              <PortfolioCard
                src={"/assets/endo/endo-slider-1.png"}
                heading={"Advancing Patient Recovery"}
                para={"Our ADVAMESH products are designed to enhance patient recovery and comfort. By offering exceptional support and promoting natural tissue integration, our meshes minimize bioreactivity and reduce recurrence rates, ensuring a smoother recovery process."} />
            </SwiperSlide>
            <SwiperSlide>
              <PortfolioCard
                src={"/assets/endo/endo-slider-2.png"}
                heading={"Commitment to Excellence"}
                para={"AMS is dedicated to maintaining the highest standards of quality and innovation. Our rigorous quality assurance protocols guarantee that every ADVAMESH product delivers superior performance and reliability. We continuously strive to meet the evolving needs of hernia repair through ongoing research and collaboration with leading surgeons."} />
            </SwiperSlide>
            <SwiperSlide>
              <PortfolioCard
                src={"/assets/endo/endo-slider-3.png"}
                heading={"Empowering Surgical Success"}
                para={"AMS partners with healthcare professionals to achieve surgical success. Our comprehensive range of ADVAMESH products is supported by extensive training and resources, enabling surgeons to perform hernia repairs with confidence and precision. We provide the necessary tools and support to enhance surgical practice and improve patient care."} />
            </SwiperSlide>
          </Swiper>
          <div className="flex gap-[0.7vw] absolute top-[80%] w-full left-[-3%]">
            <Swiper
              onSwiper={setThumbsSwiper}
              slidesPerView={4}
              freeMode={true}
              watchSlidesProgress={true}
              modules={[FreeMode, Navigation, Thumbs]}
              className="endoSmallSwiper"
            >
              {['/assets/endo/endo-slider-1.png', '/assets/endo/endo-slider-2.png', '/assets/endo/endo-slider-3.png'].map((src, index) => (
                <SwiperSlide key={index}>
                  <div
                    className="h-[7vw] w-[12vw] relative cursor-pointer overflow-hidden rounded-[20px]"
                     // Store the ref for each thumbnail
                  >
                    <div className="w-full h-full bg-black opacity-50 absolute top-0 left-0 z-[2] overlay" ref={el => thumbnailsRefs.current[index] = el}></div>
                    <Image
                      fill
                      src={src}
                      className={`border-[1px]  opacity-100`}
                      alt={`thumbnail ${index}`}
                    />
                  </div>
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
