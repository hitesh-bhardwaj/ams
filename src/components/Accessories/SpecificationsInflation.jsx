import React from 'react'
import Specifications from '../Specifications'

const SpecificationsInflation = () => {
  return (
    <>
    <Specifications
     textclass={"advastap-text"}
     bgimg={"/assets/accessories/specifications-bg.png"}
     heading={"Technical Specification"}>
       <div  className="w-full text-[1.25vw] font-light mt-[1vw] text-[#4A4A4A]  mobile:text-[4.5vw] tablet:text-[2.5vw]  ">
          <div  className="flex w-full border-b border-gray-200  mobile:flex-col mobile:gap-[3vw] mobile:py-[3vw]  ">
            <div className="flex-[0.5] p-[1vw] font-light"> Precise inflation up to 30 ATM (440 PSI)
            </div>
          </div>
          <div className="flex w-full border-b border-gray-200  mobile:flex-col mobile:gap-[3vw] mobile:py-[3vw] ">
            <div className="flex-[0.5] p-[1vw] font-light"> Analog display, visual pressure control
            </div>
          </div>
          <div className="flex w-full border-b border-gray-200  mobile:flex-col mobile:gap-[3vw] mobile:py-[3vw] ">
            <div className=" p-[1vw] font-light">Self-locking mechanism for easy locking as well as gradual and rapid pressure
            </div>
          </div>
          <div className="flex w-full border-b border-gray-200  mobile:flex-col mobile:gap-[3vw] mobile:py-[3vw] ">
            <div className="flex-[0.5] p-[1vw] font-light"> Stopcock: 3-way with OFF/ON control (500 PSI)

            </div>
          </div>
          <div className="flex w-full border-b border-gray-200  mobile:flex-col mobile:gap-[3vw] mobile:py-[3vw] ">
            <div className="flex-[0.5] p-[1vw] font-light"> Screw type 
            </div>
          </div>
          <div className="flex w-full border-b border-gray-200  mobile:flex-col mobile:gap-[3vw] mobile:py-[3vw] ">
            <div className="flex-[0.5] p-[1vw] font-light"> Material: Syringe body - polycarbonate, 	latex free

            </div>
          </div>
          <div className="flex w-full border-b border-gray-200  mobile:flex-col mobile:gap-[3vw] mobile:py-[3vw] ">
            <div className="flex-[0.5] p-[1vw] font-light">Sterilization - ETO
            </div>
          </div>
          

        </div>
        <div><p className='text-[2.5vw] text-[#2A2A2A] font-light  leading-[1] py-[0.5vw] mobile:text-[8vw] mobile:text-center '>Ordering Information</p></div>
        <div  data-scroll-prevent className="w-full text-[1.25vw] font-light mt-[1vw] text-[#4A4A4A]  mobile:text-[4.5vw] tablet:text-[2.5vw] mobile:overflow-x-scroll ">
          <div className="flex w-full border-b border-[#DADADA] mobile:py-[3vw]  mobile:w-[180vw]">
            <div className="flex-[0.5] p-[1vw] font-light mobile:w-[40vw]"> Code</div>
            <div className="flex-1 flex justify-between ">
              <div className="p-[1vw] font-light  border-[#DADADA] mobile:w-[40vw] mobile:text-center">
              Fluid barrel volume
              </div>
              <div className="p-[1vw] font-light  border-[#DADADA] mobile:w-[40vw] mobile:text-center">
              Max pressure rate ATM/BAR
              </div>
              <div className="p-[1vw] font-light  border-[#DADADA] mobile:w-[40vw] mobile:text-center">
              Extension tube length
              </div>
              <div className="p-[1vw] font-light  border-[#DADADA] mobile:w-[40vw] mobile:text-center">
              Quantity per box
              </div>
            </div>
          </div>

          <div className="flex w-full border-b border-[#DADADA]  ">
            <div className="flex-[0.5] p-[1vw]">ABID6002
            </div>
            <div className="flex-1 flex justify-between  ">
              <div className="p-[1vw]  border-[#DADADA] mobile:w-[40vw] mobile:text-center">30 ml
              </div>
              <div className="p-[1vw]  border-[#DADADA] mobile:w-[40vw] mobile:text-center">30
              </div>
              <div className="p-[1vw]  border-[#DADADA] mobile:w-[40vw] mobile:text-center">9.84 in/ 25 cm
              </div>
              <div className="p-[1vw]  border-[#DADADA] mobile:w-[40vw] mobile:text-center">1 unit
              </div>
            </div>
          </div>

         
        </div>
      </Specifications>

    </>
  )
}

export default SpecificationsInflation