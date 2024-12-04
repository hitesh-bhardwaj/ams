/* eslint-disable react-hooks/rules-of-hooks */
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { paraAnim, fadeUp } from "../gsapAnimations";
import { Media } from "../media";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const UncoverCard = ({ img, txt, className }) => {
  return (
    <>
      <Link href={"#"}>
        <div
          className={`w-[20.5vw] h-[11.5vw] relative flex justify-between items-center cursor-pointer rounded-[2vw] overflow-hidden border uncover-card bg-white/50 mobile:w-[75vw] mobile:h-[90vw] mobile:rounded-[9vw] mobile:flex-col-reverse mobile:justify-center mobile:py-[10%] mobile:pt-[30%] tablet:w-[40vw] tablet:h-[25vw]`}
        >
          <div className="flex flex-col justify-start items-start text-left w-full h-full pl-[2vw] pt-[2vw] mobile:items-center mobile:justify-end mobile:py-[4vw] mobile:pl-0">
            <p
              data-para-anim
              className="font-light text-[1.1vw] uppercase whitespace-nowrap mobile:text-[7vw] tablet:text-[3vw]"
            >
              {txt}
            </p>
          </div>
          <div className="h-[6vw] w-[24vw] mobile:w-[55vw] mobile:h-[60vw] tablet:w-[25vw] tablet:h-[25vw]">
            <div className="w-full h-full relative ">
              <Image src={img} fill alt="uncover" className="object-contain" />
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};

const Uncover = () => {
  paraAnim();
  fadeUp();
  if (globalThis.innerWidth < 1024) {
  } else {
    useGSAP(() => {
      gsap.from(".uncover-card", {
        yPercent: 50,
        opacity: 0,
        duration: 0.7,
        scrollTrigger: {
          trigger: ".uncover-card-container",
          start: "top 80%",
          end: "bottom 40%",
        },
        stagger: 0.1,
      });
    });
  }
  return (
    <section id="uncover" className="mobile:pb-[20%] py-[5%]">
      <div className=" flex flex-col items-center justify-center px-[4%]  pb-[4%]">
        <div className="mobile:mb-[7vw]">
          <h2 data-para-anim className="title-2 aeonik  ">
            Uncover More
          </h2>
        </div>
        <Media greaterThan="mobile">

        <div className="flex items-center justify-between gap-[3vw] mt-[7vw] uncover-card-container tablet:flex-wrap tablet:justify-center tablet:gap-[5vw]">
          <UncoverCard img={"/assets/advacryl/advapd.png"} txt={"AdvaPD"} />
          <UncoverCard
            img={"/assets/advacryl/advacryl-rapid.png"}
            txt={"Advacryl Rapid"}
          />
          <UncoverCard img={"/assets/advacryl/advamryl.png"} txt={"Advamryl"} />
          <UncoverCard
            img={"/assets/advacryl/advacryl-plus.png"}
            txt={"Advacryl Plus"}
          />
        </div>
        </Media>
        <Media at="mobile">

        <div className=" items-center justify-between gap-[3vw] mt-[7vw] mobile:flex  mobile:w-[100vw] mobile:px-[5vw] mobile:overflow-scroll ">
          <UncoverCard img={"/assets/advacryl/advapd.png"} txt={"AdvaPD"} />
          <UncoverCard
            img={"/assets/advacryl/advacryl-rapid.png"}
            txt={"Advacryl Rapid"}
          />
          <UncoverCard img={"/assets/advacryl/advamryl.png"} txt={"Advamryl"} />
          <UncoverCard
            img={"/assets/advacryl/advacryl-plus.png"}
            txt={"Advacryl Plus"}
          />
        </div>
        </Media>
      </div>
    </section>
  );
};

export default Uncover;
