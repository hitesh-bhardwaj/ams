import React, { useState, useEffect } from "react";
import { useLenis } from "@studio-freight/react-lenis";
import Image from "next/image";

const Specifications = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const lenis = useLenis();

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  useEffect(() => {
    if (lenis) {
      if (isModalOpen) {
        lenis.stop();
      } else {
        lenis.start();
      }
    }
  }, [isModalOpen, lenis]);

  return (
    <>
      <section>
        <div className="w-screen h-[20vh] flex items-center bg-[#020F20] pl-[10vw] tablet:h-[15vh]">
          <div className="flex items-center justify-center">
            <button onClick={openModal} className="flex items-center">
              <div className="text-white text-[2.35vw] uppercase tracking-widest gradient-text mobile:text-[7vw] tablet:text-[5vw]">
                <p>Specifications</p>
              </div>
              <div className="h-[2vw] w-[2vw] ml-[1.5vw] mobile:h-[6.5vw] mobile:w-[6.5vw] tablet:h-[4.5vw] tablet:w-[4.5vw]">
                <img
                  src="/assets/icons/arrow-up-right-gradient.svg"
                  alt="arrow icon"
                />
              </div>
            </button>
          </div>
        </div>
      </section>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
          <div className="bg-white rounded-[40px] p-[5vw] w-[80vw] max-h-[90vh] overflow-y-auto relative glassmorphism mobile:max-h-[100vh] mobile:w-[90vw]">
            <div
              onClick={closeModal}
              className="cursor-pointer absolute top-[3vw] right-[5vw] flex items-center justify-center text-white border-[2px] p-[1vw] rounded-full border-white h-[3vw] w-[3vw] mobile:w-[7vw] mobile:h-[7vw] mobile:p-[1.5vw] mobile:top-[6vw] mobile:right-[10vw]"
            >
              <div className="h-full w-full relative">
                <Image
                  src="/assets/icons/cross-icon.svg"
                  fill
                  className="object-contain"
                  alt="cross-icon"
                />
              </div>
            </div>
            <p className="text-[3.35vw] font-light mobile:text-[8vw]">
              Technical Specifications
            </p>
            <div className="w-full text-[1.65vw] font-light mt-[1vw] mobile:text-[4.5vw] tablet:text-[2.5vw] ">
   
  <div className="flex w-full border-b border-gray-300  mobile:flex-col mobile:gap-[3vw] mobile:py-[3vw] mobile:pt-[6vw]">
    <div className="flex-[0.5] p-[1vw] font-light">Specification</div>
    <div className="flex-1 flex justify-between ">
      <div className="p-[1vw] font-light  border-gray-300">ADVAPPH-33R3</div>
      <div className="p-[1vw] font-light  border-gray-300">ADVAPPH-34R3</div>
    </div>
  </div>

  <div className="flex w-full border-b border-gray-200 mobile:flex-col mobile:gap-[3vw] mobile:py-[3vw] mobile:pt-[6vw]">
    <div className="flex-[0.5] p-[1vw]">Reorder code</div>
    <div className="flex-1 flex justify-between  ">
      <div className="p-[1vw]  border-gray-200">ADVAPPH-33R3</div>
      <div className="p-[1vw]  border-gray-200">ADVAPPH-34R3</div>
    </div>
  </div>

  <div className="flex w-full border-b border-gray-200 mobile:flex-col mobile:gap-[3vw] mobile:py-[3vw] mobile:pt-[6vw]">
    <div className="flex-[0.5] p-[1vw]">Pin row construction</div>
    <div className="flex-1 flex justify-between ">
      <div className="p-[1vw]  border-gray-200">3 Row</div>
      <div className="p-[1vw]  border-gray-200">3 Row</div>
    </div>
  </div>

  <div className="flex w-full border-b border-gray-200 mobile:flex-col mobile:gap-[3vw] mobile:py-[3vw] mobile:pt-[6vw]">
    <div className="flex-[0.5] p-[1vw]">Pin material</div>
    <div className="flex-1 flex justify-between ">
      <div className="p-[1vw]  border-gray-200">Titanium Grade 1</div>
      <div className="p-[1vw]  border-gray-200">Titanium Grade 1</div>
    </div>
  </div>

  <div className="flex w-full border-b border-gray-200 mobile:flex-col mobile:gap-[3vw] mobile:py-[3vw] mobile:pt-[6vw]">
    <div className="flex-[0.5] p-[1vw]">Pin per cartridge</div>
    <div className="flex-1 flex  justify-between ">
      <div className="p-[1vw]  border-gray-200">48</div>
      <div className="p-[1vw]  border-gray-200">48</div>
    </div>
  </div>

  <div className="flex w-full border-b border-gray-200 mobile:flex-col mobile:gap-[3vw] mobile:py-[3vw] mobile:pt-[6vw]">
    <div className="flex-[0.5] p-[1vw]">Staple height</div>
    <div className="flex-1 flex  justify-between ">
      <div className="p-[1vw]  border-gray-200">3.8 ±0.3 mm</div>
      <div className="p-[1vw]  border-gray-200">3.8 ±0.3 mm</div>
    </div>
  </div>

  <div className="flex w-full border-b border-gray-200 mobile:flex-col mobile:gap-[3vw] mobile:py-[3vw] mobile:pt-[6vw]">
    <div className="flex-[0.5] p-[1vw]">Closed staple shape</div>
    <div className="flex-1 flex justify-between ">
      <div className="p-[1vw]  border-gray-200">B Form</div>
      <div className="p-[1vw]  border-gray-200">B Form</div>
    </div>
  </div>

  <div className="flex w-full border-b border-gray-200 mobile:flex-col mobile:gap-[3vw] mobile:py-[3vw] mobile:pt-[6vw]">
    <div className="flex-[0.5] p-[1vw]">Housing capacity (cc)</div>
    <div className="flex-1 flex  justify-between ">
      <div className="p-[1vw]  border-gray-200">15</div>
      <div className="p-[1vw]  border-gray-200">17</div>
    </div>
  </div>

  <div className="flex w-full border-b border-gray-200 mobile:flex-col mobile:gap-[3vw] mobile:py-[3vw] mobile:pt-[6vw]">
    <div className="flex-[0.5] p-[1vw]">Inner lumen diameter</div>
    <div className="flex-1 flex justify-between ">
      <div className="p-[1vw]  border-gray-200">22.3 mm</div>
      <div className="p-[1vw]  border-gray-200">23.7 mm</div>
    </div>
  </div>

  <div className="flex w-full border-b border-gray-200 mobile:flex-col mobile:gap-[3vw] mobile:py-[3vw] mobile:pt-[6vw]">
    <div className="flex-[0.5] p-[1vw]">Qty/box</div>
    <div className="flex-1 flex  justify-between ">
      <div className="p-[1vw]  border-gray-200">1</div>
      <div className="p-[1vw]  border-gray-200">1</div>
    </div>
  </div>

  <div className="flex w-full border-b border-gray-200 mobile:flex-col mobile:gap-[3vw] mobile:py-[3vw] mobile:pt-[6vw]">
    <div className="flex-[0.5] p-[1vw]">Shelf life</div>
    <div className="flex-1 flex justify-between ">
      <div className="p-[1vw]  border-gray-200">3 years</div>
      <div className="p-[1vw]  border-gray-200">3 years</div>
    </div>
  </div>

  <div className="flex w-full border-b border-gray-200 mobile:flex-col mobile:gap-[3vw] mobile:py-[3vw] mobile:pt-[6vw]">
    <div className="flex-[0.5] p-[1vw]">Usability</div>
    <div className="flex-1 flex justify-between  ">
      <div className="p-[1vw]  border-gray-200">Single-use</div>
      <div className="p-[1vw]  border-gray-200">Single-use</div>
    </div>
  </div>
</div>

          </div>
        </div>
      )}
    </>
  );
};

export default Specifications;
