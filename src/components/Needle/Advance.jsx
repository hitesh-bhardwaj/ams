
/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import PrimaryButton from "../Button/PrimaryButton";
import { paraAnim , imageAnim} from "../gsapAnimations";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(useGSAP,ScrollTrigger)

export default function Advance() {
    paraAnim()
    imageAnim()
    useGSAP(()=>{
        const tl = gsap.timeline({
            scrollTrigger:{
                trigger:".suture-container",
                scrub:true,
                start:"top bottom",
                end:"bottom 20%",
               
            }
        })
        tl.to(".suture-left",{
            yPercent:-20,
            xPercent:30,
            duration:5,
        })
        tl.to(".suture-right",{
            yPercent:0,
            xPercent:-70,
            duration:5,
            delay:-5
        })
        
    })
    return (
        <>
            <section className="pt-[0] py-[8%] mobile:pb-[10%] tablet:pb-[8%] overflow-x-hidden" id="facility">
                <div className="group suture-container ">
                <div className="container-lg virtual rounded-[3vw] relative flex items-center justify-between px-[6%] py-[8%] bg-white/50 glassmorphism border border-gray-200 group-hover:bg-white group-hover:shadow-xl duration-300 mobile:flex-col-reverse tablet:flex tablet:flex-col tablet:justify-between tablet:gap-[5vw]">
                    <div className="w-full flex flex-col items-center justify-between gap-[5vw]">
                        <h2 data-para-anim className="title-2 aeonik">
                            
                        Advanced Wound Closure
                            
                        </h2>
                       
                        <div className="w-full flex justify-center mobile:justify-center">
                        <PrimaryButton className={"fadeUp"} link={"/"} btnText={"See More"}/>
                        </div>
                    </div>
                    <div className="w-[30vw] h-[30vw] absolute top-[10%] right-[-30%] suture-right">
                        <Image src="/assets/needle/suture-left.webp" className="object-contain " fill alt="suture-left"/>

                    </div>
                    <div className="w-[50vw] h-[50vw] absolute top-0 left-[-35%] suture-left">
                        <Image src="/assets/needle/suture-right.webp" className="object-contain " fill alt="suture-right"/>

                    </div>
                    
                </div>

                </div>
            </section>
        </>
    )
}