import React from "react";
import Image from "next/image";

const Genesis = ({content}) => {
  return (
    <section className="genesis " id="genesis">
      <div className="container-lg  ml-auto mr-auto flex items-center justify-center flex-col pb-[10%] relative">
        <div className="genesis-card w-[85%] border-[1px] border-[#DADADA] z-[1] bg-white  rounded-[50px] py-[5%] glassmorphism">
          <h2 className="title-2 aeonik  ml-[8%]">
            <span>{content.heading}</span>
          </h2>
          <div className="genesis-text flex w-full justify-center gap-x-[7vw] mt-[4vw]">  
            <div className="w-[38%] content-p leading-[1.4]">
                <p>
                {/* */}
                {content.smallpara}
                </p>
            </div>
            <div className="w-[36%] text-[2.5vw] leading-[1.25] font-light text-[#111111]">
                <p>
                  {/*  */}
                  {content.bigpara}

                </p>
            </div>

          </div>
        </div>

        <div className="genesis-image">
            <div className="w-[90vw] h-[30vw] absolute bottom-[8%] left-0">
            <Image
                  className="rounded-[50px] "
                  src= {content.src}
                  alt="Genesis Image"
                 fill
                />

            </div>

        </div>
      </div>
    </section>
  );
};

export default Genesis;
