import React, { useEffect, useRef } from "react";

const Hero = () => {
    const videoRef = useRef(null);

    useEffect(() => {
        const videoSrc = "/assets/ic/ic-hero-video.mp4";
        const video = videoRef.current;
        setTimeout(() => {
            video.src = videoSrc;
        }, 2000);
    }, []);

    return (
        <section className='hero-container dark' id="hero">
            <div className="w-[100vw] h-[100vh] relative overflow-hidden tablet:h-[70vh]">
                <div className="w-full h-full absolute">
                    <video
                        ref={videoRef}
                        playsInline
                        autoPlay
                        loop
                        muted
                        className="w-full h-full object-cover"
                        poster="/assets/ic/ic-hero-video-frame.png"
                    />
                </div>
                <div className="px-[12%] relative mobile:px-[5%]">
                    <div className="flex h-dvh w-full flex-col justify-center items-start tablet:h-[60vh] mobile:justify-start mobile:pt-[35vw]">
                        <div className="w-[80%] mobile:w-full tablet:w-full">
                            <h1 className='title-1 w-full aeonik  leading-[1] mobile:text-center'>
                                <span data-para-anim className='leading-[1.21] overflow-hidden text-[#FFFFFF] w-[80%] mobile:w-full mobile:text-center  '>
                                Advancing the science of flow restoration
                                </span>
                            </h1>
                            <p className={` max-w-[30vw] mt-[4vw] mb-[4vw] content-p mobile:text-center  mobile:max-w-[100%] tablet:max-w-[60vw] mobile:my-[7vw] tablet:text-[2.5vw]`}>
                                <span data-para-anim className='text-[#FFFFFF] leading-[1.4]  '>
                                Advanced MedTech Solutions (AMS) is at the forefront of innovation in Interventional Cardiology. Our mission is to provide meaningful solutions through continuous research and development, ultimately delivering better care and significantly impacting patients&apos; lives.
                                </span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;