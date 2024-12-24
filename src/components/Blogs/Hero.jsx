import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <section className={`hero-container dark`} id="hero">
      <div className="w-[100vw] h-[100vh] relative overflow-hidden tablet:h-[80vh]">
        <div className="w-full h-full absolute tablet:h-full">
          <Image
            className="hero-img object-cover h-full w-full"
            src="/assets/blogs/blogs-hero-bg.png"
            alt="Hero Image"
            priority={true}
            width={1920}
            height={1080}
          />
        </div>
        <div className="px-[12%] relative mobile:px-[5%]">
          <div className="flex h-dvh w-full flex-col justify-center items-start tablet:h-[80vh] mobile:justify-start mobile:pt-[35vw]">
            <div className={`w-[90%] mobile:w-full  tablet:w-full`}>
              <h1 className={`title-1 w-full aeonik capitalize leading-[1.21] text-[#FFFFFF] mobile:text-center overflow-hidden flex flex-col`} >
                <span data-para-anim className="font-normal">
                NEWSROOM
                </span>
                <span data-para-anim>
                LATEST STORIES & EVENTS 
                </span>
              </h1>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;