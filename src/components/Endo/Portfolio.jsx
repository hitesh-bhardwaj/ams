import React from "react";
import Image from "next/image";

const PortfolioCard =({img, txt})=>{
  return (
    <>
     <div className=" w-[21vw] h-[10vw] relative flex justify-center items-center  text-center text-[#fff] ">
          <Image
            src={img}
           fill
            alt="portfolio-1"
            className="rounded-[40px]"
          />
          <div className="flex justify-center items-center absolute ">
          <p
            className=" font-light text-[1.2vw]"
          >
           {txt}
          </p>
          </div>
        </div>
    </>
  )
}

const Portfolio = () => {
  return (
    <section className="container-lg flex flex-col items-center justify-center ">
      <div>
        <h2 className="title-2 aeonik ">
          <span>Our Advanced Portfolio</span>
        </h2>
      </div>
      <div className="flex items-center justify-between gap-[3vw] mt-[5vw]">
       
        <PortfolioCard img={"/assets/portfolio/portfolio-1.png"} txt = {"Advanced Interventional Cardiology"}/>
        <PortfolioCard img={"/assets/portfolio/portfolio-2.png"} txt = {"Advanced Cardiovascular Solutions"}/>
        <PortfolioCard img={"/assets/portfolio/portfolio-3.png"} txt = {"Advanced Endo Surgery"}/>
        <PortfolioCard img={"/assets/portfolio/portfolio-4.png"} txt = {"Advanced Hernia Solutions"}/>

      </div>
    </section>
  );
};

export default Portfolio;
