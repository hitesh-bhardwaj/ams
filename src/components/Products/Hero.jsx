import Image from "next/image";

const Hero = ({ heading, tagline, para1,src, para2, className=""}) => {
  return (
    <>
      <section className="hero mb-[10%] " id="hero">
        <div className="px-[10%] relative mobile:mt-[30%]">
          <div className="flex h-dvh w-full justify-start items-center mobile:h-[85vh] mobile:flex-col mobile:justify-start mobile:text-center mobile:gap-[10vw]">
            <div className="gap-[4vw]">
              <div>
                <h1 className="title-1 aeonik drop-shadow-md leading-[1]">
                  <span className={`leading-[1.2] overflow-hidden uppercase text-[5.75vw]mobile:text-[11.2vw] ${className}`}>
                    {heading}
                  </span>
                  <br />
                </h1>
                <p className="uppercase text-[1.25vw] leading-[1] tracking-wide mobile:text-[4.2vw] mobile:leading-[1.2] mobile:w-[90%] mobile:text-center mobile:py-[5%] mobile:tracking-normal">
                  {tagline}
                </p>
              </div>
              <div className="flex items-center justify-start ml-[-2vw] mobile:justify-center mobile:text-center mobile:ml-0 ">
                <span className="w-[4.5vw] h-[2px] bg-black rotate-90 mobile:hidden"></span>
                <p className="max-w-[25vw] ml-[-1vw] mt-[4vw] mb-[4vw] text-[1.65vw] leading-[1] font-light mobile:text-[4.2vw] mobile:max-w-[85%] ">
                  <span>
                   {para1}
                  </span>
                </p>
              </div>
            </div>
            <div className="absolute right-0 top-[20%] flex flex-col items-center justify-end mobile:flex-col-reverse mobile:right-[5%] mobile:top-[30%]">
              <div className="w-[48vw] h-[36vw] relative bottom-[10%] mobile:bottom-0 mobile:w-[90vw] mobile:h-[80vw] ">
                <Image
                  className="hero-img object-contain"
                  src={src}
                  alt="Hero Image"
                  priority={true}
                  fill
                />
              </div>
              <div className="">
                <p className="max-w-[30vw] mt-[-3vw] text-[1.65vw] leading-[1] font-light mobile:text-[4.2vw] mobile:max-w-[55vw] mobile:py-[5%] mobile:mb-[20%]">{para2}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
