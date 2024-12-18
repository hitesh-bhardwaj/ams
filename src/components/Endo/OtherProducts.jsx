/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

import styles from "@/styles/endocard.module.css"; // Import the module CSS
import Link from "next/link";
import Image from "next/image";
import { Media } from "../media";

gsap.registerPlugin(ScrollTrigger);

const ProductCard = ({ img, heading, link, text }) => {
  return (
    <Link href={link} className="block w-full h-full group">
      <div className={`h-full w-full bg-white flex flex-col-reverse rounded-[1.5vw] items-center justify-between single relative bg-white/70 group-hover:bg-white group-hover:shadow-xl duration-500 mobile:w-[85vw] mobile:h-[100vw] tablet:w-[40vw] tablet:h-[50vw]`}>
        <div className="w-[43vw] absolute top-[-6vw] mobile:w-[120vw] tablet:top-[10%] mobile:top-[0%]">
          <Image src={img} alt={heading} className="object-contain w-full pointer-events-none group-hover:scale-[1.2] group-hover:-translate-y-[5%] transition-all duration-500" width={600} height={500} priority={false} />
        </div>
        <div className="h-1/2 flex flex-col items-center justify-center mobile:h-full mobile:justify-end mobile:pb-[10%]">
          <h2 className="text-center font-extralight text-[1.8vw] uppercase mobile:text-[6vw] tablet:text-[3vw]">
            {heading}
          </h2>
          <p className="text-[1.15vw] tablet:text-lg mobile:text-lg font-extralight">{text}</p>
        </div>
      </div>
    </Link>
  );
};

const OtherProduct = () => {
  const sliderContainer = useRef(null);
  const wheelRef = useRef(null);
  const cardsRef = useRef([]);
  const productData = [
    {
      imgSrc: "/assets/endo/other-product1.png",
      heading: "Advastap LC ii",
      text: '2-Row Linear Cutter',
      link: "/advastaplc"
    },
    {
      imgSrc: "/assets/endo/other-product2.png",
      heading: "Advastap HD II",
      text: '2-Row Hemorrhoid Stapler',
      link: "/advastaphd"
    },
    {
      imgSrc: "/assets/endo/other-product3.png",
      heading: "Advastap",
      text: 'Skin Stapler',
      link: "/skinstapler"
    },
    {
      imgSrc: "/assets/endo/other-product4.png",
      heading: "ADVACLIP",
      text: 'Titanium Ligation Clip',
      link: "/#"
    },    
  ];

  if (globalThis.innerWidth < 1024) {

  }
  else {
    useEffect(() => {
      const ctx = gsap.context(() => {
        const wheel = wheelRef.current;
        const images = gsap.utils.toArray(`.${styles.wheelCard}`);

        const setup = () => {
          const radius = wheel.offsetWidth / 1.1;
          const center = wheel.offsetWidth / 2;
          const total = images.length;
          const slice = (0.39 * Math.PI) / total;

          images.forEach((item, i) => {
            const angle = i * slice;
            const x = center + radius * Math.sin(angle);
            const y = center - radius * Math.cos(angle);

            gsap.set(item, {
              rotation: angle + "_rad",
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
          rotate: () => -52.5,
          ease: "none",
          duration: images.length,
          scrollTrigger: {
            trigger: sliderContainer.current,
            start: "top top",
            end: "+=1000 top",
            pin: true,
            scrub: 0.25,
            invalidateOnRefresh: true,
          },
        });
        return () => {
          window.removeEventListener("resize", setup);
        };
      }, sliderContainer);
      return () => ctx.revert();
    }, []);
  }

  return (
    <section
      id="products"
      ref={sliderContainer}
      className={`relative h-[100vh] bg-white/25 ${styles.sliderContainer} overflow-x-hidden mobile:h-full tablet:h-full pb-[5%] mobile:py-[15%]`}
    >   {/** for desktop */}

      <Media greaterThan="tablet">
        <div className="flex flex-col w-full h-screen items-center justify-end pb-[4%]">
          <div className={`${styles.sliderSection} !top-[65vw]`}>
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
                    link={product.link}
                    text={product.text}
                  />
                </div>
              ))}
            </div>
          </div>
          <div className='w-full product-base-text flex justify-center'>
            <p data-para-anim className='aeonik font-light uppercase tracking-widest text-[2.2vw] text-center'>Other Solutions</p>
          </div>
        </div>
      </Media>

      {/** for mobile */}
      <Media lessThan="desktop">
        <div className="hidden mobile:block tablet:block">
          <div className="w-full flex flex-col gap-[10vw] tablet:gap-[5vw]">
            <div className="w-full mobile:mt-[5vw] mobile:fadeUp mobile:block hidden fadeUp tablet:overflow-scroll mobile:fadeUp tablet:block tablet:pr-[5%] overflow-visible tablet:mt-0 ">
              <div className=" mobile:flex mobile:flex-col mobile:w-full mobile:items-center mobile:gap-[12vw] mobile:h-fit tablet:flex tablet:flex-nowrap tablet:w-fit tablet:gap-[2vw] tablet:h-fit tablet:ml-[4vw]">
                {productData.map((product, i) => (
                  <div
                    className="w-[85vw] h-[100vw] tablet:w-[40vw] tablet:h-[50vw] fadeUp"
                    key={i}
                  >
                    <ProductCard
                      img={product.imgSrc}
                      heading={product.heading}
                      link={product.link}
                      text={product.text}
                      className={`${i == 2 ? "text-white #ffffff " : ""}`}
                    />
                  </div>
                ))}
              </div>
            </div>
            <div className='w-full product-base-text flex justify-center'>
              <p data-para-anim className='aeonik font-light uppercase tracking-widest text-[6vw] text-center tablet:text-[3vw]'>Other Solutions</p>
            </div>
          </div>
        </div>
      </Media>
    </section>
  );
};

export default OtherProduct;
