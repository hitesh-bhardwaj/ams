import React, { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

export default function State() {
  useEffect(() => {
    if(globalThis.innerWidth>=1024){
      const totalContentElements = document.querySelectorAll(".content--card");
      totalContentElements.forEach((el) => {

        gsap.timeline({
            scrollTrigger: {
                trigger: el,
                start: 'center center',
                end: '+=100%',
                scrub: true,
            }
        })
        .to(el, {
            ease: 'none',
            scale: 0.8,
            opacity: 0,
            yPercent:130 
        }, 0);
  
    });
    }
  }, []);

  return (
    <section id="state" className="main py-[7%] mobile:py-[15%]">
      <div className="wrap flex flex-col gap-[10vw] mobile:gap-[10vw] items-center w-full tablet:gap-[5vw] ">
        <div className="content--card w-[90vw]">
          <div
            className={`rounded-[45px] border-[1px] border-gray-200   px-[4vw] py-[3vw] flex justify-between items-center bg-white/50 tablet:flex-col tablet:h-[65vh] tablet:py-[5vw] tablet:rounded-[4vw] tablet:justify-start tablet:gap-[4vw] mobile:flex-col mobile:h-auto mobile:rounded-[9vw] mobile:py-[4vw] mobile:pb-[20vw] fadeUp`}
          >
            <div className="h-[27vw] w-[46.5vw] relative rounded-[2.5vw] overflow-hidden tablet:h-[50vw] tablet:w-[82vw] tablet:rounded-[3vw] mobile:w-[82vw] mobile:h-[85vw] mobile:rounded-[6vw]">
              <Image
                src="/assets/manufacturing/state-1.png"
                fill
                alt="state-1"
                className={"imageAnim object-cover"}
              />
            </div>

            <div
              className={`flex flex-col w-[40%] ml-[5%] text-start items-left justify-center gap-[2vw] tablet:w-[90%] tablet:ml-[1vw] mobile:w-full mobile:text-center mobile:ml-0 mobile:gap-[7vw] mobile:mt-[10vw] `}
            >
              <h2
data-para-anim
                className={`text-[3vw] font-light aeonik  text-[#111111] w-[100%] leading-[1.3] tablet:text-[5vw] mobile:text-[10vw] para-animation`}
              >
               State of the Art Excellence
              </h2>
              <p 
                className={`leading-[1.8] w-full text-[#2A2A2A] font-light text-[1.15vw] tablet:text-[2vw] mobile:text-[4.5vw] mobile:w-full`}
              >
                <span data-para-anim className="para-animation block">
                Designed by the visionary Spanish architect Ricardo Bofill, the AMS campus is a testament to the bold vision and ingenuity of modern architecture, spanning 250,000 sq. ft. across 10.5 acres. This iconic MedTech hub stands as a beacon of excellence, combining form and function. It merges cutting-edge design with a groundbreaking blueprint that embodies AMS&apos;s commitment to healthcare innovation. A symbol of ambition, this campus is not just a facility—it is a landmark for medical, technological, and educational advancement, shaping the future of healthcare.
                </span>
              </p>
            </div>
          </div>
        </div>
        <div className="content--card w-[90vw]">
        <div
            className={`rounded-[45px] items-center border-[1px] border-gray-200  px-[4vw] py-[3vw] flex gap-[4vw] flex-row-reverse justify-between bg-white/50 tablet:flex-col tablet:h-[65vh] tablet:py-[5vw] tablet:rounded-[4vw] tablet:justify-start tablet:gap-[4vw] mobile:flex-col mobile:h-auto mobile:rounded-[9vw] mobile:py-[4vw] mobile:pb-[20vw] fadeUp`}
          >
            <div className="h-[27vw] w-[46.5vw] relative rounded-[2.5vw] overflow-hidden tablet:h-[50vw] tablet:w-[82vw] tablet:rounded-[3vw] mobile:w-[82vw] mobile:h-[85vw] mobile:rounded-[6vw] fadeup">
              <Image
                src="/assets/manufacturing/state-2.png"
                fill
                alt="state-2"
                className={"imageAnim object-cover"}
              />
            </div>

            <div
              className={`flex flex-col w-[40%]  items-left  text-start  justify-center gap-[2vw] tablet:w-[90%] tablet:ml-[1vw] mobile:w-full mobile:text-center mobile:ml-0 mobile:gap-[7vw] mobile:mt-[10vw] `}
            >
              <h2
data-para-anim
                className={`text-[3vw] font-light aeonik text-[#111111] w-[100%] leading-[1.3] tablet:text-[5vw] mobile:text-[10vw] para-animation`}
              >
                Cultivating High Standards
              </h2>
              <p
                className={`leading-[1.8] w-full text-[#2A2A2A] font-light  text-[1.15vw] tablet:text-[2vw] mobile:text-[4.5vw] mobile:w-full`}
              >
                <span data-para-anim className="para-animation block">
                AMS&apos;s expansive clean rooms are built to surpass industry standards, with a focus on reducing bio burden and maintaining impeccable cleanliness. Utilizing lean methodologies, including unidirectional material flow and precise man-material movement, we ensure unmatched efficiency and rigorous quality control. Our adoption of the visual factory concept enhances productivity, promotes agility, and reinforces our commitment to patient safety and product reliability.
                </span>
              </p>
            </div>
          </div>
        </div>
        <div className="content--card w-[90vw]">
        <div
            className={`rounded-[45px] items-center border-[1px] border-gray-200  px-[4vw] py-[3vw] flex justify-between bg-white/50 tablet:flex-col tablet:h-[65vh] tablet:py-[5vw] tablet:rounded-[4vw] tablet:justify-start tablet:gap-[4vw] mobile:flex-col mobile:h-auto mobile:rounded-[9vw] mobile:py-[4vw] mobile:pb-[20vw] fadeUp`}
          >
            <div className="h-[27vw] w-[46.5vw] relative rounded-[2.5vw] overflow-hidden tablet:h-[50vw] tablet:w-[82vw] tablet:rounded-[3vw] mobile:w-[82vw] mobile:h-[85vw] mobile:rounded-[6vw] fadeup">
              <Image
                src="/assets/manufacturing/state-3.png"
                fill
                alt="state-3"
                className={"imageAnim object-cover"}
              />
            </div>

            <div
              className={`flex flex-col  text-start  w-[40%] ml-[5%] items-left justify-center gap-[2vw] tablet:w-[90%] tablet:ml-[1vw] mobile:w-full mobile:text-center mobile:ml-0 mobile:gap-[7vw] mobile:mt-[10vw] `}
            >
              <h2
data-para-anim
                className={`text-[3vw]  font-light aeonik text-[#111111] w-[100%] leading-[1.3] tablet:text-[5vw] mobile:text-[10vw] para-animation`}
              >
                Commitment to Quality
              </h2>
              <p 
                className={`leading-[1.8]  w-full text-[#2A2A2A] font-light text-[1.15vw] tablet:text-[2vw] mobile:text-[4.5vw] mobile:w-full`}
              >
                <span data-para-anim className="para-animation block">
                At AMS, our unwavering commitment to quality is at the heart of every product we manufacture. We uphold some of the most stringent testing standards in the industry, building a culture that constantly strives to exceed expectations and elevate protocols. Our in-house QA & RA center, equipped with cutting-edge equipment, and a world-class microbiology lab enable us to perform comprehensive, precise testing at every stage. With meticulous planning, robust control functions, and an unwavering focus on continuous improvement, we ensure that every product meets the highest standards.
                </span>
              </p>
            </div>
          </div>
        </div>
        <div className="content--card w-[90vw]">
        <div
            className={`rounded-[45px] border-[1px] items-center border-gray-200  px-[4vw] py-[3vw] flex flex-row-reverse gap-[4vw] justify-between bg-white/50 tablet:flex-col tablet:h-[65vh] tablet:py-[5vw] tablet:rounded-[4vw] tablet:justify-start tablet:gap-[4vw] mobile:flex-col mobile:h-auto mobile:rounded-[9vw] mobile:py-[4vw] mobile:pb-[20vw] fadeup`}
          >
            <div className="h-[27vw] w-[46.5vw] relative rounded-[2.5vw] overflow-hidden tablet:h-[50vw] tablet:w-[82vw] tablet:rounded-[3vw] mobile:w-[82vw] mobile:h-[85vw] mobile:rounded-[6vw] fadeup">
              <Image
                src="/assets/manufacturing/state-4.png"
                fill
                alt="state-4"
                className={"imageAnim object-cover"}
              />
            </div>

            <div
              className={`flex flex-col w-[40%] items-left  text-start  justify-center gap-[2vw] tablet:w-[90%] tablet:ml-[1vw] mobile:w-full mobile:text-center mobile:ml-0 mobile:gap-[7vw] mobile:mt-[10vw] `}
            >
              <h2
data-para-anim
                className={`text-[3vw]  font-light aeonik text-[#111111] w-[100%] leading-[1.3] tablet:text-[5vw] mobile:text-[10vw] para-animation`}
              >
               Logistical Precision
              </h2>
              <p
                className={`leading-[1.8]  w-full text-[#2A2A2A] font-light text-[1.15vw] tablet:text-[2vw] mobile:text-[4.5vw] mobile:w-full`}
              >
                <span data-para-anim className="para-animation block">
                At AMS, patients remain at the core of our supply chain strategy, driving the creation of optimal and efficient channels that benefit both patients and healthcare organizations. Our advanced distribution center serves as a pivotal element, integrating state-of-the-art warehousing with streamlined logistics to deliver unmatched precision and reliability. From meticulous inventory management to timely deliveries, AMS exemplifies logistical excellence, ensuring seamless operations that consistently support patient care worldwide.
                </span>
              </p>
            </div>
          </div>
        </div>
        <div className="w-[90vw]">
        <div
            className={`rounded-[45px] border-[1px] items-center border-gray-200  p-[5vw] flex justify-between bg-white/50 tablet:flex-col tablet:h-[65vh] tablet:py-[5vw] tablet:rounded-[4vw] tablet:justify-start tablet:gap-[4vw] mobile:flex-col mobile:h-auto mobile:rounded-[9vw] mobile:py-[4vw] mobile:pb-[20vw] fadeup`}
          >
            <div className="h-[27vw] w-[46.5vw] relative rounded-[2.5vw] overflow-hidden tablet:h-[50vw] tablet:w-[82vw] tablet:rounded-[3vw] mobile:w-[82vw] mobile:h-[85vw] mobile:rounded-[6vw] fadeup">
              <Image
                src="/assets/manufacturing/state-5.png"
                fill
                alt="state-5"
                className={"imageAnim object-cover"}
              />
            </div>

            <div
              className={`flex flex-col w-[40%]  text-start  ml-[5%] items-left justify-center gap-[2vw] tablet:w-[90%] tablet:ml-[1vw] mobile:w-full mobile:text-center mobile:ml-0 mobile:gap-[7vw] mobile:mt-[10vw] `}
            >
              <h2
data-para-anim
                className={`text-[3vw]  font-light aeonik text-[#111111] w-[100%] leading-[1.3] tablet:text-[5vw] mobile:text-[10vw] para-animation`}
              >
              Green Manufacturing
              </h2>
              <p 
                className={`leading-[1.8]  w-[99%] text-[#2A2A2A] font-light text-[1.15vw] tablet:text-[2vw] mobile:text-[4.5vw] mobile:w-full`}
              >
                <span data-para-anim className="para-animation block">
                AMS operates a LEED-certified facility dedicated to sustainable manufacturing. Our commitment to environmental stewardship is reflected in our energy-efficient operations, responsible waste management, wastewater recycling, and the use of solar electricity. These practices underscore our dedication to minimizing our environmental footprint while advancing medical technology.
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
