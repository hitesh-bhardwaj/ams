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
    <div className="flex flex-col justify-between items-center w-[28vw] h-[16vw] product-description-card  border relative rounded-[2vw] glassmorphism mobile:w-[75vw] mobile:h-[90vw] mobile:flex-shrink-0 mobile:rounded-[9vw] tablet:w-[43vw] tablet:h-[30vw]" >
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

    <div className="absolute bottom-10 left-10 flex flex-col justify-start gap-[1vw] mobile:static mobile:w-full mobile:h-full mobile:justify-end mobile:pb-[15vw] mobile:px-[5vw] mobile:text-center">
      <p data-para-anim className="text-[1.65vw] font-medium mobile:text-[7.5vw] tablet:text-[3vw]">{title}</p>
      <p data-para-anim className="text-[1.65vw] font-light mobile:text-[5vw] tablet:text-[2.5vw]">{para}</p>
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
      <section className="mobile:py-[10%] tablet:pb-[10%]" id="product-description">
        <div className="w-screen h-screen container-lg mobile:h-[70%] mobile:px-[3vw] mobile:py-[3vw]  tablet:h-full">
          <div className="flex flex-col items-center justify-center gap-[5vw]">
            <div className="mobile:mb-[8vw] tablet:mb-[5vw]">
              <h2 data-para-anim className="title-2 aeonik mobile:text-center tablet:text-center">Product Description</h2>
            </div>
            <div className="flex flex-wrap items-center gap-[3vw] product-description-card-container mobile:hidden tablet:justify-between">
            <ProductCard img={card1.img} title={card1.title} para={card1.para}/>
            <ProductCard img={card2.img} title={card2.title} para={card2.para}/>
            <ProductCard img={card3.img} title={card3.title} para={card3.para}/>
            <ProductCard img={card4.img} title={card4.title} para={card4.para}/>
            <ProductCard img={card5.img} title={card5.title} para={card5.para}/>
            <ProductCard img={card6.img} title={card6.title} para={card6.para}/>
            </div>
            
            <div className="w-[100vw] mobile:overflow-scroll">

            <div className=" items-center justify-between gap-[3vw] mobile:w-[470vw] hidden mobile:flex mobile:justify-between  mobile:overflow-visible mobile:gap-[5vw] mobile:px-[10%]">
            <ProductCard img={card1.img} title={card1.title} para={card1.para}/>
            <ProductCard img={card2.img} title={card2.title} para={card2.para}/>
            <ProductCard img={card3.img} title={card3.title} para={card3.para}/>
            <ProductCard img={card4.img} title={card4.title} para={card4.title}/>
            <ProductCard img={card5.img} title={card5.title} para={card5.para}/>
            <ProductCard img={card6.img} title={card6.title} para={card6.para}/>
            </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductDescription;
