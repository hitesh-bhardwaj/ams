import PrimaryButton from "../Button/PrimaryButton";
import { paraAnim} from "../gsapAnimations";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(useGSAP,ScrollTrigger)

export default function Impact() {
    paraAnim()
    useGSAP(()=>{
        const tl = gsap.timeline({
            scrollTrigger: {
              trigger: ".imageAnim",
              start: "top 70%",
              end:"bottom top",
            //markers:true,
              scrub:true
            },
    
          })
          tl.from(".imageAnim", {
            scale:1.2,
            delay:-1
    
          });
    })
    
    return (
        <>
            <section className="p-y-sm mt-[5%]" id="impact">
                <div className="container-lg relative px-[8%] h-full py-[8%] overflow-hidden rounded-[3vw]">
                    <video 
                        loading="lazy"
                        autoPlay 
                        loop
                        muted 
                        playsInline 
                        className="h-full w-full object-cover left-0 top-0 absolute imageAnim"
                        src="/assets/home/impact-video.mp4">
                    </video>
                    <div className="flex items-center">
                        <div className="w-1/2 relative z-10 space-y-[3.5vw]">
                            <h2  className="title-2 aeonik leading-[0] text-shadow">
                                <span data-para-anim className="text-white leading-[1.3]">
                                    Making an Impact:
                                </span>
                                <span data-para-anim className="text-white leading-[1.3]">
                                    Our Global Reach
                                </span>
                            </h2>
                            <p data-para-anim className="text-[1.15vw] font-light leading-[1.7] text-white text-shadow">
                                
                                    Our commitment to advancing healthcare globally is unwavering, and we are constantly pushing boundaries of MedTech, improving outcomes for people in every corner of the globe. With our geographical presence expanding over 180 countries, we have a unique opportunity to collaborate with partners around the world and leverage our collective expertise to develop and deliver transformative solutions that make a difference in patients’ lives.
                                
                            </p>
                            <PrimaryButton className={"secondary fadeUp"} link={"/"} btnText={"Know More"}/>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}