/* eslint-disable react-hooks/rules-of-hooks */
import React from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { paraAnim , fadeUp } from "../gsapAnimations";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const ProductCard=({img,title,para})=>{
    return(
    <div className="flex flex-col justify-between items-center w-[28vw] h-[16vw] product-description-card  border relative rounded-[40px] glassmorphism mobile:w-[70vw] mobile:h-[75vw] mobile:flex-shrink-0 tablet:w-[40vw] tablet:h-[30vw]" >
    <div className="absolute top-10 right-10 w-[4.5vw] h-[4.5vw] flex justify-end items-center mobile:h-[20vw] mobile:w-[20vw]  mobile:right-[35%] tablet:w-[8vw] tablet:h-[8vw]">
      <div className="w-full h-full relative">
        <Image
          src={img}
          fill
          alt="composition"
          className="object-contain"
        />
      </div>
    </div>

    <div className="absolute bottom-10 left-10 flex flex-col justify-start gap-[1vw] mobile:justify-center mobile:text-center">
      <p className="text-[1.65vw] font-medium mobile:text-[7.5vw] tablet:text-[3vw]">{title}</p>
      <p className="text-[1.65vw] font-light mobile:text-[5vw] tablet:text-[2.5vw]">{para}</p>
    </div>
  </div>
    )

}

const ProductDescription = ({card1,card2,card3,card4,card5,card6}) => {
  paraAnim()
  fadeUp()
  if(globalThis.innerWidth<1024){

  }
  else{
    useGSAP(()=>{
      gsap.from(".product-description-card",{
        yPercent:50,
        opacity:0,
        duration:0.7,
        scrollTrigger:{
          trigger:".product-description-card-container",
          start:"top 80%",
          end:"bottom 40%",
         
        },
        stagger:0.1
      })
    })
  }
  return (
    <>
      <section>
        <div className="w-screen h-screen container-lg mobile:h-[70%] mobile:px-[3vw] mobile:py-[3vw] mobile:container-sm tablet:h-[90vh]">
          <div className="flex flex-col items-center justify-center gap-[5vw] overflow-hidden">
            <div>
              <h2 className="title-2 aeonik mobile:text-center">Product Description</h2>
            </div>
            <div className="flex flex-wrap items-center gap-[3vw] product-description-card-container mobile:hidden tablet:gap-[5vw]">
            <ProductCard img={card1.img} title={card1.title} para={card1.para}/>
            <ProductCard img={card2.img} title={card2.title} para={card2.para}/>
            <ProductCard img={card3.img} title={card3.title} para={card3.para}/>
            <ProductCard img={card4.img} title={card4.title} para={card4.title}/>
            <ProductCard img={card5.img} title={card5.title} para={card5.para}/>
            <ProductCard img={card6.img} title={card6.title} para={card6.para}/>
            </div>
            <div className=" items-center justify-between gap-[3vw] hidden mobile:flex mobile:justify-between mobile:w-full mobile:overflow-scroll mobile:gap-[5vw]">
            <ProductCard img={card1.img} title={card1.title} para={card1.para}/>
            <ProductCard img={card2.img} title={card2.title} para={card2.para}/>
            <ProductCard img={card3.img} title={card3.title} para={card3.para}/>
            <ProductCard img={card4.img} title={card4.title} para={card4.title}/>
            <ProductCard img={card5.img} title={card5.title} para={card5.para}/>
            <ProductCard img={card6.img} title={card6.title} para={card6.para}/>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductDescription;
