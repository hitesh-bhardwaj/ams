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
            className={`rounded-[45px] border-[1px] border-gray-200  h-[38vw] px-[4vw] py-[3vw] flex justify-between bg-white/50 tablet:flex-col tablet:h-[65vh] tablet:py-[5vw] tablet:rounded-[4vw] tablet:justify-start tablet:gap-[4vw] mobile:flex-col mobile:h-auto mobile:rounded-[9vw] mobile:py-[4vw] mobile:pb-[20vw] fadeUp`}
          >
            <div className="h-[32vw] w-[60vw] relative rounded-[50px] overflow-hidden tablet:h-[50vw] tablet:w-[82vw] tablet:rounded-[3vw] mobile:w-[82vw] mobile:h-[85vw] mobile:rounded-[6vw]">
              <Image
                src="/assets/manufacturing/state-1.webp"
                fill
                alt="state-1"
                className={"imageAnim object-cover"}
              />
            </div>

            <div
              className={`flex flex-col w-[50%] ml-[5%] text-start items-left justify-center gap-[2vw] tablet:w-[90%] tablet:ml-[1vw] mobile:w-full mobile:text-center mobile:ml-0 mobile:gap-[7vw] mobile:mt-[10vw] `}
            >
              <h2
data-para-anim
                className={`text-[3vw] font-light aeonik  text-[#111111] w-[100%] leading-[1.3] tablet:text-[5vw] mobile:text-[10vw] para-animation`}
              >
                State Of The Art Excellence
              </h2>
              <p 
                className={`leading-[1.8] w-[99%] text-[#2A2A2A] font-light text-[1.15vw] tablet:text-[2vw] mobile:text-[4.5vw] mobile:w-full`}
              >
                <span data-para-anim className="para-animation block">
                  Crafted by the visionary Spanish architect Ricardo Bofill, the
                  AMS facility sprawls over 10.5 acres. Phase I spans 1.5 Lac
                  sq. ft., with Phase II and III expanding by an additional 1
                  Lac sq. ft. each. Embracing Gold standards in Green building
                  principles, our facility embodies sustainability fused with
                  operational brilliance.
                </span>
              </p>
            </div>
          </div>
        </div>
        <div className="content--card w-[90vw]">
        <div
            className={`rounded-[45px] border-[1px] border-gray-200 h-[38vw] px-[4vw] py-[3vw] flex gap-[4vw] flex-row-reverse justify-between bg-white/50 tablet:flex-col tablet:h-[65vh] tablet:py-[5vw] tablet:rounded-[4vw] tablet:justify-start tablet:gap-[4vw] mobile:flex-col mobile:h-auto mobile:rounded-[9vw] mobile:py-[4vw] mobile:pb-[20vw] fadeUp`}
          >
            <div className="h-[32vw] w-[50vw] relative rounded-[50px] overflow-hidden tablet:h-[50vw] tablet:w-[82vw] tablet:rounded-[3vw] mobile:w-[82vw] mobile:h-[85vw] mobile:rounded-[6vw] fadeup">
              <Image
                src="/assets/manufacturing/state-2.webp"
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
                className={`leading-[1.8] w-[99%] text-[#2A2A2A] font-light  text-[1.15vw] tablet:text-[2vw] mobile:text-[4.5vw] mobile:w-full`}
              >
                <span data-para-anim className="para-animation block">
                AMS leverages global partnerships for cutting-edge technology, ensuring uncompromising quality and innovation. Our LEAN manufacturing and Class C clean room maintain precision and efficiency.
                </span>
              </p>
            </div>
          </div>
        </div>
        <div className="content--card w-[90vw]">
        <div
            className={`rounded-[45px] border-[1px] border-gray-200 h-[38vw] px-[4vw] py-[3vw] flex justify-between bg-white/50 tablet:flex-col tablet:h-[65vh] tablet:py-[5vw] tablet:rounded-[4vw] tablet:justify-start tablet:gap-[4vw] mobile:flex-col mobile:h-auto mobile:rounded-[9vw] mobile:py-[4vw] mobile:pb-[20vw] fadeUp`}
          >
            <div className="h-[32vw] w-[60vw] relative rounded-[50px] overflow-hidden tablet:h-[50vw] tablet:w-[82vw] tablet:rounded-[3vw] mobile:w-[82vw] mobile:h-[85vw] mobile:rounded-[6vw] fadeup">
              <Image
                src="/assets/manufacturing/state-3.webp"
                fill
                alt="state-3"
                className={"imageAnim object-cover"}
              />
            </div>

            <div
              className={`flex flex-col  text-start  w-[50%] ml-[5%] items-left justify-center gap-[2vw] tablet:w-[90%] tablet:ml-[1vw] mobile:w-full mobile:text-center mobile:ml-0 mobile:gap-[7vw] mobile:mt-[10vw] `}
            >
              <h2
data-para-anim
                className={`text-[3vw]  font-light aeonik text-[#111111] w-[100%] leading-[1.3] tablet:text-[5vw] mobile:text-[10vw] para-animation`}
              >
                Commitment to Quality
              </h2>
              <p 
                className={`leading-[1.8]  w-[99%] text-[#2A2A2A] font-light text-[1.15vw] tablet:text-[2vw] mobile:text-[4.5vw] mobile:w-full`}
              >
                <span data-para-anim className="para-animation block">
                Quality is our priority. We adhere to rigorous standards (Schedule M, L-1), backed by ISO 13485:2016 and CE certifications. Our advanced testing facilities ensure product safety and efficacy, reflecting our dedication to excellence.
                </span>
              </p>
            </div>
          </div>
        </div>
        <div className="content--card w-[90vw]">
        <div
            className={`rounded-[45px] border-[1px] border-gray-200 h-[38vw] px-[4vw] py-[3vw] flex flex-row-reverse gap-[4vw] justify-between bg-white/50 tablet:flex-col tablet:h-[65vh] tablet:py-[5vw] tablet:rounded-[4vw] tablet:justify-start tablet:gap-[4vw] mobile:flex-col mobile:h-auto mobile:rounded-[9vw] mobile:py-[4vw] mobile:pb-[20vw] fadeup`}
          >
            <div className="h-[32vw] w-[60vw] relative rounded-[50px] overflow-hidden tablet:h-[50vw] tablet:w-[82vw] tablet:rounded-[3vw] mobile:w-[82vw] mobile:h-[85vw] mobile:rounded-[6vw] fadeup">
              <Image
                src="/assets/manufacturing/state-4.webp"
                fill
                alt="state-4"
                className={"imageAnim object-cover"}
              />
            </div>

            <div
              className={`flex flex-col w-[50%] items-left  text-start  justify-center gap-[2vw] tablet:w-[90%] tablet:ml-[1vw] mobile:w-full mobile:text-center mobile:ml-0 mobile:gap-[7vw] mobile:mt-[10vw] `}
            >
              <h2
data-para-anim
                className={`text-[3vw]  font-light aeonik text-[#111111] w-[100%] leading-[1.3] tablet:text-[5vw] mobile:text-[10vw] para-animation`}
              >
                AMS OEM Solutions
              </h2>
              <p
                className={`leading-[1.8]  w-[99%] text-[#2A2A2A] font-light text-[1.15vw] tablet:text-[2vw] mobile:text-[4.5vw] mobile:w-full`}
              >
                <span data-para-anim className="para-animation block">
                AMS offers comprehensive OEM solutions tailored to meet diverse client needs. With our state-of-the-art facility and expertise in manufacturing medical devices, we provide flexible and innovative OEM partnerships. From design to delivery, AMS ensures quality and compliance, empowering partners to bring their healthcare innovations to market with confidence.
                </span>
              </p>
            </div>
          </div>
        </div>
        <div className="w-[90vw]">
        <div
            className={`rounded-[45px] border-[1px] border-gray-200 h-[38vw] px-[4vw] py-[3vw] flex justify-between bg-white/50 tablet:flex-col tablet:h-[65vh] tablet:py-[5vw] tablet:rounded-[4vw] tablet:justify-start tablet:gap-[4vw] mobile:flex-col mobile:h-auto mobile:rounded-[9vw] mobile:py-[4vw] mobile:pb-[20vw] fadeup`}
          >
            <div className="h-[32vw] w-[60vw] relative rounded-[50px] overflow-hidden tablet:h-[50vw] tablet:w-[82vw] tablet:rounded-[3vw] mobile:w-[82vw] mobile:h-[85vw] mobile:rounded-[6vw] fadeup">
              <Image
                src="/assets/manufacturing/state-5.webp"
                fill
                alt="state-5"
                className={"imageAnim object-cover"}
              />
            </div>

            <div
              className={`flex flex-col w-[50%]  text-start  ml-[5%] items-left justify-center gap-[2vw] tablet:w-[90%] tablet:ml-[1vw] mobile:w-full mobile:text-center mobile:ml-0 mobile:gap-[7vw] mobile:mt-[10vw] `}
            >
              <h2
data-para-anim
                className={`text-[3vw]  font-light aeonik text-[#111111] w-[100%] leading-[1.3] tablet:text-[5vw] mobile:text-[10vw] para-animation`}
              >
               Logistical Precision
              </h2>
              <p 
                className={`leading-[1.8]  w-[99%] text-[#2A2A2A] font-light text-[1.15vw] tablet:text-[2vw] mobile:text-[4.5vw] mobile:w-full`}
              >
                <span data-para-anim className="para-animation block">
                AMS excels in optimizing our supply chain to deliver efficient solutions for both patients and healthcare organizations. Our state-of-the-art warehousing and logistics operations ensure intense dedication, precision, and safety through continuous improvement initiatives.
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
