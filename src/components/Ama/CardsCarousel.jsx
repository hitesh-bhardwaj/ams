import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";
import { Media } from "../media";

export default function CardsCarousel() {
  const [activeIndex, setActiveIndex] = useState(0); // Track active slide index

  const cards = [
    { src: "/assets/ama/ama-card-1.webp", alt: "ama-card-1" },
    { src: "/assets/ama/ama-card-2.webp", alt: "ama-card-2" },
    { src: "/assets/ama/ama-card-3.webp", alt: "ama-card-3" },
    { src: "/assets/ama/ama-card-4.webp", alt: "ama-card-4" },
    { src: "/assets/ama/ama-card-5.webp", alt: "ama-card-5" },
  ];

  return (
    <>
      <section className="pb-[10%]" id="cards-carousel">
        <Media greaterThan="tablet">

        <div className="w-full h-full flex flex-col gap-[4vw] ">
          <h2
data-para-anim className="aeonik title-2 text-center">
            Our Featured Programs
          </h2>
          <div className="mt-[2vw] fadeUp px-[5vw]">
            <Swiper
              effect={"coverflow"}
              grabCursor={true}
              centeredSlides={true}
              slidesPerView={3.3}
              initialSlide={0}
              // loop={true}
              spaceBetween={20}
              speed={1500}
              coverflowEffect={{
                rotate: 20,
                stretch: 10,
                slideShadows: false,
              }}
              onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)} // Set active index on slide change
              modules={[EffectCoverflow, Pagination, Autoplay]}
              className="mySwiper ama-card"
            >
              {cards.map((card, index) => (
                <SwiperSlide key={index}>
                  <div className="w-full h-full flex flex-col gap-[4vw]">
                    <div className="relative w-[23vw] h-[32vw] rounded-[2vw] overflow-hidden">
                      <Image
                        src={card.src}
                        fill
                        className="object-cover"
                        alt={card.alt}
                      />
                    </div>
                    {/* Card Title */}
                    <p
                      data-para-anim
                      className={`text-[1.5vw] font-light text-center card-title ml-[-3vw] ${
                        activeIndex === index
                          ? "opacity-100 translate-y-0"
                          : "opacity-0 translate-y-5"
                      } transition-all duration-500 ease-in-out`}
                    >
                      Nurturing Nursing Skills
                    </p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
        </Media>
        <Media lessThan="desktop">

        <div className="py-[10%] tablet:py-[5%]">
          <div className="w-full flex flex-col gap-[8vw] tablet:gap-[8vw]">
            <div className="w-full flex justify-center">
              <h2 className="title-2 aeonik text-center px-[2vw] tablet:w-[80%] mobile:w-[95%]">
                <span data-para-anim>Our Featured Programs</span>
              </h2>
            </div>
            <div className="w-full mobile:overflow-scroll mobile:mt-[5vw] mobile:fadeup mobile:block hidden mobile:pr-[5%] fadeUp tablet:overflow-scroll mobile:fadeup tablet:block tablet:pr-[5%] overflow-visible tablet:mt-0">
              <div className="mobile:flex mobile:flex-nowrap mobile:w-fit mobile:gap-[5vw] mobile:ml-[5vw] mobile:h-fit tablet:flex tablet:flex-nowrap tablet:w-fit tablet:gap-[3vw] tablet:h-fit tablet:ml-[5vw]">
                {cards.map((card, index) => (
                  
                   <div className="w-full h-full flex flex-col gap-[3vw] mobile:gap-[5vw]" key={index}>
                  <div
                    
                    className="w-[85vw] h-[100vw] tablet:w-[40vw] tablet:h-[50vw] relative rounded-[6vw] tablet:rounded-[3vw] overflow-hidden"
                  >
                    <Image
                      src={card.src}
                      fill
                      className="object-cover"
                      alt={card.alt}
                    />
                  </div>
                  <div className="w-full product-base-text flex justify-center">
              <p
                data-para-anim
                className="aeonik font-light tracking-widest text-[5vw] text-center tablet:text-[2.5vw]"
              >
                Nurturing Nursing Skills
              </p>
            </div>

                   </div>
                ))}
              </div>
            </div>
            
          </div>
        </div>
        </Media>
      </section>
    </>
  );
}
