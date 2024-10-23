import Image from "next/image";

const Hero = ({ heading, tagline, para1, src,bgimg, para2, className = "" }) => {
  return (
    <>
      <section className="hero mb-[10%]  tablet:pr-[3%]" id="hero">
        <div className="px-[10%] relative hero-container mobile:mt-[30%] tablet:px-[5%] mobile:px-[8%]">
          <div className="flex h-dvh w-full justify-start items-center mobile:h-[85vh] mobile:flex-col mobile:justify-start mobile:text-center mobile:gap-[2vw] tablet:h-[60vh]">
            <div className="gap-[4vw] mobile:w-full mobile:h-fit mobile:flex mobile:flex-col mobile:gap-0">
              <div className="mobile:w-full mobile:h-full mobile:flex  mobile:flex-col mobile:gap-[2vw]">
                <h1 className="title-1 aeonik drop-shadow-md leading-[1]">
                  <span data-para-anim
                    className={`leading-[1.2] overflow-hidden uppercase text-[5.75vw] mobile:text-[11.2vw] ${className} tablet:text-[7.5vw]`}
                  >
                    {heading}
                  </span>
                  <br className="mobile:hidden" />
                </h1>
                <p data-para-anim className="uppercase text-[1.25vw] leading-[1] tracking-wide mobile:text-[4.2vw] mobile:leading-[1.2] mobile:w-full mobile:text-center mobile:py-[5%] mobile:tracking-normal tablet:text-[2.5vw] tablet:w-[60%] tablet:tracking-normal tablet:py-[3%]">
                  {tagline}
                </p>
              </div>
              <div className="flex items-center justify-start ml-[-2vw] mobile:justify-center mobile:text-center mobile:ml-0 ">
                <span className="w-[4.5vw] h-[2px] bg-black rotate-90 mobile:hidden tablet:w-[8vw]"></span>
                <p className="max-w-[25vw] ml-[-1vw] mt-[4vw] mb-[4vw] text-[1.65vw] leading-[1] font-light mobile:text-[4.2vw] mobile:max-w-full tablet:text-[2.5vw] tablet:max-w-[55%]">
                  <span data-para-anim>{para1}</span>
                </p>
              </div>
            </div>
            <div className="absolute right-0 top-[20%] flex flex-col items-center justify-end  mobile:flex-col-reverse mobile:right-[5%] mobile:top-[30%] tablet:top-[30%]">
              <div className="w-[55vw] h-[36vw] absolute bottom-[10%] mobile:w-[100vw] mobile:h-[80vw] tablet:w-[65vw] tablet:h-[60vw] z-0 fadeUp">
                <Image
                  className="object-cover"
                  src={bgimg}
                  alt="Background Image"
                  fill
                />
              </div>

              <div className="w-[48vw] h-[36vw] relative bottom-[10%]  mobile:bottom-0 mobile:w-[90vw] mobile:h-[80vw] tablet:w-[55vw] tablet:h-[60vw] z-10 fadeUp ">
                <Image
                  className="object-contain"
                  src={src}
                  alt="Hero Image"
                  priority={true}
                  fill
                />
              </div>

              <div className="mobile:mt-[20vw]">
                <p data-para-anim className="max-w-[30vw] mt-[-3vw] text-[1.65vw] leading-[1] font-light mobile:text-[4.2vw] mobile:max-w-[75vw] mobile:py-[5%] mobile:mb-[20%] tablet:text-[2.5vw] tablet:max-w-[30vw] tablet:mt-[-10vw]">
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
