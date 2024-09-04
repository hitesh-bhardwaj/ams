import Image from "next/image";
import Link from "next/link";

import { gsap } from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useGSAP } from "@gsap/react";

// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger, useGSAP);

const ProductCard = ({ img, heading, rotate }) => {
  return (
    <div className={`${rotate}`}>
      <Link href={"#"}>
        <div
          className={`h-[30vw] w-[26vw] bg-white rounded-[30px] flex flex-col-reverse items-center justify-between single drop-shadow-sm shadow-sm relative border border-black`}
        >
          <div className="h-[25vw] w-[30vw] absolute top-[-7vw]">
            <Image fill src={img} alt={heading} className="object-contain" />
          </div>
          <div className="h-[50%] w-[100%] flex flex-col items-center justify-center">
            <h2 className="text-center font-extralight text-[2.1vw]">
              {heading}
            </h2>
            <button className="text-[#143CA3] text-[1.2vw] font-light flex items-center justify-center gap-[0.5vw] mt-[1vw]">
              See more
              {/* SVG and styling code */}
            </button>
          </div>
        </div>
      </Link>
    </div>
  );
};

const Product = () => {
  useGSAP(() => {
    const tl = gsap.timeline({
      defaults: { ease: "none" },
      scrollTrigger: {
        trigger: ".product",
        pin: true,
        start: "top top",
        end: "+=2000 top",
        scrub: true,
      },
    });

    tl.to(".card1", { rotateZ: -12, yPercent: 14, xPercent: -115, duration: 5 })
      .to(
        ".card2",
        { rotateZ: 0, yPercent: -7, xPercent: -116, duration: 5 },
        "-=5"
      )
      .to(
        ".card3",
        { rotateZ: 12, yPercent: -28, xPercent: -110, duration: 5 },
        "-=5"
      )
      .to(
        ".card4",
        { rotateZ: 26, yPercent: -50, xPercent: -100, duration: 5 },
        "-=5"
      )
      .to(
        ".card5",
        { rotateZ: 42, yPercent: 52, xPercent: -135, duration: 5 },
        "-=5"
      )
      .to(".card1", { rotateZ: -24, yPercent: 42, xPercent: -225, duration: 5 })
      .to(
        ".card2",
        { rotateZ: -12, yPercent: 0, xPercent: -232, duration: 5 },
        "-=5"
      )
      .to(
        ".card3",
        { rotateZ: 0, yPercent: -42, xPercent: -227, duration: 5 },
        "-=5"
      )
      .to(
        ".card4",
        { rotateZ: 12, yPercent: -86, xPercent: -212, duration: 5 },
        "-=5"
      )
      .to(
        ".card5",
        { rotateZ: 26, yPercent: -8, xPercent: -235, duration: 5 },
        "-=5"
      )
      .to(".card1", { rotateZ: -32, yPercent: 80, xPercent: -320, duration: 5 })
      .to(
        ".card2",
        { rotateZ: -24, yPercent: 28, xPercent: -340, duration: 5 },
        "-=5"
      )
      .to(
        ".card3",
        { rotateZ: -12, yPercent: -35, xPercent: -340, duration: 5 },
        "-=5"
      )
      .to(
        ".card4",
        { rotateZ: 0, yPercent: -98, xPercent: -325, duration: 5 },
        "-=5"
      )
      .to(
        ".card5",
        { rotateZ: 14, yPercent: -40, xPercent: -343, duration: 5 },
        "-=5"
      )
      .to(".card1", { rotateZ: -32, yPercent: 82, xPercent: -320, duration: 5 })
      .to(
        ".card2",
        { rotateZ: -26, yPercent: 66, xPercent: -445, duration: 5 },
        "-=5"
      )
      .to(
        ".card3",
        { rotateZ: -22, yPercent: -4, xPercent: -450, duration: 5 },
        "-=5"
      )
      .to(
        ".card4",
        { rotateZ: -12, yPercent: -86, xPercent: -441, duration: 5 },
        "-=5"
      )
      .to(
        ".card5",
        { rotateZ: 0, yPercent: -51, xPercent: -462, duration: 5 },
        "-=5"
      )
    // Add additional animations for smooth curved path
  }, []);

  return (
    <section id="products" className="product">
      <div className="w-full h-screen flex flex-col items-center mb-[15%]">
        <div className="product-title">
          <h2 data-para-anim className="title-2 aeonik">
            <span>Our Advanced Endo Surgery Product Line</span>
          </h2>
        </div>

        <div className="h-full flex items-center justify-between gap-[4vw] translate-x-[41%] card-section product">
          <ProductCard
            img={"/assets/endo/Product1.png"}
            heading={"Powered Linear Cutter III"}
            rotate={"rotate-[] card1"}
          />
          <ProductCard
            img={"/assets/endo/Product2.png"}
            heading={"Linear Cutter III"}
            rotate={"rotate-[12deg] translate-y-[10%] card2"}
          />
          <ProductCard
            img={"/assets/endo/Product3.png"}
            heading={"Hemorrhoid Stapler III"}
            rotate={"rotate-[24deg] translate-y-[42%] translate-x-[-5%] card3"}
          />
          <ProductCard
            img={"/assets/endo/Product4.png"}
            heading={"Circular Stapler III"}
            rotate={"rotate-[36deg] translate-y-[94%] translate-x-[-20%] card4"}
          />
          <ProductCard
            img={"/assets/endo/Product5.png"}
            heading={"Endo Linear Cutter III"}
            rotate={"rotate-[48deg] translate-y-[48%] card5"}
          />
        </div>

        <div className="w-full product-base-text">
          <p
            data-para-anim
            className="aeonik font-light uppercase tracking-widest text-[2.2vw] text-center"
          >
            advamesh range
          </p>
        </div>
      </div>
    </section>
  );
};

export default Product;
