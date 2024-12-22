import React, { useEffect, useRef } from "react";

const Hero = () => {
    const videoRef = useRef(null);

    useEffect(() => {
        const videoSrc = "/assets/cardioVascular/cv-hero-video.mp4";
        const video = videoRef.current;
        setTimeout(() => {
            video.src = videoSrc;
        }, 2000);
    }, []);

    return (
        <section className='hero-container dark' id="hero">
            <div className="w-[100vw] h-[100vh] relative overflow-hidden tablet:h-[80vh]">
                <div className="w-full h-full absolute">
                    <video
                        ref={videoRef}
                        playsInline
                        autoPlay
                        loop
                        muted
                        className="w-full h-full object-cover"
                        poster="/assets/cardioVascular/cv-video-frame.webp"
                    />
                </div>
                <div className="px-[12%] relative mobile:px-[5%]">
                    <div className="flex h-dvh w-full flex-col justify-center items-start tablet:h-[80vh] mobile:justify-start mobile:pt-[35vw]">
                        <div className="w-[80%] mobile:w-full tablet:w-full">
                            <h1 className='title-1 w-full aeonik  leading-[1] mobile:text-center'>
                                <span data-para-anim className='leading-[1.21] overflow-hidden text-[#FFFFFF] w-[80%] mobile:w-full mobile:text-center tablet:w-full tablet:leading-[1]  '>
                                Advancing the Science of Cardiothoracic Surgery
                                </span>
                            </h1>
                            <p className={` max-w-[35vw] mt-[4vw] mb-[4vw] content-p mobile:text-center  mobile:max-w-[100%] tablet:max-w-[80vw] mobile:my-[7vw] tablet:text-[2.5vw]`}>
                                <span data-para-anim className='text-[#FFFFFF] leading-[1.4]  '>
                                At the forefront of cardiac care, we provide leading-edge solutions designed to enhance surgical precision and improve patient outcomes. With our advanced cardiac portfolio, we are setting new standards in the field of cardiothoracic therapy.
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