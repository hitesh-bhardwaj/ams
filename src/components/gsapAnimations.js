/* eslint-disable react-hooks/rules-of-hooks */
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { CustomEase } from "gsap/dist/CustomEase";
import { SplitInLine } from "./splitTextUtils";

gsap.registerPlugin(ScrollTrigger, CustomEase, useGSAP);

const primaryEase = CustomEase.create("cus-1", "0.62, 0.05, 0.01, 0.99");

export function paraAnim() {
  useGSAP(() => {
    const paraAnimations = document.querySelectorAll("[data-para-anim]");
    paraAnimations.forEach((paraAnimation) => {
      SplitInLine(paraAnimation);
      let paraLine = paraAnimation.querySelectorAll(".line-internal");
      gsap.from(paraLine, {
        scrollTrigger: {
          trigger: paraAnimation,
          start: "top 90%",
        },
        duration: 1.2,
        yPercent: 100,
        stagger: 0.07,
        ease: primaryEase,
      });
    });
  });
}
export function paraAnimation(){
  if(globalThis.innerWidth<1024){

    useGSAP(() => {
      const paraAnimations = document.querySelectorAll(".para-animation");
      paraAnimations.forEach((paraAnimation) => {
        SplitInLine(paraAnimation);
        let paraLine = paraAnimation.querySelectorAll(".line-internal");
        gsap.from(paraLine, {
          scrollTrigger: {
            trigger: paraAnimation,
            start: "top 90%",
          },
          duration: 1.2,
          yPercent: 100,
          stagger: 0.07,
          ease: primaryEase,
        });
      });
    });
  }

}

export function imageAnim() {
  if(globalThis.innerWidth<=1023){
    useGSAP(() => {
      const images = document.querySelectorAll(".imageanim");
      images.forEach((img) => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: img,
            start: "top bottom",
            end: "bottom top",
            
            scrub: true,
          },
        });
        tl.to(img, {
          yPercent: 0,
          delay: -1,
        });
      });
    });

  }
  else{

    useGSAP(() => {
      const images = document.querySelectorAll(".imageanim");
      images.forEach((img) => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: img,
            start: "top 70%",
            end: "+=2000 top",
  
            scrub: true,
          },
        });
        tl.to(img, {
          scale: 1.1,
          delay: -1,
        });
        tl.to(img, {
          yPercent: 30,
          delay: -1,
        });
      });
    });
  }
}

export function imgAnim() {
  useGSAP(() => {
    const images = document.querySelectorAll(".imageAnim");
    images.forEach((img) => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: img,
          start: "top 70%",
          end: "+=2000 top",
          // markers:true,

          scrub: true,
        },
      });
      tl.from(img, {
        scale: 1.2,
        delay: -1,
      });
    });
  });
}
export function fadeIn() {
  useGSAP(() => {
    const content = document.querySelectorAll(".fadein");
    content.forEach((content) => {
      gsap.from(content, {
        scrollTrigger: {
          trigger: content,
          start: "top 90%",
          end: "bottom 60%",
        },
        opacity: 0,
        ease: "power3.Out",
        duration: 1,
        stagger: 0.5,
      });
    });
  });
}
export function fadeUp() {
  if(globalThis.innerWidth>0){
    useGSAP(() => {
      const content = document.querySelectorAll(".fadeup");
      content.forEach((content) => {
        gsap.from(content, {
          scrollTrigger: {
            trigger: content,
            start: "top bottom",
            end: "bottom 60%",
          },
          opacity: 0,
         
          y: 50,
          ease: "power3.Out",
          duration: 0.7,
          stagger: 0.5,
        });
      });
    });

  }
}

export function paraAnimWordpress() {
  useGSAP(() => {
    const paraAnimations = document.querySelectorAll(".para-anim");
    paraAnimations.forEach((paraAnimation) => {
      SplitInLine(paraAnimation);
      let paraLine = paraAnimation.querySelectorAll(".line-internal");
      gsap.from(paraLine, {
        scrollTrigger: {
          trigger: paraAnimation,
          start: "top 90%",
        },
        duration: 1.47,
        yPercent: 100,
        stagger: 0.07,
        ease: primaryEase,
      });
    });
  });
}
