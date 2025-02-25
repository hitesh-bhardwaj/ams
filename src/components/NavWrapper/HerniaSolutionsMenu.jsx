import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { NavLink } from "./NavLink";
import { ArrowLeft } from "lucide-react";

export default function HerniaSolutionsMenu({ onBack }) {
  const menuRef = useRef(null);
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 0
  );
  const [mobileWidth, setMobileWidth] = useState(false);
  useEffect(() => {
    const links = menuRef.current.querySelectorAll("li");
    gsap.fromTo(
      links,
      { yPercent: 100, autoAlpha: 0 },
      { yPercent: 0, autoAlpha: 1, duration: 0.5, stagger: 0.05 }
    );
  }, [mobileWidth]);
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    if (windowWidth > 541) {
      setMobileWidth(false);
    } else {
      setMobileWidth(true);
    }
    // Attach event listener
    window.addEventListener("resize", handleResize);

    // Initial set on mount
    handleResize();

    // Cleanup listener on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, [windowWidth]);

  return (
    <div className="flex gap-5 items-start mobile:pt-[12vw]" ref={menuRef}>
      {/* <button className="h-[2.5vw] w-[2.5vw] p-[0.5vw] tablet:w-8 tablet:h-8 tablet:p-1.5 mobile:h-8 mobile:w-8 mobile:p-1.5 flex items-center justify-center rounded-full border border-black/50 group hover:bg-black duration-300" onClick={onBack}>
        <ArrowLeft className='w-full h-full group-hover:text-white duration-300' />
      </button> */}
      <div className="flex items-start gap-[1vw] tablet:gap-[3vw] mobile:flex-col mobile:ml-[12vw] mobile:gap-[7vw]">
        <div className="w-[1px] h-[21vw] bg-black/20 mobile:w-[65vw] mobile:h-[1px]"></div>
        <ul className="space-y-[0.2vw] mobile:space-y-1">
          {mobileWidth && (
            <li className="mb-[4vw]">
              <NavLink
              className="font-medium"
                href="/products/hernia-solutions"
                linkText="Hernia Solutions"
              />
            </li>
          )}
          <li>
            <a
              href="/hernia-solutions/advamesh-hernia-mesh#polypropylene-mesh"
              className={`text-[1.3vw] fade-in-0 leading-tight text-body tablet:text-[2.3vw] mobile:text-[5vw] overflow-hidden block relative group aeonik font-light `}
            >
              <span
                data-attr="Polypropylene"
                className="inline-block transition-transform duration-500 ease-out after:absolute after:left-0 after:-bottom-0 after:translate-y-full after:content-[attr(data-attr)] group-hover:-translate-y-full"
              >
                Polypropylene
              </span>
            </a>
          </li>
          <li>
            <a
              href="/hernia-solutions/advamesh-hernia-mesh#medium-weight-mesh"
              className={`text-[1.3vw] fade-in-0 leading-tight text-body tablet:text-[2.3vw] mobile:text-[5vw] overflow-hidden block relative group aeonik font-light `}
            >
              <span
                data-attr="Medium Weight"
                className="inline-block transition-transform duration-500 ease-out after:absolute after:left-0 after:-bottom-0 after:translate-y-full after:content-[attr(data-attr)] group-hover:-translate-y-full"
              >
                Medium Weight
              </span>
            </a>
          </li>
          <li>
            <a
              href="/hernia-solutions/advamesh-hernia-mesh#macroporous-mesh"
              className={`text-[1.3vw] fade-in-0 leading-tight text-body tablet:text-[2.3vw] mobile:text-[5vw] overflow-hidden block relative group aeonik font-light `}
            >
              <span
                data-attr="Macroporous"
                className="inline-block transition-transform duration-500 ease-out after:absolute after:left-0 after:-bottom-0 after:translate-y-full after:content-[attr(data-attr)] group-hover:-translate-y-full"
              >
                Macroporous
              </span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
