/* eslint-disable react-hooks/rules-of-hooks */
import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import { paraAnim } from '../gsapAnimations';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css/navigation';

// Register GSAP plugin
gsap.registerPlugin(ScrollTrigger, useGSAP);

// Reusable Card Component
const MolecularCard = ({ symbol, title, description }) => (
  <div className='molecular-card px-[3vw] py-[3vw] bg-white/50 border-[1px] rounded-[40px] border-white glassmorphism mobile:w-[90vw] mobile:h-[90vw] mobile:px-[6vw] mobile:py-[6vw] tablet:w-[50vw] tablet:h-[50vw] tablet:px-[4vw] tablet:py-[4vw] mobile:rounded-[6vw]'>
    <div className='w-[6vw] h-[6vw] bg-[#143CA3] text-white flex flex-col items-center justify-center mobile:w-[20vw] mobile:h-[20vw] tablet:w-[10vw] tablet:h-[10vw]'>
      <p className='text-[3.5vw] mobile:text-[12.2vw] tablet:text-[5vw]'>{symbol}</p>
      <p data-para-anim className='text-[0.75vw] mt-[-1vw] mobile:text-[2.5vw] tablet:text-[1.2vw] mobile:mt-[-3vw]'>{title}</p>
    </div>
    <h2 data-para-anim className='text-[2.5vw] mt-[1vw] mb-[1.5vw] font-light mobile:text-[7.4vw] tablet:mt-[3vw] tablet:text-[4vw] mobile:mt-[3vw]'>{title}</h2>
    <p data-para-anim className='content-p tablet:text-[2.5vw] tablet:leading-[1.3]'>{description}</p>
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
    { symbol: 'Pa', title: 'Patient-centric', description: 'Patients are the heart of our purpose, igniting every decision and innovation with unwavering compassion and dedication to transforming healthcare for the better.' },
    { symbol: 'Qu', title: 'Quality-First', description: 'Excellence is our benchmark. Our expert team ensures each device is crafted to the highest standards, delivering safety and reliability you can trust.' },
    { symbol: 'In', title: 'Innovation', description: 'Pioneering the future of Healthcare. AMS remains at the forefront of cutting-edge medical technology.' },
    { symbol: 'Cr', title: 'Caring', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s.' }
  ];

  return (
    <>
      <section className='molecular h-[100vh] overflow-hidden tablet:h-[100vh] mobile:h-[120vh] mobile:py-[15%]' id='molecular' ref={molecularContainer}>
        <div className='w-screen h-screen absolute z-[1] overflow-hidden mobile:h-[110vh] mobile:w-screen'>
          <Image src="/assets/about/molecular-bg.webp" fill alt="molecular-bg" className='object-cover molecular-bg-img scale-[1.3] translate-y-[-30%] mobile:translate-y-[0%]' />
        </div>
        <div className='container-sm py-[10%] relative z-[2] w-full h-full'>
          <div className="flex items-start justify-between w-full mobile:flex-col mobile:w-[100%] mobile:gap-[10vw]">
            <div className='molecular-left w-[50%] space-y-[2.5vw] mobile:w-[100%] mobile:flex mobile:flex-col mobile:items-center mobile:justify-center mobile:text-center tablet:w-[50%]' ref={molecularLeft}>
              <div className='w-[58%] mobile:w-[100%] tablet:w-full'>
                <h2 className="title-2 aeonik">
                  <span data-para-anim>Molecular Foundations </span>
                  <span data-para-anim>of AMS</span>
                </h2>
              </div>
              <p className='content-p w-[75%] mobile:w-[100%]'>
                <span data-para-anim>
                  Exploring the fundamental elements that shape AMS&apos;s ethos and culture, illustrating the core principles guiding our character and values.
                </span>
              </p>
            </div>

            {/* Cards for larger screens */}
            <div className='molecular-right w-[47%] flex flex-col gap-y-[2vw] mobile:hidden tablet:w-[60%]'>
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
            <div className='molecular-right w-[47%] flex-col gap-y-[2vw] hidden mobile:flex mobile:flex-row mobile:w-[100%] mobile:h-full'>
              <Swiper navigation={true} modules={[Navigation]} spaceBetween={20} className="molecularSwiper mySwiper mobile:h-[100%] tablet:h-[100%]">
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
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Molecular;
