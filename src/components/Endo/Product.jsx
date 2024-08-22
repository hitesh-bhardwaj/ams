import Image from 'next/image';
import React, { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import 'swiper/css/pagination';
import { EffectFade, Navigation, Autoplay } from 'swiper/modules';

const ProductCard = ({ img, heading }) => {
  return (
    <div className={`h-[30vw] w-[26vw] bg-white rounded-[30px] flex flex-col-reverse  items-center justify-between single drop-shadow-sm shadow-sm relative`}>
      <div className="h-[25vw] w-[30vw] absolute top-[-7vw]">
        <Image
          fill
          src={img}
          alt={heading}
          className="object-contain"
        />
      </div>
      <div className="h-[50%] w-[100%] flex flex-col items-center justify-center">
        <h2 className="text-center font-extralight text-[2.1vw]">{heading}</h2>
        <button className="text-[#143CA3] text-[1.2vw] font-light flex items-center justify-center gap-[0.5vw] mt-[1vw]">See more 
            <span className='w-[1.5vw] h-[1.5vw] overflow-hidden flex justify-center items-center pt-[4%]'>
            <span className='w-[4vw] h-[1.3vw] flex items-center translate-x-[-30%] group-hover:translate-x-[24%] transition-all ease-in-out duration-300 gap-[0.3vw]'>
            <svg viewBox="0 0 22 16" fill="current-color" xmlns="http://www.w3.org/2000/svg" className="h-[0.7vw] w-[1.3vw] scale-[0.3] group-hover:scale-[1] transition-all">
                        <g className="btn-path" fill="#143CA3">
                            <path d="M13.6437 15.9303C13.4217 15.9303 13.1998 15.8485 13.0246 15.6733C12.6858 15.3345 12.6858 14.7738 13.0246 14.4351L19.496 7.96366L13.0246 1.49228C12.6858 1.15352 12.6858 0.592823 13.0246 0.254067C13.3633 -0.0846889 13.924 -0.0846889 14.2628 0.254067L21.3533 7.34455C21.6921 7.68331 21.6921 8.24401 21.3533 8.58277L14.2628 15.6733C14.0876 15.8485 13.8656 15.9303 13.6437 15.9303Z" fill="current-color"/>
                            <path d="M20.5356 8.83812L0.876093 8.83812C0.397162 8.83812 0 8.44096 0 7.96203C0 7.4831 0.397162 7.08594 0.876093 7.08594L20.5356 7.08594C21.0145 7.08594 21.4117 7.4831 21.4117 7.96203C21.4117 8.44096 21.0145 8.83812 20.5356 8.83812Z" fill="current-color"/>
                        </g>
                        <g className="btn-path" fill="#143CA3">
                            <path d="M13.6437 15.9303C13.4217 15.9303 13.1998 15.8485 13.0246 15.6733C12.6858 15.3345 12.6858 14.7738 13.0246 14.4351L19.496 7.96366L13.0246 1.49228C12.6858 1.15352 12.6858 0.592823 13.0246 0.254067C13.3633 -0.0846889 13.924 -0.0846889 14.2628 0.254067L21.3533 7.34455C21.6921 7.68331 21.6921 8.24401 21.3533 8.58277L14.2628 15.6733C14.0876 15.8485 13.8656 15.9303 13.6437 15.9303Z" fill="current-color"/>
                            <path d="M20.5356 8.83812L0.876093 8.83812C0.397162 8.83812 0 8.44096 0 7.96203C0 7.4831 0.397162 7.08594 0.876093 7.08594L20.5356 7.08594C21.0145 7.08594 21.4117 7.4831 21.4117 7.96203C21.4117 8.44096 21.0145 8.83812 20.5356 8.83812Z" fill="current-color"/>
                        </g>
                    </svg>
                    <svg viewBox="0 0 22 16" fill="#143CA3" xmlns="http://www.w3.org/2000/svg" className="h-[0.7vw] w-[1.3vw]  group-hover:scale-[0.3] transition-all">
                        <g className="btn-path" fill="current-color">
                            <path d="M13.6437 15.9303C13.4217 15.9303 13.1998 15.8485 13.0246 15.6733C12.6858 15.3345 12.6858 14.7738 13.0246 14.4351L19.496 7.96366L13.0246 1.49228C12.6858 1.15352 12.6858 0.592823 13.0246 0.254067C13.3633 -0.0846889 13.924 -0.0846889 14.2628 0.254067L21.3533 7.34455C21.6921 7.68331 21.6921 8.24401 21.3533 8.58277L14.2628 15.6733C14.0876 15.8485 13.8656 15.9303 13.6437 15.9303Z" fill="current-color"/>
                            <path d="M20.5356 8.83812L0.876093 8.83812C0.397162 8.83812 0 8.44096 0 7.96203C0 7.4831 0.397162 7.08594 0.876093 7.08594L20.5356 7.08594C21.0145 7.08594 21.4117 7.4831 21.4117 7.96203C21.4117 8.44096 21.0145 8.83812 20.5356 8.83812Z" fill="current-color"/>
                        </g>
                        <g className="btn-path" fill="#143CA3">
                            <path d="M13.6437 15.9303C13.4217 15.9303 13.1998 15.8485 13.0246 15.6733C12.6858 15.3345 12.6858 14.7738 13.0246 14.4351L19.496 7.96366L13.0246 1.49228C12.6858 1.15352 12.6858 0.592823 13.0246 0.254067C13.3633 -0.0846889 13.924 -0.0846889 14.2628 0.254067L21.3533 7.34455C21.6921 7.68331 21.6921 8.24401 21.3533 8.58277L14.2628 15.6733C14.0876 15.8485 13.8656 15.9303 13.6437 15.9303Z" fill="current-color"/>
                            <path d="M20.5356 8.83812L0.876093 8.83812C0.397162 8.83812 0 8.44096 0 7.96203C0 7.4831 0.397162 7.08594 0.876093 7.08594L20.5356 7.08594C21.0145 7.08594 21.4117 7.4831 21.4117 7.96203C21.4117 8.44096 21.0145 8.83812 20.5356 8.83812Z" fill="current-color"/>
                        </g>
                    </svg>
            </span>

            </span>
            

          </button>
      </div>
    </div>
  );
}

const Product = () => {
  useEffect(() => {
    const multiplier = {
      translate: 0.2,
      rotate: 0.013
    };
    
    function calculateWheel() {
      const slides = document.querySelectorAll('.single');
      slides.forEach((slide) => {
        const rect = slide.getBoundingClientRect();
        const r = window.innerWidth * 0.5 - (rect.x + rect.width * 0.5);
        let ty = Math.abs(r) * multiplier.translate - rect.width * multiplier.translate;

        if (ty < 0) {
          ty = 0;
        }
        const transformOrigin = r < 0 ? 'left top' : 'right top';
        slide.style.transform = `translate(0, ${ty}px) rotate(${-r * multiplier.rotate}deg)`;
        slide.style.transformOrigin = transformOrigin;
      });
    }

    function raf() {
      requestAnimationFrame(raf);
      calculateWheel();
    }

    raf();
  }, [])


  return (
    <section  id='products'>
      <div className='w-full flex flex-col items-center gap-[10vw] mb-[15%]'>
      <div className='mb-[5%]'>
        <h2 data-para-anim className="title-2 aeonik">
          <span>Our Advanced Endo Surgery Product Line</span>
        </h2>
      </div>

      <div className="relative w-full h-full">
        <Swiper
          slidesPerView={5}
          // spaceBetween={180}
          
          // grabCursor={true}
          centeredSlides={true}
          loop={true}
          speed={1000}  
          // autoplay={{
          //   delay: 1000,  
          //   disableOnInteraction:false,
          // }}
          modules={[ Navigation, Autoplay]}
          className="product-swiper"
        >
          <SwiperSlide>
            <ProductCard img={"/assets/endo/Product1.png"} heading={"Powered Linear Cutter III"} />
          </SwiperSlide>
          <SwiperSlide>
            <ProductCard img={"/assets/endo/Product2.png"} heading={"Linear Cutter III"} />
          </SwiperSlide>
          <SwiperSlide>
            <ProductCard img={"/assets/endo/Product3.png"} heading={"Hemorrhoid Stapler III"} />
          </SwiperSlide>
          <SwiperSlide>
            <ProductCard img={"/assets/endo/Product4.png"} heading={"Circular Stapler III"} />
          </SwiperSlide>
          <SwiperSlide>
            <ProductCard img={"/assets/endo/Product5.png"} heading={"Endo Linear Cutter III"} />
          </SwiperSlide>
          <SwiperSlide>
            <ProductCard img={"/assets/endo/Product1.png"} heading={"Powered Linear Cutter III"} />
          </SwiperSlide>
          <SwiperSlide>
            <ProductCard img={"/assets/endo/Product2.png"} heading={"Linear Cutter III"} />
          </SwiperSlide>
          <SwiperSlide>
            <ProductCard img={"/assets/endo/Product3.png"} heading={"Hemorrhoid Stapler III"} />
          </SwiperSlide>
          <SwiperSlide>
            <ProductCard img={"/assets/endo/Product4.png"} heading={"Circular Stapler III"} />
          </SwiperSlide>
          <SwiperSlide>
            <ProductCard img={"/assets/endo/Product5.png"} heading={"Endo Linear Cutter III"} />
          </SwiperSlide>
    
        </Swiper>
      </div>
      </div>
    </section>
  );
}

export default Product;
