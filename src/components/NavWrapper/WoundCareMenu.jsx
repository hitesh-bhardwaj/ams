import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ArrowLeft } from "lucide-react";
import { NavLink } from "./NavLink";

export default function WoundCareMenu({ onBack }) {
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
    <>
      <div
        className="flex gap-5 items-start relative mobile:pt-[5vw] w-fit"
        ref={menuRef}
      >
        <div className="space-y-[1vw] mobile:ml-[12vw] mobile:mt-[7vw] w-full flex  justify-end">
          <div className="flex items-start gap-[1vw] mobile:flex-col mobile:gap-[5vw] tablet:gap-[3vw]">
            <div className="w-[1px] h-[21vw] bg-black/20 mobile:w-[65vw] mobile:h-[1px]"></div>
            <ul className="space-y-[0.2vw] w-[15vw] tablet:w-[28vw] mobile:w-full mobile:space-y-1">
              {mobileWidth && (
                <li className="mb-[4vw]">
                  <NavLink href="/products/wound-care" linkText="Wound Care" className="font-medium"/>
                </li>
              )}
              <li>
                {" "}
                <a
                  href="/products/wound-care#suture-carousel-first"
                  className={`text-[1.3vw] fade-in-0 leading-tight text-body tablet:text-[2.3vw] mobile:text-[5vw] overflow-hidden block relative group aeonik font-light `}
                >
                  <span
                    data-attr="Absorbable Sutures"
                    className="inline-block transition-transform duration-500 ease-out after:absolute after:left-0 after:-bottom-0 after:translate-y-full after:content-[attr(data-attr)] group-hover:-translate-y-full"
                  >
                    Absorbable Sutures
                  </span>
                </a>
              </li>
              <li>
                {" "}
                <a
                  href="/products/wound-care#suture-carousel-second"
                  className={`text-[1.3vw] fade-in-0 leading-tight text-body tablet:text-[2.3vw] mobile:text-[5vw] overflow-hidden block relative group aeonik font-light `}
                >
                  <span
                    data-attr="Non Absorbable Sutures"
                    className="inline-block transition-transform duration-500 ease-out after:absolute after:left-0 after:-bottom-0 after:translate-y-full after:content-[attr(data-attr)] group-hover:-translate-y-full"
                  >
                    Non Absorbable Sutures
                  </span>
                </a>
              </li>
              <li>
                <NavLink
                  className=""
                  href="/wound-care/advagrip-knotless-barbed-suture"
                  linkText="Knotless Sutures"
                />
              </li>
              <li>
                <NavLink
                  className=""
                  href="/haemostats-gelatin-sponge"
                  linkText="Haemostats"
                />
              </li>
              <li>
                <NavLink
                  className=""
                  href="/wound-care/surgical-kits"
                  linkText="Surgical Kits"
                />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
