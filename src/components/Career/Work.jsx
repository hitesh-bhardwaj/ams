/* eslint-disable react-hooks/rules-of-hooks */
import Image from "next/image";
import PrimaryButton from "../Button/PrimaryButton";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(useGSAP,ScrollTrigger)
import { paraAnim , imgAnim , paraAnimation , fadeUp} from '@/components/gsapAnimations';

const WorkCard = ({ no, heading, src, para, btn ,className }) => {
  return (
    <>
      <div className={`w-[90vw] h-full flex flex-col gap-[4vw] rounded-[50px] pt-[2vw] pb-[5vw] bg-white px-[5vw] shadow-xl border border-black/10 mobile:rounded-[6vw] fadeup`}>
        <div className="flex gap-[1vw] mobile:gap-[4vw]">
          <div className="border-[1px] border-[#111111] rounded-[50%] h-[1.5vw] w-[1.5vw] flex justify-center items-center mobile:h-[7vw] mobile:w-[7vw] mobile:mt-[1vw]">
            {no}
            {/* <p className="text-[1vw] leading-[1]">{no}</p> */}
          </div>
          <p className="text-[1.2vw] font-light mobile:text-[6vw]">{heading}</p>
        </div>
        <div className="flex justify-center items-center gap-x-[7vw] w-[80%] mx-auto mobile:flex-col">
          <div className="w-[35vw] h-[40vh] rounded-[40px] overflow-hidden relative mobile:w-[85vw] mobile:rounded-[7vw] fadeup">
            <Image src={src} fill alt="Career Work" className="object-cover"/>
          </div>
          <div className="w-[50%] text-[2.5vw] aeonik leading-[1.25]  flex flex-col justify-between gap-[3vw] font-light text-[#111111] mobile:w-full mobile:text-[9vw] mobile:text-center mobile:leading-[1.1] mobile:items-center mobile:gap-[12vw] mobile:py-[10vw]">
            <p className="overflow-hidden" ><span className="block para-animation">{para}
              </span></p>
            <PrimaryButton link="/" btnText={btn} className={"mobile:py-[4vw] mobile:px-[7vw] fadeup"} />
          </div>
        </div>
      </div>
    </>
  );
};

const Work = () => {
  paraAnim()
  imgAnim()
  paraAnimation()
  fadeUp()
  if(globalThis.innerWidth<1024){

  }else{

    useGSAP(()=>{
      const tl = gsap.timeline({
        scrollTrigger:{
          trigger:".works-container",
          pin:true,
          start:"top top",
          end:"bottom -=1000",
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
  }
  return (
    <section className="mb-[5%] h-screen w-screen bg-transparent works-container mobile:h-full" id="work">
      <div className="flex flex-col  justify-center items-center relative">
        <div className="feature-container w-full flex justify-center items-center py-[7vw] mobile:pb-[4vh] feature-card">
        <WorkCard
          no={1}
          heading={"Our work Environment"}
          src={"/assets/career/career-work.webp"}
          para={
            "Innovative, collaborative, and Driven by a mission to improve lives."
          }
          btn={"Learn More About Us"}
         
        />

        </div>
        <div className="feature-container2 w-full flex justify-center items-center py-[7vw] mobile:pb-[4vh] feature-card">
        <WorkCard
          no={2}
          heading={"Inclusivity & Equality"}
          src={"/assets/career/career-employees.webp"}
          para={
            " Creating a space where every individual is valued and respected."
          }
          btn={"See Our Initiatives"}
          
        />

        </div>
       <div className="feature-container3 w-full flex justify-center items-center py-[7vw] mobile:pb-[4vh] feature-card">
       <WorkCard
          no={3}
          heading={"Build your future with Us"}
          src={"/assets/career/career-medical.webp"}
          para={"Contribute to cutting-edge medical technology."}
          btn={"Start Your Journey"}
          
        />

       </div>
      
      </div>
    </section>
  );
};

export default Work;
