import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/scrollbar";
import { Scrollbar } from "swiper/modules";
import Image from "next/image";
import "swiper/css/navigation";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);
const LC3Carousel = () => {
  useGSAP(() => {
    if (globalThis.innerWidth > 1024) {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".lc3-swiper-container",
        },
      });
      tl.fromTo(
        ".lc3Swiper .swiper-slide",
        {
          xPercent: 70,
          opacity: 0.5,
        },
        {
          xPercent: 0,
          duration: 2,
          delay: 0.3,
          opacity: 1,
          ease: "power3.out",
        }
      );
    }
  });

  const swiperRef = useRef(null);
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
  return (
    <>
      <section
        id="lc3-carousel"
        className="overflow-hidden py-[5%]  tablet:h-[80vh] mobile:py-[15%] "
      >
        <div
          className={`w-screen h-full text-[#2A2A2A] items-center flex justify-center lc3-swiper-container cursor-grab relative `}
        >
          <Swiper
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            scrollbar={true}
            modules={[Scrollbar]}
            breakpoints={{
              541: {
                slidesPerView: 1,
                spaceBetween: 30,
              },
              640: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
              1024: {
                slidesPerView: 2,
                spaceBetween: 50,
                centeredSlides: true,
                initialSlide: 1,
              },
            }}
            className={`w-screen flex items-center justify-center lc3Swiper specificationSwiper   tablet:h-[60vh] mobile:h-[90vh]`}
          >
            <SwiperSlide>
              <div className="py-[2vw] flex justify-center">
                <div className="w-full h-full flex flex-col justify-center gap-[2vw]  mobile:w-[85vw] mobile:h-[80vh] mobile:justify-center mobile:gap-[8vw] tablet:h-[50vh]">
                  <p className="text-[2.5vw] font-light ml-[1.5vw] mobile:text-[8vw] mobile:h-[20vw] mobile:text-center tablet:text-[3vw] tablet:h-[8vw]">
                    <span data-para-anim>Advanced X-Shaped Technology</span>
                  </p>
                  <div className=" rounded-[3vw]  h-[31vw] w-[48vw] pb-[2vw] flex flex-col gap-[4vw] overflow-hidden relative mobile:h-[70vh] mobile:w-[85vw] tablet:h-[50vh] mobile:rounded-[9vw] tablet:rounded-[5vw]">
                    <div className="w-[80vw] h-[15vw]  relative top-[20%] left-[-40%] scale-[1.2] mobile:h-[100vw]  mobile:w-[100vw] mobile:left-[-7%] mobile:top-[2%] mobile:scale-[0.6] tablet:scale-[1] tablet:h-[40vw] tablet:top-[5%] tablet:left-[-30%]">
                      <Image
                        src="/assets/advastaplc/lc3-carousel-card-1.png"
                        fill
                        alt="specification 1"
                        className="object-contain "
                      />
                    </div>
                    <p className="text-center text-[1.25vw] absolute bottom-[15%] right-[10%] aeonik font-light   text-[#2A2A2A] mobile:text-[7vw]  mobile:font-light mobile:w-[80%] mobile:bottom-[5%] mobile:left-[10%] mobile:z-50 tablet:text-[2.5vw] tablet:bottom-[5%] tablet:font-light tablet:w-[80%]">
                      <span data-para-anim>
                        Uniform compression ensures consistent perfusion across
                        staple line.
                      </span>
                    </p>
                    <div className="absolute h-[100%] w-[100%] z-[-1]">
                      <Image
                        src="/assets/advastaplc/lc3-carousel-card-bg.png"
                        fill
                        alt="carousel-card-1-bg"
                        className="object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="py-[2vw] flex justify-center">
                <div className="w-full h-full flex flex-col justify-center gap-[2vw]  mobile:w-[85vw] mobile:h-[80vh] mobile:justify-center mobile:gap-[8vw] tablet:h-[50vh]">
                  <p className="text-[2.5vw] font-light ml-[1.5vw] mobile:text-[8vw] mobile:h-[20vw]  mobile:text-center tablet:text-[3vw] tablet:h-[8vw]">
                    <span data-para-anim>Fresh Blade Each Time</span>
                  </p>
                  <div className=" rounded-[3vw]  h-[31vw] w-[48vw] pb-[2vw] flex flex-col gap-[4vw] overflow-hidden relative mobile:h-[70vh] mobile:w-[85vw] tablet:h-[50vh] mobile:rounded-[9vw] tablet:rounded-[5vw]">
                    <div className="w-[45vw] h-[20vw]  relative top-[25%] left-[3%] scale-[1.6] mobile:h-[100vw] mobile:w-[100vw] mobile:left-[20%] mobile:top-[-15%] mobile:scale-[1.5] tablet:scale-[1.5] tablet:h-[40vw] tablet:left-[15%] tablet:top-[-5%]">
                      <Image
                        src="/assets/advastaplc/lc3-carousel-card-2.png"
                        fill
                        alt="specification 1"
                        className="object-contain "
                      />
                    </div>
                    <p className="text-center text-[1.25vw] absolute top-[15%] right-[10%] aeonik font-light  text-[#2A2A2A] mobile:text-[7vw] mobile:font-light mobile:w-[70%] mobile:top-[80%] mobile:left-[15%] mobile:z-50 tablet:text-[2.5vw] tablet:top-[80%] tablet:left-[10%] tablet:font-light">
                      <span data-para-anim>
                        Clean cuts, less contamination.
                      </span>
                    </p>
                    <div className="absolute h-[100%] w-[100%] z-[-1]">
                      <Image
                        src="/assets/advastaplc/lc3-carousel-card-bg.png"
                        fill
                        alt="carousel-card-1-bg"
                        className="object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="py-[2vw] flex justify-center">
                <div className="w-full h-full flex flex-col justify-center gap-[2vw]  mobile:w-[85vw] mobile:h-[80vh] mobile:justify-center mobile:gap-[8vw] tablet:h-[50vh]">
                  <p className="text-[2.5vw] font-light ml-[1.5vw] mobile:text-[8vw] mobile:h-[20vw]  mobile:text-center tablet:text-[3vw] tablet:h-[8vw]">
                    <span data-para-anim>Adjustable staple height.</span>
                  </p>
                  <div className=" rounded-[3vw]  h-[31vw] w-[48vw] pb-[2vw] flex flex-col gap-[4vw] overflow-hidden relative mobile:h-[70vh] mobile:w-[85vw] tablet:h-[50vh] mobile:rounded-[9vw] tablet:rounded-[5vw]">
                    <div className="w-[45vw] h-[20vw]  relative top-[5%] left-[-10%] scale-[1.2] mobile:h-[100vw]  mobile:w-[100vw] mobile:left-0 mobile:top-0 mobile:scale-[1] tablet:scale-[1.2] tablet:h-[40vw] tablet:left-[18%]">
                      <Image
                        src="/assets/advastaplc/lc3-carousel-card-3.png"
                        fill
                        alt="specification 1"
                        className="object-contain "
                      />
                    </div>
                    <p className="text-center text-[1.25vw] absolute bottom-[20%] right-[5%] aeonik font-light text-[#2A2A2A] mobile:text-[7vw] mobile:font-light mobile:w-[70%] mobile:top-[80%] mobile:left-[15%]  tablet:left-[5%] mobile:z-50 tablet:text-[2.5vw] tablet:top-[80%] tablet:font-light">
                      <span data-para-anim>
                        Enhanced staple count visibility
                      </span>
                    </p>
                    <div className="absolute h-[100%] w-[100%] z-[-1]">
                      <Image
                        src="/assets/advastaplc/lc3-carousel-card-bg.png"
                        fill
                        alt="carousel-card-1-bg"
                        className="object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="py-[2vw] flex justify-center">
                <div className="w-full h-full flex flex-col justify-center gap-[2vw]  mobile:w-[85vw] mobile:h-[80vh] mobile:justify-center mobile:gap-[8vw] tablet:h-[50vh]">
                  <p className="text-[2.5vw] font-light ml-[1.5vw] mobile:text-[8vw] mobile:h-[20vw]  mobile:text-center tablet:text-[3vw] tablet:h-[8vw]">
                    <span data-para-anim>Tissue Space Control Mechanism</span>
                  </p>
                  <div className=" rounded-[3vw]  h-[31vw] w-[48vw] pb-[2vw] flex flex-col gap-[4vw] overflow-hidden relative mobile:h-[70vh] mobile:w-[85vw] tablet:h-[50vh] mobile:rounded-[9vw] tablet:rounded-[5vw]">
                    <div className="w-[45vw] h-[20vw]  relative top-[-5%]  right-[-15%]  mobile:h-[100vw]  mobile:w-[100vw] mobile:left-[10%] mobile:top-[-15%] mobile:scale-[1.2] tablet:scale-[1.2] tablet:h-[40vw] tablet:left-[15%] tablet:top-[5%]">
                      <Image
                        src="/assets/advastaplc/lc3-carousel-card-4.png"
                        fill
                        alt="specification 1"
                        className="object-contain "
                      />
                    </div>
                    <p className="text-center text-[1.25vw] absolute bottom-[15%] left-[10%] aeonik font-light  text-[#2A2A2A] mobile:text-[7vw] mobile:font-light mobile:w-[90%] mobile:bottom-[5%] mobile:left-[5%] mobile:z-50 tablet:text-[2.5vw] tablet:bottom-[10%] tablet:font-light tablet:w-[85%]">
                      <span data-para-anim>
                        Even pressure distribution from proximal to distal ends.
                      </span>
                    </p>
                    <div className="absolute h-[100%] w-[100%] z-[-1]">
                      <Image
                        src="/assets/advastaplc/lc3-carousel-card-bg.png"
                        fill
                        alt="carousel-card-1-bg"
                        className="object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="py-[2vw] flex justify-center">
                <div className="w-full h-full flex flex-col justify-center gap-[2vw]  mobile:w-[85vw] mobile:h-[80vh] mobile:justify-center mobile:gap-[8vw] tablet:h-[50vh]">
                  <p className="text-[2.5vw] font-light ml-[1.5vw] mobile:text-[8vw] mobile:h-[20vw]  mobile:text-center tablet:text-[3vw] tablet:h-[8vw]">
                    <span data-para-anim>Safety Lock</span>
                  </p>
                  <div className=" rounded-[3vw]  h-[31vw] w-[48vw] pb-[2vw] flex flex-col gap-[4vw] overflow-hidden relative mobile:h-[70vh] mobile:w-[85vw] tablet:h-[50vh] mobile:rounded-[9vw] tablet:rounded-[5vw]">
                    <div className="w-[45vw] h-[20vw]  relative top-[12%] right-[-5%]  mobile:h-[100vw] mobile:rotate-90 mobile:w-[100vw] mobile:left-[-5%] mobile:top-[1%] mobile:scale-[1.2] tablet:scale-[1.2] tablet:h-[40vw] tablet:top-[-5%]">
                      <Image
                        src="/assets/advastaplc/lc3-carousel-card-5.png"
                        fill
                        alt="specification 1"
                        className="object-contain "
                      />
                    </div>
                    <p className="text-center text-[1.25vw] absolute bottom-[15%] left-[10%] aeonik font-light  text-[#2A2A2A] mobile:text-[7vw]  mobile:font-light mobile:w-[80%] mobile:bottom-[5%] mobile:left-[12%] mobile:z-50 tablet:text-[2.5vw] tablet:bottom-[10%] tablet:font-light tablet:w-[85%]">
                      <span data-para-anim>
                        Avoids accidental misfiring before clamping.
                      </span>
                    </p>
                    <div className="absolute h-[100%] w-[100%] z-[-1]">
                      <Image
                        src="/assets/advastaplc/lc3-carousel-card-bg.png"
                        fill
                        alt="carousel-card-1-bg"
                        className="object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
          <div
            className={`px-[1.2vw] py-[1.2vw] absolute z-[5] bottom-[-3%] right-0 mobile:bottom-[-3%] mobile:top-auto mobile:right-auto mobile:left-[62%] translate-x-[-65%] tablet:top-[70%] tablet:translate-y-[-70%] overflow-hidden mobile:p-[5vw] tablet:p-[2vw] rounded-full next-button cursor-pointer  mobile:block group hover:text-white bg-white/50 border border-[#222222]`}
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
            className={`px-[1.2vw] py-[1.2vw] bottom-[-3%] right-[6%] absolute z-[5] mobile:bottom-[-3%] mobile:top-auto mobile:left-[37%] mobile:right-auto translate-x-[-38%]  tablet:top-[70%] tablet:translate-y-[-70%] bg-white/50 overflow-hidden  mobile:p-[5vw] tablet:p-[2vw] rounded-full prev-button cursor-pointer  mobile:block group hover:text-white border border-[#222222]`}
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
    </>
  );
};

export default LC3Carousel;
