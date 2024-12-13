/* eslint-disable react-hooks/rules-of-hooks */
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { CustomEase } from "gsap/dist/CustomEase";
import { SplitInLine, SplitInWord } from "./splitTextUtils";
import { useEffect } from "react";

gsap.registerPlugin(ScrollTrigger, CustomEase);

const primaryEase = CustomEase.create("cus-1", "0.62, 0.05, 0.01, 0.99");

export function paraAnim() {
  useEffect(() => {
    const ctx = gsap.context(() => {
      const paraAnimations = document.querySelectorAll("[data-para-anim]");
      paraAnimations.forEach((paraAnimation) => {
        SplitInWord(paraAnimation);
        const paraLine = paraAnimation.querySelectorAll(".word");
        gsap.from(paraLine, {
          scrollTrigger: {
            trigger: paraAnimation,
            start: "top 80%",
          },
          opacity: 0,
          yPercent: 100,
          duration: 1,
          stagger: 0.02,
        });
      });
    });
    return () => ctx.revert();
  }, []);
}

export function titleAnim() {
  useEffect(() => {
    const ctx = gsap.context(() => {
      const paraAnimations = document.querySelectorAll("[data-para-anim]");
      paraAnimations.forEach((paraAnimation) => {
        SplitInLine(paraAnimation);
        const paraLine = paraAnimation.querySelectorAll(".word");
        gsap.from(paraLine, {
          scrollTrigger: {
            trigger: paraAnimation,
            start: "top 80%",
          },
         
          duration: 0.8,
        yPercent: 100,
        stagger: 0.05,
        ease: "power3.out", // Assuming `primaryEase` is `power3.Out`
        });
      });
    });
    return () => ctx.revert();
  }, []);
}

// export function // imageAnim() {
//   useEffect(() => {
//     const ctx = gsap.context(() => {
//       const images = document.querySelectorAll(".imageanim");
//       images.forEach((img) => {
//         const tl = gsap.timeline({
//           scrollTrigger: {
//             trigger: img,
//             start: globalThis.innerWidth <= 541 ? "30% bottom" : "top 70%",
//             end: globalThis.innerWidth <= 1023 ? "bottom top" : "+=2000 top",
//             scrub: true,
//             // markers:true
//           },
//         });
//         if (globalThis.innerWidth <= 541) {
//           tl.to(img, {
//             yPercent: 40,
//             scale:1.2,
//             delay: 0,
//           });
//         } else if(globalThis.innerWidth<=1024){
//           tl.to(img, {
//             scale: 1.2,
//             delay: 0,
//           }).to(img, {
//             yPercent: 20,
//             delay: -0.5,
//           });

//         } 
          
          
//           else{
//           tl.to(img, {
//             scale: 1.1,
//             delay: -1,
//           }).to(img, {
//             yPercent: 30,
//             delay: -1,
//           });
//         }
//       });
//     });
//     return () => ctx.revert();
//   }, []);
// }
export function genImageAnim() {
  useEffect(() => {
    if(globalThis.innerWidth>542){

      const ctx = gsap.context(() => {
        const images = document.querySelectorAll(".genimageanim");
        images.forEach((img) => {
          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: img,
              start: globalThis.innerWidth <= 541 ? "30% bottom" : "top 70%",
              end: globalThis.innerWidth <= 1023 ? "bottom top" : "+=2000 top",
              scrub: true,
              // markers:true
            },
          });
          if (globalThis.innerWidth <= 541) {
            tl.to(img, {
              yPercent: 40,
              scale:1.2,
              delay: 0,
            });
          } else if(globalThis.innerWidth<=1024){
            tl.to(img, {
              scale: 1.2,
              delay: 0,
            }).to(img, {
              yPercent: 20,
              delay: -0.5,
            });
  
          } 
            
            
            else{
            tl.to(img, {
              scale: 1.1,
              delay: -1,
            }).to(img, {
              yPercent: 30,
              delay: -1,
            });
          }
        });
      });
      return () => ctx.revert();
    }
  }, []);
}


export function imgAnim() {
  useEffect(() => {
    const ctx = gsap.context(() => {
      const images = document.querySelectorAll(".imageAnim");
      images.forEach((img) => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: img,
            start: "top 70%",
            end: "+=2000 top",
            scrub: true,
          },
        });
        tl.from(img, {
          scale: 1.2,
          delay: -1,
        });
      });
    });
    return () => ctx.revert();
  }, []);
}

export function fadeIn() {
  useEffect(() => {
    const ctx = gsap.context(() => {
      const content = document.querySelectorAll(".fadein");
      content.forEach((content) => {
        gsap.from(content, {
          scrollTrigger: {
            trigger: content,
            start: "top 90%",
            end: "bottom 60%",
          },
          opacity: 0,
          ease: primaryEase,
          duration: 1,
          stagger: 0.5,
        });
      });
    });
    return () => ctx.revert();
  }, []);
}

export function fadeUp() {
  useEffect(() => {
    if (globalThis.innerWidth > 0) {
      const ctx = gsap.context(() => {
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
            ease: primaryEase,
            duration: 0.7,
            stagger: 0.5,
          });
        });
      });
      return () => ctx.revert();
    }
  }, []);
}
export function fadeup(){
  useEffect(() => {
    const ctx = gsap.context(() => {
      const fadeUps = document.querySelectorAll('.fadeUp');
      fadeUps.forEach((fadeUp) => {
        gsap.fromTo(
          fadeUp,
          {
            opacity: 0,
            y: 40,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            delay: 0.3,
            ease: 'Power3.out',
            scrollTrigger: {
              trigger: fadeUp,
              start: 'top 85%',
            },
          }
        );
      });
    });
    return () => ctx.revert();
  });
}

export function paraAnimWordpress() {
  useEffect(() => {
    const ctx = gsap.context(() => {
      const paraAnimations = document.querySelectorAll(".para-anim");
      paraAnimations.forEach((paraAnimation) => {
        SplitInLine(paraAnimation); // Implement or import your SplitInLine function
        const paraLine = paraAnimation.querySelectorAll(".line-internal");
        
        gsap.from(paraLine, {
          scrollTrigger: {
            trigger: paraAnimation,
            start: "top 90%",
          },
          duration: 1.47,
          yPercent: 100,
          stagger: 0.07,
          ease: "power3.Out", // Assuming `primaryEase` is "power3.Out"
        });
      });
    });

    return () => ctx.revert(); // Clean up animations on component unmount
  }, []);
}
export function lineAnim() {
  if (globalThis.innerWidth <= 1023 && globalThis.innerWidth > 541) {
    useEffect(() => {
      const ctx = gsap.context(()=>{
        const lineDraws = document.querySelectorAll(".lineDraw");
        lineDraws.forEach((lineDraw) => {
          gsap.from(lineDraw, {
            scrollTrigger: {
              trigger: lineDraw,
              start: "top 80%",
              
            },
            scaleX: 0,
            transformOrigin: "left",
            duration: 1,
            yPercent: 100,
            stagger: 0.07,
            ease: "power3.out",
          });
        });
      })
      return()=>ctx.revert()
    },[]);
  } else {
    useEffect(() => {
      const ctx = gsap.context(()=>{
        const lineDraws = document.querySelectorAll(".lineDraw");
        lineDraws.forEach((lineDraw) => {
          gsap.from(lineDraw, {
            scrollTrigger: {
              trigger: lineDraw,
              start: "top 95%",
              // markers:true
            
            },
            scaleX: 0,
            transformOrigin: "left",
            duration: 1.47,
            
            stagger: 0.07,
            ease: "power3.out",
          });
        });
      })
      return()=>ctx.revert()
    },[]);
  }
}