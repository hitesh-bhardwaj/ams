import Image from "next/image";
import React, { useState, useRef } from "react";
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

export default function OfferingsMob() {
  // Card data array
  const cards = [
    {
      id: 1,
      imgSrc: "/assets/oem/suture-card-needle.webp",
      alt: "suture-needle",
      title: "Surgical Suture Needles",
    },
    {
      id: 2,
      imgSrc: "/assets/oem/sternotomy.webp",
      alt: "sternotomy",
      title: "Sternotomy Suture",
    },
    {
      id: 3,
      imgSrc: "/assets/oem/oem-hernia-img.webp",
      alt: "oem-hernia",
      title: "Hernia Solutions",
    },
    {
      id: 4,
      imgSrc: "/assets/oem/stent.webp",
      alt: "stent",
      title: "Stent Delivery Systems",
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

  // // State to track the active layout
  // const [activeLayout, setActiveLayout] = useState(1);

  // // Refs for the layout divs
  // const layoutRefs = useRef([]);

  // // Handle card click
  // const handleCardClick = (id, index) => {
  //   setActiveLayout(id);

  //   // Scroll to the next layout div
  //   if (layoutRefs.current[index]) {
  //     layoutRefs.current[index].scrollIntoView({ behavior: 'smooth' });
  //   }
  // };

  return (
    <>
      <section className="pb-[20%] pt-[10%] hidden mobile:block tablet:block relative" id="offering">
        <div className="hidden mobile:block tablet:block">
          <div className="w-full flex flex-col px-[5vw]">
            {/* <div className="w-full flex justify-center">
              <h2 className="title-2 aeonik text-center px-[2vw] tablet:w-[80%] mobile:w-[95%]">
                <span data-para-anim>Unmatched Precision with AMS Needles</span>
              </h2>
            </div>
            <div className="w-full mobile:overflow-scroll mobile:mt-[5vw] mobile:fadeup mobile:block hidden mobile:pr-[5%] fadeUp tablet:overflow-scroll mobile:fadeup tablet:block tablet:pr-[5%] overflow-visible tablet:mt-0">
              <div className="mobile:flex mobile:flex-nowrap mobile:w-fit mobile:gap-[5vw] mobile:ml-[6vw] mobile:h-fit tablet:flex tablet:flex-nowrap tablet:w-fit tablet:gap-[2vw] tablet:h-fit tablet:ml-[4vw]">
                
                {cards.map((card, index) => (
                  <div
                    key={card.id}
                    onClick={() => handleCardClick(card.id, index)}
                    className="w-[80vw] h-[150vw] rounded-[10vw] px-[3vw] py-[3vw] glassmorphism flex flex-col justify-between border pb-[15vw] tablet:w-[45vw] tablet:h-[60vw] tablet:pb-0 tablet:rounded-[4vw] tablet:justify-start cursor-pointer"
                  >
                    <div className="w-full h-[90vw] relative rounded-[6vw] overflow-hidden tablet:h-[70%] tablet:rounded-[3vw]">
                      <Image
                        src={card.imgSrc}
                        alt={card.alt}
                        className="object-cover"
                        fill
                      />
                    </div>
                    <h5
                      data-para-anim
                      className="aeonik text-[9vw] text-center font-light tablet:text-[4vw] tablet:mt-[3vw]"
                    >
                      {card.title}
                    </h5>
                  </div>
                ))}
              </div>
            </div>
            <div className="w-full">
             
              {cards.map((card, index) => (
                <div
                  key={card.id}
                  ref={(el) => (layoutRefs.current[index] = el)}
                  className={`w-full h-full bg-white rounded-[9vw] pt-[12vw] pb-[20vw] flex flex-col border items-center gap-[9vw] tablet:pb-[10vw] tablet:pt-[2vw] tablet:gap-[5vw] layout${card.id} transition-opacity duration-300 ${activeLayout === card.id ? 'opacity-100' : 'hidden'}`}
                >
                  <h3 data-para-anim className="text-[9vw] aeonik text-center font-light tablet:text-[5vw]">Features</h3>
                  <div className="w-[90vw] h-[50vw] rounded-[6vw] relative overflow-hidden">
                    <Image src={card.imgSrc} alt={card.alt} className="object-cover" fill />
                  </div>
                  <div className="w-full h-full flex flex-col gap-[2vw] px-[7vw]">
                    <h3 data-para-anim className="text-[10vw] aeonik font-light leading-[1.25] tablet:text-[5vw]">
                      {card.title}
                    </h3>
                    <h4 data-para-anim className="text-[6vw] aeonik font-light leading-[1.25] tablet:text-[3.5vw]">
                      The Next Generation of Needle Technology
                    </h4>
                    <ul className="list-disc space-y-[0.5vw] text-[4.5vw] font-light ml-[4vw] mt-[4vw] tablet:text-[2.2vw] tablet:mt-[2vw]">
                      <li data-para-anim>Advanced US & German Technology</li>
                      <li data-para-anim>Cutting-Edge Robotics and Automation</li>
                      <li data-para-anim>Robust Capacity of 60 Million Needles Annually</li>
                      <li data-para-anim>Precision Engineering & Quality Assurance</li>
                      <li data-para-anim>Expedited Turnaround and Delivery</li>
                      <li data-para-anim>60,000 sq. ft. Needle Production Facility</li>
                      <li data-para-anim>Team with Over 2-3 Decades of Expertise</li>
                    </ul>
                  </div>
                </div>
              ))}
            </div> */}
            <div className="hidden mobile:block ">
            <Swiper
              onSwiper={(swiper) => (swiperRef.current = swiper)} // Save Swiper instance to ref
              slidesPerView={1}
              spaceBetween={20}
              navigation={false}
              loop={true}
              speed={1000}
              modules={[FreeMode, Autoplay]}
              className="offeringSwiper mySwiper overflow-hidden mobile:h-[93vh] mobile:rounded-[20px]"
              
            >
              {cards.map((card, index) => (
                <SwiperSlide key={index}>
                     <div
                  key={card.id}
                 
                  className={`w-full h-full bg-white rounded-[9vw] pt-[5vw] pb-[5vw] flex flex-col border items-center gap-[3vw] tablet:pb-[10vw] tablet:pt-[2vw] tablet:gap-[5vw] layout${card.id} transition-opacity duration-300 opacity-100`}
                >
                  <h3 data-para-anim className="text-[9vw] aeonik text-center font-light tablet:text-[5vw]">Features</h3>
                  <div className="w-[80vw] h-[90vw] rounded-[6vw] relative overflow-hidden">
                    <Image src={card.imgSrc} alt={card.alt} className="object-cover" fill />
                  </div>
                  <div className="w-full h-full flex flex-col gap-[3vw] mt-[5vw] px-[7vw]">
                    <h3 data-para-anim className="text-[8vw] aeonik font-light leading-[1.25] tablet:text-[5vw]">
                      {card.title}
                    </h3>
                    <h4 data-para-anim className="text-[5vw] aeonik font-light leading-[1.25] tablet:text-[3.5vw]">
                      The Next Generation of Needle Technology
                    </h4>
                    <ul className="list-disc space-y-[0.5vw] text-[4vw] font-light ml-[4vw] tablet:text-[2.2vw] tablet:mt-[2vw]">
                      <li data-para-anim>Advanced US & German Technology</li>
                      <li data-para-anim>Cutting-Edge Robotics and Automation</li>
                      <li data-para-anim>Robust Capacity of 60 Million Needles Annually</li>
                      <li data-para-anim>Precision Engineering & Quality Assurance</li>
                      <li data-para-anim>Expedited Turnaround and Delivery</li>
                      <li data-para-anim>60,000 sq. ft. Needle Production Facility</li>
                      <li data-para-anim>Team with Over 2-3 Decades of Expertise</li>
                    </ul>
                  </div>
                </div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Custom Next and Previous Buttons */}
            <div
              className={`absolute z-[5] bottom-0 left-[65%] translate-x-[-65%] overflow-hidden py-[5vw] px-[5vw] rounded-full next-button cursor-pointer border glassmorphism
                ${
                  activeButton === "next"
                    ? " text-white"
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
              className={`absolute z-[5] bottom-0 left-[39%] translate-x-[-38%] border glassmorphism overflow-hidden  py-[5vw] px-[5vw] rounded-full prev-button cursor-pointer 
                ${
                  activeButton === "prev"
                    ? " text-white"
                    : "bg-transparent text-[#111111]"
                } transition-colors duration-300`} // Added background color transition
              onClick={handlePrev} // Trigger previous slide
            >
               <span className={`bg-[#111111] w-[100%] h-[100%] z-[1] absolute top-0 left-0 origin-center scale-0 rounded-full ${
                  activeButton === "prev"
                    ?"scale-100 opacity-100"
                    : "scale-0 opacity-50"
                } transition-all duration-300`}></span>
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
          </div>
        </div>
      </section>
    </>
  );
}
