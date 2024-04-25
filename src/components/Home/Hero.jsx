import Image from "next/image";
import PrimaryButton from "../Button/PrimaryButton";
import gsap from "gsap";
import SplitType from "split-type";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

export default function Hero() {

      useGSAP(()=>{
        const text = new SplitType('.hero-para', {types: 'words'});
        const head = new SplitType('.hero-anim', {types: 'words'});
        const heroPara = document.querySelectorAll('.hero-para span .word');
        const heroAnim = document.querySelectorAll(".hero-anim span .word");
        const headerAnim = document.querySelectorAll(".header-anim");

        const tl = gsap.timeline();
        tl.from(headerAnim, 1,{
          opacity: 0,
          stagger: 0.05,
          ease: 'power2.out',
      }, "+=1")
        tl.from(heroAnim, 0.8,{
            y: '100%',
            stagger: 0.1,
            ease: 'power2.out',
        }, "-=0.8")
        .from(heroPara, 0.4,{
            y: '100%',
            opacity: 0,
            ease: "Power2.out",
            stagger: 0.01,
        }, '-=0.8')
        .from('.hero .btn', 0.8, {
            y: 30,
            opacity: 0,
            ease: "power2.out",
        }, '-=0.8')
        .from('.hero-img', 2,{
            y: 50,
            opacity: 0,
            ease: "expo.out",
        }, '-=1.2');
      });

    return (
        <section className="hero main-gradient">
          <div className="hero-container relative">
            <div className="flex h-dvh w-full justify-start items-center">
              <div className="w-1/2">
                <h1 className="title-1 aeonik drop-shadow-md hero-anim leading-[1]">
                  <span className="leading-[1.2] overflow-hidden">
                    Advancing the
                  </span>
                  <br />
                  <span className="leading-[1.2] overflow-hidden">
                     way we care
                  </span>
                </h1>
                <p className="font-light max-w-[30vw] text-[1.25vw] mt-[4vw] mb-[4vw] hero-para">
                  <span>
                    AMS is dedicated to <strong>advancing</strong> the spectrum of healthcare by providing meaningful <strong>MedTech solutions</strong> for healthcare professionals, improving lives for <strong>patients</strong> around the <strong>world.</strong>
                  </span>
                </p>
                <PrimaryButton btnText={'Discover'} link={'/'}/>
              </div>

              <div className="absolute w-[43%] right-0 bottom-0">
                <Image
                  className="hero-img"
                  src="/assets/home/hero-image.png"
                  alt="Hero Image"
                  width= {1000}
                  height= {1000}
                />
              </div>
              
            </div>
          </div>
        </section>
    )
}