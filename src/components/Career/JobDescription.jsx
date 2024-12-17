import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { useLenis } from "lenis/react";
import PrimaryButton from '../Button/PrimaryButton';

const JobDescription = ({ onClose }) => {
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
  
  const handleBackgroundClick = (e) => {
    if (e.target.id === 'job-description' || !e.target.id=='jd-block') {
      onClose();
    }
  };
  const handleLinkClick = (href) => {
    router.push(href).then(() => {
      window.location.reload();
    });
  }; 

  return (
    <>
      <section
        id="job-description"
        onClick={handleBackgroundClick}
        className="w-screen h-screen fixed bg-black/50 z-[999] top-0 left-0"
         // Close modal on click outside the card
      >  <button
   
      className="absolute flex right-[5%] top-[5%]  items-center gap-3"
      onClick={onClose}
    >
      <span className="aeonik content-p text-head leading-tight !text-white">
        Close
      </span>
      <span className="w-[2.2vw] h-[2.2vw] flex justify-center items-center p-2 border border-head rounded-full tablet:w-[4vw] tablet:h-[4vw] mobile:w-[10vw] mobile:h-[10vw] mobile:p-[2.8vw]">
        <Image
          src="/assets/icons/close-icon.svg"
          alt="Close Menu"
          className='invert'
          width={20}
          height={20}
        />
      </span>
    </button>
        <div className="container-lg flex items-center justify-center h-full" >
          <div className="w-[70vw] h-[45vw]  rounded-[3vw] overflow-hidden relative px-[5vw] pt-[3vw] bg-white jd-card" id='jd-block'>
            <div className="w-full h-full absolute top-0 left-0">
              <Image
                src="/assets/career/jd-bg.png"
                alt="jd-bg"
                fill
                className="object-cover w-full h-full"
              />
            </div>
            <div data-lenis-prevent className='overflow-y-scroll overflow-visible h-full w-full'>
            <div className="w-full h-full flex flex-col gap-[2vw] text-[1.3vw] !text-[#111111] relative z-[10] font-light">
              <p>
                Experience: 3-5 years (medical devices/interventional cardiology
                preferred) Qualification: Bachelor&apos;s in Life
                Sciences/Biomedical Engineering (MBA preferred)
              </p>

              <ul className="list-disc">
                Key Responsibilities
                <div className="pl-[2%]">
                  <li>Develop product strategies and roadmaps.</li>
                  <li>
                    Conduct market research to identify trends and opportunities.
                  </li>
                  <li>
                    Collaborate with R&D on product development and compliance.
                  </li>
                  <li>Lead product launches and create marketing plans.</li>
                  <li>Provide training and support to sales teams.</li>
                </div>
              </ul>
              <ul className="list-disc">
                Skills Required
                <div className="pl-[2%]">
                  <li>
                    Strong understanding of interventional cardiology.
                  </li>
                  <li>Strategic thinking and analytical skills.</li>
                  <li>
                    Excellent communication and presentation abilities.
                  </li>
                </div>
              </ul>
              <p>Join AMS and be part of driving healthcare innovation!</p>
              <div className="mt-[2vw]">
                <PrimaryButton text="Apply Now" link="/" onClick={handleLinkClick} />
              </div>
            </div>
          

            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default JobDescription;
