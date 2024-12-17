import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { NavLink } from './NavLink';

export default function HerniaSolutionsMenu({ onBack }) {
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
              <li><NavLink href="/advamesh" linkText="Advamesh" /></li>
              <li><NavLink href="/advamesh" linkText="Advamesh Mid Weight" /></li>
              <li><NavLink href="/advamesh" linkText="Advamesh Macroporous" /></li>
            </ul>
    </div>
  );
}
