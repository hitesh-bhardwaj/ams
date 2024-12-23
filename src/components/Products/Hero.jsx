import Image from "next/image";

const Hero = ({ heading, tagline, para1, src,bgimg, para2,margin, className = "",overlay }) => {
  return (
    <>
      <section className="hero tablet:mb-0 tablet:pr-[3%] w-screen overflow-hidden h-screen shadow-md drop-shdow-sm mobile:shadow-none py-[2%] tablet:h-[80vh]" id="hero">
        <div className={`absolute w-screen h-screen top-0 left-0 bg-white/40 ${overlay}`}></div>
        <div className="px-[10%] relative hero-container mobile:mt-[25%] tablet:px-[5%] mobile:px-[8%]">
          <div className="flex h-full w-full justify-start items-center mobile:h-screen mobile:flex-col mobile:justify-start mobile:text-center mobile:gap-[2vw] tablet:justify-start tablet:h-[50vh]">
            <div className="pt-[15%] gap-[4vw] mobile:w-full mobile:h-fit mobile:flex mobile:flex-col mobile:gap-0 mobile:pt-[0%] tablet:pt-0">
              <div className="mobile:w-full mobile:h-full mobile:flex  mobile:flex-col mobile:gap-[2vw] mobile:items-center">
                <h1 className="title-1 aeonik  leading-[1] overflow-hidden uppercase">
                  <span
data-para-anim
                    className={`leading-[1.2] overflow-hidden uppercase text-[5.75vw] mobile:text-[13.2vw] ${className} tablet:text-[9vw]`}
                  >
                    {heading}
                  </span> 
                </h1>
                <p data-para-anim className="uppercase  text-[1.25vw] leading-[1.25] tracking-wide mobile:text-[5vw] mobile:leading-[1.2] mobile:w-[80%] mobile:text-center mobile:py-[5%] mobile:tracking-normal tablet:text-[2.5vw] tablet:w-[60%] tablet:tracking-normal tablet:py-[3%]">
                  {tagline}
                </p>
              </div>
              <div className="flex items-center justify-start ml-[-2vw] mobile:justify-center mobile:text-center mobile:ml-0 ">
                <span className="w-[4.5vw] h-[2px] bg-black rotate-90 mobile:hidden tablet:w-[1.5px] tablet:rotate-0 tablet:h-[10vw] fadeUp"></span>
                <p className="max-w-[25vw] ml-[-1vw] mt-[4vw] mb-[4vw] text-[1.65vw] leading-[1.1] font-light mobile:text-[4.8vw] mobile:max-w-full mobile:leading-[1.2] tablet:text-[2.5vw] tablet:max-w-[60%] tablet:leading-[1.2] tablet:ml-[2vw]">
                  <span data-para-anim>{para1}</span>
                </p>
              </div>
            </div>
            <div className="absolute right-0 top-[10%] flex flex-col items-center justify-end  mobile:flex-col-reverse mobile:right-0 mobile:top-[25%] tablet:top-[65%]">
              <div className="w-[55vw] h-[45vw] absolute bottom-[-20%] right-[5%] mobile:w-[100vw] mobile:h-[80vw] mobile:right-[10%] mobile:bottom-0 tablet:w-[65vw] tablet:h-[60vw] z-0 fadeUp">
                <Image
                  className="object-cover"
                  src={bgimg}
                  alt="Background Image"
                  fill
                />
              </div>

              <div className="w-[40vw] h-[40vw] relative bottom-[10%] right-[15%]  mobile:bottom-0 mobile:w-[100vw] mobile:h-[80vw] mobile:left-0  tablet:w-[55vw] tablet:h-[60vw] z-10 fadeUp ">
                <Image
                  className="object-contain mobile:object-cover"
                  src={src}
                  alt="Hero Image"
                  priority={true}
                  fill
                />
              </div>

              <div className={`mobile:mt-[7vw] mt-[-5vw] ${margin} ml-[-15vw] mobile:ml-0`}>
                <p data-para-anim className="max-w-[25vw]  text-[1.45vw] leading-[1.2] font-light mobile:text-[5vw] mobile:max-w-[75vw] mobile:py-[10%] mobile:mb-[20%] tablet:text-[2.5vw] tablet:max-w-[52vw] tablet:mt-[-5vw] tablet:text-left">
                  {para2}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
