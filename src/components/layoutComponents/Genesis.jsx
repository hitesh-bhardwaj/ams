import React from "react";
import Image from "next/image";

const Genesis = ({content}) => {
  return (
    <section className="genesis ">
      <div className="container-lg  ml-auto mr-auto flex items-center justify-center flex-col">
        <div className="genesis-card w-[85%] border-[1px] border-[#DADADA] z-[1] bg-white/90 rounded-[40px] py-[5%]">
          <h2 className="title-2 aeonik  ml-[9%]">
            <span>{content.heading}</span>
          </h2>
          <div className="genesis-text flex  justify-center gap-x-[5vw] mt-[4vw]">  
            <div className="w-[30%] content-p">
                <p>
                {/* */}
                {content.smallpara}
                </p>
            </div>
            <div className="w-[40%] text-[2.5vw] leading-[1.25] font-light text-[#111111]">
                <p>
                  {/*  */}
                  {content.bigpara}

                </p>
            </div>

          </div>
        </div>

        <div className="genesis-image">
            <div className="w-[100%] relative bottom-[20vw]">
            <Image
                  className="rounded-[50px] "
                  src= {content.src}
                  alt="Genesis Image"
                  width= {1700}
                  height= {1000}
                />

            </div>

        </div>
      </div>
    </section>
  );
};

export default Genesis;
