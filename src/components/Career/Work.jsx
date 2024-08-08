import Image from "next/image";
import React from "react";
import PrimaryButton from "../Button/PrimaryButton";

const Work = () => {
  return (
    <section className="mb-[5%] mt-[-13vw]">
      <div className="w-full flex flex-col  justify-center items-center ">
        <div className="w-[99%] flex flex-col gap-[4vw] rounded-[50px] work-card py-[5%]">
          <div className="flex justify-between w-[15%] ml-[10%] ">
            <div className="border-[1px] border-[#111111] rounded-[50%] h-[1.5vw] w-[1.5vw] flex justify-center items-center">
              <p className="text-[1vw]">1</p>
            </div>
            <p className="text-[1.2vw] font-light">Our work Environment</p>
          </div>
          <div className="flex justify-center items-center gap-x-[8vw] container-sm">
            <div className="w-[40%]">
              <Image
                src="/assets/career/career-work.png"
                height={600}
                width={600}
              />
            </div>
            <div className="w-[30%] text-[2vw] aeonik leading-[1.25]  flex flex-col justify-between gap-[3vw] font-light text-[#111111]">
              <p>
                Innovative, collaborative, and Driven by a mission to improve
                lives.
              </p>
              <PrimaryButton link="/" btnText="Learn More About Us" />
            </div>
          </div>
        </div>
        <div className="w-[99%] flex flex-col gap-[4vw] rounded-[50px] work-card py-[5%]">
          <div className="flex justify-between w-[15%] ml-[10%] ">
            <div className="border-[1px] border-[#111111] rounded-[50%] h-[1.5vw] w-[1.5vw] flex justify-center items-center">
              <p className="text-[1vw]">2</p>
            </div>
            <p className="text-[1.2vw] font-light">Inclusivity & Equality</p>
          </div>
          <div className="flex justify-center items-center gap-x-[8vw] container-sm">
            <div className="w-[40%]">
              <Image
                src="/assets/career/career-employees.png"
                height={600}
                width={600}
              />
            </div>
            <div className="w-[30%] text-[2vw] aeonik leading-[1.25]  flex flex-col justify-between gap-[3vw] font-light text-[#111111]">
              <p>
                Creating a space where every individual is valued and respected.
              </p>
              <PrimaryButton link="/" btnText="See Our Initiatives" />
            </div>
          </div>
        </div>
        <div className="w-[99%] flex flex-col gap-[4vw] rounded-[50px] border-[1px] work-card py-[5%]">
          <div className="flex justify-between w-[17%] ml-[10%] ">
            <div className="border-[1px] border-[#111111] rounded-[50%] h-[1.5vw] w-[1.5vw] flex justify-center items-center">
              <p className="text-[1vw]">3</p>
            </div>
            <p className="text-[1.2vw] font-light">Build your future with Us</p>
          </div>
          <div className="flex justify-center items-center gap-x-[8vw] container-sm">
            <div className="w-[40%]">
              <Image
                src="/assets/career/career-medical.png"
                height={600}
                width={600}
              />
            </div>
            <div className="w-[30%] text-[2vw] aeonik leading-[1.25]  flex flex-col justify-between gap-[3vw] font-light text-[#111111]">
              <p>Contribute to cutting-edge medical technology.</p>
              <PrimaryButton link="/" btnText="Start Your Journey" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Work;
