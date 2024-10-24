/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react-hooks/rules-of-hooks */
import { useEffect, useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import {
    indexInParent,
    splitLines,
} from "./utils";
import PrimaryButton from "../Button/PrimaryButton";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const ManufacturingCarousel = () => {
    const carouselRef = useRef(null);
    const manufacturingVideoRef = useRef(null);
    const [videoLoaded, setVideoLoaded] = useState(false); // Track if the video has been loaded

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const video = manufacturingVideoRef.current;
                        if (video && !videoLoaded) {
                            // Set video source dynamically when it enters the viewport
                            video.src = "/assets/home/ams-manufacturing-video.mp4";
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

        const videoElement = manufacturingVideoRef.current;
        if (videoElement) {
            observer.observe(videoElement);
        }

        return () => {
            if (videoElement) observer.unobserve(videoElement);
        };
    }, [videoLoaded]);

    // if (globalThis.innerWidth >= 540) {
    if(globalThis.innerWidth<=541){

    }
    else{
        
        useGSAP(() => {
            const carousel = carouselRef.current;
            let nbCartes = carousel.querySelectorAll('.leCarou .innerImg').length;
            let numeroSlide = 0;
            let animEnCours = false;

            document.querySelectorAll('.entree h2').forEach(el => {
                splitLines(el, '<span><span>', '</span></span>')
            });

            gsap.to(document.querySelectorAll('.entree')[0].querySelectorAll('h2 span span'), {
                duration: 0.8, y: '0%', delay: 0.3, ease: 'easeSpe',
                scrollTrigger: {
                    trigger: document.querySelectorAll('.entree')[0],
                    start: 'top bottom'
                }
            })
            gsap.fromTo(document.querySelectorAll('.entree')[0].querySelector('p'), {
                opacity: 0
            }, {
                duration: 0.4, opacity: 1, delay: 0.3, ease: 'easeSpe',
                scrollTrigger: {
                    trigger: document.querySelectorAll('.entree')[0],
                    start: 'top bottom'
                }
            })
            gsap.fromTo(document.querySelectorAll('.entree')[0].querySelectorAll('a'), {
                opacity: 0, y: 20
            }, {
                duration: 0.4, opacity: 1, y: 0, delay: 0.9, stagger: 0.07, ease: 'easeSpe',
                scrollTrigger: {
                    trigger: document.querySelectorAll('.entree')[0],
                    start: 'top bottom'
                }
            })

            ScrollTrigger.create({
                trigger: carousel.querySelector('.pushCarousel'),
                start: "top top",
                end: '+=' + ((nbCartes - 1) * window.innerHeight),
                pin: true,
                scrub: true,
            });

            let incr = -136;
            let elmts = [];
            let first = 0;

            carousel.querySelectorAll('.leCarou .innerImg').forEach(el => {
                if (first == 0) {
                    first++;
                } else {
                    elmts.push(el);
                }
            });

            elmts.forEach(el => {

                ScrollTrigger.create({
                    trigger: carousel.querySelector('.innerCarou'),
                    start: 'top top-=' + (incr + (window.innerHeight / 2)) + "px",
                    end: '+=' + window.innerHeight + "px",
                    onEnter: () => {

                        numeroSlide++;

                        gsap.killTweensOf(carousel.querySelectorAll('.entree'));
                        gsap.to(carousel.querySelectorAll('.entree'), {
                            duration: 0.2,
                            opacity: 0,
                            ease: 'none'
                        })
                        gsap.to(carousel.querySelectorAll('.entree')[indexInParent(el)], {
                            duration: 0.2,
                            opacity: 1,
                            delay: 0.2,
                            ease: 'none',
                        })

                        gsap.fromTo(carousel.querySelectorAll('.entree')[indexInParent(el)].querySelectorAll('h2 span span'), {
                            y: '100%'
                        }, {
                            duration: 0.8, y: '0%', delay: 0.2, stagger: 0.07, ease: 'easeSpe'
                        })

                        gsap.fromTo(carousel.querySelectorAll('.entree')[indexInParent(el)].querySelector('p'), {
                            opacity: 0
                        }, {
                            duration: 0.4, opacity: 1, delay: 0.2, ease: 'easeSpe'
                        })

                        gsap.fromTo(carousel.querySelectorAll('.entree')[indexInParent(el)].querySelector('ul'), {
                            opacity: 0, y: 20
                        }, {
                            duration: 0.4, opacity: 1, y: 0, stagger: 0.07, delay: 0.6, ease: 'easeSpe'
                        })
                    },
                    onLeaveBack: () => {

                        numeroSlide--;

                        gsap.killTweensOf(carousel.querySelectorAll('.entree'));
                        gsap.to(carousel.querySelectorAll('.entree'), {
                            duration: 0.2,
                            opacity: 0,
                            ease: 'none'
                        })
                        gsap.to(carousel.querySelectorAll('.entree')[indexInParent(el) - 1], {
                            duration: 0.2,
                            opacity: 1,
                            delay: 0.2,
                            ease: 'none'
                        })
                        gsap.fromTo(carousel.querySelectorAll('.entree')[indexInParent(el) - 1].querySelectorAll('h2 span span'), {
                            y: '100%'
                        }, {
                            duration: 0.8, y: '0%', delay: 0.3, stagger: 0.07, ease: 'easeSpe'
                        })

                        gsap.fromTo(carousel.querySelectorAll('.entree')[indexInParent(el) - 1].querySelector('p'), {
                            opacity: 0
                        }, {
                            duration: 0.4, opacity: 1, delay: 0.3, ease: 'easeSpe'
                        })

                        gsap.fromTo(carousel.querySelectorAll('.entree')[indexInParent(el)].querySelector('ul'), {
                            opacity: 0, y: 20
                        }, {
                            duration: 0.4, opacity: 1, y: 0, stagger: 0.07, delay: 0.9, ease: 'easeSpe'
                        })
                    }
                })

                gsap.to(el, {
                    y: '0%',
                    ease: "none",
                    scrollTrigger: {
                        trigger: carousel.querySelector('.innerCarou'),
                        start: 'top top-=' + incr + "px",
                        end: '+=' + window.innerHeight + "px",
                        scrub: true,
                    }
                })
                gsap.to(el.querySelector('.img'), {
                    y: '0%',
                    ease: "none",
                    scrollTrigger: {
                        trigger: carousel.querySelector('.innerCarou'),
                        start: 'top top-=' + incr + "px",
                        end: '+=' + window.innerHeight + "px",
                        scrub: true
                    }
                })
                gsap.to(el.querySelector('.img'), {
                    y: '0%',
                    ease: "none",
                    scrollTrigger: {
                        trigger: carousel.querySelector('.innerCarou'),
                        start: 'top top-=' + incr + "px",
                        end: '+=' + window.innerHeight + "px",
                        scrub: true
                    }
                })
                gsap.from(el.querySelector('.imgMove'), {
                    scale: '1.25',
                    ease: "none",
                    scrollTrigger: {
                        trigger: carousel.querySelector('.innerCarou'),
                        start: 'top top-=' + incr + "px",
                        end: '+=' + window.innerHeight * 3 + "px",
                        scrub: true
                    }
                })

                incr += window.innerHeight;
            });

            // cas premiere image
            gsap.from(carousel.querySelector('.img .imgMove'), {
                scale: '1.25',
                ease: "none",
                scrollTrigger: {
                    trigger: carousel.querySelector('.innerCarou'),
                    start: 'top bottom',
                    end: '+=' + window.innerHeight * 3 + "px",
                    scrub: true
                }
            });

        }, [carouselRef]);
    }
    // }

    return (
        <>
            <section ref={carouselRef} className="parentCarou mb-[12%] w-full overflow-hidden" id="manufacturing">
                <div className="pushCarousel pl-[6%] tablet:pt-[10%] tablet:pl-0 mobile:pl-0 mobile:pt-[15%] mobile:w-[90%] mobile:mx-auto overflow-hidden mobile:hidden">
                    <div className="flex tablet:flex-col-reverse justify-between innerCarou mobile:flex-col-reverse">

                        <div className="w-1/3 pt-[8vw] flex justify-between relative fadeUp tablet:w-[80%] tablet:ml-[10%] mobile:margin-0 mobile:w-full mobile:flex-wrap">
                            <div className="relative parentEntree">
                                <div className="entree current space-y-[2vw] mobile:space-y-[5vw] tablet:space-y-[3vw]">
                                    <h2 data-para-anim className="title-2 aeonik mobile:text-center ">
                                        Ushering in the Next Generation of Medical Technology
                                    </h2>
                                    <p data-para-anim className="content-p my-[4vw] mobile:text-center">
                                        AMS leverages strategic global partnerships to procure state-of-the-art manufacturing technology, ensuring uncompromising quality, innovation, and agility in our processes. Our adherence to LEAN principles and implementation of a robust quality management system guarantees compliance with the most stringent global regulatory standards.
                                    </p>
                                    <div className="mobile:w-full mobile:flex mobile:justify-center">

                                    <PrimaryButton btnText={'Manufacturing'} link={'/'} />
                                    </div>
                                </div>
                                <div className="entree space-y-[2vw] mobile:space-y-[5vw] tablet:space-y-[3vw]">
                                    <h2 data-para-anim className="title-2 aeonik">
                                        Building World Class Capability
                                    </h2>
                                    <p data-para-anim className="content-p my-[4vw]">
                                        Designed by renowned Spanish architect Ricardo Bofill, the AMS facility meets the Gold standard on Green building principles for sustainability and conforms to ISO 14001 safety and environmental specifications. Approx. 150,000 sq. ft. completed in Phase I and 180,000 sq.ft expansion in phase II.
                                    </p>
                                    <PrimaryButton btnText={'Manufacturing'} link={'/'} />
                                </div>
                                <div className="entree space-y-[2vw] mobile:space-y-[5vw] tablet:space-y-[3vw]">
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

                        <div className="imgs w-[60%] h-full relative fadeUp tablet:w-[80%] tablet:ml-[10%] tablet:h-[45vh] mobile:w-full overflow-hidden">
                            <div className="leCarou">
                                <div className="innerImg">
                                    <div className="img tablet:w-[90vw]">
                                        <video
                                            autoPlay
                                            muted
                                            loop
                                            playsInline
                                            poster="/assets/home/ams-manufactuing-facility-poster.webp"
                                            className="object-cover h-full w-full imgMove"
                                            
                                            alt="Service Image"
                                            loading="lazy"
                                            ref={manufacturingVideoRef}
                                        />
                                    </div>
                                </div>
                                <div className="innerImg">
                                    <div className="img">
                                        <Image
                                            className="object-cover imgMove"
                                            src="/assets/home/manufacturing-2.webp"
                                            alt="Service Image"
                                            loading="lazy"
                                            width={1090}
                                            height={1080}
                                        />
                                    </div>
                                </div>
                                <div className="innerImg">
                                    <div className="img">
                                        <Image
                                            loading="lazy"
                                            className="object-cover imgMove"
                                            src="/assets/home/manufacturing-3.webp"
                                            alt="Service Image"
                                            width={1090}
                                            height={1080}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="hidden mobile:block w-full px-[5vw] pb-[10vw]">
                    <div className="w-full flex flex-col gap-[20vw]">
                        <div className="w-full flex flex-col gap-[10vw] items-center">
                            <div className="w-[85vw] h-[120vw] rounded-[3vw] overflow-hidden">
                            <video
                                            autoPlay
                                            muted
                                            loop
                                            playsInline
                                            poster="/assets/home/ams-manufactuing-facility-poster.webp"
                                            className="object-cover h-full w-full imgMove"
                                            src="/assets/home/ams-manufacturing-video.mp4"
                                            alt="Service Image"
                                            loading="lazy"
                                        />
                            </div>
                            <h2 data-para-anim className="title-2 aeonik font-light text-center">Ushering in the Next Generation of Medical Technology
 
                            </h2>
                            <p data-para-anim className="content-p text-center">
                            AMS leverages strategic global partnerships to procure state-of-the-art manufacturing technology, ensuring uncompromising quality, innovation, and agility in our processes. Our adherence to LEAN principles and implementation of a robust quality management system guarantees compliance with the most stringent global regulatory standards.
                            </p>
                            <PrimaryButton btnText={"Manufacturing"} link={"#"} className={"fadeUp"}/>
                            
                        </div>
                        <div className="w-full flex flex-col gap-[7vw] items-center">
                            <div className="w-[85vw] h-[120vw] rounded-[3vw] overflow-hidden relative">
                            <Image
                                            
                                           
                                            className="object-cover h-full w-full"
                                            src="/assets/home/manufacturing-2.webp"
                                            alt="manufacturing-image-2"
                                            fill

                                        />
                            </div>
                            <h2 data-para-anim className="title-2 aeonik font-light text-center">Building World Class Capability
 
                            </h2>
                            <p data-para-anim className="content-p text-center">
                            Designed by renowned Spanish architect Ricardo Bofill, the AMS facility meets the Gold standard on Green building principles for sustainability and conforms to ISO 14001 safety and environmental specifications. Approx. 150,000 sq. ft. completed in Phase I and 180,000 sq.ft expansion in phase II.
                            </p>
                            <PrimaryButton btnText={"Manufacturing"} link={"#"} className={"fadeUp"}/>
                            
                        </div>
                        <div className="w-full flex flex-col gap-[7vw] items-center">
                            <div className="w-[85vw] h-[120vw] rounded-[3vw] overflow-hidden relative">
                            <Image
                                            
                                           
                                            className="object-cover h-full w-full"
                                            src="/assets/home/manufacturing-3.webp"
                                            alt="manufacturing-image-3"
                                            fill

                                        />
                            </div>
                            <h2 data-para-anim className="title-2 aeonik font-light text-center">Robust Manufacturing Processes
 
                            </h2>
                            <p data-para-anim className="content-p text-center">
                            The AMS plant design is based on LEAN concepts, Schedule M compliance, and Class C clean room principles. The Testing and Microbiological Laboratories are outfitted with best-in-class equipment. All under the supervision of experienced Manufacturing and Quality teams.
                            </p>
                            <PrimaryButton btnText={"Manufacturing"} link={"#"} className={"fadeUp"}/>
                            
                        </div>

                    </div>

                </div>
            </section>
        </>
    );
};

export default ManufacturingCarousel;
