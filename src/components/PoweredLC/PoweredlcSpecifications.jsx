import React from 'react'
import Specifications from "../Specifications";

const PoweredlcSpecifications = () => {
  return (
    <>
        <Specifications
        textclass={"advastap-text"}
        bgimg={"/assets/endolc/specifications-bg.png"}
        heading={"Specification"}
      >
        <div  data-scroll-prevent  className="w-full text-[1.25vw] font-light mt-[3vw] text-[#4A4A4A]  mobile:text-[4.5vw] mobile:overflow-x-auto mobile:overflow-scroll mobile:mt-[7vw] tablet:text-[2.5vw]">
          <div className="flex w-full border-b border-[#DADADA] mobile:w-[180vw]">
            <div className=" p-[1vw] font-light mobile:w-[150vw]">REORDER CODE</div>
            <div className="flex-1 flex justify-evenly ">
              <div className="p-[1vw] font-light  border-[#DADADA] w-[25vw] mobile:w-[70vw] mobile:text-center">
                DESCRIPTION
              </div>
              <div className="p-[1vw] font-light  border-[#DADADA] mobile:w-[50vw]">
                SHAFT LENGTH
              </div>
              <div className="p-[1vw] font-light  border-[#DADADA] mobile:w-[30vw]">
                UNIT/BOX
              </div>
            </div>
          </div>

          <div className="flex w-full border-b border-[#DADADA] mobile:w-[180vw] ">
            <div className=" p-[1vw] mobile:w-[200vw]">ADVAPELC-M</div>
            <div className="flex-1 flex justify-between  ">
              <div className="p-[1vw]  border-b border-[#DADADA] mobile:w-[60vw] mobile:flex  mobile:text-center mobile:justify-center mobile:items-center ">
              Endoscopic Powered Stapler - Medium
              </div>
              <div className="p-[1vw]  border-b border-[#DADADA] mobile:w-[40vw] mobile:text-center mobile:mt-[2vw]">16cm</div>
              <div className="p-[1vw]  border-b border-[#DADADA] mobile:w-[40vw] mobile:text-center mobile:mt-[2vw]">1</div>
            </div>
          </div>


          <div className="flex w-full border-b border-[#DADADA] mobile:w-[180vw] ">
            <div className=" p-[1vw] mobile:w-[200vw]">ADVAPELC-L</div>
            <div className="flex-1 flex justify-between ">
              <div className="p-[1vw]  border-b border-[#DADADA] mobile:w-[60vw] mobile:flex  mobile:text-center mobile:justify-center mobile:items-center">
              Endoscopic Powered Stapler - Large
              </div>
              <div className="p-[1vw]  border-b border-[#DADADA] mobile:w-[40vw] mobile:text-center mobile:mt-[2vw]">26cm</div>
              <div className="p-[1vw]  border-b border-[#DADADA] mobile:w-[40vw] mobile:text-center mobile:mt-[2vw]">1</div>
            </div>
          </div>
        </div>
      </Specifications>
    </>
  )
}

export default PoweredlcSpecifications