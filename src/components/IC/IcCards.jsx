import React, { useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// Import required modules
import { EffectCoverflow, Pagination } from "swiper/modules";
import Image from "next/image";
import Link from "next/link";
import { Media } from "../media";

export default function IcCards() {
  const [activeIndex, setActiveIndex] = useState(1); // Default active slide index

  return (
    <>
      <section className="" id="cards-carousel">
        <Media greaterThan="tablet">
          <div className="w-full h-full flex flex-col gap-[4vw] ">
            <h2
data-para-anim className="aeonik title-2 text-center capitalize">
              Cardiac Surgery Product Line
            </h2>
            <div className="mt-[2vw] fadeUp">
              <Swiper
                effect={"coverflow"}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={3.2}
                spaceBetween={10}
                initialSlide={1} // Ensure the initial slide is centered
                speed={1500}
                coverflowEffect={{
                  rotate: 60,
                  stretch: 50,
                  depth: 0,
                  slideShadows: false,
                }}
                onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)} // Track the active slide
                modules={[EffectCoverflow, Pagination]}
                className="mySwiper ic-card"
              >
                {[1, 2, 3].map((slide, index) => (
                  <SwiperSlide key={index}>
                    <Link
                      href={
                        slide === 1
                          ? "/advapro"
                          : slide === 2
                          ? "/advaglide"
                          : "/accessories"
                      }
                    >
                      <div
                        className={`relative w-[30vw] ${
                          activeIndex === index ? "h-[40vw]" : "h-[40vw]"
                        } transition-all duration-500 rounded-[2vw] overflow-hidden flex flex-col px-[3vw] py-[4vw] items-center justify-between border border-gray-200 bg-white/50`}
                      >
                        <h4
                          className={`aeonik uppercase font-light text-[3vw] text-center relative z-[7] ${
                            slide == 3 ? "!text-[2.3vw] normal-case" : ""
                          }`}
                        >
                          {slide === 1
                            ? "ADVA PRO"
                            : slide === 2
                            ? "ADVA GLIDE"
                            : "Coronary Accessories"}
                        </h4>
                        <div className="w-[30vw] h-full relative">
                          <Image
                            src={`/assets/ic/ic-card-${slide}.webp`}
                            fill
                            className={`object-contain ${
                              slide % 2 == 1 ? "scale-[1.4]" : "scale-[0.9]"
                            } ${slide == 2 ? "translate-y-[20%]" : ""}`}
                            alt={`ic-card-${slide}`}
                          />
                        </div>
                      </div>
                    </Link>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </Media>
        <Media lessThan="desktop">
          <div className=" py-[5%]">
            <div className="w-full flex flex-col gap-[8vw] tablet:gap-[5vw]">
              <h2
data-para-anim className="aeonik title-2 text-center">
                Our Featured Programs
              </h2>

              <div className="w-full  mobile:mt-[5vw] mobile:fadeUp mobile:block hidden fadeUp tablet:overflow-scroll mobile:fadeUp tablet:block tablet:px-[5%] overflow-visible tablet:mt-0 ">
                <div className=" mobile:flex mobile:flex-col mobile:w-full mobile:items-center mobile:gap-[10vw] mobile:h-fit tablet:flex tablet:flex-nowrap tablet:w-fit tablet:gap-[2vw] tablet:h-fit ">
                  <Link
                    href={"/advapro"}
                    className="w-[85vw] h-[100vw] tablet:w-[45vw] tablet:h-[50vw] relative  overflow-hidden"
                  >
                    <div
                      className={`relative w-full h-full
                    transition-all duration-500 overflow-hidden flex flex-col px-[3vw] py-[4vw] rounded-[6vw] items-center justify-between border border-gray-200 bg-white/50 tablet:rounded-[4vw]`}
                    >
                      <h4
                        className={`aeonik font-light text-[8vw] text-center relative z-[7] tablet:text-[4.5vw] `}
                      >
                        Adva Pro
                      </h4>
                      <div className="w-[85vw] h-full relative">
                        <Image
                          src={`/assets/ic/ic-card-1.webp`}
                          fill
                          className={`object-contain scale-[1.8]`}
                          alt={`ic-card-1`}
                        />
                      </div>
                    </div>
                  </Link>
                  <Link
                    href={"/advaglide"}
                    className="w-[85vw] h-[100vw] tablet:w-[45vw] tablet:h-[50vw] relative  overflow-hidden"
                  >
                    <div
                      className={`relative w-full h-full
                  transition-all duration-500 overflow-hidden flex flex-col px-[3vw] py-[4vw] rounded-[6vw] items-center justify-between border border-gray-200 bg-white/50  tablet:rounded-[4vw]`}
                    >
                      <h4
                        className={`aeonik font-light text-[8vw] text-center relative z-[7] tablet:text-[4.5vw] `}
                      >
                        Adva Glide
                      </h4>
                      <div className="w-[85vw] h-full relative">
                        <Image
                          src={`/assets/ic/ic-card-2.webp`}
                          fill
                          className={`object-contain scale-[1.1] translate-y-[20%] tablet:scale-[1] `}
                          alt={`ic-card-2`}
                        />
                      </div>
                    </div>
                  </Link>
                  <Link
                    href={"/accessories"}
                    className="w-[85vw] h-[100vw] tablet:w-[45vw] tablet:h-[50vw] relative  overflow-hidden"
                  >
                    <div
                      className={`relative w-full h-full
                  transition-all duration-500 overflow-hidden flex flex-col px-[5vw] py-[5vw] rounded-[6vw] items-center justify-between border border-gray-200 bg-white/50 tablet:rounded-[4vw]`}
                    >
                      <h4
                        className={`aeonik font-light text-[8vw] text-center relative z-[7] leading-[1.25] tablet:text-[4.5vw] `}
                      >
                        Coronary Accessories
                      </h4>
                      <div className="w-[85vw] h-full relative">
                        <Image
                          src={`/assets/ic/ic-card-3.webp`}
                          fill
                          className={`object-contain scale-[1.4] translate-y-[-10%] `}
                          alt={`ic-card-3`}
                        />
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </Media>
      </section>
    </>
  );
}
