import Image from "next/image";
import React from "react";
import { fadeup } from "../gsapAnimations";

const Locations = () => {
  fadeup()
  return (
    <>
      <section id="location" className="relative w-screen h-[45vw] pb-[5%]">
        <div className="px-[10vw] w-full h-full flex justify-center items-center">
          <div className="flex flex-col gap-[7vw]">
            <h2 data-para-anim className="text-[4vw] text-white aeonik font-light ">
              Other Offices
            </h2>
            <div className="flex flex-wrap w-full text-white gap-y-[4vw]">
              <div className="w-[50%] flex gap-[1.5vw] ">
                <div className="w-[5vw] h-[5vw] relative fadeUp">
                  <Image
                    src={"/assets/contact/location.png"}
                    alt="location-icon"
                    fill
                    className="object-contain w-full h-full"
                  />
                </div>
                <div className="flex flex-col gap-[0.4vw] text-[1.2vw] font-light w-[72%]">
                  <p data-para-anim>Corporate HQ</p>
                  <p data-para-anim>
                    Somerset Road, #07-08 Triple One Somerset, Singapore -
                    238164 T: (65) 63691080/ 891
                  </p>
                </div>
              </div>
              <div className="w-[50%] flex gap-[1.5vw]">
                <div className="w-[5vw] h-[5vw] relative fadeUp">
                  <Image
                    src={"/assets/contact/location.png"}
                    alt="location-icon"
                    fill
                    className="object-contain w-full h-full"
                  />
                </div>
                <div className="flex flex-col gap-[0.4vw] text-[1.2vw] font-light w-[72%]">
                  <p data-para-anim>Corporate Office</p>
                  <p data-para-anim>
                    305, Ceejay House, F-Block, Shiv Sagar Estate,Dr. Annie
                    Besant Road, Worli, Mumbai - 400018, India T: +91
                    2224946100/ 01
                  </p>
                </div>
              </div>
              <div className="w-[50%] flex gap-[1.5vw]">
                <div className="w-[5vw] h-[5vw] relative fadeUp">
                  <Image
                    src={"/assets/contact/location.png"}
                    alt="location-icon"
                    fill
                    className="object-contain w-full h-full"
                  />
                </div>
                <div className="flex flex-col gap-[0.4vw] text-[1.2vw] font-light w-[72%]">
                  <p data-para-anim>Regional Office</p>
                  <p data-para-anim>
                    SM0132, 18 Floor, DLF Star Mall, Sector 30, NH-48, Opp: 32&quot;
                    Avenue, Gurugram, 122001, Delhi - India
                  </p>
                </div>
              </div>
              <div className="w-[50%] flex gap-[1.5vw]">
                <div className="w-[5vw] h-[5vw] relative fadeUp">
                  <Image
                    src={"/assets/contact/location.png"}
                    alt="location-icon"
                    fill
                    className="object-contain w-full h-full"
                  />
                </div>
                <div className="flex flex-col gap-[0.4vw] text-[1.2vw] font-light w-[72%]">
                  <p data-para-anim>Regional Office</p>
                  <p data-para-anim>
                    31, Ground Floor, 10th main, 5th Cross Rd, 2nd Block,
                    Banashankari 1st Stage, Bengaluru, Karataka - 560050, India
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute h-full w-full z-[-1] top-0 left-0">
          <Image
            src={"/assets/contact/loactions-bg.png"}
            alt="locations-bg"
            fill
          />
        </div>
      </section>
    </>
  );
};

export default Locations;
