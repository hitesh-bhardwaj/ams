import PrimaryButton from "../Button/PrimaryButton";
import { useEffect, useState } from "react";

export default function Hero() {
  const [videoSrc, setVideoSrc] = useState(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVideoSrc("/assets/home/hero-final.mp4");
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative overflow-hidden dark" id="hero">
      <div className="px-[12%] w-full relative mobile:px-[5vw] tablet:px-[10%]">
        <div className="flex h-dvh relative z-10 w-full justify-start items-center mobile:h-screen tablet:h-[70vh]">
          <div className="w-[55%] mobile:w-full mobile:flex mobile:flex-col mobile:items-center mobile:justify-center tablet:w-[85%] mt-[4vw]">
            <h1 data-para-anim className="title-1 aeonik capitalize mobile:text-center mobile:text-[15vw] text-[#ffffff] tablet:text-[10vw]" >
              Advancing the way we care
            </h1>
            <p className="font-light max-w-[50vw] text-[1.25vw] text-white mt-[4vw] mb-[7vw] mobile:text-[4.5vw] mobile:max-w-[90vw] mobile:text-center mobile:mt-[10vw] mobile:px-[5vw] mobile:mb-[15vw]  tablet:text-[2.5vw] tablet:max-w-[50vw]">
              <span data-para-anim className="mobile:leading-[1.8]">
                AMS is dedicated to advancing healthcare by providing meaningful
                MedTech solutions, improving lives for patients around the
                world.
              </span>
            </p>
            <div className="fadeUp">
              <PrimaryButton
                text={"About us"}
                link={"/about"}
                className={"secondary  !text-white"}
              />
            </div>
          </div>
        </div>

        <div className="absolute top-0 left-0 bottom-0 right-0 h-full w-full z-[1]">
            <video
              poster="/assets/home/homepage-hero-video-poster.webp"
              autoPlay
              loop
              muted
              src={videoSrc}
              className="w-full h-full object-cover object-left"
              playsInline
            />
          </div>
      </div>
    </section>
  );
}
