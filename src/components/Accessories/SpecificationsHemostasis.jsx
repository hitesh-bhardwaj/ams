import React from 'react'
import Specifications from '../Specifications'

const SpecificationsHemostasis = () => {
  return (
   <>
      <Specifications
        textclass={"advastap-text"}
        bgimg={"/assets/accessories/specifications-bg.png"}
        heading={"Technical Specification"}
      >
      <div className="w-full text-[1.25vw] font-light mt-[3vw] text-[#4A4A4A] overflow-y-auto mobile:text-[4.5vw] tablet:text-[2.5vw] ">
          <div className="flex w-full border-b border-gray-200  mobile:flex-col mobile:gap-[3vw] mobile:py-[3vw] mobile:pt-[6vw]">
            <div className="flex-[0.5] p-[1vw] font-light"> Code</div>
            <div className="flex-1 flex justify-between ">
              <div className="p-[1vw] font-light  border-gray-200">
              AHVS3000
              </div>
              <div className="p-[1vw] font-light  border-gray-200">
              AHVS3001
              </div>
            </div>
          </div>

          <div className="flex w-full border-b border-gray-200 mobile:flex-col mobile:gap-[3vw] mobile:py-[3vw] mobile:pt-[6vw]">
            <div className="flex-[0.5] p-[1vw]">Connector type
            </div>
            <div className="flex-1 flex justify-between  ">
              <div className="p-[1vw]  border-gray-200">Push-pull
              </div>
              <div className="p-[1vw]  border-gray-200"> Push-click
              </div>
            </div>
          </div>

          <div className="flex w-full border-b border-gray-200 mobile:flex-col mobile:gap-[3vw] mobile:py-[3vw] mobile:pt-[6vw]">
            <div className="flex-[0.5] p-[1vw]">Quantity per pack</div>
            <div className="flex-1 flex justify-between ">
              <div className="p-[1vw]  border-gray-200">5</div>
              <div className="p-[1vw]  border-gray-200">5</div>
            </div>
          </div>

          <div className="flex w-full border-b border-gray-200 mobile:flex-col mobile:gap-[3vw] mobile:py-[3vw] mobile:pt-[6vw]">
            <div className="flex-[0.5] p-[1vw]">Max pressure</div>
            <div className="flex-1 flex justify-between ">
              <div className="p-[1vw]  border-gray-200">500 PSI</div>
              <div className="p-[1vw]  border-gray-200">500 PSI</div>
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

export default SpecificationsHemostasis