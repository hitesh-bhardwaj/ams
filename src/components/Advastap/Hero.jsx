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
        <div className="absolute inset-0 flex justify-between items-center p-[5vw]">
   
          <div className="text-white text-4xl font-bold">
            <h1 className='title-1 aeonik deop-shadow-lg leading-[1]'>
                <span className='leading-[1.3] overflow-hidden text-[#FFFFFF] w-[80%] mobile:w-full mobile:text-center '>
                ADVASTAP HD  
                </span>
            </h1>
            <p className=' max-w-[30vw]  mb-[4vw] content-p mobile:max-w-[100%] tablet:max-w-[50vw] mobile:my-[7vw] flex items-center justify-start '>
                <span className='text-[#FFFFFF] mobile:text-center uppercase tracking-widest'>
                Hemorrhoid stapler
                </span>
                <span className='w-[6vw] h-[1px] bg-white'>

                </span>

            </p>
            
          </div>

      
          <div className="w-[50%] h-[100%] relative">
            <Image
              src="/assets/advastap/advastap-hero.png" 
              alt="side-image"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
