import Image from "next/image";

const Hero = ({ heading, tagline,src,className = "" }) => {
  return (
    <>
      <section className="hero mb-[10%]  tablet:pr-[3%]" id="advastap-hero">
        <div className="px-[10%] relative hero-container overflow-hidden  mobile:mt-[30%] tablet:px-[5%] mobile:px-[8%]">
          <div className=" relative flex flex-col h-screen w-full justify-center items-start  mobile:h-[85vh] mobile:flex-col mobile:justify-start mobile:text-center mobile:gap-[2vw] tablet:h-[60vh]">
            <div className=" mobile:w-full mobile:h-fit mobile:flex mobile:flex-col mobile:gap-0">
              <div className="mobile:w-full mobile:h-full mobile:flex  mobile:flex-col mobile:gap-[2vw]">
                <h1 className="advastap-text text-white text-[5.3vw] aeonik drop-shadow-md leading-[1]">
                  <span 
                    className={`leading-[1.2] overflow-hidden uppercase text-[5.75vw] mobile:text-[11.2vw] ${className} tablet:text-[7.5vw]`}
                  >
                    {heading}
                  </span>
                </h1>
                <p data-para-anim className="uppercase  text-[1.25vw] leading-[1] tracking-wide mobile:text-[4.2vw] mobile:leading-[1.2] mobile:w-full mobile:text-center mobile:py-[5%] mobile:tracking-normal tablet:text-[2.5vw] tablet:w-[60%] tablet:tracking-normal tablet:py-[3%]">
                  {tagline}
                </p>
              </div>
              <div className="flex items-center justify-end mt-[-0.7vw] w-[65%] mobile:justify-center mobile:text-center mobile:ml-0 ">
                <span className="w-[10vw] h-[2px] bg-black mobile:hidden tablet:w-[8vw]"></span>
              </div>
            </div>
            <div className="flex flex-col items-center justify-end z-[5] mobile:flex-col-reverse mobile:right-[5%] mobile:top-[20%] tablet:top-[30%]">

              <div className="w-[80vw] h-[20vw]  scale-[3] relative right-0 left-[10%] mobile:bottom-0 mobile:w-[90vw] mobile:h-[80vw] tablet:w-[55vw] tablet:h-[60vw] z-10 fadeUp ">
                <Image
                  className="object-contain"
                  src={src}
                  alt="Hero Image"
                  priority={true}
                  fill
                />
              </div>
            </div>

            <div className="absolute h-[100%] w-[100%] top-0 right-[-15%]">
                <Image src="/assets/endolc/hero-bg-1.png"
              fill
                alt="Advastap Hero bg"
                className="object-cover z-[-1]"/>
            </div>
            <div className="absolute h-[100%] w-[100%] bottom-0 left-[-15%]">
                <Image src="/assets/endolc/hero-bg-2.png"
               fill
                alt="Advastap Hero bg"
                className="object-cover z-[-1]"/>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
