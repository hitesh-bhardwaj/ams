/* eslint-disable react-hooks/rules-of-hooks */
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { paraAnim , fadeUp } from "../gsapAnimations";

gsap.registerPlugin(useGSAP, ScrollTrigger);


const PortfolioCard =({img, txt , className})=>{
  return (
    <>
    <Link href={"#"}>
    <div className={` w-[20vw] h-[11.5vw] relative flex justify-center items-center  text-center text-[#fff] cursor-pointer rounded-[40px] overflow-hidden ${className} portfolio-card group mobile:w-[80vw] mobile:h-[80vw] mobile:rounded-[6vw] tablet:w-[43vw] tablet:h-[40vw] tablet:rounded-[3vw] fadeup`}>
          <Image
            src={img}
           fill
            alt="portfolio-1" 
            className="group-hover:scale-[1.2] duration-300 object-cover "
          />
          <div className="imgoverlay glassmorphism absolute w-[10vw] h-[11.5vw]  left-[-50%] duration-300 block top-0 group-hover:left-[0%] mobile:w-[85vw] mobile:h-[35vw] mobile:left-0 mobile:bottom-0 mobile:top-auto tablet:w-[43vw] tablet:h-[20vw] tablet:left-0 tablet:bottom-0 tablet:top-auto"></div>
          <div className="flex justify-center items-center absolute  mobile:bottom-[5%] tablet:bottom-[10%] tablet:w-[80%]">
          <p
           data-para-anim className=" font-light text-[1.2vw] text-shadow mobile:text-[8vw] mobile:leading-[1.25] tablet:text-[3.5vw] tablet:leading-[1.2]"
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
  fadeUp()
  if(globalThis.innerWidth<1024){

  }
  else{
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

  }
  return (
    <section id="portfolio">
      <div  className=" flex flex-col items-center justify-center px-[4%] pt-[10%] pb-[4%] mobile:py-[15%] tablet:px-[4%] mobile:px-0 overflow-hidden">
      <div>
        <h2 data-para-anim className="title-2 aeonik mobile:text-center ">
          Our Advanced Portfolio
        </h2>
      </div>
      <div className="flex items-center justify-between gap-[3vw] mt-[7vw] portfolio-card-container mobile:gap-[7vw] mobile:mt-[12vw] tablet:flex-wrap mobile:hidden">
       
        <PortfolioCard img={"/assets/portfolio/portfolio-1.webp"} txt = {"Advanced Interventional Cardiology"}/>
        <PortfolioCard img={"/assets/portfolio/portfolio-2.webp"} txt = {"Advanced Cardiovascular Solutions"}/>
        <PortfolioCard img={"/assets/portfolio/portfolio-3.webp"} txt = {"Advanced Endo Surgery"}/>
        <PortfolioCard img={"/assets/portfolio/portfolio-4.webp"} txt = {"Advanced Hernia Solutions"}/>
      </div>
      <div className="w-full mobile:overflow-scroll mobile:mt-[12vw] mobile:pl-[7%] mobile:fadeup mobile:block hidden mobile:pr-[5%] fadeUp tablet:overflow-scroll mobile:fadeup tablet:hidden tablet:pr-[5%] overflow-visible tablet:mt-0 ">
            <div      
              className=" mobile:flex mobile:flex-nowrap mobile:w-fit mobile:gap-[5vw]  mobile:h-fit tablet:flex tablet:flex-nowrap tablet:w-fit tablet:gap-[2vw] tablet:h-fit tablet:ml-[4vw] "
            >
             <PortfolioCard img={"/assets/portfolio/portfolio-1.webp"} txt = {"Advanced Interventional Cardiology"}/>
        <PortfolioCard img={"/assets/portfolio/portfolio-2.webp"} txt = {"Advanced Cardiovascular Solutions"}/>
        <PortfolioCard img={"/assets/portfolio/portfolio-3.webp"} txt = {"Advanced Endo Surgery"}/>
        <PortfolioCard img={"/assets/portfolio/portfolio-4.webp"} txt = {"Advanced Hernia Solutions"}/>
             
             

            </div>
          </div>
      </div>
    </section>
  );
};

export default Portfolio;
