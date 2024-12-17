import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

export default function EndoSurgeryMenu({ onBack }) {
  const menuRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(menuRef.current, { x: 100, autoAlpha: 0 }, { x: 0, autoAlpha: 1, duration: 0.5 });
  }, []);

  return (
    <div className="submenu" ref={menuRef}>
      <div className="submenu-header">
        <button className="back-button" onClick={onBack}>Back</button>
        <h2>Endo Surgery Products</h2>
      </div>
      <ul>
        <li><a href="/products/wound-care/product1">Endo Surgery Product 1</a></li>
        <li><a href="/products/wound-care/product2">Endo Surgery Product 2</a></li>
        <li><a href="/products/wound-care/product3">Endo Surgery Product 3</a></li>
      </ul>
    </div>
  );
}
