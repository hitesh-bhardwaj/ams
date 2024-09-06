import React,{useEffect} from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { paraAnim } from "../gsapAnimations";

gsap.registerPlugin(useGSAP, ScrollTrigger);


const PortfolioCard =({img, txt , className})=>{
  return (
    <>
    <Link href={"#"}>
    <div className={` w-[20vw] h-[11.5vw] relative flex justify-center items-center  text-center text-[#fff] cursor-pointer rounded-[40px] overflow-hidden ${className} portfolio-card group`}>
          <Image
            src={img}
           fill
            alt="portfolio-1" 
            className="group-hover:scale-[1.2] duration-300"
          />
          <div className="imgoverlay glassmorphism absolute w-[10vw] h-[11.5vw]  left-[-50%] duration-300 block top-0 group-hover:left-[0%]"></div>
          <div className="flex justify-center items-center absolute ">
          <p
            className=" font-light text-[1.2vw] text-shadow"
          >
           {txt}
          </p>
          </div>
        </div>
    </Link>
  
    </>
  )
}

const Portfolio = () => {
  paraAnim()
  useGSAP(()=>{
    gsap.from(".portfolio-card",{
      yPercent:50,
      opacity:0,
      duration:0.7,
      scrollTrigger:{
        trigger:".portfolio-card-container",
        start:"top 80%",
        end:"bottom 40%",
       
      },
      stagger:0.1
      
    })

  })
  return (
    <section id="portfolio">
      <div  className="container-lg flex flex-col items-center justify-center px-[4%] pt-[10%] pb-[4%]">
      <div>
        <h2 data-para-anim className="title-2 aeonik ">
          Our Advanced Portfolio
        </h2>
      </div>
      <div className="flex items-center justify-between gap-[3vw] mt-[7vw] portfolio-card-container">
       
        <PortfolioCard img={"/assets/portfolio/portfolio-1.webp"} txt = {"Advanced Interventional Cardiology"}/>
        <PortfolioCard img={"/assets/portfolio/portfolio-2.webp"} txt = {"Advanced Cardiovascular Solutions"}/>
        <PortfolioCard img={"/assets/portfolio/portfolio-3.webp"} txt = {"Advanced Endo Surgery"}/>
        <PortfolioCard img={"/assets/portfolio/portfolio-4.webp"} txt = {"Advanced Hernia Solutions"}/>
      </div>
      </div>
    </section>
  );
};

export default Portfolio;
