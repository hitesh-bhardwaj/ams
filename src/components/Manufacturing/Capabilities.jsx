import React from 'react';
import Image from 'next/image';
import { paraAnim } from '../gsapAnimations';

const capabilitiesData = [
  {
    id: 1,
    title: 'Engineering',
    imageSrc: '/assets/manufacturing/engineering.svg',
    imageSize: { width: '5vw', height: '8vw', mobileWidth: '40vw', mobileHeight: '40vw' , tabletWidth:'40vw' , tabletHeight:'40vw' },
  },
  {
    id: 2,
    title: 'Technology',
    imageSrc: '/assets/manufacturing/technology.svg',
    imageSize: { width: '6vw', height: '10vw', mobileWidth: '30vw', mobileHeight: '30vw',tabletWidth:'40vw' , tabletHeight:'40vw' },
  },
  {
    id: 3,
    title: 'Innovation',
    imageSrc: '/assets/manufacturing/innovation.svg',
    imageSize: { width: '6vw', height: '10vw', mobileWidth: '30vw', mobileHeight: '30vw',tabletWidth:'40vw' , tabletHeight:'40vw' },
  }
];

const Capabilities = () => {
  paraAnim();

  return (
    <>
      <section id='capabilities'>
        <div className='container-lg flex flex-col items-center justify-center py-[7%] mobile:py-[15%]'>
          <div>
            <h2
data-para-anim className="text-[6vw] mobile:text-[12vw] font-light aeonik mobile:mb-[10vw] ">
              <span>Our Capabilities</span>
            </h2>
          </div>
          <div className='mt-[5%] flex justify-between w-full px-[5%] mobile:flex-col mobile:gap-[25vw] tablet:flex-wrap tablet:px-[2%]'>
            {/* Mapping through capabilitiesData */}
            {capabilitiesData.map((capability) => (
              <div key={capability.id} className={`capability-card group fadeUp ${capability.id==3?"tablet:w-full tablet:flex tablet:justify-center tablet:my-[10vw]":""}`}>
                <div className='h-[23vw] w-[21vw] bg-white/50 absolute  rounded-[2.5vw] mobile:w-[80vw] mobile:h-[80vw] tablet:w-[40vw] tablet:h-[40vw]'></div>
                <div className='h-[22vw] w-[20vw] flex flex-col items-center justify-center mobile:w-[80vw] mobile:h-[80vw] tablet:w-[40vw] tablet:h-[40vw]'>
                  <div className={`h-[9vw] w-[9vw] relative top-[-10%] group-hover:scale-[1.2] transition-all duration-300 ease-in-out mobile:h-[30vw] mobile:w-[30vw] tablet:h-[15vw] tablet:w-[15vw]`}>
                    <Image
                      src={capability.imageSrc}
                      fill
                      alt={`capability-${capability.id}`}
                      className='object-contain'
                    />
                  </div>
                  <div className='mt-[12vw] absolute mobile:mt-[50vw] tablet:mt-[20vw]'>
                    <p className='text-[1.5vw] font-light mobile:text-[7vw] tablet:text-[4vw]'>{capability.title}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Capabilities;
