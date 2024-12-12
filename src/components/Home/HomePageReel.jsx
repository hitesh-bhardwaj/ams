import React, { useEffect, useRef, useState } from 'react'

const HomePageReel = () => {
    const HomePageReel = useRef(null);
    const [videoLoaded, setVideoLoaded] = useState(false); // Track if the video has been loaded

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const video = HomePageReel.current;
                        if (video && !videoLoaded) {
                            // Set video source dynamically when it enters the viewport
                            video.src = "/assets/home/homepage-reel.mp4";
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

        const videoElement = HomePageReel.current;
        if (videoElement) {
            observer.observe(videoElement);
        }

        return () => {
            if (videoElement) observer.unobserve(videoElement);
        };
    }, [videoLoaded]);
  return (
    <>
    <section className='w-screen h-full py-[8%] bg-white/50' id='homepagereel'>
        <div className='w-full h-full flex justify-center items-center'>
        <div className='h-[40vw] w-[90vw] overflow-hidden'>
           
            <video
                        loading="lazy"
                        loop
                        muted
                        playsInline
                        ref={HomePageReel}
                        className=" w-full h-full  object-cover rounded-[3vw]"
                        poster="/assets/home/homepage-reel-poster.webp" // Set a poster image before the video loads
                    >
                        {/* The video source will be added dynamically via the IntersectionObserver */}
                    </video>
            </div>

        </div>

    </section>
      
    </>
  )
}

export default HomePageReel
