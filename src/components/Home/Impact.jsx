import PrimaryButton from "../Button/PrimaryButton";
import gsap from "gsap";
import { useEffect, useRef, useState } from "react";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function Impact() {
    // paraAnim();
    const videoRef = useRef(null);
    const [videoLoaded, setVideoLoaded] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const video = videoRef.current;
                        if (video && !videoLoaded) {
                            // Set video source dynamically when it enters the viewport
                            video.src = "/assets/home/impact-video.mp4";
                            video.load(); // Ensure the video is loaded
                            video.play(); // Play the video when it's visible
                            setVideoLoaded(true); // Set video as loaded
                        }
                        observer.unobserve(entry.target); // Stop observing once the video has loaded
                    }
                });
            },
            { threshold: 0.5 }
        );

        const videoElement = videoRef.current;
        if (videoElement) {
            observer.observe(videoElement);
        }

        return () => {
            if (videoElement) observer.unobserve(videoElement);
        };
    }, [videoLoaded]);

    useEffect(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: ".imageAnim",
                start: "top 70%",
                end: "bottom top",
                scrub: true,
            },
        });

        tl.from(".imageAnim", {
            scale: 1.2,
            delay: -1,
        });
    }, []);

    return (
        <>
            <section className="p-y-sm mt-[5%] mobile:mt-[10%]" id="impact">
                <div className="container-lg relative px-[8%] h-full py-[6%] overflow-hidden rounded-[2.5vw] mobile:py-[15vw] mobile:flex-col mobile:items-center mobile:justify-center mobile:rounded-[7vw] fadeUp">
                    <video
                        ref={videoRef}
                        muted
                        playsInline
                        loop
                        className="h-full w-full object-cover left-0 top-0 absolute imageAnim"
                        poster="/assets/home/impact-video-poster.webp" 
                      
                    >
                    </video>

                    <div className="flex items-center mobile:justify-center">
                        <div className="w-1/2 h-[35vw] relative z-10 space-y-[3.5vw] tablet:w-[70%] mobile:w-[100%] mobile:flex-col mobile:items-center mobile:justify-center mobile:text-center mobile:space-y-[15vw]">
                            <h2 className="title-2 aeonik leading-[0] text-shadow">
                                <span data-para-anim className="text-white leading-[1.3]">
                                Making an Impact:
                                
                                 Our Global Reach
                                </span>
                            </h2>
                            <p data-para-anim className="text-[1.15vw] font-light leading-[1.7] text-white text-shadow mobile:text-[4.5vw] tablet:text-[1.8vw]">
                            Our unwavering commitment to global healthcare fuels our relentless pursuit of MedTech innovation, enhancing outcomes in every corner of the world. Our expanding footprint across 116+ countries, empowers us to forge powerful partnerships, creating solutions that make a profound difference in patients’&apos;lives.
                            </p>
                            <div className="w-full flex mobile:justify-center pt-[3vw]">
                            <PrimaryButton className={"secondary fadeUp !text-white"} link={"/about"} text={"Know More"} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
