/* eslint-disable react-hooks/rules-of-hooks */
import Image from 'next/image';
import { fadeIn, imgAnim, fadeUp , paraAnimation } from '../gsapAnimations';
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const stateSections = [
  {
    id: 1,
    imageSrc: "/assets/manufacturing/state-1.webp",
    title: "State Of The Art Excellence",
    description: "Crafted by the visionary Spanish architect Ricardo Bofill, the AMS facility sprawls over 10.5 acres. Phase I spans 1.5 Lac sq. ft., with Phase II and III expanding by an additional 1 Lac sq. ft. each. Embracing Gold standards in Green building principles, our facility embodies sustainability fused with operational brilliance.",
    reverse: false,
  },
  {
    id: 2,
    imageSrc: "/assets/manufacturing/state-2.webp",
    title: "Cultivating High Standards",
    description: "AMS leverages global partnerships for cutting-edge technology, ensuring uncompromising quality and innovation. Our LEAN manufacturing and Class C clean room maintain precision and efficiency.",
    reverse: true,
  },
  {
    id: 3,
    imageSrc: "/assets/manufacturing/state-3.webp",
    title: "Commitment to Quality",
    description: "Quality is our priority. We adhere to rigorous standards (Schedule M, L-1), backed by ISO 13485:2016 and CE certifications. Our advanced testing facilities ensure product safety and efficacy, reflecting our dedication to excellence.",
    reverse: false,
  },
  {
    id: 4,
    imageSrc: "/assets/manufacturing/state-4.webp",
    title: "AMS OEM Solutions",
    description: "AMS offers comprehensive OEM solutions tailored to meet diverse client needs. With our state-of-the-art facility and expertise in manufacturing medical devices, we provide flexible and innovative OEM partnerships. From design to delivery, AMS ensures quality and compliance, empowering partners to bring their healthcare innovations to market with confidence.",
    reverse: true,
  },
  {
    id: 5,
    imageSrc: "/assets/manufacturing/state-5.webp",
    title: "Logistical Precision",
    description: "AMS excels in optimizing our supply chain to deliver efficient solutions for both patients and healthcare organizations. Our state-of-the-art warehousing and logistics operations ensure intense dedication, precision, and safety through continuous improvement initiatives.",
    reverse: false,
  },
];

const State = () => {
  fadeIn();
  imgAnim();
  fadeUp();
  paraAnimation();
  

    if (globalThis.innerWidth >= 1024) {
      useGSAP(() => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: ".manufacturing-state-container",
            pin: true,
            start: "top top",
            end: "+=5500 bottom",
            scrub: true,
          },
          ease:"none"
        });

        tl.to(".feature-container2", {
          yPercent: -124,
          ease: "power4.out",
          delay: -0.1,
        })
          .to(".feature-container1", {
            scale: 0.90,
            delay: -0.6,
            opacity: 0,
          })
          .to(".feature-container3", {
            yPercent: -248,
            ease: "power4.out",
            delay: -0.25,
          })
          .to(".feature-container2", {
            scale: 0.94,
            delay: -0.4,
            opacity: 0,
          })
          .to(".feature-container4", {
            yPercent: -372,
            ease: "power4.out",
            delay: -0.2,
          })
          .to(".feature-container3", {
            scale: 0.97,
            delay: -0.5,
            opacity: 0,
          })
          .to(".feature-container5", {
            yPercent: -496,
            ease: "power4.out",
            delay: -0.2,
          })
          .to(".feature-container4", {
            scale: 0.99,
            delay: -0.4,
            opacity: 0,
          });
      });
    }
  

  return (
    <section id='state' className='manufacturing-state-container pt-[8%] h-[100vh] overflow-hidden tablet:h-full tablet:py-[10%] mobile:h-full mobile:py-[20%]'>
      <div className='container-lg flex flex-col items-center justify-center gap-[8vw] tablet:gap-[4vw]'>
        {stateSections.map((section, index) => (
          <div
            key={section.id}
            className={`rounded-[45px] border-[1px] border-gray-200 h-[33vw] px-[4vw] py-[3vw] flex justify-between ${section.reverse ? 'flex-row-reverse' : 'flex-row'} bg-white/50 feature-container${index + 1} tablet:flex-col tablet:h-[55vh] tablet:py-[5vw] tablet:rounded-[3vw] tablet:gap-[4vw] mobile:flex-col mobile:h-full mobile:rounded-[6vw] mobile:py-[4vw] mobile:pb-[20vw] fadeup`}
          >
            <div className='h-[27vw] w-[50vw] relative rounded-[50px] overflow-hidden tablet:h-[45vw] tablet:w-[85vw] tablet:rounded-[3vw] mobile:w-[85vw] mobile:h-[85vw] mobile:rounded-[6vw] fadeup'>
              <Image
                src={section.imageSrc}
                fill
                alt={section.title}
                className={'imageAnim'}
              />
            </div>

            <div className={`flex flex-col w-[50%] ml-[5%] items-left justify-center gap-[2vw] tablet:w-[90%] tablet:ml-0 mobile:w-full mobile:text-center mobile:ml-0 mobile:gap-[7vw] mobile:mt-[10vw] ${index%2==0?"":"ml-0"}`}>
              <h2 className={`text-[3vw] font-light aeonik text-[#111111] w-[100%] leading-[1.3] tablet:text-[5vw] mobile:text-[10vw] para-animation ${index%2==0?"":"w-[90%]"}`}>{section.title}</h2>
              <p className={`leading-[1.8] w-[99%] text-[#2A2A2A] font-light text-[1.15vw] tablet:text-[2vw] mobile:text-[4.5vw] mobile:w-full ${index%2==0?"":"w-[90%]"}`}>
                <span className='para-animation block'>{section.description}</span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default State;
