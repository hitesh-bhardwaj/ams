import PrimaryButton from "../Button/PrimaryButton";
import { useEffect, useState } from "react";

export default function Hero() {
  const [videoSrc, setVideoSrc] = useState(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVideoSrc("/assets/home/homepage-hero-video.mp4");
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      className="hero mobile:mb-[0vw] overflow-hidden relative dark"
      id="hero"
    >
      <div className="px-[12%] relative mobile:px-[5vw] mobile:w-[100vw] tablet:px-[10%] ">
        <div className="flex h-dvh w-full justify-start items-center mobile:h-screen tablet:h-[60vh]">
          <div className="w-[55%] z-[50] mobile:w-full mobile:flex mobile:flex-col mobile:items-center mobile:justify-center tablet:w-3/4 mt-[4vw]">
            <h1
              data-para-anim
              className="title-1 aeonik  capitalize mobile:text-center mobile:text-[15vw] text-[#ffffff]"
            >
              Advancing the way we care
            </h1>
            <p className="font-light max-w-[50vw] text-[1.25vw] text-white mt-[4vw] mb-[7vw] mobile:text-[4.5vw] mobile:max-w-[90vw] mobile:text-center mobile:mt-[10vw] mobile:px-[5vw] mobile:mb-[15vw]  tablet:text-[2vw] tablet:max-w-[40vw]">
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

          <div className="absolute top-0 left-0  h-full">
            <div className="w-screen h-full relative">
              <video
                poster="/assets/home/homepage-hero-video-poster.webp"
                autoPlay
                loop
                muted
                src={videoSrc}
                className="w-full h-full object-cover object-left"
                playsInline
              ></video>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
