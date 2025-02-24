import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ArrowLeft } from "lucide-react";
import { NavLink } from "./NavLink";

export default function CardiacSurgeryMenu({ onBack }) {
  const menuRef = useRef(null);

  useEffect(() => {
    const links = menuRef.current.querySelectorAll("li");
    gsap.fromTo(
      links,
      { yPercent: 100, autoAlpha: 0 },
      { yPercent: 0, autoAlpha: 1, duration: 0.5, stagger: 0.05 }
    );
  }, []);

  return (
    <>
      <div className="mobile:pt-[12vw]" ref={menuRef}>
        <div className="flex gap-3 items-start">
          {/* <button className="h-[2.5vw] w-[2.5vw] p-[0.5vw] tablet:w-8 tablet:h-8 tablet:p-1.5 mobile:h-8 mobile:w-8 mobile:p-1.5 flex items-center justify-center rounded-full border border-black/50 group hover:bg-black duration-300" onClick={onBack}>
            <ArrowLeft className='w-full h-full group-hover:text-white duration-300' />
          </button> */}
        </div>
        <div className="flex items-start gap-[1vw] mobile:flex-col mobile:gap-[5vw] mobile:ml-[12vw] tablet:gap-[3vw]">
          <div className="w-[1px] h-[21vw] bg-black/20 mobile:w-[65vw] mobile:h-[1px]"></div>
          <ul className="space-y-[0.2vw] mobile:space-y-1">
            <li>
              <NavLink
                className=""
                href="/products/cardiac-surgery"
                linkText="Cardiac Sutures"
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
    </>
  );
}
