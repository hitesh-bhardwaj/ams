import React from 'react'
import Specifications from '../Specifications'

const ReloadsSpecifications = () => {
  return (
   <>
     <Specifications
        textclass={"reloads-text"}
        bgimg={"/assets/endolc/specifications-bg.png"}
        heading={"Specification"}
        color={"#FB4BCC"}
      >
        <div data-lenis-prevent  className="w-full text-[1.25vw] font-light py-[3vw] text-[#4A4A4A] mobile:py-[5vw] mobile:text-[4.5vw] tablet:text-[2.5vw]  mobile:overflow-x-scroll mobile:mt-[7vw] tablet:py-[4.5vw] tablet:overflow-x-scroll">
          <div className="flex w-full pb-[1vw] mobile:w-[200vw] tablet:w-[150vw]">
            <div className=" p-[1vw] font-light w-[15vw] mobile:w-[25%] tablet:w-[15%]">REORDER CODE</div>
            <div className="flex-1 flex justify-evenly ">
              <div className="p-[1vw] font-light   w-[26.5vw] mobile:w-[73%] tablet:w-[40%]">
                DESCRIPTION
              </div>
              <div className="p-[1vw] font-light  w-[13.5vw] mobile:w-[30%] tablet:w-[16%]">
                SHAFT LENGTH
              </div>
              <div className="p-[1vw] font-light  w-[8vw] mobile:w-[20%] tablet:w-[12%]">
                UNIT/BOX
              </div>
            </div>
          </div>


          <div className="flex w-full border-b  border-[#DADADA] mt-[1vw] mobile:w-[200vw] tablet:w-[150vw]">
            <div className=" p-[1vw] w-[15vw] mobile:w-[25%] tablet:w-[15%]">ADVAPELC-M</div>
            <div className="flex-1 flex justify-center gap-[3vw] tablet:gap-[10vw]">
              <div className="p-[1vw]  b w-[25vw] mobile:w-[73%] tablet:w-[40%]">
                Endoscopic Powered Stapler - Medium
              </div>
              <div className="p-[1vw]  b w-[13vw] text-center mobile:w-[30%]  mobile:mt-[2vw] tablet:w-[16%]">16cm</div>
              <div className="p-[1vw]  b w-[10vw] text-center mobile:w-[20%]  mobile:mt-[2vw] tablet:w-[12%]">1</div>
            </div>
          </div>

          <div className="flex w-full border-b border-[#DADADA] mt-[1vw] mobile:w-[200vw] tablet:w-[150vw]">
            <div className=" p-[1vw] w-[15vw] mobile:w-[25%] tablet:w-[15%]">ADVAPELC-L</div>
            <div className="flex-1 flex justify-center gap-[3vw] tablet:gap-[10vw]">
              <div className="p-[1vw]  w-[25vw] mobile:w-[73%] tablet:w-[40%]">
                Endoscopic Powered Stapler - Large
              </div>
              <div className="p-[1vw]  w-[13vw] text-center mobile:w-[30%]  mobile:mt-[2vw] tablet:w-[16%]">26cm</div>
              <div className="p-[1vw]  w-[10vw] text-center mobile:w-[20%]  mobile:mt-[2vw] tablet:w-[12%]">1</div>
            </div>
          </div>
        </div>
      </Specifications>
   </>
  )
}

export default ReloadsSpecifications