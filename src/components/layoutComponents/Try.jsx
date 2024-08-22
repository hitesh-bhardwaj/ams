import Image from 'next/image';
import React, { useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import 'swiper/css/pagination';
import { FreeMode, Navigation, Autoplay } from 'swiper/modules';


const ProductCard = ({ img, heading }) => {
  return (
    <div  className={`h-[35vw] w-[22vw] bg-white/50 rounded-[30px] flex flex-col border border-black items-center justify-between single`}>
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

const Try = () => {
  const multiplier = {
    translate:0.1,
    rotate: 0.02
}
// useEffect(()=>{
//   function calculateWheel() {
//     const slides = document.querySelectorAll('.single')
//     slides.forEach((slide, i) => {
//         const rect = slide.getBoundingClientRect()
//         const r = window.innerWidth * .5 - (rect.x + rect.width * .5)
//         let ty = Math.abs(r) * multiplier.translate - rect.width * multiplier.translate

//         if (ty < 0) {
//             ty = 0
//         }
//         const transformOrigin = r < 0 ? 'left top' : 'right top'
//         slide.style.transform = `translate(0, ${ty}px) rotate(${-r * multiplier.rotate}deg)`
//         slide.style.transformOrigin = transformOrigin
//     })
// }

// function raf() {
//     requestAnimationFrame(raf)
//     calculateWheel()
// }

// raf();

// },[])


  return (
    <section className='w-full flex flex-col items-center gap-[10vw] mb-[15%]'>
      <div>
        <h2 data-para-anim className="title-2 aeonik">
          <span>Our Advanced Endo Surgery Product Line</span>
        </h2>
      </div>

      <div className="relative w-full h-full">
        <Swiper
          slidesPerView={3}
          spaceBetween={90}
          loop={true}
          // autoplay={{
          //   delay: 1000,  
          // }}
          modules={[FreeMode, Navigation, Autoplay]}
          className="product-swiper"
        >
          <SwiperSlide>
            <ProductCard img={"/assets/endo/Product1.png"} heading={"Powered Linear Cutter III"}   />
          </SwiperSlide>
          <SwiperSlide>
            <ProductCard img={"/assets/endo/Product2.png"} heading={"Linear Cutter III"}  />
          </SwiperSlide>
          <SwiperSlide>
            <ProductCard img={"/assets/endo/Product3.png"} heading={"Hemorrhoid Stapler III"}  />
          </SwiperSlide>
          <SwiperSlide>
            <ProductCard img={"/assets/endo/Product4.png"} heading={"Circular Stapler III"}  />
          </SwiperSlide>
          <SwiperSlide>
            <ProductCard img={"/assets/endo/Product5.png"} heading={"Endo Linear Cutter III"}  />
          </SwiperSlide>
          
          <SwiperSlide>
            <ProductCard img={"/assets/endo/Product1.png"} heading={"Powered Linear Cutter III"}   />
          </SwiperSlide>
          <SwiperSlide>
            <ProductCard img={"/assets/endo/Product2.png"} heading={"Linear Cutter III"}  />
          </SwiperSlide>
          <SwiperSlide>
            <ProductCard img={"/assets/endo/Product3.png"} heading={"Hemorrhoid Stapler III"}  />
          </SwiperSlide>
          <SwiperSlide>
            <ProductCard img={"/assets/endo/Product4.png"} heading={"Circular Stapler III"}  />
          </SwiperSlide>
          <SwiperSlide>
            <ProductCard img={"/assets/endo/Product5.png"} heading={"Endo Linear Cutter III"}  />
          </SwiperSlide>

         
          {/* Add more slides as needed */}
        </Swiper>
      </div>
    </section>
  );
}

export default Try;
