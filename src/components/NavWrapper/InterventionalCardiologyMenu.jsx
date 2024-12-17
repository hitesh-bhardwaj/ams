import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { NavLink } from './NavLink';

export default function InterventionalCardiologyMenu({ onBack }) {
  const menuRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(menuRef.current, { x: 100, autoAlpha: 0 }, { x: 0, autoAlpha: 1, duration: 0.5 });
  }, []);

  return (
    <div className="submenu" ref={menuRef}>
      <div className="submenu-header">
        <button className="back-button" onClick={onBack}>Back</button>
      </div>
            <ul>
              <li><NavLink href="/advaglide" linkText="Adva Glide" /></li>
              <li><NavLink href="/advapro" linkText="Adva Pro" /></li>
              <li><NavLink href="/accessories" linkText="Coronary Accessories" /></li>
            </ul>
    </div>
  );
}
