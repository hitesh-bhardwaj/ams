import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Image from "next/image";
import styles from "./styles.module.css";

const productContent = [
  {
    title: "ADVAGLIDE",
    src: "/assets/ic/advaglide.png",
    para: "AMS has advanced the science of flow restoration to provide minimally invasive products.",
  },
  {
    title: "ADVAPRO",
    src: "/assets/ic/advapro.png",
    para: "AMS has advanced the science of flow restoration to provide minimally invasive products.",
  },
  {
    title: "Coronary Accessories",
    src: "/assets/ic/accessories.png",
    para: "AMS has advanced the science of flow restoration to provide minimally invasive products.",
  },
  {
    title: "Cardiovascular Stents",
    src: "/assets/ic/advaglide.png",
    para: "Our stents are designed for optimal performance and patient outcomes.",
  },
];

const ProductCard = ({ title, src, para, index, activeSlide }) => {
  const isActive = index === activeSlide;

  return (
    <div
      className={`h-full w-full border bg-white/50 border-[#DADADA] flex flex-col justify-between p-[3vw] rounded-[2.5vw] icProductCard transition-all duration-500 ${
        isActive ? "bg-transparent border-none items-start" : "items-center"
      }`}
    >
      <h3
        className={`font-light capitalize text-[#111111] aeonik transition-all duration-500 ${
          isActive ? "text-[2.92vw]" : "text-[1.9vw]"
        }`}
      >
        {title}
      </h3>
      <div
        className={`relative transition-all duration-500 mt-[2vw] ${
          isActive ? "w-[90%] h-[30vw]" : "w-[80%] h-[20vw]"
        }`}
      >
        <Image src={src} fill alt="ic-products" />
      </div>
      <div>
        <p
          className={`text-[1.15vw] leading-[1.5] transition-opacity tracking-wider  duration-500  aeonik w-[90%] px-[1vw] ${
            isActive ? "visible" : "hidden"
          }`}
        >
          {para}
        </p>
      </div>
    </div>
  );
};

const ICProducts = () => {
  const swiperRef = useRef(null);
  const [activeSlide, setActiveSlide] = useState(0);

  const handleNext = () => {
    if (swiperRef.current) {
      swiperRef.current.slideNext();
    }
  };

  const handlePrev = () => {
    if (swiperRef.current) {
      swiperRef.current.slidePrev();
    }
  };

  const handleSlideChange = (swiper) => {
    setActiveSlide(swiper.realIndex);
  };

  return (
    <section id="ic-products">
      <div className="w-screen h-[45vw] px-[3%] relative">
        <div className="w-full h-full">
          <Swiper
            ref={swiperRef}
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            loop={true}
            slidesPerView={"auto"}
            spaceBetween={20}
            className={`mySwiper w-full h-full ${styles.icProductSwiper}`}
            onSlideChange={handleSlideChange}
          >
            {productContent.map((product, index) => (
              <SwiperSlide key={index}>
                <ProductCard
                  title={product.title}
                  src={product.src}
                  para={product.para}
                  index={index}
                  activeSlide={activeSlide}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="absolute left-[62%] bottom-[10%] flex items-center justify-center gap-[1vw]">
          <span className="bg-[#1A1A1A] h-[1px] w-[31vw]"></span>
          <p className="text-[2.9vw] aeonik font-light">
            {String(activeSlide + 1).padStart(2, "0")}
          </p>
        </div>

        <div
          className={`px-[1.2vw] py-[1.2vw] absolute z-[5] bottom-[10%] right-[38%] mobile:bottom-[3%] mobile:top-auto mobile:right-auto mobile:left-[62%] translate-x-[-65%] tablet:top-[70%] tablet:translate-y-[-70%] overflow-hidden mobile:p-[5vw] tablet:p-[2vw] rounded-full next-button cursor-pointer mobile:block group hover:text-white bg-white/50`}
          onClick={handleNext}
        >
          <span
            className={`bg-[#222222] w-[100%] h-[100%] z-[1] absolute top-0 left-0 origin-center scale-0 rounded-full group-hover:scale-100 duration-300`}
          />
          <div className="w-[1.2vw] h-[1.2vw] relative z-[6] mobile:w-[4.5vw] mobile:h-[4.5vw] tablet:w-[2.5vw] tablet:h-[2.5vw]">
            <Image
              src="/assets/home/arrow-right.png"
              alt="arrow-right"
              className={`object-cover group-hover:invert duration-300`}
              fill
            />
          </div>
        </div>
        <div
          className={`px-[1.2vw] py-[1.2vw] bottom-[10%] right-[45%] absolute z-[5] mobile:bottom-[3%] mobile:top-auto mobile:left-[37%] translate-x-[-38%] tablet:top-[70%] tablet:translate-y-[-70%] bg-white/50 overflow-hidden mobile:p-[5vw] tablet:p-[2vw] rounded-full prev-button cursor-pointer mobile:block group hover:text-white`}
          onClick={handlePrev}
        >
          <span
            className={`bg-[#222222] w-[100%] h-[100%] z-[1] absolute top-0 left-0 origin-center scale-0 rounded-full group-hover:scale-100 duration-300`}
          />
          <div className="w-[1.2vw] h-[1.2vw] relative z-[6] mobile:w-[4.5vw] mobile:h-[4.5vw] tablet:w-[2.5vw] tablet:h-[2.5vw] rotate-180">
            <Image
              src="/assets/home/arrow-left.png"
              alt="arrow-left"
              className={`object-cover group-hover:invert duration-300 rotate-180`}
              fill
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ICProducts;
