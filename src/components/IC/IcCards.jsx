import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

// Import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';
import Image from 'next/image';

export default function IcCards() {
  return (
    <>
      <section className='' id='cards-carousel'>
        <div className='w-full h-full flex flex-col gap-[4vw]'>
          <h2 data-para-anim className='aeonik title-2 text-center'>Our Featured Programs</h2>
          <div className='mt-[2vw] fadeUp'>
            <Swiper
              effect={'coverflow'}
              grabCursor={true}
              centeredSlides={true}
              slidesPerView={3.2}
              spaceBetween={10}
              initialSlide={1} // Ensure the initial slide is centered
              speed={1500}
              coverflowEffect={{
                rotate: 60,
                stretch: 50,
                depth:0,
                slideShadows: false,
              }}
              modules={[EffectCoverflow, Pagination]}
              className="mySwiper ic-card"
            >
              <SwiperSlide>
                <div className='relative w-[30vw] h-[38vw] rounded-[2vw] overflow-hidden flex flex-col px-[3vw] py-[4vw] items-center justify-between border border-gray-200 glassmorphism'>
                  <h4 className='aeonik uppercase font-light text-[3vw] text-center relative z-[7]'>
                    ADVA PRO
                  </h4>
                  <div className='w-[30vw] h-full relative '>
                    <Image src="/assets/ic/ic-card-1.webp" fill className='object-contain scale-[1.4]' alt='ic-card-1' />
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className='relative w-[30vw] h-[38vw] rounded-[2vw] overflow-hidden flex flex-col px-[3vw] py-[4vw] items-center justify-between border border-gray-200 glassmorphism'>
                  <h4 className='aeonik uppercase font-light text-[3vw] text-center relative z-[7]'>
                    ADVA GLIDE
                  </h4>
                  <div className='w-[30vw] h-full relative'>
                    <Image src="/assets/ic/ic-card-2.webp" fill className='object-contain scale-[1.4]' alt='ic-card-2' />
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className='relative w-[30vw] h-[38vw] rounded-[2vw] overflow-hidden flex flex-col px-[3vw] py-[4vw] items-center justify-between border border-gray-200 glassmorphism'>
                  <h4 className='aeonik font-light text-[2.3vw] text-center relative z-[7]'>
                    Coronary Accessories
                  </h4>
                  <div className='w-[30vw] h-full relative '>
                    <Image src="/assets/ic/ic-card-3.webp" fill className='object-contain scale-[1.4]' alt='ic-card-3' />
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
          
        </div>
      </section>
    </>
  );
}
