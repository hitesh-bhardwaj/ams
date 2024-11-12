/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { paraAnim } from "../gsapAnimations";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { Media } from "../media";
import "swiper/css/navigation";

// Register GSAP plugin
gsap.registerPlugin(ScrollTrigger);

// Reusable Card Component
const MolecularCard = ({ symbol, title, description }) => (
  <div className="molecular-card w-[35vw] h-[25vw] px-[3vw] py-[3vw] bg-white/50 border-[1px] rounded-[40px] border-white glassmorphism mobile:w-[90vw] mobile:h-[120vw] mobile:px-[6vw] mobile:py-[12vw] mobile:flex mobile:flex-col mobile:gap-[3vw] mobile:items-center tablet:w-[50vw] tablet:h-[50vw] tablet:py-[4vw] mobile:rounded-[6vw]">
    <div className="w-[6vw] h-[6vw] bg-[#143CA3] text-white flex flex-col items-center justify-center mobile:w-[25vw] mobile:h-[25vw] tablet:w-[10vw] tablet:h-[10vw]">
      <p data-para-anim className="text-[3.3vw] mobile:text-[12.2vw] tablet:text-[5vw]">
        {symbol}
      </p>
      <p
        data-para-anim
        className="text-[0.6vw] mt-[-1vw] mobile:text-[2.5vw] tablet:text-[1.2vw] mobile:mt-[-3vw] text-center"
      >
        {title}
      </p>
    </div>
    <h2
      data-para-anim
      className="text-[2.5vw] mt-[1vw] mb-[1.5vw] font-light mobile:text-[7.4vw] tablet:mt-[3vw] tablet:text-[4vw] mobile:mt-[6vw] mobile:text-center"
    >
      {title}
    </h2>
    <p
      data-para-anim
      className="content-p tablet:text-[2.5vw] tablet:leading-[1.3] mobile:text-center"
    >
      {description}
    </p>
  </div>
);

const Molecular = () => {
  paraAnim();

  const molecularLeft = useRef(null);
  const molecularContainer = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (globalThis.innerWidth > 1024) {
        // For screens wider than 1024px
        const tlRight = gsap.timeline({
          scrollTrigger: {
            trigger: ".molecular",
            pin: true,
            start: "top top",
            end: "+=2500 bottom",
            scrub: true,
          },
        });
        tlRight.to(".molecular-right", { yPercent: -75, duration: 3, ease: "none" });

        const tlBg = gsap.timeline({
          scrollTrigger: {
            trigger: ".molecular",
            start: "top bottom",
            end: "bottom 20%",
            scrub: true,
          },
        });
        tlBg.to(".molecular-bg-img", { scale: 1.2, delay: -1 });
        tlBg.to(".molecular-bg-img", { yPercent: 30, delay: -1 });
      } else if (globalThis.innerWidth > 541) {
        // For screens between 541px and 1024px
        const tlRight = gsap.timeline({
          scrollTrigger: {
            trigger: ".molecular",
            pin: true,
            start: "top top",
            end: "+=2000 bottom",
            scrub: true,
          },
        });
        tlRight.to(".molecular-right", { yPercent: -50, duration: 3, ease: "none" });

        const tlBg = gsap.timeline({
          scrollTrigger: {
            trigger: ".molecular",
            start: "top bottom",
            end: "bottom 20%",
            scrub: true,
          },
        });
        tlBg.to(".molecular-bg-img", { scale: 1.2, delay: -1 });
        tlBg.to(".molecular-bg-img", { yPercent: 30, delay: -1 });
      }
    });

    return () => ctx.revert(); // Clean up on unmount
  }, []);

  // Molecular card data
  const cardData = [
    {
      symbol: "Pa",
      title: "Patients at the Heart",
      description:
        "Patients are the heart of our purpose, igniting every decision and innovation with unwavering compassion and dedication to transforming healthcare for the better.",
    },
    {
      symbol: "Qu",
      title: "Uncompromising Quality",
      description:
        "Excellence is our benchmark. Our expert team ensures each device is crafted to the highest standards, delivering safety and reliability you can trust.",
    },
    {
      symbol: "In",
      title: "Innovative Solutions",
      description:
        "Pioneering the future of Healthcare. AMS remains at the forefront of cutting-edge medical technology.",
    },
    {
      symbol: "Cr",
      title: "Caring",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s.",
    },
  ];
  const swiperRef = useRef(null); // Create a ref for Swiper

  // State to track which button was clicked
  const [activeButton, setActiveButton] = useState("");

  const handleNext = () => {
    if (swiperRef.current) {
      swiperRef.current.slideNext(); // Move to the next slide
      setActiveButton("next"); // Set next button as active
      // Reset after 300ms
    }
  };

  const handlePrev = () => {
    if (swiperRef.current) {
      swiperRef.current.slidePrev(); // Move to the previous slide
      setActiveButton("prev"); // Set previous button as active
      // Reset after 300ms
    }
  };

  return (
    <>
      <section
        className="molecular h-[100vh] overflow-hidden tablet:h-[100vh] mobile:h-[130vh] mobile:py-[15%]"
        id="molecular"
        ref={molecularContainer}
      >
        <div className="w-screen h-screen absolute z-[1] overflow-hidden mobile:h-[125vh] mobile:w-screen">
          <Image
            src="/assets/about/molecular-bg.webp"
            fill
            alt="molecular-bg"
            className="object-cover molecular-bg-img scale-[1.3] translate-y-[-30%] mobile:translate-y-[0%]"
          />
        </div>
        <div className="container-sm py-[15%] relative z-[2] w-full h-full px-[4vw] mobile:px-0 tablet:px-0">
          <div className="flex items-start justify-between w-full mobile:flex-col mobile:w-[100%] mobile:gap-[20vw]">
            <div
              className="molecular-left w-[50%] space-y-[2.5vw] mobile:w-[100%] mobile:flex mobile:flex-col mobile:items-center mobile:justify-center mobile:gap-[5vw] mobile:text-center tablet:w-[50%]"
              ref={molecularLeft}
            >
              <div className="w-[58%] mobile:w-[100%] tablet:w-full">
                <h2 className="title-2 aeonik">
                  <span data-para-anim>Molecular Foundations </span>
                  <span data-para-anim>of AMS</span>
                </h2>
              </div>
              <p className="content-p w-[75%] mobile:w-[100%]">
                <span data-para-anim>
                  Exploring the fundamental elements that shape AMS&apos;s ethos
                  and culture, illustrating the core principles guiding our
                  character and values.
                </span>
              </p>
            </div>

            {/* Cards for larger screens */}
           <Media greaterThan="mobile">

             <div className="molecular-right w-[47%] flex flex-col gap-y-[2vw] tablet:w-[60%]">
              {cardData.map((card, index) => (
                <MolecularCard
                  key={index}
                  symbol={card.symbol}
                  title={card.title}
                  description={card.description}
                />
              ))}
            </div>
            </Media>

            {/* Swiper for mobile view */}
            <Media lessThan="tablet">

            <div className="molecular-right w-[47%] flex-col gap-y-[2vw] hidden mobile:flex mobile:flex-row mobile:w-[100%] mobile:h-full">
              <Swiper
                navigation={false}
                modules={[Navigation]}
                onSwiper={(swiper) => (swiperRef.current = swiper)}
                spaceBetween={40}
                className="molecularSwiper mySwiper mobile:h-[100%] tablet:h-[100%]"
              >
                {cardData.map((card, index) => (
                  <SwiperSlide key={index}>
                    <MolecularCard
                      symbol={card.symbol}
                      title={card.title}
                      description={card.description}
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
              <div
                className={`absolute z-[5] bottom-[-3%] left-[67%] translate-x-[-65%] overflow-hidden border bg-white/50  py-[5vw] px-[5vw] rounded-full next-button cursor-pointer 
                ${
                  activeButton === "next"
                    ? " text-white border-none"
                    : "bg-transparent text-[#111111]"
                } transition-colors duration-300`} // Added background color transition
                onClick={handleNext} // Trigger next slide
              >
                <span
                  className={`bg-[#111111] w-[100%] h-[100%] z-[1] absolute top-0 left-0 origin-center scale-0 rounded-full  ${
                    activeButton === "next"
                      ? "scale-100 opacity-100"
                      : "scale-0 opacity-50"
                  } transition-all duration-300`}
                ></span>

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
                className={`absolute z-[5] bottom-[-3%] left-[37%] translate-x-[-38%] bg-white/50 overflow-hidden border py-[5vw] px-[5vw] rounded-full prev-button cursor-pointer 
                ${
                  activeButton === "prev"
                    ? " text-white border-none"
                    : "bg-transparent text-[#111111]"
                } transition-colors duration-300`} // Added background color transition
                onClick={handlePrev} // Trigger previous slide
              >
                <span
                  className={`bg-[#111111] w-[100%] h-[100%] z-[1] absolute top-0 left-0 origin-center scale-0 rounded-full ${
                    activeButton === "prev"
                      ? "scale-100 opacity-100"
                      : "scale-0 opacity-50"
                  } transition-all duration-300`}
                ></span>
                 <div className="w-[1.6vw] h-[1.6vw] relative z-[6] mobile:w-[4.5vw] mobile:h-[4.5vw]">
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
            </Media>
          </div>
        </div>
      </section>
    </>
  );
};

export default Molecular;
