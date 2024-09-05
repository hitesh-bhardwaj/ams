import React from 'react';
import Image from 'next/image';
import { fadeIn,imgAnim } from '../gsapAnimations';
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(useGSAP,ScrollTrigger)


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
  fadeIn()
  imgAnim()
 
  useGSAP(()=>{
    const tl = gsap.timeline({
      scrollTrigger:{
        trigger:".manufacturing-state-container",
        pin:true,
        
        start:"top top ",
        end:"+=4000 bottom",

        scrub:true,
      }
      
    })
    tl.to(".feature-container2",{
          yPercent:-124,
          ease:"power4.out",
          delay:-0.1
          
        })
        tl.to(".feature-container1",{
          scale:0.90,
          delay:-0.6,
          opacity:0
          
        })
        tl.to(".feature-container3",{
          yPercent:-248,
          ease:"power4.out",
          delay:-0.25

        })
        tl.to(".feature-container2",{
          scale:0.94,
          delay:-0.55,
          opacity:0  
        })
        tl.to(".feature-container4",{
          yPercent:-372,
          ease:"power4.out",
          delay:-0.2

        })
        tl.to(".feature-container3",{
          scale:0.97,
          delay:-0.55,
          opacity:0
        })
        tl.to(".feature-container5",{
          yPercent:-496,
          ease:"power4.out",
          delay:-0.2

        })
        tl.to(".feature-container4",{
          scale:0.99,
          delay:-0.55,
          opacity:0
        })
    
   
  })
  return (
    <section id='state' className='manufacturing-state-container pt-[8%] h-[100vh] overflow-hidden'>
      <div className='container-lg flex flex-col items-center justify-center gap-[8vw]'>
        
          <div
            
            className={`rounded-[45px] border-[1px] border-gray-200 h-[33vw] px-[4vw] py-[3vw] flex bg-white/50 feature-container1 `}
          >
            <div className='h-[27vw] w-[60vw] relative rounded-[50px] overflow-hidden'>
              <Image
                src={"/assets/manufacturing/state-1.png"}
                fill
                alt={`state-1`}
                className={'imageAnim'}
              />
            </div>

            <div className={`flex flex-col w-[50%] ml-[5%] items-left justify-center gap-[2vw]`}>
              <h2  className='text-[3vw] font-light aeonik text-[#111111] w-[100%] leading-[1.3]'>State Of The Art Excellence</h2>
              <p className='leading-[1.8] w-[99%] text-[#2A2A2A] font-light text-[1.15vw]'>
                <span >
                Crafted by the visionary Spanish architect Ricardo Bofill, the AMS facility sprawls over 10.5 acres. Phase I spans 1.5 Lac sq. ft., with Phase II and III expanding by an additional 1 Lac sq. ft. each. Embracing Gold standards in Green building principles, our facility embodies sustainability fused with operational brilliance.
                </span>
              </p>
            </div>
          </div>
          <div
            
            className={`rounded-[45px] border-[1px] border-gray-200 h-[33vw] px-[4vw] py-[3vw] flex bg-white/50 feature-container2 `}
          >
            <div className='h-[27vw] w-[60vw] relative rounded-[50px] overflow-hidden'>
              <Image
                src={"/assets/manufacturing/state-2.png"}
                fill
                alt={`state-1`}
                className={'imageAnim'}
              />
            </div>

            <div className={`flex flex-col w-[50%] ml-[5%] items-left justify-center gap-[2vw]`}>
              <h2  className='text-[3vw] font-light aeonik text-[#111111] w-[100%] leading-[1.3]'>Cultivating High Standards</h2>
              <p className='leading-[1.8] w-[99%] text-[#2A2A2A] font-light text-[1.15vw]'>
                <span >
                AMS leverages global partnerships for cutting-edge technology, ensuring uncompromising quality and innovation. Our LEAN manufacturing and Class C clean room maintain precision and efficiency.
                </span>
              </p>
            </div>
          </div>
          <div
            
            className={`rounded-[45px] border-[1px] border-gray-200 h-[33vw] px-[4vw] py-[3vw] flex bg-white/50 feature-container3 `}
          >
            <div className='h-[27vw] w-[60vw] relative rounded-[50px] overflow-hidden'>
              <Image
                src={"/assets/manufacturing/state-3.png"}
                fill
                alt={`state-1`}
                className={'imageAnim'}
              />
            </div>

            <div className={`flex flex-col w-[50%] ml-[5%] items-left justify-center gap-[2vw]`}>
              <h2  className='text-[3vw] font-light aeonik text-[#111111] w-[100%] leading-[1.3]'>Commitment to Quality</h2>
              <p className='leading-[1.8] w-[99%] text-[#2A2A2A] font-light text-[1.15vw]'>
                <span >
                Quality is our priority. We adhere to rigorous standards (Schedule M, L-1), backed by ISO 13485:2016 and CE certifications. Our advanced testing facilities ensure product safety and efficacy, reflecting our dedication to excellence.
                </span>
              </p>
            </div>
          </div>
          <div
            
            className={`rounded-[45px] border-[1px] border-gray-200 h-[33vw] px-[4vw] py-[3vw] flex bg-white/50 feature-container4 `}
          >
            <div className='h-[27vw] w-[60vw] relative rounded-[50px] overflow-hidden'>
              <Image
                src={"/assets/manufacturing/state-4.png"}
                fill
                alt={`state-1`}
                className={'imageAnim'}
              />
            </div>

            <div className={`flex flex-col w-[50%] ml-[5%] items-left justify-center gap-[2vw]`}>
              <h2  className='text-[3vw] font-light aeonik text-[#111111] w-[100%] leading-[1.3]'>AMS OEM Solutions</h2>
              <p className='leading-[1.8] w-[99%] text-[#2A2A2A] font-light text-[1.15vw]'>
                <span >
                AMS offers comprehensive OEM solutions tailored to meet diverse client needs. With our state-of-the-art facility and expertise in manufacturing medical devices, we provide flexible and innovative OEM partnerships. From design to delivery, AMS ensures quality and compliance, empowering partners to bring their healthcare innovations to market with confidence.
                </span>
              </p>
            </div>
          </div>

          <div
            
            className={`rounded-[45px] border-[1px] border-gray-200 h-[33vw] px-[4vw] py-[3vw] flex bg-white/50 feature-container5 `}
          >
            <div className='h-[27vw] w-[60vw] relative rounded-[50px] overflow-hidden'>
              <Image
                src={"/assets/manufacturing/state-5.png"}
                fill
                alt={`state-1`}
                className={'imageAnim'}
              />
            </div>

            <div className={`flex flex-col w-[50%] ml-[5%] items-left justify-center gap-[2vw]`}>
              <h2  className='text-[3vw] font-light aeonik text-[#111111] w-[100%] leading-[1.3]'>Logistical Precision</h2>
              <p className='leading-[1.8] w-[99%] text-[#2A2A2A] font-light text-[1.15vw]'>
                <span >
                AMS excels in optimizing our supply chain to deliver efficient solutions for both patients and healthcare organizations. Our state-of-the-art warehousing and logistics operations ensure intense dedication, precision, and safety through continuous improvement initiatives.
                </span>
              </p>
            </div>
          </div>
      
      </div>
    </section>
  );
};

export default State;
