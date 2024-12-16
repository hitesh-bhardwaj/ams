import React from "react";
import Image from "next/image";
import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";


const SutureCarouselFirst = () => {
  const slidesData = [
    {
      iconSrc: "/assets/woundclosure/advacat-box.png",
      title: "Catgut - Chromic",
      cardColor:"from-yellow-500/30",
      src:"/advacat"
    },
    {
      iconSrc: "/assets/woundclosure/advacrylplus-box.png",
      title: "Antibacterial Polyglactine 910",
      cardColor:"from-purple-500/30",
       src:"/advacrylplus"
    },
    {
      iconSrc: "/assets/woundclosure/advapd-box.png",
      title: "Polydioxanone",
      cardColor:"from-gray-500/30",
       src:"/advapd"
    },
    {
      iconSrc: "/assets/woundclosure/advacryl-box.png",
      title: "Polyglactine 910",
      cardColor:"from-purple-500/30",
       src:"/advacryl"
    },
    {
      iconSrc: "/assets/woundclosure/advamryl-box.png",
      title: "Poliglecaprone 25",
      cardColor:"from-orange-500/30",
       src:"/advamryl"
    },
    {
      iconSrc: "/assets/woundclosure/advacrylrapid-box.png",
      title: "Fast Absorbing Polyglactine 910",
      cardColor:"from-red-500/30",
       src:"/advacryl-rapid"
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
    <section className="w-screen h-[55vw] overflow-hidden py-[7%] mobile:h-[240vw] tablet:h-[120vw] mobile:py-[15%] relative tablet:py-[8%] " id="suture-carousel-first">
      <div className="w-full h-fit flex flex-col gap-[1.5vw] items-center text-center">
        <h2
data-para-anim className="title-2 aeonik mobile:w-[80%]">Absorbable Sutures</h2>
        <p data-para-anim className="content-p w-[50%] text-center !leading-[1.4] mobile:w-[85%] tablet:w-[70%]">AMS Absorbable Sutures provide superior tensile strength retention and a predictable absorption profile to meet your surgical needs and tissue healing requirements</p>

      </div>

    <div className="swiper-container mt-[10vw] tablet:w-[100vw] mobile:mt-[15vw] fadeup relative tablet:mt-[12vw]">
      <Swiper
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        onSlideChange={onSlideChange}
        spaceBetween={150}
        slidesPerView={5}
        centeredSlides={true}
        roundLengths={true}
        
        breakpoints={{
          320: { slidesPerView: 1, spaceBetween: 0 },
          640: { slidesPerView: 1, spaceBetween: 0 },
          // 1024: { slidesPerView: 2, spaceBetween: 0 },
          1280: { slidesPerView: 2.7, spaceBetween: 150 },
        }}
      >
        {slidesData.map((slide, index) => (
          <SwiperSlide key={index}>
            <Link href={slide.src}>
            <div
              className={`w-full h-full flex flex-col justify-center items-center  ${
                activeIndex === index ? "gap-[4vw]" : "gap-0"
              } transition-all duration-300`}
            >
              <div className={`absolute w-full h-[30vw] rounded-tl-[5vw] rounded-tr-[5vw] top-[5%] border border-white box-cards bg-gradient-to-b ${slide.cardColor} to-gray-50 mobile:w-[85vw] mobile:h-[100vw] tablet:w-[85vw] tablet:h-[60vw]`}>
                  </div>

              <div className={`w-fit h-[20vw] flex justify-center items-center mobile:h-[80vw] tablet:h-[30vw] cursor-grab z-[5] mobile:translate-y-[-10%] ${
                activeIndex === index ? "scale-[2] translate-y-[-10%] mobile:scale-[1] tablet:translate-y-0" : "scale-[1]"
              } transition-transform duration-300`}>
                <div className="w-[25vw] h-[20vw] p-[3vw] mobile:w-[100vw] mobile:h-[90vw] tablet:w-[45vw] tablet:h-[35vw] tablet:p-[5vw]">
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
                <h3 className={`text-[1.4vw] font-light text-center mb-[1vw] mobile:text-[6.5vw] tablet:text-[4vw] tablet:translate-y-[10vw] ${
                activeIndex === index ? "text-[2vw] translate-y-[-3vw] mobile:text-[6.5vw] tablet:translate-y-[10vw] " : ""
              } transition-all duration-300`}>
                  {slide.title}
                </h3>
              </div>
            </div>
            
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>


   
    </div>
      <div className="hidden mobile:block tablet:block" >
      <div
              className={`absolute z-[5] bottom-[5%] left-[63%] translate-x-[-65%] overflow-hidden py-[5vw] px-[5vw] rounded-full next-button cursor-pointer tablet:px-[3vw] tablet:py-[3vw] tablet:left-[60%]  bg-white/50
                ${
                  activeButton === "next"
                    ? " text-white border-none"
                    : "bg-transparent text-[#111111]"
                } transition-colors duration-300`} // Added background color transition
              onClick={handleNext} // Trigger next slide
            >
              <span className={`bg-[#111111] w-[100%] h-[100%] z-[1] absolute top-0 left-0 origin-center scale-0 rounded-full  ${
                  activeButton === "next"
                    ?"scale-100 opacity-100"
                    : "scale-0 opacity-50"
                } transition-all duration-300`}></span>
              
              <div className="w-[1.6vw] h-[1.6vw] relative z-[6] mobile:w-[4.5vw] mobile:h-[4.5vw] tablet:w-[2.5vw] tablet:h-[2.5vw]">
              <Image
                src="/assets/home/arrow-right.png"
                alt="arrow-right"
                className={`object-cover group-hover:invert transition-all duration-300 ${
                    activeButton === "next"
                      ? "invert"
                      : "invert-0"
                  } `}
                fill
              />
            </div>
            </div>
            <div
              className={`absolute z-[5] bottom-[5%] left-[39%] translate-x-[-38%] bg-white/50 overflow-hidden  py-[5vw] px-[5vw]  tablet:px-[3vw] tablet:py-[3vw] tablet:left-[43%] rounded-full prev-button cursor-pointer 
                ${
                  activeButton === "prev"
                    ? " text-white border-none"
                    : "bg-transparent text-[#111111]"
                } transition-colors duration-300`} // Added background color transition
              onClick={handlePrev} // Trigger previous slide
            >
               <span className={`bg-[#111111] w-[100%] h-[100%] z-[1] absolute top-0 left-0 origin-center scale-0 rounded-full ${
                  activeButton === "prev"
                    ?"scale-100 opacity-100"
                    : "scale-0 opacity-50"
                } transition-all duration-300`}></span>
              <div className="w-[1.6vw] h-[1.6vw] relative z-[6] mobile:w-[4.5vw] mobile:h-[4.5vw] tablet:w-[2.5vw] tablet:h-[2.5vw]">
              <Image
                src="/assets/home/arrow-left.png"
                alt="arrow-left"
                className={`object-cover group-hover:invert transition-all duration-300 ${
                    activeButton === "prev"
                      ? "invert"
                      : "invert-0"
                  } `}
                fill
              />
            </div>
            </div>
      </div>
    </section>
  );
};

export default SutureCarouselFirst;
