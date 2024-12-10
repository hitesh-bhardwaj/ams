import React, { useState, useEffect } from 'react';
import styles from "@/styles/cardiovascularProducts.module.css";
import Image from "next/image"; 
import gsap from 'gsap'; // Import GSAP

const slidesData = [
    {
      title: "ADVABOND",
      para: "Braided Coated Polyester Green & White",
      imageSrc: "/assets/cardioVascular/advabond.png",
      description1: "The enduring and comprehensive solution for valve replacement and valve repair procedures providing excellent tensile strength for permanent support.",
      description2:"Silicone coating designed for excellent handling enabling superior pliability and knotting characteristics.",
      description3 : "ADVAPLEDGET assures consistent performance providing smooth uniform construction for precise suture placement.",
    }   ,
    {
      title: "ADVALENE",
      para: "Monofilament Polypropylene Blue",
      imageSrc: "/assets/cardioVascular/advalene.png",
      description1: "-The only Polypropylene with an advanced and unique dispensing system designed to deliver ease of suture dispensing with minimal memory in the suture strand.",
      description2: "Most inert monofilament structure makes ADVALENE Cardiovascular suture an ideal choice for anastomosis.",
      description3 : "ADVAPRIME needles are specially designed with an engineered tip to maintain shape and sharpness pass after pass for the most challenging calcified lesions & fibrotic blood vessels.",
    },
    {
      title: "ADVASTEEL",
      para: "Monofilament stainless Steel 316 LVM",
      imageSrc: "/assets/cardioVascular/advasteel.png",
      description1: "Excellent compatibility with body tissues for minimal tissue reactivity.",
      description2:"Advanced design with superior pliability conforming closely to contour of sternum.",
      description3 : "High resistance to breakage during bend tightening by twisting with excellent knot security.",
    } ,
    {
      title: "ADVAWAX",
      para: "Braided Coated Polyester Green & White",
      imageSrc: "/assets/cardioVascular/advawax.png",
      description1: "ADVAWAX acts as a mechanical (tamponade) barrier helping in achieving local hemostasis of bone.",
      description2:"ADVAWAX minimizes formation of any foreign body or inflammatory reaction and delays bone regeneration.",
      description3 : "ADVAWAX provides ease of application due to smooth consistency.",
    }  ,
    {
      title: "ADVAPACER",
      para: "Multifilament 316L Stainless Steel",
      imageSrc: "/assets/cardioVascular/advapacer.png",
      description1: "Twisted 316L stainless steel wire, with blue Low Densile Polyethylene coating (sheathed), double needle in suture size 2-0, having a length of 60 cm.",
      description2:" Lead conductor resistant (14.50Ω/M)",
      description3 : "",
    } ,
    {
      title: "ADVANOVA",
      para: "Monofilament Polyamide Blue (Treated)",
      imageSrc: "/assets/cardioVascular/advanova.png",
      description1: "Engineered to cater the specialized demands of intricate cardiac procedures.",
      description2:" Ensures structural integrity within calcified tissues.",
      description3 : "ADVAPASS & ADVAPOINT needles",
    },
         
  ];

const Products = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    gsap.fromTo(
      ".product-text", 
      {
        y: 30,    
        opacity: 0, 
      },
      {
        y: 0,        
        opacity: 1, 
        duration: 1.5, 
        ease: "power3.out", 
      }
    );
  }, [currentIndex]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? slidesData.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === slidesData.length - 1 ? 0 : prev + 1));
  };

  const radius = 20;
  const totalSlides = slidesData.length;

  return (
    <section id="products" className="w-screen h-screen  overflow-hidden relative mobile:h-[180vh]">
      <div className="w-full h-full flex items-center justify-between pl-[5vw] mobile:flex-col-reverse tablet:flex-col-reverse">
        <div className="w-[50vw] h-[20%] flex flex-col justify-center mobile:w-full mobile:h-[60vh] tablet:w-full tablet:h-[50vh]">
          <div className="h-[10vw] mobile:flex mobile:flex-col mobile:items-center mobile:justify-center">
            <h2 className="title-2 product-text aeonik mobile:text-center mobile:ml-0 mobile:px-[5vw]">
              <span data-para-anim>{slidesData[currentIndex]?.title}</span>
            </h2>
            <p className="product-text text-[2.2vw] font-light mobile:text-[7vw] mobile:text-center mobile:w-[90%] tablet:text-[3.5vw]">
              {slidesData[currentIndex]?.para}
            </p>
          </div>
          <div className="pt-[2vw]">
            <p className="product-text content-p w-[85%] py-[1vw] mobile:w-full mobile:text-center mobile:px-[2vw] mobile:py-[3vw] tablet:text-[2.5vw] tablet:w-[95%]">
              {slidesData[currentIndex].description1}
            </p>
            <p className="product-text content-p w-[85%] py-[1vw] mobile:w-full mobile:text-center mobile:px-[2vw] mobile:py-[3vw] tablet:text-[2.5vw] tablet:w-[95%]">
              {slidesData[currentIndex].description2}
            </p>
            <p className="product-text content-p w-[85%] py-[1vw] mobile:w-full mobile:text-center mobile:px-[2vw] mobile:py-[3vw] tablet:text-[2.5vw] tablet:w-[95%]">
              {slidesData[currentIndex].description3}
            </p>
          </div>
        </div>
        <div className="w-[50vw] h-full overflow-hidden mobile:w-screen">
          <div className='relative flex items-center justify-center h-screen w-screen m-auto'>
            <div className='absolute flex justify-center items-center h-full w-full'>
              {slidesData.map((slide, index) => {
                const angle = ((index - currentIndex) * (360 / totalSlides)) * (Math.PI / 180);
                const x = -radius * Math.cos(angle);
                const y = radius * Math.sin(angle);

                const isPrevious = (index === (currentIndex - 1 + totalSlides) % totalSlides);
                const isActive = index === currentIndex;
                const isNext = (index === (currentIndex + 1) % totalSlides);

                return (
                  <div
                    key={index}
                    className={`${styles.card} ${isActive ? styles.active : ''} ${isPrevious ? styles.previous : ''} ${isNext ? styles.next : ''}`}
                    style={{
                      transform: `translate(${x}vw, ${y}vw)`,
                      zIndex: isActive ? 3 : isPrevious || isNext ? 2 : 1, 
                    }}
                  >
                    <img src={slide.imageSrc} alt={slide.title} className="w-full h-auto mobile:h-[40vw] mobile:w-[40vw]" />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <div
        className="px-[1.6vw] py-[1.6vw] absolute z-[5] bottom-[20%] right-[23%] mobile:top-[45%] mobile:right-auto mobile:left-[62%] translate-x-[-65%] mobile:bottom-auto tablet:top-[10%] overflow-hidden mobile:p-[5vw] tablet:p-[2vw] rounded-full next-button cursor-pointer mobile:block group hover:text-white bg-white/50 tablet:right-0 tablet:bottom-auto"
        onClick={handleNext}
      >
        <span className={`bg-[#222222] w-[100%] h-[100%] z-[1] absolute top-0 left-0 origin-center scale-0 rounded-full group-hover:scale-100 group-hover:opacity-100 transition-all duration-300`} />
        <div className="w-[1.6vw] h-[1.6vw] relative z-[6] mobile:w-[4.5vw] mobile:h-[4.5vw] tablet:w-[2.5vw] tablet:h-[2.5vw]">
          <Image
            src="/assets/home/arrow-right.png"
            alt="arrow-right"
            className="object-contain group-hover:invert transition-all duration-300"
            fill
          />
        </div>
      </div>

      <div
        className="px-[1.6vw] py-[1.6vw] top-[20%] right-[25%] absolute z-[5] mobile:bottom-auto mobile:right-auto mobile:top-[45%] mobile:left-[39%] translate-x-[-38%] tablet:top-[10%] bg-white/50 overflow-hidden mobile:p-[5vw] tablet:p-[2vw] rounded-full prev-button cursor-pointer mobile:block group hover:text-white"
        onClick={handlePrev}
      >
        <span className={`bg-[#222222] w-[100%] h-[100%] z-[1] absolute top-0 left-0 origin-center scale-0 rounded-full group-hover:scale-100 group-hover:opacity-100 transition-all duration-300`} />
        <div className="w-[1.6vw] h-[1.6vw] relative z-[6] mobile:w-[4.5vw] mobile:h-[4.5vw] tablet:w-[2.5vw] tablet:h-[2.5vw]">
          <Image
            src="/assets/home/arrow-left.png"
            alt="arrow-left"
            className="object-cover group-hover:invert transition-all duration-300"
            fill
          />
        </div>
      </div>

      <div className="absolute w-[50vw] h-[95vh] top-0 right-[-10%] z-[-1] mobile:h-[50vh] mobile:w-[90vw] mobile:top-[10%] tablet:hidden">
        <Image
          src="/assets/cardioVascular/product-bg.png"
          fill
          alt="product-bg"
        />
      </div>
      <div className="absolute w-[60vw] h-[100%] top-0 left-0 z-[-2] mobile:bottom-0 mobile:top-[10%] mobile:w-full" >
        <Image
          src="/assets/cardioVascular/carousel-bg.png"
          fill
          alt="carousel-bg"
        />
      </div>
    </section>
  );
};

export default Products;
