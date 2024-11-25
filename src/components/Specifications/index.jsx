import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
// import { useLenis } from "@studio-freight/react-lenis"; // Import the useLenis hook
import { useLenis } from "lenis/react";

const Specifications = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const modalRef = useRef(null);
  const lenis = useLenis(); // Use the Lenis hook to get the Lenis instance

  const openModal = () => {
    setIsModalOpen(true);
    lenis && lenis.stop(); // Stop Lenis on modal open
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    gsap.to(modalRef.current, {
      opacity: 0,
      duration: 1,
      ease: "power2.out",
      onComplete: () => {
        setIsModalOpen(false);
        lenis && lenis.start(); // Start Lenis on modal close
        document.body.style.overflow = "";
      },
    });
  };

  useEffect(() => {
    if (isModalOpen) {
      gsap.fromTo(
        modalRef.current,
        { opacity: 0.5 },
        { opacity: 1, duration: 1, ease: "power2.out" }
      );
    }
  }, [isModalOpen]);
 

  return (
    <>
      <section id="advastapSpecifications">
        <div className="w-screen h-[30vh] mb-[-3vw] flex overflow-hidden items-center relative pl-[10vw]  tablet:h-[15vh] mobile:h-[20vh] mobile:mb-[-5vh]">
          <div className="flex items-center justify-center">
            <button onClick={openModal} className="flex items-center">
              <div className="text-white aeonik text-[2.5vw] uppercase mt-[-3vw] leading-[1.2] tracking-widest advastap-text mobile:text-[4.8vw] tablet:text-[5vw] mobile:mt-[-5vh]">
                <p>Specifications</p>
              </div>
              <div className="h-[1.5vw] w-[1.5vw] ml-[1vw] mobile:h-[3vw] mt-[-3vw] mobile:w-[3vw] tablet:h-[3vw] tablet:w-[3vw] mobile:mt-[-5vh]">
                <img
                  src="/assets/icons/arrow-up-right-purple.svg"
                  alt="arrow icon"
                />
              </div>
            </button>
          </div>
          <div className="w-[100%] h-[100%] absolute z-[-1]">
            <Image src="/assets/endolc/specifications-bg.png" fill alt="specifications-bg"/>
          </div>
        </div>

        {/* Modal */}
        {isModalOpen && (
          <>
          {/* <div className="fixed top-0 left-0 bg-black opacity-100 z-[99]" onClick={closeModal}></div> */}
          <div data-scroll-prevent className="fixed  w-screen h-screen top-0 left-0  flex items-center justify-center z-[999] bg-opacity-50 bg-black"  ref={modalRef}>
            <div className="bg-[#DADADA]  border border-white rounded-[40px] p-[5vw] w-[80vw] max-h-[90vh] overflow-y-auto modal-no-scrollbar  mobile:max-h-[85vh] mobile:py-[20vw] mobile:w-[90vw]">
              <div
                onClick={closeModal}
                className="cursor-pointer absolute top-[2vw] right-[2vw] flex items-center justify-center text-white border-[2px] p-[1vw] rounded-full border-white h-[3vw] w-[3vw] mobile:w-[7vw] mobile:h-[7vw] mobile:p-[1.5vw] mobile:top-[6vw] mobile:right-[5vw]"
              >
                <div className="h-full w-full relative ">
                  <Image
                    src="/assets/icons/cross-icon.svg"
                    fill
                    className="object-contain"
                    alt="cross-icon"
                  />
                </div>
              </div>
              <p className="text-[2.5vw] text-[#2A2A2A] font-light  leading-[1] mobile:text-[8vw] mobile:text-center  ">
               Specification
              </p>
              <div className="w-full text-[1.25vw] font-light mt-[3vw] text-[#4A4A4A] mobile:text-[4.5vw] tablet:text-[2.5vw] ">
                <div className="flex w-full border-b border-gray-200  mobile:flex-col mobile:gap-[3vw] mobile:py-[3vw] mobile:pt-[6vw]">
                  <div className="flex-[0.5] p-[1vw] font-light">
                   RERDER CODE
                  </div>
                  <div className="flex-1 flex justify-between ">
                    <div className="p-[1vw] font-light  border-gray-200 w-[25vw]">
                     DESCRIPTION
                    </div>
                    <div className="p-[1vw] font-light  border-gray-200">
                      SHAFT LENGTH
                    </div>
                    <div className="p-[1vw] font-light  border-gray-200">
                      UNIT/BOX
                    </div>
                  </div>
                </div>

                <div className="flex w-full border-b border-gray-200 mobile:flex-col mobile:gap-[3vw] mobile:py-[3vw] mobile:pt-[6vw]">
                  <div className="flex-[0.5] p-[1vw]">ADVAELC-S</div>
                  <div className="flex-1 flex justify-between  ">
                    <div className="p-[1vw]  border-gray-200">Endoscopic Linear Cutter - Short
                    </div>
                    <div className="p-[1vw]  border-gray-200">6cm</div>
                    <div className="p-[1vw]  border-gray-200">1</div>

                  </div>
                </div>

                <div className="flex w-full border-b border-gray-200 mobile:flex-col mobile:gap-[3vw] mobile:py-[3vw] mobile:pt-[6vw]">
                  <div className="flex-[0.5] p-[1vw]">ADVAELC-M</div>
                  <div className="flex-1 flex justify-between ">
                    <div className="p-[1vw]  border-gray-200">Endoscopic Linear Cutter - Medium</div>
                    <div className="p-[1vw]  border-gray-200">16cm</div>
                    <div className="p-[1vw]  border-gray-200">1</div>

                  </div>
                </div>

                <div className="flex w-full border-b border-gray-200 mobile:flex-col mobile:gap-[3vw] mobile:py-[3vw] mobile:pt-[6vw]">
                  <div className="flex-[0.5] p-[1vw]">ADVAELC-L</div>
                  <div className="flex-1 flex justify-between ">
                    <div className="p-[1vw]  border-gray-200">
                    Endoscopic Linear Cutter - Large
                    </div>
                    <div className="p-[1vw]  border-gray-200">
                    26cm
                    </div>
                    <div className="p-[1vw]  border-gray-200">
                    1
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          </>
        )}

      </section>
    </>
  );
};

export default Specifications;
