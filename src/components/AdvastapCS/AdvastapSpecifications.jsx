import React from "react";
import Specifications from "../Specifications";

const AdvastapSpecifications = () => {
  return (
    <>
      <Specifications
        textclass={"advastap-text"}
        bgimg={"/assets/endolc/specifications-bg.png"}
        heading={"Technical Specification"}
      >
        <div data-scroll-prevent  className="w-full text-[1.25vw] font-light mt-[3vw] text-[#4A4A4A] overflow-y-auto mobile:text-[4.5vw] tablet:text-[2.5vw] mobile:overflow-x-auto mobile:overflow-scroll mobile:mt-[7vw] ">
          <div className="flex w-full border-b border-[#DADADA] mobile:w-[180vw] ">
            <div className="flex-[0.5] p-[1vw] font-light">Product Code</div>
            <div className="flex-1 flex justify-between mobile:w-[100vw]">
              <div className="p-[1vw] font-light  border-[#DADADA] mobile:w-[100vw]">
                ADVACS-29R3
              </div>
              <div className="p-[1vw] font-light  border-[#DADADA] mobile:w-[100vw]">
                ADVACS-32R3
              </div>
            </div>
          </div>

          <div className="flex w-full border-b border-[#DADADA] mobile:w-[180vw]">
            <div className="flex-[0.5] p-[1vw]">Product Description</div>
            <div className="flex-1 flex justify-between  mobile:w-[100vw] ">
              <div className="p-[1vw]  border-[#DADADA] mobile:w-[80vw]">
                Circular Stapler 3-Row 29mm
              </div>
              <div className="p-[1vw]  border-[#DADADA]  mobile:w-[80vw]">
                Circular Stapler 3-Row 32mm
              </div>
            </div>
          </div>

          <div className="flex w-full border-b border-[#DADADA] mobile:w-[180vw]">
            <div className="flex-[0.5] p-[1vw]">Pin Row Construction</div>
            <div className="flex-1 flex justify-between mobile:w-[100vw]">
              <div className="p-[1vw]  border-[#DADADA] mobile:w-[80vw]">3 Row</div>
              <div className="p-[1vw]  border-[#DADADA] mobile:w-[80vw]">3 Row</div>
            </div>
          </div>

          <div className="flex w-full border-b border-[#DADADA] mobile:w-[180vw]">
            <div className="flex-[0.5] p-[1vw]">Pins Per Cartridge</div>
            <div className="flex-1 flex justify-between mobile:w-[100vw]">
              <div className="p-[1vw]  border-[#DADADA] mobile:w-[80vw]">36</div>
              <div className="p-[1vw]  border-[#DADADA] mobile:w-[80vw]">45</div>
            </div>
          </div>

          <div className="flex w-full border-b border-[#DADADA] mobile:w-[180vw]">
            <div className="flex-[0.5] p-[1vw]">Stapler Height</div>
            <div className="flex-1 flex  justify-between mobile:w-[100vw]">
              <div className="p-[1vw]  border-[#DADADA] mobile:w-[80vw]">4.8mm</div>
              <div className="p-[1vw]  border-[#DADADA] mobile:w-[80vw]">5.0mm</div>
            </div>
          </div>

          <div className="flex w-full border-b border-[#DADADA] mobile:w-[180vw]">
            <div className="flex-[0.5] p-[1vw]">Closed Stapler Height</div>
            <div className="flex-1 flex justify-between mobile:w-[100vw] ">
              <div className="p-[1vw]  border-[#DADADA] mobile:w-[80vw]">2.15÷0.2mm</div>
              <div className="p-[1vw]  border-[#DADADA] mobile:w-[80vw]">2.25£0.2mm</div>
            </div>
          </div>

          <div className="flex w-full border-b border-[#DADADA] mobile:w-[180vw]">
            <div className="flex-[0.5] p-[1vw]"> Housing Capacity</div>
            <div className="flex-1 flex justify-between  mobile:w-[100vw]">
              <div className="p-[1vw]  border-[#DADADA] mobile:w-[80vw]">15 CC</div>
              <div className="p-[1vw]  border-[#DADADA] mobile:w-[80vw]">19 CC</div>
            </div>
          </div>

          <div className="flex w-full border-b border-[#DADADA] mobile:w-[180vw]">
            <div className="flex-[0.5] p-[1vw]">Inner Lumen Diameter</div>
            <div className="flex-1 flex justify-between mobile:w-[100vw] ">
              <div className="p-[1vw]  border-[#DADADA] mobile:w-[80vw]">20mm</div>
              <div className="p-[1vw]  border-[#DADADA] mobile:w-[80vw]">22mm</div>
            </div>
          </div>
          <div className="flex w-full border-b border-[#DADADA] mobile:w-[180vw]">
            <div className="flex-[0.5] p-[1vw]">Quantity/Box</div>
            <div className="flex-1 flex justify-between mobile:w-[100vw] ">
              <div className="p-[1vw]  border-[#DADADA] mobile:w-[80vw]">01</div>
              <div className="p-[1vw]  border-[#DADADA] mobile:w-[80vw]">01</div>
            </div>
          </div>
        </div>
      </Specifications>
    </>
  );
};

export default AdvastapSpecifications;
