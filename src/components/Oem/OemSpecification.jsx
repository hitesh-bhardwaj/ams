import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { useLenis } from "lenis/react";

const OemSpecification = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const modalRef = useRef(null);
  const lenis = useLenis();

  const openModal = () => {
    setIsModalOpen(true);
    lenis && lenis.stop();
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    gsap.to(modalRef.current, {
      opacity: 0,
      duration: 0.7,
      ease: "power3.out",
      onComplete: () => {
        setIsModalOpen(false);
        lenis && lenis.start();
        document.body.style.overflow = "";
      },
    });
  };

  useEffect(() => {
    if (isModalOpen) {
      gsap.fromTo(
        modalRef.current,
        { opacity: 0.5 },
        { opacity: 1, duration: 0.7, ease: "power3.out" }
      );
    }
  }, [isModalOpen]);
  return (
    <div
      className="relative"
      id="oem-modal"
    >
      <div>
      <button
        className="flex items-center gap-2 text-[#4D7EC8] text-[1.25vw] font-normal"
        onClick={openModal}
      >
        <span className="text">Technical Specification </span>
        <svg
          className="w-3"
          width="51"
          height="51"
          viewBox="0 0 51 51"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3.01701 48.0165L48.0168 3.01677L3.01701 48.0165ZM48.0168 3.01677L48.0795 46.9876L48.0168 3.01677ZM48.0168 3.01677L4.04596 2.95404L48.0168 3.01677Z"
            fill="currentColor"
          />
          <path
            d="M3.01701 48.0165L48.0168 3.01677M48.0168 3.01677L48.0795 46.9876M48.0168 3.01677L4.04596 2.95404"
            stroke="currentColor"
            strokeWidth="5"
            strokeLinecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </button>
      </div>
      {isModalOpen && (
        <>
          <div
            className="fixed  w-screen h-screen top-0 left-0  flex items-center justify-center z-[999] bg-opacity-50 bg-black/80 "
            ref={modalRef}
          >
            <div className="bg-[#efefef]  border  border-white rounded-[2vw] p-[3vw] pt-[4vw] w-[80vw] max-h-[95vh]  mobile:max-h-[95vh] mobile:py-[7vw] mobile:w-[95vw] mobile:rounded-[7vw]  tablet:w-[90vw] tablet:max-w-[95vw] tablet:rounded-[3.5vw] tablet:p-[4vw]">
              <div
                onClick={closeModal}
                className="cursor-pointer absolute top-[2vw] right-[2vw] flex items-center justify-center text-white border-[2px] p-[1vw] rounded-full border-white h-[3.5vw] w-[3.5vw] mobile:w-[7.5vw] mobile:h-[7.5vw] mobile:p-[1.5vw] mobile:top-[6vw] mobile:right-[5vw] tablet:h-[6vw] tablet:w-[6vw] tablet:p-[1.5vw]"
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
              <p className="text-[2.5vw] text-[#2A2A2A] font-extralight  leading-[1.2] ml-[1vw] mobile:text-[8vw] mobile:text-center tablet:text-[4vw] ">
                Technical Specification
              </p>
              <div className="flex w-full border-b border-[#DADADA] mobile:w-[130vw]">
            <div className=" p-[1vw] w-[20vw] tablet:w-[25vw] mobile:w-[50vw]">Connector type
            </div>
            <div className=" flex justify-start gap-[20vw] mobile:gap-[22vw] ">
              <div className="p-[1vw]  ">Push-pull
              </div>
              <div className="p-[1vw]  "> Push-click
              </div>
            </div>
          </div>

          <div className="flex w-full border-b border-[#DADADA] mobile:w-[130vw]">
            <div className=" p-[1vw] w-[20vw] tablet:w-[25vw] mobile:w-[50vw]">Quantity per pack</div>
            <div className=" flex justify-start gap-[25vw] tablet:gap-[30vw] mobile:gap-[38vw]">
              <div className="p-[1vw] ">5</div>
              <div className="p-[1vw] ">5</div>
            </div>
          </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default OemSpecification;
