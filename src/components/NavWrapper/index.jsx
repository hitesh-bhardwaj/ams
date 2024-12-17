import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';

import ProductsMenu from './ProductsMenu';
import WoundCareMenu from './WoundCareMenu';
import EndoSurgeryMenu from './EndoSurgeryMenu';
import ManufacturingMenu from './ManufacturingMenu';
import { NavLink, NavButton } from './NavLink';

export default function NavWrapper() {
    const [currentMenu, setCurrentMenu] = useState(null); // Start with no submenu open
    const submenuContainerRef = useRef(null);

    // Animate the submenu container whenever currentMenu changes
    useEffect(() => {
        const container = submenuContainerRef.current;
        if (currentMenu) {
            // Animate in
            gsap.fromTo(
                container,
                { x: 100, autoAlpha: 0 },
                { x: 0, autoAlpha: 1, duration: 0.5, ease: 'power3.out' }
            );
        } else {
            // If you want to animate out when no menu is selected
            gsap.to(container, {
                x: 100,
                autoAlpha: 0,
                duration: 0.5,
                ease: 'power3.in'
            });
        }
    }, [currentMenu]);

    const goToMenu = (menuName) => setCurrentMenu(menuName);

    return (
        <div className="nav-wrapper" style={{ display: 'flex', position: 'relative', overflow: 'hidden' }}>
            <MainNav onSelectMenu={goToMenu} />
            <div ref={submenuContainerRef} style={{ flex: '1', padding: '1rem', position: 'relative' }}>
                {currentMenu === 'products' && (
                    <ProductsMenu onBack={() => goToMenu(null)} onSelectMenu={goToMenu} />
                )}
                {currentMenu === 'manufacturing' && (
                    <ManufacturingMenu onBack={() => goToMenu(null)} />
                )}
                {currentMenu === 'wound-care' && (
                    <WoundCareMenu onBack={() => goToMenu('products')} />
                )}
                {currentMenu === 'endo-surgery' && (
                    <EndoSurgeryMenu onBack={() => goToMenu('products')} />
                )}
            </div>
        </div>
    );
}

function MainNav({ onSelectMenu }) {
    return (
        <nav className="main-nav">
            <ul className='flex flex-col'>
                <li>
                    <NavLink href={"/"} linkText="Homepage" />
                </li>
                <li>
                    <NavLink href={"/about"} linkText="About Us" />
                </li>
                <li>
                    <NavButton onClick={() => onSelectMenu('products')} linkText="Products" />
                </li>
                <li>
                    <NavButton onClick={() => onSelectMenu('manufacturing')} linkText="Manufacturing" />
                </li>
                <li>
                    <NavLink href={"/careers"} linkText="Careers" />
                </li>
                <li>
                    <NavLink href={"/blogs"} linkText="Latest News" />
                </li>
                <li>
                    <NavLink href={"/contact-us"} linkText="Contact Us" />
                </li>
                <li>
                    <NavLink href={"/advanced-medtech-academy"} linkText="Advanced Medtech Academy" />
                </li>
            </ul>
        </nav>
    );
}
