import Image from 'next/image';
import Link from 'next/link';
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { paraAnim } from '@/components/gsapAnimations';
gsap.registerPlugin(ScrollTrigger, useGSAP);

const ProductCard = ({ img, heading,rotate }) => {
  return (
    <div className={`${rotate}`}>
    <Link href={"#"}>
    <div className={`h-[30vw] w-[26vw] bg-white rounded-[30px] flex flex-col-reverse  items-center justify-between single drop-shadow-sm shadow-sm relative border border-black`}>
      <div className="h-[25vw] w-[30vw] absolute top-[-7vw]">
        <Image
          fill
          src={img}
          alt={heading}
          className="object-contain"
        />
      </div>
      <div className="h-[50%] w-[100%] flex flex-col items-center justify-center">
        <h2 className="text-center font-extralight text-[2.1vw]">{heading}</h2>
        <button className="text-[#143CA3] text-[1.2vw] font-light flex items-center justify-center gap-[0.5vw] mt-[1vw]">See more 
            <span className='w-[1.5vw] h-[1.5vw] overflow-hidden flex justify-center items-center pt-[4%]'>
            <span className='w-[4vw] h-[1.3vw] flex items-center translate-x-[-30%] group-hover:translate-x-[24%] transition-all ease-in-out duration-300 gap-[0.3vw]'>
            <svg viewBox="0 0 22 16" fill="current-color" xmlns="http://www.w3.org/2000/svg" className="h-[0.7vw] w-[1.3vw] scale-[0.3] group-hover:scale-[1] transition-all">
                        <g className="btn-path" fill="#143CA3">
                            <path d="M13.6437 15.9303C13.4217 15.9303 13.1998 15.8485 13.0246 15.6733C12.6858 15.3345 12.6858 14.7738 13.0246 14.4351L19.496 7.96366L13.0246 1.49228C12.6858 1.15352 12.6858 0.592823 13.0246 0.254067C13.3633 -0.0846889 13.924 -0.0846889 14.2628 0.254067L21.3533 7.34455C21.6921 7.68331 21.6921 8.24401 21.3533 8.58277L14.2628 15.6733C14.0876 15.8485 13.8656 15.9303 13.6437 15.9303Z" fill="current-color"/>
                            <path d="M20.5356 8.83812L0.876093 8.83812C0.397162 8.83812 0 8.44096 0 7.96203C0 7.4831 0.397162 7.08594 0.876093 7.08594L20.5356 7.08594C21.0145 7.08594 21.4117 7.4831 21.4117 7.96203C21.4117 8.44096 21.0145 8.83812 20.5356 8.83812Z" fill="current-color"/>
                        </g>
                        <g className="btn-path" fill="#143CA3">
                            <path d="M13.6437 15.9303C13.4217 15.9303 13.1998 15.8485 13.0246 15.6733C12.6858 15.3345 12.6858 14.7738 13.0246 14.4351L19.496 7.96366L13.0246 1.49228C12.6858 1.15352 12.6858 0.592823 13.0246 0.254067C13.3633 -0.0846889 13.924 -0.0846889 14.2628 0.254067L21.3533 7.34455C21.6921 7.68331 21.6921 8.24401 21.3533 8.58277L14.2628 15.6733C14.0876 15.8485 13.8656 15.9303 13.6437 15.9303Z" fill="current-color"/>
                            <path d="M20.5356 8.83812L0.876093 8.83812C0.397162 8.83812 0 8.44096 0 7.96203C0 7.4831 0.397162 7.08594 0.876093 7.08594L20.5356 7.08594C21.0145 7.08594 21.4117 7.4831 21.4117 7.96203C21.4117 8.44096 21.0145 8.83812 20.5356 8.83812Z" fill="current-color"/>
                        </g>
                    </svg>
                    <svg viewBox="0 0 22 16" fill="#143CA3" xmlns="http://www.w3.org/2000/svg" className="h-[0.7vw] w-[1.3vw]  group-hover:scale-[0.3] transition-all">
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
  );
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
        start:"top top",
        end:"+=2000 top",
        scrub:true,
        
      }
      

    });
  
   
    tl.to(".card1",{
      rotateZ:-12,
      yPercent:14,
      xPercent:-115,
      duration: 5,
      delay: 0,
    })
    .to(".card2",{
      rotateZ:0,
      yPercent:-7,
      xPercent:-116,
      duration: 5,
      delay: -5,
    })
    .to(".card3",{
      rotateZ: 12,
      yPercent:-28,
      xPercent:-110,
      duration: 5,
      delay: -5,
    })
    .to(".card4",{
      rotateZ: 26,
      yPercent:-50,
      xPercent:-100,
      duration: 5,
      delay: -5,
    })
    .to(".card5",{
      rotateZ: 42,
      yPercent:52,
      xPercent:-135,
      duration: 5,
      delay: -5,
    })
   .to(".card1",{
      rotateZ:-24,
      yPercent:43,
      xPercent:-225,
      duration: 5,
      delay: 0,
    })
    .to(".card2",{
      rotateZ:-12,
      yPercent:2,
      xPercent:-232,
      duration: 5,
      delay: -5,
    })
    .to(".card3",{
      rotateZ: 0,
      yPercent:-38,
      xPercent:-227,   
      duration: 5,
      delay: -5,
    })
    .to(".card4",{
      rotateZ: 12,
      yPercent:-80,
      xPercent:-212,
      duration: 5,
      delay: -5,
    })
    .to(".card5",{
      rotateZ: 26,
      yPercent:-2,
      xPercent:-235,
      duration: 5,
      delay: -5,
    })
    .to(".card1",{
      rotateZ:-32,
      yPercent:80,
      xPercent:-320,
      duration: 5,
      delay: 0,
    })
    .to(".card2",{
      rotateZ:-22,
      yPercent:26,
      xPercent:-340,
      duration: 5,
      delay: -5,
    })
    .to(".card3",{
      rotateZ: -12,
      yPercent:-30,
      xPercent:-340,   
      duration: 5,
      delay: -5,
    })
    .to(".card4",{
      rotateZ: 0,
      yPercent:-93,
      xPercent:-325,
      duration: 5,
      delay: -5,
    })
    .to(".card5",{
      rotateZ: 14,
      yPercent:-35,
      xPercent:-343,
      duration: 5,
      delay: -5,
    })
    .to(".card1",{
      rotateZ:-32,
      yPercent:82,
      xPercent:-320,
      duration: 5,
      delay: 0,
    })
    .to(".card2",{
      rotateZ:-26,
      yPercent:66,
      xPercent:-445,
      duration: 5,
      delay: -5,
    })
    .to(".card3",{
      rotateZ: -22,
      yPercent:-8,
      xPercent:-450,   
      duration: 5,
      delay: -5,
    })
    .to(".card4",{
      rotateZ: -12,
      yPercent:-88,
      xPercent:-441,
      duration: 5,
      delay: -5,
    })
    .to(".card5",{
      rotateZ: 0,
      yPercent:-51,
      xPercent:-462,
      duration: 5,
      delay: -5,
    })
    
    
  })

  return (
    <section  id='products' className='product'>
      <div className='w-full h-screen flex flex-col items-center mb-[15%]'>
      <div className='product-title'>
        <h2 data-para-anim className="title-2 aeonik">
          <span>Our Advanced Endo Surgery Product Line</span>
        </h2>
      </div>
    
      <div className='h-full flex items-center justify-between gap-[4vw] translate-x-[41%] card-section product'>
        <ProductCard img={"/assets/endo/Product1.png"} heading={"Powered Linear Cutter III"}  rotate={"rotate-[] card1"}/>
        <ProductCard img={"/assets/endo/Product2.png"} heading={"Linear Cutter III"} rotate={"rotate-[12deg] translate-y-[10%] card2"} />
        <ProductCard  img={"/assets/endo/Product3.png"} heading={"Hemorrhoid Stapler III"} rotate={"rotate-[24deg] translate-y-[42%] translate-x-[-5%] card3"}/>
        <ProductCard   img={"/assets/endo/Product4.png"} heading={"Circular Stapler III"} rotate={"rotate-[36deg] translate-y-[94%] translate-x-[-20%] card4"}/>
        <ProductCard  img={"/assets/endo/Product5.png"} heading={"Endo Linear Cutter III"} rotate={"rotate-[48deg] translate-y-[48%] card5"}/>
      </div> 
      <div className='w-full product-base-text'>
        <p data-para-anim className='aeonik font-light uppercase tracking-widest text-[2.2vw] text-center'>advamesh range</p>
      </div>
      </div>
      
    </section>
  );
}

export default Product;
