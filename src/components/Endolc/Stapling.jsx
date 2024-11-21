import React from "react";
import Image from "next/image";


const Stapling = () => {
 
  return (
    <>
      <section className="overflow-hidden mobile:py-[10%]" id="stapling">
        <div className="w-screen h-full container-lg mobile:h-full tablet:h-[70%]">
          <div className="w-full h-full flex flex-col items-center justify-center relative py-[5vw] ">
            <div className="w-full h-full mobile:mb-[10vw] mobile:flex mobile:justify-center">
              <h2 data-para-anim className="title-2 aeonik mobile:text-center">Smart Stapling</h2>
            </div>

            <div className=" h-full w-full flex flex-col items-center justify-center mobile:flex-col mobile:gap-[10vw]">
                <div className="w-full h-[70%]  items-center justify-between  flex ">
                    <p className="font-light text-[3.35vw] text-[#2A2A2A]">
                    Surgeon-Modulated Articulation
                    <span className="block text-[1.4vw] font-light leading-[1.2]">
                    Flexible reach for precise and accurate positioning in challenging surgical procedures.   </span>
                    </p>
                    <div className="flex flex-col h-[100%] w-[40%] items-center justify-center">
                <div className="relative h-[20vw] w-[20vw]">
                    <Image src="/assets/endolc/stapling-pro-1.png" fill alt="stapling" className="object-fill"/>
                </div>
                    </div> 
                </div>
                <div className="w-full h-[70%]  items-center justify-between   flex ">
                    <p className="font-light text-[3.35vw] text-[#2A2A2A]">
                    Smart Locking Mechanism
                    <span className="block text-[1.4vw] font-light leading-[1.2]">
                    with audible click. </span>
                    </p>
                    <div className="flex flex-col h-[100%] w-[40%] items-center justify-center">
                <div className="relative h-[20vw] w-[20vw] scale-[2]  bottom-[10%]">
                    <Image src="/assets/endolc/stapling-pro-2.png" fill alt="stapling" className="object-cover"/>
                </div>
                    </div>   
                </div>

                <div className="w-full h-[15vw]  items-end justify-between   flex ">
                    <p className="font-light text-[3.35vw] text-[#2A2A2A]">
                   Dedicated Reloads for Every Procedures
                    <span className="block text-[1.4vw] font-light leading-[1.2]">
                    Experience seamless peformance with our specialized reloads, designed to enhance efficiency without the need to change cartridges. </span>
                    </p>   
                </div>
  
            </div>
            <div className="absolute h-[100%] w-[100vw] bottom-0 left-[-15%]">
                <Image src="/assets/endolc/stapling-bg.png"
               fill
                alt="Stapling bg"
                className="object-cover z-[-1]"/>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Stapling;
