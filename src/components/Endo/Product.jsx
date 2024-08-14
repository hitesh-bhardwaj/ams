import Image from 'next/image';
import React, { useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import 'swiper/css/pagination';
import { FreeMode, Navigation } from 'swiper/modules';
import { gsap } from 'gsap';

const ProductCard = ({ img, heading, rotate, ref }) => {
  return (
    <div ref={ref} className={`h-[35vw] w-[22vw] bg-white/50 rounded-[30px] flex flex-col border border-black items-center justify-between ${rotate}`}>
      <div className="h-[30vw] w-[20vw] relative">
        <Image
          fill
          src={img}
          alt={heading}
          className="object-contain"
        />
      </div>
      <div className="h-[50%] w-[100%] flex flex-col items-center justify-center">
        <h2 className="text-center font-light text-[2vw]">{heading}</h2>
        <button className="mt-2 text-[#143CA3] text-[1vw]">See more</button>
      </div>
    </div>
  );
}

const Product = () => {
  const slideRefs = useRef([]); // Array to hold refs for each slide

  useEffect(() => {
    const swiperInstance = document.querySelector('.product-swiper').swiper;

    swiperInstance.on('slideChangeTransitionStart', () => {
      slideRefs.current.forEach((slide, index) => {
        gsap.to(slide, {
          rotate: `${index * 10 - 30}deg`, // Adjust rotation dynamically
          duration: 0.5,
          ease: 'power2.out'
        });
      });
    });
  }, []);

  return (
    <section className='w-full flex flex-col items-center gap-[10vw] mb-[15%]'>
      <div>
        <h2 className="title-2 aeonik">
          <span>Our Advanced Endo Surgery Product Line</span>
        </h2>
      </div>

      <div className="relative w-full h-full">
        <Swiper
          slidesPerView={6}
          spaceBetween={20}
          loop={true}
          autoplay={{
            delay: 1500,
            disableOnInteraction: false,
          }}
          modules={[FreeMode, Navigation]}
          className="product-swiper"
        >
          <SwiperSlide>
            <ProductCard img={"/assets/endo/Product1.png"} heading={"Powered Linear Cutter III"} rotate={"rotate-[-15deg] translate-y-[20%] translate-x-[-10%]"} ref={el => slideRefs.current[0] = el} />
          </SwiperSlide>
          <SwiperSlide>
            <ProductCard img={"/assets/endo/Product2.png"} heading={"Linear Cutter III"} rotate={"rotate-[-7.5deg] translate-y-[5%] translate-x-[-6%]"} ref={el => slideRefs.current[1] = el} />
          </SwiperSlide>
          <SwiperSlide>
            <ProductCard img={"/assets/endo/Product3.png"} heading={"Hemorrhoid Stapler III"} ref={el => slideRefs.current[2] = el} />
          </SwiperSlide>
          <SwiperSlide>
            <ProductCard img={"/assets/endo/Product4.png"} heading={"Circular Stapler III"} rotate={"rotate-[7.5deg] translate-y-[5%] translate-x-[6%]"} ref={el => slideRefs.current[3] = el} />
          </SwiperSlide>
          <SwiperSlide>
            <ProductCard img={"/assets/endo/Product5.png"} heading={"Endo Linear Cutter III"} rotate={"rotate-[15deg] translate-y-[20%] translate-x-[10%]"} ref={el => slideRefs.current[4] = el} />
          </SwiperSlide>
          <SwiperSlide>
            <ProductCard img={"/assets/endo/Product1.png"} heading={"Powered Linear Cutter III"} rotate={"rotate-[-15deg] translate-y-[20%] translate-x-[-10%]"} ref={el => slideRefs.current[0] = el} />
          </SwiperSlide>
          <SwiperSlide>
            <ProductCard img={"/assets/endo/Product2.png"} heading={"Linear Cutter III"} rotate={"rotate-[-7.5deg] translate-y-[5%] translate-x-[-6%]"} ref={el => slideRefs.current[1] = el} />
          </SwiperSlide>
          <SwiperSlide>
            <ProductCard img={"/assets/endo/Product3.png"} heading={"Hemorrhoid Stapler III"} ref={el => slideRefs.current[2] = el} />
          </SwiperSlide>
          <SwiperSlide>
            <ProductCard img={"/assets/endo/Product4.png"} heading={"Circular Stapler III"} rotate={"rotate-[7.5deg] translate-y-[5%] translate-x-[6%]"} ref={el => slideRefs.current[3] = el} />
          </SwiperSlide>
          <SwiperSlide>
            <ProductCard img={"/assets/endo/Product5.png"} heading={"Endo Linear Cutter III"} rotate={"rotate-[15deg] translate-y-[20%] translate-x-[10%]"} ref={el => slideRefs.current[4] = el} />
          </SwiperSlide>
          {/* Add more slides as needed */}
        </Swiper>
      </div>
    </section>
  );
}

export default Product;
