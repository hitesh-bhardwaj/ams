import React, { useRef, useEffect } from "react";
import Image from "next/image";
import PrimaryButton from "../Button/PrimaryButton";
import gsap from "gsap";

const WorkCard = ({ no, heading, src, para, btn, cardRef }) => {
  return (
    <div
      ref={cardRef}
      className="w-[99%] flex flex-col gap-[4vw] rounded-[50px] work-card py-[5%] card"
    >
      <div className="flex justify-center w-[16%] ml-[5%]">
        <div className="border-[1px] border-[#111111] rounded-[50%] h-[1.5vw] w-[1.5vw] flex justify-center items-center">
          <p className="text-[1vw]">{no}</p>
        </div>
        <p className="text-[1.2vw] font-light ml-[1vw]">{heading}</p>
      </div>
      <div className="flex justify-center items-center gap-x-[7vw] container-sm">
        <div className="w-[35vw] h-[24vw] rounded-[60px] overflow-hidden relative">
          <Image src={src} fill alt="Career Work" />
        </div>
        <div className="w-[40%] text-[2.5vw] aeonik leading-[1.25] flex flex-col justify-between gap-[3vw] font-light text-[#111111]">
          <p>{para}</p>
          <PrimaryButton link="/" btnText={btn} className={"w-full"} />
        </div>
      </div>
    </div>
  );
};

const TryCard = () => {
  const cardsRef = useRef([]);

  useEffect(() => {
    const importScrollTrigger = async () => {
      const ScrollTrigger = (await import("gsap/ScrollTrigger")).default;
      gsap.registerPlugin(ScrollTrigger);

      const cards = cardsRef.current;

      cards.forEach((card, index) => {
        gsap.fromTo(
          card,
          {
            scale: 1,
          },
          {
            scale: 0.8,
            scrollTrigger: {
              trigger: card,
              start: () => `top bottom-=100`,
              end: () => `top top+=40`,
              scrub: true,
              markers: true,
              invalidateOnRefresh: true,
            },
          }
        );

        ScrollTrigger.create({
          trigger: card,
          start: "top top",
          pin: true,
          pinSpacing: false,
          markers: true,
          id: "pin",
          end: "max",
          invalidateOnRefresh: true,
        });
      });
    };

    importScrollTrigger();
  }, []);

  return (
    <section className="mb-[5%] mt-[-13vw]" id="work">
      <div className="try-container">
        <div className="w-full flex flex-col justify-center items-center cards">
          <WorkCard
            no={1}
            heading={"Our work Environment"}
            src={"/assets/career/career-work.png"}
            para={"Innovative, collaborative, and Driven by a mission to improve lives."}
            btn={"Learn More About Us"}
            cardRef={(el) => (cardsRef.current[0] = el)}
          />
          <WorkCard
            no={2}
            heading={"Inclusivity & Equality"}
            src={"/assets/career/career-employees.png"}
            para={"Creating a space where every individual is valued and respected."}
            btn={"See Our Initiatives"}
            cardRef={(el) => (cardsRef.current[1] = el)}
          />
          <WorkCard
            no={3}
            heading={"Build your future with Us"}
            src={"/assets/career/career-medical.png"}
            para={"Contribute to cutting-edge medical technology."}
            btn={"Start Your Journey"}
            cardRef={(el) => (cardsRef.current[2] = el)}
          />
        </div>
      </div>
      <div className="container2 mt-[40px] w-full h-[400px]"></div>
    </section>
  );
};

export default TryCard;
