import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/scrollbar';
import { Scrollbar, Navigation } from 'swiper/modules';
import Image from 'next/image';
import 'swiper/css/navigation';

const SpecificationsCard=({title,image,para})=>{

    return(
        <>
        <div className="py-[2vw]">
            <div className='w-full h-full flex flex-col justify-between gap-[2vw] text-[2vw]'>
                <p className='text-[1.8vw] font-light'>{title}</p>
                <div className='bg-[#0F233D] rounded-[3vw] w-full h-[25vw] pb-[2vw] flex flex-col gap-[4vw] overflow-hidden'>
                    <div className='w-full h-[15vw]  relative'>
                        <Image
                        src={image}
                        fill
                        alt='specification 1'
                        className='object-cover'
                        />

                    </div>
                    <p className='text-center text-[1.2vw] font-thin'>{para}</p>
                </div>
            </div>
        </div>
        </>
    )
}

const SpecificationsCarousel = () => {
  return (
    <>
    <section>
        <div className='w-screen h-screen bg-[#020912] text-white items-center flex justify-center '>
        <Swiper
        slidesPerView={2.5}
        spaceBetween={50}
        navigation={true}
        scrollbar={true}
        modules={[Scrollbar,Navigation]}
        className="mySpecificationSwiper w-screen flex justify-center items-center"
      >
        <SwiperSlide>
            <SpecificationsCard
            title={"High Staple Count Per Firing"}
            image={"/assets/advastap/spec1.png"}
            para={"Extensive closure with effective coverage."}
            />
            </SwiperSlide>
        <SwiperSlide>
        <SpecificationsCard
            title={"Fout Housing Conduids"}
            image={"/assets/advastap/spec2.png"}
            para={"Designed for secure purse-string suture placement."}
            />
        </SwiperSlide>
        <SwiperSlide>
        <SpecificationsCard
            title={"Uniform Perfusion Across the Staple Lines"}
            image={"/assets/advastap/spec3.png"}
            para={"Faster Recovery & better postoperative results"}
            />
        </SwiperSlide>
        <SwiperSlide>
            <SpecificationsCard
            title={"High Staple Count Per Firing"}
            image={"/assets/advastap/spec1.png"}
            para={"Extensive closure with effective coverage."}
            />
            </SwiperSlide>
        <SwiperSlide>
        <SpecificationsCard
            title={"Fout Housing Conduids"}
            image={"/assets/advastap/spec2.png"}
            para={"Designed for secure purse-string suture placement."}
            />
        </SwiperSlide>
        <SwiperSlide>
        <SpecificationsCard
            title={"Uniform Perfusion Across the Staple Lines"}
            image={"/assets/advastap/spec3.png"}
            para={"Faster Recovery & better postoperative results"}
            />
        </SwiperSlide>
      </Swiper>
        </div>
    </section>
    </>
  )
}

export default SpecificationsCarousel