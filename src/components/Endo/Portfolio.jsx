import React from "react";
import Image from "next/image";
import Link from "next/link";

const PortfolioCard =({img, txt , className})=>{
  return (
    <>
    <Link href={"#"}>
    <div className={` w-[20vw] h-[11.5vw] relative flex justify-center items-center  text-center text-[#fff] cursor-pointer rounded-[40px] overflow-hidden ${className} `}>
          <Image
            src={img}
           fill
            alt="portfolio-1"
            
          />
          <div className="flex justify-center items-center absolute ">
          <p
            className=" font-light text-[1.2vw]"
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
  return (
    <section className="container-lg flex flex-col items-center justify-center px-[4%] pb-[7%] ">
      <div>
        <h2 data-para-anim className="title-2 aeonik ">
          <span>Our Advanced Portfolio</span>
        </h2>
      </div>
      <div className="flex items-center justify-between gap-[3vw] mt-[7vw]">
       
        <PortfolioCard img={"/assets/portfolio/portfolio-1.png"} txt = {"Advanced Interventional Cardiology"}/>
        <PortfolioCard img={"/assets/portfolio/portfolio-2.png"} txt = {"Advanced Cardiovascular Solutions"}/>
        <PortfolioCard img={"/assets/portfolio/portfolio-3.png"} txt = {"Advanced Endo Surgery"}/>
        <PortfolioCard img={"/assets/portfolio/portfolio-4.png"} txt = {"Advanced Hernia Solutions"}/>

      </div>
    </section>
  );
};

export default Portfolio;
