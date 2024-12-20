import React from "react";
import Image from "next/image";
import LazyVideo from "../layoutComponents/LazyVideo";

const Hero = () => {

  return (
    <section className=" mb-[5%] hero-container mobile:mb-[15%]" id="hero">
      <div className="w-[100vw] h-[100vh] relative overflow-hidden tablet:h-[80vh]">
        <div className="w-screen h-[23.5vw] absolute bottom-[-10%] tablet:h-[30vh]">
          <Image
            className="hero-img absolute z-[2] object-contain"
            src="/assets/career/career-bg-hero.png"
            alt="Hero Image"
            priority={true}
            fill
          />
        </div>
        <div className="bg-white/60 absolute w-screen h-screen z-[1] top-0 left-0" />
        <LazyVideo
          poster={"/assets/home/career-poster.webp"}
          type="video/mp4"
          autoPlay
          loop
          videoSrc={"/assets/home/career.mp4"}
          className='w-full h-full object-cover left-0 top-0 absolute'
        />
        <div className="px-[12%] relative mobile:px-[5%] z-[10]">
          <div className="flex h-[90vh] w-full flex-col justify-center items-start tablet:h-[70vh] mobile:h-screen mobile:justify-start mobile:pt-[35vw]">
            <div className="w-full">
              <h1 className={`title-1 aeonik  leading-[1] tablet:w-full w-[80%] mobile:w-full mobile:text-center`} >
                <span
                  data-para-anim className={`leading-[1.3] overflow-hidden text-[#111111]`}>
                  Join Our Mission to Create a Healthier World
                </span>
              </h1>
              <p className={`max-w-[30vw] mt-[2vw] mb-[4vw] content-p mobile:max-w-[100%] tablet:max-w-[50vw] mobile:my-[7vw] mobile:text-center`}>
                <span data-para-anim className={`text-[#111111]`}>
                  Be a part of a team making a meaningful difference in healthcare.
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
