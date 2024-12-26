import { useState, useEffect } from "react";
const Hero = () => {

  const [videoSrc, setVideoSrc] = useState(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVideoSrc("/assets/manufacturing/manufacturing-hero-video.mp4");
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <section className="hero h-[100vh] mobile:mb-[20%] tablet:h-[80vh] mobile:h-[100vh] overflow-hidden mobile:w-full dark" id="hero">
        <div className="px-[10%] relative h-full">
          <div className="flex h-dvh w-full justify-start items-center tablet:h-[80vh] mobile:flex-col mobile:justify-center">
            <div className="w-full mobile:flex mobile:justify-center mobile:items-center mobile:flex-col mobile:text-center z-[50]">
              <h1 data-para-anim className="title-1 aeonik capitalize !leading-[1.25] mobile:text-[12.5vw] text-[#FFFFFF] w-[90%] text-shadow" >
                Ushering the next generation of medical device technology
              </h1>
              <p data-para-anim className="max-w-[40vw] mt-[3vw] mb-[4vw] !text-white text-[1.45vw] font-light tablet:text-[2.2vw] tablet:max-w-[50vw] mobile:text-[4vw] mobile:max-w-[90vw] mobile:text-center text-shadow-para">
                At AMS, we are pioneering the future of medical device technology, harnessing cutting-edge manufacturing advancements to drive unparalleled quality, innovation, and agility in our processes.
              </p>
            </div>
          </div>
          <div className="absolute top-0 left-0 w-screen h-full">
            <video
              poster="/assets/manufacturing/manufacturing-hero-poster.webp"
              autoPlay
              loop
              muted
              src={videoSrc}
              className="w-full h-full object-cover"
              playsInline
            ></video>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
