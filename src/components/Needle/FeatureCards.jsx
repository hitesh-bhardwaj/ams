import Image from 'next/image';
import React from 'react';

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
  return (
    <>
      <section id="feature-cards" className="pb-[7%]">
        <div className="container-lg flex flex-col h-full w-full items-center gap-[5vw] justify-between">
          <h2 data-para-anim className="aeonik title-2">Unmatched Precision with AMS Needles</h2>
          <div className="w-full flex justify-between">
            {cardData.map((card, index) => (
              <div
                key={index}
                className="w-[20vw] h-[25vw] relative border border-gray-200 rounded-[2vw] overflow-hidden bg-white group hover:w-[20vw] hover:h-[30vw] transition-all duration-700 origin-center fadeUp"
              >
                <div className="w-full h-full relative px-[2.5vw] py-[2vw]">
                  <h4 data-para-anim className="text-[1.8vw] aeonik font-light">{card.title}</h4>
                  <p data-para-anim className="text-[#143CA3] text-[1.2vw]">{card.description}</p>
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
      </section>
    </>
  );
}

export default FeatureCards;
