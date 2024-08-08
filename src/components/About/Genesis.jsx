import React from "react";
import Image from "next/image";

const Genesis = () => {
  return (
    <section className="genesis ">
      <div className="container-lg  ml-auto mr-auto flex items-center justify-center flex-col">
        <div className="genesis-card w-[85%] border-[1px] border-[#DADADA] z-[1] bg-white/90 rounded-[40px] py-[5%]">
          <h2 className="title-2 aeonik  ml-[9%]">
            <span>Our Genesis</span>
          </h2>
          <div className="genesis-text flex  justify-center gap-x-[5vw] mt-[4vw]">  
            <div className="w-[30%] content-p">
                <p>
                At AMS, each decision is guided by empathy and a relentless pursuit of medical advancements, ensuring that our contributions resonate with compassion and integrity. Our journey is defined by a steadfast commitment to pushing the boundaries of what's possible in healthcare, driven by the belief that every innovation has the potential to shape a brighter, healthier future for all.
                </p>
            </div>
            <div className="w-[45%] text-[2.5vw] leading-[1.25] font-light text-[#111111]">
                <p>The desire to make a difference in patients' lives led to the creation of Advanced MedTech Solutions. Our relentless pursuit of excellence drives us to transform patient care worldwide.</p>
            </div>

          </div>
        </div>

        <div className="genesis-image">
            <div className="w-[100%] relative bottom-[20vw]">
            <Image
                  className="rounded-[50px] "
                  src="/assets/about/genesis.png"
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
