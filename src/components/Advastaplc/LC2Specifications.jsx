import React from "react";
import Specifications from "../Specifications";
import Image from "next/image";

const LC2Specifications = () => {
  return (
    <>
      <Specifications
        textclass={"advastap-text"}
        bgimg={"/assets/advastaplc/closure-bg-1.png"}
        heading={"Technical Specification"}
      >
        <div
          data-lenis-prevent
          className="w-full h-[70vh] text-[1.25vw] font-light mt-[3vw] text-[#4A4A4A] overflow-y-scroll  mobile:text-[4.5vw] tablet:text-[2.5vw] "
        >

          <div className="flex w-full border-b border-gray-200 mobile:flex-col mobile:gap-[3vw] mobile:py-[3vw] mobile:pt-[6vw]">
            <div className="flex-[0.5] p-[1vw]">Cartridge order codes</div>
            <div className=" flex-1 flex justify-between">
              <div className="p-[1vw] px-[0.5vw] border-gray-200 text-[1.15vw]">ADVALCR60B</div>
              <div className="p-[1vw] px-[0.5vw]  border-gray-200 text-[1.15vw]">ADVALCR60G</div>
              <div className="p-[1vw] px-[0.5vw] border-gray-200 text-[1.15vw]"> ADVALCR80B</div>
              <div className="p-[1vw] px-[0.5vw] border-gray-200 text-[1.15vw]"> ADVALCR80G</div>
              <div className="p-[1vw] px-[0.5vw] border-gray-200 text-[1.15vw]"> ADVALCR100B</div>
              <div className="p-[1vw] px-[0.5vw] border-gray-200 text-[1.15vw]"> ADVALCR100G</div>
            </div>
          </div>

          <div className="flex w-full border-b border-gray-200 mobile:flex-col mobile:gap-[3vw] mobile:py-[3vw] mobile:pt-[6vw]">
            <div className="flex-[0.5] p-[1vw]">Linear cutter order codes</div>
            <div className="flex-1 flex justify-between  ">
              <div className="p-[1vw]  border-gray-200">ADVALC60</div>
              <div className="p-[1vw]  border-gray-200">ADVALC6O</div>
              <div className="p-[1vw]  border-gray-200"> ADVALC80</div>
              <div className="p-[1vw]  border-gray-200"> ADVALC80</div>
              <div className="p-[1vw]  border-gray-200"> ADVALC100</div>
              <div className="p-[1vw]  border-gray-200"> ADVALC100</div>
            </div>
          </div>

          <div className="flex w-full border-b border-gray-200 mobile:flex-col mobile:gap-[3vw] mobile:py-[3vw] mobile:pt-[6vw]">
            <div className="flex-[0.5] p-[1vw]">Staple length before closure</div>
            <div className="flex-1 flex justify-between  ">
              <div className="p-[1vw]  border-gray-200">3.8 mm</div>
              <div className="p-[1vw]  border-gray-200">4.8 mm</div>
              <div className="p-[1vw]  border-gray-200"> 3.8 mm</div>
              <div className="p-[1vw]  border-gray-200"> 4.8 mm</div>
              <div className="p-[1vw]  border-gray-200"> 3.8 mm</div>
              <div className="p-[1vw]  border-gray-200"> 4.8 mm</div>
            </div>
          </div>


          <div className="flex w-full border-b border-gray-200 mobile:flex-col mobile:gap-[3vw] mobile:py-[3vw] mobile:pt-[6vw]">
            <div className="flex-[0.5] p-[1vw]">Approx. staple height closed</div>
            <div className="flex-1 flex justify-between  ">
              <div className="p-[1vw]  border-gray-200">1.6 mm</div>
              <div className="p-[1vw]  border-gray-200">2.0 mm</div>
              <div className="p-[1vw]  border-gray-200"> 1.6 mm</div>
              <div className="p-[1vw]  border-gray-200"> 2.0 mm</div>
              <div className="p-[1vw]  border-gray-200"> 1.6 mm</div>
              <div className="p-[1vw]  border-gray-200"> 2.0 mm</div>
            </div>
          </div>

          <div className="flex w-full border-b border-gray-200 mobile:flex-col mobile:gap-[3vw] mobile:py-[3vw] mobile:pt-[6vw]">
            <div className="flex-[0.5] p-[1vw]">Color</div>
            <div className="flex-1 flex justify-between  ">
              <div className="p-[1vw]  border-gray-200"><Image src="/assets/advastaplc/blue-cartridge.png" height={50} width={60} alt="blue-cartridge"/></div>
              <div className="p-[1vw]  border-gray-200"><Image src="/assets/advastaplc/green-cartridge.png" height={50} width={60} alt="green-cartridge"/></div>
              <div className="p-[1vw]  border-gray-200"> <Image src="/assets/advastaplc/blue-cartridge.png" height={50} width={60} alt="blue-cartridge"/></div>
              <div className="p-[1vw]  border-gray-200"> <Image src="/assets/advastaplc/green-cartridge.png" height={50} width={60} alt="green-cartridge"/></div>
              <div className="p-[1vw]  border-gray-200"> <Image src="/assets/advastaplc/blue-cartridge.png" height={50} width={60} alt="blue-cartridge"/></div>
              <div className="p-[1vw]  border-gray-200"> <Image src="/assets/advastaplc/green-cartridge.png" height={50} width={60} alt="green-cartridge"/></div>
            </div>
          </div>

          <div className="flex w-full border-b border-gray-200 mobile:flex-col mobile:gap-[3vw] mobile:py-[3vw] mobile:pt-[6vw]">
            <div className="flex-[0.5] p-[1vw]">No. of reloads</div>
            <div className="flex-1 flex justify-between  ">
              <div className="p-[1vw]  border-gray-200">6</div>
              <div className="p-[1vw]  border-gray-200">6</div>
              <div className="p-[1vw]  border-gray-200"> 6</div>
              <div className="p-[1vw]  border-gray-200"> 6</div>
              <div className="p-[1vw]  border-gray-200"> 6</div>
              <div className="p-[1vw]  border-gray-200"> 6</div>
            </div>
          </div>
          
          <div className="flex w-full border-b border-gray-200 mobile:flex-col mobile:gap-[3vw] mobile:py-[3vw] mobile:pt-[6vw]">
            <div className="flex-[0.5] p-[1vw]">No. of pins</div>
            <div className="flex-1 flex justify-between  ">
              <div className="p-[1vw]  border-gray-200">64</div>
              <div className="p-[1vw]  border-gray-200">64</div>
              <div className="p-[1vw]  border-gray-200"> 84</div>
              <div className="p-[1vw]  border-gray-200"> 84</div>
              <div className="p-[1vw]  border-gray-200"> 104</div>
              <div className="p-[1vw]  border-gray-200"> 104</div>
            </div>
          </div>

          <div className="flex w-full border-b border-gray-200 mobile:flex-col mobile:gap-[3vw] mobile:py-[3vw] mobile:pt-[6vw]">
            <div className="flex-[0.5] p-[1vw]">Rows of staples</div>
            <div className="flex-1 flex justify-between  ">
              <div className="p-[1vw]  border-gray-200">4</div>
              <div className="p-[1vw]  border-gray-200">4</div>
              <div className="p-[1vw]  border-gray-200">4</div>
              <div className="p-[1vw]  border-gray-200">4</div>
              <div className="p-[1vw]  border-gray-200">4</div>
              <div className="p-[1vw]  border-gray-200">4</div>
            </div>
          </div>

          <div className="flex w-full border-b border-gray-200 mobile:flex-col mobile:gap-[3vw] mobile:py-[3vw] mobile:pt-[6vw]">
            <div className="flex-[0.5] p-[1vw]">Length of staple line</div>
            <div className="flex-1 flex justify-between  ">
              <div className="p-[1vw]  border-gray-200">61</div>
              <div className="p-[1vw]  border-gray-200">61</div>
              <div className="p-[1vw]  border-gray-200">81</div>
              <div className="p-[1vw]  border-gray-200">81</div>
              <div className="p-[1vw]  border-gray-200">101</div>
              <div className="p-[1vw]  border-gray-200">101</div>
            </div>
          </div>

          <div className="flex w-full border-b border-gray-200 mobile:flex-col mobile:gap-[3vw] mobile:py-[3vw] mobile:pt-[6vw]">
            <div className="flex-[0.5] p-[1vw]">Shelf life</div>
            <div className="flex-1 flex justify-between  ">
              <div className="p-[1vw]  border-gray-200">3 Years</div>
              <div className="p-[1vw]  border-gray-200">3 Years</div>
              <div className="p-[1vw]  border-gray-200">3 Years</div>
              <div className="p-[1vw]  border-gray-200">3 Years</div>
              <div className="p-[1vw]  border-gray-200">3 Years</div>
              <div className="p-[1vw]  border-gray-200">3 Years</div>
            </div>
          </div>

          <div className="flex w-full border-b border-gray-200 mobile:flex-col mobile:gap-[3vw] mobile:py-[3vw] mobile:pt-[6vw]">
            <div className="flex-[0.5] p-[1vw]">Usability</div>
            <div className="flex-1 flex justify-start gap-[2vw]  ">
              <div className="p-[1vw]  border-gray-200">Single-use</div>
              <div className="p-[1vw]  border-gray-200">Single-use</div>
              <div className="p-[1vw]  border-gray-200">Single-use</div>
              <div className="p-[1vw]  border-gray-200">Single-use</div>
              <div className="p-[1vw]  border-gray-200">Single-use</div>
              <div className="p-[1vw]  border-gray-200">Single-use</div>
            </div>
          </div>
        </div>
      </Specifications>
    </>
  );
};

export default LC2Specifications;
