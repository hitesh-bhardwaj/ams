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
          <div className="w-full text-[1.25vw] font-light mt-[3vw] text-[#4A4A4A] overflow-y-auto mobile:text-[4.5vw] tablet:text-[2.5vw] ">
          <div className="flex w-full border-b border-gray-200  mobile:flex-col mobile:gap-[3vw] mobile:py-[3vw] mobile:pt-[6vw]">
            <div className="flex-[0.5] p-[1vw] font-light"> Product</div>
            <div className="flex-1 flex justify-between ">
              <div className="p-[1vw] font-light  border-gray-200">
              Sterile Absorbable Haemostatic Gelatin Sponge
              </div>
              <div className="p-[1vw] font-light  border-gray-200">
             
              </div>
            </div>
          </div>

          <div className="flex w-full border-b border-gray-200 mobile:flex-col mobile:gap-[3vw] mobile:py-[3vw] mobile:pt-[6vw]">
            <div className="flex-[0.5] p-[1vw]">Order code
            </div>
            <div className="flex-1 flex justify-between  ">
              <div className="p-[1vw]  border-gray-200">ADVASPG-S
              </div>
              <div className="p-[1vw]  border-gray-200"> ADVASPG-R
              </div>
            </div>
          </div>

          <div className="flex w-full border-b border-gray-200 mobile:flex-col mobile:gap-[3vw] mobile:py-[3vw] mobile:pt-[6vw]">
            <div className="flex-[0.5] p-[1vw]">Type</div>
            <div className="flex-1 flex justify-between ">
              <div className="p-[1vw]  border-gray-200">Standard</div>
              <div className="p-[1vw]  border-gray-200">Regular</div>
            </div>
          </div>

          <div className="flex w-full border-b border-gray-200 mobile:flex-col mobile:gap-[3vw] mobile:py-[3vw] mobile:pt-[6vw]">
            <div className="flex-[0.5] p-[1vw]">Material</div>
            <div className="flex-1 flex justify-between ">
              <div className="p-[1vw]  border-gray-200">Purified Gelatin</div>
              <div className="p-[1vw]  border-gray-200">Purified Gelatin</div>
            </div>
          </div>
          <div className="flex w-full border-b border-gray-200 mobile:flex-col mobile:gap-[3vw] mobile:py-[3vw] mobile:pt-[6vw]">
            <div className="flex-[0.5] p-[1vw]">Dimensions</div>
            <div className="flex-1 flex justify-between ">
              <div className="p-[1vw]  border-gray-200">80 × 50 x 10 mm</div>
              <div className="p-[1vw]  border-gray-200">70 × 50 x 10 mm</div>
            </div>
          </div>
          <div className="flex w-full border-b border-gray-200 mobile:flex-col mobile:gap-[3vw] mobile:py-[3vw] mobile:pt-[6vw]">
            <div className="flex-[0.5] p-[1vw]"> No. of items / pack</div>
            <div className="flex-1 flex justify-between ">
              <div className="p-[1vw]  border-gray-200">2</div>
              <div className="p-[1vw]  border-gray-200">2</div>
            </div>
          </div>
          <div className="flex w-full border-b border-gray-200 mobile:flex-col mobile:gap-[3vw] mobile:py-[3vw] mobile:pt-[6vw]">
            <div className="flex-[0.5] p-[1vw]">Sterilization</div>
            <div className="flex-1 flex justify-between ">
              <div className="p-[1vw]  border-gray-200">Gamma Radiation</div>
              <div className="p-[1vw]  border-gray-200">Gamma Radiation</div>
            </div>
          </div>
          <div className="flex w-full border-b border-gray-200 mobile:flex-col mobile:gap-[3vw] mobile:py-[3vw] mobile:pt-[6vw]">
            <div className="flex-[0.5] p-[1vw]">Shelf life</div>
            <div className="flex-1 flex justify-between ">
              <div className="p-[1vw]  border-gray-200">3 Years</div>
              <div className="p-[1vw]  border-gray-200">3 Years</div>
            </div>
          </div>
        </div>
      </Specifications>
    </>
  )
}

export default AdvaspongSpecifications