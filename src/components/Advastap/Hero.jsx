import React from 'react';
import Image from 'next/image';

const Hero = () => {
  return (
    <section>
      <div className="w-screen h-screen relative">
        <Image
          src="/assets/advastap/advastap-hero-bg.png"
          fill
          alt="advastap-hero"
          className="object-cover absolute"
        />
        <div className="absolute top-0 right-0 bottom-0 left-0 flex justify-between items-center pl-[5vw]">
          <div className="text-white text-4xl font-bold w-[50%]">
            <h1 className="title-1 aeonik drop-shadow-lg leading-[1]">
              <span className="leading-[1.3] overflow-hidden text-[#FFFFFF] w-[80%] mobile:w-full mobile:text-center">
                ADVASTAP HD
              </span>
            </h1>
            <p className="max-w-[30vw] mb-[4vw] content-p mobile:max-w-[100%] tablet:max-w-[50vw] mobile:my-[7vw] flex items-center justify-start">
              <span className="text-[#FFFFFF] mobile:text-center uppercase tracking-widest">
                Hemorrhoid stapler
              </span>
              <span className="w-[6vw] h-[1px] bg-white ml-2"></span>
            </p>
          </div>

          <div className="w-[80%] h-full relative flex justify-end right-0">
            <div className="w-full h-full">
              <Image
                src="/assets/advastap/advastap-hero.png"
                alt="side-image"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
