/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @next/next/no-img-element */
import gsap from "gsap"
import ScrollTrigger from "gsap/dist/ScrollTrigger"
import { useGSAP } from "@gsap/react"
import { useEffect, useRef } from "react"
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

    useEffect(() => {
       const tl = gsap.timeline({
          scrollTrigger: {
            trigger: section.current,
            start: 'top top',
            end: 'bottom -=2500',
            scrub: true,
            pin: true,
            // markers: true,
            onEnterBack: () => {
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
          gsap.set(text1.current, {opacity: 1});
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
      .to(text3.current, {
        opacity: 0,
        duration: 1,
        zIndex: 0,
      }, "+=1");
  
      return () => tl.kill();
    }, []);

    return (
        <>
            <section className="pb-[12%]" ref={section} id="manufacturing">
                <div className="container-lg">
                    <div className="flex justify-between items-center">
                        <div className="w-1/3 h-full">
                            <div className="h-screen w-full flex justify-center items-center relative">
                                <div className="absolute" ref={text1}>
                                    <h2  className="title-2 aeonik">
                                        
                                            Ushering in the Next Generation of Medical Technology
                                        
                                    </h2>
                                    <p className="content-p my-[4vw]">
                                        
                                            AMS leverages strategic global partnerships to procure state-of-the-art manufacturing technology, ensuring uncompromising quality, innovation, and agility in our processes. Our adherence to LEAN principles and implementation of a robust quality management system guarantees compliance with the most stringent global regulatory standards.
                                       
                                    </p>
                                    <PrimaryButton className={"fadeUp"} btnText={'Manufacturing'} link={'/'}/>
                                </div>
                                <div className="absolute opacity-0 translate-y-[20px]" ref={text2}>
                                    <h2 className="title-2 aeonik">
                                       
                                            Building World Class Capability
                                        
                                    </h2>
                                    <p className="content-p my-[4vw]">
                                        
                                            Designed by renowned Spanish architect Ricardo Bofill, the AMS facility meets the Gold standard on Green building principles for sustainability and conforms to ISO 14001 safety and environmental specifications. Approx. 150,000 sq. ft. completed in Phase I and 180,000 sq.ft expansion in phase II.
                                        
                                    </p>
                                    <PrimaryButton btnText={'Manufacturing'} link={'/'}/>
                                </div>
                                <div className="absolute opacity-0 translate-y-[20px]" ref={text3}>
                                    <h2 className="title-2 aeonik">
                                        
                                            Robust Manufacturing Processes
                                        
                                    </h2>
                                    <p className="content-p my-[4vw]">
                                       
                                            The AMS plant design is based on LEAN concepts, Schedule M compliance, and Class C clean room principles. The Testing and Microbiological Laboratories are outfitted with best in class equipment. All under the supervision of experienced Manufacturing and Quality teams.
                                        
                                    </p>
                                    <PrimaryButton btnText={'Manufacturing'} link={'/'}/>
                                </div>
                            </div>
                        </div>
                        <div className="w-[65%] h-screen relative -mr-[6%] rounded-s-[3vw] overflow-hidden">
                            <div className="absolute overflow-hidden top-0 left-0 w-full h-full" ref={picture1}>
                                <video 
                                    muted
                                    autoPlay
                                    playsInline
                                    loop
                                    loading="lazy"
                                    src="/assets/home/ams-manufacturing-video.mp4"
                                    ref={inner1}
                                    className="w-full h-full object-cover"
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