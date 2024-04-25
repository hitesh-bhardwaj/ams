import gsap from "gsap"
import ScrollTrigger from "gsap/dist/ScrollTrigger"
import { useGSAP } from "@gsap/react"
import { useRef } from "react"

gsap.registerPlugin(useGSAP, ScrollTrigger)

export default function Benefits() {

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
            start: 'top top',
            end: 'bottom -=2500',
            scrub: true,
            pin: true,
            markers: true,
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
          immediateRender: false
        }, "-=1")
        .to(text1.current, {
          opacity: 0,
          duration: 1
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
          immediateRender: false
        }, "-=1")
        .to(text2.current, {
          opacity: 0,
          duration: 1
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
          immediateRender: false
        }, "-=1")
      });

    return (
        <>
            <section className="h-screen bg-gray-100 w-full">

            </section>
            <section className="w-full h-full" ref={section}>
                <div className="flex w-full justify-between">
                    <div className="w-1/2 h-full">
                        <div className="h-screen w-full flex justify-center items-center relative">
                            <p className="absolute opacity-0 translate-y-[20px]" ref={text1}>
                                Hello World
                            </p>
                            <p className="absolute opacity-0 translate-y-[20px]" ref={text2}>
                                Hello World 2
                            </p>
                            <p className="absolute opacity-0 translate-y-[20px]" ref={text3}>
                                Hello World 3
                            </p>
                        </div>
                    </div>
                    <div className="w-1/2 h-screen relative">
                        <picture className="absolute overflow-hidden top-0 left-0 w-full h-full translate-y-full" ref={picture1}>
                            <source srcSet="/assets/test/benefits-1@xxxl.webp"/>
                            <img 
                                ref={inner1}
                                className="w-full h-full object-cover -translate-y-full scale-[1.4]"
                                src="/assets/test/benefits-1@xxxl.webp"
                                alt="image"
                            />
                        </picture>
                        <picture className="absolute overflow-hidden top-0 left-0 w-full h-full translate-y-full" ref={picture2}>
                            <source srcSet="/assets/test/benefits-2@xxxl.webp"/>
                            <img 
                                ref={inner2}
                                className="w-full h-full object-cover -translate-y-full scale-[1.4]"
                                src="/assets/test/benefits-1@xxxl.webp"
                                alt="image"
                            />
                        </picture>
                        <picture className="absolute overflow-hidden top-0 left-0 w-full h-full translate-y-full" ref={picture3}>
                            <source srcSet="/assets/test/benefits-3@xxxl.webp"/>
                            <img 
                                ref={inner3}
                                className="w-full h-full object-cover -translate-y-full scale-[1.4]"
                                src="/assets/test/benefits-1@xxxl.webp"
                                alt="image"
                            />
                        </picture>
                    </div>
                </div>
            </section>
        </>
    )
}