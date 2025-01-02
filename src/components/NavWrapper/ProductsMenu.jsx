import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { NavButton, NavLink } from './NavLink';
import { ArrowLeft } from 'lucide-react';

export default function ProductsMenu({ onBack, onSelectMenu }) {
  const menuRef = useRef(null);

  useEffect(() => {
    const links = menuRef.current.querySelectorAll("li");
    gsap.fromTo(links, { yPercent: 100, autoAlpha: 0 }, { yPercent: 0, autoAlpha: 1, duration: 0.5, stagger: 0.05 });
  }, []);

  return (
    <div className="flex gap-5 items-start mobile:pt-[10vw]" ref={menuRef}>
      <button className="h-[2.5vw] w-[2.5vw] p-[0.5vw] tablet:w-8 tablet:h-8 tablet:p-1.5 mobile:h-8 mobile:w-8 mobile:p-1.5 flex items-center justify-center rounded-full border border-black/50 group hover:bg-black duration-300" onClick={onBack}>
        <ArrowLeft className='w-full h-full group-hover:text-white duration-300' />
      </button>
      <div>
        <div className='flex items-start gap-[3vw] pt-1 mobile:flex-col mobile:gap-[5vw]'>
          <ul className='space-y-[0.2vw] mobile:space-y-1 aeonik'>
            <li className='text-[1.3vw] tablet:text-[2.2vw] mobile:text-[5vw]'>Advanced Surgery</li>
            <li><NavButton className='' linkText="Wound Care" onClick={() => onSelectMenu('wound-care')} /></li>
            <li><NavButton className='' linkText="Endo Surgery" onClick={() => onSelectMenu('endo-surgery')} /></li>
            <li><NavButton className='' linkText="Hernia Solutions" onClick={() => onSelectMenu('hernia-solutions')} /></li>
          </ul>
          <ul className='space-y-[0.2vw] mobile:space-y-1 aeonik'>
            <li className='text-[1.3vw] tablet:text-[2.2vw] mobile:text-[5vw]'>Advanced Cardiovascular</li>
            <li><NavButton className='' linkText="Interventional Cardiology" onClick={() => onSelectMenu('interventional-cardiology')} /></li>
            <li><NavButton className='' linkText="Cardiac Surgery" onClick={() => onSelectMenu('cardiac-surgery')} /></li>
          </ul>
        </div>
        <NavLink className='!text-[1.2vw] tablet:!text-[2.2vw] font-normal !mt-[1vw] tablet:!mt-[2vw] mobile:!text-[5vw] mobile:!mt-[5vw]' href="/products/oem" linkText="OEM SOLUTIONS" />
      </div>
    </div>
  );
}
