import Image from 'next/image'
import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Scrollbar } from "swiper/modules";

// import gsap from 'gsap'
// import { useGSAP } from '@gsap/react'
// import ScrollTrigger from 'gsap/dist/ScrollTrigger'
// gsap.registerPlugin(useGSAP, ScrollTrigger)

import 'swiper/css';
import 'swiper/css/scrollbar';
import 'swiper/css/free-mode';

export default function Offerings() {

    // useGSAP(() => {
    //     const tl = gsap.timeline({
    //         scrollTrigger: {
    //             trigger: ".offerings-container",
    //             start: "+=250 top",
    //             end: "=+2000 top",
    //             pin: true,
    //             scrub: 1,
    //         }
    //     })
    //     tl.to(".layout-container", {
    //         x: "-300vw",
    //         ease: "none",
    //     })
    // });

    return (
        <>
            <section id='offerings'>
                <div className='container-lg offerings-container pt-[12%]'>
                    <h2 className='title-2 font-light text-center aeonik mb-[6vw] fadeUp'>OEM Offerings</h2>
                    <Swiper
                        style={swiperStyle}
                        freeMode={true}
                        scrollbar={true}
                        slidesPerView={4}
                        navigation={false}
                        spaceBetween={40}
                        modules={[FreeMode, Scrollbar]}
                    >
                    {smallContent.map((item, index) => (
                        <SwiperSlide key={index} className='h-full fadeUp'>
                            <div className='rounded-[3vw] p-[1vw] bg-white h-full w-full'>
                                <h5 className='aeonik text-center font-light my-[1vw] text-[1.2vw]'>{item.title}</h5>
                                <div className='rounded-[2vw] overflow-hidden h-[19vw]'>
                                    <Image src={item.image} alt='suture-needle' className='object-cover h-full w-full' width={400} height={400} />
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                    </Swiper>
                    
                    {/* <div className='w-[390vw] h-full relative z-[4] fadeUp flex gap-[10vw] layout-container'> */}
                    {/* <div className='w-full h-full relative card-layout-1 '>

                            <div className='absolute z-[7]'>
                                <h3 data-para-anim className='aeonik text-[2.7vw] leading-[1.25] font-light'>Surgical Suture Needles</h3>
                                <p data-para-anim className='text-[1.8vw] font-light aeonik leading-[1.25]'>The Next Generation of Needle Technology</p>
                            </div>
                            <div className='w-full h-[28vw] relative '>
                                <h4 data-para-anim className='absolute aeonik text-[3vw] z-[5] font-light left-[-1%] top-[54%] -rotate-90'>Feature</h4>
                                <Image src="/assets/oem/oem-card-layout.webp" alt='oem-card-layout' className='object-contain relative z-[2]' fill />
                                <div className='absolute z-[5] left-[17%] top-[40%]'>
                                    <ul className="list-disc space-y-[0.5vw] text-[1.1vw] font-light">
                                        <li data-para-anim>Advanced US & German Technology</li>
                                        <li data-para-anim>Cutting-Edge Robotics and Automation</li>
                                        <li data-para-anim>Robust Capacity of 60 Million Needles Annually</li>
                                        <li data-para-anim>Precision Engineering & Quality Assurance</li>
                                        <li data-para-anim>Expedited Turnaround and Delivery</li>
                                        <li data-para-anim>60,000 sq. ft. Needle Production Facility</li>
                                        <li data-para-anim>Team with Over 2-3 Decades of Expertise</li>
                                    </ul>
                                </div>

                            </div>
                            <div className='w-[50vw] h-[25vw] absolute top-0 right-0 z-[8] overflow-hidden'>
                                <Image src="/assets/oem/suture-needle.webp" alt='suture-needle' className='object-cover' fill />

                            </div>
                        </div> */}
                    {/* <div className='w-full h-full relative card-layout-2'>

                            <div className='absolute z-[7]'>
                                <h3 data-para-anim className='aeonik text-[2.7vw] leading-[1.25] font-light'>Sternotomy Suture</h3>
                                <p data-para-anim className='text-[1.8vw] font-light aeonik leading-[1.25]'>The Next Generation of Needle Technology</p>
                            </div>
                            <div className='w-full h-[28vw] relative'>
                                <h4 data-para-anim className='absolute aeonik text-[3vw] z-[5] font-light left-[-1%] top-[54%] -rotate-90'>Feature</h4>
                                <Image src="/assets/oem/oem-card-layout.webp" alt='oem-card-layout' className='object-contain relative z-[2]' fill />
                                <div className='absolute z-[5] left-[17%] top-[40%]'>
                                    <ul className="list-disc space-y-[0.5vw] text-[1.1vw] font-light">
                                        <li data-para-anim>Advanced US & German Technology</li>
                                        <li data-para-anim>Cutting-Edge Robotics and Automation</li>
                                        <li data-para-anim>Robust Capacity of 60 Million Needles Annually</li>
                                        <li data-para-anim>Precision Engineering & Quality Assurance</li>
                                        <li data-para-anim>Expedited Turnaround and Delivery</li>
                                        <li data-para-anim>60,000 sq. ft. Needle Production Facility</li>
                                        <li data-para-anim>Team with Over 2-3 Decades of Expertise</li>
                                    </ul>
                                </div>

                            </div>
                            <div className='w-[50vw] h-[25vw] absolute top-0 right-[-10%] z-[8] overflow-hidden'>
                                <Image src="/assets/oem/layout-sternotomy.webp" alt='sternotomy' className='object-contain' fill />

                            </div>
                        </div> */}
                    {/* <div className='w-full h-full relative card-layout-3'>

                            <div className='absolute z-[7]'>
                                <h3 data-para-anim className='aeonik text-[2.7vw] leading-[1.25] font-light'>Hernia Solutions</h3>
                                <p data-para-anim className='text-[1.8vw] font-light aeonik leading-[1.25]'>The Next Generation of Needle Technology</p>
                            </div>
                            <div className='w-full h-[28vw] relative'>
                                <h4 data-para-anim className='absolute aeonik text-[3vw] z-[5] font-light left-[-1%] top-[54%] -rotate-90'>Feature</h4>
                                <Image src="/assets/oem/oem-card-layout.webp" alt='oem-card-layout' className='object-contain relative z-[2]' fill />
                                <div className='absolute z-[5] left-[17%] top-[40%]'>
                                    <ul className="list-disc space-y-[0.5vw] text-[1.1vw] font-light">
                                        <li data-para-anim>Advanced US & German Technology</li>
                                        <li data-para-anim>Cutting-Edge Robotics and Automation</li>
                                        <li data-para-anim>Robust Capacity of 60 Million Needles Annually</li>
                                        <li data-para-anim>Precision Engineering & Quality Assurance</li>
                                        <li data-para-anim>Expedited Turnaround and Delivery</li>
                                        <li data-para-anim>60,000 sq. ft. Needle Production Facility</li>
                                        <li data-para-anim>Team with Over 2-3 Decades of Expertise</li>
                                    </ul>
                                </div>

                            </div>
                            <div className='w-[50vw] h-[25vw] absolute top-0 right-0 z-[8] overflow-hidden'>
                                <Image src="/assets/oem/suture-needle.webp" alt='suture-needle' className='object-cover' fill />

                            </div>
                        </div> */}
                    {/* <div className='w-full h-full relative card-layout-4'>

                            <div className='absolute z-[7]'>
                                <h3 data-para-anim className='aeonik text-[2.7vw] leading-[1.25] font-light'>Stent Delivery Systems</h3>
                                <p data-para-anim className='text-[1.8vw] font-light aeonik leading-[1.25]'>The Next Generation of Needle Technology</p>
                            </div>
                            <div className='w-full h-[28vw] relative'>
                                <h4 data-para-anim className='absolute aeonik text-[3vw] z-[5] font-light left-[-1%] top-[54%] -rotate-90'>Feature</h4>
                                <Image src="/assets/oem/oem-card-layout.webp" alt='oem-card-layout' className='object-contain relative z-[2]' fill />
                                <div className='absolute z-[5] left-[17%] top-[40%]'>
                                    <ul className="list-disc space-y-[0.5vw] text-[1.1vw] font-light">
                                        <li data-para-anim>Advanced US & German Technology</li>
                                        <li data-para-anim>Cutting-Edge Robotics and Automation</li>
                                        <li data-para-anim>Robust Capacity of 60 Million Needles Annually</li>
                                        <li data-para-anim>Precision Engineering & Quality Assurance</li>
                                        <li data-para-anim>Expedited Turnaround and Delivery</li>
                                        <li data-para-anim>60,000 sq. ft. Needle Production Facility</li>
                                        <li data-para-anim>Team with Over 2-3 Decades of Expertise</li>
                                    </ul>
                                </div>
                            </div>
                            <div className='w-[50vw] h-[25vw] absolute top-0 right-0 z-[8] overflow-hidden'>
                                <Image src="/assets/oem/layout-stent.webp" alt='stent' className='object-contain' fill />
                            </div>
                        </div> */}
                    {/* </div> */}

                </div>

            </section>

        </>
    )
}

const smallContent = [
    {
        title: 'Surgical Suture Needles',
        image: '/assets/oem/surgical-needle.png',
    },
    {
        title: 'Sternotomy Suture',
        image: '/assets/oem/sternotomy-suture.png',
    },
    {
        title: 'Hernia Solutions',
        image: '/assets/oem/hernia-solutions.png',
    },
    {
        title: 'Stent Delivery Systems',
        image: '/assets/oem/stent-delivery.png',
    },
    {
        title: 'Knotless Tissue Control Device',
        image: '/assets/oem/knotless-tissue.png',
    }
]

const swiperStyle = {
    paddingBottom: "5vw"
}