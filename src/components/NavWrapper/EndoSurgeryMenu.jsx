import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { NavLink } from "./NavLink";
import { ArrowLeft } from "lucide-react";

export default function EndoSurgeryMenu({ onBack }) {
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
    <div
      className="flex gap-5 items-start relative mobile:pt-[12vw]"
      ref={menuRef}
    >
      {/* <div className='absolute left-0 mobile:top-[20vw] mobile:left-[18%] tablet:left-[19%]'>
        <NavLink href="/products/endo-surgery" linkText="Endo Surgery" />
      </div> */}
      {/* <button className="absolute mobile:top-[20vw] h-[2.5vw] w-[2.5vw] p-[0.5vw] tablet:w-8 tablet:h-8 tablet:p-1.5 mobile:h-8 mobile:w-8 mobile:p-1.5 flex items-center justify-center rounded-full border border-black/50 group hover:bg-black duration-300" onClick={onBack}>
        <ArrowLeft className='w-full h-full group-hover:text-white duration-300' />
      </button> */}
      <div className="flex items-start gap-[1vw] mobile:flex-col mobile:gap-[5vw] mobile:ml-[12vw] tablet:gap-[3vw] ">
        <div className="w-[1px] h-[21vw] tablet:h-[27vw] bg-black/20 mobile:w-[65vw] mobile:h-[1px]"></div>
        <ul className="space-y-[0.2vw] mobile:space-y-1">
          {mobileWidth && (
            <li className="mb-[4vw]">
              <NavLink href="/products/endo-surgery" linkText="Endo Surgery" className="font-medium"/>
            </li>
          )}
          <li>
            <NavLink
              href="/endo-surgery/advastap-hemorrhoid-stapler"
              linkText="Hemorrhoid Stapler"
            />
          </li>
          <li>
            <NavLink
              href="/endo-surgery/advastap-linear-cutter-stapler"
              linkText="Linear Cutter"
            />
          </li>
          <li>
            <NavLink
              href="/endo-surgery/advastap-circular-stapler"
              linkText="Circular Stapler"
            />
          </li>
          <li>
            <NavLink
              href="/endo-surgery/advastap-skin-stapler"
              linkText="Skin Stapler"
            />
          </li>
          <li>
            <NavLink
              href="/endo-surgery/advastap-endoscopic-linear-cutter-stapler"
              linkText="Endoscopic Linear Cutter"
            />
          </li>
          <li>
            <NavLink
              href="/endo-surgery/advastap-powered-linear-cutter-stapler"
              linkText="Powered Linear Cutter"
            />
          </li>
          <li>
            <NavLink
              href="/endo-surgery/advastap-endoscopic-reloads"
              linkText="Endoscopic Reloads"
            />
          </li>
          <li>
            <NavLink
              className=""
              href="/ligation-solutions/advaclip-ligation-clips"
              linkText="Ligation Solutions"
            />
          </li>
        </ul>
      </div>
    </div>
  );
}
