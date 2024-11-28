import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { useLenis } from "lenis/react";

const Specifications = ({children,heading,textclass,bgimg}) => {
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
    <>
      <section id="specifications" className="relative ">
        <div className="w-screen h-[25vh]  flex overflow-hidden items-center pt-[3vw] pl-[10vw]  tablet:h-[15vh] mobile:h-[18vh] ">
          <div className="flex items-center justify-center">
            <button onClick={openModal} className="flex items-center">
              <div className={`text-white aeonik text-[2.5vw] uppercase mt-[-3vw] leading-[1.2] tracking-widest ${textclass} mobile:text-[7vw] tablet:text-[5vw] mobile:mt-0`}>
                <p>Specifications</p>
              </div>
              <div className="h-[1.5vw] w-[1.5vw] ml-[1vw] mobile:h-[3vw] mt-[-3vw] mobile:w-[5vw] tablet:h-[3vw] tablet:w-[3vw]">
                <img
                  src="/assets/icons/arrow-up-right-purple.svg"
                  alt="arrow icon"
                />
              </div>
            </button>
          </div>
         
        </div>
        {isModalOpen && (
          <>
          <div className="fixed  w-screen h-screen top-0 left-0  flex items-center justify-center z-[999] bg-opacity-50 bg-black/50 "  ref={modalRef}>
            <div  data-scroll-prevent className="bg-[#efefef]  border  border-white rounded-[1.5vw] p-[3vw] w-[80vw] max-h-[95vh]  modal-no-scrollbar  mobile:max-h-[95vh] mobile:py-[7vw] mobile:w-[95vw] mobile:rounded-[9vw]">
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
               {heading}
              </p>
             {children}
            </div>
          </div>
          </>
        )}
 <div className="w-[100vw] h-[100%] absolute z-[-1] top-0 left-0">
            <Image src={bgimg} fill alt="specifications-bg" className="object-cover"/>
          </div>
      </section>
    </>
  );
};

export default Specifications;
