import React from "react";
import Image from "next/image";


const Precision = () => {
 
  return (
    <>
      <section className="overflow-hidden mobile:py-[10%]" id="precision">
        <div className="w-screen h-full container-lg  mobile:h-full tablet:h-[70%]">
          <div className="w-full h-full flex flex-col items-center justify-center relative gap-[5vw]">
            <div className="w-full h-full mobile:mb-[10vw] mobile:flex mobile:justify-center">
              <h2 data-para-anim className="title-2 aeonik text-center mobile:text-center">Unmatched precision for every procedure</h2>
            </div>

            <div className="flex items-center justify-evenly gap-[1vw] w-full mobile:flex-col mobile:gap-[10vw]">
             <div className="h-[40vw] w-[80%] relative left-[-15%]">
                <Image src="/assets/endolc/precision-product.png" fill alt="Precision Product"/>
                <div className="absolute top-[30%] right-[-35%]">
                    <p className="font-light text-[3.35vw] text-[#2A2A2A]">Sequential Firing Mechanism
                    <span className="block text-[1.4vw] font-light leading-[1.2] ">simplifies operation.</span></p>
                </div>
                <div className="absolute bottom-[20%] right-[-10%]">
                    <p className="font-light text-[3.35vw] text-[#2A2A2A]">Enhanced Control
                    <span className="block text-[1.4vw] font-light leading-[1.2] ">with compact reach.</span></p>
                </div>

             </div>
            </div>
            <div className="absolute h-[100%] w-[100vw] bottom-0 left-[-15%]">
                <Image src="/assets/endolc/precision-bg.png"
               fill
                alt="Precision bg"
                className="object-cover z-[-1]"/>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Precision;
