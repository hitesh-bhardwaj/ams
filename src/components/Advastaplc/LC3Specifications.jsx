import React from 'react'
import Specifications from '../Specifications'

const LC3Specifications = () => {
  return (
    <>
    <Specifications
      textclass={"advastap-text"}
      bgimg={"/assets/advastaplc/closure-bg-1.png"}
      heading={"Technical Specification"}
    >
    <div data-lenis-prevent className="w-full h-[70vh] text-[1.25vw] font-light mt-[3vw] text-[#4A4A4A]   overflow-y-scroll mobile:text-[4.5vw] tablet:text-[2.5vw] ">
        <div className="flex w-full border-b border-[#DADADA]  mobile:flex-col mobile:gap-[3vw] mobile:py-[3vw] mobile:pt-[6vw]">
          <div className="flex-[0.5] p-[1vw] font-light text-[#4564AC]">Linear Cutter Applier</div> 
        </div>

        <div className="flex w-full border-b border-gray-200 mobile:flex-col mobile:gap-[3vw] mobile:py-[3vw] mobile:pt-[6vw]">
          <div className="flex-[0.5] p-[1vw]">Reference Code
          </div>
          <div className="flex-1 flex justify-start gap-[20vw] ">
            <div className="p-[1vw]  border-gray-200">ADVALC55R3
            </div>
            <div className="p-[1vw]  border-gray-200 "> ADVALC75R3
            </div>
          </div>
        </div>

        <div className="flex w-full border-b border-gray-200 mobile:flex-col mobile:gap-[3vw] mobile:py-[3vw] mobile:pt-[6vw]">
          <div className="flex-[0.5] p-[1vw]">Pack Size</div>
          <div className="flex-1 flex justify-start gap-[22vw] ">
            <div className="p-[1vw]  border-gray-200">1 Unit/ Box</div>
            <div className="p-[1vw]  border-gray-200">1 Unit/ Box</div>
          </div>
        </div>

        <div className="flex w-full border-b border-[#DADADA]  mobile:flex-col mobile:gap-[3vw] mobile:py-[3vw] mobile:pt-[6vw]">
          <div className="flex-[0.5] p-[1vw] font-light text-[#4564AC]">Linear Cutter Reload</div> 
        </div>
        <div className="flex w-full border-b border-gray-200 mobile:flex-col mobile:gap-[3vw] mobile:py-[3vw] mobile:pt-[6vw]">
          <div className="flex-[0.5] p-[1vw]">Reference Code
          </div>
          <div className="flex-1 flex justify-start gap-[20vw]  ">
            <div className="p-[1vw]  border-gray-200">ADVALC55R3
            </div>
            <div className="p-[1vw]  border-gray-200"> ADVALC75R3
            </div>
          </div>
        </div>

        <div className="flex w-full border-b border-gray-200 mobile:flex-col mobile:gap-[3vw] mobile:py-[3vw] mobile:pt-[6vw]">
          <div className="flex-[0.5] p-[1vw]">Pack Size</div>
          <div className="flex-1 flex justify-start gap-[21vw] ">
            <div className="p-[1vw]  border-gray-200">6 Units/ Box</div>
            <div className="p-[1vw]  border-gray-200">6 Units/ Box</div>
          </div>
        </div>

        <div className="flex w-full border-b border-gray-200 mobile:flex-col mobile:gap-[3vw] mobile:py-[3vw] mobile:pt-[6vw]">
          <div className="flex-[0.5] p-[1vw] text-[#4564AC]">Staple length before closure</div>
          <div className="flex-1 flex justify-start gap-[24vw] ">
            <div className="p-[1vw]  border-gray-200">4.3 mm</div>
            <div className="p-[1vw]  border-gray-200">4.3 mm</div>
          </div>
        </div>
        <div className="flex w-full border-b border-gray-200 mobile:flex-col mobile:gap-[3vw] mobile:py-[3vw] mobile:pt-[6vw]">
          <div className="flex-[0.5] p-[1vw] text-[#4564AC]">Approx. staple height closed</div>
          <div className="flex-1 flex justify-start gap-[14vw] ">
            <div className="p-[1vw]  border-gray-200">
                <ul>
                    <li className='flex items-center '><span className='h-[10px] w-[10px] rounded-full bg-[#5391C8] block mr-[0.5vw]'></span>Regular, 1.5 mm</li>
                    <li className='flex items-center '><span className='h-[10px] w-[10px] rounded-full bg-[#D7B56E] block mr-[0.5vw]'></span>Regular - Thick, 1.8 mm</li>
                    <li className='flex items-center '><span className='h-[10px] w-[10px] rounded-full bg-[#52B173] block mr-[0.5vw]'></span>Thick, 2.0 mm</li>
                </ul>
            </div>
            <div className="p-[1vw]  border-gray-200 ">
                <ul >
                    <li className='flex items-center '><span className='h-[10px] w-[10px] rounded-full bg-[#5391C8] block mr-[0.5vw]'></span>Regular, 1.5 mm</li>
                    <li className='flex items-center '><span className='h-[10px] w-[10px] rounded-full bg-[#D7B56E] block mr-[0.5vw]'></span>Regular - Thick, 1.8 mm</li>
                    <li className='flex items-center '><span className='h-[10px] w-[10px] rounded-full bg-[#52B173] block mr-[0.5vw]'></span>Thick, 2.0 mm</li>
                </ul></div>
          </div>
        </div>

        <div className="flex w-full border-b border-gray-200 mobile:flex-col mobile:gap-[3vw] mobile:py-[3vw] mobile:pt-[6vw]">
          <div className="flex-[0.5] p-[1vw] text-[#4564AC]">No. of pins</div>
          <div className="flex-1 flex justify-start gap-[27vw] ">
            <div className="p-[1vw]  border-gray-200">88</div>
            <div className="p-[1vw]  border-gray-200">118</div>
          </div>
        </div>

        <div className="flex w-full border-b border-gray-200 mobile:flex-col mobile:gap-[3vw] mobile:py-[3vw] mobile:pt-[6vw]">
          <div className="flex-[0.5] p-[1vw] text-[#4564AC]">Closed Staple Shape</div>
          <div className="flex-1 flex justify-start gap-[16vw] ">
            <div className="p-[1vw]  border-gray-200">X-Shaped Technology</div>
            <div className="p-[1vw]  border-gray-200">X-Shaped Technology</div>
          </div>
        </div>
        <div className="flex w-full border-b border-gray-200 mobile:flex-col mobile:gap-[3vw] mobile:py-[3vw] mobile:pt-[6vw]">
          <div className="flex-[0.5] p-[1vw] text-[#4564AC]">Rows of staples</div>
          <div className="flex-1 flex justify-start gap-[28vw] ">
            <div className="p-[1vw]  border-gray-200">6</div>
            <div className="p-[1vw]  border-gray-200">6</div>
          </div>
        </div>
        <div className="flex w-full border-b border-gray-200 mobile:flex-col mobile:gap-[3vw] mobile:py-[3vw] mobile:pt-[6vw]">
          <div className="flex-[0.5] p-[1vw] text-[#4564AC]">Length of staple line</div>
          <div className="flex-1 flex justify-start gap-[25vw] ">
            <div className="p-[1vw]  border-gray-200">60 mm</div>
            <div className="p-[1vw]  border-gray-200">80 mm</div>
          </div>
        </div>
        <div className="flex w-full border-b border-gray-200 mobile:flex-col mobile:gap-[3vw] mobile:py-[3vw] mobile:pt-[6vw]">
          <div className="flex-[0.5] p-[1vw] text-[#4564AC]">Shelf Life</div>
          <div className="flex-1 flex justify-start gap-[25vw] ">
            <div className="p-[1vw]  border-gray-200">3 Years</div>
            <div className="p-[1vw]  border-gray-200">3 Years</div>
          </div>
        </div>
        <div className="flex w-full border-b border-gray-200 mobile:flex-col mobile:gap-[3vw] mobile:py-[3vw] mobile:pt-[6vw]">
          <div className="flex-[0.5] p-[1vw] text-[#4564AC]">Usability</div>
          <div className="flex-1 flex justify-start gap-[23vw] ">
            <div className="p-[1vw]  border-gray-200">Single-use</div>
            <div className="p-[1vw]  border-gray-200">Single-use</div>
          </div>
        </div>
      </div>
    </Specifications>
 </>
  )
}

export default LC3Specifications