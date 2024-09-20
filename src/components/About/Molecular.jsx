/* eslint-disable react-hooks/rules-of-hooks */
import React, { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { paraAnim } from "../gsapAnimations";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css/navigation";

// Register GSAP plugin
gsap.registerPlugin(ScrollTrigger, useGSAP);

// Reusable Card Component
const MolecularCard = ({ symbol, title, description }) => (
  <div className="molecular-card w-[35vw] h-[25vw] px-[3vw] py-[3vw] bg-white/50 border-[1px] rounded-[40px] border-white glassmorphism mobile:w-[90vw] mobile:h-[120vw] mobile:px-[6vw] mobile:py-[12vw] mobile:flex mobile:flex-col mobile:gap-[7vw] mobile:items-center tablet:w-[50vw] tablet:h-[50vw] tablet:px-[4vw] tablet:py-[4vw] mobile:rounded-[6vw]">
    <div className="w-[6vw] h-[6vw] bg-[#143CA3] text-white flex flex-col items-center justify-center mobile:w-[25vw] mobile:h-[25vw] tablet:w-[10vw] tablet:h-[10vw]">
      <p data-para-anim className="text-[3.5vw] mobile:text-[12.2vw] tablet:text-[5vw]">
        {symbol}
      </p>
      <p
        data-para-anim
        className="text-[0.75vw] mt-[-1vw] mobile:text-[2.5vw] tablet:text-[1.2vw] mobile:mt-[-3vw] text-center"
      >
        {title}
      </p>
    </div>
    <h2
      data-para-anim
      className="text-[2.5vw] mt-[1vw] mb-[1.5vw] font-light mobile:text-[7.4vw] tablet:mt-[3vw] tablet:text-[4vw] mobile:mt-[3vw] mobile:text-center"
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

  if (globalThis.innerWidth > 1024) {
    useGSAP(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".molecular",
          pin: true,
          start: "top top",
          end: "+=2500 bottom",
          scrub: true,
        },
      });
      tl.to(".molecular-right", { yPercent: -67, duration: 3 });
    });

    useGSAP(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".molecular",
          start: "top bottom",
          end: "bottom 20%",
          scrub: true,
        },
      });
      tl.to(".molecular-bg-img", { scale: 1.2, delay: -1 });
      tl.to(".molecular-bg-img", { yPercent: 30, delay: -1 });
    });
  } else if (globalThis.innerWidth > 541) {
    useGSAP(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".molecular",
          pin: true,
          start: "top top",
          end: "+=2000 bottom",
          scrub: true,
        },
      });
      tl.to(".molecular-right", { yPercent: -40, duration: 3 });
    });

    useGSAP(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".molecular",
          start: "top bottom",
          end: "bottom 20%",
          scrub: true,
        },
      });
      tl.to(".molecular-bg-img", { scale: 1.2, delay: -1 });
      tl.to(".molecular-bg-img", { yPercent: 30, delay: -1 });
    });
  }

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
        <div className="container-sm py-[10%] relative z-[2] w-full h-full px-[4vw] mobile:px-0">
          <div className="flex items-start justify-between w-full mobile:flex-col mobile:w-[100%] mobile:gap-[10vw]">
            <div
              className="molecular-left w-[50%] space-y-[2.5vw] mobile:w-[100%] mobile:flex mobile:flex-col mobile:items-center mobile:justify-center mobile:text-center tablet:w-[50%]"
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
            <div className="molecular-right w-[47%] flex flex-col gap-y-[2vw] mobile:hidden tablet:w-[60%]">
              {cardData.map((card, index) => (
                <MolecularCard
                  key={index}
                  symbol={card.symbol}
                  title={card.title}
                  description={card.description}
                />
              ))}
            </div>

            {/* Swiper for mobile view */}
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
                className={`absolute z-[5] bottom-0 left-[65%] translate-x-[-65%] border overflow-hidden border-black py-[5vw] px-[5vw] rounded-full next-button cursor-pointer 
                ${
                  activeButton === "next"
                    ? " text-white"
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

                <div className="w-fit h-fit relative z-[1]">
                  <svg
                    fill="currentColor"
                    height="30px"
                    width="30px"
                    version="1.1"
                    id="Layer_1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 330 330"
                  >
                    <path
                      id="XMLID_27_"
                      d="M15,180h263.787l-49.394,49.394c-5.858,5.857-5.858,15.355,0,21.213C232.322,253.535,236.161,255,240,255
	s7.678-1.465,10.606-4.394l75-75c5.858-5.857,5.858-15.355,0-21.213l-75-75c-5.857-5.857-15.355-5.857-21.213,0
	c-5.858,5.857-5.858,15.355,0,21.213L278.787,150H15c-8.284,0-15,6.716-15,15S6.716,180,15,180z"
                    />
                  </svg>
                </div>
              </div>
              <div
                className={`absolute z-[5] bottom-0 left-[35%] translate-x-[-38%] border border-black overflow-hidden  py-[5vw] px-[5vw] rounded-full prev-button cursor-pointer 
                ${
                  activeButton === "prev"
                    ? " text-white"
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
                <div className="w-fit h-fit relative z-[2] ">
                  <svg
                    width="30"
                    height="30"
                    viewBox="0 0 800 800"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0_381_369)">
                      <path
                        d="M763.636 436.364H124.153L243.896 556.107C258.097 570.305 258.097 593.331 243.896 607.532C236.795 614.63 227.488 618.182 218.182 618.182C208.875 618.182 199.568 614.63 192.47 607.53L10.6521 425.711C-3.54908 411.513 -3.54908 388.487 10.6521 374.286L192.47 192.468C206.669 178.269 229.695 178.269 243.896 192.468C258.097 206.667 258.097 229.692 243.896 243.893L124.153 363.636H763.636C783.719 363.636 800 379.918 800 400C800 420.082 783.719 436.364 763.636 436.364Z"
                        fill="currentColor"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_381_369">
                        <rect
                          width="800"
                          height="800"
                          fill="white"
                          transform="matrix(-1 0 0 1 800 0)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Molecular;
