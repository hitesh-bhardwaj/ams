import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <section className={`hero-container dark`} id="hero">
      <div className="w-[100vw] h-[100vh] relative overflow-hidden tablet:h-[80vh]">
        <div className="absolute w-[100vw] h-[100vh] bg-white/40 top-0 left-0 z-[10]"></div>
        <div className="w-full h-full absolute tablet:h-full">
          <Image
            className="hero-img object-cover h-full w-full z-[1]"
            src="/assets/blogs/blog-detail1.png"
            alt="Hero Image"
            priority={true}
            width={1920}
            height={1080}
          />
        </div>
        <div className="px-[12%] relative mobile:px-[5%]">
          <div className="flex h-dvh w-full flex-col justify-center items-start tablet:h-[80vh] mobile:justify-start mobile:pt-[35vw]">
            <div className={`mobile:w-full  tablet:w-full z-[50]`}>
              <h1 className={`title-1  aeonik capitalize leading-[1.21] text-[#1A1a1A] mobile:text-center overflow-hidden flex flex-col w-[60%]`} >
                <span data-para-anim>
              Reimagining Health, Redefining Care
              </span>
              </h1>
              <p
                data-para-anim
                className=" text-[1.25vw] uppercase font-light text-[#1A1A1A] leading-[1.2] tracking-wide mobile:text-[4.6vw] mobile:tracking-widest  mobile:w-[80%] tablet:text-[2.5vw] tablet:tracking-widest tablet:max-w-full  mobile:text-center mobile:justify-center"
              >
                 Arab Health 2025
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;