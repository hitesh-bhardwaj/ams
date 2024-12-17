import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { NavLink } from './NavLink';

export default function EndoSurgeryMenu({ onBack }) {
  const menuRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(menuRef.current, { x: 100, autoAlpha: 0 }, { x: 0, autoAlpha: 1, duration: 0.5 });
  }, []);

  return (
    <div className="submenu" ref={menuRef}>
      <div className="submenu-header">
        <button className="back-button" onClick={onBack}>Back</button>
        <h2>ADVASTAP</h2>
      </div>
            <ul>
              <li><NavLink href="/advastaphd" linkText="HemorrhoidStapler" /></li>
              <li><NavLink href="/advastaplc" linkText="Linear Cutter" /></li>
              <li><NavLink href="/skinstapler" linkText="Skin Stapler" /></li>
              <li><NavLink href="/endolc" linkText="Endoscopic Linear Cutter" /></li>
              <li><NavLink href="/poweredlc" linkText="Powered Linear Cutter" /></li>
              <li><NavLink href="/advastapcs" linkText="Circular Stapler" /></li>
              <li><NavLink href="/reloads" linkText="Endoscopic Reloads" /></li>
            </ul>
             <h2>LIGATION SOLUTIONS</h2>
                  <ul>
                    <li><NavLink href="/#" linkText="Advaclip" /></li>
                    </ul>
    </div>
  );
}
