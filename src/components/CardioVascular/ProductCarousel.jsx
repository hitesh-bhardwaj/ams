import Image from "next/image";
import React, { useState, useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import gsap from "gsap";

const ProductCarousel = () => {
  const slidesData = [
    {
      title: "ADVABOND",
      para: "Braided Coated Polyester Green & White",
      imageSrc: "/assets/cardioVascular/advabond.png",
      description1: "The enduring and comprehensive solution for valve replacement and valve repair procedures providing excellent tensile strength for permanent support.",
      description2:"Silicone coating designed for excellent handling enabling superior pliability and knotting characteristics.",
      description3 : "ADVAPLEDGET assures consistent performance providing smooth uniform construction for precise suture placement.",
    }   ,
    {
      title: "ADVALENE",
      para: "Monofilament Polypropylene Blue",
      imageSrc: "/assets/cardioVascular/advalene.png",
      description1: "-The only Polypropylene with an advanced and unique dispensing system designed to deliver ease of suture dispensing with minimal memory in the suture strand.",
      description2: "Most inert monofilament structure makes ADVALENE Cardiovascular suture an ideal choice for anastomosis.",
      description3 : "ADVAPRIME needles are specially designed with an engineered tip to maintain shape and sharpness pass after pass for the most challenging calcified lesions & fibrotic blood vessels.",
    },
    {
      title: "ADVASTEEL",
      para: "Monofilament stainless Steel 316 LVM",
      imageSrc: "/assets/cardioVascular/advasteel.png",
      description1: "Excellent compatibility with body tissues for minimal tissue reactivity.",
      description2:"Advanced design with superior pliability conforming closely to contour of sternum.",
      description3 : "High resistance to breakage during bend tightening by twisting with excellent knot security.",
    } ,
    {
      title: "ADVAWAX",
      para: "Braided Coated Polyester Green & White",
      imageSrc: "/assets/cardioVascular/advawax.png",
      description1: "ADVAWAX acts as a mechanical (tamponade) barrier helping in achieving local hemostasis of bone.",
      description2:"ADVAWAX minimizes formation of any foreign body or inflammatory reaction and delays bone regeneration.",
      description3 : "ADVAWAX provides ease of application due to smooth consistency.",
    }  ,
    {
      title: "ADVAPACER",
      para: "Multifilament 316L Stainless Steel",
      imageSrc: "/assets/cardioVascular/advapacer.png",
      description1: "Twisted 316L stainless steel wire, with blue Low Densile Polyethylene coating (sheathed), double needle in suture size 2-0, having a length of 60 cm.",
      description2:" Lead conductor resistant (14.50Ω/M)",
      description3 : "",
    } ,
    {
      title: "ADVANOVA",
      para: "Monofilament Polyamide Blue (Treated)",
      imageSrc: "/assets/cardioVascular/advanova.png",
      description1: "Engineered to cater the specialized demands of intricate cardiac procedures.",
      description2:" Ensures structural integrity within calcified tissues.",
      description3 : "ADVAPASS & ADVAPOINT needles",
    },
         
  ];

  const [activeSlide, setActiveSlide] = useState(0);
  const swiperRef = useRef(null);

  const [activeButton, setActiveButton] = useState("");

  const handleNext = () => {
    if (swiperRef.current) {
      swiperRef.current.slideNext();
      setActiveButton("next");
    }
  };

  const handlePrev = () => {
    if (swiperRef.current) {
      swiperRef.current.slidePrev();
      setActiveButton("prev");
    }
  };
  const handleSlideChange = (swiper) => {
    const currentIndex = swiper.activeIndex;
    setActiveSlide(currentIndex);
    if(globalThis.innerWidth>1023){
    gsap.to(".content-fade", {
      opacity: 0,
      y: 20,
      duration: 0.5,
      onComplete: () => {
        gsap.to(".content-fade", {
          opacity: 1,
          y: 0,
          duration: 0.5,
        });
      },
    });
    gsap.to(swiper.slides, {
      scale: 1.3,
      x: 20,
      width: "50vw",
      duration: 1,
      ease: "power3.out",
    });
    gsap.to(swiper.slides[swiper.activeIndex - 1], {
      scale: 0.8,
      x: -20,
      width: "40vw",
      duration: 1,
      ease: "power3.out",
    });
    gsap.to(swiper.slides[swiper.activeIndex + 1], {
      scale: 0.8,
      x: -20,
      width: "40vw",
      duration: 1,
      ease: "power3.out",
    });
  };
}


  return (
    <section id="productCarousel" className="relative w-screen h-screen overflow-hidden mobile:h-[130vh] mobile:py-[10vw] bg-white/30 py-[5vw] mt-[7%] mobile:mb-[15%] tablet:h-[70vh] ">
      <div className="w-full h-full flex items-center justify-between pl-[5vw] mobile:flex-col-reverse tablet:flex-col-reverse">
        <div className="w-[50%] mobile:w-full mobile:h-[50vh] tablet:w-full tablet:h-[50vh]">
          <div className="mobile:flex mobile:flex-col mobile:items-center mobile:justify-center">
            <h2 className="title-2 aeonik mobile:text-center mobile:ml-0 mobile:px-[5vw] ">
              <span data-para-anim>{slidesData[activeSlide]?.title}</span>
            </h2>
            <p className="text-[2.2vw] font-light mobile:text-[7vw] mobile:text-center mobile:w-[90%] tablet:text-[3.5vw]">
              {slidesData[activeSlide]?.para}
            </p>
          </div>
          <div className="pt-[2vw]">
            
            <p className="content-p w-[85%] py-[1vw] mobile:w-full mobile:text-center mobile:px-[2vw] mobile:py-[3vw] tablet:text-[2.5vw] tablet:w-[95%]">
              {slidesData[activeSlide].description1}
            </p>
            <p className=" content-p w-[85%] py-[1vw] mobile:w-full mobile:text-center mobile:px-[2vw] mobile:py-[3vw] tablet:text-[2.5vw] tablet:w-[95%]">
              {slidesData[activeSlide].description2}
            </p>
            <p className=" content-p w-[85%] py-[1vw] mobile:w-full mobile:text-center mobile:px-[2vw] mobile:py-[3vw] tablet:text-[2.5vw] tablet:w-[95%]">
              {slidesData[activeSlide].description3}
            </p>
          </div>
        </div>
        <div className="w-[50vw] h-[110%] overflow-hidden mobile:w-full mobile:h-[30%] mobile:mt-[30%] tablet:mt-[10%] tablet:w-full">
          <Swiper
            ref={swiperRef}
            direction={"vertical"}
            spaceBetween={20}
            centeredSlides={true}
            className={`cardiovascularSwiper w-full h-full absolute left-[30%] top-[3%] rounded-[30px] mobile:left-0 mobile:h-[100%] tablet:left-0 tablet:h-full`}
            onSlideChange={handleSlideChange}
            // onSwiper={handleSlideChange}
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            breakpoints={{       
              541: {
                slidesPerView: 1,
                spaceBetween:30,
              },
              640:{
                  slidesPerView:1,
                  spaceBetween:30
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 50,
              },
            }}
          >
            {slidesData.map((slide, index) => (
              <SwiperSlide key={index}>
                <div className="absolute w-[40vw] h-[12vw] z-[10] mobile:h-[80vw] mobile:w-[120vw] tablet:w-[90vw] tablet:h-[45vw]">
                  <Image src={slide.imageSrc} alt={slide.title} fill />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div
            className={`px-[1.6vw] py-[1.6vw] absolute z-[5] bottom-[20%] right-[30%] mobile:top-[50%] mobile:right-auto mobile:left-[62%] translate-x-[-65%] mobile:bottom-auto tablet:top-[10%] overflow-hidden mobile:p-[5vw] tablet:p-[2vw] rounded-full next-button cursor-pointer  mobile:block group hover:text-white bg-white/50 tablet:right-0 tablet:bottom-auto
                ${
                  activeButton === "next"
                    ? " text-white"
                    : "bg-transparent text-[#111111]"
                } transition-colors duration-300`} // Added background color transition
            onClick={handleNext} // Trigger next slide
          >
            <span
              className={`bg-[#222222] w-[100%] h-[100%] z-[1] absolute top-0 left-0 origin-center scale-0 rounded-full group-hover:scale-100 group-hover:opacity-100 ${
                activeButton === "next"
                  ? "scale-100 opacity-100 "
                  : "scale-0 opacity-50"
              } transition-all duration-300`}
            ></span>
            <div className="w-[1.6vw] h-[1.6vw] relative z-[6] mobile:w-[4.5vw] mobile:h-[4.5vw] tablet:w-[2.5vw] tablet:h-[2.5vw]">
              <Image
                src="/assets/home/arrow-right.png"
                alt="arrow-right"
                className={`object-cover group-hover:invert transition-all duration-300 ${
                  activeButton === "next" ? "invert" : "invert-0"
                } `}
                fill
              />
            </div>
          </div>
          <div
            className={`px-[1.6vw] py-[1.6vw] top-[20%] right-[32%] absolute z-[5] mobile:bottom-auto mobile:right-auto mobile:top-[50%] mobile:left-[39%] translate-x-[-38%]  tablet:top-[10%] bg-white/50 overflow-hidden  mobile:p-[5vw] tablet:p-[2vw] rounded-full prev-button cursor-pointer  mobile:block group hover:text-white tablet:right-[10%]
                ${
                  activeButton === "prev"
                    ? " text-white"
                    : "bg-transparent text-[#111111]"
                } transition-colors duration-300`} // Added background color transition
            onClick={handlePrev} // Trigger previous slide
          >
            <span
              className={`bg-[#222222] w-[100%] h-[100%] z-[1] absolute top-0 left-0 origin-center scale-0 rounded-full group-hover:scale-100 group-hover:opacity-100 ${
                activeButton === "prev"
                  ? "scale-100 opacity-100"
                  : "scale-0 opacity-50"
              } transition-all duration-300`}
            ></span>
            <div className="w-[1.6vw] h-[1.6vw] relative z-[6] mobile:w-[4.5vw] mobile:h-[4.5vw] tablet:w-[2.5vw] tablet:h-[2.5vw]">
              <Image
                src="/assets/home/arrow-left.png"
                alt="arrow-left"
                className={`object-cover group-hover:invert transition-all duration-300 ${
                  activeButton === "prev" ? "invert" : "invert-0"
                } `}
                fill
              />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute w-[45vw] h-full top-0 right-0 z-[-1] mobile:h-[50vh] mobile:w-[90vw] mobile:top-[10%] tablet:hidden">
        <Image
          src="/assets/cardioVascular/product-bg.png"
          fill
          alt="product-bg"
        />
      </div>
      <div className="absolute w-[60vw] h-[100%] top-0 left-0 z-[-2] mobile:bottom-0 mobile:top-[10%] mobile:w-full" >
        <Image
          src="/assets/cardioVascular/carousel-bg.png"
          fill
          alt="carousel-bg"
        />
      </div>
    </section>
  );
};

export default ProductCarousel;
