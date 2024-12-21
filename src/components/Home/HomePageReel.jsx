import LazyVideo from "@/components/layoutComponents/LazyVideo";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useEffect, useRef } from "react";
gsap.registerPlugin(ScrollTrigger);

const HomePageReel = () => {
  const containerRef = useRef();
  const videoAnim = useRef();

  useEffect(() => {
    if (globalThis.innerWidth > 1023) {
      let ctx = gsap.context(() => {
        gsap.from(videoAnim.current, {
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top center",
            end: "center center",
            scrub: true,
          },
          y: "100%",
          duration: 4
        });
        gsap.to(videoAnim.current, {
          scrollTrigger: {
            trigger: containerRef.current,
            start: "center center",
            end: "bottom top",
            pin: true,
            scrub: true,
          },
          scale: "1",
          duration: 4
        });
      });
      return () => ctx.revert();
    }
  }, [])

  return (
    <>
      <section ref={containerRef} className='h-full py-[10%] tablet:py-[15%] bg-white/50 mobile:py-[20%]' id='homepagereel'>
        <div className='w-full h-full flex justify-center items-center'>
          <div ref={videoAnim} className='h-[45vw] w-[90vw] overflow-hidden rounded-[2.5vw] scale-50 tablet:scale-100 mobile:scale-100'>
            <LazyVideo
              poster={"/assets/home/homepage-reel-poster.webp"}
              type="video/mp4"
              muted
              autoPlay
              loop
              videoSrc={"/assets/home/homepage-reel.mp4"}
              className='w-full h-full object-cover scale-[1.2]'
            />
          </div>
        </div>
      </section>
    </>
  )
}

export default HomePageReel
