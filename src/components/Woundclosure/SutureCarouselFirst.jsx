import React from "react";
import Image from "next/image";
import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const SutureCarouselFirst = () => {
  const slidesData = [
    {
      iconSrc: "/assets/woundclosure/advacat-box.png",
      title: "Catgut - Chromic",
      cardColor: "from-yellow-500/30",
      src: "/advacat",
    },
    {
      iconSrc: "/assets/woundclosure/advacrylplus-box.png",
      title: "Antibacterial Polyglactine 910",
      cardColor: "from-purple-500/30",
      src: "/advacrylplus",
    },
    {
      iconSrc: "/assets/woundclosure/advapd-box.png",
      title: "Polydioxanone",
      cardColor: "from-gray-500/30",
      src: "/advapd",
    },
    {
      iconSrc: "/assets/woundclosure/advacryl-box.png",
      title: "Polyglactine 910",
      cardColor: "from-purple-500/30",
      src: "/advacryl",
    },
    {
      iconSrc: "/assets/woundclosure/advamryl-box.png",
      title: "Poliglecaprone 25",
      cardColor: "from-orange-500/30",
      src: "/advamryl",
    },
    {
      iconSrc: "/assets/woundclosure/advacrylrapid-box.png",
      title: "Fast Absorbing Polyglactine 910",
      cardColor: "from-red-500/30",
      src: "/advacryl-rapid",
    },
  ];

  const swiperRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeButton, setActiveButton] = useState("");

  const handleNext = () => {
    if (swiperRef.current) swiperRef.current.slideNext();
    setActiveButton("next");
  };

  const handlePrev = () => {
    if (swiperRef.current) swiperRef.current.slidePrev();
    setActiveButton("prev");
  };

  const onSlideChange = (swiper) => {
    setActiveIndex(swiper.realIndex);
  };

  return (
    <section
      className="w-screen h-[63vw] overflow-hidden py-[7%] mobile:h-[210vw] tablet:h-[120vw] mobile:pb-[15%] tablet:py-[8%] relative"
      id="suture-carousel-first"
    >
      <div className="w-full h-fit flex flex-col gap-[1.5vw] items-center text-center mobile:gap-[5vw]">
        <h2 data-para-anim className="title-2 aeonik mobile:w-[80%]">
          Absorbable Sutures
        </h2>
        <p
          data-para-anim
          className="content-p w-[50%] text-center !leading-[1.4] mobile:w-[85%] tablet:w-[70%]"
        >
          AMS Absorbable Sutures provide superior tensile strength retention and
          a predictable absorption profile to meet your surgical needs and
          tissue healing requirements
        </p>
      </div>

      <div className="swiper-container mt-[10vw] tablet:w-[100vw] mobile:mt-[15vw] fadeUp relative tablet:mt-[12vw]">
        <Swiper
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          onSlideChange={onSlideChange}
          spaceBetween={150}
          slidesPerView={5}
          pagination={{
            clickable: true,
            el: ".swiper-pagination",
          }}
          centeredSlides={true}
          roundLengths={true}
          modules={[Pagination]}
          breakpoints={{
            320: { slidesPerView: 1, spaceBetween: 0 },
            640: { slidesPerView: 1, spaceBetween: 0 },
            1280: { slidesPerView: 2.7, spaceBetween: 180 },
          }}
        >
          {slidesData.map((slide, index) => (
            <SwiperSlide key={index}>
              <Link href={slide.src}>
                <div
                  className={`w-full h-full flex flex-col justify-center items-center  ${
                    activeIndex === index ? "gap-[4vw]" : "gap-0"
                  } transition-all duration-500 ease`}
                >
                  <div
                    className={`absolute w-full h-[30vw] rounded-tl-[5vw] rounded-tr-[5vw] top-[5%] border border-white box-cards bg-gradient-to-b ${slide.cardColor} to-gray-50 mobile:w-[85vw] mobile:h-[100vw] tablet:w-[85vw] tablet:h-[60vw]`}
                  ></div>

                  <div
                    className={`w-fit h-[20vw] flex justify-center items-center mobile:h-[80vw] tablet:h-[30vw] cursor-grab z-[5] mobile:translate-y-[-10%] ${
                      activeIndex === index
                        ? "scale-[1.7] translate-y-[-10%] mobile:scale-[1] tablet:translate-y-0"
                        : "scale-[1]"
                    } transition-transform duration-500 ease`}
                  >
                    <div className="w-[28vw] h-[22.5vw] p-[3vw] mobile:w-[100vw] mobile:h-[90vw] tablet:w-[45vw] tablet:h-[35vw] tablet:p-[5vw]">
                      <Image
                        src={slide.iconSrc}
                        alt="slide icon"
                        width={550}
                        height={550}
                        className="object-contain w-full h-full"
                      />
                    </div>
                  </div>
                  <div className="slider-circle-content w-[30vw] mobile:w-[90vw] tablet:w-[50vw] z-[10]">
                    <h3
                      className={`text-[1.4vw] font-light text-center mb-[1vw] mobile:text-[6.5vw] tablet:text-[4vw] tablet:translate-y-[10vw] ${
                        activeIndex === index
                          ? "text-[2vw] translate-y-[-3vw] mobile:text-[6.5vw] tablet:translate-y-[10vw] "
                          : ""
                      } transition-all duration-300`}
                    >
                      {slide.title}
                    </h3>
                  </div>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
        {/* Pagination Dots */}
      </div>
        <div className="swiper-pagination mt-4 absolute bottom-[5%] left-[30%] tablet:!bottom-[10%]"></div>
    </section>
  );
};

export default SutureCarouselFirst;
