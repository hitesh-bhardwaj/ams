/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @next/next/no-img-element */
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useRef, useEffect } from "react";
import PrimaryButton from "../Button/PrimaryButton";
import { paraAnim } from "../gsapAnimations";
import Image from "next/image";
gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function Manufacturing() {
  paraAnim();

  const picture1 = useRef(null);
  const inner1 = useRef(null);
  const picture2 = useRef(null);
  const inner2 = useRef(null);
  const picture3 = useRef(null);
  const inner3 = useRef(null);
  const section = useRef(null);
  const text1 = useRef(null);
  const text2 = useRef(null);
  const text3 = useRef(null);

  // IntersectionObserver to lazy load video
  useEffect(() => {
    const video = inner1.current;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Load video source and play it when in view
          if (video) {
            video.src = "/assets/home/ams-manufacturing-video.mp4";
            video.play();
          }
          observer.disconnect(); // Stop observing once the video is loaded
        }
      });
    }, { threshold: 0.5 }); // Adjust threshold as needed

    if (video) {
      observer.observe(video);
    }

    return () => {
      if (video) {
        observer.unobserve(video);
      }
    };
  }, []);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section.current,
        start: 'top top',
        end: 'bottom -=2000',
        scrub: true,
        pin: true,
        // markers: true,
        onEnterBack: () => {
          gsap.set([text1.current, text2.current, text3.current], { opacity: 0 });
        }
      }
    });

    // Picture 1 and Text 1 timeline
    tl.to(inner1.current, {
      y: 0,
      scale: 1,
      duration: 1,
      onStart: () => {
        gsap.set(text1.current, { opacity: 1 });
      }
    }, "-=2")
      .to(text1.current, {
        opacity: 1,
        y: 0,
        duration: 1,
        zIndex: 1,
        immediateRender: false
      }, "-=1")
      .to(text1.current, {
        opacity: 0,
        duration: 1,
        zIndex: 0,
      }, "+=1");

    // Picture 2 and Text 2 timeline
    tl.to(picture2.current, {
      y: 0,
      duration: 2,
      delay: -1,
    })
      .to(inner2.current, {
        y: 0,
        scale: 1,
        duration: 2,
        onStart: () => {
          gsap.set(text2.current, { opacity: 0 });
        }
      }, "-=2")
      .to(text2.current, {
        opacity: 1,
        y: 0,
        duration: 1,
        zIndex: 1,
        immediateRender: false
      }, "-=1")
      .to(text2.current, {
        opacity: 0,
        duration: 1,
        zIndex: 0,
      }, "+=1");

    // Picture 3 and Text 3 timeline
    tl.to(picture3.current, {
      y: 0,
      duration: 2,
    })
      .to(inner3.current, {
        y: 0,
        scale: 1,
        duration: 2,
        onStart: () => {
          gsap.set(text3.current, { opacity: 0 });
        }
      }, "-=2")
      .to(text3.current, {
        opacity: 1,
        y: 0,
        duration: 1,
        zIndex: 1,
        immediateRender: false
      }, "-=1")
      .to(text3.current, {
        opacity: 0,
        duration: 1,
        zIndex: 0,
      }, "+=1");

  });

  return (
    <>
      <section className="pb-[12%]" ref={section} id="manufacturing">
        <div className="container-lg">
          <div className="flex justify-between items-center tablet:flex-col tablet:h-screen tablet:justify-center tablet:pt-[15%]">
            <div className="w-1/3 h-full tablet:w-full tablet:order-1 tablet:h-[50vh]">
              <div className="h-screen w-full flex justify-center items-center relative tablet:h-full tablet:items-start tablet:pt-[10%]">
                <div className="absolute" ref={text1}>
                  <h2 data-para-anim className="title-2 aeonik">
                    Ushering in the Next Generation of Medical Technology
                  </h2>
                  <p data-para-anim className="content-p my-[4vw]">
                    AMS leverages strategic global partnerships to procure state-of-the-art manufacturing technology, ensuring uncompromising quality, innovation, and agility in our processes. Our adherence to LEAN principles and implementation of a robust quality management system guarantees compliance with the most stringent global regulatory standards.
                  </p>
                  <PrimaryButton className={"fadeUp"} btnText={'Manufacturing'} link={'/'} />
                </div>
                <div className="absolute opacity-0 translate-y-[20px]" ref={text2}>
                  <h2 data-para-anim className="title-2 aeonik">
                    Building World Class Capability
                  </h2>
                  <p data-para-anim className="content-p my-[4vw]">
                    Designed by renowned Spanish architect Ricardo Bofill, the AMS facility meets the Gold standard on Green building principles for sustainability and conforms to ISO 14001 safety and environmental specifications. Approx. 150,000 sq. ft. completed in Phase I and 180,000 sq.ft expansion in phase II.
                  </p>
                  <PrimaryButton btnText={'Manufacturing'} link={'/'} />
                </div>
                <div className="absolute opacity-0 translate-y-[20px]" ref={text3}>
                  <h2 data-para-anim className="title-2 aeonik">
                    Robust Manufacturing Processes
                  </h2>
                  <p data-para-anim className="content-p my-[4vw]">
                    The AMS plant design is based on LEAN concepts, Schedule M compliance, and Class C clean room principles. The Testing and Microbiological Laboratories are outfitted with best-in-class equipment. All under the supervision of experienced Manufacturing and Quality teams.
                  </p>
                  <PrimaryButton btnText={'Manufacturing'} link={'/'} />
                </div>
              </div>
            </div>
            <div className="w-[65%] h-screen relative -mr-[6%] rounded-s-[3vw] overflow-hidden tablet:h-[40vh] tablet:order-0 tablet:w-[90vw] tablet:rounded-[3vw] tablet:mr-0">
              <div className="absolute overflow-hidden top-0 left-0 w-full h-full" ref={picture1}>
                <video
                  muted
                  playsInline
                  autoPlay
                  loop
                  loading="lazy"
                  ref={inner1}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute overflow-hidden top-0 left-0 w-full h-full translate-y-full" ref={picture2}>
                <div className="relative h-screen w-[60vw]">
                  <Image
                    ref={inner2}
                    fill
                    className="w-full h-full object-cover -translate-y-full scale-[1.4]"
                    src="/assets/home/manufacturing-2.webp"
                    alt="image"
                  />

                </div>
              </div>
              <div className="absolute overflow-hidden top-0 left-0 w-full h-full translate-y-full" ref={picture3}>
              <div className="relative h-screen w-[60vw]">
                  <Image
                    ref={inner3}
                    fill
                    className="w-full h-full object-cover -translate-y-full scale-[1.4]"
                    src="/assets/home/manufacturing-3.webp"
                    alt="image"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
