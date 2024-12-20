import React from "react";
import Specifications from "../Specifications";
import Image from "next/image";

const SpecificationsHd3 = () => {
  return (
    <>
        <Specifications
        textclass={"gradient-text"}
        bgimg={"/assets/advastap/specifications-bg.png"}
        heading={"Technical Specification"}
        color={"#275F7B"}
      >
        <div
          data-lenis-prevent
          className="w-full  h-[70vh] text-[1.25vw] font-light py-[2vw]  text-[#4A4A4A] overflow-y-scroll mobile:py-[5vw] mobile:text-[4.5vw] tablet:text-[2.5vw]  mobile:overflow-x-scroll  mobile:overflow-scroll mobile:mt-[7vw] tablet:h-[50vh] mobile:h-[55vh]"
        >
          <div className="flex w-full border-b border-[#DADADA] gap-[5vw] mobile:w-[180vw] ">
            <div className="w-[20vw] p-[1vw] font-light tablet:w-[20vw]">
              Reorder code
            </div>
            <div className=" flex justify-start  gap-[5vw] mobile:w-[100vw]">
              <div className=" w-[20vw] p-[1vw] font-light  mobile:w-[100vw] tablet:w-[20vw]">
              ADVAPPH-33

              </div>
              <div className="p-[1vw] font-light  w-[20vw] mobile:w-[100vw]  tablet:w-[20vw]">
              ADVAPPH-34
              </div>
            </div>
          </div>

          <div className="flex w-full border-b border-[#DADADA] gap-[5vw] mobile:w-[160vw]">
            <div className="w-[20vw] p-[1vw] ">Pin row construction</div>
            <div className=" flex justify-start  gap-[5vw]  mobile:w-[80vw] mobile:justify-center mobile:gap-[24vw]">
              <div className="p-[1vw] w-[20vw]  mobile:w-[35vw] tablet:w-[20vw] mobile:pl-[2.5vw]">
                2 Row
              </div>
              <div className="p-[1vw]   w-[20vw] mobile:w-[37vw] tablet:w-[20vw] mobile:pl-[2.5vw]">
                2 Row
              </div>
            </div>
          </div>

          <div className="flex w-full border-b border-[#DADADA] gap-[5vw] mobile:w-[180vw]">
            <div className=" p-[1vw] w-[20vw]">Pin material</div>
            <div className=" flex justify-start  gap-[5vw] mobile:w-[100vw]">
              <div className="p-[1vw]  w-[20vw] mobile:w-[80vw]">Titanium Grade 1</div>
              <div className="p-[1vw]   w-[20vw] mobile:w-[80vw]">
                Titanium Grade 1
              </div>
            </div>
          </div>

          <div className="flex w-full border-b border-[#DADADA] gap-[5vw] mobile:w-[180vw]">
            <div className=" p-[1vw] w-[20vw]">Pins Per Cartridge</div>
            <div className=" flex justify-start  gap-[5vw] mobile:w-[100vw]">
              <div className="p-[1vw] w-[20vw]  mobile:w-[80vw]">34</div>
              <div className="p-[1vw]   w-[20vw] mobile:w-[80vw]">34</div>
            </div>
          </div>

          <div className="flex w-full border-b border-[#DADADA] gap-[5vw] mobile:w-[180vw]">
            <div className=" p-[1vw] w-[20vw]">Staple height</div>
            <div className=" flex  justify-start  gap-[5vw] mobile:w-[100vw]">
              <div className="p-[1vw] w-[20vw]  mobile:w-[80vw]">3.8 mm</div>
              <div className="p-[1vw]  w-[20vw] mobile:w-[80vw]">
                3.8 mm
              </div>
            </div>
          </div>

          <div className="flex w-full border-b border-[#DADADA] gap-[5vw] mobile:w-[180vw]">
            <div className=" p-[1vw] w-[20vw]">Closed staple shape</div>
            <div className=" flex justify-start  gap-[5vw] mobile:w-[100vw] ">
             <div className="p-[1vw] w-[20vw] flex gap-[1vw]  mobile:w-[80vw]"><p>B Form</p> <Image src="/assets/advastap/bform.png" height={36} width={36} alt="bform" className="mobile:w-[7vw] mobile:h-[7vw]"/></div>
             <div className="p-[1vw] w-[20vw] flex gap-[1vw]  mobile:w-[80vw]"><p>B Form</p> <Image src="/assets/advastap/bform.png" height={36} width={36} alt="bform" className="mobile:w-[7vw] mobile:h-[7vw]"/></div>
            </div>
          </div>
          <div className="flex w-full border-b border-[#DADADA] gap-[5vw] mobile:w-[180vw]">
            <div className=" p-[1vw] w-[20vw]">Closed staple height</div>
            <div className=" flex justify-start   gap-[5vw] mobile:w-[100vw] ">
              <div className="p-[1vw] w-[20vw]  mobile:w-[80vw]">0.75 mm-1.5 mm</div>
              <div className="p-[1vw]   w-[20vw] mobile:w-[80vw]">0.75 mm-1.5 mm</div>
            </div>
          </div>

          <div className="flex w-full border-b border-[#DADADA] gap-[5vw] mobile:w-[180vw]">
            <div className=" p-[1vw] w-[20vw]"> Housing Capacity (cc)</div>
            <div className=" flex justify-start  gap-[5vw]  mobile:w-[100vw]">
              <div className="p-[1vw] w-[20vw]   mobile:w-[80vw]">17.97
              </div>
              <div className="p-[1vw]   w-[20vw] mobile:w-[80vw]">21.86
              </div>
            </div>
          </div>

          <div className="flex w-full border-b border-[#DADADA] gap-[5vw] mobile:w-[180vw]">
            <div className=" p-[1vw] w-[20vw]">Inner Lumen Diameter</div>
            <div className=" flex justify-start  gap-[5vw] mobile:w-[100vw] ">
              <div className="p-[1vw] w-[20vw]  mobile:w-[80vw]">25.5 mm</div>
              <div className="p-[1vw]  w-[20vw] mobile:w-[80vw]">26.5 mm</div>
            </div>
          </div>
          <div className="flex w-full border-b border-[#DADADA] gap-[5vw] mobile:w-[180vw]">
            <div className=" p-[1vw] w-[20vw]">Quantity/Box</div>
            <div className=" flex justify-start  gap-[5vw] mobile:w-[100vw] ">
              <div className="p-[1vw] w-[20vw]  mobile:w-[80vw]">1</div>
              <div className="p-[1vw]   w-[20vw] mobile:w-[80vw]">1</div>
            </div>
          </div>
          <div className="flex w-full border-b border-[#DADADA] gap-[5vw] mobile:w-[180vw]">
            <div className=" p-[1vw] w-[20vw]">Shelf life</div>
            <div className=" flex justify-start  gap-[5vw] mobile:w-[100vw] ">
              <div className="p-[1vw] w-[20vw]  mobile:w-[80vw]">3 years</div>
              <div className="p-[1vw]   w-[20vw] mobile:w-[80vw]">3 years</div>
            </div>
          </div>
          <div className="flex w-full border-b border-[#DADADA] gap-[5vw] mobile:w-[180vw]">
            <div className=" p-[1vw] w-[20vw]">Usability</div>
            <div className=" flex justify-start gap-[5vw] mobile:w-[100vw] ">
              <div className="p-[1vw] w-[20vw]  mobile:w-[80vw]">Single-use</div>
              <div className="p-[1vw]   w-[20vw] mobile:w-[80vw]">
                Single-use
              </div>
            </div>
          </div>
        </div>
      </Specifications>
    </>
  );
};

export default SpecificationsHd3;
