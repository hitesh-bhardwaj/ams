import Image from 'next/image';
import React, { useState } from 'react';

const cardData = [
  {
    title: 'Sharpness',
    description: 'Exceptional Penetration.',
    detailedDescription: `Advanced chamfering diminishes chance for suture fracturing at the swage, by rounding off the sharp edges of the barrel in the swage area of the needle. This attention to detail elevates the performance of our needles, ensuring superior quality in every procedure.`,
    imageSrc: '/assets/needle/Sharpness.webp',
  },
  {
    title: 'Security',
    description: 'Superior Security.',
    detailedDescription: `Advanced chamfering diminishes chance for suture fracturing at the swage, by rounding off the sharp edges of the barrel in the swage area of the needle. This attention to detail elevates the performance of our needles, ensuring superior quality in every procedure.`,
    imageSrc: '/assets/needle/Security.webp',
  },
  {
    title: 'Strength',
    description: 'Supreme Durability.',
    detailedDescription: `With just the right balance of flexibility, our needles allow for easy handling and control during procedures, reducing hand fatigue and improving outcomes.`,
    imageSrc: '/assets/needle/Strength.webp',
  },
  {
    title: 'Dark Needle',
    description: 'Non-reflective.',
    detailedDescription: `The precision-engineered design ensures every movement is executed with the utmost accuracy, enhancing the outcome of delicate procedures.`,
    imageSrc: '/assets/needle/Dark-Needle.webp',
  },
];

function FeatureCards() {
  const [activeMobileCardIndex, setActiveMobileCardIndex] = useState(null);

  const handleMobileCardClick = (index) => {
    setActiveMobileCardIndex(index === activeMobileCardIndex ? null : index);
  };
  return (
    <>
      <section id="feature-cards" className="pb-[7%] tablet:pb-0">
        <div className="container-lg flex flex-col h-full w-full items-center gap-[5vw] justify-between mobile:hidden tablet:hidden">
          <h2 data-para-anim className="aeonik title-2">Unmatched Precision with AMS Needles</h2>
          <div className="w-full flex justify-between">
            {cardData.map((card, index) => (
              <div
                key={index}
                className="w-[20vw] h-[25vw] relative border border-gray-200 rounded-[2vw] overflow-hidden glassmorphism group transition-all duration-700 origin-center fadeUp"
              >
                <div className="w-full h-full relative px-[2.5vw] py-[2vw]">
                  <h4 data-para-anim className="text-[1.8vw] aeonik font-light group-hover:hidden">{card.title}</h4>
                  <p data-para-anim className="text-[#143CA3] text-[1.2vw] group-hover:hidden">{card.description}</p>
                  <div className={`w-[20vw] h-[25vw] absolute  ${index>=1?"top-[30%] left-[5%]":"top-0 left-0"}`}>
                    <Image src={card.imageSrc} alt={`${card.title}-image`} className={`${index<=1?"object-cover":"object-contain"}`} fill />
                  </div>
                  <div className="absolute w-full h-full z-[5] glassmorphism top-0 left-0 rounded-[2vw] translate-y-[100%] origin-bottom group-hover:translate-y-[0] transition-all duration-500 ease-out">
                    <div className="w-full h-full flex flex-col gap-[1vw] px-[3vw] py-[2vw]">
                      <h4 data-para-anim className="text-[1.8vw] aeonik font-light">{card.title}</h4>
                      <div className="w-[3vw] h-[1.2px] bg-[#143CA3]"></div>
                      <p data-para-anim className="text-[1vw] font-light">{card.detailedDescription}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="hidden mobile:block tablet:block py-[10%]">
        <div className="w-full flex flex-col gap-[12vw] tablet:gap-[8vw]">
        <div className='w-full flex justify-center'>
        <h2  className="title-2 aeonik text-center px-[2vw] tablet:w-[80%] mobile:w-[95%]">
          <span data-para-anim >Unmatched Precision with AMS Needles</span>
        </h2>
      </div>
        <div className="w-full mobile:overflow-scroll mobile:mt-[5vw] mobile:fadeup mobile:block hidden mobile:pr-[5%] fadeUp tablet:overflow-scroll mobile:fadeup tablet:block tablet:pr-[5%] overflow-visible tablet:mt-0 ">
            <div
              
              className=" mobile:flex mobile:flex-nowrap mobile:w-fit mobile:gap-[5vw] mobile:ml-[6vw] mobile:h-fit tablet:flex tablet:flex-nowrap tablet:w-fit tablet:gap-[2vw] tablet:h-fit tablet:ml-[4vw] "
            >
              
            
            
               {cardData.map((card, index) => (
              <div
                key={index}
                onClick={() => handleMobileCardClick(index)}
                className="w-[80vw] h-[100vw] relative border border-gray-200 rounded-[6vw] overflow-hidden glassmorphism group transition-all duration-700 origin-center fadeUp tablet:w-[50vw] tablet:h-[60vw]"
              >
                <div className="w-full h-full relative px-[7vw] py-[5vw] tablet:px-[4vw]">
                  <h4 data-para-anim className={`text-[8vw] aeonik font-light tablet:text-[5vw] ${
                        activeMobileCardIndex === index ? 'hidden' : ''
                      }`}>{card.title}</h4>
                  <p data-para-anim className={`text-[#143CA3] text-[5vw] font-light tablet:text-[3vw] ${
                        activeMobileCardIndex === index ? 'hidden' : ''
                      }`}>{card.description}</p>
                  <div className={`w-[80vw] h-full absolute tablet:w-[50vw] ${index>=1?"top-[20%] left-[5%]":"top-0 left-0"}`}>
                    <Image src={card.imageSrc} alt={`${card.title}-image`} className={`${index<=1?"object-cover":"object-contain"}`} fill />
                  </div>
                  <div className="absolute w-full h-full z-[5] glassmorphism top-0 left-0 rounded-[6vw] translate-y-[100%] origin-bottom group-hover:translate-y-[0] transition-all duration-500 ease-out">
                    <div className="w-full h-full flex flex-col gap-[4vw] px-[7vw] py-[5vw] tablet:px-[4vw]">
                      <h4 data-para-anim className="text-[8vw] aeonik font-light tablet:text-[5vw]">{card.title}</h4>
                      <div className="w-[15vw] h-[1.2px] bg-[#143CA3] "></div>
                      <p data-para-anim className="text-[4.2vw] font-light tablet:text-[2.5vw]">{card.detailedDescription}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            
            
         
             
             

            </div>
          </div>
          

        </div>

        </div>
      </section>
    </>
  );
}

export default FeatureCards;
