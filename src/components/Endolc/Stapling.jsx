import React from "react";
import Image from "next/image";
import { fadeIn } from "../gsapAnimations";


const Stapling = () => {
  fadeIn();
 
  return (
    <>
      <section className="overflow-hidden relative mobile:py-[10%]" id="stapling">
        <div className="w-screen overflow-hidden h-full pl-[10vw] mobile:h-[155vh] tablet:h-[70%] mobile:pl-0">
          <div className=" flex flex-col items-center justify-center  py-[5vw] tablet:py-[10%] ">
            <div className="w-full h-full mobile:mb-[10vw] mobile:flex mobile:justify-center ">
              <h2 data-para-anim className="title-2 aeonik mobile:text-center">Smart Stapling</h2>
            </div>

            <div className="w-full mobile:flex-col mobile:gap-[10vw]">
                <div className="w-full h-[70%] flex items-center justify-between  mobile:flex-col ">
                    <p data-para-anim className="font-light text-[2.5vw] text-[#2A2A2A] mobile:order-1 mobile:text-[9vw] mobile:text-center mobile:leading-[1.2] tablet:text-[3.5vw] tablet:w-[60%]">
                    Surgeon-Modulated Articulation
                    <span  data-para-anim className="block text-[1.25vw] font-light leading-[1.2] mobile:text-[4vw] mobile:text-center mobile:mt-[2vw] mobile:w-[80%] tablet:text-[2.5vw]">
                    Flexible reach for precise and accurate positioning in challenging surgical procedures.   </span>
                    </p>
                    <div className="flex flex-col h-[100%] w-[40%] items-center justify-center">
                <div  className="relative h-[15vw] w-[15vw] fadein mobile:w-[60vw] mobile:h-[70vw] tablet:w-[35vw] tablet:h-[35vw]">
                    <Image src="/assets/endolc/stapling-pro-1.png" fill alt="stapling" className="object-fill"/>
                </div>
                    </div> 
                </div>
                <div className="w-full h-[70%] flex items-center justify-between  mobile:flex-col mobile:mt-[50vh] ">
                    <div className="mobile:order-1">

                    <p  data-para-anim className="font-light text-[2.5vw] text-[#2A2A2A] mobile:text-[9vw] mobile:text-center mobile:leading-[1.2] tablet:text-[3.5vw]">
                    Smart Locking Mechanism</p> 
                    <p  data-para-anim className="block text-[1.25vw] font-light leading-[1.2] mobile:text-[4vw] mobile:text-center tablet:text-[2.5vw]">
                    with audible click. </p>
                    </div>
                    
                   
                <div className="relative h-[15vw] w-[30vw] scale-[2]  bottom-[10%] fadein mobile:w-[80vw] mobile:h-[50vw] mobile:bottom-[35%] mobile:absolute tablet:w-[30vw] tablet:h-[30vw]">
                    <Image src="/assets/endolc/stapling-pro-2.png" fill alt="stapling" className="object-cover mobile:rotate-[60deg]"/>
                </div>  
                </div>

                <div className="w-full h-fit mt-[5vw] items-start justify-between  flex  mobile:h-full mobile:mt-[15vw] mobile:px-[5vw] flex-col mobile:items-center mobile:gap-[3vw] tablet:mt-[10vw] ">
                    <p  data-para-anim className="font-light text-[2.5vw] text-[#2A2A2A] mobile:text-[9vw] mobile:leading-[1.2] text-center tablet:text-[3.5vw]">
                   Dedicated Reloads for Every Procedures</p>
                    <p  data-para-anim className="block text-[1.25vw] font-light leading-[1.2] mobile:text-[4vw] mobile:text-center tablet:text-[2.5vw]">
                    Experience seamless peformance with our specialized reloads, designed to enhance efficiency without the need to change cartridges. </p>
                      
                </div>
  
            </div>
            
          </div>
        </div>
        <div className="absolute h-[100%] w-[100vw] bottom-0 z-[-1]">
                <Image src="/assets/endolc/stapling-bg.png"
               fill
                alt="Stapling bg"
                className="object-cover z-[-1]"/>
            </div>
      </section>
    </>
  );
};

export default Stapling;