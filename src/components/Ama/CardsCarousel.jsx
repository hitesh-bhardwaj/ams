import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';



// import required modules
import { EffectCoverflow, Pagination , Autoplay} from 'swiper/modules';
import Image from 'next/image';

export default function CardsCarousel() {
  return (
    <>
    <section className='pb-[10%]' id='cards-carousel'>
    <div className='w-full h-full flex flex-col gap-[4vw]'>
        <h2 data-para-anim className='aeonik title-2 text-center'>Our Featured Programs</h2>
      <div className='mt-[2vw] fadeUp px-[5vw]'>

      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={3.9}
        loop={true}
        spaceBetween={0}
        autoplay={{
            delay: 1500,
            disableOnInteraction: false,
          }}
          speed={1500}

        coverflowEffect={{
          rotate: 30,
          stretch: 10,
          slideShadows:false,
          
          
        }}
        
        modules={[EffectCoverflow, Pagination , Autoplay]}
        className="mySwiper ama-card"
      >
        <SwiperSlide>
          <div className='relative w-[23vw] h-[32vw] rounded-[2vw] overflow-hidden'>
            <Image src="/assets/ama/ama-card-1.webp" fill className='object-cover' alt='ama-card-1' />
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='relative w-[23vw] h-[32vw] rounded-[2vw] overflow-hidden'>
            <Image src="/assets/ama/ama-card-2.webp" fill className='object-cover' alt='ama-card-2' />
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='relative w-[23vw] h-[32vw] rounded-[2vw] overflow-hidden'>
            <Image src="/assets/ama/ama-card-3.webp" fill className='object-cover' alt='ama-card-3' />
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='relative w-[23vw] h-[32vw] rounded-[2vw] overflow-hidden'>
            <Image src="/assets/ama/ama-card-4.webp" fill className='object-cover' alt='ama-card-4' />
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='relative w-[23vw] h-[32vw] rounded-[2vw] overflow-hidden'>
            <Image src="/assets/ama/ama-card-5.webp" fill className='object-cover' alt='ama-card-5' />
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='relative w-[23vw] h-[32vw] rounded-[2vw] overflow-hidden'>
            <Image src="/assets/ama/ama-card-4.webp" fill className='object-cover' alt='ama-card-4' />
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='relative w-[23vw] h-[32vw] rounded-[2vw] overflow-hidden'>
            <Image src="/assets/ama/ama-card-3.webp" fill className='object-cover' alt='ama-card-3' />
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='relative w-[23vw] h-[32vw] rounded-[2vw] overflow-hidden'>
            <Image src="/assets/ama/ama-card-3.webp" fill className='object-cover' alt='ama-card-3' />
          </div>
        </SwiperSlide>
        
      
      </Swiper>
      </div> 
      <p data-para-anim className=' text-[1.5vw] font-light text-center'> Nurturing Nursing Skills</p>
    </div>

    </section>
    </>
  );
}
