import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { NavLink } from './NavLink';

export default function CardiacSurgeryMenu({ onBack }) {
  const menuRef = useRef(null);

  useEffect(() => {
    const links = menuRef.current.querySelectorAll("li");
    gsap.fromTo(links, { yPercent: 100, autoAlpha: 0 }, { yPercent: 0, autoAlpha: 1, duration: 0.5, stagger: 0.05 });
  }, []);

  return (
    <div className="submenu" ref={menuRef}>
      <div className="submenu-header">
        <button className="back-button" onClick={onBack}>Back</button>
        <h2>CARDIAC SUTURES</h2>
      </div>
      <ul> 
        <li><NavLink href="/advabond-cv" linkText="Advabond" /></li>
        <li><NavLink href="/advalene-cv" linkText="Advalene" /></li>
        <li><NavLink href="/advasteel-cv" linkText="Advasteel" /></li>
        <li><NavLink href="/advapacer-and-wax" linkText="Advawax And AdvaPacer" /></li>
        <li><NavLink href="/advabond" linkText="Umbilical Cotton Tape" /></li>
      </ul>
      <h2>LIGATION SOLUTIONS</h2>
      <ul>
        <li><NavLink href="/#" linkText="Advaclip" /></li>
      </ul>
    </div>
  );
}