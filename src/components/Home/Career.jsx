import PrimaryButton from "../Button/PrimaryButton";
import { paraAnim } from "../gsapAnimations";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useEffect, useRef, useState } from "react";
gsap.registerPlugin(ScrollTrigger);

export default function Career() {
    paraAnim();
    const careerVideoRef = useRef(null);
    const [videoLoaded, setVideoLoaded] = useState(false); // Track if the video has been loaded

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const video = careerVideoRef.current;
                        if (video && !videoLoaded) {
                            // Set video source dynamically when it enters the viewport
                            video.src = "/assets/home/career.mp4";
                            video.load(); // Ensure the video is loaded
                            video.play(); // Play the video when it's visible
                            setVideoLoaded(true); // Set video as loaded
                        }
                        observer.unobserve(entry.target); // Stop observing once the video has loaded
                    }
                });
            },
            { threshold: 0.5 } // Trigger when 50% of the video is visible
        );

        const videoElement = careerVideoRef.current;
        if (videoElement) {
            observer.observe(videoElement);
        }

        return () => {
            if (videoElement) observer.unobserve(videoElement);
        };
    }, [videoLoaded]);

    return (
        <>
            <section className="p-y-sm" id="career">
                <div className="container-lg relative px-[8%] py-[8%] overflow-hidden rounded-[3vw]">
                    <video
                        loading="lazy"
                        loop
                        muted
                        playsInline
                        ref={careerVideoRef}
                        className="h-full w-full object-cover left-0 top-0 rounded-[3vw] absolute imageAnim"
                        poster="/assets/home/career-video-poster.webp" // Set a poster image before the video loads
                    >
                        {/* The video source will be added dynamically via the IntersectionObserver */}
                    </video>
                    <div className="w-[60%] relative z-10 space-y-[3.5vw]">
                        <h2 className="title-2 aeonik">
                            <span data-para-anim className="text-shadow1">
                                Join Our Mission to
                            </span>
                            <span data-para-anim className="text-shadow1">
                                Create a Healthier World
                            </span>
                        </h2>
                        <p data-para-anim className="content-p w-[70%] text-shadow1">
                            To achieve the extraordinary, we need an exceptional team. At AMS, diversity and inclusiveness are the foundation for our dynamic and thriving culture. Unleash your potential and achieve the extraordinary in your career. Our unwavering commitment to revolutionizing healthcare is fuelled by our desire to make a difference and a meaningful impact in people’s lives.
                        </p>
                        <PrimaryButton className={"fadeUp"} link={"/"} btnText={"Career"} />
                    </div>
                </div>
            </section>
        </>
    );
}
