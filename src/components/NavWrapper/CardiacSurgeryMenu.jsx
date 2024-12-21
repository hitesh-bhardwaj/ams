import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ArrowLeft } from 'lucide-react';
import { NavLink } from './NavLink';

export default function WoundCareMenu({ onBack }) {
  const menuRef = useRef(null);

  useEffect(() => {
    const links = menuRef.current.querySelectorAll("li");
    gsap.fromTo(links, { yPercent: 100, autoAlpha: 0 }, { yPercent: 0, autoAlpha: 1, duration: 0.5, stagger: 0.05 });
  }, []);

  return (
    <>
      <div className="flex gap-5 items-start" ref={menuRef}>
        <button className="h-[2vw] w-[2vw] p-[0.5vw] tablet:w-8 tablet:h-8 tablet:p-1.5 mobile:h-8 mobile:w-8 mobile:p-1.5 flex items-center justify-center rounded-full border border-black/50 group hover:bg-black duration-300" onClick={onBack}>
          <ArrowLeft className='w-full h-full group-hover:text-white duration-300' />
        </button>
        <div className='flex items-start gap-[3vw] pt-1 mobile:flex-col mobile:gap-[5vw]'>
          <ul className='space-y-[0.2vw] mobile:space-y-1'>
            <li className='uppercase font-normal text-[1.3vw] tablet:text-[2.2vw] mobile:text-[5vw]'>Cardiac Sutures</li>
            <li><NavLink href="/advabond-cv" linkText="Advabond" /></li>
            <li><NavLink href="/advalene-cv" linkText="Advalene" /></li>
            <li><NavLink href="/advasteel-cv" linkText="Advasteel" /></li>
            <li><NavLink href="/advapacer-and-wax" linkText="Advawax And AdvaPacer" /></li>
            <li><NavLink href="/bondtape" linkText="Umbilical Cotton Tape" /></li>
          </ul>
          <ul className='space-y-[0.2vw] mobile:space-y-1'>
            <li className='uppercase font-normal text-[1.3vw] tablet:text-[2.2vw] mobile:text-[5vw]'>Ligation Solutions</li>
            <li><NavLink href="/advaclip" linkText="Advaclip" /></li>
          </ul>
        </div>
      </div>
    </>
  );
}