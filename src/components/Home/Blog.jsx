/* eslint-disable react-hooks/rules-of-hooks */
import PrimaryButton from "../Button/PrimaryButton";
import gsap from "gsap";
import { useEffect, useRef } from "react";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin( ScrollTrigger);

/* eslint-disable @next/next/no-img-element */
export default function Blog() {
  const blogLeft = useRef(null);
  const blogContainer = useRef(null);
  if (globalThis.innerWidth < 1024) {
  } else {
    useEffect(() => {
      const ctx = gsap.context(() => {
        ScrollTrigger.create({
          trigger: ".blog-left",
          start: "top 10%",
          endTrigger: blogContainer.current,
          end: "bottom 90%",
          invalidateOnRefresh: true,
          pin: true,
          // markers: true,
        });
      });
      return () => ctx.revert();
    });
  }
  return (
    <>
      <section
        className="p-y-sm mobile:py-[15vw] w-screen overflow-hidden"
        ref={blogContainer}
        id="blogs" 
      >
        <div className="container-sm pl-[3vw] mobile:pl-0 tablet:pl-0">
          <div className="flex items-start justify-between w-full mobile:flex-col mobile:w-[100%] mobile:items-center tablet:flex-col">
            <div
              className="blog-left w-[45%] space-y-[2.5vw] mobile:w-[100%] mobile:space-y-[5vw] tablet:w-full"
              
            >
              <h2 data-para-anim className="title-2 aeonik mobile:text-center">
                <span>Stories</span>
              </h2>
              <p
                data-para-anim
                className="content-p w-[95%] tablet:w-[80%] mobile:w-full mobile:px-[3vw] mobile:pb-[15vw] mobile:text-center"
              >
                Stay connected with the latest updates, breakthrough innovations, and exciting events that drive our progress.
              </p>
            </div>
            <div className="blog-right w-[50%] mobile:w-[100%] mobile:space-y-[15vw] tablet:w-full tablet:mt-[7vw]">
              <div className="flex flex-col items-center justify-between gap-[4%] mobile:flex-col mobile:items-center mobile:justify-center tablet:gap-[2vw]">
                <div className="blog-img h-[18.7vw] w-[83%] overflow-hidden rounded-[1.1vw] relative mobile:w-[90vw] mobile:rounded-[5vw] mobile:h-[60vw] tablet:h-[35vw] fadeUp ">
                  <Image
                    data-speed="0.7"
                    className="h-full w-full object-cover"
                    src="/assets/home/blog-1.png"
                    alt="blog image"
                    height={403}
                    width={639}
                    
                  />
                </div>
                <div className="w-[84%] mt-[1vw] fadeUp mobile:w-[100%] mobile:text-center mobile:mt-[5vw] mobile:flex-col mobile:items-center mobile:justify-center">
                 <div className="flex items-start justify-between mobile:flex-col mobile:items-center">
                  <h5
                    data-para-anim
                    className="text-[2.2vw] font-extralight leading-[1.2] mb-[2vw] mobile:text-[8vw] mobile:mb-[8vw] tablet:text-[3.5vw] mobile:order-1"
                  >
                   Reimagining Health, Redefining Care
                   Arab Health 2025
                  </h5>
                  </div>
                  <p
                    data-para-anim
                    className="text-[0.94vw] font-light mb-[2.5vw] text-anim-2 mobile:text-[4.2vw] mobile:mb-[8vw] tablet:text-[2vw]"
                  >
                 Advanced MedTech Solutions is excited to showcase innovation at Arab Health 2025! Visit us to explore advanced solutions transforming healthcare.
                  </p>
                  <div className="w-full flex mobile:justify-center fadeUp">
                    <PrimaryButton
                      link="/"
                      text="Read More"
                      className={""}
                    />
                  </div>
                </div>
              </div>
              <span className="block h-[1px] w-[84%] ml-[3vw] my-[4vw] bg-[#444444] lineDraw tablet:my-[7vw] tablet:w-[93%] tablet:h-[0.5px] mobile:w-[94%]" />
              <div className="flex flex-col items-center justify-between gap-[4%] mobile:flex-col mobile:items-center mobile:justify-center tablet:gap-[2vw]">
                <div className="blog-img h-[18.7vw] w-[83%] overflow-hidden rounded-[1.1vw] relative mobile:w-[90vw] mobile:rounded-[5vw]  mobile:h-[60vw] tablet:h-[35vw] fadeUp ">
                  <Image
                    data-speed="0.7"
                    className="h-full w-full object-cover"
                    src="/assets/home/blog-2.png"
                    alt="blog image"
                    height={403}
                    width={639}
                  />
                </div>
                <div className="w-[84%] mt-[1vw] fadeUp mobile:w-[100%] mobile:text-center mobile:mt-[5vw] mobile:flex-col mobile:items-center mobile:justify-center">
                 <div className="flex items-start justify-between mobile:flex-col mobile:items-center">
                  <h5
                    data-para-anim
                    className="text-[2.2vw] font-extralight leading-[1.2] mb-[2vw] mobile:text-[7.6vw] mobile:mb-[8vw] tablet:text-[3.5vw] mobile:order-1"
                  >
                  Shaping the Future of Healthcare
                  Advanced Surgery & Cardiovascular
                  </h5>
                 
                  </div>
                  <p
                    data-para-anim
                    className="text-[0.94vw] font-light mb-[2.5vw] text-anim-2 mobile:text-[4.2vw] mobile:mb-[8vw] tablet:text-[2vw]"
                  >
                 AMS serves as a healthcare ecosystem focused on the MedTech fields of Advanced Surgery & Advanced Cardiovascular.
                  </p>
                  <div className="w-full flex mobile:justify-center fadeUp">
                    <PrimaryButton
                      link="/"
                      text="Read More"
                      className={""}
                    />
                  </div>
                </div>
              </div>
              <span className="block h-[1px] w-[84%] ml-[3vw] my-[4vw] bg-[#444444] lineDraw tablet:my-[7vw] tablet:w-[93%] mobile:w-[94%]" />
              <div className="flex flex-col items-center justify-between gap-[4%] mobile:flex-col mobile:items-center mobile:justify-center tablet:gap-[2vw]">
                <div className="blog-img h-[18.7vw] w-[83%] overflow-hidden rounded-[1.1vw] relative mobile:w-[90vw] mobile:rounded-[5vw] mobile:h-[60vw] tablet:h-[35vw] fadeUp ">
                  <Image
                    data-speed="0.7"
                    className="h-full w-full object-cover"
                    src="/assets/home/blog-3.png"
                    alt="blog image"
                    height={403}
                    width={639}
                  />
                </div>
                <div className="w-[84%] mt-[1vw] fadeUp mobile:w-[100%] mobile:text-center mobile:mt-[5vw] mobile:flex-col mobile:items-center mobile:justify-center">
                 <div className="flex items-start justify-between mobile:flex-col mobile:items-center">
                  <h5
                    data-para-anim
                    className="text-[2.2vw] font-extralight leading-[1.2] mb-[2vw] mobile:text-[7.6vw] mobile:mb-[8vw] tablet:text-[3.5vw] mobile:order-1"
                  >
                  The Next Leap in Endo Surgery
                  3-Row Series
                  </h5>
                 
                  </div>
                  <p
                    data-para-anim
                    className="text-[0.94vw] font-light mb-[2.5vw] text-anim-2 mobile:text-[4.2vw] mobile:mb-[8vw] tablet:text-[2vw]"
                  >
                 The ADVASTAP Staplers 3-row series is here, setting a new benchmark in endo surgery. Designed to enhance precision and improve patient outcomes, our innovative stapling technology is transforming the surgical landscape.
                  </p>
                  <div className="w-full flex mobile:justify-center fadeUp">
                    <PrimaryButton
                      link="/"
                      text="Read More"
                      className={""}
                    />
                  </div>
                </div>
              </div>
              <span className="block h-[1px] w-[84%] ml-[3vw] my-[4vw] bg-[#444444] lineDraw tablet:my-[7vw] tablet:w-[93%] mobile:w-[94%]" />
              <div className="flex flex-col items-center justify-between gap-[4%] mobile:flex-col mobile:items-center mobile:justify-center tablet:gap-[2vw]">
                <div className="blog-img h-[18.7vw] w-[83%] overflow-hidden rounded-[1.1vw] relative mobile:w-[90vw] mobile:rounded-[5vw] mobile:h-[60vw] tablet:h-[35vw] fadeUp ">
                  <Image
                    data-speed="0.7"
                    className="h-full w-full object-cover"
                    src="/assets/home/blog-4.png"
                    alt="blog image"
                    height={403}
                    width={639}
                  />
                </div>
                <div className="w-[84%] mt-[1vw] fadeUp mobile:w-[100%] mobile:text-center mobile:mt-[5vw] mobile:flex-col mobile:items-center mobile:justify-center">
                 <div className="flex items-start justify-between mobile:flex-col mobile:items-center">
                  <h5
                    data-para-anim
                    className="text-[2.2vw] font-extralight leading-[1.2] mb-[2vw] mobile:text-[7.6vw] mobile:mb-[8vw] tablet:text-[3.5vw] mobile:order-1"
                  >
                  Building the Future of MedTech
                  Expansion of The AMS Campus
                  </h5>
                 
                  </div>
                  <p
                    data-para-anim
                    className="text-[0.94vw] font-light mb-[2.5vw] text-anim-2 mobile:text-[4.2vw] mobile:mb-[8vw] tablet:text-[2vw]"
                  >
                 AMS Takes Center Stage at Arab Health in Dubai: Leading the Charge in Global MedTech with Industry leaders and partners Transforming Healthcare Worldwide
                  </p>
                  <div className="w-full flex mobile:justify-center fadeUp">
                    <PrimaryButton
                      link="/"
                      text="Read More"
                      className={""}
                    />
                  </div>
                </div>
              </div>
              <span className="block h-[1px] w-[84%]  ml-[3vw] my-[4vw] bg-[#444444] lineDraw tablet:my-[7vw] tablet:w-[93%] mobile:w-[94%]" />
             
             
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
