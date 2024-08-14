import React from 'react';
import Image from 'next/image';

const stateSections = [
  {
    id: 1,
    imageSrc: "/assets/manufacturing/state-1.png",
    title: "State Of The Art Excellence",
    description: "Crafted by the visionary Spanish architect Ricardo Bofill, the AMS facility sprawls over 10.5 acres. Phase I spans 1.5 Lac sq. ft., with Phase II and III expanding by an additional 1 Lac sq. ft. each. Embracing Gold standards in Green building principles, our facility embodies sustainability fused with operational brilliance.",
    reverse: false,
  },
  {
    id: 2,
    imageSrc: "/assets/manufacturing/state-2.png",
    title: "Cultivating High Standards",
    description: "AMS leverages global partnerships for cutting-edge technology, ensuring uncompromising quality and innovation. Our LEAN manufacturing and Class C clean room maintain precision and efficiency.",
    reverse: true,
  },
  {
    id: 3,
    imageSrc: "/assets/manufacturing/state-3.png",
    title: "Commitment to Quality",
    description: "Quality is our priority. We adhere to rigorous standards (Schedule M, L-1), backed by ISO 13485:2016 and CE certifications. Our advanced testing facilities ensure product safety and efficacy, reflecting our dedication to excellence.",
    reverse: false,
  },
  {
    id: 4,
    imageSrc: "/assets/manufacturing/state-4.png",
    title: "AMS OEM Solutions",
    description: "AMS offers comprehensive OEM solutions tailored to meet diverse client needs. With our state-of-the-art facility and expertise in manufacturing medical devices, we provide flexible and innovative OEM partnerships. From design to delivery, AMS ensures quality and compliance, empowering partners to bring their healthcare innovations to market with confidence.",
    reverse: true,
  },
  {
    id: 5,
    imageSrc: "/assets/manufacturing/state-5.png",
    title: "Logistical Precision",
    description: "AMS excels in optimizing our supply chain to deliver efficient solutions for both patients and healthcare organizations. Our state-of-the-art warehousing and logistics operations ensure intense dedication, precision, and safety through continuous improvement initiatives.",
    reverse: false,
  },
];

const State = () => {
  return (
    <section id='state'>
      <div className='container-lg flex flex-col items-center justify-center mt-[15%] gap-[8vw]'>
        {stateSections.map((section) => (
          <div
            key={section.id}
            className={`rounded-[45px] border-[1px] border-gray-200 h-[33vw] px-[4vw] py-[3vw] flex bg-white/50 ${
              section.reverse ? 'flex-row-reverse' : ''
            }`}
          >
            <div className='h-[27vw] w-[60vw] relative rounded-[50px] overflow-hidden'>
              <Image
                src={section.imageSrc}
                fill
                alt={`state-${section.id}`}
                className={section.id === 5 ? 'rounded-[30px]' : ''}
              />
            </div>

            <div className={`flex flex-col w-[50%] ${section.reverse ? 'mr-[5%]' : 'ml-[5%]'} items-left justify-center gap-[2vw]`}>
              <h2 className='text-[3vw] font-light aeonik text-[#111111] w-[100%] leading-[1.3]'>{section.title}</h2>
              <p className='leading-[1.8] w-[99%] text-[#2A2A2A] font-light text-[1.15vw]'>
                {section.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default State;
