import React from 'react'
import Specifications from '../Specifications'

const SpecificationsManifold = () => {
  return (
    <>
    <Specifications
     textclass={"advastap-text"}
     bgimg={"/assets/accessories/specifications-bg.png"}
     heading={"Technical Specification"}>
    <div className="w-full text-[1.25vw] font-light mt-[3vw] text-[#4A4A4A] mobile:text-[4.5vw] tablet:text-[2.5vw] ">
                <div className="flex w-full border-b border-gray-200  mobile:flex-col mobile:gap-[3vw] mobile:py-[3vw] mobile:pt-[6vw]">
                  <div className="flex-[0.5] p-[1vw] font-light">
                  Package robustness
                  </div>
                  <div className="flex-1 flex justify-between ">
                    <div className="p-[1vw] font-light  border-gray-200">
                      Qualified
                    </div>
                  </div>
                </div>

                <div className="flex w-full border-b border-gray-200 mobile:flex-col mobile:gap-[3vw] mobile:py-[3vw] mobile:pt-[6vw]">
                  <div className="flex-[0.5] p-[1vw]">Package leakage
                  </div>
                  <div className="flex-1 flex justify-between  ">
                    <div className="p-[1vw]  border-gray-200">Qualified</div>
                  </div>
                </div>

                <div className="flex w-full border-b border-gray-200 mobile:flex-col mobile:gap-[3vw] mobile:py-[3vw] mobile:pt-[6vw]">
                  <div className="flex-[0.5] p-[1vw]">Parts</div>
                  <div className="flex-1 flex justify-between ">
                    <div className="p-[1vw]  border-gray-200">Main body, Handles, Rotating connector</div>
                  </div>
                </div>

                <div className="flex w-full border-b border-gray-200 mobile:flex-col mobile:gap-[3vw] mobile:py-[3vw] mobile:pt-[6vw]">
                  <div className="flex-[0.5] p-[1vw]">Body material</div>
                  <div className="flex-1 flex justify-between ">
                    <div className="p-[1vw]  border-gray-200">
                    ABS & PC
                    </div>
                  </div>
                </div>

                <div className="flex w-full border-b border-gray-200 mobile:flex-col mobile:gap-[3vw] mobile:py-[3vw] mobile:pt-[6vw]">
                  <div className="flex-[0.5] p-[1vw]">Side ports</div>
                  <div className="flex-1 flex  justify-between ">
                    <div className="p-[1vw]  border-gray-200">Three</div>
                  </div>
                </div>

                

                <div className="flex w-full border-b border-gray-200 mobile:flex-col mobile:gap-[3vw] mobile:py-[3vw] mobile:pt-[6vw]">
                  <div className="flex-[0.5] p-[1vw]">Pressure</div>
                  <div className="flex-1 flex justify-between  ">
                    <div className="p-[1vw]  border-gray-200">500 PSI </div>
                  </div>
                </div>

                <div className="flex w-full border-b border-gray-200 mobile:flex-col mobile:gap-[3vw] mobile:py-[3vw] mobile:pt-[6vw]">
                  <div className="flex-[0.5] p-[1vw]">Valve type</div>
                  <div className="flex-1 flex justify-between  ">
                    <div className="p-[1vw]  border-gray-200">Right OFF
                    </div>
                  </div>
                </div>
                <div className="flex w-full border-b border-gray-200 mobile:flex-col mobile:gap-[3vw] mobile:py-[3vw] mobile:pt-[6vw]">
                  <div className="flex-[0.5] p-[1vw]">Sterilization</div>
                  <div className="flex-1 flex justify-between  ">
                    <div className="p-[1vw]  border-gray-200">ETO </div>
                  </div>
                </div>
                <div className="flex w-full border-b border-gray-200 mobile:flex-col mobile:gap-[3vw] mobile:py-[3vw] mobile:pt-[6vw]">
                  <div className="flex-[0.5] p-[1vw]">Shelf life</div>
                  <div className="flex-1 flex justify-between  ">
                    <div className="p-[1vw]  border-gray-200">3 Years </div>
                  </div>
                </div>
              </div>
      </Specifications>

    </>
  )
}

export default SpecificationsManifold