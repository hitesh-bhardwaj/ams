import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/scrollbar';
import { Scrollbar, Navigation } from 'swiper/modules';

const SpecificationsCard=()=>{
    
    return(
        <>
        </>
    )
}

const Specifications = () => {
  return (
    <>
    <section>
        <div className='w-screen h-screen bg-[#020912] text-white'>
        <Swiper
        navigation={true}
        scrollbar={{
          hide: true,
        }}
        modules={[Scrollbar,Navigation]}
        className="mySwiper w-screen h-screen flex justify-center items-center"
      >
        <SwiperSlide>Hello</SwiperSlide>
        <SwiperSlide>Hello 2</SwiperSlide>
        <SwiperSlide>Hello 3</SwiperSlide>
        <SwiperSlide>Hello 4</SwiperSlide>
        <SwiperSlide>Hello 5</SwiperSlide>
        <SwiperSlide>Hello 6</SwiperSlide>
        <SwiperSlide>Hello 7</SwiperSlide>
        <SwiperSlide>Hello 8</SwiperSlide>
        <SwiperSlide>Hello 9</SwiperSlide>
      </Swiper>
        </div>
    </section>
    </>
  )
}

export default Specifications