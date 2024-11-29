import React from 'react'
import Specifications from "../Specifications";

const AdvaspongSpecifications = () => {
  return (
    <>
        <Specifications
        textclass={"advastap-text"}
        bgimg={"/assets/advaspong/specifications-bg.png"}
        heading={"Specification"}
      >
          <div data-lenis-prevent className="w-full text-[1.25vw] font-light py-[3vw] text-[#4A4A4A] overflow-y-auto mobile:text-[4.5vw] tablet:text-[2.5vw] mobile:py-[5vw] tablet:py-[5vw]">
          <div className="flex w-full border-b border-[#DADADA] mobile:overflow-x-scroll ">
            <div className=" p-[1vw] font-light w-[15vw] tablet:w-[20vw] mobile:w-[40vw]"> Product</div>
              <div className="p-[1vw] font-light tablet:w-[60vw] ">
              Sterile Absorbable Haemostatic Gelatin Sponge
              </div>
          </div>

          <div className="flex w-full border-b border-[#DADADA] ">
            <div className=" p-[1vw] w-[15vw] tablet:w-[20vw] mobile:w-[40vw]">Order code
            </div>
            <div className=" flex justify-start gap-[10vw]  ">
              <div className="p-[1vw] w-[20vw] ">ADVASPG-S
              </div>
              <div className="p-[1vw] w-[20vw] "> ADVASPG-R
              </div>
            </div>
          </div>

          <div className="flex w-full border-b border-[#DADADA] ">
            <div className=" p-[1vw] w-[15vw] tablet:w-[20vw] mobile:w-[40vw]">Type</div>
            <div className=" flex justify-start gap-[10vw] ">
              <div className="p-[1vw]  w-[20vw]">Standard</div>
              <div className="p-[1vw]  w-[20vw]">Regular</div>
            </div>
          </div>

          <div className="flex w-full border-b border-[#DADADA] ">
            <div className=" p-[1vw] w-[15vw] tablet:w-[20vw] mobile:w-[40vw]">Material</div>
            <div className=" flex justify-start gap-[10vw] ">
              <div className="p-[1vw]  w-[20vw]">Purified Gelatin</div>
              <div className="p-[1vw] w-[20vw] ">Purified Gelatin</div>
            </div>
          </div>
          <div className="flex w-full border-b border-[#DADADA] ">
            <div className=" p-[1vw] w-[15vw] tablet:w-[20vw] mobile:w-[40vw]">Dimensions</div>
            <div className=" flex justify-start gap-[10vw] ">
              <div className="p-[1vw] w-[20vw] ">80 × 50 x 10 mm</div>
              <div className="p-[1vw] w-[20vw] ">70 × 50 x 10 mm</div>
            </div>
          </div>
          <div className="flex w-full border-b border-[#DADADA] ">
            <div className=" p-[1vw] w-[15vw] tablet:w-[20vw] mobile:w-[40vw]"> No. of items / pack</div>
            <div className=" flex justify-start gap-[10vw] ">
              <div className="p-[1vw] w-[20vw] ">2</div>
              <div className="p-[1vw] w-[20vw] ">2</div>
            </div>
          </div>
          <div className="flex w-full border-b border-[#DADADA] ">
            <div className=" p-[1vw] w-[15vw] tablet:w-[20vw] mobile:w-[40vw]">Sterilization</div>
            <div className=" flex justify-start gap-[10vw] ">
              <div className="p-[1vw] w-[20vw] ">Gamma Radiation</div>
              <div className="p-[1vw] w-[20vw] ">Gamma Radiation</div>
            </div>
          </div>
          <div className="flex w-full border-b border-[#DADADA] ">
            <div className=" p-[1vw] w-[15vw] tablet:w-[20vw] mobile:w-[40vw]">Shelf life</div>
            <div className=" flex justify-start gap-[10vw] ">
              <div className="p-[1vw] w-[20vw] ">3 Years</div>
              <div className="p-[1vw]  w-[20vw]">3 Years</div>
            </div>
          </div>
        </div>
      </Specifications>
    </>
  )
}

export default AdvaspongSpecifications