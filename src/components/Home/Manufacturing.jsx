/* eslint-disable @next/next/no-img-element */
import gsap from "gsap"
import ScrollTrigger from "gsap/dist/ScrollTrigger"
import { useGSAP } from "@gsap/react"
import { useRef } from "react"
import PrimaryButton from "../Button/PrimaryButton";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function Manufacturing() {

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

    useGSAP(() => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: section.current,
            start: '+=15.3% top',
            end: 'bottom -=2500',
            scrub: true,
            pin: true,
            // markers: true,
            onEnterBack: () => {
              // Reset texts when entering sections from below again
              gsap.set([text1.current, text2.current, text3.current], {opacity: 0});
            }
          }
        });
      
        // Timeline for Picture 1 and Text 1
        tl.to(picture1.current, {
          y: 0,
          duration: 2,
          delay: -1
        })
        .to(inner1.current, {
          y: 0,
          scale: 1,
          duration: 2,
          onStart: () => {
            gsap.set(text1.current, {opacity: 0}); // Ensure text is hidden before it starts to fade in
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
      
        // Timeline for Picture 2 and Text 2
        tl.to(picture2.current, {
          y: 0,
          duration: 2,
        })
        .to(inner2.current, {
          y: 0,
          scale: 1,
          duration: 2,
          onStart: () => {
            gsap.set(text2.current, {opacity: 0});
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
      
        // Timeline for Picture 3 and Text 3
        tl.to(picture3.current, {
          y: 0,
          duration: 2,
        })
        .to(inner3.current, {
          y: 0,
          scale: 1,
          duration: 2,
          onStart: () => {
            gsap.set(text3.current, {opacity: 0});
          }
        }, "-=2")
        .to(text3.current, {
          opacity: 1,
          y: 0,
          duration: 1,
          zIndex: 1,
          immediateRender: false
        }, "-=1")
      });

    return (
        <>
            <section className="p-y-lg" ref={section}>
                <div className="container-lg">
                    <div className="flex justify-between items-center">
                        <div className="w-1/3 h-full">
                            <div className="h-screen w-full flex justify-center items-center relative">
                                <div className="absolute opacity-0 translate-y-[20px]" ref={text1}>
                                    <h2 className="title-2 aeonik">
                                        <span>
                                            Ushering in the Next Generation of Medical Technology
                                        </span>
                                    </h2>
                                    <p className="content-p my-[4vw]">
                                        <span>
                                            AMS leverages strategic global partnerships to procure state-of-the-art manufacturing technology, ensuring uncompromising quality, innovation, and agility in our processes. Our adherence to LEAN principles and implementation of a robust quality management system guarantees compliance with the most stringent global regulatory standards.
                                        </span>
                                    </p>
                                    <PrimaryButton btnText={'Manufacturing'} link={'/'}/>
                                </div>
                                <div className="absolute opacity-0 translate-y-[20px]" ref={text2}>
                                    <h2 className="title-2 aeonik">
                                        <span>
                                            Building World Class Capability
                                        </span>
                                    </h2>
                                    <p className="content-p my-[4vw]">
                                        <span>
                                            Designed by renowned Spanish architect Ricardo Bofill, the AMS facility meets the Gold standard on Green building principles for sustainability and conforms to ISO 14001 safety and environmental specifications. Approx. 150,000 sq. ft. completed in Phase I and 180,000 sq.ft expansion in phase II.
                                        </span>
                                    </p>
                                    <PrimaryButton btnText={'Manufacturing'} link={'/'}/>
                                </div>
                                <div className="absolute opacity-0 translate-y-[20px]" ref={text3}>
                                    <h2 className="title-2 aeonik">
                                        <span>
                                            Robust Manufacturing Processes
                                        </span>
                                    </h2>
                                    <p className="content-p my-[4vw]">
                                        <span>
                                            The AMS plant design is based on LEAN concepts, Schedule M compliance, and Class C clean room principles. The Testing and Microbiological Laboratories are outfitted with best in class equipment. All under the supervision of experienced Manufacturing and Quality teams.
                                        </span>
                                    </p>
                                    <PrimaryButton btnText={'Manufacturing'} link={'/'}/>
                                </div>
                            </div>
                        </div>
                        <div className="w-[55%] h-screen relative -mr-[6%] rounded-s-[3vw] overflow-hidden">
                            <div className="absolute overflow-hidden top-0 left-0 w-full h-full translate-y-full" ref={picture1}>
                                <video 
                                    muted
                                    autoPlay
                                    playsInline
                                    loop
                                    loading="lazy"
                                    src="/assets/home/ams-manufacturing-video.mp4"
                                    ref={inner1}
                                    className="w-full h-full object-cover scale-[1.4] -translate-y-full"
                                />
                            </div>
                            <div className="absolute overflow-hidden top-0 left-0 w-full h-full translate-y-full" ref={picture2}>
                                <img 
                                    ref={inner2}
                                    className="w-full h-full object-cover -translate-y-full scale-[1.4]"
                                    src="/assets/home/manufacturing-2.png"
                                    alt="image"
                                />
                            </div>
                            <div className="absolute overflow-hidden top-0 left-0 w-full h-full translate-y-full" ref={picture3}>
                                <img 
                                    ref={inner3}
                                    className="w-full h-full object-cover -translate-y-full scale-[1.4]"
                                    src="/assets/home/manufacturing-3.png"
                                    alt="image"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}