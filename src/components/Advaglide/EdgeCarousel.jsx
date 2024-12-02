import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "swiper/css/pagination";
import {
  FreeMode,
  Thumbs,
  Navigation,
  EffectCreative,
  Autoplay,
} from "swiper/modules";
import Image from "next/image";
import styles from "@/styles/portfolioSwiper.module.css";
import { Media } from "../media";

const EdgeCarousel = () => {
  const slidesData = [
    {
      src: "/assets/advaglide/advaglide-carousel-1.png",
    },
    {
      src: "/assets/advaglide/advaglide-carousel-2.png",
    },
    {
      src: "/assets/advaglide/advaglide-carousel-3.png",
    },
  ];
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  //   const swiperRef = useRef(null); // Create a ref for Swiper

  //   // State to track which button was clicked
  //   const [activeButton, setActiveButton] = useState("");

  //   const handleNext = () => {
  //     if (swiperRef.current) {
  //       swiperRef.current.slideNext(); // Move to the next slide
  //       setActiveButton("next"); // Set next button as active
  //       // Reset after 300ms
  //     }
  //   };

  //   const handlePrev = () => {
  //     if (swiperRef.current) {
  //       swiperRef.current.slidePrev(); // Move to the previous slide
  //       setActiveButton("prev"); // Set previous button as active
  //       // Reset after 300ms
  //     }
  //   };

  return (
    <section
      id="portfolio-swiper"
      className="overflow-x-hidden py-[10%] mobile:pt-[10%]"
    >
      <div className="w-full relative h-full flex justify-center">
        <div className="relative fadeUp rounded-[2vw] ">
          <Media greaterThan="mobile">
            <div className="">
              <Swiper
                slidesPerView={1}
                spaceBetween={0}
                loop={true}
                autoplay={{
                  delay: 1500,
                  disableOnInteraction: false,
                }}
                effect={"creative"}
                speed={1500}
                creativeEffect={{
                  prev: {
                    shadow: true,
                    translate: ["-40%", 0, -1],
                  },
                  next: {
                    translate: ["100%", 0, 0],
                  },
                }}
                modules={[FreeMode, Thumbs, EffectCreative, Autoplay]}
                className={`${styles.endoSwiper} mySwiper rounded-[2vw] `}
                thumbs={{
                  swiper:
                    thumbsSwiper && !thumbsSwiper.destroyed
                      ? thumbsSwiper
                      : null,
                }}
              >
                <SwiperSlide>
                  <div className="w-[85vw] h-[45vw] relative rounded-[2vw] mobile:w-[90vw] mobile:h-[60vh] tablet:h-[70vw] bg-gray-50 overflow-hidden">
                    <div className="relative w-full h-full left-[10%]">
                      <Image
                        src={"/assets/advaglide/advaglide-carousel-1.png"}
                        fill
                        alt="advaglide-slide"
                        className=" mobile:object-cover object-contain"
                      />
                    </div>
                    <div className="absolute top-[50%] left-[8%] flex flex-col gap-[1vw]  mobile:top-[7%] mobile:left-[0%] mobile:items-center mobile:justify-center mobile:text-center tablet:top-[10%]">
                      <h2 className="text-black text-[2.2vw] aeonik font-light mobile:text-[8.4vw] tablet:text-[4vw] mobile:leading-[1.25] mobile:mb-[5vw]">
                        Superior Navigability
                      </h2>
                      <p className="text-black text-[1.4vw] font-extralight w-[50%] mobile:text-[4.2vw] mobile:w-[80%] tablet:text-[2.2vw] tablet:w-[70%] tablet:leading-[1.3]">
                        Excellent force transmission during navigation is
                        achieved by balanced pushability and trackability along
                        with low profile balloon, kink resistant shaft and
                        lubricious coating.
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="w-[85vw] h-[45vw] relative rounded-[2vw] mobile:w-[90vw] mobile:h-[60vh] tablet:h-[70vw] bg-gray-50 overflow-hidden">
                    <div className="left-[-25%] relative w-full h-full">
                      <Image
                        src={"/assets/advaglide/advaglide-carousel-2.png"}
                        fill
                        alt="advaglide-slide"
                        className=" mobile:object-cover object-contain"
                      />
                    </div>
                    <div className="absolute top-[50%] left-[55%] flex flex-col gap-[1vw]  mobile:top-[7%] mobile:left-[0%] mobile:items-center mobile:justify-center mobile:text-center tablet:top-[10%]">
                      <h2 className="text-black text-[2.2vw] aeonik font-light mobile:text-[8.4vw] tablet:text-[4vw] mobile:leading-[1.25] mobile:mb-[5vw]">
                        Unsurpass Crossability
                      </h2>
                      <p className="text-black text-[1.4vw] font-extralight w-[80%] mobile:text-[4.2vw] mobile:w-[80%] tablet:text-[2.2vw] tablet:w-[70%] tablet:leading-[1.3]">
                        Thinnest balloon wall (0.008 mm) results in excellent
                        gliding and flexibility through tortuous coronary
                        anatomies.
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="w-[85vw] h-[45vw] relative rounded-[2vw] mobile:w-[90vw] mobile:h-[60vh] tablet:h-[70vw] bg-gray-50 overflow-hidden">
                    <div className="relative w-full h-full left-[-20%]">
                      <Image
                        src={"/assets/advaglide/advaglide-carousel-3.png"}
                        fill
                        alt="advaglide-slide"
                        className=" mobile:object-cover object-contain"
                      />
                    </div>
                    <div className="absolute top-[50%] left-[45%] flex flex-col gap-[1vw]  mobile:top-[7%] mobile:left-[0%] mobile:items-center mobile:justify-center mobile:text-center tablet:top-[10%]">
                      <h2 className="text-black text-[2.2vw] aeonik font-light mobile:text-[8.4vw] tablet:text-[4vw] mobile:leading-[1.25] mobile:mb-[5vw]">
                        Novel Inner Tube
                      </h2>
                      <p className="text-black text-[1.4vw] font-extralight w-[80%] mobile:text-[4.2vw] mobile:w-[80%] tablet:text-[2.2vw] tablet:w-[70%] tablet:leading-[1.3]">
                        Patented design of inner tube at distal catheter segment
                        provides absolute freedom of guide wire movement on
                        occluded balloon at high inflation pressure (up to RBP)
                        and minimizes the risk of guide wire collapse.
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </Media>

          <Media greaterThan="mobile">
            <div className="absolute top-[90%] w-full left-[18%] endoSmallSwiperContainer tablet:left-0">
              <Swiper
                onSwiper={setThumbsSwiper}
                spaceBetween={10}
                slidesPerView={3}
                freeMode={true}
                watchSlidesProgress={true}
                modules={[FreeMode, Navigation, Thumbs]}
                className={`${styles.endoSmallSwiper} endosmallSwiper`}
              >
                {slidesData.map((slide, index) => (
                  <SwiperSlide key={index}>
                    <Image
                      src={slide.src}
                      className="rounded-[1vw] h-[8vw] cursor-pointer border border-gray-300 bg-gray-50"
                      width={290}
                      height={300}
                      alt="small swiper"
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </Media>
        </div>
      </div>
    </section>
  );
};

export default EdgeCarousel;
