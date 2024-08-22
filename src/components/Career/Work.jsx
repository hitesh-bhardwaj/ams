import Image from "next/image";
import PrimaryButton from "../Button/PrimaryButton";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(useGSAP,ScrollTrigger)
import { paraAnim } from '@/components/gsapAnimations';

const WorkCard = ({ no, heading, src, para, btn ,className }) => {
  return (
    <>
      <div className={`w-[90vw] h-full flex flex-col gap-[4vw] rounded-[50px] pt-[2vw] pb-[5vw] bg-white px-[5vw] shadow-xl border border-black/10`}>
        <div className="flex gap-[1vw]">
          <div className="border-[1px] border-[#111111] rounded-[50%] h-[1.5vw] w-[1.5vw] flex justify-center items-center">
            {no}
            {/* <p className="text-[1vw] leading-[1]">{no}</p> */}
          </div>
          <p className="text-[1.2vw] font-light">{heading}</p>
        </div>
        <div className="flex justify-center items-center gap-x-[7vw] w-[80%] mx-auto">
          <div className="w-[35vw] h-[40vh] rounded-[40px] overflow-hidden relative">
            <Image src={src} fill alt=" Career Work" className="object-cover"/>
          </div>
          <div className="w-[50%] text-[2.5vw] aeonik leading-[1.25]  flex flex-col justify-between gap-[3vw] font-light text-[#111111]">
            <p >{para}</p>
            <PrimaryButton link="/" btnText={btn} className={"w-full"} />
          </div>
        </div>
      </div>
    </>
  );
};

const Work = () => {
  paraAnim()
  useGSAP(()=>{
    const tl = gsap.timeline({
      scrollTrigger:{
        trigger:".works-container",
        pin:true,
        scrub:true,
      }
      
    })
    tl.to(".feature-container2",{
          yPercent:-95,
          
          ease:"power4.out"
          
        })
        tl.to(".feature-container",{
          scale:0.90,
          delay:-0.5
        })
        tl.to(".feature-container3",{
          yPercent:-190,
          ease:"power4.out",
          delay:-0.3

        })
        tl.to(".feature-container2",{
          scale:0.95,
          delay:-0.5
          
        })
    
   
  })
  return (
    <section className="mb-[5%] h-screen w-screen bg-transparent works-container" id="work">
      <div className="flex flex-col  justify-center items-center relative">
        <div className="feature-container w-full flex justify-center items-center py-[7vw] mobile:py-[2vh] feature-card">
        <WorkCard
          no={1}
          heading={"Our work Environment"}
          src={"/assets/career/career-work.png"}
          para={
            "Innovative, collaborative, and Driven by a mission to improve lives."
          }
          btn={"Learn More About Us"}
         
        />

        </div>
        <div className="feature-container2 w-full flex justify-center items-center py-[7vw] mobile:py-[1vh] feature-card">
        <WorkCard
          no={2}
          heading={"Inclusivity & Equality"}
          src={"/assets/career/career-employees.png"}
          para={
            " Creating a space where every individual is valued and respected."
          }
          btn={"See Our Initiatives"}
          
        />

        </div>
       <div className="feature-container3 w-full flex justify-center items-center py-[7vw] mobile:py-[1vh] feature-card">
       <WorkCard
          no={3}
          heading={"Build your future with Us"}
          src={"/assets/career/career-medical.png"}
          para={"Contribute to cutting-edge medical technology."}
          btn={"Start Your Journey"}
          
        />

       </div>
      
      </div>
    </section>
  );
};

export default Work;
