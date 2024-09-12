/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/rules-of-hooks */
// "use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { Flip } from "gsap/dist/Flip";
import styles from "@/styles/endocard.module.css"; // Import the module CSS
import Link from "next/link";
import Image from "next/image";


gsap.registerPlugin(ScrollTrigger, Flip);

const ProductCard = ({ img, heading}) => {
  return (
    <div className="group">
      <Link href={"#"}>
        <div
          className={`h-[27vw] w-[26vw] bg-white rounded-[30px] flex flex-col-reverse  items-center justify-between single drop-shadow-sm shadow-sm relative border border-gray-200 group-hover:bg-white group-hover:shadow-xl duration-500 mobile:w-[85vw] mobile:h-[100vw] mobile:ml-[7vw] tablet:w-[40vw] tablet:h-[50vw]`}
        >
          <div className="h-[22vw] w-[30vw] absolute top-[-5vw] mobile:w-[80vw] mobile:h-[80vw] tablet:top-[10%]">
            <Image fill src={img} alt={heading} className="object-contain group-hover:scale-[1.2] transition-all duration-500" />
          </div>
          <div className="h-[50%] w-[100%] flex flex-col items-center justify-center mobile:h-full mobile:justify-end mobile:pb-[10%]">
            <h2 className="text-center font-extralight text-[2.1vw] mobile:text-[7vw] tablet:text-[3vw]">
              {heading}
            </h2>
            <button className={`text-[#143CA3] text-[1.2vw] font-light flex items-center justify-center gap-[0.5vw] mobile:text-[5vw] mobile:gap-[2vw] tablet:text-[2vw]`}>See more 
              <span className='w-[1.5vw] h-[1.5vw] overflow-hidden flex justify-center items-center pt-[4%] mobile:w-[5vw] mobile:h-[7vw]'>
              <span className='w-[4vw] h-[1.3vw] flex translate-x-[-30%] group-hover:translate-x-[24%] transition-all ease-in-out duration-300 gap-[0.3vw] mobile:w-[15vw] mobile:h-[5vw] '>
              <svg viewBox="0 0 22 16" fill="current-color" xmlns="http://www.w3.org/2000/svg" className="h-[1vw] w-[1.3vw] scale-[0.3] group-hover:scale-[1] transition-all mobile:scale-[1] mobile:w-[5vw] mobile:h-[5vw]">
                          <g className="btn-path" fill="#143CA3">
                              <path d="M13.6437 15.9303C13.4217 15.9303 13.1998 15.8485 13.0246 15.6733C12.6858 15.3345 12.6858 14.7738 13.0246 14.4351L19.496 7.96366L13.0246 1.49228C12.6858 1.15352 12.6858 0.592823 13.0246 0.254067C13.3633 -0.0846889 13.924 -0.0846889 14.2628 0.254067L21.3533 7.34455C21.6921 7.68331 21.6921 8.24401 21.3533 8.58277L14.2628 15.6733C14.0876 15.8485 13.8656 15.9303 13.6437 15.9303Z" fill="current-color"/>
                              <path d="M20.5356 8.83812L0.876093 8.83812C0.397162 8.83812 0 8.44096 0 7.96203C0 7.4831 0.397162 7.08594 0.876093 7.08594L20.5356 7.08594C21.0145 7.08594 21.4117 7.4831 21.4117 7.96203C21.4117 8.44096 21.0145 8.83812 20.5356 8.83812Z" fill="current-color"/>
                          </g>
                          <g className="btn-path" fill="#143CA3">
                              <path d="M13.6437 15.9303C13.4217 15.9303 13.1998 15.8485 13.0246 15.6733C12.6858 15.3345 12.6858 14.7738 13.0246 14.4351L19.496 7.96366L13.0246 1.49228C12.6858 1.15352 12.6858 0.592823 13.0246 0.254067C13.3633 -0.0846889 13.924 -0.0846889 14.2628 0.254067L21.3533 7.34455C21.6921 7.68331 21.6921 8.24401 21.3533 8.58277L14.2628 15.6733C14.0876 15.8485 13.8656 15.9303 13.6437 15.9303Z" fill="current-color"/>
                              <path d="M20.5356 8.83812L0.876093 8.83812C0.397162 8.83812 0 8.44096 0 7.96203C0 7.4831 0.397162 7.08594 0.876093 7.08594L20.5356 7.08594C21.0145 7.08594 21.4117 7.4831 21.4117 7.96203C21.4117 8.44096 21.0145 8.83812 20.5356 8.83812Z" fill="current-color"/>
                          </g>
                      </svg>
                      <svg viewBox="0 0 22 16" fill="#143CA3" xmlns="http://www.w3.org/2000/svg" className="h-[1vw] w-[1.3vw]  group-hover:scale-[0.3] transition-all mobile:w-[5vw] mobile:h-[5vw]">
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
      </Link>
    </div>
  );
};

const Product = () => {
  const sliderContainer = useRef(null);
  const wheelRef = useRef(null);
  const headerRef = useRef(null);
  const cardsRef = useRef([]);
  const productData = [
    {
      imgSrc: "/assets/endo/Product1.png",
      heading: "Powered Linear Cutter III",
    },
    {
        imgSrc: "/assets/endo/Product2.png",
        heading: "Linear Cutter III",
      },
      {
        imgSrc: "/assets/endo/Product3.png",
        heading: "Hemorrhoid Stapler III",
      },
      {
        imgSrc: "/assets/endo/Product4.png",
        heading: "Circular Stapler III",
      },
      {
        imgSrc: "/assets/endo/Product5.png",
        heading: "Endo Linear Cutter III",
      },
  ];
  if(globalThis.innerWidth<1024){

  }
  else{
    useEffect(() => {
      const ctx = gsap.context(() => {
        const wheel = wheelRef.current;
        const images = gsap.utils.toArray(`.${styles.wheelCard}`); // Scoped class for wheelCard
  
        const setup = () => {
          const radius = wheel.offsetWidth / 1;
          const center = wheel.offsetWidth / 2;
          const total = images.length;
          const slice = (0.49 * Math.PI) / total;
  
          images.forEach((item, i) => {
            const angle = i * slice;
            const x = center + radius * Math.sin(angle);
            const y = center - radius * Math.cos(angle);
  
            gsap.set(item, {
              rotation: angle + 0.01 + "_rad",
              xPercent: -50,
              yPercent: -50,
              x: x,
              y: y,
            });
          });
        };
  
        setup();
        window.addEventListener("resize", setup);
  
        gsap.to(`.${styles.wheel}`, {
          rotate: () => -73,
          ease: "none",
          duration: images.length,
          scrollTrigger: {
            trigger: sliderContainer.current,
            start: "top top",
            end: "bottom -=500",
            pin: true,
            scrub: 1,
            invalidateOnRefresh: true,
            markers: false,
          },
        });
  
        let lastClickedCard = null;
  
        const flip = (e) => {
          const card = e.currentTarget;
          const image = card.querySelector("img");
  
          if (!image) {
            console.error("Image not found in the clicked card");
            return;
          }
  
          const state = Flip.getState(image);
  
          if (headerRef.current) {
            headerRef.current.appendChild(image);
  
            Flip.from(state, {
              duration: 0.4,
              ease: "sine.out",
              absolute: true,
            });
  
            lastClickedCard = card;
          } else {
            console.error("Header element is not available");
          }
        };
  
        const putBack = (e) => {
          const image = headerRef.current.querySelector("img");
  
          if (!image || !lastClickedCard) {
            console.error("No image to return or no last clicked card");
            return;
          }
  
          const state = Flip.getState(image);
  
          lastClickedCard.appendChild(image);
          Flip.from(state, {
            duration: 0.4,
            ease: "sine.out",
            absolute: true,
          });
  
          lastClickedCard = null;
        };
  
        cardsRef.current.forEach((card) => {
          card.addEventListener("click", (e) => {
            if (lastClickedCard) {
              putBack(e);
            }
            flip(e);
          });
        });
  
        headerRef.current.addEventListener("click", (e) => {
          if (!lastClickedCard) return;
          putBack(e);
        });
  
        return () => {
          window.removeEventListener("resize", setup);
        };
      }, sliderContainer);
  
      return () => {
        ctx.revert();
      };
    }, []);

  }


  return (
    <section
    id="products"
      ref={sliderContainer}
      className={`relative h-screen ${styles.sliderContainer} overflow-x-hidden mobile:h-full tablet:h-full`}
    >   {/** for desktop */}
        <div className="flex flex-col w-full h-full justify-between pb-[1%] mobile:hidden tablet:hidden">
        <div className='w-full flex justify-center'>
        <h2 data-para-anim className="title-2 aeonik">
          <span>Our Advanced Endo Surgery Product Line</span>
        </h2>
      </div>
      <div className={styles.header} ref={headerRef}></div>
      <div className={styles.sliderSection}>
        <div className={styles.wheel} ref={wheelRef}>
          {productData.map((product, i) => (
            <div
              className={styles.wheelCard}
              key={i}
              ref={(el) => (cardsRef.current[i] = el)}
            >
              <ProductCard
                img={product.imgSrc}
                heading={product.heading}
              />
            </div>
          ))}
        </div>
      </div>
      <div className='w-full product-base-text flex justify-center'>
        <p data-para-anim className='aeonik font-light uppercase tracking-widest text-[2.2vw] text-center'>ADVASTAP Series</p>
      </div>

        </div>

        {/** for mobile */}
        <div className="hidden mobile:block tablet:block">
        <div className="w-full flex flex-col gap-[12vw] tablet:gap-[5vw]">
        <div className='w-full flex justify-center'>
        <h2  className="title-2 aeonik text-center px-[2vw] tablet:w-[80%]">
          <span data-para-anim >Our Advanced Endo Surgery Product Line</span>
        </h2>
      </div>
        <div className="w-full mobile:overflow-scroll mobile:mt-[5vw] mobile:fadeup mobile:block hidden mobile:pr-[5%] fadeUp tablet:overflow-scroll mobile:fadeup tablet:block tablet:pr-[5%] overflow-visible tablet:mt-0">
            <div
              
              className=" mobile:flex mobile:flex-nowrap mobile:w-fit mobile:gap-[5vw] mobile:h-fit tablet:flex tablet:flex-nowrap tablet:w-fit tablet:gap-[2vw] tablet:h-fit tablet:ml-[4vw] "
            >
               {productData.map((product, i) => (
            <div
              className="w-[85vw] h-[100vw] tablet:w-[40vw] tablet:h-[50vw]"
              key={i}
              
            >
              <ProductCard
                img={product.imgSrc}
                heading={product.heading}
                className={`${i==2?"text-white #ffffff ":""}`}
              />
            </div>
          ))}
             
             

            </div>
          </div>
          <div className='w-full product-base-text flex justify-center'>
        <p data-para-anim className='aeonik font-light uppercase tracking-widest text-[6vw] text-center tablet:text-[3vw]'>ADVASTAP Series</p>
      </div>

        </div>

        </div>
    </section>
  );
};

export default Product;
