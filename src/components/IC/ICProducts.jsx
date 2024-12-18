import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import Image from "next/image";
import { gsap } from "gsap";
import styles from './styles.module.css'


const ProductCard = ({ title, src, para, className, index, activeSlide }) => {
  const cardRef = useRef(null);

  // Scale the active slide using GSAP
  useEffect(() => {
    if (cardRef.current) {
      if (index === activeSlide) {
        // Scale the active slide to 1.5
        gsap.to(cardRef.current, { width:"35vw", height:"40vw",duration: 0.5, ease: "power3.out" });
      } else {
        // Reset scale of non-active slides
        gsap.to(cardRef.current, {height:"28vw", width:"19vw", duration: 0.5, ease: "ower3.out" });
      }
    }
  }, [activeSlide, index]);

  return (
    <div
      ref={cardRef}
      className={`h-[28vw] w-[19vw] border bg-white/50 border-[#DADADA] flex flex-col items-center justify-between p-[3vw] rounded-[2.5vw] icProductCard`}
    >
      <h3 className="font-light text-[1.65vw] capitalize">{title}</h3>
      <div className="w-[80%] h-[20vw] relative">
        <Image src={src} fill alt="ic-products" />
      </div>
      <div>
        <p className={`content-p ${className}`}>{para}</p>
      </div>
    </div>
  );
};

const ICProducts = () => {
  const swiperRef = useRef(null);
  const [activeSlide, setActiveSlide] = useState(0);

  const handleSlideChange = () => {
    const currentIndex = swiperRef.current.swiper.realIndex;
    setActiveSlide(currentIndex);
  };

  useEffect(() => {
    if (swiperRef.current) {
      const swiper = swiperRef.current.swiper;

      // Listen for slide changes and handle scaling
      swiper.on("slideChange", handleSlideChange);
      setActiveSlide(swiper.realIndex);
    }
  }, []);

  return (
    <section id="ic-products">
      <div className="w-screen h-[40vw] px-[3%]">
        <div className="w-full h-full">
          <Swiper
            ref={swiperRef}
            slidesPerView={'auto'}
            spaceBetween={30}
            loop={true}
            grabCursor={true}
            modules={[Autoplay]}
            className={`mySwiper w-full h-full ${styles.icProductSwiper}`}
          >
            <SwiperSlide>
              <ProductCard
                title={"ADVAGLIDE"}
                src={"/assets/ic/advaglide.png"}
                para={"AMS has advanced the science of flow restoration to provide minimally invasive products."}
                className={"hidden"}
                index={0}
                activeSlide={activeSlide}
              />
            </SwiperSlide>
            <SwiperSlide>
              <ProductCard
                title={"ADVAPRO"}
                src={"/assets/ic/advapro.png"}
                para={"AMS has advanced the science of flow restoration to provide minimally invasive products."}
                className={"hidden"}
                index={1}
                activeSlide={activeSlide}
              />
            </SwiperSlide>
            <SwiperSlide>
              <ProductCard
                title={"Coronary Accessories"}
                src={"/assets/ic/accessories.png"}
                para={"AMS has advanced the science of flow restoration to provide minimally invasive products."}
                className={"hidden"}
                index={2}
                activeSlide={activeSlide}
              />
            </SwiperSlide>
            {/* New Slides */}
            <SwiperSlide>
              <ProductCard
                title={"Cardiovascular Stents"}
                src={"/assets/ic/advaglide.png"}
                para={"Our stents are designed for optimal performance and patient outcomes."}
                className={"hidden"}
                index={3}
                activeSlide={activeSlide}
              />
            </SwiperSlide>
            <SwiperSlide>
              <ProductCard
                title={"Balloon Catheters"}
                src={"/assets/ic/advapro.png"}
                para={"We provide advanced balloon catheters for minimally invasive procedures."}
                className={"hidden"}
                index={4}
                activeSlide={activeSlide}
              />
            </SwiperSlide>
            <SwiperSlide>
              <ProductCard
                title={"IVUS Systems"}
                src={"/assets/ic/accessories.png"}
                para={"Innovative IVUS systems for better imaging and flow assessment."}
                className={"hidden"}
                index={5}
                activeSlide={activeSlide}
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default ICProducts;
