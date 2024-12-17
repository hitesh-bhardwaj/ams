import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { NavButton } from './NavLink';

export default function ProductsMenu({ onBack, onSelectMenu }) {
  const menuRef = useRef(null);

  useEffect(() => {
    const links = menuRef.current.querySelectorAll("li");
    gsap.fromTo(links, { yPercent: 100, autoAlpha: 0 }, { yPercent: 0, autoAlpha: 1, duration: 0.5, stagger: 0.05 });
  }, []);

  return (
    <div className="submenu" ref={menuRef}>
      <div className="submenu-header">
        <button className="back-button" onClick={onBack}>Back</button>
        <h2>Products</h2>
      </div>
      <ul>
        <li><NavButton linkText="Wound Care" onClick={() => onSelectMenu('wound-care')}/></li>
        <li><NavButton linkText="Endo Surgery" onClick={() => onSelectMenu('endo-surgery')}/></li>
        <li><NavButton linkText="Hernia Solutions" onClick={() => onSelectMenu('hernia')}/></li>
        <li><NavButton linkText="Interventional Cardiology" onClick={() => onSelectMenu('interventional-cardio')}/></li>
        <li><NavButton linkText="Cardiac Surgery" onClick={() => onSelectMenu('cardiac-surgery')}/></li>
      </ul>
    </div>
  );
}
