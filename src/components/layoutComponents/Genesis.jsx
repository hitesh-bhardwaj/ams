import React, { useEffect, useState } from "react";
import Image from "next/image";
import { paraAnim ,imageAnim} from "../gsapAnimations";

const Genesis = ({content}) => {
  imageAnim()
  paraAnim()
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Function to check window width and set state accordingly
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 541); // Consider mobile for widths <= 768px
    };

    // Initial check
    handleResize();

    // Add resize event listener
    window.addEventListener("resize", handleResize);

    // Clean up the event listener on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <section className="genesis relative mobile:h-[110vh]" id="genesis">
      <div className="container-lg  ml-auto mr-auto flex items-center justify-center flex-col pb-[10%] mobile:py-[10%] mobile:h-full">
        <div className="genesis-card w-[85%] border-[1px] border-[#DADADA] z-[1] bg-white  rounded-[50px] py-[5%] glassmorphism mobile:py-[15%] mobile:w-[95%]">
          <h2 className="title-2 aeonik  ml-[8%] mobile:text-center mobile:ml-0 mobile:px-[5vw] tablet:ml-[6%] ">
            <span  data-para-anim >{content.heading}</span>
          </h2>
          <div className="genesis-text flex w-full justify-center gap-x-[7vw] mt-[4vw] mobile:flex-col mobile:px-[4vw] mobile:gap-[5vw] mobile:py-[4vw] tablet:gap-x-[4vw] tablet:flex tablet-flex-col">  
            <div className="w-[35%] content-p leading-[1.4] mobile:w-full mobile:text-center mobile:leading-[1.2] tablet:w-[42%] ">
                <p data-para-anim>
                {/* */}
                {content.smallpara}
                </p>
            </div>
            <div className="w-[40%] text-[2.5vw] leading-[1.25] font-light text-[#111111] mobile:w-full mobile:text-[6.5vw] mobile:text-center tablet:w-[40%] ">
                <p data-para-anim>
                  {/*  */}
                  {content.bigpara}

                </p>
            </div>

          </div>
        </div>

        <div className="genesis-image mobile:absolute mobile:left-0 mobile:bottom-0">
            <div className="w-[90vw] h-[30vw] absolute bottom-[8%] left-[50%] translate-x-[-50%] overflow-hidden rounded-[50px] tablet:h-[50vw] mobile:h-[110vh] mobile:w-screen mobile:overflow-hidden mobile:rounded-none mobile:bottom-0 mobile:left-0 mobile:translate-x-0">
            <Image
                  className={!isMobile ? "imageanim" : "object-cover"}
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
