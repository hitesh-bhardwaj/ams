import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { paraAnim } from '@/components/gsapAnimations';
gsap.registerPlugin(ScrollTrigger, useGSAP);



const ProductCard=({img, txt , className, rotate})=>{
  

  return(
    <>
    <div className={`${rotate}`}>
    <Link href={"#"}>
    <div className={` w-[25vw] h-[27vw] relative flex justify-center items-center  text-center text-[#fff] group overflow-hidden rounded-[20px] border border-gray-200 `}>
          <Image
            src={img}
           fill
            alt="portfolio-1"
            className=" border-[1px] border-[#DADADA] scale-[1.5] group-hover:scale-[1.2] transition-all duration-500"
          />
          <div className={`flex justify-center flex-col gap-[1vw] items-center absolute top-[70%] text-[#111111] ${className}  `}>
          <p
            className=" font-light text-[2vw] aeonik"
          >
           {txt}
          </p>
          <button className="text-[#143CA3] text-[1.2vw] font-light flex items-center justify-center gap-[0.5vw]">See more 
            <span className='w-[1.5vw] h-[1.5vw] overflow-hidden flex justify-center items-center pt-[4%]'>
            <span className='w-[4vw] h-[1.3vw] flex translate-x-[-30%] group-hover:translate-x-[24%] transition-all ease-in-out duration-300 gap-[0.3vw]'>
            <svg viewBox="0 0 22 16" fill="current-color" xmlns="http://www.w3.org/2000/svg" className="h-[1vw] w-[1.3vw] scale-[0.3] group-hover:scale-[1] transition-all">
                        <g className="btn-path" fill="#143CA3">
                            <path d="M13.6437 15.9303C13.4217 15.9303 13.1998 15.8485 13.0246 15.6733C12.6858 15.3345 12.6858 14.7738 13.0246 14.4351L19.496 7.96366L13.0246 1.49228C12.6858 1.15352 12.6858 0.592823 13.0246 0.254067C13.3633 -0.0846889 13.924 -0.0846889 14.2628 0.254067L21.3533 7.34455C21.6921 7.68331 21.6921 8.24401 21.3533 8.58277L14.2628 15.6733C14.0876 15.8485 13.8656 15.9303 13.6437 15.9303Z" fill="current-color"/>
                            <path d="M20.5356 8.83812L0.876093 8.83812C0.397162 8.83812 0 8.44096 0 7.96203C0 7.4831 0.397162 7.08594 0.876093 7.08594L20.5356 7.08594C21.0145 7.08594 21.4117 7.4831 21.4117 7.96203C21.4117 8.44096 21.0145 8.83812 20.5356 8.83812Z" fill="current-color"/>
                        </g>
                        <g className="btn-path" fill="#143CA3">
                            <path d="M13.6437 15.9303C13.4217 15.9303 13.1998 15.8485 13.0246 15.6733C12.6858 15.3345 12.6858 14.7738 13.0246 14.4351L19.496 7.96366L13.0246 1.49228C12.6858 1.15352 12.6858 0.592823 13.0246 0.254067C13.3633 -0.0846889 13.924 -0.0846889 14.2628 0.254067L21.3533 7.34455C21.6921 7.68331 21.6921 8.24401 21.3533 8.58277L14.2628 15.6733C14.0876 15.8485 13.8656 15.9303 13.6437 15.9303Z" fill="current-color"/>
                            <path d="M20.5356 8.83812L0.876093 8.83812C0.397162 8.83812 0 8.44096 0 7.96203C0 7.4831 0.397162 7.08594 0.876093 7.08594L20.5356 7.08594C21.0145 7.08594 21.4117 7.4831 21.4117 7.96203C21.4117 8.44096 21.0145 8.83812 20.5356 8.83812Z" fill="current-color"/>
                        </g>
                    </svg>
                    <svg viewBox="0 0 22 16" fill="#143CA3" xmlns="http://www.w3.org/2000/svg" className="h-[1vw] w-[1.3vw]  group-hover:scale-[0.3] transition-all">
                        <g className="btn-path" fill="current-color">
                            <path d="M13.6437 15.9303C13.4217 15.9303 13.1998 15.8485 13.0246 15.6733C12.6858 15.3345 12.6858 14.7738 13.0246 14.4351L19.496 7.96366L13.0246 1.49228C12.6858 1.15352 12.6858 0.592823 13.0246 0.254067C13.3633 -0.0846889 13.924 -0.0846889 14.2628 0.254067L21.3533 7.34455C21.6921 7.68331 21.6921 8.24401 21.3533 8.58277L14.2628 15.6733C14.0876 15.8485 13.8656 15.9303 13.6437 15.9303Z" fill="current-color"/>
                            <path d="M20.5356 8.83812L0.876093 8.83812C0.397162 8.83812 0 8.44096 0 7.96203C0 7.4831 0.397162 7.08594 0.876093 7.08594L20.5356 7.08594C21.0145 7.08594 21.4117 7.4831 21.4117 7.96203C21.4117 8.44096 21.0145 8.83812 20.5356 8.83812Z" fill="current-color"/>
                        </g>
                        <g className="btn-path" fill="#143CA3">
                            <path d="M13.6437 15.9303C13.4217 15.9303 13.1998 15.8485 13.0246 15.6733C12.6858 15.3345 12.6858 14.7738 13.0246 14.4351L19.496 7.96366L13.0246 1.49228C12.6858 1.15352 12.6858 0.592823 13.0246 0.254067C13.3633 -0.0846889 13.924 -0.0846889 14.2628 0.254067L21.3533 7.34455C21.6921 7.68331 21.6921 8.24401 21.3533 8.58277L14.2628 15.6733C14.0876 15.8485 13.8656 15.9303 13.6437 15.9303Z" fill="current-color"/>
                            <path d="M20.5356 8.83812L0.876093 8.83812C0.397162 8.83812 0 8.44096 0 7.96203C0 7.4831 0.397162 7.08594 0.876093 7.08594L20.5356 7.08594C21.0145 7.08594 21.4117 7.4831 21.4117 7.96203C21.4117 8.44096 21.0145 8.83812 20.5356 8.83812Z" fill="current-color"/>
                        </g>
                    </svg>
            </span>

            </span>
            

          </button>

          </div>
        </div>
    </Link>
    

    </div>
    

    </>
  )
}
const Product = () => {
  paraAnim()
   
  useGSAP(()=>{
    const tl = gsap.timeline({
      defaults:{
        ease:"none",

      },
      scrollTrigger:{
        trigger:".product",
        pin:true,
        // start:"top top",
        // end:"+=2000 top",
        scrub:true,
        
      }
      

    });
  
    // tl.to(".product-title",{
    //   yPercent:-110,
    //   ease:"power1.in",
    // })
    tl.to(".card1",{
      rotateZ:-12,
      yPercent:15,
      xPercent:-124,
      duration: 5,
      delay: 0,
    })
    .to(".card2",{
      rotateZ:0,
      yPercent:-10,
      xPercent:-124,
      duration: 5,
      delay: -5,
    })
    .to(".card3",{
      rotateZ: 12,
      yPercent:-33,
      xPercent:-124,
      duration: 5,
      delay: -5,
    })
   .to(".card1",{
      rotateZ:-24,
      yPercent:50,
      xPercent:-250,
      duration: 5,
      delay: 0,
    })
    .to(".card2",{
      rotateZ:-12,
      yPercent:-1,
      xPercent:-255,
      duration: 5,
      delay: -5,
    })
    .to(".card3",{
      rotateZ: 0,
      yPercent:-50,
      xPercent:-255,
      
      duration: 5,
      delay: -5,
    })
  })

  return (
    <section className='w-full  mt-[15%] mb-[10%] product' id='product'>
      <div className='container-lg flex flex-col gap-[5vw] items-center  '>
      <div className='product-title'>
        <h2 data-para-anim className="title-2 aeonik  ">
          The Foundation of Durable Repair
        </h2>
      </div>
      <div className='h-[50vh] flex items-center justify-between gap-[7vw] translate-x-[35%]  card-section'>
        <ProductCard img={"/assets/hernia/product-1.png"} txt={"Polypropylene Mesh"} rotate={"rotate-[0deg] card1"}/>
        <ProductCard img={"/assets/hernia/product-2.png"} txt={"Macroporous Mesh"} rotate={"rotate-[12deg] translate-y-[12%] card2"} />
        <ProductCard img={"/assets/hernia/product-3.png"} txt={"Mid-Weight Mesh"} className={"text-white"} rotate={"rotate-[24deg] translate-y-[48%] card3"}/>
      </div> 
      <div className='w-full mt-[2vw] product-base-text'>
        <p className='aeonik font-light uppercase tracking-widest text-[2.2vw] text-center'>advamesh range</p>
      </div>
      </div>
       
    </section>
  )
}

export default Product