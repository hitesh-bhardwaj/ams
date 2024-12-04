import React from 'react';
import PrimaryButton from "../Button/PrimaryButton";

const NextGeneration = () => {

  return (
    <section className='mobile:pb-[10%] py-[5%]' id='next-generation'>
      <div className='container-lg fadeUp group relative tablet:mb-[10%] '>
        <img 
          src="/assets/advacryl/needle-bg.png" 
          alt="Background" 
          className='absolute inset-0 w-full h-full object-cover rounded-[60px] tablet:rounded-[3vw] mobile:rounded-[7vw] z-0'
        />

        
        <div className='w-full h-full relative px-[3%] py-[10%] pb-[8%] flex justify-center gap-[4vw] flex-col  items-center  z-10 mobile:gap-[15vw] mobile:pb-[30%]'>
          <div className="tablet:w-full tablet:flex tablet:justify-center mobile:w-[75vw]">
            <h2 data-para-anim className="title-2 aeonik text-center z-10 ">
              The Next Generation of Needle Technology
            </h2>
          </div>
          <div className='fadeUp z-10'>
            <PrimaryButton link="#" btnText="See More" />
          </div>
        </div>

      
        <div className='absolute inset-0 bg-white/50  group-hover:shadow-xl duration-300 rounded-[60px] tablet:rounded-[3vw] mobile:rounded-[7vw] z-5'></div>
      </div>
    </section>
  );
};

export default NextGeneration;
